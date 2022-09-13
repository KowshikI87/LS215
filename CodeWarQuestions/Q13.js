/*

Took: 37 minutes with all the experimenting

Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters


Problem


Example / Test Cases


Data Structure


Algorithm
- I think I can just capture the uppercase characters and replace them with
 "-lowercaseChar";

- I need to review capture group


Code

*/

function kebabize(str) {
  let numbers = /[0-9]/g;
  let upperCasePattern = /([A-Z])/g;

  return str
    .replace(numbers, '')
    .replace(upperCasePattern, '-$1')
    .replace(/^-/, "")
    .toLowerCase();

  //I tried converting match groups to lowercase right away
  //without using line 9 but it was not working and the callback
  //function that I have to pass to .replace method starts getting complicated
}



