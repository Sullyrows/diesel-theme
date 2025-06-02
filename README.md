# Cat Theme for VS Code

A custom VSCode theme with a bright amber accent color (#FFC400).

## Features

- Dark theme with an amber (#FFC400) accent color
- Carefully selected colors for syntax highlighting
- Optimized for readability and reduced eye strain
- Consistent color scheme throughout the VS Code interface

## Installation

### From VS Code Marketplace
1. Open **Extensions** sidebar panel in VS Code. `View → Extensions`
2. Search for `Cat Theme`
3. Click **Install** to install it
4. Click **Reload** to reload VS Code
5. From the menu bar click: Code > Preferences > Color Theme > **Cat Theme**

### Manual Installation
1. Download the latest release from the [GitHub repository](https://github.com/yourusername/cat-theme/releases)
2. Open VS Code
3. Go to Extensions view by clicking on the Extensions icon in the Activity Bar
4. Click on the "..." menu (More Actions) and select "Install from VSIX..."
5. Choose the downloaded VSIX file
6. After installation, select the theme through: Code > Preferences > Color Theme > **Cat Theme**

## Developing the Theme

### Prerequisites
- Node.js and npm
- Visual Studio Code

### Setup
1. Clone the repository
   ```
   git clone https://github.com/yourusername/cat-theme.git
   cd cat-theme
   ```

2. Package the extension
   ```
   ./package-extension.sh
   ```

### Testing the Theme
1. Press F5 in VS Code to launch a new window with the theme loaded
2. Make changes to the theme in `themes/cat-theme-color-theme.json`
3. Reload the VS Code window to see the changes (Ctrl+R or Cmd+R)

## Screenshots

[Include screenshots here showing syntax highlighting, UI elements, and the theme in action]

## Customization

This theme is based on a dark color scheme with #FFC400 as the primary accent color. If you want to modify it:

1. Fork the repository
2. Edit the `themes/cat-theme-color-theme.json` file
3. Change colors as needed (visit [VS Code Theme Color Reference](https://code.visualstudio.com/api/references/theme-color) for details)
4. Package and test your changes

## Feedback

If you have suggestions, please [open an issue](https://github.com/yourusername/cat-theme/issues) or submit a pull request.

## License

This theme is licensed under the MIT License. See the LICENSE file for details.

**Enjoy!**
