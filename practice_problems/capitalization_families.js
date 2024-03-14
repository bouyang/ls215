/*
  groups words by number of capital letters and returns an array of obj entries whose keys are the number
  of capital letters and values are the groups

  sort by num of capital letters
  sort groups by alphabetically

  iterate through words and count number of capital letters
  put into object
  turn object into entries
  sort by number of capitals
  also sort the words by abc order
    will need to iterate through entries array
*/

function grouping(words) {
  let result = {};

  words.forEach(word => {
    let capitals = (word.match(/[A-Z]/g) || []).length;
    result[capitals] = result[capitals] || [];
    result[capitals].push(word);
  })

  result = Object.entries(result);
  result.sort((a, b) => {
    return Number(a[0]) - Number(b[0]);
  });
  
  result.forEach(group => {
    group[0] = Number(group[0]);
    group[1].sort((a, b) => {
      if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
      } else {
        return 1;
      }
    });
  });

  return result;
}

console.log(grouping(["FORe", "MoR", "bOR", "tOR", "sOr", "lor"]));