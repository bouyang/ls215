/*
  for a counter equal to length of arr,
  push to result array first element and then slice the remaining into another array
  repeat
*/

function incrementalDepth(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    return [arr[0], incrementalDepth(arr.slice(1))];
  }
}

console.log(incrementalDepth([1, 2, 3, 4, 5]));