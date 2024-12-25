# Biome Configuration

This README provides a description of the Biome configuration used in this project. Biome is a tool for formatting and linting web code.

## Key Configuration Changes

The `biome.json` file contains the configuration for Biome. Here are the key changes that have been applied:

### Formatting

- **Enabled CSS Formatter:** The CSS formatter is now enabled to ensure consistent styling.
- **Increased Line Width:** The `lineWidth` for CSS, JavaScript, and TypeScript files has been increased to 120 characters. This allows for longer lines of code before wrapping, improving readability in some cases.
- **JSX Quote Style:** JSX attributes will now use single quotes.
- **EditorConfig Support:** The formatter now respects `.editorconfig` files in the project.

### Linting

The linter rules have been updated to be more strict and provide better feedback on potential issues.  Key changes include:

- **Enabled Recommended and Nursery Rules:** More of Biome's recommended and nursery rules are now active, helping to catch a wider range of potential problems.
- **Adjusted Rule Severities:** Several rules have been changed from being ignored (`off`) to warnings (`warn`) or errors (`error`). This provides clearer feedback during development.  For example:
    - `a11y/noAutofocus` is now a warning.
    - `complexity/useSimplifiedLogicExpression` is now a warning.
    - Several `correctness` rules related to Node.js modules, undeclared dependencies, and import extensions are now warnings.
    -  `nursery/noSecrets` is now an error.
- **Sorted Classes:** The `nursery/useSortedClasses` rule is configured to enforce a specific order for HTML attributes within JSX elements. This improves consistency and readability.

### Overrides

Specific overrides have been added for certain file types:

- **Markdown Files:** The `lineWidth` for Markdown (`.md` and `.mdx`) files is set to 100 characters.
- **JSONC Files:** For JSONC files (specifically those in the `.vscode` directory), comments and trailing commas are allowed. This is useful for configuration files where comments can improve understanding.

## Using this Configuration

Biome will automatically use this configuration when you run its formatting and linting commands.  Ensure that Biome is installed as a development dependency in your project.

To format your code, you can typically run a command like:

```bash
npx biome format ./src
```

Refer to the Biome documentation for more details on installation and usage: https://biomejs.dev/

