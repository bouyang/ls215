/*
  exit the carpark using only staircases
  exit always at bottom right of ground

  free spaces 0
  staircases 1
  starting pos 2
  exit bottom right
  use 1 to go down a level
  each floor only one staircase
  return quickest route

  find the 1 on your row (record step)
  go down (now at rowIdx + 1)
  if 1, go down until 0 (record step)
  re-find 1 on row (record step)
  go down until 0 (record)
  until row at arr.length, then go to rightmost (record)

  recording step:
    determine starting and target. If starting - target < 0, R. If > 0 L


*/

function parkingExit(arr) {
  let posX;
  let posY;
  let directions = [];

  for (let rowIdx = 0; rowIdx < arr.length; rowIdx += 1) {
    if (arr[rowIdx].indexOf(2) !== -1) {
      posX = arr[rowIdx].indexOf(2);
      posY = rowIdx;
    }
  }
  
  while (posY !== arr.length - 1) {
    let stair = arr[posY].indexOf(1);
    directions.push(findStep(stair, posX));

    posX = stair;
    let stairCount = 0;
    do {
      stairCount += 1;
      posY += 1;
    } while ((arr[posY][posX] === 1))
    directions.push('D' + stairCount);
  }

  if (arr[0].length - 1 !== posX) {
    directions.push(findStep(arr[0].length - 1, posX));
  }

  return directions;
}

function findStep(target, current) {
  if (target - current < 0) {
    return 'L' + Math.abs(target - current);
  } else if (target - current > 0) {
    return 'R' + Math.abs(target - current);
  }
}

console.log(parkingExit([
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0]
]));

console.log(parkingExit([
  [2, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
]));