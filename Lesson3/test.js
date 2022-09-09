let numString = "1..5, 3, 7, 2, 4, 1";
let ranges = numString.split(',');
// let seperators = /[\-:(\.\.)]/;
let seperators2 = /(-|:|\.\.)/;
// let firstRange = ranges[0].split(/\.\./);
let firstRange = ranges[0].split(seperators2); //why is result giving me [1, '', 5]
firstRange = ranges[0].match(/[0-9]/g); //works
console.log(firstRange);