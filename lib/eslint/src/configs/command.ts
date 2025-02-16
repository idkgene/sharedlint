import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";
import createCommand from "eslint-plugin-command/config";

export function defineCommand(): Array<FlatConfig.Config> {
  return [
    {
      ...createCommand(),
      name: "outslept/command/rules",
    },
  ];
}
