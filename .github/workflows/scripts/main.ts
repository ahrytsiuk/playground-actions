interface Message {
  text: string;
}

export default async () => {
  const message: Message = { text: "Hello, World! This is the main TypeScript script." };

  console.log(JSON.stringify(message));
}
