/*
  given 2D array with - or #, when gravity is switched on, # go to bottom

  based on each column, find how many #'s there are and then stack starting
  from the bottom


  count number of rows by input array's length
  iterate each column and count number of #'s
    length of first row = num columns
    iterate through all rows and count #'s for that col
    store in array that counts blocks for each column
    make new array that tells what row will have blocks (block map)
      starting at last row number and incrementing to smaller index #'s
      data struc of this: array with element [all row numbers]
  construct new array starting at each column:
    to determine if the row should have block, check if
    the index >= length - numBlocks
*/

function switchGravityOn(arr) {
  let numRows = arr.length;
  let numCols = arr[0].length;

  let numBlocks = [];
  for (let colIndex = 0; colIndex < numCols; colIndex += 1) {
    let sumBlocks = 0;
    for (let rowIndex = 0; rowIndex < numRows; rowIndex += 1) {
      if (arr[rowIndex][colIndex] === '#') {
        sumBlocks += 1;
      }
    }
    numBlocks.push(sumBlocks);
  }
  
  let result = [];
  for (let count = 0; count < numRows; count += 1) {
    result.push([]);
  }

  for (let colIndex = 0; colIndex < numCols; colIndex += 1) {
    for (let rowIndex = 0; rowIndex < numRows; rowIndex += 1) {
      if (rowIndex >= numRows - numBlocks[colIndex]) {
        result[rowIndex][colIndex] = '#';
      } else {
        result[rowIndex][colIndex] = '-';
      }
    }
  }

  return result;

}

console.log(switchGravityOn([
  ["-", "#", "#", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"]]));

console.log(switchGravityOn([
  ["-", "#", "#", "#", "#", "-"],
  ["#", "-", "-", "#", "#", "-"],
  ["-", "#", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"]
]));