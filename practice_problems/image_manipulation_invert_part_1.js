/*
  take an image (3d array) and incert the colors
  inversion is 255 - color
  if out of bounds, > 255 -> 255. < 0 -> 0

  input: array of rows and cols. Each entry in the row or col is an array of 3 numbers

  map 3x
*/

function invert(arr) {
  return arr.map(row => {
    return row.map(col => {
      return col.map(pixel => {
        let newPixel = 255 - pixel;
        if (newPixel > 255) return 255;
        if (newPixel < 0) return 0;
        return newPixel;
      });
    });
  });
}

console.log(invert([
  [[255, 255, 255], [255, 255, 255]],
  [[255, 255, 255], [255, 255, 255]]
]));