function substrings(string) {
  let substrings = [];
  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    let substring = string.substring(startIndex);
    substrings = substrings.concat(leadingSubstrings(substring));
  }

  return substrings;
}

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}


function solve(s) {
  const vowel = 'aeiou';
  let allVowelSubstring = substrings(vowel);
  return allVowelSubstring.filter(substring => s.includes(substring))
  .sort((substring1, substring2) => substring2.length - substring1.length)[0].length;
}