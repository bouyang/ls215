/*
  takes array representation of minesweeper board
  returns another board where the val of each cell is the amount of its neighbouring mines

  0 is empty
  1 is mine
  replace mine with 9 and 0 with adjacent mines

  iterate through each row and column (map)
  if it is a 1, replace with 9
  if it is a 0, look at surrounding 1's and record that total sum
    look at +/- 1 index for row and column
    to check for validity, test that the value exists as well

*/

function minesweeperNumbers(board) {
  return board.map((row, rowIdx) => {
    return row.map((col, colIdx) => {
      if (col === 1) {
        return 9;
      } else {
        let mines = 0;
        for (let r = rowIdx - 1; r <= rowIdx + 1; r += 1) {
          for (let c = colIdx - 1; c <= colIdx + 1; c += 1) {
            if (board[r] && board[r][c] && board[r][c] === 1) {
              mines += 1;
            }
          }
        }
        return mines;
      }
    });
  });
}

console.log(minesweeperNumbers([
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
]));