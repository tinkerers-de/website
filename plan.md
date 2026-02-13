# Tinkerers Podcast - Projektplan

> Zwei Softwareentwickler, Michael Heide und Levin Keller, reden ueber KI/AI.
> Alles Git-basiert: Branch = Arbeit an Episode, Merge = Release.

## Tech-Stack

| Komponente | Technologie |
|---|---|
| Webseite | Astro (SSR auf Cloudflare Workers) |
| Styling | Tailwind CSS |
| Linter/Formatter | Biome |
| Hosting | Cloudflare Workers (`wrangler.toml`) |
| Medien-CDN | Backblaze B2 via Cloudflare Proxy (Bandwidth Alliance) |
| Domain | tinkerers.de |
| Audio-Formate | MP3 (192 kbps), AAC (128 kbps), Opus (96 kbps) |
| Transkription | OpenAI Whisper API |
| Podcast-Feed | RSS mit iTunes + Podcasting 2.0 Namespaces |
| Git LFS | Backblaze B2 Backend (eigenes Repo, spaeter) |

---

## Verzeichnisstruktur

```
/
├── .devcontainer.json          # DevContainer mit ffmpeg etc.
├── .gitattributes              # LFS-Tracking fuer FLAC/M4A
├── .env.example                # API-Key Platzhalter
├── wrangler.toml               # Cloudflare Workers Config
├── astro.config.mjs
├── package.json
├── plan.md                     # Dieser Plan
│
├── episodes/                   # Audio-Quelldateien (LFS-getrackt)
│   └── 001/
│       ├── raw/
│       │   ├── michael.m4a     # Michaels Aufnahme
│       │   └── levin.flac      # Levins Aufnahme
│       ├── labels.txt          # Audacity Label-Export (Chapters)
│       └── master.flac         # Gemergter Lossless-Master
│
├── scripts/
│   ├── encode-episode.sh       # FLAC → MP3 + AAC + Opus
│   ├── transcribe.sh           # Whisper API Transkription
│   └── upload-to-b2.sh         # Upload auf Backblaze B2
│
├── src/
│   ├── content/
│   │   ├── config.ts           # Content Collection Schema
│   │   └── episodes/
│   │       └── 001.mdx         # Episode-Metadaten + Show Notes
│   ├── pages/
│   │   ├── index.astro         # Startseite
│   │   ├── episodes/
│   │   │   └── [...slug].astro # Episode-Einzelseite
│   │   └── feed.xml.ts         # Podcast RSS-Feed
│   ├── layouts/
│   │   └── Layout.astro
│   └── components/
│       ├── AudioPlayer.astro   # HTML5 Player mit Format-Fallback
│       ├── EpisodeCard.astro   # Episode-Vorschau
│       └── ChapterList.astro   # Kapitel-Navigation
│
└── workers/
    └── b2-proxy/               # Cloudflare Worker fuer B2
        ├── wrangler.toml
        └── src/index.ts
```

---

## Audio-Workflow pro Episode

### Schritt 1: Manuell in Audacity (Levin)

Detaillierte Anleitung:

1. **Beide Spuren importieren**
   - Datei → Importieren → Audio...
   - Erst `levin.flac`, dann `michael.m4a` importieren
   - Beide erscheinen als separate Spuren

2. **Clap synchronisieren**
   - In beiden Spuren den Klatscher suchen (sichtbar als kurzer, lauter Amplitude-Spike)
   - Mit dem Auswahlwerkzeug (F1) den Klatscher in einer Spur genau anklicken
   - Stark reinzoomen (Ctrl+Mausrad) um die Spike-Spitze zu finden
   - Die spaetere Spur mit dem Zeitverschiebungswerkzeug (F5) verschieben,
     bis beide Klatscher-Spikes genau uebereinander liegen
   - Abspielen und pruefen ob der Klatscher nur einmal zu hoeren ist (nicht als Echo)

3. **Schneiden**
   - Anfang vor dem Intro abschneiden (alles vor "Hallo" etc.)
   - Ende nach dem Outro abschneiden
   - Auswahl markieren → Bearbeiten → Auswahl entfernen
   - TIPP: Am Anfang und Ende ein kurzes Fade-In/Out setzen (Effekt → Ein-/Ausblenden)

4. **Normalisieren**
   - Beide Spuren auswaehlen (Ctrl+A)
   - Effekt → Lautstaerke-Normalisierung (Loudness Normalization)
   - Ziel: -16 LUFS (Podcast-Standard)
   - Alternativ: Effekt → Normalisieren → Spitzenamplitude auf -1.0 dB

5. **Chapter-Labels setzen**
   - Beim Durchhoeren an wichtigen Stellen: Ctrl+B druecken
   - Label-Name eingeben (z.B. "Intro", "Thema: ChatGPT", "Outro")
   - Labels koennen nachtraeglich verschoben/umbenannt werden

6. **Labels exportieren**
   - Datei → Exportieren → Labels exportieren...
   - Speichern als `episodes/001/labels.txt`
   - Format ist: `StartZeit\tEndZeit\tLabelName` (Tab-getrennt)

7. **Master exportieren**
   - Datei → Exportieren → Als FLAC exportieren...
   - Speichern als `episodes/001/master.flac`
   - Einstellungen: Level 5 Kompression, 48kHz, 16-bit

### Schritt 2: Automatisiert (Skripte)

```bash
# Episode encoden (FLAC → MP3 + AAC + Opus)
./scripts/encode-episode.sh 001

# Transkribieren via Whisper API
./scripts/transcribe.sh 001

# Auf Backblaze B2 hochladen
./scripts/upload-to-b2.sh 001
```

### Schritt 3: Content schreiben

Episode-MDX erstellen/editieren mit:
- Metadaten (Titel, Datum, Beschreibung)
- Audio-URLs (werden vom Upload-Skript ausgegeben)
- Chapters (werden automatisch aus `labels.txt` importiert)
- Show Notes und Links im Markdown-Body

### Schritt 4: Review + Release

```bash
npm run dev                  # Lokale Vorschau
# Im Browser pruefen: Seite, Player, Feed
git add && git commit
# PR erstellen, reviewen
# Merge → Cloudflare deployed automatisch
```

---

## Episode-MDX Format

```yaml
---
number: 1
title: "Erste Folge"
slug: "001-erste-folge"
date: 2026-02-12
description: "Michael und Levin sprechen ueber..."
duration: "01:07:40"
audio:
  mp3:
    url: "https://cdn.tinkerers.de/episodes/001/episode-001.mp3"
    size: 64800000
  m4a:
    url: "https://cdn.tinkerers.de/episodes/001/episode-001.m4a"
    size: 48600000
  opus:
    url: "https://cdn.tinkerers.de/episodes/001/episode-001.opus"
    size: 32400000
chapters:
  - time: "00:00:00"
    title: "Intro"
  - time: "00:05:23"
    title: "Thema: ChatGPT und Code"
    url: "https://example.com"
  - time: "00:35:10"
    title: "Thema: Lokale AI Modelle"
hosts:
  - "Michael Heide"
  - "Levin Keller"
---

## Show Notes

In dieser Folge sprechen wir ueber...

## Links

- [Beispiel-Ressource](https://example.com)
```

---

## RSS Podcast-Feed

Der Feed unter `https://tinkerers.de/feed.xml` enthaelt:

- Standard RSS 2.0 `<channel>` und `<item>` Elemente
- `<itunes:*>` Tags (Apple Podcasts Kompatibilitaet)
- `<podcast:*>` Tags (Podcasting 2.0)
- Podlove Simple Chapters pro Episode
- `<enclosure>` zeigt auf MP3 (breiteste Kompatibilitaet)
- Optional: Separate Feeds pro Format (`/feed-opus.xml`)

---

## Cloudflare Workers

### Haupt-Worker (Astro Site)
- Astro mit `@astrojs/cloudflare` Adapter
- Serviert HTML-Seiten + RSS-Feed
- Route: `tinkerers.de/*`

### B2 Media Proxy Worker
- Einfacher Proxy: Request → Backblaze B2
- Setzt `Content-Type`, `Content-Length`, Cache-Header
- Bandwidth Alliance = 0 EUR Egress-Kosten
- Route: `cdn.tinkerers.de/*` (oder Pfad-basiert)

---

## Umsetzungsreihenfolge

1. [x] Audio-Dateien analysieren
2. [ ] DevContainer aktualisieren (ffmpeg)
3. [ ] Astro-Projekt aufsetzen (init, Cloudflare Adapter, Tailwind, Biome)
4. [ ] Content Collection Schema + erste Episode MDX
5. [ ] Seiten bauen (Index, Episode-Seite, Audio-Player)
6. [ ] RSS Podcast-Feed
7. [ ] Audio-Encoding Skript
8. [ ] Labels-Import Skript (Audacity labels.txt → MDX chapters)
9. [ ] Transkriptions-Skript (Whisper API)
10. [ ] B2 Upload Skript
11. [ ] B2 Proxy Worker
12. [ ] Deployment-Pipeline (GitHub → Cloudflare)
13. [ ] Git LFS Setup (spaeter, eigenes Repo)

---

## Umgebungsvariablen (.env)

```bash
# OpenAI (Whisper Transkription)
OPENAI_API_KEY=sk-...

# Backblaze B2
B2_KEY_ID=...
B2_APPLICATION_KEY=...
B2_BUCKET_NAME=tinkerers-media

# Optional: Cloudflare
CF_ACCOUNT_ID=...
CF_API_TOKEN=...
```

---

## Offene Punkte

- [ ] Podcast-Cover/Artwork (min. 1400x1400px, benoetigt fuer RSS + Apple Podcasts)
- [ ] Backblaze B2 Bucket erstellen
- [ ] Cloudflare DNS fuer tinkerers.de einrichten
- [ ] Git LFS Proxy Repo von Levin integrieren
- [ ] Apple Podcasts / Spotify Anmeldung (nach erstem Release)

---

## Testen

- `npm run dev` bzw. `wrangler dev` fuer lokale Vorschau
- Im Browser pruefen: Startseite, Episode-Seite, Audio-Player
- RSS-Feed validieren mit: https://validator.w3.org/feed/ oder https://podba.se/validate/
- Audio-Dateien lokal abspielen (ffplay oder Browser)
