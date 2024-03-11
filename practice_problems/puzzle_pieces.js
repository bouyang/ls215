/*
  take two arrays
  add first ele in the first array to first ele in second array
  etc
  return true if all combos add upto the same number

  - check length and return false if not same
  - iterate through array (map) and add second array's ele at that index
  - generate unique values. if length = 1 then true
    - filter to check if arr's indexOf = index
*/

function puzzlePieces(a1, a2) {
  if (a1.length !== a2.length) {
    return false;
  }

  return a1.map((ele, idx) => ele + a2[idx]).filter((ele, idx, self) => self.indexOf(ele) === idx).length === 1;
}

console.log(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]));
console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 10]));