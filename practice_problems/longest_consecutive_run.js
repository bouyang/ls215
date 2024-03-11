/*
  consec run is adjacent, consec integers. increasing or decreasing
  given arr of nums, return length of longest consec run

  input: array of nums
  output: length of longest run (num)

  starting at each number, map to check for how long of a run it will be
  set index counter to 0
  check if index counter is equal to index counter + starting number
  if it is, increment counter and continue to next cycle
  when it stops, record the counter + 1
  determine max run

  repeat this for decreasing

  determine what was the max run for both the increasing and decreasing arrays and return it
*/

function longestRun(arr) {
  let incRun = arr.map((element, index) => {
    let counter = 0;
    while (arr[index + counter] === arr[index] + counter) {
      counter += 1;
    }
    return counter;
  });

  let decRun = arr.map((element, index) => {
    let counter = 0;
    while (arr[index + counter] === arr[index] - counter) {
      counter += 1;
    }
    return counter;
  });

  return Math.max(...incRun.concat(decRun));
}

console.log(longestRun([1, 2, 3, 5, 6, 7, 8, 9]));
console.log(longestRun([5, 4, 2, 1]));