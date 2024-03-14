/*
  take a string and for each char, return distance to nearest vowel in the string
  if it is vowel, return 0

  iterate through each letter in str (split it)
    have a running counter starting at 0 and check for the letters both +/- counter
    and check if it is a vowel. If so, map the distance (counter). If not, continue to up the counter

*/

function distanceToNearestVowel(str) {
  return str.split('').map((letter, idx) => {
    for (let counter = 0; counter < str.length; counter += 1) {
      if ((str.split('')[idx + counter] && /[aeiou]/.test(str.split('')[idx + counter])) ||
        (str.split('')[idx - counter] && /[aeiou]/.test(str.split('')[idx - counter]))) {
        return counter;
      }
    }
  });
}

console.log(distanceToNearestVowel("aaaaa"));
console.log(distanceToNearestVowel("shopper"));
console.log(distanceToNearestVowel("bba"));