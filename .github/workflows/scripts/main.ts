interface Message {
  text: string;
}

async function run() {
  const message: Message = { text: "Hello, World! This is the main TypeScript script." };

  console.log(JSON.stringify(message));
}

export default run;
