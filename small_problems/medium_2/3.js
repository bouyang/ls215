/*
  sort angles array and sum to 180 and smallest > 0 oetherwise ivalid
  based on the max, if less than 90 then acute, etc
*/

function triangle(side1, side2, side3) {
  let angles = [side1, side2, side3].sort();

  if (angles[0] <= 0 || (side1 + side2 + side3) !== 180) {
    return 'invalid';
  } else {
    if (angles[2] < 90) {
      return 'acute';
    } else if (angles[2] === 90) {
      return 'right';
    } else {
      return 'obtuse';
    }
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"