/*
  make a list of every item in stock
  given array of obj's
  combining dup items by count

  set current item and current quantity 1
  - while loop until all items iterated through
  - compare next item and if same, increment idx and increment quantity
    - if not same or if undefined (end of list), push to inventory with quantity
    - reset current item to next item, reset quantity to 1
*/

function simplifyList(list) {
  let result = [];

  let currItem = list[0];
  let quantity = 1;

  for (let idx = 0; idx < list.length; idx += 1) {
    if (list[idx + 1] && currItem['brand'] == list[idx + 1]['brand'] &&
        currItem['name'] == list[idx + 1]['name']) {
          quantity += 1;
        } else {
          result.push({
            brand: currItem['brand'],
            name: currItem['name'],
            count: quantity,
          });

          currItem = list[idx + 1];
          quantity = 1;
        }
  }

  return result;
}

console.log(simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
]));