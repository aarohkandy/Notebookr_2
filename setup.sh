#!/bin/bash

# Setup script for Notebookr_2
# This script will set up git and install dependencies

set -e

echo "🚀 Setting up Notebookr_2 project..."

# Check for git
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install it with:"
    echo "   sudo apt install git"
    exit 1
fi

# Check for node
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it with:"
    echo "   sudo apt install nodejs npm"
    exit 1
fi

# Initialize git repository if not already initialized
if [ ! -d .git ] || ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "📦 Initializing git repository..."
    git init
    git branch -M main
    git remote add origin https://github.com/idkwhatitshouldbeman/Notebookr_2.git || git remote set-url origin https://github.com/idkwhatitshouldbeman/Notebookr_2.git
fi

# Add all files to git
echo "📝 Adding files to git..."
git add .

# Check if there are any changes to commit
if ! git diff --staged --quiet || [ -z "$(git status --porcelain)" ]; then
    echo "💾 Creating initial commit..."
    git commit -m "Initial commit from local setup" || echo "No changes to commit"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo "✅ Setup complete!"
echo ""
echo "To test the project, you can run:"
echo "  npm run dev    # Start development server"
echo ""
echo "To push changes back to GitHub:"
echo "  git add ."
echo "  git commit -m 'Your commit message'"
echo "  git push origin main"

