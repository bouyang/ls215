/*
  replaces every row and col that contains at least one 1 into a row/col filled with all 1's

  input: array of rows (array of nums)

  iterate through each row of array. If there is a 1, then map to all 1's
    also determine what column (index) are 1

  iterate through which columns have 1's and then modify the result array to fill the col's
    iterate through result rows
*/

function onesInfection(arr) {
  let colOnes = [];
  let result = arr.map(row => {
    row.forEach((ele, index) => {
      if (ele === 1) colOnes.push(index);
    });
    if (row.some(num => num === 1)) {
      return row.map(ele => 1);
    } else {
      return row.map(ele => 0);
    }
  });

  colOnes.forEach(colIndex => {
    result.forEach(row => {
      row[colIndex] = 1;
    });
  });
  return result;
}

console.log(onesInfection([
  [1, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]
]));