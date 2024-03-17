/*
  given cents and product number, bending machine should give product and change

  input: products is fixed, array of objects
    money in cents
    product number

  output: product, change in array of coins
    or if not valid product number
    or if not enough money

  
  a:
  --------

  - determine if product number is valid
  - determine price of product number
    - get the object based on product number index - 1
    - find price. if it is > money then return error
    - otherwise, find difference in cost
    - push to reuslt obj product
  - determine change:
    - starting at coins, 
     - 91 c: 91 - 50 = 41 < 50 so move onto next coin
     - 41 c: 41 - 20 = 21 >= 20 so continue again
     - 21....................1
    - iterate through each coin:
      - if coin > changeOwed, move to next coin
      - if coin <= changeOwed, add to change arr and subtract val from owed
*/

const products = [
  { number: 1, price: 100, name: 'Orange juice' },
  { number: 2, price: 200, name: 'Soda' },
  { number: 3, price: 150, name: 'Chocolate snack' },
  { number: 4, price: 250, name: 'Cookies' },
  { number: 5, price: 180, name: 'Gummy bears' },
  { number: 6, price: 500, name: 'Condoms' },
  { number: 7, price: 120, name: 'Crackers' },
  { number: 8, price: 220, name: 'Potato chips' },
  { number: 9, price: 80,  name: 'Small snack' },
];

function vendingMachine(products, money, productNumber) {
  if (productNumber <= 0 || productNumber >= 10) return 'Enter a valid product number';

  let price = products[productNumber - 1]['price'];
  let changeOwed = money - price;
  let result = {};

  if (changeOwed < 0) {
    return 'Not enough money for this product';
  }
  
  result['product'] = products[productNumber - 1]['name'];

  let coins = [500, 200, 100, 50, 20, 10];
  let change = [];
  let coinsIdx = 0;

  while (changeOwed > 0) {

    if (coins[coinsIdx] > changeOwed) {
      coinsIdx += 1;
    } else {
      change.push(coins[coinsIdx]);
      changeOwed -= coins[coinsIdx];
    }
  }

  result['change'] = change;

  return result;
}

console.log(vendingMachine(products, 200, 7));