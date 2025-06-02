#!/bin/bash

# Test script to verify theme setup
echo "🐱 Cat Theme Test Script"
echo "========================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Run this from the cat-theme directory."
    exit 1
fi

echo "✅ Found package.json"

# Check if theme file exists
if [ ! -f "themes/cat-theme-color-theme.json" ]; then
    echo "❌ Error: Theme file not found at themes/cat-theme-color-theme.json"
    exit 1
fi

echo "✅ Found theme file"

# Check if VS Code workspace settings exist
if [ ! -f ".vscode/launch.json" ]; then
    echo "❌ Error: VS Code launch configuration not found"
    exit 1
fi

echo "✅ Found VS Code configuration"

# Validate JSON files
echo "🔍 Validating JSON files..."

# Check package.json
if ! python3 -m json.tool package.json > /dev/null 2>&1; then
    echo "❌ package.json has invalid JSON"
    exit 1
fi
echo "✅ package.json is valid JSON"

# Check theme file
if ! python3 -m json.tool themes/cat-theme-color-theme.json > /dev/null 2>&1; then
    echo "❌ Theme file has invalid JSON"
    exit 1
fi
echo "✅ Theme file is valid JSON"

echo ""
echo "🎉 All checks passed! Your theme should work."
echo ""
echo "📝 To test the theme:"
echo "1. Open this project in VS Code"
echo "2. Press F5 to launch Extension Development Host"
echo "3. In the new window: Cmd+K Cmd+T"
echo "4. Select 'Cat Theme' from the list"
echo ""
echo "If the theme doesn't appear, try reloading VS Code (Cmd+R) in the Extension Development Host window."
