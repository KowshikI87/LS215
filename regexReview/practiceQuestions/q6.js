// function formatDate(dateString) {
//   let pattern = /\d{4}-\d{2}-\d{2}/;
//   if (dateString.match(pattern)) {
//     return dateString.replace(/-/g, ".");
//have to use a regex pattern to replace all instances
//   } else {
//     return dateString;
//   }
// }

//I misunderstood the problem.

//LS Solution
let formatDate = function (original_date) {
  return original_date.replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, '$3.$2.$1');
};


console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)