/*
  25% discount on the most expensive item, even if customer buys multiple
  return total price after discount

  input: array of obj
    each obj has name, quantity, price
  output: number (total price sum)

  iterate through each item and determine highest price one
    map price of object
    determine max by Math the price spread
    (record the index)
  create new item of discounted (0.75 the price)
    push to array
  subtract one quantity of that original high price item
    find the index and subtract 1 quantity
  re-iterate through each item and multiply quantity by price and store into result
  round reuslt to 2 decimal places
*/

function twentyFiveOnOne(cart) {
  let result = 0;

  let cartPrices = cart.map(item => {
    return item['price'];
  });

  let maxPrice = Math.max(...cartPrices);
  let maxIndex = cartPrices.indexOf(maxPrice);

  cart.push({ name: 'Discounted', quantity: 1, price: maxPrice * 0.75 } );
  cart[maxIndex]['quantity'] -= 1;

  cart.forEach(item => result += item['price'] * item['quantity']);
  return Number(result.toFixed(2));
}

console.log(twentyFiveOnOne([
  { name: "Iphone 20x", quantity: 1, price: 1350 },
  { name: "Samsung x30", quantity: 1, price: 1225 },
  { name: "Nokia 9250", quantity: 1, price: 800 },
  { name: "Tesla Model Y", quantity: 1, price: 72999 }
]));