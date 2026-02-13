#!/usr/bin/env bash
set -euo pipefail

EPISODE="${1:?Usage: upload-to-b2.sh <episode-number, e.g. 001>}"
ENCODED_DIR="episodes/${EPISODE}/encoded"

if [ ! -d "$ENCODED_DIR" ]; then
	echo "Error: ${ENCODED_DIR} not found. Run encode-episode.sh first."
	exit 1
fi

: "${B2_KEY_ID:?Set B2_KEY_ID}"
: "${B2_APPLICATION_KEY:?Set B2_APPLICATION_KEY}"
: "${B2_BUCKET_NAME:?Set B2_BUCKET_NAME}"

echo "==> Authorizing with Backblaze B2..."
AUTH_RESPONSE=$(curl -s "https://api.backblazeb2.com/b2api/v2/b2_authorize_account" \
	-u "${B2_KEY_ID}:${B2_APPLICATION_KEY}")

API_URL=$(echo "$AUTH_RESPONSE" | grep -o '"apiUrl":"[^"]*"' | cut -d'"' -f4)
AUTH_TOKEN=$(echo "$AUTH_RESPONSE" | grep -o '"authorizationToken":"[^"]*"' | cut -d'"' -f4)

echo "==> Getting upload URL..."
BUCKET_RESPONSE=$(curl -s -X POST "${API_URL}/b2api/v2/b2_list_buckets" \
	-H "Authorization: ${AUTH_TOKEN}" \
	-d "{\"accountId\":\"$(echo "$AUTH_RESPONSE" | grep -o '"accountId":"[^"]*"' | cut -d'"' -f4)\",\"bucketName\":\"${B2_BUCKET_NAME}\"}")

BUCKET_ID=$(echo "$BUCKET_RESPONSE" | grep -o '"bucketId":"[^"]*"' | head -1 | cut -d'"' -f4)

UPLOAD_RESPONSE=$(curl -s -X POST "${API_URL}/b2api/v2/b2_get_upload_url" \
	-H "Authorization: ${AUTH_TOKEN}" \
	-d "{\"bucketId\":\"${BUCKET_ID}\"}")

UPLOAD_URL=$(echo "$UPLOAD_RESPONSE" | grep -o '"uploadUrl":"[^"]*"' | cut -d'"' -f4)
UPLOAD_TOKEN=$(echo "$UPLOAD_RESPONSE" | grep -o '"authorizationToken":"[^"]*"' | cut -d'"' -f4)

for file in "${ENCODED_DIR}"/episode-${EPISODE}.*; do
	FILENAME="episodes/${EPISODE}/$(basename "$file")"
	SHA1=$(sha1sum "$file" | awk '{print $1}')
	MIME=$(file --mime-type -b "$file")
	echo "==> Uploading ${FILENAME} (${MIME})..."
	curl -s -X POST "$UPLOAD_URL" \
		-H "Authorization: ${UPLOAD_TOKEN}" \
		-H "X-Bz-File-Name: ${FILENAME}" \
		-H "Content-Type: ${MIME}" \
		-H "X-Bz-Content-Sha1: ${SHA1}" \
		--data-binary "@${file}" > /dev/null
	echo "    https://cdn.tinkerers.de/${FILENAME}"
done

echo "==> Upload complete!"
