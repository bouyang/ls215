/*
  starting from 1st row, iterate through and add to result array index 0 to 2
  iterate through next row
*/

function transpose(matrix) {
  let result = [[], [], []];

  for (let index1 = 0; index1 < 3; index1 += 1) {
    for (let index2 = 0; index2 < 3; index2 += 1) {
      result[index2][index1] = matrix[index1][index2];
    }
  }

  return result;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]