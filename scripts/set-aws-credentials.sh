#!/bin/bash

# Check if AWS credentials are already set
if [[ -n "$AWS_ACCESS_KEY_ID" && -n "$AWS_SECRET_ACCESS_KEY" && -n "$AWS_REGION" ]]; then
  echo "✅ AWS credentials already set"
  exit 0
fi

# Load .env into environment variables
set -a
echo "📝 Loading AWS credentials from .env file..."
source .env
set +a

# Optional: Check that required variables are set
if [[ -z "$AWS_ACCESS_KEY_ID" || -z "$AWS_SECRET_ACCESS_KEY" || -z "$AWS_REGION" ]]; then
  echo "❌ AWS credentials not set in .env"
  exit 1
fi

echo "✅ AWS credentials loaded successfully"