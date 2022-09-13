/*

The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!

Problem
- input: a single word (string)
  -all lowercase
  - contains alphabetic charcters only (vowels and consonants)
    - no other characters
output: string
  longest vowel substring


Example / Test Cases


Data Structure


Algorithm
- simple regex question



Code


*/


function solve(s) {
  let pattern = /[aeiou]+/g;
  let allMatches = s.match(pattern);
  let matchesSorted = allMatches.sort((substr1, substr2) => substr1.length - substr2.length)

  return matchesSorted[matchesSorted.length - 1].length;
}
