/*
  
  connects previous word to the next word by the shared letters
  return the resulting string (remobing dup chars) and the min number of shared letters

  input: array of strings

  output: connected word and min number of shared letters

  q's
  input:
    - always strings in the array
    - empty array
    - strings have punctuation / special chars
    - all lowercase?
    - are strings arranged in overlap order

  have running word which builds (start with first word already in)
  iterate through each word
  split word into chars (while loop and idx stops at second to last word)
    - look at last char of current word
    - find the index at the next word and determine how many letters overlap (record min)
      // move -> over , over's index 2 = 3 overlap
    - add the second word's splice starting at index 2 onto end of word
    - increment idx
*/

function join(arr) {
  let wholeWord = [arr[0].split('')];

  let idx = 0;
  let overlaps = [];

  while (idx < arr.length - 1) {
    let letters1 = arr[idx].split('');
    let letters2 = arr[idx + 1].split('');

    let lastChar = letters1[letters1.length - 1];
    let word2Idx = letters2.indexOf(lastChar);
    overlaps.push(word2Idx + 1);

    wholeWord.push(letters2.splice(word2Idx + 1));

    idx += 1;
  }

  wholeWord = wholeWord.flat().join('');

  return [wholeWord, Math.min(...overlaps)];
}

console.log(join(["oven", "envier", "erase", "serious"]));