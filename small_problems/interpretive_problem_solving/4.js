/*
  Iterate through letters (use regex to check)
    map char codes + key. If it goes over, subtract 26 (97, 122)
    then String.fromCharCode
  return joined letters
*/

function caesarEncrypt(plaintext, key) {
  let ciphertextCodes = plaintext.split('').map(letter => {
    if (/[a-z]/i.test(letter)) {
      if (letter.charCodeAt(0) + (key % 26) > 122) {
        return letter.charCodeAt(0) + (key % 26) - 26;
      } else if (letter.charCodeAt(0) + (key % 26) > 90 && letter.charCodeAt(0) <= 90) {
        return letter.charCodeAt(0) + (key % 26) - 26;
      } else {
        return letter.charCodeAt(0) + (key % 26);
      }
    } else {
      return letter.charCodeAt(0);
    }
  });

  return ciphertextCodes.map(code => String.fromCharCode(code)).join('');
}


// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"