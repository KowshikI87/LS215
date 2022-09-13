/*

Took: 7 minutes

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

Problem
- input: array of chars
  - the chars are one of 'n', 's', 'e' or 'w'
  - each char represents a 1 block walk in the direction specified by the char
  - each block takes 1 minute
- output: true/false
  - true if these conditions meet:
    - walk is exactly 10 minutes
    - you return back where you started

Example / Test Cases


Data Structure


Algorithm
- first check: array.length === 10
- second check
  - n is + and s is - and they go in pair
  - e is + and w is - and they go in pair

  - each time we walk in n we + ns variable and if walk in s then - ns variable
  - similar logic with es variable

  -return true if ns and es is both 0

Code


*/

function isValidWalk(walk) {

  if (walk.length !== 10) {
    return false;
  }

  //assuming that we only get 4 types of char in the walk app: n, s, e, w

  let northSouthWalk = 0;
  let eastWestWalk = 0;

  walk.forEach(walkDirChar => {
    if (walkDirChar === 'n') {
      northSouthWalk += 1;
    } else if (walkDirChar === 's') {
      northSouthWalk -= 1;
    } else if (walkDirChar === 'e') {
      eastWestWalk += 1;
    } else {
      eastWestWalk -= 1;
    }
  });

  return northSouthWalk === 0 && eastWestWalk === 0;
}



