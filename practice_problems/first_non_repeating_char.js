/*
  take string niput
  return first char that is not repeated anywhere in the str
  upper and lower and considered same but function returs the correct case
  if all repeating, empty str

  input: str
    spaces?
    non-ABC?
    empty str?
  output: letter (correct case)

  iterate through each letter in string and check if it exists only once
  if so, check if the string is all the same letter
    if so, return empty str
  if it makes it through, then it is all the same letter so return ''

*/

function firstNonRepeatingLetter(s) {
  let origLetters = s.split('');
  let letters = s.toLowerCase().split('');
  for (let idx = 0; idx < letters.length; idx += 1) {
    let currLetter = letters[idx];
    if ((letters.indexOf(currLetter)) === letters.lastIndexOf(currLetter))
    {
      return origLetters[idx];
    }
  }
  return '';
}

console.log(firstNonRepeatingLetter('stress'));
console.log(firstNonRepeatingLetter('sTresS'));
console.log(firstNonRepeatingLetter('mmm'));
console.log(firstNonRepeatingLetter('mMm'));