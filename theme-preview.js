// theme-preview.js
// A simple script that creates HTML files with code examples to showcase the theme

const fs = require('fs');
const path = require('path');

// Create preview directory if it doesn't exist
const previewDir = path.join(__dirname, 'preview');
if (!fs.existsSync(previewDir)) {
  fs.mkdirSync(previewDir);
}

// JavaScript sample
const jsSample = `// Cat Theme JavaScript Preview
function calculateFibonacci(n) {
  if (n <= 1) return n;
  
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  
  return fib[n];
}

class ColorManager {
  constructor(primaryColor) {
    this.primaryColor = primaryColor;
    this.palette = new Map();
  }
  
  addColor(name, hexValue) {
    this.palette.set(name, hexValue);
    return this;
  }
  
  getColor(name) {
    return this.palette.get(name) || this.primaryColor;
  }
}

// Create a new color manager with our theme color
const themeColors = new ColorManager("#FFC400")
  .addColor("background", "#1e2127")
  .addColor("foreground", "#abb2bf")
  .addColor("accent", "#FFC400");

console.log(\`Theme primary color: \${themeColors.primaryColor}\`);
`;

// HTML sample
const htmlSample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cat Theme Preview</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #1e2127;
      color: #abb2bf;
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    
    .highlight {
      color: #FFC400;
      font-weight: bold;
    }
    
    .card {
      border: 1px solid #FFC400;
      padding: 15px;
      border-radius: 5px;
      margin-bottom: 20px;
    }
    
    button {
      background-color: #FFC400;
      color: #000;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Cat Theme <span class="highlight">Preview</span></h1>
    
    <div class="card">
      <h2>Theme Features</h2>
      <ul>
        <li>Primary color: <span class="highlight">#FFC400</span></li>
        <li>Dark background for reduced eye strain</li>
        <li>Carefully selected syntax highlighting</li>
      </ul>
      <button>Install Theme</button>
    </div>
  </div>
</body>
</html>
`;

// CSS sample
const cssSample = `/* Cat Theme CSS Preview */
:root {
  --primary-color: #FFC400;
  --background: #1e2127;
  --foreground: #abb2bf;
  --border-color: #181a1f;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--background);
  color: var(--foreground);
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

.header {
  background-color: #282c34;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--border-color);
}

.header__title {
  color: var(--primary-color);
  margin: 0;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.card {
  border: 1px solid #333;
  border-radius: 4px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-color: var(--primary-color);
}

.button {
  background-color: var(--primary-color);
  color: #000;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.button:hover {
  background-color: #FFD133;
}

@media (max-width: 768px) {
  .content {
    padding: 1rem;
  }
}
`;

// Python sample
const pythonSample = `# Cat Theme Python Preview
import math
from typing import List, Dict, Optional

class ThemeColor:
    """A class representing a color in the theme"""
    
    def __init__(self, name: str, hex_value: str):
        self.name = name
        self.hex_value = hex_value
        
    def __str__(self) -> str:
        return f"{self.name}: {self.hex_value}"
    
    def lighten(self, amount: float = 0.1) -> 'ThemeColor':
        """Return a lightened version of this color"""
        # This is a simplified implementation
        return ThemeColor(f"{self.name}_light", self.hex_value)
        
    def darken(self, amount: float = 0.1) -> 'ThemeColor':
        """Return a darkened version of this color"""
        # This is a simplified implementation
        return ThemeColor(f"{self.name}_dark", self.hex_value)


def generate_color_palette(primary_color: str) -> Dict[str, str]:
    """Generate a full color palette based on the primary color"""
    palette = {
        "primary": primary_color,
        "background": "#1e2127",
        "foreground": "#abb2bf",
    }
    
    # Add more colors to the palette
    for i in range(1, 6):
        palette[f"accent_{i}"] = primary_color  # Simplified
        
    return palette


if __name__ == "__main__":
    # Our theme's primary color
    PRIMARY_COLOR = "#FFC400"
    
    # Generate the palette
    palette = generate_color_palette(PRIMARY_COLOR)
    
    # Create theme color objects
    theme_colors = [ThemeColor(name, value) for name, value in palette.items()]
    
    # Print the theme information
    print(f"Cat Theme - Primary Color: {PRIMARY_COLOR}")
    for color in theme_colors:
        print(f"  - {color}")
`;

// Write files to the preview directory
fs.writeFileSync(path.join(previewDir, 'javascript.js'), jsSample);
fs.writeFileSync(path.join(previewDir, 'index.html'), htmlSample);
fs.writeFileSync(path.join(previewDir, 'styles.css'), cssSample);
fs.writeFileSync(path.join(previewDir, 'theme.py'), pythonSample);

console.log('Preview files created in the "preview" directory.');
console.log('Open these files in VS Code with the theme applied to create screenshots for your README.');
