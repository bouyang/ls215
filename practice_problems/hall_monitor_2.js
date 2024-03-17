/*
  1->2
  3->4
  2->h->4

  validates whether the route taken is possible
  route may begin or end in any room
  rooms will not repeat

  obj with legal next path
  - 1: 2
  - 2: 1, H
  iterate through path and look at next room
    find if the next room is in the values for the key of current
    if it is not legal return false
  at the end return tru

*/

function possiblePath(arr) {
  let legal = {
    1: [2],
    2: [1, 'H'],
    3: [4],
    4: [3, 'H'],
    H: [2, 4],
  };

  for (let idx = 0; idx < arr.length - 1; idx += 1) {
    let nextRoom = arr[idx + 1];
    let currentRoom = legal[String(arr[idx])];
    
    if (!currentRoom.includes(nextRoom)) {
      return false;
    }
  }

  return true;
}

console.log(possiblePath([4, 3, 4, "H", 4, "H"]));