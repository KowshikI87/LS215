/*

Took: 10 minutes //done in coderpad

// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]


High Level Algorithm

for each number, filter by number > current number --> greaterThanNumArr

remove duplicates from greaterThanNumArr

Return greaterThanNumArry.length

Problem

Test Cases / Examples


Data Structure



Algorithm


Code


*/

function smallerNumbersThanCurrent(arr) {
  let result = arr.map(curntNum => {
    let smallerThanCurntNumber = arr.filter(num => curntNum > num);
    let smallerThanCurntNumberUniq = removeDuplNumFrmArr(smallerThanCurntNumber);
    return smallerThanCurntNumberUniq.length;
  });
  return result;
}

function removeDuplNumFrmArr(arr) {
  let uniqArr = [];

  arr.forEach(num => {
    if (!uniqArr.includes(num)) {
      uniqArr.push(num);
    }
  })
  return uniqArr;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]


