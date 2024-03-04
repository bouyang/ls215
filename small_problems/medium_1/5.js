const NUM_WORDS = {
  zero:  0,
  one:   1,
  two:   2,
  three: 3,
  four:  4,
  five:  5,
  six:   6,
  seven: 7,
  eight: 8,
  nine:  9,
};

function wordToDigit(str) {
  let result = str;

  Object.keys(NUM_WORDS).forEach(numWord => {
    let regex = new RegExp(numWord, 'g');
    result = result.replace(regex, NUM_WORDS[numWord]);
  });

  return result;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."