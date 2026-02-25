#!/usr/bin/env bash
set -euo pipefail

echo "🚀 Notebookr environment setup"

if ! command -v node >/dev/null 2>&1; then
  echo "❌ Node.js is required but not installed."
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "❌ npm is required but not installed."
  exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🧩 Creating .env file (if missing)..."
npm run setup:env

echo "🔍 Validating required environment variables..."
if npm run env:check; then
  echo "✅ Environment is ready."
else
  echo "⚠️ Environment file exists, but required values are still missing."
  echo "   Fill .env and run: npm run env:check"
fi

echo ""
echo "Start development:"
echo "  npm run dev"

