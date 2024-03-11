/*
  takes a 5x5 array and returns true if it has at least one bingo, false if not


*/


function bingoCheck(board) {
  return checkHorizontal(board) || checkVertical(board) || checkDiagonal(board) || checkDiagonal2(board);
}

function checkHorizontal(board) {
  return board.some(row => row.every(ele => ele === 'x'));
}

function checkVertical(board) {
  for (let col = 0; col < board[0].length; col += 1) {
    if (board.every(row => row[col] === 'x')) {
      return true;
    }
  }
  return false;
}

function checkDiagonal(board) {
  for (let idx = 0; idx < board[0].length; idx += 1) {
    if (board[idx][idx] !== 'x') {
      return false;
    }
  }
  return true;
}

function checkDiagonal2(board) {
  for (let idx = 0; idx < board[0].length; idx += 1) {
    if (board[idx][board[0].length - idx - 1] !== 'x') {
      return false;
    }
  }
  return true;
}

console.log(bingoCheck([
  [45, "x", 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, 39, 44],
  [21, "x", 24, 30, 52]
]));

console.log(bingoCheck([
  ["x", "x", "x", "x", "x"],
  [64, 12, 47, 32, 90],
  [37, 16, 68, 83, 54],
  [67, 19, 98, 39, 44],
  [21, 75, 24, 30, 52]
]));

console.log(bingoCheck([
  [45, "x", 31, 74, 87],
  [64, 78, 47, "x", 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, "x", 44],
  [21, "x", 24, 30, 52]
]));

console.log(bingoCheck([
  ["x", 43, 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, 65, "x", 83, 54],
  [67, 98, 39, "x", 44],
  [21, 59, 24, 30, "x"]
]));