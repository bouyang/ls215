function isUppercase(str) {
  if (str === '') {
    return true;
  }
  return str.match(/[A-Za-z]/g).every(letter => letter.toUpperCase() === letter);
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true