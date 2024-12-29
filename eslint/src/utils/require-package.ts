import { createRequire } from "node:module";
import { stderr } from "node:process";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

// Create a require function for ES modules
const require = createRequire(import.meta.url);

// Read package.json
const pkgJson = require("../../package.json");

// Log utility
const log = (message: string = "") => stderr.write(`${message}\n`);

// Regex to extract package manager from npm_config_user_agent
const PACKAGE_MANAGER_REGEX = /^(?<pm>\w+)\//;

/**
 * Reads the package manager from the environment.
 *
 * @returns {string} The name of the package manager.
 */
function readPackageManager(): string {
  const match = process.env.npm_config_user_agent?.match(PACKAGE_MANAGER_REGEX);
  return match?.groups?.pm || "npm";
}

/**
 * Checks if a package is installed and exits with an error if it's not.
 *
 * @param {string} configName - The name of the config requiring the package.
 * @param {string} packageName - The name of the package to check.
 */
export function checkPeerDependency(
  configName: string,
  packageName: string,
): void {
  try {
    // Try to resolve the package using the require function
    require.resolve(packageName);
  } catch (e) {
    const packageManager = readPackageManager();

    log(
      `The \`${configName}\` config requires an optional peer dependency, which has not been installed.`,
    );
    log();
    log("To install it, run:");
    log(
      `- ${packageManager} install ${packageName}@${pkgJson.peerDependencies[packageName]}`,
    );

    process.exit(1);
  }
}
