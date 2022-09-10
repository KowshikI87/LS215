//middle = Math.floor(array.length / 2)
//odd --> array[middle]
//even --> arr.slice[middle - 1, middle + 1]

function centerOf(sentence) {
  let middle = Math.floor(sentence.length / 2);

  if (sentence.length % 2 !== 0) {
    return sentence.slice(middle, middle + 1);
  } else {
    return sentence.slice(middle - 1, middle + 1);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"