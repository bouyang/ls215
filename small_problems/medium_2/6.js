/*
  iterate from 1 to input
    for each, add to a rolling sum for first part
    square the number then add to rolloing sum for second part
  square the first sum
  subtract second from first and reutrn value
*/


function sumSquareDifference(num) {
  let sum1 = 0;
  let sum2 = 0;

  for (let counter = 1; counter <= num; counter += 1) {
    sum1 += counter;
    sum2 += Math.pow(counter, 2);
  }

  return Math.pow(sum1, 2) - sum2;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150