/*
  two objects with similar key values, combine into new obj and sum vals that
  belong to same category

  values must be lowest to highest
  wont be same number of k/v pairs

  declare new obj as copy of first person's obj
    assign
  iterate through second person's obj and when the key matches, add the value
  if it doesnt match, add new k/v pair
    check object[key]

  sort object by value
    obj.entries sort
    then back to object
    iterate through k/v pair
*/

function combine(user1Income, user2Income) {
  let combinedObj = Object.assign({}, user1Income);

  Object.keys(user2Income).forEach(key => {
    combinedObj[key] = combinedObj[key] || 0;
    combinedObj[key] += user2Income[key];
  })

  let sortedArr = Object.entries(combinedObj).sort((firstEle, secondEle) => {
    return firstEle[1] - secondEle[1];
  });

  let result = {};
  sortedArr.forEach(ele => {
    result[ele[0]] = ele[1];
  });

  return result;
}

const user1 = {
  powerPlant: 70000,
  rental: 12000
}

const user2 = {
  teaching: 40000,
  rental: 10000
}

console.log(combine(user1, user2));

console.log();