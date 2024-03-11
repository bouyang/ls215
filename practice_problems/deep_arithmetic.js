/*
  given array of strings of unknown dimensions
  return sum of every separate number in each string

  flatten, iterate through each and extract the number
  sum up all numbers and return
*/

function sum(arr) {
  let vals = arr.flat(Infinity).map(str => {
    return str.match(/-*\d+/g);
  }).flat(Infinity);

  return vals.reduce((acc, sum) => acc + Number(sum), 0);
}

console.log(sum(["1", "five", "2wenty", "thr33"]));
console.log(sum([["1X2", "t3n"],["1024", "5", "64"]]));
console.log(sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]));
console.log(sum(["2wenty", "thr33", "a1-1a"]));