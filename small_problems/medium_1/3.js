function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  }

  let arrCopy = arr.slice(1);
  arrCopy.push(arr[0]);

  return arrCopy;

}

function rotateRightmostDigits(number, n) {
  let result = [];
  result = String(number).split('').slice(0, -n)
  result.push((rotateArray(String(number).split('').slice(String(number).length - n))));
  
  return result.flat().join('');
}

function maxRotation(num) {
  let result = num;
  for (let fixed = 0; fixed < String(num).length; fixed += 1) {
    result = rotateRightmostDigits(result, String(num).length - fixed);
  }

  return Number(result);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845