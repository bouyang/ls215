/*
  iterate through every element. If encounter a 'c', then check surrounding for a w. If does not exist then
  return false
  check if the surrounding one exists by seeing if that index number is > 0 and if it is less than the length
  of the array element
*/

function cropHydrated(field) {
  for (let rowIndex = 0; rowIndex < field.length; rowIndex += 1) {
    for (let colIndex = 0; colIndex < field[rowIndex].length; colIndex += 1) {
      if (field[rowIndex][colIndex] === 'c') {
        let watered = false;
        for (let rowRange = rowIndex - 1; rowRange <= rowIndex + 1; rowRange += 1) {
          for (let colRange = colIndex - 1; colRange <= colIndex + 1; colRange += 1) {
            if (rowRange >= 0 && rowRange < field.length && colRange >= 0 && colRange < field[rowIndex].length) {
              if (field[rowRange][colRange] === 'w') {
                watered = true;
              }
            }
          }
        }
        if (watered === false) {
          return false;
        }
      }
    }
  }
  return true;
}


console.log(cropHydrated([
  [ "w", "c" ],
  [ "w", "c" ],
  [ "c", "c" ]
]));

console.log(cropHydrated([
  [ "c", "c", "c" ]
]));

console.log(cropHydrated([
  [ "c", "c", "c", "c" ],
  [ "w", "c", "c", "c" ],
  [ "c", "c", "c", "c" ],
  [ "c", "w", "c", "c" ]
]));