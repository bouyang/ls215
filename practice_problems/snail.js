/*

  given n x n array, return snail trail

  right n
  down n - 1
  left n - 1
  up n - 2
  right n - 2

  right n
  down n - 1
  left n - 1
  up n - 2
  right n - 2
  down n - 3
  left n - 3

  etc

  result arr to track path
  right n

  loop: 

  down n- 1
  left n - 1
  up n - 2
  right n - 2
  subtract 2 from n

  re-do loop
*/


snail = function(array) {
  let result = [];
  let n = array[0].length;

  for (let idx = 0; idx < array[0].length; idx += 1) {
    result.push(array[0][idx]);
  }

  let currentRow = 0;
  let currentCol = n - 1;
  while (result.length < array.flat(Infinity).length) {
    //down n - 1
    let temp;
    for (let r = currentRow + 1; r <= currentRow + (n - 1); r += 1) {
      result.push(array[r][currentCol]);
      temp = r;
      if (result.length === array.flat(Infinity).length) return result;
    }
    currentRow = temp;

    //left n - 1
    for (let c = currentCol - 1; c >= currentCol - (n - 1); c -= 1) {
      result.push(array[currentRow][c]);
      temp = c;
      if (result.length === array.flat(Infinity).length) return result;
    }
    currentCol = temp;

    //up n - 2
    for (let r = currentRow - 1; r >= currentRow - (n - 2); r -= 1) {
      result.push(array[r][currentCol]);
      temp = r;
      if (result.length === array.flat(Infinity).length) return result;
    }
    currentRow = temp;

    //right n - 2
    for (let c = currentCol + 1; c <= currentCol + (n - 2); c += 1) {
      result.push(array[currentRow][c]);
      temp = c;
      if (result.length === array.flat(Infinity).length) return result;
    }
    currentCol = temp;

    n -= 2;
  }

  return result;
}

console.log(snail([[1,2,3],
                    [4,5,6],
                    [7,8,9]]));