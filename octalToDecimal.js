function octalToDecimal(numberString) {
  return numberString.split('').reduce((total, currentDigit, currentIndex) => {
    let power = numberString.length - currentIndex - 1;
    return total + (Number(currentDigit) * (8 ** power));
  }, 0);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9