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
  src/components/           # AudioPlayer, ChapterList, EpisodeCard, Navbar, Footer
                            # CopyFeedUrl, PodcastLinks
  src/content/episodes/     # MDX-Dateien mit Metadaten + Show Notes
  src/layouts/              # Layout.astro (SEO, OG, JSON-LD)
  src/styles/               # global.css (Tailwind, daisyUI Themes, Fonts)
  public/                   # Statische Assets (cover-512.jpg, og.jpg, favicon)
b2-proxy/                   # Cloudflare Worker für B2 CDN Proxy
episodes/NNN/               # Pro Episode: raw/, master.flac, encoded/, transcript.md
artwork/                    # Podcast-Cover Originale + Mood Board
scripts/                    # encode-episode.sh, transcribe.sh, upload-to-b2.sh, import-labels.sh
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

## Episode-Frontmatter

```yaml
number: 1
title: "Titel"
date: 2026-02-12
description: "Kurzbeschreibung für RSS + OG"
duration: "01:06:20"
audio:
  mp3: { url: "https://cdn.tinkerers.de/episodes/NNN/episode-NNN.mp3", size: 12345678 }
  m4a: { url: "https://cdn.tinkerers.de/episodes/NNN/episode-NNN.m4a", size: 12345678 }
  opus: { url: "https://cdn.tinkerers.de/episodes/NNN/episode-NNN.opus", size: 12345678 }
chapters:
  - time: "00:00:00"
    title: "Intro"
tags:
  - AI-Coding
  - Claude Code
  - Softwareentwicklung
hosts:
  - "Michael Heide"
  - "Levin Keller"
```

Tags werden als `<itunes:keywords>` in den RSS Feed geschrieben und als Badges auf der Detailseite angezeigt.

## Podcast-Distribution

- **Apple Podcasts**: podcasters.apple.com (ID: 1877323593)
- **Spotify**: open.spotify.com/show/4iIN9c6LIYrLBHcw5JkTKq
- **Amazon Music**: music.amazon.de/podcasts/6ab4f722-891d-4a51-b25a-1ab831bd962a
- **Podcast Index**: podcastindex.org (automatisch: Deezer, Samsung, Pocket Casts, Overcast, Castro)
- **YouTube Music**: Ausstehend (Google ID-Check)

## Cover Art

- **Original**: `artwork/podcast-cover.png` (1024x1024, ChatGPT/DALL-E)
- **Upscale**: `artwork/podcast-cover-4096.png` (4096x4096, Upscayl)
- **CDN**: `cdn.tinkerers.de/podcast/cover-3000.jpg` (3000x3000, für RSS/Apple/Spotify)
- **Website**: `public/cover-512.jpg` (512x512), `public/og.jpg` (1200x630)
- **Favicon**: `public/favicon.ico` (32x32), aus `artwork/tinkerers-logo.png`
- **Mood Board**: `artwork/mood.md` (The Incredible Machine-Inspiration)

## Konventionen

- Sprache: Deutsch (Content + Docs), Englisch (Code + Config)
- Episode-Nummern: Dreistellig mit führenden Nullen (001, 002, ...)
- Encoded Audio liegt NICHT im Git (in .gitignore), wird zu B2 hochgeladen
- Raw + Master FLAC liegen in Git LFS
- Große Bilder (Cover 3000px) auf CDN, kleine (512px, OG) in public/
- Content Collection Schema: `src/content/config.ts`
- daisyUI-Komponenten bevorzugen, kein custom CSS wenn daisyUI es kann
- **Client-Side JS: Nur Custom Web Components** (`customElements.define` + `connectedCallback`). Kein `querySelectorAll`, kein `document.addEventListener`, kein jQuery-Style DOM-Scripting. Siehe Astro Docs: https://docs.astro.build/en/guides/client-side-scripts/#web-components-with-custom-elements

## B2 CDN Upload

Für Dateien die auf den CDN sollen (Audio, große Bilder):
```bash
# Episode-Audio
./scripts/upload-to-b2.sh NNN

# Einzelne Datei: B2 API direkt (siehe scripts/upload-to-b2.sh als Referenz)
# Pfad-Konvention: episodes/NNN/... oder podcast/...
```

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
