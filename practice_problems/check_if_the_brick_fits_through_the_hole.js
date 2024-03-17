/*
  take 3d dimestion (h, w, d) or brick
  return true if brick can fit in hole with w x h

  smallest a x b, b x c, a x c fits within w x h

  input: dimesions in number in 5 args
  output boolean

  intermediate: dim into array of vals

  generate all possible pairs of w x h for the a x b x c
    loop first val + all second vals, increment first val + 1
  compare that the smallest of brick <= smallest of hole
    using Math on spread arrs
  largest of brick <= largest of hole


*/

// (a,b,c) -- dimensions of the brick
// (w,h) -- dimensions of the hole
function doesBrickFit(a,b,c, w,h) {
  let brick = [a, b, c];
  let hole = [w, h];
  let holeMin = Math.min(...hole);
  let holeMax = Math.max(...hole);

  let pairs = [];
  for (let first = 0; first < brick.length - 1; first += 1) {
    for (let second = first + 1; second < brick.length; second += 1) {
      pairs.push([brick[first], brick[second]]);
    }
  }

  for (let idx = 0; idx < pairs.length; idx += 1) {
    let brickMin = Math.min(...pairs[idx]);
    let brickMax = Math.max(...pairs[idx]);

    if (brickMin <= holeMin && brickMax <= holeMax) {
      return true;
    }
  }

  return false;
}

console.log(doesBrickFit(1, 2, 2, 1, 1)); // f
console.log(doesBrickFit(1, 2, 1, 1, 1)); // t