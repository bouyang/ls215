/*
  given grid of numbers
  return with spotlight sum
  spotlight sum is total of all numbers surrounding including itself

  iterate through each row
  new value will be itself plus all rows/cols that have index +/- 1 (if valid)
    test if valid by seeing if that value exists in the grid (not undefined)
*/

function spotlightMap(grid) {
  let result = [];

  for (let rowIndex = 0; rowIndex < grid.length; rowIndex += 1) {
    let rowResult = [];
    for (let colIndex = 0; colIndex < grid[0].length; colIndex += 1) {
      let newVal = 0;
      for (let neighborRow = rowIndex - 1; neighborRow <= rowIndex + 1; neighborRow += 1) {
        for (let neighborCol = colIndex - 1; neighborCol <= colIndex + 1; neighborCol += 1) {
          if (grid[neighborRow] && grid[neighborRow][neighborCol]) {
            newVal += grid[neighborRow][neighborCol];
          }
        }
      }
      rowResult.push(newVal);
    }
    result.push(rowResult);
  }

  return result;
}

console.log(spotlightMap([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));

console.log(spotlightMap([
  [2, 6, 1, 3, 7],
  [8, 5, 9, 4, 0]
]));