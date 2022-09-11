/* eslint-disable max-len */
/*

Write a function that implements the Caesar Cipher.
The Caesar Cipher is one of the earliest and simplest ways to
encrypt plaintext so that a message can be transmitted securely.
It is a substitution cipher in which each letter in a plaintext
is substituted by the letter located a given number of positions
away in the alphabet.

For example, if the letter 'A' is right-shifted by 3 positions,
it will be substituted with the letter 'D'. This shift value is often
referred to as the key. The "encrypted plaintext" (ciphertext) can be
decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case).
Any other character is left as is.
The substituted letters are in the same letter case as the original letter.
If the key value for shifting exceeds the length of the alphabet,
it wraps around from the beginning.


Problem
- input: string, shiftInt
- output: encrypted string
- Rules
  - uppercase and lowercase is encrypted only. Other characters stays as is
  - uppercase character is encrypted using uppercase and lowercase characters
  encrypted using lowercase characters
  - if shift exceeds alphabet limit then we wrap around

Example / Test Cases
  A + 47 ---> v
  - code for a is 65

  A + 25 = z (25 left)
  from z to v = 21


  65 + 47 = 112; 47 % 26 = 21 so final result is 65 + 21 = 86 (v)


  D = 47 --> C
  - code for D is 68

  68 + 25 = 93; 25 % 26 = 25


  A - 65, Z - 90

  We have starting point for a character and shift

  as soon as we reach 90; we start again at 65


Data Structure
- string and integer

Algorithm
  - First Step: if we take the shift and % 26 ==> we remove all the cycles; noCycleShift
  Second Step: now add the updated cycle to starting character. newCharCode = startingCharCode + noCycleShift
    if newCharCode <= 90 (code for Z) then return newCharCode
    otherwise newCharCode = (newCharCode - 90) + 65 --> charCode for A

Test the algorithm

  A + 47 --> v
    = 47 % 26 ---> 21

    65 + 21 = 86

  D + 25 ---> C
    -- 25 % 26 = 25
    68 + 25 = 93 - 90 = 3 + 65 = 68

*/

const A_CHAR_CODE = "A".charCodeAt(0);
const Z_CHAR_CODE = "Z".charCodeAt(0);
const LOWERCASE_A_CHAR_CODE = "a".charCodeAt(0);
const LOWERCASE_Z_CHAR_CODE = "z".charCodeAt(0);
const CYCLE_LENGTH = 26;

function caesarEncrypt(sentence, shift) {
  let result = "";
  for (let idx = 0; idx < sentence.length; idx++) {
    let encryptedChar;

    if (sentence[idx].match(/[A-Z]/)) {
      encryptedChar = encryptChar(sentence[idx], 'upper', shift);
    } else if (sentence[idx].match(/[a-z]/)) {
      encryptedChar = encryptChar(sentence[idx], 'lower', shift);
    } else {
      encryptedChar = sentence[idx];
    }
    result += encryptedChar;
  }

  return result;
}

function encryptChar(char, charCase, shift) {

  let startCharCode, endCharCode;
  //base char code
  if (charCase === "lower") {
    startCharCode = LOWERCASE_A_CHAR_CODE;
    endCharCode = LOWERCASE_Z_CHAR_CODE;
  } else {
    startCharCode = A_CHAR_CODE;
    endCharCode = Z_CHAR_CODE;
  }

  let cyclRvmShift = shift % CYCLE_LENGTH;
  let finalCharCode = char.charCodeAt(0) + cyclRvmShift;

  if (finalCharCode <= endCharCode) {
    return String.fromCharCode(finalCharCode);
  } else {
    return String.fromCharCode(startCharCode + (finalCharCode - endCharCode - 1));
  }
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
