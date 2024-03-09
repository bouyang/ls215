/*
  array of numbers and n, split into n-sized groups
  return the column number that has the greatest sum
  if two have same return smallest col number

  first split into n group, then stack, then compare sum of cols

  create groupedArray. Push an array
    that array will be n elements (using shift) of the nums
    repeat until no more elements in num

  declare current largest and sum variables
  iterate through 0 to length of each of the groups (col)
  iterate through each group in the groupedArr (row)
  add all together to sum
  compare sum with current largest and store col #
*/

function colWithMaxSum(nums, n) {
  let groupedArray = [];

  while (nums.length > 0) {
    let storageArr = [];
    for (let count = 0; count < n; count += 1) {
      storageArr.push(nums.shift());
    }
    groupedArray.push(storageArr);
  }

  let currentLargestCol = 0;
  let currentLargestSum = groupedArray[0][0];

  for (let colIndex = 0; colIndex < groupedArray[0].length; colIndex += 1) {
    let sum = 0;
    for (let rowIndex = 0; rowIndex < groupedArray.length; rowIndex += 1) {
      sum += groupedArray[rowIndex][colIndex];
    }

    if (sum > currentLargestSum) {
      currentLargestCol = colIndex;
      currentLargestSum = sum;
    }
  }

  return currentLargestCol + 1;
}


let nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
let n = 4
console.log(colWithMaxSum(nums, n));

console.log(colWithMaxSum([19, 15, 1, 10, 2, 8], 6));