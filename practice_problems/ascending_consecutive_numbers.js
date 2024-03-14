/*
  returns true if a string consists of ascending or ascending AND consecutive nums

  split string into all possible length numbers (check if divisible by the split)
    split into digits
    length 2: slice(0, 2), slice(2, 4), etc. until length
  see if one is ascending consecutively
    iterate through all possible length runs
    see if the next number is current + 1
*/

function ascending(str) {
  let digits = str.split('');
  let length = digits.length;
  let combos = [];

  for (let splitNum = 1; splitNum < length; splitNum += 1) {
    if (length % splitNum === 0) {
      let entry = [];
      for (let sliceNum = splitNum; sliceNum <= length; sliceNum += splitNum) {
        entry.push(digits.slice(sliceNum - splitNum, sliceNum).join(''));
      }
      combos.push(entry);
    }
  }
  return combos.some((entry, idx) => {
    for (let idx = 0; idx < entry.length - 1; idx += 1) {
      if (Number(entry[idx]) + 1 !== Number(entry[idx + 1])) {
        return false;
      }
    }
    return true;
  });
}

console.log(ascending("444445"));