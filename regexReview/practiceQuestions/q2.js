function fields(str) {
  //white space alone
  //comma alone
  //possible white space then comma and then possible whitespace
  let pattern = /(\s|,|\s*,\s*)/;
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


