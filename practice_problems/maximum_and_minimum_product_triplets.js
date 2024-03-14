/*
  one function: returns max product of three numbers in an array
  other is min product

  generate all possible 3 number combinations
    starting at index 0,
    next is index + 1
    next is index2 + 1
    incremenet each from inside to outside
  map their product
*/

function findProducts(arr) {
  let possibleCombos = [];

  for (let idx = 0; idx < arr.length; idx += 1) {
    for (let idx2 = idx + 1; idx2 < arr.length; idx2 += 1) {
      for (let idx3 = idx2 + 1; idx3 < arr.length; idx3 += 1) {
        possibleCombos.push([arr[idx], arr[idx2], arr[idx3]]);
      }
    }
  }

  let product = possibleCombos.map(combo => combo.reduce((total, num) => total * num, 1));
  return product;
}

function maxProduct(arr) {
  return Math.max(...findProducts(arr));
}

function minProduct(arr) {
  return Math.min(...findProducts(arr));
}

console.log(maxProduct([-8, -9, 1, 2, 7]));