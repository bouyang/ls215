/*
  breaks up camel casing
    if capital letter, puts space

  iterate through each letter and if lowercase, put to result string
  if capital, add space then capital letter

  if empty string return empty string
*/

function solution(string) {
  if (string === '') {
    return '';
  }

  let result = '';

  string.split('').forEach(letter => {
    if (/[A-Z]/.test(letter)) {
      result += ' ';
      result += letter;
    } else {
      result += letter;
    }
  })

  return result;
}

console.log(solution('camelCasing'));