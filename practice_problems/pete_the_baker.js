/*
  given recipe (obj) and available (obj) determine how many cakes can be made

  iterate through obj keys and find how many cakes can be made
  if it is less than the current max, set new max
  if there is ever a key in recipe that doesnt exist, 0 cakes
*/


function cakes(recipe, available) {
  let currentCakes = Infinity;

  for (let key in recipe) {
    let possibleCakes;
    if (!available[key]) {
      return 0;
    }
    possibleCakes = Math.floor(available[key] / recipe[key]);
    if (possibleCakes < currentCakes) {
      currentCakes = possibleCakes;
    }
  }

  return currentCakes;
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));