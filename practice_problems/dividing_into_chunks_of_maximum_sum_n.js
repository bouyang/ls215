/*
  divides an arry into chunks such that sum of each chunk is <= n
  start left side and move to right

  iterate through each and check if you can add the next and still be <= n
*/

function divide(arr, n) {
  let result = [];
  let idx = 0;
  let sum = arr[0];
  let chunk = [arr[0]];
  while (idx < arr.length) {
    if (sum + arr[idx + 1] <= n) {
      sum += arr[idx + 1];
      chunk.push(arr[idx + 1]);
    } else {
      result.push(chunk);
      chunk = [arr[idx + 1]];
      sum = arr[idx + 1];
    }
    idx += 1;
  }
  return result;
}

console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5));