/*
  combine arrays and flatten into a copy
  look for min by spreading elements
  put min into result array, delete?
*/


function merge(arr1, arr2) {
  let mergedArr = arr1.concat(arr2);
  let result = [];
  let maxVal = Math.max(...mergedArr);
  
  while (result.length < mergedArr.length) {
    let minVal = Math.min(...mergedArr);
    result.push(minVal);
    mergedArr[mergedArr.indexOf(minVal)] = maxVal + 1;
  }

  return result;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]