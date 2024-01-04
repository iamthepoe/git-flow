interface Message{
  content: string;
  from: string;
  to: string;
}

function sendMessage(message: Message): void{
  const {content, from, to} = message;
  console.log(`
    ${content} 
    From: ${from}
    To: ${to}
  `);

  sendNotification(to);
}

function sendNotification(receiver: Message['to']): void{
  console.log(`Sending notification to ${receiver}...`);
  setTimeout(()=>{console.log('Done!')}, 1000);
}
