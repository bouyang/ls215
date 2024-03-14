/*
  circular array is if its subarrays can be reordered such that each subarray's last ele is equal to next
  subarray's first ele

  - collect all first elements and last elements
  - if there is a perfect match between the elements then true
    - sort both arrays
    - iterate through one and compare if it is the same as the other array
*/

function isCircular(arr) {
  let first = [];
  let last = [];
  arr.forEach(subarray => {
    first.push(subarray[0]);
    last.push(subarray[subarray.length - 1]);
  });

  first.sort();
  last.sort();

  for (let idx = 0; idx < first.length; idx += 1) {
    if (first[idx] !== last[idx]) {
      return false;
    }
  }
  return true;
}

console.log(isCircular([[9, 8], [6, 9, 1], [8, 4, 2], [1, 9], [2, 1, 6]]));
console.log(isCircular([[1, 1], [1, 2]]));