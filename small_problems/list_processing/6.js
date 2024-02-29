function substrings(str) {
  let result = [];

  for (let index = 0; index < str.length; index += 1) {
    leadingSubstrings(str.slice(index)).forEach(substring => result.push(substring));
  }

  return result;
}

function leadingSubstrings(str) {
  let result = [];
  let letters = str.split('');
  letters.forEach((_, index) => {
    result.push(letters.slice(0, index + 1).join(''));
  })

  return result;
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]