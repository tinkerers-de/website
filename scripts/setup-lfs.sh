#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "${SCRIPT_DIR}/../.env"

: "${LFS_KEY_ID:?Set LFS_KEY_ID in .env}"
: "${LFS_APP_KEY:?Set LFS_APP_KEY in .env}"
: "${LFS_PROXY_URL:?Set LFS_PROXY_URL in .env}"

git config lfs.url "https://${LFS_KEY_ID}:${LFS_APP_KEY}@${LFS_PROXY_URL}/objects/batch"
echo "LFS configured: https://${LFS_KEY_ID}:***@${LFS_PROXY_URL}/objects/batch"
