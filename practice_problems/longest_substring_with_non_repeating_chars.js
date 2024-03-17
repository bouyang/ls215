/*
  input: string

  output substring

  inputs:
    - not a string
    - empty string
    - string with non-ABC
    - capitalization?
  data type:
    - 
  output:
    - tie of longest
  
  split str to letters
  generate all possible substrings in array form
    use 2x for loop for starting and ending index
  filter all the substrings based on if they are unique letters
    use filter on substring arrays to see if all the letters appear once
  find the longest
    compare the length of arr's
  return the longest in string form
*/

function longestNonrepeatingSubstring(str) {
  let letters = str.split('');

  let substrings = [];
  for (let start = 0; start < letters.length; start += 1) {
    for (let end = start + 1; end <= letters.length; end += 1) {
      substrings.push(letters.slice(start, end));
    }
  }

  substrings = substrings.filter(substrArr => {
    let uniqueSub = substrArr.filter((ele, idx, self) => self.indexOf(ele) === idx);
    if (uniqueSub.length === substrArr.length) {
      return substrArr;
    }
  });


  let max = substrings.reduce((longest, current) => {
    if (current.length > longest.length) {
      return current;
    } else {
      return longest;
    }
  }, []);

  return max.join('');
}

console.log(longestNonrepeatingSubstring("abcabcbb"));
console.log(longestNonrepeatingSubstring("aaaaaa"));
console.log(longestNonrepeatingSubstring("abcde"));
console.log(longestNonrepeatingSubstring("abcda"));
console.log(longestNonrepeatingSubstring("kjlmjsdfewii"));