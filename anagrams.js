function anagram(word, list) {
  let sortedTargetWord = word.split('').sort().join('');
  return list.filter(currentWord => currentWord.split('').sort().join('') === sortedTargetWord);
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]