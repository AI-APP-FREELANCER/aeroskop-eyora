#!/bin/bash

# Warms the Next.js image-optimizer disk cache right after a deploy.
#
# Next.js resizes/re-encodes every unique (source image, width, quality)
# combination on the FIRST request for it, then caches the result. A prerendered
# page's HTML already lists the exact /_next/image URLs (and widths) it needs —
# this script reads those static HTML files, extracts every such URL, and curls
# each one against the locally-running app so the cache is already warm before
# a real visitor's browser asks for it.
#
# Usage: bash warm-image-cache.sh [port]

set -e

PORT="${1:-3001}"
BASE_URL="http://127.0.0.1:${PORT}"
HTML_DIR=".next/server/app"

if [ ! -d "$HTML_DIR" ]; then
    echo "⚠  $HTML_DIR not found — run this from the app directory after 'npm run build'"
    exit 1
fi

echo "Extracting /_next/image URLs referenced in prerendered pages..."
URLS=$(grep -rhoE '/_next/image\?[^"&[:space:]]*(&amp;[^"&[:space:]]*)*' "$HTML_DIR" \
    | sed 's/&amp;/\&/g' \
    | sort -u)

COUNT=$(echo "$URLS" | grep -c . || true)
echo "Found ${COUNT} unique image variants to warm."

i=0
while IFS= read -r path; do
    [ -z "$path" ] && continue
    i=$((i + 1))
    code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 "${BASE_URL}${path}")
    if [ "$code" != "200" ]; then
        echo "  [$i/$COUNT] ($code) $path"
    fi
done <<< "$URLS"

echo "✓ Image cache warm-up complete (${COUNT} variants requested)."
