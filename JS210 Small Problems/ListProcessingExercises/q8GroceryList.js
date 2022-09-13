function buyFruit(fruits) {
  return fruits.reduce((summary, fruit) => {
    for (let idx = 0; idx < fruit[1]; idx++) {
      summary.push(fruit[0]);
    }
    return summary;
  }, []);
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
console.log("stop");