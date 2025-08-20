#!/bin/bash

echo "Deploying to Vercel (Production)..."
echo "Current branch: $(git branch --show-current)"

# Check if we're on main branch
if [ "$(git branch --show-current)" != "main" ]; then
    echo "Error: Not on main branch. Please switch to main branch first."
    exit 1
fi

# Push changes to GitHub
git push origin main

# Build the project
echo "Building project..."
npm run build

# Deploy to Vercel
echo "Deploying to Vercel..."
npx vercel --prod

echo "Deployment complete!"
