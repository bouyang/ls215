/*
  swap tracker

  in while loop:

  iterate through array up until index of length - 2
    check if element is greater than second. If so, swap. Change swap tracker
    swap by changing elements in the index
    
  if swap tracker is false then return array. Otherwise reset swap tracker
  
*/

function bubbleSort(arr) {
  let swapTrack = true;

  while(swapTrack) {
    swapTrack = false;
    for (let index = 0; index < arr.length - 1; index += 1) {
      if (arr[index] > arr[index + 1]) {
        temp = arr[index + 1];
        arr[index + 1] = arr[index];
        arr[index] = temp;
        swapTrack = true;
      }
    }
  }

  return arr;
}



const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]