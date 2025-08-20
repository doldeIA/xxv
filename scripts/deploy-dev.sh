#!/bin/bash

echo "Deploying to Vercel (Development)..."
echo "Current branch: $(git branch --show-current)"

# Check if we're on dev branch
if [ "$(git branch --show-current)" != "dev" ]; then
    echo "Error: Not on dev branch. Please switch to dev branch first."
    exit 1
fi

# Push changes to GitHub
git push origin dev

# Build the project
echo "Building project..."
npm run build

# Deploy to Vercel
echo "Deploying to Vercel..."
npx vercel

echo "Deployment complete!"
