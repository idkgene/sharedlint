import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";
import globals from "globals";

export type GlobalsConfig = Array<keyof typeof globals>;

export function defineGlobals(
  config?: GlobalsConfig
): Array<FlatConfig.Config> {
  if (config === undefined) {
    config = ["node", "browser", "es2020"];
  }

  let collectedGlobals: Record<string, boolean> = {};

  for (const item of config) {
    collectedGlobals = {
      ...collectedGlobals,
      ...globals[item],
    };
  }

  return [
    {
      languageOptions: {
        globals: collectedGlobals,
      },
    },
  ];
}
