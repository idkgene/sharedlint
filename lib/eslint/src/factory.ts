import { defineGlobals, GlobalsConfig } from "./configs/globals";
import { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

interface EslintConfigOptions {
  globals?: GlobalsConfig;
}

export async function defineConfig(
  opts?: EslintConfigOptions
): Promise<Array<FlatConfig.Config>> {
  return [...defineGlobals(opts?.globals)];
}
