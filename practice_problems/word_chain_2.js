/*
  
  word chain is an array of words where next word is formed by
  changing one letter
  adding or subtracting one letter

  input: array of words
  output: boolean if it is a chain or not

  input:
    - array of strings
    - empty array
    - given only strings
    - special chars?

  - iterate through words (for)
  - put current and next into helper functions
    - change a letter
      - get array of chars
      - length should be the same
      - iterate through array and compare to other word
      - if it is different, increment counter
      - at the end counter should be 1
    - add or subtract a letter
      - get array of chars
      - length should be +/- 1
      - find smaller word and iterate through the letters and splice it out of the second one
      - second one remaining should be 1
  - if either helper is ok, move to next word. if not, return false
  - repeat until all words iterated through

*/

function isWordChain(words) {
  for (let idx = 0; idx < words.length - 1; idx += 1) {
    if (!changeLetter(words[idx], words[idx + 1]) && !addOrSub(words[idx], words[idx + 1])) {
      return false;
    }
  }
  return true;
}

function changeLetter(word1, word2) {
  let letters1 = word1.split('');
  let letters2 = word2.split('');

  if (letters1.length !== letters2.length) {
    return false;
  }

  let counter = 0;
  for (let idx = 0; idx < letters1.length; idx += 1) {
    if (letters1[idx] !== letters2[idx]) {
      counter += 1;
    }
  }

  return counter === 1;
}

function addOrSub(word1, word2) {
  let letters1 = word1.split('');
  let letters2 = word2.split('');
  let shorter;
  let longer;

  if (letters1.length < letters2.length) {
    shorter = letters1;
    longer = letters2;
  } else {
    shorter = letters2;
    longer = letters1;
  }

  if (shorter.length - longer.length !== -1) {
    return false;
  }

  for (let idx = 0; idx < shorter.length; idx += 1) {
    let spliceIdx = longer.indexOf(shorter[idx]);
    if (spliceIdx !== -1) longer.splice(spliceIdx, 1);
  }

  return longer.length === 1;
  
}

// console.log(isWordChain(["row", "crow", "crown", "brown", "brawn"]));
// console.log(isWordChain(["run", "runny", "bunny"]));
console.log(isWordChain(["link", "blink", "wink", "sink"]));