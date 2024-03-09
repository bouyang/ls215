/*
  returns the lowest neightbor of given coordinate
  symmetric size array


  declare currentLowestNum
  given coordinate, check neighbors' value and if lower than currentLow then store
    iterate row +/- 1 of coordinate
    iterate col +/- 1 of coordinate
    check if valid
      check if row !== undefined
      check if [row][col] !== undefined
    check the value (and compare)
  return currentLo
*/

function lowestElement(arr, x, y) {
  let currentLow = arr[x][y];

  for (let rowIndex = x - 1; rowIndex <= x + 1; rowIndex += 1) {
    for (let colIndex = y - 1; colIndex <= y + 1; colIndex += 1) {
      if (arr[rowIndex] && arr[rowIndex][colIndex]) {
        if (arr[rowIndex][colIndex] < currentLow) {
          currentLow = arr[rowIndex][colIndex];
        }
      }
    }
  }

  return currentLow;
}

console.log(lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 0, 0));