# Custom Stylelint Configuration

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This repository contains a custom, rule-based Stylelint configuration designed to ensure consistent and high-quality styling across all projects. This configuration is built with a strong emphasis on modularity, where each Stylelint rule has its own dedicated directory containing documentation, test fixtures, and the rule's test suite.

## Key Features

* **Modular and Organized:** Each Stylelint rule is neatly organized into its own directory within `stylelint/rules/`, promoting maintainability and clarity.
* **Comprehensive Documentation:** Every rule has a dedicated `README.md` explaining its purpose, configuration, and rationale.
* **Rigorous Testing:** Each rule is accompanied by `valid.scss` and `invalid.scss` fixture files to ensure correct functionality and prevent regressions.
* **Extends Industry Standards:** This configuration extends the widely adopted `stylelint-config-standard-scss`, incorporating best practices and community conventions.
* **Easy to Extend and Customize:** The modular structure makes it straightforward to add, modify, or remove specific rules to fit project requirements.

## Installation

1.  Install Stylelint and this configuration as development dependencies:

    ```bash
    npm install --save-dev stylelint @idkgene/stylelint-config
    # or
    yarn add -D stylelint @idkgene/stylelint-config
    ```

2.  Extend this configuration in your `.stylelintrc.js` (or `stylelint.config.js`) file:

    ```javascript
    module.exports = {
      extends: ['@idkgene/stylelint-config'],
      // You can add any additional project-specific overrides here
    };
    ```

## Included Rules

This configuration includes the following Stylelint rules.  Each rule is configured to enforce specific styling conventions within our projects.  For detailed information, including examples of valid and invalid code, please refer to the `README.md` file within each rule's directory in `stylelint/rules/`.

### `alpha-value-notation`

* **Description:** No description available.
* **Configuration:** `"number"`
* **Fixable:** No
* **[More Details](./rules/alpha-value-notation/README.md)

### `color-named`

* **Description:** No description available.
* **Configuration:** `"never"`
* **Fixable:** No
* **[More Details](./rules/color-named/README.md)

### `declaration-no-important`

* **Description:** No description available.
* **Configuration:** `true`
* **Fixable:** No
* **[More Details](./rules/declaration-no-important/README.md)

### `function-url-quotes`

* **Description:** No description available.
* **Configuration:** `"always"`
* **Fixable:** No
* **[More Details](./rules/function-url-quotes/README.md)

### `import-notation`

* **Description:** No description available.
* **Configuration:** `"string"`
* **Fixable:** No
* **[More Details](./rules/import-notation/README.md)

### `length-zero-no-unit`

* **Description:** No description available.
* **Configuration:** `true`
* **Fixable:** No
* **[More Details](./rules/length-zero-no-unit/README.md)

### `number-max-precision`

* **Description:** No description available.
* **Configuration:** `3`
* **Fixable:** No
* **[More Details](./rules/number-max-precision/README.md)

### `shorthand-property-no-redundant-values`

* **Description:** No description available.
* **Configuration:** `true`
* **Fixable:** No
* **[More Details](./rules/shorthand-property-no-redundant-values/README.md)

### `max-nesting-depth`

* **Description:** No description available.
* **Configuration:** `4`
* **Fixable:** No
* **[More Details](./rules/max-nesting-depth/README.md)

### `selector-max-compound-selectors`

* **Description:** No description available.
* **Configuration:** `3`
* **Fixable:** No
* **[More Details](./rules/selector-max-compound-selectors/README.md)

### `selector-max-id`

* **Description:** No description available.
* **Configuration:** `0`
* **Fixable:** No
* **[More Details](./rules/selector-max-id/README.md)

### `selector-no-qualifying-type`

* **Description:** No description available.
* **Configuration:** `true`
* **Fixable:** No
* **[More Details](./rules/selector-no-qualifying-type/README.md)

## Contributing

We welcome contributions to this Stylelint configuration! If you have suggestions for new rules or improvements to existing ones, please submit a pull request.  When adding or modifying rules, ensure you update the corresponding `README.md` file and provide comprehensive test cases.

## License

This project is licensed under the MIT License.
