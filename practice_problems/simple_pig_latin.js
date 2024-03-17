/*
  move the first letter of each word to the end and then add 'ay' to the end
  punctuation ok
  maintain capitalization

  split str into words
  iterate through each word (map)
  slice starting at 1, plus first char, plus ay
*/


function pigIt(str){
  return str.split(' ').map(word => {
    if (/[^A-Za-z]/.test(word)) return word;
    return word.slice(1) + word[0] + 'ay';
  }).join(' ');
}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('This is my string'));
console.log(pigIt('Hello word !'));
console.log(pigIt('This is my, string'));