

function binarySearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }

  let mid = arr.length / 2 - 1;
  let resultIndex = 0;

  while (mid >= 0) {
    if (arr.length % 2 === 0) {
      mid = arr.length / 2 - 1;
    } else {
      mid = Math.floor(arr.length / 2);
    }
    
    if (target === arr[mid]) {
      return resultIndex += mid;
    } else if (arr[mid] < target) {
      arr = arr.slice(mid + 1);
      resultIndex += mid + 1;
    } else {
      arr = arr.slice(0, mid);
    }
  }

  return -1;
  
}

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6