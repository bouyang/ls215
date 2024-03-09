/*
  returns true if a row is identical to a col otherwise false

  non-square = false

  length row and length col. If not equal then return false
  generate all possible cols into separate arrays
    iterate from 0 to col length
      set arr to []
      iterate from 0 to row legnth
      => add to arr
    => add to col array list
  iterate through rows and see if there is an entry in the col that is same


*/

function hasIdentical(arr) {
  let rowLength = arr.length;
  let colLength = arr[0].length;

  if (rowLength !== colLength) {
    return false;
  }
  
  for (let rowIndex = 0; rowIndex < rowLength; rowIndex += 1) {
    if (arr[rowIndex].length !== colLength) {
      return false;
    }
  }

  let allCols = [];
  for (let colIndex = 0; colIndex < colLength; colIndex += 1) {
    let colEntry = [];
    for (let rowIndex = 0; rowIndex < rowLength; rowIndex += 1) {
      colEntry.push(arr[rowIndex][colIndex]);
    }
    allCols.push(colEntry);
  }

  for (let rowIndex = 0; rowIndex < rowLength; rowIndex += 1) {
    if (compareArrays(arr[rowIndex], allCols)) {
      return true;
    }
  }

  return false;
}

function compareArrays(array, nestedArray) {
  let equalArr = false;

  nestedArray.forEach(ele => {
    let allSame = true;
    for (let idx = 0; idx < ele.length; idx += 1) {
      if (ele[idx] !== array[idx]) {
        allSame = false;
      }
    }
    if (allSame === true) {
      equalArr = true;
    }
  })

  return equalArr;
}

console.log(hasIdentical([
  [4, 4, 4, 4],
  [2, 4, 9, 8],
  [5, 4, 7, 7],
  [6, 4, 1, 0]
]));