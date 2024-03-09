/*
  given array of numbers
  find peak (number to the left and right are less than it)
  must have a number to the left and right ie peaks are not first or last
  return position and peak
  can have multiple peaks
  for plateau, peak is the first instance of the number

  iterate through each number and check if the number before and after exist
    and if so, if they are smaller. if so, that is a peak (record pos and peak val)
    to account for plateaus, record the nextIdx and increment it. Test if it ever
    is less than the current value
*/

function pickPeaks(arr){
  let result = { pos: [], peaks: [] };

  for (let idx = 1; idx < arr.length - 1; idx += 1) {
    if (arr[idx - 1] < arr[idx]) {
      let nextIdx = idx + 1;
      if (arr[nextIdx] < arr[idx]) {
        result['pos'].push(idx);
        result['peaks'].push(arr[idx]);
      } else if (arr[nextIdx] === arr[idx]) {
        while (nextIdx < arr.length) {
          nextIdx += 1
          if (arr[nextIdx] < arr[idx]) {
            result['pos'].push(idx);
            result['peaks'].push(arr[idx]);
            break;
          } else if (arr[nextIdx] > arr[idx]) {
            break;
          }
        }
      }
    }
  }

  return result;
}

console.log(pickPeaks([1,2,3,6,4,1,2,3,2,1]));
console.log(pickPeaks([2,1,3,2,2,2,2,5,6]));
console.log(pickPeaks([1,2,2,2,2,1]));