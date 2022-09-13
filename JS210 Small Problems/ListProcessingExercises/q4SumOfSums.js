function sumOfSums(arr) {
  let runningSum = arr.map((_, index) => {
    return calculateArraySum(arr.slice(0, index + 1));
  });

  return calculateArraySum(runningSum);
}

function calculateArraySum(arr) {
  return arr.reduce((total, currentNum) => total + currentNum);
}


console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35