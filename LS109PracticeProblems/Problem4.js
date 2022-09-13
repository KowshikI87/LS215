/*

//Took: 20 minutes

// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

// Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]

Problem
- any two number is a fair game
- assuming that as long as two number don't have same index
then we can return those pair of numbers


Test Cases / Examples

- [5, 25, 15, 11, 20]
  - 1st Step: [20, 10, 15, 4, 9]
  - Second step: get index of minimum value
    - minimum value = 4 and its index is 3
  - return [number at index - 1, number at index]


Data Structure



Algorithm
- I gotta gether every pair of numbers
- then calculate the differences between all those pair of numbers
- find the minimum difference
- return the two numbers for which we have minimum differences

- Step 1: gatsher all pairs (duplicate pairs are fine) ---> allPairs
  - outer loop: iterate through each number: curntNumber
    - inner loop: forms the pair with curntNumber and other number
  

- Step 2
  - allPairs.map(calculate the absolute difference)

- Step 3
  - use a for loop to find the minimum and the index of the minimum

- Step 4
  - return the subarray at index where minimum occurred

Code


*/

function closestNumbers(arr) {
  let allPairs = getAllPairs(arr);
  let pairDistances = allPairs.map(pair => Math.abs(pair[0] - pair[1]));

  let minDistance = pairDistances[0];
  let minDistanceIdx = 0;

  for (let idx = 0; idx < pairDistances.length; idx++) {
    if (pairDistances[idx] < minDistance) {
      minDistance = pairDistances[idx];
      minDistanceIdx = idx;
    }
  }

  return allPairs[minDistanceIdx];
}


//tested and it works!
function getAllPairs(arr) {
  let allPairs = []

  for (let idx1 = 0; idx1 < arr.length; idx1++) {
    for (let idx2 = 0; idx2 < arr.length; idx2++) {
      if (idx1 === idx2) continue;
      allPairs.push([arr[idx1], arr[idx2]]);
    }
  }

  return allPairs;
}

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]

