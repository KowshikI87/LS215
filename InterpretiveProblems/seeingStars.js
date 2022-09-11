/* eslint-disable max-lines-per-function */
/*

Problem
- input: odd integer

- output: a star
  - num >= 7
  - number of lines = num
  - length of each line = num
    - middle line has num stars
    - all other lines have 3 stars

  - pattern for lines
    - the star is symmetrical
    - middle line: num stars, no spaces
    - for all lines below middle line, 1 star is centered
      - line 1 below middle line: 3 stars centered
      - line 2 below middle line: 1 space between each star
      - line 3 below middle line: 2 space between each star
      - and so on

  - alternative pattern for lines
    - num = 9
    - middle = Math.ceil(num / 2) = 5
    - number of lines above and lines below = 4 --> numLineshalf
    - line above
      - line 1 to middle - 1: "*" numSpaces "*" numSpaces "*"
        - numSpaces = numLinesHalf - 1 (= line number) = 3
      - line 2: numSpaces = numLinesHalf - 2 = 2
      - lline 3: numSpaces = 1
      - line 4: numSpaces = 0
      - line 5: always 0
      - line 6: 0
      - line 7: 1
      - line 8: 2
      - line 9: 3

  - outside loop: numLinesHalf = 4; numSpaces = numLinesHalf
  - if line number == middle:
    - numSpaces = 0
  else if line number < middle:
    numSpaces -= 1
  else
    numSpaces += 1

Test Cases / Examples


Data Structure
- string

Algorithm


Code

//To do better
//I could have remove the middle case as one off and skipped the entire
//loop iteration

*/

function star(num) {
  if (num < 7 || num % 2 === 0) {
    console.log("Number >= 7 and must be odd");
  }

  let middle = Math.ceil(num / 2);
  let numLinesAbvMiddle = Math.floor(num / 2);
  let numSpacesBtwStars = numLinesAbvMiddle;
  let numStartEndSpaces, numStars;

  for (let lineNum = 1; lineNum <= num; lineNum++) {
    if (lineNum === middle) {
      //don't like this line below
      //numSpacesBtwStars goes to -1 for middle and goes back to 0
      //for line right after middle
      numSpacesBtwStars -= 1;
      numStars = num;
    } else if (lineNum < middle) {
      numSpacesBtwStars -= 1;
      numStars = 3;
    } else {
      numSpacesBtwStars += 1;
      numStars = 3;
    }

    numStartEndSpaces = (num - numStars - (2 * numSpacesBtwStars)) / 2;

    if (lineNum === middle) {
      console.log(`${"*".repeat(num)}`);
    } else {
      let line = `${" ".repeat(numStartEndSpaces)}` +
      "*" + `${" ".repeat(numSpacesBtwStars)}` + "*" +
      `${" ".repeat(numSpacesBtwStars)}` + "*" +
      `${" ".repeat(numStartEndSpaces)}`;

      console.log(line);
    }
  }
}

star(7);
// // logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// // logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *