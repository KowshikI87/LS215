/*

Write a function that takes an array as an argument and returns an array
that contains two elements, each of which is an array. Put the first
half of the original array elements in the first element of the return value,
and put the second half in the second element.

If the original array contains an odd number of elements,
place the middle element in the first half array.

Problem
- finding the middle element
even # elements ==> odd index for middle element
odd # elements ==> even index for middle element

0 1 2 3 4 5 6 7 8 9 --> even number of elements
0 1 2 3 4 5 6 7 8 9 10 ---> odd nuumber of elements

indexing is non inclusive for end index.
So, middle = Math.ceil(array.length / 2)


*/

function halvsies(arr) {
  let middle = Math.ceil(arr.length / 2);
  return [[arr.slice(0, middle)], [arr.slice(middle)]];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
console.log("stop");