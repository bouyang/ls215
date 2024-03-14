/*
  given a string consisting of 0 or 1 chars. represents parking
  1 occupied
  0 vacant

  find a vacant slot htat has max distance from occupied and return distance

  split slots into array
  iterate through each
    if 0, check distance to left 1 if it exists
      starting at index 0, iterate up to current index. allow it to overwrite and record the index
        when a 1 appears.
      determine the distance and record (abs of current - occupied)
    check distance to right 1 if it exists
      repeat for current index + 1 up to length
    take the minimum and that is the distance
  determine max distance
*/

function maxDistance(slots) {
  let spots = slots.split('');

  let distance = spots.map((spot, spotIdx) => {
    if (spot === '0') {
      let leftOcc = Infinity;
      let rightOcc = Infinity;
      for (let idx = 0; idx < spotIdx; idx += 1) {
        if (spots[idx] === '1') leftOcc = idx;
      }
      for (let idx = spots.length - 1; idx > spotIdx; idx -= 1) {
        if (spots[idx] === '1') rightOcc = idx;
      }
      return Math.min(Math.abs(spotIdx - leftOcc), Math.abs(spotIdx - rightOcc));
    } else {
      return 0;
    }
  });

  return Math.max(...distance);
}

console.log(maxDistance("111110000000000100000001111001"));