function leadingSubstrings(str) {
  let result = [];
  for (let idx = 0; idx < str.length; idx++) {
    result.push(str.slice(0, idx + 1));
  }
  return result;
}
function substrings(str) {
  let result = [];
  for (let idx = 0; idx < str.length; idx++) {
    result.push(...leadingSubstrings(str.slice(idx)));
  }
  return result;
}

console.log(substrings('abcde'));

// // returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]


