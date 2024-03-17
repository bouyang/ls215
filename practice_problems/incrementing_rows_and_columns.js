/*
  take 3 params r, c, i
  r and c and number of rows and cols
  i list of incrememnting operations

  return reuslting matrix after incrememtning operations
  add 1 to rows or cols specified

  inputs:
    - always be same row and col?
    - always be num, num, arr
    - no operation
    - always be in the form of num + r or c
  
  generate starting arr from r and c

  iterate through i entries
  extract number and (r/c)
    - to account for >single digit transofrm, slice up to last index
  if row, find that index and incremement each col in that row
  if col, iterate through each row and incremement the col

  return arr
*/

function final(r, c, i) {
  let matrix = [];

  for (let row = 0; row < r; row += 1) {
    matrix.push([]);
    for (let col = 0; col < c; col += 1) {
      matrix[row].push(0);
    }
  }

  i.forEach(entry => {
    let index = Number(entry.slice(0, entry.length - 1));
    let direction = entry.slice(entry.length - 1);

    if (direction === 'r') {
      for (let col = 0; col < c; col += 1) {
        matrix[index][col] += 1;
      }
    } else {
      for (let row = 0; row < r; row += 1) {
        matrix[row][index] += 1;
      }
    }
  });

  return matrix;
}

console.log(final(3, 3, ["2r", "2c", "1r", "0c"]));
// console.log(final(2, 2, ["0r", "0r", "0r", "1c"]));