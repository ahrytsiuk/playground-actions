import * as fs from 'fs';

import type {AsyncFunctionArguments} from '@actions/github-script'

export interface Message {
  text: string;
}

export function readContent(filePath: string): string {
  return fs.readFileSync(filePath, 'utf-8');
}

export async function main({core, github}: AsyncFunctionArguments): Promise<void>{
  const message: Message = { text: "Hello, World! This is the main TypeScript script." };

  console.log(JSON.stringify(message));

  let content = fs.readFileSync(`${process.env.GITHUB_WORKSPACE}/message.txt`, 'utf-8');
  console.log(`Content of message.txt: ${content}`);

  console.log(JSON.stringify(core));
  console.log(JSON.stringify(github));

  core.warning(`Sample warning from main.ts`);
  core.error(`Sample error from main.ts`);

  core.startGroup(`Sample Group`);
  core.info(`This is inside a group.`);
  core.endGroup();
}
