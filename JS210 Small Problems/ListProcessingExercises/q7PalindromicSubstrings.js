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

function isPalindrome(str) {
  return str.length > 1 && str.split('').reverse().join('') === str;
}

function palindromes(str) {
  let allSubstrings = substrings(str);
  return allSubstrings.filter(substring => isPalindrome(substring));
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// // returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
