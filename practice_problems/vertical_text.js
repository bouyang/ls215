/*
  convert a string into a matrix of chars that can be read vertically
  add spaces when missing chars
  each col is a new word

  split str into words
  iterate through index of 0 to longest word length and add to row of result
    find length of each word in str and then max
  if there is no letter, (undefined) put a space instead
*/

function verticalText(str) {
  let words = str.split(' ');
  let maxLength = Math.max(...words.map(word => word.length));

  let result = [];

  for (let idx = 0; idx < maxLength; idx += 1) {
    let row = [];
    words.forEach(word => {
      if (word[idx] === undefined) {
        row.push(' ');
      } else {
        row.push(word[idx]);
      }
    })
    result.push(row);
  }

  return result;
}

console.log(verticalText("Holy bananas"));