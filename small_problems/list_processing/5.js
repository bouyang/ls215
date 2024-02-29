function leadingSubstrings(str) {
  let result = [];
  let letters = str.split('');
  letters.forEach((_, index) => {
    result.push(letters.slice(0, index + 1).join(''));
  })

  return result;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]