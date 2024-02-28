function totalArea(arr) {
  return (arr.map(element => element[0] * element[1])).reduce((acc, sum) => acc + sum);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalSquareArea(arr) {
  return arr.filter(ele => ele[0] === ele[1]).map(element => element[0] * element[1]).reduce((acc, sum) => acc + sum);
}

console.log(totalArea(rectangles));    // 141
console.log(totalSquareArea(rectangles));    // 121