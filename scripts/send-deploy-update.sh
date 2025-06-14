#!/bin/bash

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Load .env if it exists
if [ -f ".env" ]; then
    echo "📝 Loading environment variables from .env"
    set -a
    source ".env"
    set +a
fi

# Required environment variables
: "${WAAPI_TOKEN:?❌ WAAPI_TOKEN environment variable is not set}"
: "${WAAPI_INSTANCE_ID:?❌ WAAPI_INSTANCE_ID environment variable is not set}"
: "${WAAPI_UPDATES_CHAT_ID:?❌ WAAPI_UPDATES_CHAT_ID environment variable is not set}"

# Check for jq
command -v jq >/dev/null || { echo "❌ jq is not installed. Please install it."; exit 1; }

# Get version
VERSION=$(jq -r '.version' "package.json")
: "${VERSION:?❌ Could not read version from package.json}"

echo "📦 Using version: ${VERSION}"

# Replace values inside the JSON payload file before sending
PAYLOAD_FILE="$SCRIPT_DIR/payload.json"

if [ ! -f "$PAYLOAD_FILE" ]; then
    echo "❌ Error: payload.json not found in script directory"
    exit 1
fi

jq \
  --arg id "$WAAPI_INSTANCE_ID" \
  --arg chatId "$WAAPI_UPDATES_CHAT_ID" \
  --arg caption "🚀 Aggiornamento Applicazione: AutoBrain Demo\n\n📦 ${VERSION}\n🔗 autobrain.apps.bravedave.com/aggiornamenti" \
  '.id = $id | .chatId = $chatId | .mediaCaption = $caption' \
  "$PAYLOAD_FILE" | curl --request POST \
     --url https://waapi.app/api/v1/instances/id/client/action/send-media \
     --header 'accept: application/json' \
     --header "authorization: Bearer ${WAAPI_TOKEN}" \
     --header 'content-type: application/json' \
     --data @-
