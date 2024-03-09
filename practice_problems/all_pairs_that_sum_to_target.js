/*

  returns all pairs of nums in an array that sum to a target
  sort pairs in ascending order based on smaller, then order each pair [s, l]

  iterate through all possible pairs and sum up; if sum up to target add to result arr
    starting at index 0, iterate index + 1 up to length
    increment starting index
    put into array as smaller, larger (find min/max of two vals)
    if no pairs, return []
  sort array by first number
*/

function allPairs(arr, target) {
  let result = [];
  for (let idx1 = 0; idx1 < arr.length; idx1 += 1) {
    for (let idx2 = idx1 + 1; idx2 < arr.length; idx2 += 1) {
      if (arr[idx1] + arr[idx2] === target) {
        result.push([
          Math.min(arr[idx1], arr[idx2]),
          Math.max(arr[idx1], arr[idx2])
        ]);
      }
    }
  }
  if (result.length === 0) {
    return [];
  }
  return result.sort((a, b) => a[0] - b[0]);
}

console.log(allPairs([2, 4, 5, 3], 7));