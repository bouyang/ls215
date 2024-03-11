/*
  given two inputs: array of abbrev, array of words
  reutrn true if each abbrev uniquely identifies a word, false otherwise

  ambiguous: if an abbrev is included in multiple words in the beginning
  abbrev are substring from 0-n of original string

  check for abbreviation on all strings in 2nd array. if they are all length 1
    regex the beginning using ^ and match
    iterate through each abbrev
      iterate through each word in 2nd array and match
      use filter and check for length of result array = 1
      if not, return false

  
*/

function uniqueAbbrev(abbs, words) {
  for (let idx = 0; idx < abbs.length; idx += 1) {
    if (words.filter(word => {
      let regex = new RegExp('^' + abbs[idx], 'ig');
      return word.match(regex);
    }).length !== 1) {
      return false;
    }
  }
  return true;
}

console.log(uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"]));

console.log(uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"]));

console.log(uniqueAbbrev(["bi", "ba", "bat"], ["big", "bard", "battery"]));

console.log(uniqueAbbrev(["mo", "ma", "me"], ["moment", "many", "mean"]));