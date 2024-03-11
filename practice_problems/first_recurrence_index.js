/*
  identifies first item that has recurred in string arg
  reutrns identified item and index where it first appeared and next where it resurfaced
  whatever resurfaces first


  return {} if passed in is null, undef, empty, or no recurring

  find unique values
  iterate through unique values and search in original str where
  it appears. save as an array of the indexes where it appears
    filter those that re-appear (length > 1)
  compare min of index 1: re-appear (first to complete loop)
  return obj of the value and [index 0 and 1]
*/

function recurIndex(str) {
  if (!str) {
    return {};
  }

  let unique = str.split('').filter((letter, idx, self) => self.indexOf(letter) === idx);

  let appearances = unique.map(ele => {
    let appArr = [];
    str.split('').forEach((letter, idx) => {
      if (ele === letter) appArr.push(idx);
    })
    return appArr;
  }).filter(ele => ele.length > 1);

  if (appearances.length === 0) {
    return {};
  }


  let reAppearanceIndex = appearances.map(ele => ele[1]);
  let recurrenceIdx = reAppearanceIndex.indexOf(Math.min(...reAppearanceIndex));

  let obj = {};
  obj[str.split('')[appearances[recurrenceIdx].slice(0, 1)]] = appearances[recurrenceIdx].slice(0, 2);

  return obj;
}

console.log(recurIndex("DXTDXTXDTXD"));
console.log(recurIndex('YZTTZMNERXE'));