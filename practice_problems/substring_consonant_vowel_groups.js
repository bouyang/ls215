/*
  retrieve unique substrings that start and end with a vowel or cons

  sort in abc order
  
  q's:
  
  input:
    - always string
    - special chars
    - does y count as vowel


  ds:
  use some arrays of chars

  a:
  ----

  - generate all possible substrings
    - starting idx, ending idx, slice
  - filter to test if it begins and ends with vowel
    - test regex
  - sort and return
*/

function getVowelSubstrings(str) {
  let substrings = [];

  for (let start = 0; start < str.length; start += 1) {
    for (let end = start + 1; end < str.length + 1; end += 1) {
      substrings.push(str.slice(start, end));
    }
  }

  let result = substrings.filter(word => {
    let first = /[aeiou]/.test(word[0]);
    let last = /[aeiou]/.test(word[word.length - 1]);

    return first && last;
  });

  result = result.filter((word, idx, self) => self.indexOf(word) === idx);

  result.sort();

  return result;
}

function getConsonantSubstrings(str) {
  let substrings = [];

  for (let start = 0; start < str.length; start += 1) {
    for (let end = start + 1; end < str.length + 1; end += 1) {
      substrings.push(str.slice(start, end));
    }
  }

  let result = substrings.filter(word => {
    let first = /[^aeiou]/.test(word[0]);
    let last = /[^aeiou]/.test(word[word.length - 1]);

    return first && last;
  });

  result = result.filter((word, idx, self) => self.indexOf(word) === idx);

  result.sort();

  return result;
}


console.log(getVowelSubstrings("apple"));

console.log(getVowelSubstrings("hmm"));

console.log(getConsonantSubstrings("aviation"));

console.log(getConsonantSubstrings("motor"));