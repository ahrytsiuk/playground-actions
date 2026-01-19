import * as fs from 'fs';

interface Message {
  text: string;
}

export async function main() {
  const message: Message = { text: "Hello, World! This is the main TypeScript script." };

  console.log(JSON.stringify(message));

  let content = fs.readFileSync(`${process.env.GITHUB_WORKSPACE}/message.txt`, 'utf-8');
  console.log(`Content of message.txt: ${content}`);

}
