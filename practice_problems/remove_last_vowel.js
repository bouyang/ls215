/*
  removes the last vowel in each word in a sentence

  split str into words
  iterate through each word (map)
    -identify vowels in word by regex match
    - find the last vowel and the index of it (lastIndexOf)
    - splice that index out
    - return the new word
  join words back together
*/

function removeLastVowel(str) {
  return str.split(' ').map(word => {
    let vowels = word.match(/[aeiou]/ig);
    let idx = word.lastIndexOf(vowels[vowels.length - 1]);
    let letters = word.split('');
    letters.splice(idx, 1);
    return letters.join('');
  }).join(' ');
}

console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly.")
);
console.log(removeLastVowel("If you want to live a happy life, tie it to a goal, not to people."));