function multiplyAllPairs(arr1, arr2) {
  let result = [];

  arr1.forEach(arr1Element => {
    arr2.forEach(arr2Element => {
      result.push(arr1Element * arr2Element);
    })
  })

  return result.sort(sortNumerical);
}

function sortNumerical(a, b) {
  return a - b;
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]