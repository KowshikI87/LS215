function stringy(num) {
  if (num % 2 === 0) {
    return `${"10".repeat(Math.floor(num / 2))}`;
  } else {
    return `${"10".repeat(Math.floor(num / 2))}1`;
  }
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"