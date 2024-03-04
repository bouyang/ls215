function luhn(num) {
  num = num.replace(/\D/g, '');

  return num.split('').reverse().map((number, index) => {
    if (index % 2 === 1) {
      number *= 2;
      if (number >= 10) {
        number -= 9;
      }
      return number;
    }
    return number;
  }).reduce(((accum, num) => accum + Number(num)), 0) % 10 === 0;
}

console.log(luhn('1111'));
console.log(luhn('8763'));
console.log(luhn('2323 2005 7766 3554'));
console.log(luhn('0'));
console.log(luhn(''));