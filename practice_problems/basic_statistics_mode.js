function mode(nums) {
  let uniqueVals = nums.filter((value, index, self) => self.indexOf(value) === index);

  let targetMode = Math.max(...uniqueVals.map(uniqueNum => {
    let regex = new RegExp(`\\b${uniqueNum}\\b`, 'g');
    return nums.join(' ').match(regex).length;
  }));

  return uniqueVals.filter(uniqueNum => {
    let regex = new RegExp(`\\b${uniqueNum}\\b`, 'g');
    return nums.join(' ').match(regex).length === targetMode;
  }).sort((a, b) => a - b);
}

// console.log(mode([1, 4, 5, 6, 6, 6, 7, 7, 9, 10]));

console.log(mode([1, 3, 3, 5, 5, 9, 10, 10]));