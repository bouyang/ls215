/*
0, 0 | 0, 1 | 0, 2
1, 0 | 1, 1 | 1, 2

to

0,0 => 0, 1
0,1 => 1, 1
0,2 => 2, 1

1,0 => 0, 0
1,1 => 1, 0
1,2 => 2, 0

0,0 => 0, 2
0,1 => 1, 2
0,2 => 2, 2

1,0 => 0, 1
1,1 => 1, 1

iterating through row and column, each new value is 0 to # columns, highest # row to 0
*/

function rotate90(matrix) {
  let numCols = matrix[0].length;
  let numRows = matrix.length;
  let result = [];
  let flatMatrix = matrix.flat();
  let flatMatrixIndex = 0;

  for (let count = 0; count < numCols; count += 1) {
    result.push([]);
  }

  for (let rows = numRows - 1; rows >= 0; rows -= 1) {
    for (let cols = 0; cols < numCols; cols += 1) {
      result[cols][rows] = flatMatrix[flatMatrixIndex];
      flatMatrixIndex += 1;
    }
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