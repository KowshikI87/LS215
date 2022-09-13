/*

//failing the big set of tests;
//good old way to do this is to count from 0 to all n digits long numbers that are odd
--> guranteed way to get this right

Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.


Problem
- input: integers
- output: integer
  - how many numbers you can form with the digits in the integer
  such that it is odd


Test Cases / examples


Data Structure
- array


Algorithm
- one way to do this is to get all the substrings of all length
- filter by: whether the number formed by the substring is an odd number

- second way:first figure out the largest number using the digits
- go from 1 to that largest number and anytime it is an odd number; append to array

--> Use the second approach

Code


*/


function solve(s) {
  let allDigitSubstring = allSubstrings(s);
  let allOddNumbers = allDigitSubstring.filter(numStr => Number(numStr) % 2 !== 0);
  return allOddNumbers.length;
}

function allSubstrings(str) {
  let result = [];

  for (let idx = 0; idx < str.length; idx++) {
    result = result.concat(leadingSubstring(str.slice(idx)));
  }

  return result;
}

function leadingSubstring(str) {
  let result = [];
  for (let idx = 0; idx < str.length; idx++) {
    result.push(str.slice(0, idx + 1));
  }
  return result;
}


