/*
  array of ints and group length
  determine if it is possible to split all numbers from the array into groups of length such that there
    are consec numbers in each group


  if arra.length % group !== 0 then return false

  sort array values
  starting from first value, put into a group of length (groupLen)
  if the next value is inside of the array already, move that value to the end
    array[0] check
    if not, array.slice and add array[0] to end
  if the next value is not, put it into the group
    shift
  repeat until group length reached
  check that the group is consecutive, if not ,return false
    helper function passing in the array
  repeat until all array values are gone
*/

function consecutiveNums(arr, groupLen) {
  if (arr.length % groupLen !== 0) {
    return false;
  }

  while (arr.length > 0) {
    arr.sort((a, b) => a - b);
    let group = [];
    while (group.length < groupLen) {
      if (group.includes(arr[0])) {
        arr = arr.slice(1).concat(arr[0]);
      } else {
        group.push(arr.shift());
      }
    }
    if (!checkConsecutive(group)) return false;
  }
  return true;
}

function checkConsecutive(arr) {
  for (let idx = 0; idx < arr.length - 1; idx += 1) {
    if (arr[idx] + 1 !== arr[idx + 1]) return false;
  }
  return true;
}

console.log(consecutiveNums([1, 2, 3, 6, 2, 3, 4, 7, 8], 3));
console.log(consecutiveNums([5, 6, 3, 4], 2));
console.log(consecutiveNums([8, 5, 6, 6, 5, 4, 6, 8, 7, 5, 10, 8, 6, 3, 7, 2, 6, 5, 4, 7, 9, 9, 7, 6, 2, 10, 5, 5, 11, 8, 7, 6, 4, 7, 4, 3, 9, 8, 3, 4], 5));