/*
  given nxn consecutive, return diamond sum
  DS is sum of all numbers making up diagonals between adjacent sides

  n is always odd

  7:
    1: mid
    2: mid +/- 1
    3: mid +/- 2
    4: mid +/= 3 ...
    5: +/- 2
    6: +/- 1
    7: mid

  
  generate array of values (starting at 1, generate rows of n x n)

  determine midpoint (floor n / 2)
  iterate starting at index 0 to n
    if 0 or n, subtract value at mid
    add to sum value at index +/- counter
    increment counter if index 0 to mid
    decrement counter if index > mid
  
*/

function diamondSum(n) {
  let values = [];
  let count = 1;
  for (let rowIdx = 0; rowIdx < n; rowIdx += 1) {
    let row = []
    for (let colIdx = 0; colIdx < n; colIdx += 1) {
      row.push(count);
      count += 1;
    }
    values.push(row);
  }

  let midpoint = Math.floor(n / 2);
  let sum = 0;
  let counter = 0;

  for (let idx = 0; idx < n; idx += 1) {
    if (idx === 0 || idx === n - 1) {
      sum -= values[idx][midpoint];
    }
    sum += values[idx][midpoint - counter];
    sum += values[idx][midpoint + counter];
    if (counter < midpoint) {
      counter += 1;
    } else {
      counter -= 1;
    }
  }

  return sum;
}

console.log(diamondSum(5));