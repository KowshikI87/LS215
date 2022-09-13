//assume case insentitive
function crunch(string) {
  return string.split('').reduce((result, curntChar) => {
    if (result.length === 0) {
      result.push(curntChar);
      return result;
    }

    if (result[result.length - 1].toUpperCase() === curntChar.toUpperCase()) {
      return result;
    } else {
      result.push(curntChar);
      return result;
    }
  }, []).join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

