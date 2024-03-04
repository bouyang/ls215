function fibonacci(nth) {
  let first = 1;
  let second = 1;
  let sum = 1;

  for (count = 3; count <= nth; count += 1) {
    sum = first + second;
    first = second;
    second = sum;
  }

  return sum;
}

console.log(fibonacci(3));
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050