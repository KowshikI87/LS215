function danish(sentence) {
  // let pattern = /(\bapple\b|\bblueberry\b|\bcherry\b)/;
  let pattern = /\b(apple|blueberry|cherry)\b/ //LS solution; reduces redundancy in regex
  return sentence.replace(pattern, "danish");
}

console.log(danish('An apple a day keeps the doctor away'));
// -> 'An danish a day keeps the doctor away'

console.log(danish('My favorite is blueberry pie'));
// -> 'My favorite is danish pie'

console.log(danish('The cherry of my eye'));
// -> 'The danish of my eye'

console.log(danish('apple. cherry. blueberry.'));
// -> 'danish. cherry. blueberry.'

console.log(danish('I love pineapple'));
// -> 'I love pineapple'