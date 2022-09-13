/*

Problem
- Input: array of subarray
- Output: array of subarray

- Original Matrix
  - array.length = # of rows
  - any subarray.length = # of columns

- tranposedMatrix
  - array.length = # of columns of original matrix
  - any subarray.length = # of rows in original matrix

- we have a choice. Fill row by row or fill column by column

- Fill row by row
  - iteration for number of rows = subarray.length
    - iteration for a single row = array.length

  - row 1 = column 1
  - row 2 - column 2
  - ...

/ /rows --> columns


Test Cases / Examples
- given

[[1, 2, 3, 4, 5],
[4, 3, 2, 1, 0],
[3, 7, 8, 6, 2]]

[[1, 4, 3],
[2, 3, 7],
[3, 2, 8],
[4, 1, 6],
[5, 0, 2]]


Data Structure
- array


Algorithm
  - transposedMatrix = []

  for (let col = 0; idx < arr[0].length; idx++)
    let transposedRow = []
    for (let row = 0; idx < array.length)
      transposedRow.push(origArr[row][col])
    transposedMatrix.push(transposedRow)

Code


*/
