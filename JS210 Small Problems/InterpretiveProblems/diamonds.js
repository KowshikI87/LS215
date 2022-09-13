/*
Write a function that displays a four-pointed diamond in an nxn grid,
where n is an odd integer supplied as an argument to the function.
You may assume that the argument will always be an odd integer.

Problem
- input: odd integer
- output: log to the console a diamond

- each line is always n line long
  - line 1: 1 diamond, space = n - # of diamond
  - line 2: # of diamond in line 1 + 2, space = n - $ of diamond
  - keep repating till we get to middle line ( Math.ceil(n / 2))
  - then number of diamond increment is -2, space's logic stays the same

Test Cases / Examples


Data Structure


Algorithm

Code


*/

function diamond(numLines) {
  let middleLineNum = Math.ceil(numLines / 2);
  let numDiamonds = 1;
  for (let lineNum = 1; lineNum <= numLines; lineNum++) {

    let increment;
    if (lineNum === 1) {
      increment = 0;
    } else if (lineNum <= middleLineNum) {
      increment = 2;
    } else {
      increment = -2;
    }

    numDiamonds += increment;
    //numSpaceOneSide always divisible by 2;
    let numSpacesOneSide = (numLines - numDiamonds) / 2;

    console.log(`${" ".repeat(numSpacesOneSide)}${"*".repeat(numDiamonds)}`);
  }
}

// diamond(1);
// // // logs
// // *

// diamond(3);
// // // logs
// //  *
// // ***
// //  *

diamond(9);
// // logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *