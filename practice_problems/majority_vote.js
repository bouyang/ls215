/*
  returns majority vote in an array
  element that occurs > N/2 times in an array where N is length
  if no majority or empty, return null

  find the count of each element. If it is > N/2 then return it
    match regex and find length
  return null otherwise
*/

function majorityVote(arr) {
  for (let idx = 0; idx < arr.length; idx += 1) {
    let regex = new RegExp(arr[idx], 'g');
    if (arr.join('').match(regex).length > arr.length / 2) {
      return arr[idx];
    }
  }
  return null;
}

console.log(majorityVote(["A", "A", "A", "B", "C", "A"]));