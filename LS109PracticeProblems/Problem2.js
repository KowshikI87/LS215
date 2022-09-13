/*

Took ~ 10 minutes. Done using coderpad

// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// Examples:

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".


Problem
- input: array
- output: integer
  if array.length < 5 the nreturn null
  else return minimum sum of 5 consecutive numbers


Test Cases / Examples


Data Structure
- array


Algorithm
- take sum of all possible 5 consecutive numbers
- sort the resulting array
- return the minimum value


Code


*/

function minimumSum(arr) {

  if (arr.length < 5) {
    return null;
  }

  let sums = [];

  for (let idx = 0; idx <= arr.length - 5; idx++) {
    let currentSum = arraySum(arr.slice(idx, idx + 5));
    sums.push(currentSum);
  }

  sums.sort((num1, num2) => num1 - num2);

  return sums[0];
}

function arraySum(arr) {
  return arr.reduce((sum, curntValue) => {
    return sum + curntValue;
  }, 0);
}

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);