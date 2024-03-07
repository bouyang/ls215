/*
  object filled with count and true or false

  overall loop tracker (counts 1, 2, 3...)
  while loop current switch < n
    inside loop tracker (starting at overall tracker, += tracker ...)
    switches object attribute to opposite
  array keys and filter for those that are true
*/



function lightsOn(switches) {
  let lights = {};

  for (let count = 1; count <= switches; count += 1) {
    lights[count] = false;
  }

  let outsideTracker = 1;
  while (outsideTracker <= switches) {
    
    let insideTracker = outsideTracker;
    while (insideTracker <= switches) {
      lights[insideTracker] = !lights[insideTracker];
      insideTracker += outsideTracker;
    }
    outsideTracker += 1;
  }

  return Object.keys(lights).filter(key => lights[key]);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]