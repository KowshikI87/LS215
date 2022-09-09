//27 minute spent so far; about 20 minutes of it on regex.
//I have to remmeber the start and end charcter of a regex; characters I
//need to escape and how to use ".." in character class

/* eslint-disable max-len */
/*
You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]).
Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive. --> I don't get it

Your job is to return a list of complete numbers.

The possible separators are: ["-", ":", ".."]

"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
"1-3, 1-2" --> 1, 2, 3, 11, 12
"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
"104-2" --> 104, 105, ... 112
"104-02" --> 104, 105, ... 202

//technically, 1-3, 1-2 is same as 1, 3, 1, 2
//we start at 1. keep adding digit till last digit = 3
//then we start adding from 3 till last digit is 1. and so on. This is easy

Problem
  - Input: a string of numbers
  - Observations
    - the seperators don't matter and the commas don't matter.
    - All I need is to get the list of numbers in an array;
      - use match method and not split method as I don't know how to use ".." in character class
    - Then once I have them, I know numbers are always increasing - So it is rather easy to get range from that.

  - Assumptions
    - Can't have negative numbers (since "-" is a seperator)
    - We won't have decimals; case could be made for having them
    - Don't worry too much about not given a number

Test Cases/Examples
- Given

Data Structure
- an array. One array for holding the result, another for holding range end points

Algorithm

  rangeEndPoints = numberString.match(/[0-9]+/g)
  rangeEndPoints = rangeEndPoints.map(rangeEndPoint => Number(rangeEndPoint))

  resultingNumbers = []
  resultingNumber.push(rangeEndPoints[0])

  for(iterate from second to last rangeEndPoints)
    currentRangeEndPoint = rangeEndPoints[idx]
    curntNumber = last number in resultingNumbers + 1
    resultingNumbers.push(curntNumber)
    //N = number of digits in currentRangeEndPoint
    while(curntNumber.lastNDigit !== currentRangeEndPoint)
      curntNumber = last number in resultingNumbers + 1
      resultingNumbers.push(curntNumber)


"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
1, 1, 14 --> 1, 2, 3, 4, 5, ..... 11, 12, 13, 14

Code

*/

function rangeExpander(numberString) {
  let rangeEndPoints = numberString.match(/[0-9]+/g);
  rangeEndPoints = rangeEndPoints.map(rangeEndPoint => Number(rangeEndPoint));

  let resultingNumbers = [];
  resultingNumbers.push(rangeEndPoints[0]);

  for (let idx = 1; idx < rangeEndPoints.length; idx++) {
    let currentRangeEndPoint = rangeEndPoints[idx];
    let curntRangEndPtStr = String(currentRangeEndPoint);

    let curntNumber = rangeEndPoints[idx - 1] + 1; //should use the last number in resultingNumbers + 1
    let curntNumStr = String(curntNumber);
    resultingNumbers.push(curntNumber);

    while (curntNumStr.slice(curntNumStr.length - curntRangEndPtStr.length) !== curntRangEndPtStr) {
      curntNumber = resultingNumbers[resultingNumbers.length - 1] + 1;
      resultingNumbers.push(curntNumber);

      curntNumStr = String(curntNumber);
      curntRangEndPtStr = String(currentRangeEndPoint);
    }
  }


  return resultingNumbers;
}

//I missed major part of the problem. When numbers are seperated by commas, I only need to add the correct number
//When given a range, I need to add all the numbers

console.log(rangeExpander("1, 3, 7, 2, 4, 1")); //1, 3, 7, 12, 14, 21
console.log(rangeExpander("1-3, 1-2")); //1, 2, 3, 11, 12
console.log(rangeExpander("1:5:2")); //1, 2, 3, 4, 5, 6, ... 12
console.log(rangeExpander("104-2")); //104, 105, ... 112
console.log(rangeExpander("104-02")); //104, 105, ... 202
console.log(rangeExpander("1, 1, 14")); //1, 2, 3, 4, 5, ... 10, 11, 12, 13, 14