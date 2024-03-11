/*
  Given array of seats, return max number of new people that can be seated
  2 seats gap between people
  empty seats 0
  occupied 1

  iterate and find 0
  idx +/- 2 and 1 must be either undefined or 0. If so, put a 1 by splice to mutate
    and increment a counter
  return counter
*/


function maximumSeating(arr) {
  let counter = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if ((!arr[index - 2] || arr[index - 2] === 0) &&
        (!arr[index - 1] || arr[index - 1] === 0) &&
        (!arr[index + 2] || arr[index + 2] === 0) &&
        (!arr[index + 1] || arr[index + 1] === 0) &&
          arr[index] !== 1) {
          arr.splice(index, 1, 1);
          counter += 1;
        }
  }

  return counter;
}

console.log(maximumSeating([0, 0, 0, 1, 0, 0, 1, 0, 0, 0]));