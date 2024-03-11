/*
  given array of strings and original str:
  output an array of boolean if the word can be formed by the original by
  swapping two letters only once

  iterate through each word and map:

  - iterate through each letter and compare to original str
  - keep track of how many different letters there have been and then
    flow into different branches
  - if first different letter, store the index of where it was in the orignal str
    - record that one letter has been checked (increment counter)
  - if second different letter, check if the index of the current letter is
    the same as the stored one.
  - if there is a 3rd different letter, return false
  
*/

function validateSwaps(arr, str) {
  let targetArr = str.split('');
  return arr.map(word => {
    let counter = 1;
    let lettersArr = word.split('');
    let swapIdx;

    if (lettersArr.length !== targetArr.length) return false;
    
    for (let idx = 0; idx < lettersArr.length; idx += 1) {
      if (lettersArr[idx] !== targetArr[idx]) {
        if (counter === 1) {
          swapIdx = idx;
          counter += 1;
        } else if (counter === 2) {
          if (lettersArr[idx] !== targetArr[swapIdx]) {
            return false;
          }
          counter += 1;
        } else {
          return false;
        }
      }
    }
    if (counter === 3) {
      return true;
    }
    return false;
  });
}

console.log(validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE"));

console.log(validateSwaps(['9786', '9788', '97865', '7689'], '9768'));

console.log((validateSwaps(['123', '321', '132', '13', '12'], '213')));