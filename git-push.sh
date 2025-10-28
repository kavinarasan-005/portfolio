#!/bin/bash
# Quick Git Commit & Push Script
# Usage: ./git-push.sh "Your commit message"

# Check if commit message is provided
if [ -z "$1" ]; then
    echo "❌ Error: Please provide a commit message"
    echo "Usage: ./git-push.sh \"Your commit message\""
    exit 1
fi

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}📦 Staging all changes...${NC}"
git add .

echo -e "${BLUE}💾 Committing changes...${NC}"
git commit -m "$1"

echo -e "${BLUE}🚀 Pushing to GitHub...${NC}"
git push

echo -e "${GREEN}✅ Successfully pushed to GitHub!${NC}"
echo -e "${GREEN}View at: https://github.com/kavinarasan-005/portfolio${NC}"

