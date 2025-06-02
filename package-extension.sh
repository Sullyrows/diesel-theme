#!/bin/bash

# Make sure vsce is installed
if ! command -v vsce &> /dev/null
then
    echo "vsce is not installed, installing..."
    npm install -g @vscode/vsce
fi

# Package the extension
vsce package

echo "Extension packaged successfully!"
