#!/usr/bin/env bash
set -euo pipefail

EPISODE="${1:?Usage: import-labels.sh <episode-number, e.g. 001>}"
LABELS="episodes/${EPISODE}/labels.txt"

if [ ! -f "$LABELS" ]; then
	echo "Error: ${LABELS} not found."
	exit 1
fi

echo "chapters:"

while IFS=$'\t' read -r start _end title; do
	# Convert seconds (float) to HH:MM:SS
	total_seconds=$(printf "%.0f" "$start")
	hours=$((total_seconds / 3600))
	minutes=$(( (total_seconds % 3600) / 60 ))
	seconds=$((total_seconds % 60))
	time=$(printf "%02d:%02d:%02d" "$hours" "$minutes" "$seconds")

	echo "  - time: \"${time}\""
	echo "    title: \"${title}\""
done < "$LABELS"
