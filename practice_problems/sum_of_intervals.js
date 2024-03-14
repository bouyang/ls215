/*
  array of intervals and returns sum of all interval lengths
  overlapping should only be counted once

  interval: pair of ints in an array
  first always less than second

  iterate through all intervals
  put first interval to running arr
    for next interval, if starting index is less than any of the existing
    intervals, check if ending index is greater than that interval
      -if so, overwrite it to the new interval
      -if no, overwrite the first element
    or if ending index is greater than any of the existing intervals
    check if starting index is less than that interval
      -if so, overwrite
      -if no, overwrite second element
    if neither is overlapping, push as new interval
  
  iterate through all intervals
  for interval, running sum is last val - first val

*/

function sumIntervals(intervals) {
  let allIntervals = [intervals[0]];

  intervals.forEach((interval, index) => {
    let added = false;

    for (let idx = 0; idx < allIntervals.length; idx += 1) {
      if (interval[0] < allIntervals[idx][0] &&
          interval[1] > allIntervals[idx][0] &&
          interval[1] < allIntervals[idx][1]) {
        if (interval[1] > allIntervals[idx][1]) {
          allIntervals[idx] = [interval[0], interval[1]];
          added = true;
        } else {
          allIntervals[idx] = [interval[0], allIntervals[idx][1]];
          added = true;
        }
      } else if (interval[1] > allIntervals[idx][1] && interval[0] > allIntervals[idx][0] && interval[0] < allIntervals[idx][1]) {
        if (interval[0] < allIntervals[idx][0]) {
          allIntervals[idx] = [interval[0], interval[1]];
          added = true;
        } else {
          allIntervals[idx] = [allIntervals[idx][0], interval[1]];
          added = true;
        }
      }
      console.log(interval + '----->' + allIntervals);
    }

    if (!added) {
      allIntervals.push(interval);
    }
  });
}


console.log(sumIntervals( [
  [1, 2],
  [6, 10],
  [11, 15]
] ));

console.log(sumIntervals( [
  [1, 4],
  [7, 10],
  [3, 5]
] ));

// console.log(sumIntervals([[1, 5], [6, 10]]));