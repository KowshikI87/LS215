/*

Took: 25 minutes; Done using Coderpad

// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

// Examples:

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".

Problem
- input: string
- output: a character that occurs the least in the sentence
- rules
  - uppercase and lowercase are the same for a character
  - if two or more characters occurs the least number of times then
    return the character which occurs first in the sentence


Example / Test Cases


Data Structure
- Hash Table / Object


Algorithm
- input: str
- first: str --> str.toLowerCase()
  - have to convert to lowercase because that's how test cases are being compared
- second: build a hash table
  - keys are the characters
  - values are the number of times that character occurs

- Third: get the minimum value in the hash table --> minOccurence

- Fourth: using filter on hash table, get all the characters which's value in the 
hash table == minOccurence ---> minOccurenceChars

- Fifth: get index of all minOccurenceChars and sort it in ascending order
---> minOccurenceCharIdx

- 6th: return str[minOccurenceCharIdx]


*/


function leastCommonChar(str) {

  let upperCaseStr = str.toLowerCase();
  let charFreqTable = getCharsFreqTable(upperCaseStr)
  let minOccurence = Math.min(...Object.values(charFreqTable));

  let allMinOccurChars = Object.keys(charFreqTable).filter(char => {
    return charFreqTable[char] === minOccurence;
  });

  let allMinOccurCharsIdx = allMinOccurChars.map(char => {
    return upperCaseStr.indexOf(char);
  });

  let firstMinOccurCharIdx = Math.min(...allMinOccurCharsIdx);

  return upperCaseStr[firstMinOccurCharIdx];
}

function getCharsFreqTable(str) {

  let freqTable = {};

  for (let idx = 0; idx < str.length; idx++) {
    let curntChar = str[idx];

    if (freqTable[curntChar]) {
      freqTable[curntChar] += 1;
    } else {
      freqTable[curntChar] = 1;
    }
  }

  return freqTable;
}


console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

