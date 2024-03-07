/*
  create array for keyword (charCodeAt)
  iterate through each letter by map with index, check for letter
    if letter
      add index % keyword.length index of array to letter
      check if overflow and if so, wrap around
*/


function vigenereCipher(plaintext, keyword) {
  let keywordArr = keyword.split('').map(letter => letter.toLowerCase().charCodeAt(0) - 97);

  let blank = 0;
  let ciphertextCodes = plaintext.split('').map((letter, index) => {
    if (/[a-z]/i.test(letter)) {
      if (letter.charCodeAt(0) + keywordArr[(index - blank) % (keyword.length)] > 122) {
        return letter.charCodeAt(0) + keywordArr[(index - blank) % (keyword.length)]  - 26;
      } else if (letter.charCodeAt(0) + keywordArr[(index - blank) % (keyword.length)]  > 90 && letter.charCodeAt(0) <= 90) {
        return letter.charCodeAt(0) + keywordArr[(index - blank) % (keyword.length)]  - 26;
      } else {
        return letter.charCodeAt(0) + keywordArr[(index - blank) % (keyword.length)] ;
      }
    } else {
      blank += 1;
      return letter.charCodeAt(0);
    }
  });

  return ciphertextCodes.map(code => String.fromCharCode(code)).join('');
}

console.log(vigenereCipher("Pineapples don't go on pizzas!",'A'));
console.log(vigenereCipher("Pineapples don't go on pizzas!",'Aa'));
console.log(vigenereCipher("Pineapples don't go on pizzas!",'cab'));
console.log(vigenereCipher("Dog",'Rabbit'));