/**
 * @type {import('prettier').Options}
 * @see https://prettier.io/docs/en/options.html
 */
const prettierConfig = {
  /**
   * Some of Prettier's defaults can be overridden by an EditorConfig file. We
   * define those here to ensure that doesn't happen.
   *
   * @see https://github.com/prettier/prettier/blob/main/docs/configuration.md#editorconfig
   */
  endOfLine: 'lf',
  tabWidth: 2,
  printWidth: 80,
  useTabs: false,

  singleQuote: true,
  plugins: ['prettier-plugin-packagejson'],
};

module.exports = prettierConfig
