import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";
import { GLOB_SRC, GLOB_SRC_EXT } from "../globs";

export function defineDisables(): Array<FlatConfig.Config> {
  return [
    {
      files: [`**/scripts/${GLOB_SRC}`],
      name: "outslept/disables/scripts",
      rules: {
        "antfu/no-top-level-await": "off",
        "no-console": "off",
        "ts/explicit-function-return-type": "off",
      },
    },
    {
      files: [`**/cli/${GLOB_SRC}`, `**/cli.${GLOB_SRC_EXT}`],
      name: "outslept/disables/cli",
      rules: {
        "antfu/no-top-level-await": "off",
        "no-console": "off",
      },
    },
    {
      files: ["**/bin/**/*", `**/bin.${GLOB_SRC_EXT}`],
      name: "outslept/disables/bin",
      rules: {
        "antfu/no-import-dist": "off",
        "antfu/no-import-node-modules-by-path": "off",
      },
    },
    {
      files: ["**/*.d.?([cm])ts"],
      name: "outslept/disables/dts",
      rules: {
        "eslint-comments/no-unlimited-disable": "off",
        "import/no-duplicates": "off",
        "no-restricted-syntax": "off",
        "unused-imports/no-unused-vars": "off",
      },
    },
    {
      files: ["**/*.js", "**/*.cjs"],
      name: "outslept/disables/cjs",
      rules: {
        "ts/no-require-imports": "off",
      },
    },
    {
      files: [`**/*.config.${GLOB_SRC_EXT}`, `**/*.config.*.${GLOB_SRC_EXT}`],
      name: "outslept/disables/config-files",
      rules: {
        "antfu/no-top-level-await": "off",
        "no-console": "off",
        "ts/explicit-function-return-type": "off",
      },
    },
  ];
}
