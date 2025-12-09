#!/bin/bash
set -e

# 1. Install dependencies
echo "Installing dependencies..."
npm install

# 2. Build the TS code
echo "Building Lambda function..."
npm run build

# 3. Create the ZIP file
echo "Creating deployment package..."
cd dist
zip -r ../function.zip index.js

echo "✅ Done! Deployment package created at: lambda/function.zip"