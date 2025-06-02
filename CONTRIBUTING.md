# Contributing to Cat Theme

Thank you for your interest in contributing to Cat Theme! Here's how you can help make this VS Code theme better.

## Development Setup

1. Fork the repository
2. Clone your fork:
   ```
   git clone https://github.com/your-username/cat-theme.git
   cd cat-theme
   ```

## Making Changes

### Modifying the Theme

The theme is defined in `themes/cat-theme-color-theme.json`. This file contains all the color definitions for the theme.

For a comprehensive list of customizable properties, refer to the [VS Code Theme Color Reference](https://code.visualstudio.com/api/references/theme-color).

### Testing Your Changes

1. Press F5 in VS Code to launch a new window with your theme loaded
2. Make changes to the theme
3. Reload the VS Code window to see the changes (Ctrl+R or Cmd+R)

## Submitting Changes

1. Commit your changes with a clear message
2. Push to your fork
3. Submit a pull request to the main repository

## Guidelines

- Follow the existing code style
- Keep the theme consistent
- Test your changes thoroughly
- Update documentation as needed

## Color Palette

The theme's primary accent color is `#FFC400`. When adding new colors:

- Ensure they complement this accent color
- Maintain sufficient contrast for readability
- Consider accessibility (adequate contrast ratios)

## Versioning

We use [SemVer](http://semver.org/) for versioning:
- MAJOR version for incompatible changes
- MINOR version for new features in a backwards compatible manner
- PATCH version for backwards compatible bug fixes

## Releasing

Releases are handled by the maintainers. If you think your changes warrant a new release, please mention this in your pull request.

## License

By contributing, you agree that your contributions will be licensed under the project's MIT License.
