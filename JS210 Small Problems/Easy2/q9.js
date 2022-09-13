function cleanUp(sentence) {
  let pattern = /[^A-Z]+/ig;
  return sentence.replace(pattern, " ");
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "