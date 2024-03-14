/*
  Given 2d array of mines, replace the ? with the number of mines that surround it
  - empty
  # mines
  ? number to be replaced

  iterate through each entry (map w index).
  if encounter ?, look at all neighbors and map to number of #'s
    look at rowIndex, colIndex +/- 1 if it exists
  return mapped arr
*/

function minesweeper(grid) {
  return grid.map((row, rowIdx) => {
    return row.map((entry, colIdx) => {
      if (entry === '-' || entry === '#' || entry === '') {
        return entry;
      } else {
        let numMines = 0;
        for (let r = rowIdx - 1; r <= rowIdx + 1; r += 1) {
          for (let c = colIdx - 1; c <= colIdx + 1; c += 1) {
            if (grid[r] && grid[r][c] && grid[r][c] === '#') {
              numMines += 1;
            }
          }
        }
        return String(numMines);
      }
    });
  });
}

console.log(minesweeper([
  ["-", "#", "-"],
  ["-", "?", "-"],
  ["-", "-", "-"]
]));