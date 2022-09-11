/*

Take the number 735291 and rotate it by one digit to the left, getting 352917.
Next, keep the first digit fixed in place and rotate the remaining digits to get
329175. Keep the first two digits fixed in place and rotate again to get 321759.
Keep the first three digits fixed in place and rotate again to get 321597.
Finally, keep the first four digits fixed in place and rotate the final two
digits to get 321579. The resulting number is called the maximum rotation
of the original number.

Write a function that takes an integer as an argument and returns the
maximum rotation of that integer. You can (and probably should)
use the rotateRightmostDigits function from the previous exercise.

Problem
  - pop 7 (index 0) and append to end
  - pop 5 (index 1) and append to end
  - pop 9 (index 2) and append to end
  - pop   (index 3) and apppend to end
  - pop (index 4) and append to end

  6 numbers and we do this popping and appending 5 times


  - leading zero gets removed which should happen automatcially when we convert
  string to number

Test Cases / Examples
- given

Data Structure
- array and string

Algorithm
- similar to problem decomposition


Code


*/

function maxRotation(num) {
  let digits = String(num).split('');
  for (let idx = 0; idx < String(num).length - 1; idx++) {
    let poppedDigit = digits[idx];
    digits = digits.slice(0, idx).concat(digits.slice(idx + 1));
    digits.push(poppedDigit);
  }

  let result = Number(digits.join(''));

  return result;
}


console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845