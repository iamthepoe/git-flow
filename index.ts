interface Message{
  content: string;
  from: string;
  to: string;
}

function sendMessage(message: Message): void{
  const {content, from, to} = message;
  return console.log(`
    ${content} 
    From: ${from}
    To: ${to}
  `);
}
