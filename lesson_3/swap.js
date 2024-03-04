// create list of all letters
// create list of all numbers

// exchange letters for number
  // if undefined, then keep same

function swap(str) {
  let lettersList = generateLetters(str);
  let numbersList = generateNumbers(str);

  if (lettersList === null || numbersList === null) {
    return str;
  }

  return str.split('').map(char => {
    if (lettersList.includes(char)) {
      let index = lettersList.indexOf(char);

      if (numbersList[index] === undefined) {
        return char;
      }
      return numbersList[index];
    } else if (numbersList.includes(char)) {
      let index = numbersList.indexOf(char);

      if (lettersList[index] === undefined) {
        return char;
      }
      return lettersList[index];
    } else {
      return char;
    }
  }).join('');
}

function generateLetters(str) {
  return str.match(/[A-Z]/ig);
}

function generateNumbers(str) {
  return str.match(/[0-9]/g);
}

// console.log(generateLetters("123-4a#b$"));
// console.log(generateNumbers("123-4a#b$"));

console.log(swap("1a2b3c") === "a1b2c3"); // true
console.log(swap("") === ""); // true
console.log(swap("abcd123") === "123dabc"); // true
console.log(swap("12a") === "a21"); // true
console.log(swap("ab1") === "1ba"); // true
console.log(swap("abcd") === "abcd"); // true
console.log(swap("1") === "1"); // true
console.log(swap("123-4a#b$") === "ab3-41#2$"); // true
console.log(swap("ab1CD23") === "12a3DbC"); // true