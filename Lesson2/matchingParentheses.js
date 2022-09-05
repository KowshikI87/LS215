//we can use a stack but let's try to use regex
//---> launch school solution does not use regex so I won't bother

//go character by character. If I see "(" then push to array
//if I see ")" then
//if array.length not > 0 then return false
//else pop from array

//when I am done, return if array.length === 0

function isBalanced(str) {
  let stack = [];
  let charsList = str.split('');
  for (let idx = 0; idx < charsList.length; idx++) {
    if (charsList[idx] === "(") {
      stack.push(charsList[idx]);
    } else if (charsList[idx] === ")") {
      if (stack.length < 1) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}


console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false