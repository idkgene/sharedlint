import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";
import { pluginNode } from "../plugins";

export function defineNode(): Array<FlatConfig.Config> {
  return [
    {
      name: "outslept/node/rules",
      plugins: {
        node: pluginNode,
      },
      rules: {
        "node/handle-callback-err": ["error", "^(err|error)$"],
        "node/no-deprecated-api": "error",
        "node/no-exports-assign": "error",
        "node/no-new-require": "error",
        "node/no-path-concat": "error",
        "node/prefer-global/buffer": ["error", "never"],
        "node/prefer-global/process": ["error", "never"],
        "node/process-exit-as-throw": "error",
      },
    },
  ];
}
