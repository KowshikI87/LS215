/*

Write a function that takes a floating point number representing an
angle between 0 and 360 degrees and returns a string
representing that angle in degrees, minutes, and seconds.

You should use a degree symbol (˚) to represent degrees,
a single quote (') to represent minutes, and a
double quote (") to represent seconds.

There are 60 minutes in a degree, and 60 seconds in a minute.

Make it work for negative degrees as well

Problem

- First, get it to a number between 0 to 359
- Second, convert to degree, minutes and seconds

Test Cases / Examples
  - Positive
    - >= 360 (hard case)
    - < 360 (easy case)

  - Negative
    - <= -360 (hard case)
    - > - 360 (easy case)


How do get a degree to a number between 0 to 359
- Case 1: Positive and < 360 --> no conversion required (degree % 360)
- Case 2: Positive and > 360 ---> Degree % 360
- Case 3: Negative and > - 360 ---> {[Positive(degree) % 360] * -1} + 360

Conversion
- get decimal part:
  - multiply by 60
    - take the non decimal part x multily by 60 --> minutes
    - take the decimal part x multiply by 60 ----> seconds
      (round down to no decimal)

    - for minutes and seconds, if we have one digit, pad with 0

Data Structure

Algorithm

Code

*/

const MAX_DEGREE = 360;
const DEGREE_TO_MINUTES = 60;
const MINUTE_TO_SECONDS = 60;

function dms(degree) {
  let standardDegree = standardizeDegree(degree);
  let expandedDegree = expandDegree(standardDegree);
  return expandedDegree;
}

//takes a degree and standardizes it
function standardizeDegree(degree) {
  let standardDegree;
  if (degree >= 0) {
    standardDegree = degree % MAX_DEGREE;
    return degree % MAX_DEGREE;
  } else {
    standardDegree = ((Math.abs(degree) % MAX_DEGREE) * -1) + MAX_DEGREE;
  }
  return standardDegree;
}

//takes a degree and expands it to degreeMinutesSeconds
function expandDegree(degree) {
  let degreeOnly = Math.floor(degree);
  let decimalForMinutes = degree - degreeOnly;
  let minutesOnly = Math.floor(decimalForMinutes * DEGREE_TO_MINUTES);
  let decimalForSeconds = (decimalForMinutes * DEGREE_TO_MINUTES) - minutesOnly;
  let secondsOnly = Math.floor(decimalForSeconds * MINUTE_TO_SECONDS);

  let finalDegreMinSec = `${degreeOnly}°${String(minutesOnly).padStart(2, "0")}'${String(secondsOnly).padStart(2, "0")}"`;

  return finalDegreMinSec;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"

