/*
slice up to -n
*/

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

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917