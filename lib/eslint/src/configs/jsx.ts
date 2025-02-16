import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

import { GLOB_JSX, GLOB_TSX } from "../globs";

export function jsx(): Array<FlatConfig.Config> {
  return [
    {
      files: [GLOB_JSX, GLOB_TSX],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      name: "outslept/jsx/setup",
    },
  ];
}
