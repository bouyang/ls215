/*
  given array, return min and max possible product of k elements
  if not enough element, return null

  generate all possible pairs
    iterate through first index and second index and slice, decrementing second idx
  filter to size of k
  prouct them
  find min and max
*/

function generateCombinations(arr, size, start, temp) {
  if (temp.length === size) {
    allPairs.push([...temp]);
    return;
  }

  for (let i = start; i < arr.length; i++) {
    temp.push(arr[i]);
    generateCombinations(arr, size, i + 1, temp);
    temp.pop();
  }
}

let allPairs = [];

function productPair(arr, k) {
  if (k > arr.length) {
    return null;
  }

  

  for (let i = 1; i <= arr.length; i++) {
    generateCombinations(arr, i, 0, []);
  }

  allPairs = allPairs.filter(ele => ele.length === k);
  let products = allPairs.map(ele => {
    let product = 1;
    for (let idx = 0; idx < ele.length; idx += 1) {
      product *= ele[idx];
    }
    if (product === -0) {
      product = 0;
    }
    return product;
  });

  return [Math.min(...products), Math.max(...products)];

}


console.log(productPair([1, -2, -3, 4, 6, 7], 3));