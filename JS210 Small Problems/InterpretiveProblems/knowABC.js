/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/*

A collection of spelling blocks has two letters per block,
as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks
to only those words that do not use both letters from
any given block. You can also only use each block once.

Write a function that takes a word string as an argument
and returns true if the word can be spelled using the set of blocks,
false otherwise. You can consider the letters to be
case-insensitive when you apply the rules.

Problem
- input: a string and letter blocks; each containing two letters
- output: can the string be formed with the letter blocks
  - can use at most one letter from a single block

- Assumptions
  - case-insensitive
  - the letters found in any block is not found any other letter block
    - this would complicate the problem

Example / Test Cases


Data Structure
- array


Algorithm
  //use array of string, so I can just use string.replace for removing letters
  //and I can just use string.includes(char) for checking if searchChar exists
- letterBlocks = [[letter1, letter2]], [], ...]; all lowercase

- result = [];
- iterate through the characters (all lowerCase): searchChar, index
  - iterate through the letter blocks
    - in any letter block, if searchChar is found
      remove that letter from that letter block
      push searchChar to result
      break;
  if result.length !== (index + 1) then return false

- return true;

Code


*/

//had trouble with line 79 because I have to remmeber that string is immutable. I have to reassing to the array

function isBlockWord(str) {

  let letterBlocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU',
    'VI', 'LY', 'ZM'];

  let uppercaseStr = str.toUpperCase();

  let result = [];

  for (let charIdx = 0; charIdx < uppercaseStr.length; charIdx++) {
    let searchChar = uppercaseStr[charIdx];

    for (let ltrBlockIdx = 0; ltrBlockIdx < letterBlocks.length; ltrBlockIdx++) {
      if (letterBlocks[ltrBlockIdx].length < 2) {
        continue;
      }

      if (letterBlocks[ltrBlockIdx].includes(searchChar)) {
        letterBlocks[ltrBlockIdx] = letterBlocks[ltrBlockIdx].replace(searchChar, "");
        result.push(searchChar);
        break;
      }
    }

    if (result.length !== charIdx + 1) {
      return false;
    }

  }

  return true;
}


console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true


console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false