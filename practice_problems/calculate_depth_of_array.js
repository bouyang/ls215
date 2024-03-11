/*
  calculate depth of array
  normal array depth 1

  begin tracker at 1
  calculate total values in flat array
  calculate length of 0th element
    if = total then 1
    if < total then subtract length from total
    increment tracker by 1
    iterate through each element and find typeof object
      look at that one and repeat until length = total
*/

function depth(arr) {
  if (arr.filter(ele => Array.isArray(ele)).length === 0) return 1;
  
  for (let depthI = 1; ;depthI += 1) {
    if (arr.flat(depthI).length === arr.flat(Infinity).length) {
      for (let idx = 0; idx < arr.flat(depthI).length; idx += 1) {
        if (Array.isArray(arr.flat(depthI)[idx])) {
          return depthI + 2;
        }
      }
      return depthI + 1;
    }
  }
}

console.log(depth([1, [2, [3, [4]]]]));
console.log(depth([1, [2, [3, 4]]]));
console.log(depth([1, 2, 3, 4, [[5]], [6], 7]));