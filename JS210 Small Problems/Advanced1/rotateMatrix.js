/*


Problem
- input: matrix
- output: matrix
- rotate a matrix 90 degree
  - one way to define this:
    - first row becomes last column
    - second row becomes second column
    - third row becomes first column
  - second way to define this:
    - first column --> first row
    - second column --> second row
    - third column ----> third column
    - the order that numbers are pushed in is from last value to first
      - example: last value of column becomes first value in row,
      second last value in column becomes second value in row, etc.

Test Cases / Examples


Data Structure
- array


Algorithm
  - outside loop : number of iteration = number of columns (subarray.length)
    - inside loop: number of iteration = number of rows (array.length)
      - row.push(arry[array.length - row + 1][col])
  result.push(row)

Code


*/

function rotate90(matrix) {
  let result = [];
  for (let colID = 0; colID < matrix[0].length; colID++) {
    let row = [];
    for (let rowID = 0; rowID < matrix.length; rowID++) {
      row.push(matrix[matrix.length - rowID - 1][colID]);
    }
    result.push(row);
  }
  return result;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]