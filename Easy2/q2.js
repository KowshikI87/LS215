function logInBox(sentence) {
  console.log(`+${"-".repeat(sentence.length + 2)}+`);
  console.log(`|${" ".repeat(sentence.length + 2)}|`);
  console.log(`| ${sentence} |`);
  console.log(`|${" ".repeat(sentence.length + 2)}|`);
  console.log(`+${"-".repeat(sentence.length + 2)}+`);
}

logInBox('');
logInBox('To boldly go where no one has gone before.');