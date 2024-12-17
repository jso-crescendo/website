#!/bin/bash

SITEMAP_URL="https://jso-crescendo.ch/sitemap.xml"
INDEXNOW_API_URL="https://api.indexnow.org/IndexNow"
HOST="jso-crescendo.ch"
KEY="42ecdcaf3bad4a79a1b80c8496fafd19"
KEY_LOCATION="https://${HOST}/${KEY}.txt"

# Fetch sitemap
curl -o sitemap.xml $SITEMAP_URL

# Extract URLs from sitemap
URLS=$(grep '<loc>' sitemap.xml | sed -e 's/<loc>//' -e 's/<\/loc>//' | sed -e 's/^/"/' -e 's/$/"/' | paste -sd, -)

echo "$URLS"

# Create JSON payload
PAYLOAD=$(cat <<EOF
{
  "host": "$HOST",
  "key": "$KEY",
  "keyLocation": "$KEY_LOCATION",
  "urlList": [${URLS}]
}
EOF
)

# Print the payload to the console
echo "Payload to be sent to IndexNow:"
echo "$PAYLOAD"

# Submit URLs to IndexNow
curl -v -X POST $INDEXNOW_API_URL \
     -H "Content-Type: application/json; charset=utf-8" \
     -d "$PAYLOAD"

# Clean up
rm sitemap.xml