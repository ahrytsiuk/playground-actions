interface Message {
  text: string;
}

module.exports = async () => {
  const message: Message = { text: "Hello, World! This is the main TypeScript script." };

  console.log(JSON.stringify(message));
}
