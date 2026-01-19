import * as fs from "node:fs";

const CATALOG_INFO_GLOB: string = '**/*catalog-info*.yaml';

export default class CatalogInfoFile {

  public readonly filepath: string;

  private constructor(filepath: string) {
    this.filepath = filepath;
  }

  static async scan(workspace: string): Promise<CatalogInfoFile[]> {
    const results: CatalogInfoFile[] = [];
    const filePaths = await Array.fromAsync(
        fs.promises.glob(`${workspace}/${CATALOG_INFO_GLOB}`)
    );

    for (const filePath of filePaths) {
      results.push(new CatalogInfoFile(filePath));
    }

    return results;
  }

}
