/*
  array of particles
  abs value represents particle mass
  sign value represents direction + ->, - <-
  particle with greater mass will absorb the mass of another and continue to travel
  mass is sum of two



  iterate through all values (use for)
  - if a positive one is next to a negative one, they collide:
    - find the > absolute value
    - add them together and give the sign of the greater one
    - set new as index of first one
    - increment index by one to skip
    - record that a collision occurred
  - if not, record the value
  
  repeat until no more collisions
  
*/

function movingParticles(arr) {
  let newArr = arr.slice();

  let collided = true;

  while (collided) {
    collided = false;
    let tempArr = [];
    for (let idx = 0; idx < newArr.length;) {
      if (newArr[idx] > 0 && newArr[idx + 1] < 0) {
        let mass1 = Math.abs(newArr[idx]);
        let mass2 = Math.abs(newArr[idx + 1]);
        let newMass;

        if (mass1 >= mass2) {
          newMass = mass1 + mass2;
        } else {
          newMass = -(mass1 + mass2);
        }

        tempArr.push(newMass);
        idx += 2;
        collided = true;
      } else {
        tempArr.push(newArr[idx]);
        idx += 1;
      }
    }
    newArr = tempArr.slice();
  }

  return newArr;
}

// console.log(movingParticles([3, -1]));
// console.log(movingParticles([-1, 3, -1, 2]));
// console.log(movingParticles([5, -1, -2, -9]));
console.log(movingParticles([-3, 50, 62, -69, 54, 16, 35, 18, 79, 42, 26, -76, 3, 80, 67, 13, -5, -30, 36, -2, -72, -19, 9, 66, 5, 37, -23, 47, -67, -70, -23, 19, 69, 75, -56, 22, 10, -26, -58, -3, 47, 24, 63, -69, 48, -68, -42, 75, 17, -54, -12, -24, -15, -67, 31, -30, -25, 17, -75, -3, -8, -54, -61, -66, 6, -38, 67, -31, 38, -53, -2, 41, -48, -70, -2, -29, 35, -35, -16, 17]));

//[-3, -181, -346, -581, -70, -23, 19, 69, 611, 678, 381, 86, 17]


// 0: 6 [6, -2, -9]
// 2:

// 0: 8 [8]
// 2: [8, -9]
// 0: [-17]