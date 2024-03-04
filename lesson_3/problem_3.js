const LETTER_PAIRS = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

function isBlockWord(word) {
  let lettersUsed = [];
  let repeat = true;

  word.split('').forEach(letter => {
    LETTER_PAIRS.forEach(pair => {
      if (pair.includes(letter.toUpperCase())) {
        lettersUsed.push(pair);
        if (lettersUsed.indexOf(pair) !== lettersUsed.lastIndexOf(pair)) {
          repeat = false;
        }
      }
    })
  });

  return repeat;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false