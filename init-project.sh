#!/bin/bash

# Initialize the project with npm
echo "Initializing Cat Theme project..."

# Install vsce for packaging
npm install -g @vscode/vsce

# Create the package-lock.json
npm install

echo "Project initialized successfully!"
echo "To generate preview files: npm run preview"
echo "To package the extension: npm run package"
echo "To test the extension: Press F5 in VS Code"
