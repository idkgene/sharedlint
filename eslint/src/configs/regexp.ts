import * as regexpPlugin from "eslint-plugin-regexp"
import { checkPeerDependency } from "../utils/require-package";

checkPeerDependency("eslint-plugin-regexp", "eslint-plugin-regexp");

export default {
  ...regexpPlugin.configs["flat/recommended"],
  rules: {
    // Include the recommended rules from the plugin

    /**
     * Disallow elements that contradict assertions.
     *
     * ❌ Not Fixable - https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-contradiction-with-assertion.html
     */
    "regexp/no-contradiction-with-assertion": "error",

    /**
     * Disallow control characters in regular expressions.
     *
     * ❌ Not Fixable - https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-control-character.html
     */
    "regexp/no-control-character": "error",

    /**
     * Disallow duplicate alternatives in regular expressions.
     *
     * 🔧 Fixable - https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-disjunctions.html
     */
    "regexp/no-dupe-disjunctions": "error",

    /**
     * Disallow empty alternatives in regular expressions.
     *
     * 🔧 Fixable - https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-alternative.html
     */
    "regexp/no-empty-alternative": "error",

    /**
     * Disallow empty capturing groups.
     *
     * ❌ Not Fixable - https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-capturing-group.html
     */
    "regexp/no-empty-capturing-group": "error",

    /**
     * Disallow empty character classes.
     *
     * ❌ Not Fixable - https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-character-class.html
     */
    "regexp/no-empty-character-class": "error",

    /**
     * Disallow empty groups in regular expressions.
     *
     * ❌ Not Fixable - https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-group.html
     */
    "regexp/no-empty-group": "error",

    /**
     * Disallow empty lookahead and lookbehind assertions.
     *
     * ❌ Not Fixable - https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-lookarounds-assertion.html
     */
    "regexp/no-empty-lookarounds-assertion": "error",

    /**
     * Disallow the use of the backspace escape sequence ([\b]).
     *
     * 🔧 Fixable - https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-escape-backspace.html
     */
    "regexp/no-escape-backspace": "error",

    /**
     * Disallow invalid regular expression strings in the RegExp constructor.
     *
     * ❌ Not Fixable - https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invalid-regexp.html
     */
    "regexp/no-invalid-regexp": "error",

    /**
     * Disallow lazy quantifiers at the end of an expression.
     *
     * 🔧 Fixable - https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-lazy-ends.html
     */
    "regexp/no-lazy-ends": "error",

    /**
     * Disallow capturing groups that might be misleading.
     *
     * ❌ Not Fixable - https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-capturing-group.html
     */
    "regexp/no-misleading-capturing-group": "error",

    /**
     * Disallow multi-code-point characters in character classes and quantifiers.
     *
     * 🔧 Fixable - https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-unicode-character.html
     */
    "regexp/no-misleading-unicode-character": "error",

    /**
     * Disallow missing the `g` flag in patterns used in `String#matchAll` and `String#replaceAll`.
     *
     * 🔧 Fixable - https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-missing-g-flag.html
     */
    "regexp/no-missing-g-flag": "error",

    /**
     * Disallow optional assertions.
     *
     * ❌ Not Fixable - https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-optional-assertion.html
     */
    "regexp/no-optional-assertion": "error",

    /**
     * Disallow backreferences that might be useless.
     *
     * ❌ Not Fixable - https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-potentially-useless-backreference.html
     */
    "regexp/no-potentially-useless-backreference": "error",

    /**
     * Disallow exponential and polynomial backtracking.
     *
     * 🔧 Fixable - https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-super-linear-backtracking.html
     */
    "regexp/no-super-linear-backtracking": "error",

    /**
     * Disallow assertions that are known to always accept or reject.
     *
     * ❌ Not Fixable - https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-assertions.html
     */
    "regexp/no-useless-assertions": "error",

    /**
     * Disallow useless backreferences in regular expressions.
     *
     * ❌ Not Fixable - https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-backreference.html
     */
    "regexp/no-useless-backreference": "error",

    /**
     * Disallow useless `$` replacements in replacement strings.
     *
     * ❌ Not Fixable - https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-dollar-replacements.html
     */
    "regexp/no-useless-dollar-replacements": "error",

    /**
     * Disallow not strictly valid regular expressions.
     *
     * 🔧 Fixable - https://ota-meshi.github.io/eslint-plugin-regexp/rules/strict.html
     */
    "regexp/strict": "error",
  },
};
