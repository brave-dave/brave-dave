#!/bin/bash

# Get the latest tag (if any)
LAST_TAG=$(git describe --tags --abbrev=0 2>/dev/null)

# If no tag found, use initial commit
if [ -z "$LAST_TAG" ]; then
    RANGE=$(git rev-list --max-parents=0 HEAD)..HEAD
else
    RANGE="$LAST_TAG..HEAD"
fi

# Get the commit log with full messages
git log $RANGE --no-merges --pretty=format:"%nCommit: %h%nAuthor: %an <%ae>%nDate: %ad%n%n%s%n%b%n----------------------------------------"
