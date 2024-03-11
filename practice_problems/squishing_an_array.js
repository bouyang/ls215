/*
  squishes an array from left or right

  squish => if left, sum two leftmost values until one value
  if right, rightmost values
  return all arrays including first and last

  result array
  if left
  - push first array
  - find length (5), sum up first 2 values + slice 2 -> length
    record as new array
    continue until length 1 then just push last value (as array)
  if right, reverse it and then push the reversed array
*/


function squish(arr, d) {
  if (arr.length === 0) return [];

  let result = [arr];
  let currentArr = arr;
  
  while (currentArr.length > 1) {
    if (d === 'left') {
      let length = currentArr.length;
      if (length > 1) {
        let sum = (currentArr[0] + currentArr[1]);
        currentArr = currentArr.slice(2, length);
        currentArr.unshift(sum);
        result.push(currentArr);
      }
    } else {
      let tempArr = currentArr.slice().reverse();
      let length = tempArr.length;
      if (length > 1) {
        let sum = (tempArr[0] + tempArr[1]);
        tempArr = tempArr.slice(2, length);
        tempArr.unshift(sum);
        result.push(tempArr.slice().reverse());
      }
      currentArr = tempArr.slice().reverse();
    }
  }

  return result;

}

console.log(squish([1, 2, 3, 4, 5], "left"));
console.log();
console.log(squish([1, 2, 3, 4, 5], "right"));