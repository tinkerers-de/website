# Tinkerers

Community/Plattform von Michael Heide und Levin Keller. Thema: KI/AI in der Softwareentwicklung.
Tinkerers ist die Dachmarke. Der Podcast ist ein Projekt darunter.

## Tech-Stack

- **Framework**: Astro 5 (Static) mit MDX, Tailwind CSS v4, daisyUI v5
- **Hosting**: Cloudflare Pages (Static Build)
- **CDN**: Backblaze B2 via Cloudflare Proxy Worker (Bandwidth Alliance = 0€ Egress)
- **Domain**: tinkerers.de (Webseite), cdn.tinkerers.de (Audio/Bilder-CDN)
- **Linter/Formatter**: Biome (Tabs, 100 Zeichen)
- **Git LFS**: Audio-Dateien via custom LFS Proxy (git-lfs.tinkerers.de) → Backblaze B2

## URL-Struktur

```
/                              → Landing Page (Tinkerers, Projekte, Mitmachen)
/podcast/                      → Episodenliste
/podcast/NNN-slug              → Episode-Detailseite
/podcast/feed.xml              → RSS Feed
/impressum                     → Impressum
```

Alles Podcast-bezogene ist unter `/podcast/` gescoped.
CDN-Pfade ebenfalls: `cdn.tinkerers.de/podcast/cover-3000.jpg`, `cdn.tinkerers.de/episodes/NNN/...`

## Verzeichnisstruktur

```
website/                    # Astro Website
  src/pages/                # index.astro (Landing), podcast/, impressum
  src/components/           # AudioPlayer, ChapterList, EpisodeCard, Navbar, Footer, CopyFeedUrl
  src/content/episodes/     # MDX-Dateien mit Metadaten + Show Notes
  src/layouts/              # Layout.astro (SEO, OG, JSON-LD)
  public/                   # Statische Assets (cover-512.jpg, og.jpg)
episodes/NNN/               # Pro Episode: raw/, master.flac, encoded/, transcript.md
artwork/                    # Podcast-Cover Originale + Mood Board
scripts/                    # encode-episode.sh, transcribe.sh, upload-to-b2.sh, import-labels.sh
workers/b2-proxy/           # Cloudflare Worker für B2 CDN Proxy
```

## Audio-Formate

| Format | Bitrate | Codec | Zweck |
|--------|---------|-------|-------|
| MP3    | 192 kbps | LAME | Breiteste Kompatibilität, RSS Enclosure |
| M4A    | 128 kbps | AAC  | Apple-freundlich |
| Opus   | 96 kbps  | Opus | Moderne Clients, beste Qualität/Größe |

## Episode-Workflow

1. Raw FLAC aufnehmen (48kHz, 16-bit, Mono)
2. Audacity: Synchronisieren, Schneiden, Normalisieren (-16 LUFS), Chapter-Labels
3. `./scripts/encode-episode.sh NNN` - Master FLAC → MP3/AAC/Opus
4. `./scripts/transcribe.sh NNN` - OpenAI Whisper Transkription
5. `./scripts/upload-to-b2.sh NNN` - Encoded Files → Backblaze B2
6. `./scripts/import-labels.sh NNN` - Audacity Labels → YAML Chapters
7. Episode MDX schreiben → PR → Merge → Auto-Deploy

## Konventionen

- Sprache: Deutsch (Content + Docs), Englisch (Code + Config)
- Episode-Nummern: Dreistellig mit führenden Nullen (001, 002, ...)
- Encoded Audio liegt NICHT im Git (in .gitignore), wird zu B2 hochgeladen
- Raw + Master FLAC liegen in Git LFS
- Große Bilder (Cover 3000px) auf CDN, kleine (512px, OG) in public/
- Content Collection Schema: `src/content/config.ts`

## Commands

```bash
npm run dev          # Lokale Entwicklung
npm run build        # Astro Build
npm run check        # Astro Check + Biome Check
npm run format       # Biome Format
npm run deploy       # Cloudflare Workers Deploy
```

## Umgebungsvariablen (.env)

Siehe `.env.example` für benötigte Keys:
- `OPENAI_API_KEY` - Whisper Transkription
- `B2_KEY_ID`, `B2_APPLICATION_KEY`, `B2_BUCKET_NAME` - Backblaze B2 CDN
- `LFS_KEY_ID`, `LFS_APP_KEY`, `LFS_PROXY_URL` - Git LFS Backend
