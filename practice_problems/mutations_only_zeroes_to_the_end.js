/*
  mutate array to move all zeroes to end
  keep all non-zero elements in same order

  iterate through all elements
  when encounter a zero, splice it out and increment a counter
    break out of the loop
  push additional 0's based on counter
*/

function zeroesToEnd(a) {
  let zeroes = 0;

  while (a.indexOf(0) !== -1) {
    for (let idx = 0; idx < a.length; idx += 1) {
      if (a[idx] === 0) {
        a.splice(idx, 1);
        zeroes += 1;
        break;
      }
    }
  }

  for (let count = 0; count < zeroes; count += 1) {
    a.push(0);
  }

  return a;
}

let arr = [1, 2, 0, 0, 4, 0, 5];
console.log(zeroesToEnd(arr));
console.log(arr);