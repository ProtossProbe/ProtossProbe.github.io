#!/bin/bash
# Script to build Jekyll site and deploy to GitHub Pages

# Exit if any command fails
set -e

echo "Building Jekyll site with Jekyll 4.3.4..."
JEKYLL_ENV=production bundle exec jekyll build

echo "Preparing for GitHub Pages deployment..."
# If you're using a docs/ folder on GitHub, copy _site content to docs/
# Uncomment this if you're deploying to docs/ folder on GitHub Pages
# rm -rf docs/
# cp -r _site/ docs/

# If you're pushing the _site directory directly, you can just commit all changes
# git add .
# git commit -m "Update site - $(date)"
# git push origin main

echo "Done! You can now:"
echo "1. Commit and push the changes (including _site directory) to GitHub"
echo "2. OR copy the _site directory contents to your preferred deployment location"
echo ""
echo "Note: Make sure your GitHub Pages settings are configured to serve from the correct location"
