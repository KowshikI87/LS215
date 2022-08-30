function mysteryMath(expression) {
  // let pattern = /(\+|-|\*|\/) /; //my solution; use charcater classes instead
  let pattern = /[+\-*\/]/; //launch school solution

  return expression.replace(pattern, '?');
}

console.log(mysteryMath('4 + 3 - 5 = 2'));
// -> '4 ? 3 - 5 = 2'

console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// -> '(4 ? 3 + 2) / 7 - 1 = 1'