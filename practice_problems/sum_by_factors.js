/*
  given arra yof positive or neg integers
  produce a sorted array
    sum of all ij of array for which p is a prime factor of ij

  find prime factors
  for each prime factor, determine how many nums in the array it is a factor for
    then sum those and pair with the factor in array
  return all subararys


*/

function sumOfDivided(lst) {
  lst = lst.flat(Infinity);
  let primes = [];
  let max = Math.max(...lst);
  let result = [];

  for (let num = 2; num <= max; num += 1) {
    lst.forEach(arrItem => {
      if (isPrime(num) && (arrItem % num === 0)) {
        primes.push(num);
      }
    })
  }

  primes = primes.filter((element, idx, self) => self.indexOf(element) === idx);
  
  primes.forEach(primeNum => {
    let sum = 0;
    lst.forEach(lstItem => {
      if (lstItem % primeNum === 0) {
        sum += lstItem;
      }
    });
    result.push([primeNum, sum]);
  });

  return result;
}

function isPrime(num) {
  let count = 0;
  for (let div = 1; div <= num; div += 1) {
    if (num % div === 0) {
      count += 1;
    }
  }

  return count === 2;
}

console.log(sumOfDivided([12, 15]));
console.log(sumOfDivided([ 12, 15 ]
  [ 15, 21, 24, 30, 45 ]
  [ 15, 21, 24, 30, -45 ]
  [
    107, 158, 204, 100,
    118, 123, 126, 110,
    116, 100
  ]
  [ -29804, -4209, -28265, -72769, -31744 ]));