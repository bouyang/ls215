/*
  given total amount of cargo and types, return true if weight can fit

  iterate through each hold and load cargo
    if it can hold the first cargo up, shift it into a temp thing that determines how much total weight
    if not, go to next hold
    repeat until all holds are filled -> false or run out of cargo -> true
*/

function willFit(holds, cargo) {
  

  for (let idx = 0; idx < holds.length; idx += 1) {
    let capacity;
    switch (holds[idx]) {
      case 'S':
        capacity = 50;
        break;
      case 'M':
        capacity = 100;
        break;
      case 'L':
        capacity = 200;
        break;
    }
    let current = 0;
    while (current < capacity) {
      if (current + cargo[0] <= capacity) {
        current += cargo.shift();
      } else {
        break;
      }
    }
  }
  return cargo.length === 0;
}

console.log(willFit(["L", "L", "M"], [56, 62, 84, 90]));
console.log(willFit(["L", "L", "L", "L"], [54, 54, 200, 200, 200]));