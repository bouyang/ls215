/*
  given 2 strings could be diff length
  determine min number of char deletions required to make an anagram
  any chars can be deleted

  input:
    - always strings?
    - empty string
    - non ABC chars or spaces?
    - lower/upper case considered anagram
  
  find the common chars between both
    - iterate through one of the strings (convert to array of chars)
    - see if it is in the other string
      - if so, splice it out of the second string
      - store that letter into another array (common letters)
    - repeat until all letters iterated through
  - iterate through the common letters array and splice those out of string 1
  - extra should be the length of string 1 and 2 arrays
  find how many letters are "extra" over the common chars
  add those together to get number

*/

function makeAnagram(a, b) {
  let charA = a.split('');
  let charB = b.split('');
  let common = [];

  charA.forEach(letter => {
    let letterIdx = charB.indexOf(letter)
    if (letterIdx !== -1) {
      charB.splice(letterIdx, 1);
      common.push(letter);
    }
  });

  common.forEach(letter => {
    let letterIdx = charA.indexOf(letter);
    charA.splice(letterIdx, 1);
  })

  return (charA.length + charB.length);
}

console.log(makeAnagram("showman", "woman"));

// wman, man, . . .,
// => 2 + 0

console.log(makeAnagram("cde", "abc"));