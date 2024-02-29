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

function palindromes(str) {
  let substringsArr = substrings(str);

  return substringsArr.filter(substr => {
    return substr.length !== 1 && (substr === substr.split('').reverse().join(''))
  });
}



console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// // returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]