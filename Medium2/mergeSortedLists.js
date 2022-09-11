/* eslint-disable max-lines-per-function */
/*

Write a function that takes two sorted arrays as arguments and
returns a new array that contains all the elements from both input
arrays in sorted order.

You may not provide any solution that requires you to sort the result array.
You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays.


Problem
- input: two sorted array (ascending order)
- output: one sorted array (ascending order)


Example / Test Cases
- given


Data Structure


Algorithm


Code

*/

function merge(arr1, arr2) {
  let result = [];
  let arr1Pointer = 0;
  let arr2Pointer = 0;

  while (arr1Pointer !== arr1.length && arr2Pointer !== arr2.length) {
    if (arr1[arr1Pointer] <= arr2[arr2Pointer]) {
      result.push(arr1[arr1Pointer]);
      arr1Pointer += 1;
    } else {
      result.push(arr2[arr2Pointer]);
      arr2Pointer += 1;
    }
  }

  if (arr1Pointer !== arr1.length) {
    result = result.concat(arr1.slice(arr1Pointer, arr1.length + 1));
  }

  if (arr2Pointer !== arr2.length) {
    result = result.concat(arr2.slice(arr2Pointer, arr2.length + 1));
  }

  return result;
}


console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
