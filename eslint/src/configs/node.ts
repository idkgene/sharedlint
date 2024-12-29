import { pluginNode } from "../plugins";

export default {
  plugins: {
    node: pluginNode,
  },
  rules: {
    /**
     * This rule expects that when you're using the callback pattern in Node.js you'll handle the error.
     * 
     * ❌ Not Fixable - https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/handle-callback-err.md
     */
    'node/handle-callback-err': ['error', '^(err|error)$'],

    /**
     * Disallow deprecated APIs
     * 
     * ❌ Not Fixable - https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-deprecated-api.md
     */
    'node/no-deprecated-api': 'error',
    
    /**
     * Disallow the assignment to exports
     * 
     * ❌ Not Fixable - https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-exports-assign.md
     */
    'node/no-exports-assign': 'error',
    
    /**
     * Disallow new operators with calls to require
     * 
     * ❌ Not Fixable - https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-new-require.md
     */
    'node/no-new-require': 'error',
    
    /**
     * Disallow string concatenation with __dirname and __filename
     * 
     * ❌ Not Fixable - https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-path-concat.md
     */
    'node/no-path-concat': 'error',
    
    /**
     * Enforce either Buffer or require("buffer").Buffer
     * 
     * ❌ Not Fixable - https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/buffer.md
     */
    'node/prefer-global/buffer': ['error', 'never'],
    
    /**
     * Enforce either process or require("process")
     * 
     * ❌ Not Fixable - https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/process.md
     */
    'node/prefer-global/process': ['error', 'never'],
    
    /**
     * Require that process.exit() expressions use the same code path as throw
     * 
     * ❌ Not Fixable - https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/process-exit-as-throw.md
     */
    'node/process-exit-as-throw': 'error',
  },
}
