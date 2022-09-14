/*

Sort the given array of strings in alphabetical order, case insensitive. For example:

Problem


Example / Test Cases


Data Structure


Algorithm


REview: took 3 minutes

*/

let sortme = function(names) {
  return names.sort((chars1, chars2) => {
    let chars1LowerCase = chars1.toLowerCase();
    let chars2LowerCase = chars2.toLowerCase();

    if (chars1LowerCase > chars2LowerCase) {
      return 1;
    } else if (chars1LowerCase < chars2LowerCase) {
      return -1;
    } else {
      return 0;
    }
  });
};

console.log(sortme(["Hello","there","I'm","fine"]));


