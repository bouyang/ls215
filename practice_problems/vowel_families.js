/*
  selects all word that have the same vowels in any order or num as the first word

  find vowels of each word and store in array
    regex /[aeiou]/g
  make vowels array unique (one element per vowel)
  filter the array to those that have the unique vowels of the first word
*/


function sameVowelGroup(w) {
  let vowelsArr = w.map(word => word.match(/[aeiou]/g));
  vowelsArr = vowelsArr.map(vowelsEle => vowelsEle.filter((letter, idx, self) => {
    return self.indexOf(letter) === idx;
  }).sort());

  return w.filter((word, index) => {
    if (vowelsArr[index].length !== vowelsArr[0].length) return false;
    return vowelsArr[0].every((letter, idx) => letter === vowelsArr[index][idx]);
  });
}

console.log(sameVowelGroup(["toe", "ocelot", "maniac"]));

console.log(sameVowelGroup(["semantic", "aimless", "beautiful", "meatless icecream"]));