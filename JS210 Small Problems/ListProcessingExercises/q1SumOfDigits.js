function sum(digitString) {
  return String(digitString).split('').reduce((total, currentValue) => {
    return total + Number(currentValue);
  }, 0);
}


console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45