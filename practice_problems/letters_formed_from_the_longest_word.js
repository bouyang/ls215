/*
  
  if all strings in an array can be formed by using only the chars from the longest string

  input: array of strings

  output: boolean true or false

  expl:
    - only one unique longest string
  impl:
    - all words are lowercase
    - array is compopsed of only strings
  
  q's

  input:
    - empty array
    - non string in the array
    - upper/lowercase considered same letter
    - cannot re-use letter

  
  ds:
  arrays to track letters

  a
  ---------------

  - find longest string
  - split the longest into array of chars as a letter bank
  - iterate through each word and find out if it can be formed by letters in the bank
    - split word into chars
    - iterate through each char and find indexOf in the bank
    - if it is available, splice it out
    - if it is not available, return false
  - return true if all ok
*/

function canForm(arr) {
  let bank = arr.reduce(((longest, current) => {
    if (current.length > longest.length) {
      return current;
    } else {
      return longest;
    }
  }), arr[0]).split('');
  
  for (let idx = 0; idx < arr.length; idx += 1) {
    let newBank = bank.slice();
    let targetChars = arr[idx].split('');
    for (let charIdx = 0; charIdx < targetChars.length; charIdx += 1) {
      if (newBank.indexOf(targetChars[charIdx]) === -1) {
        return false;
      } else {
        newBank.splice(newBank.indexOf(targetChars[charIdx]), 1);
      }
    }
  }

  return true;
}

console.log(canForm(["may", "master", "same", "reams"]));
console.log(canForm(["monument", "momento", "moment", "tome"]));