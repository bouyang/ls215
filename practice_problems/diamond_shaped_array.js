/*
  returns an array that expands by 1 from 1 to x and reduces back to 1

  - count up to x
  - push array of elements at count
    - second iterator that adds elements up to count
    - pus whole group to result arr
  - count down to 1
  - push array of elements at count
*/


function diamondArrays(x) {
  let result = [];
  for (let count = 1; count <= x; count += 1) {
    let element = [];
    for (let count2 = 1; count2 <= count; count2 += 1) {
      element.push(count);
    }
    result.push(element);
  }

  for (let count = x - 1; count > 0; count -= 1) {
    let element = [];
    for (let count2 = 1; count2 <= count; count2 += 1) {
      element.push(count);
    }
    result.push(element);
  }
  return result;
}