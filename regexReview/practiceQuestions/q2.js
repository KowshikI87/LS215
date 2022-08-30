function fields(str) {
  //white space alone
  //comma alone
  //possible white space then comma and then possible whitespace
  // let pattern = /(\s|,|\s*,\s*)/; //matching too many times

  // let pattern = /\s*,*\s*/; //matches between every character because of "*"

  //launch school solutoin
  let pattern = /[ \t,]+/; //I don't know how we are dealing with 2nd test case with this pattern
  return str.split(pattern);
}

console.log(fields("Pete,201,Student"));
// -> ['Pete', '201', 'Student']

console.log(fields("Pete \t 201    ,  TA"));
// -> ['Pete', '201', 'TA']

console.log(fields("Pete \t 201"));
// -> ['Pete', '201']

console.log(fields("Pete \n 201"));
// -> ['Pete', '\n', '201']


//test string
// console.log("Pete,201,Student");
// console.log("Pete \t 201    ,  TA");
// console.log("Pete \t 201");
// console.log("Pete \n 201");

// Pete,201,Student
// Pete 	 201    ,  TA
// Pete 	 201
// Pete 
//  201