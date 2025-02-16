import { pluginPerfectionist } from "../plugins";
import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

/**
 * Perfectionist plugin for props and items sorting.
 *
 * @see https://github.com/azat-io/eslint-plugin-perfectionist
 */
export function perfectionist(): Array<FlatConfig.Config> {
  return [
    {
      name: "outslept/perfectionist/setup",
      plugins: {
        perfectionist: pluginPerfectionist,
      },
      rules: {
        "perfectionist/sort-exports": [
          "error",
          { order: "asc", type: "natural" },
        ],
        "perfectionist/sort-imports": [
          "error",
          {
            groups: [
              "type",
              ["parent-type", "sibling-type", "index-type", "internal-type"],

              "builtin",
              "external",
              "internal",
              ["parent", "sibling", "index"],
              "side-effect",
              "object",
              "unknown",
            ],
            newlinesBetween: "ignore",
            order: "asc",
            type: "natural",
          },
        ],
        "perfectionist/sort-named-exports": [
          "error",
          { order: "asc", type: "natural" },
        ],
        "perfectionist/sort-named-imports": [
          "error",
          { order: "asc", type: "natural" },
        ],
      },
    },
  ];
}
