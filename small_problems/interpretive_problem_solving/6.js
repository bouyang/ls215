/*

7:
*ss*ss*     1, 4, 7               2, 3, 5, 6
s*s*s*      2, 4, 6               1, 3, 5, 7
ss***       3, 4, 5               1, 2, 6, 7
*******     1, 2, 3, 4, 5, 6, 7
ss***
s*s*s*
*ss*ss*


9:
*sss*sss*   1, 5, 9
s*ss*ss*    2, 5, 8
ss*s*s*    3, 5, 7
sss***     4, 5, 6


left counter 1 to (floor n / 2)

middle counter ceil (n / 2) (floor n / 2) times

right counter n to (ceil n / 2)

for loop 1 to (floor(n/2)) and generate array with indexes for each row for where stars will be
iterate through and fill in rest with spaces

iterate through array and print line

print full line

repeat opposite
*/

function star(n) {
  let leftCount = 0;
  let middleCount = Math.floor(n / 2);
  let rightCount = n - 1;
  for (let loopCount = 1; loopCount <= Math.floor(n / 2); loopCount += 1) {
    let rowArray = [];
    rowArray[leftCount] = '*';
    rowArray[middleCount] = '*';
    rowArray[rightCount] = '*';

    for (let index = 0; index < rowArray.length; index += 1) {
      rowArray[index] = rowArray[index] || ' ';
    }
    console.log(rowArray.join(''));

    leftCount += 1;
    rightCount -= 1;
  }

  console.log('*'.repeat(n));

  leftCount = Math.floor(n / 2) - 1;
  middleCount = Math.floor(n / 2);
  rightCount = Math.floor(n / 2) + 1;
  for (let loopCount = 1; loopCount <= Math.floor(n / 2); loopCount += 1) {
    let rowArray = [];
    rowArray[leftCount] = '*';
    rowArray[middleCount] = '*';
    rowArray[rightCount] = '*';

    for (let index = 0; index < rowArray.length; index += 1) {
      rowArray[index] = rowArray[index] || ' ';
    }
    console.log(rowArray.join(''));

    leftCount -= 1;
    rightCount += 1;
  }
}


star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *