/*
  all nums from 1 to n (n > 0)
  choose 2 nums a and b
  product of a and b = sum of all nums in the sequence excluding a and b
  given number n, which nums are excluded? (a and b)

  input: number n
  output: array of the form [pairs]
    sorted by increasing a
    if no pairs, return []

  iterate through all pairs of numbers from 1 to n
  iterate through all pairs of numbers from prev + 1 to n
    sum all nums from 1 to n excluding those 2 numbers
    find product of a and b and if it is equal, then push [a, b] to result
  return result
*/

function removeNb (n) {
  let result = [];

  let sum = 0;
  for (let count = 1; count <= n; count += 1) {
    sum += count;
  }

  for (let a = 1; a < n; a += 1) {
    for (let b = 1; b < n; b += 1) {
      if (b === a) continue;

      let sumExcl = sum;
      sumExcl -= a;
      sumExcl -= b;

      if (sumExcl === a * b) {
        result.push([a, b]);
      }
    }
  }

  return result;
}

console.log(removeNb(26));
console.log(removeNb(100));