/*
  put sides into array
  sort from smallest to largest sides
  test for valid if first 2 > 3 and if all sides > 0
  if side1 === side2 && sides2 === side 3 then equilateral
  if side1 === side2 || side2 === side3 then isos
  otherwise scalene

*/

function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3].sort();

  if (sides[0] + sides[1] <= sides[2] || sides[0] === 0) {
    return 'invalid';
  } else {
    if (sides[0] === sides[1] && sides[1] === sides[2]) {
      return 'equilateral';
    } else if (sides[0] === sides[1] || sides[1] === sides[2]) {
      return 'isoceles';
    } else {
      return 'scalene';
    }
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"