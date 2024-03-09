/*
  returns area of the overlap between two rectangles
  rectangles are given by x,y coordinates of opposite angles

  overlap length/width is whatever numbers exist in both rectangles
    1...4
    2...6 => 2...4

  
  starting at minimum, count until next x and record all nums in arr
    iterate through points array
    for each point, extract x values and y values
    going from min to max, count and add to array
  repeat for other rectangle and add to arr
  find all values which are not unique and then sort
  take min and max and find length (max - min)
  multiply together
*/


function overlappingRectangles(rect1, rect2) {
  let xPoints = [];
  let yPoints = [];

  let rect1xMin = Math.min(rect1[0]['x'], rect1[1]['x']);
  let rect1xMax = Math.max(rect1[0]['x'], rect1[1]['x']);
  let rect1yMin = Math.min(rect1[0]['y'], rect1[1]['y']);
  let rect1yMax = Math.max(rect1[0]['y'], rect1[1]['y']);

  for (let xCounter = rect1xMin; xCounter <= rect1xMax; xCounter += 1) {
    xPoints.push(xCounter);
  }
  for (let yCounter = rect1yMin; yCounter <= rect1yMax; yCounter += 1) {
    yPoints.push(yCounter);
  }

  let rect2xMin = Math.min(rect2[0]['x'], rect2[1]['x']);
  let rect2xMax = Math.max(rect2[0]['x'], rect2[1]['x']);
  let rect2yMin = Math.min(rect2[0]['y'], rect2[1]['y']);
  let rect2yMax = Math.max(rect2[0]['y'], rect2[1]['y']);

  for (let xCounter = rect2xMin; xCounter <= rect2xMax; xCounter += 1) {
    xPoints.push(xCounter);
  }
  for (let yCounter = rect2yMin; yCounter <= rect2yMax; yCounter += 1) {
    yPoints.push(yCounter);
  }

  xPoints = xPoints.filter(point => xPoints.indexOf(point) !== xPoints.lastIndexOf(point)).sort();
  yPoints = yPoints.filter(point => yPoints.indexOf(point) !== yPoints.lastIndexOf(point)).sort();

  if (xPoints.length <= 2 || yPoints.length <= 2) {
    return 0;
  }

  let xLength = Math.max(...xPoints) - Math.min(...xPoints);
  let yLength = Math.max(...yPoints) - Math.min(...yPoints);

  return xLength * yLength;
}


console.log(overlappingRectangles(
  [{ x: 2, y: 1 }, { x: 5, y: 5 }],
  [{ x: 3, y: 2 }, { x: 5, y: 7 }]
));

console.log(overlappingRectangles(
  [{ x: 1, y: 1 }, { x: 4, y: 3 }],
  [{ x: 4, y: 4 }, { x: 6, y: 6 }]
));