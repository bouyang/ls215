/*
  given 2 arrays of string
  return sorted array in lexicographical order which are substrings of a2

  generate all possible substrings of a2
    for each word
      iterate through starting index 0 to length - 1
        iterate through ending index of index+1 to length
        slice into substr array
  filter a1 to if it is in the substrings
  sort a1
*/


function inArray(array1,array2){
  let substrings = [];
  array2.forEach(word => {
    for (let idx = 0; idx < word.length - 1; idx += 1) {
      for (let idx2 = idx + 1; idx2 < word.length + 1; idx2 += 1) {
        substrings.push(word.slice(idx, idx2));
      }
    }
  });

  return array1.filter(word => substrings.includes(word)).sort();
}

let a1 = ["arp", "live", "strong"]

let a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

console.log(inArray(a1, a2));