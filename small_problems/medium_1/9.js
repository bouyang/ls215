let fibSums = {
  1: 1,
  2: 1,
};

function fibonacci(num) {

  if (num <= 2) {
    return 1;
  } else {
    fibSums[num] = fibonacci(num - 1) + fibSums[String(num - 2)];
    return fibSums[String(num)];
  }
}


// 1 1 2 3 5 8
console.log(fibonacci(3));
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
console.log(fibonacci(300));