/*
  a perfect power: a pos integer that can be expressed as an integer power of another positive integer

  if a given integer is a perfect power, return m and k with m^k = n
  return null otherwise

  given n, there exists m^k.

  input: number n
  output: array [m, k]

  iterate through m: numbers 2 to n and then k: 2 to n
  calculate m^k
    if it === n then return [m, k]
    if it is > n, move to next cycle
    if it goes through all then return null

  
*/

var isPP = function(n){
  for (let m = 2; m < n; m += 1) {
    for (let k = 2; k < n; k += 1) {
      if (m ** k === n) {
        return [m, k];
      } else if (m ** k > n) {
        break;
      }
    }
  }
  return null;
}

console.log(isPP(4));
console.log(isPP(9));
console.log(isPP(5));