function multiplyAllPairs(arr1, arr2) {
  let result = [];
  for (let idx1 = 0; idx1 < arr1.length; idx1++) {
    for (let idx2 = 0; idx2 < arr2.length; idx2++) {
      result.push(arr1[idx1] * arr2[idx2]);
    }
  }
  return result.sort((num1, num2) => num1 - num2);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]