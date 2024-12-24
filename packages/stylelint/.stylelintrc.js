module.exports = {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    /**
     * Specify percentage or number notation for alpha-values.
     *
     * 🔧 Fixable - https://stylelint.io/user-guide/rules/alpha-value-notation/
     */
    'alpha-value-notation': 'number',

    /**
     * Require (where possible) or disallow named colors.	
     *
     * 🚫 Not Fixable - https://stylelint.io/user-guide/rules/color-named/
     */
    'color-named': 'never',

    /**
     * Disallow !important within declarations.	
     *
     * 🚫 Not Fixable - https://stylelint.io/user-guide/rules/declaration-no-important/
     */
    'declaration-no-important': true,

    /**
     * Require or disallow quotes for urls.
     *
     * 🔧 Fixable - https://stylelint.io/user-guide/rules/function-url-quotes/
     */
    'function-url-quotes': 'always',

    /**
     * Specify string or URL notation for @import rules.
     *
     * 🔧 Fixable - https://stylelint.io/user-guide/rules/import-notation/
     */
    'import-notation': 'string',

    /**
     * Disallow units for zero lengths.
     *
     * 🔧 Fixable - https://stylelint.io/stylistic-issues/length-zero-no-unit/
     */
    'length-zero-no-unit': true,

    /**
     * Limit the number of decimal places allowed in numbers.
     *
     * 🚫 Not Fixable - https://stylelint.io/user-guide/rules/number-max-precision/
     */
    'number-max-precision': 3,

    /**
     * Disallow redundant values within shorthand properties.	
     *
     * 🔧 Fixable - https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/
     */
    'shorthand-property-no-redundant-values': true,

    /**
     * Limit the depth of nesting.	
     *
     * 🚫 Not Fixable - https://stylelint.io/user-guide/rules/max-nesting-depth
     */
    'max-nesting-depth': 4,

    /**
     * Limit the number of compound selectors in a selector.
     *
     * 🚫 Not Fixable - https://stylelint.io/user-guide/rules/selector-max-compound-selectors
     */
    'selector-max-compound-selectors': 3,

    /**
     * Limit the number of ID selectors in a selector.	
     *
     * 🚫 Not Fixable - https://stylelint.io/user-guide/rules/selector-max-id/
     */
    'selector-max-id': 0,

    /**
     * Disallow qualifying a selector by type.
     *
     * 🚫 Not Fixable - https://stylelint.io/user-guide/rules/selector-no-qualifying-type
     */
    'selector-no-qualifying-type': true,
  },
};
