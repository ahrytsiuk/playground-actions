import {AsyncFunctionArguments} from "@actions/github-script";

import {CatalogInfoFile} from "./catalog-info";

/**
 * Gets the workspace path from environment variable.
 *
 * Reads the GITHUB_WORKSPACE environment variable which should point to the root directory
 * containing OpenAPI specifications and catalog-info files to lint.
 *
 * @returns Workspace path to analyze
 * @throws Error if GITHUB_WORKSPACE is not set or empty
 */
function getWorkspacePath(): string {
  const workspace = process.env.GITHUB_WORKSPACE;

  if (!workspace) {
    throw new Error('GITHUB_WORKSPACE environment variable is not set.');
  }

  return workspace;
}

export async function main({core}: AsyncFunctionArguments): Promise<void> {

  const workspace = getWorkspacePath();
  core.info(`Linting OpenAPI specifications in: ${workspace}`);


  const catalogInfoFiles = await CatalogInfoFile.scan(workspace);


  core.info(`Found ${catalogInfoFiles.length} catalog-info files.`);
  for (const catalogInfoFile of catalogInfoFiles) {
    core.info(` - catalog-info file: ${catalogInfoFile.filepath}`);
  }

}
