/*
  splits bunch into singular objects
  quantity > 1 then split into multiple objects of quantity 1

  iterate through each item in object
  if quantity = 1, push
  push object of quantity 1 for as many times as the quantity

*/

function splitBunches(bunches) {
  let result = [];

  bunches.forEach(item => {
    if (item['quantity'] === 1) {
      result.push(item)
    } else {
      let quant = item['quantity'];
      for (let x = 0; x < quant; x += 1) {
        result.push( { name: item['name'], quantity: 1 } );
      }
    }
  })

  return result;
}


console.log(splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
]));