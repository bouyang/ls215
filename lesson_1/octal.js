// function octalToDecimal(numberString) {
//   let multiplier = 0;
//   let result = 0;
//   numberString.split('').reverse().forEach(digit => {
//     result += Number(digit) * (Math.pow(8, multiplier));
//     multiplier += 1;
//   })
//   return result;
// }

function octalToDecimal(numberString) {
  let decimalParts = numberString.split('').map((digitChar, index) => {
    return Number(digitChar) * Math.pow(8, numberString.split('').length - index - 1);
  });

  return decimalParts.reduce((sum, parts) => sum + parts);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9