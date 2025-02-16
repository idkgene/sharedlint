import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";
import { GLOB_EXCLUDE } from "../globs";

export function defineIgnores(
  userIgnores: string[] = []
): Array<FlatConfig.Config> {
  return [
    {
      ignores: [...GLOB_EXCLUDE, ...userIgnores],
      name: "outslept/ignores",
    },
  ];
}
