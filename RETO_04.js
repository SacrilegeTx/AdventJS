function decode (message) {
  // Score: 280
  // TO-DO: get better score
  const regex = /\(([^()]+)\)/g;
  let match = null;

  while ((match = regex.exec(message)) !== null) {
    const reversedSubStr = match[1].split('').reverse().join('');
    message = message.replace(match[0], reversedSubStr);
    match = regex.exec(message)
  }

  return message;
}

console.log(decode('((nta)(sa))'))
