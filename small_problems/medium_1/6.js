function findFibonacciIndexByLength(fibNum) {
  let currentFib = 1;
  let counter = 1;

  do {
    currentFib = fibonacci(counter);
    counter += 1;
  } while (fibNum > String(currentFib).length)

  return BigInt(counter - 1);
}

function fibonacci(num) {
  if (num === 1 || num === 2) {
    return 1;
  }

  let firstNum = 1;
  let secondNum = 1;
  let sum = 0;

  for (let count = 3; count <= num; count += 1) {
    sum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = sum;
  }

  return sum;
}


console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.