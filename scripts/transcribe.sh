#!/usr/bin/env bash
set -euo pipefail

EPISODE="${1:?Usage: transcribe.sh <episode-number, e.g. 001>}"
BASE_DIR="episodes/${EPISODE}"
ENCODED_DIR="${BASE_DIR}/encoded"
AUDIO="${ENCODED_DIR}/episode-${EPISODE}.mp3"

if [ ! -f "$AUDIO" ]; then
	echo "Error: ${AUDIO} not found. Run encode-episode.sh first."
	exit 1
fi

if [ -z "${OPENAI_API_KEY:-}" ]; then
	echo "Error: OPENAI_API_KEY is not set."
	exit 1
fi

OUT="${BASE_DIR}/transcript.json"

echo "==> Transcribing ${AUDIO} via Whisper API..."
curl -s -X POST "https://api.openai.com/v1/audio/transcriptions" \
	-H "Authorization: Bearer ${OPENAI_API_KEY}" \
	-F "file=@${AUDIO}" \
	-F "model=whisper-1" \
	-F "language=de" \
	-F "response_format=verbose_json" \
	-F "timestamp_granularities[]=segment" \
	-o "$OUT"

echo "==> Transcript saved to ${OUT}"
