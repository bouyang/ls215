/*
  given an array, return an obj detailing how many times each element was repeated
  sort by descending order

  iterate through each element and add to result obj
    increment counter
  sort result object
    change into entries, sort by 1st element, back to obj
*/


function countRepetitions(arr) {
  let result = {};

  arr.forEach(element => {
    result[element] = result[element] || 0;
    result[element] += 1;
  });

  return Object.fromEntries(Object.entries(result).sort((a, b) => b[1] - a[1]));
}