/*

//Took 11.5 minutes //Doine using coderpad

// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

// Examples:

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".

Problem
- input: string
- output: string with weird case
  - for every second word, every fourth character is capitialized


- Assumptions
  - words are seperated by single space

Test Cases / Examples


Data Structure
- sentence.split(' ').map((word, index) => {
    if (index + 1) % 2 !== 0
      return word
    
    let transformedWord = word.split('').map((char, index) => {
      if (index + 1) % 4 !== 0
        return char.toUpperCase()
      else
        return char;
    }).join('');

    return transformedWord;
}).join(' ');


Algorithm


Code


*/

function toWeirdCase(sentence) {
  return sentence.split(' ').map((word, index) => {
    if ((index + 1) % 2 !== 0) {
      return word;
    }

    let transformedWord = word.split('').map((char, index) => {
      if ((index + 1) % 4 === 0) {
        return char.toUpperCase();
      } else {
        return char;
      }
    }).join('');

    return transformedWord;
  }).join(' ');
}

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');
