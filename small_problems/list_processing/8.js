function buyFruit(arr) {
  let result = [];
  arr.forEach(fruitPair => {
    for (let i = 0; i < fruitPair[1]; i += 1) {
      result.push(fruitPair[0]);
    }
  });

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]