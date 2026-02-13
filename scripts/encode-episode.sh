#!/usr/bin/env bash
set -euo pipefail

EPISODE="${1:?Usage: encode-episode.sh <episode-number, e.g. 001>}"
BASE_DIR="episodes/${EPISODE}"
MASTER="${BASE_DIR}/master.flac"

if [ ! -f "$MASTER" ]; then
	echo "Error: ${MASTER} not found."
	exit 1
fi

OUT_DIR="${BASE_DIR}/encoded"
mkdir -p "$OUT_DIR"

echo "==> Encoding MP3 (192 kbps)..."
ffmpeg -y -i "$MASTER" \
	-codec:a libmp3lame -b:a 192k -ar 44100 \
	"${OUT_DIR}/episode-${EPISODE}.mp3"

echo "==> Encoding AAC (128 kbps)..."
ffmpeg -y -i "$MASTER" \
	-codec:a aac -b:a 128k -ar 44100 \
	"${OUT_DIR}/episode-${EPISODE}.m4a"

echo "==> Encoding Opus (96 kbps)..."
ffmpeg -y -i "$MASTER" \
	-codec:a libopus -b:a 96k -ar 48000 \
	"${OUT_DIR}/episode-${EPISODE}.opus"

echo ""
echo "==> Done! Encoded files:"
for f in "${OUT_DIR}"/episode-${EPISODE}.*; do
	SIZE=$(stat -f%z "$f" 2>/dev/null || stat -c%s "$f" 2>/dev/null)
	echo "  ${f} (${SIZE} bytes)"
done
