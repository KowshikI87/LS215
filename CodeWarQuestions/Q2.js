/*

Took: 14.5 minutes; about 2 minutes in setting up questoisn from codewar


You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
Examples
[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again)

Problem
- input: array of integers
- output: number of pairs
  - pair ==> same number appearing twice


Example/Test Cases


Data Structure
- array and integer


Algorithm
- I think we can just do a histogram
  [1, 2, 2, 20, 6, 20, 2, 6, 2] -->
  {1: 1, 2:4, 20:2, 6:2}

- Object.values(histogram).map
  count => Math.floor(count / 2) --> pairs

- call the reudce method on pairs to return total # of pairs


Code

*/

function duplicates(array) {
  let numFreq = charFreq(array);
  let numPairsCount = Object.values(numFreq).map(count => Math.floor(count / 2));

  let totalPairsCount = numPairsCount.reduce((sum, curntCount) => {
    return sum + curntCount;
  }, 0)


  return totalPairsCount;
}

function charFreq(array) {
  return array.reduce((histogram, curntNum) => {
    if (Object.keys(histogram).includes(String(curntNum))) {
      histogram[curntNum] += 1;
    } else {
      histogram[curntNum] = 1
    }
    return histogram;
  }, {})
}


console.log(duplicates([1, 2, 5, 6, 5, 2])); //2
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])); //4
console.log(duplicates([0, 0, 0, 0, 0, 0, 0])); //3
console.log(duplicates([1000, 1000])); //1
console.log(duplicates([])); //0
console.log(duplicates([54])); //0

