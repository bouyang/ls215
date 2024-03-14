/*
  converts an ordered number array into an array of ranges

  starting at index 0, set beginning number
  check if next number is consecutive.
  until it is not consecutive, then record first and last and push that to result arr
    if beginning = ending then just push the number
  then reset next number as beginning
  repeat until idx reaches arr.length
*/

function numbersToRanges(arr) {
  let idx = 0;
  let begNum = arr[0];
  let endNum;
  let result = [];
  while (idx < arr.length) {
    if (arr[idx + 1] === arr[idx] + 1) {
      idx += 1;
    } else {
      endNum = arr[idx];
      if (begNum === endNum) {
        result.push(`${begNum}`);
        begNum = arr[idx + 1];
        idx += 1;
      } else {
        result.push(`${begNum}-${endNum}`);
        begNum = arr[idx + 1];
        idx += 1;
      }
    }
  }
  return result;
}

console.log(numbersToRanges([1, 3, 4, 5, 6, 7, 8]));