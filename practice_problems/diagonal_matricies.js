/*
  diagonally order numbers in n x n matrix
  originate from one corner (ul, ur ...)

  starting from 0 up to ?

  LR:
  1st row starts at ? then decreases until n values are input
  2nd row starts at ? - 1 ...

  1: 0
  2: 2
  3: 4
  4: 6
  5: 8
  6: 
  7: 

  deteremine ? for n:
    counting 1 to n: 0 += 2

  UL:
  increasing
    starting at 0
    next row 1
  UR:
  decreasing
    starting at ? - (n - 1)
    next row ? - (n - 1) + 1
  LL:
  increasing
    starting at ? - (n - 1)
    next row ? - (n - 1) - 1
  LR:
  decreasing
    starting at ?
    next row ? - 1
*/

function diagonalize(n, dir) {
  let startingPoint = 0;
  for (let count = 1; count < n; count += 1) {
    startingPoint += 2;
  }

  switch(dir) {
    case 'ul':
      return upperLeft(startingPoint, n);
      break;
    case 'ur':
      return upperRight(startingPoint, n);
      break;
    case 'll':
      return lowerLeft(startingPoint, n);
      break;
    case 'lr':
      return lowerRight(startingPoint, n);
      break;
  }
}

function upperLeft(startingPoint, n) {
  let result = [];
  for (let rowIndex = 0; rowIndex < n; rowIndex += 1) {
    let row = [];
    for (let count = 0; count < n; count += 1) {
      row.push(rowIndex + count);
    }
    result.push(row);
  }
  return result;
}

function upperRight(startingPoint, n) {
  let result = [];
  for (let rowIndex = 0; rowIndex < n; rowIndex += 1) {
    let row = [];
    for (let count = startingPoint - (n - 1); count > startingPoint - (n - 1) - n; count -= 1) {
      row.push(rowIndex + count);
    }
    result.push(row);
  }
  return result;
}

function lowerLeft(startingPoint, n) {
  let result = [];
  for (let rowIndex = 0; rowIndex < n; rowIndex += 1) {
    let row = [];
    for (let count = startingPoint - (n - 1); count < startingPoint - (n - 1) + n; count += 1) {
      row.push(count - rowIndex);
    }
    result.push(row);
  }
  return result;
}

function lowerRight(startingPoint, n) {
  let result = [];
  for (let rowIndex = 0; rowIndex < n; rowIndex += 1) {
    let row = [];
    for (let count = startingPoint; count > startingPoint - n; count -= 1) {
      row.push(count - rowIndex);
    }
    result.push(row);
  }
  return result;
}

console.log(diagonalize(3, "ul"));
console.log(diagonalize(4, "ur"));
console.log(diagonalize(3, "ll"));
console.log(diagonalize(5, "lr"));