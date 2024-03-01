function swapCase(str) {
  return str.split('').map(letter => {
    if (/[a-z]/.test(letter)) {
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    }
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"