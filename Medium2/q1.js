/* eslint-disable max-len */
/*


Write a function that takes a string and returns an object
containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.


Problem
- starightforward

Test Cases / Examples

  letterPercentages('abCdef 123');
  // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

    Total: 10
    lowercase: 5
    uppercase: 1
    neither: 4

  letterPercentages('AbCd +Ef');
  // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" };

    Total: 8
    lowercase: 3
    uppercase: 3
    neither: 2

  Two decimal places


Data Structure
- object/dictionary
- string (for matching)

Algorithm
- use the match method to get number of charactesr
- divide by string length * 100 --> .tofixed(2 decimal places)

Code


*/

function letterPercentages(sentence) {
  let lowercaseChar = sentence.match(/[a-z]/g);
  let uppercaseChar = sentence.match(/[A-Z]/g);
  let neither = sentence.match(/[^a-z]/ig);

  let result = {};

  result["lowercase"] = calculatePercentage(lowercaseChar, sentence);
  result["uppercase"] = calculatePercentage(uppercaseChar, sentence);
  result["neither"] = calculatePercentage(neither, sentence);

  return result;
}

function calculatePercentage(subArr, sentence) {
  let subArrLength = subArr ? subArr.length : 0;
  return ((subArrLength / sentence.length) * 100).toFixed(2);
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


//LS Solution is clever

// function letterPercentages(string) {
//   const count = string.length;
//   return {
//     lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2),
//     uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(2),
//     neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(2),
//   };
// }