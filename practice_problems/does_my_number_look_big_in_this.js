/*
  a narcissistic number is positive number which is the sum of its own digit raised to power of the number of digits
  return true or false if it is narcissistic

  iterate through digits
    sum digit raised to power of length
    if equal to input then true
*/

function narcissistic(value) {
  return String(value).split('').map(digit => {
    return Math.pow(Number(digit), String(value).length);
  }).reduce((acc, sum) => acc + sum, 0) === value;
}

console.log(narcissistic(7))