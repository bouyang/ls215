/*
  given a list of lists to a certain length n
  each element is a cell from 0 to n - 1
  each cell contains keys to open other cells
  cell 0 is open where you find keys
  open those cells to find new keys etc
  if possible to open all cells reutrn true/false

  starting at first cell, get the keys and record which keys into key array
    check if the keys that you are adding are new. If not new, then return false
  with those keys, start to open more cells and record those keys. record which new cells were opened
    if you add a new key (indexOf === -1)
    re-iterate through keysArr and add the keys found inside to keysArr
  repeat until you stop adding new keys
*/

function openAll(cells) {
  let keysArr = [];
  let cellsOpened = [0];

  cells[0].forEach(key => keysArr.push(key));

  while (cellsOpened.length < cells.length) {
    let result = true;
    let keyAdded = false;
    keysArr.forEach(cellIdx => {

      if (cellsOpened.indexOf(cellIdx) === -1) {
        cellsOpened.push(cellIdx);
      }

      cells[cellIdx].forEach(key => {
        if (keysArr.indexOf(key) === -1) {
          keysArr.push(key);
          keyAdded = true;
        }
      });
      
    });
    if (cellsOpened.length === cells.length) {
      return true;
    }

    if (keyAdded === false) {
      result = false;
    }

    if (!result) {
      return false;
    }
  }
  return true;
}

console.log(openAll([[1], [0]]));
console.log(openAll([[2, 1], [1], [2], [4], [0, 1]]));
console.log(openAll([[1], [2], [3], []]));