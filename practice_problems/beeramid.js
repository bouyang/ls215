/*

  given money and price of beer (how many beers you can buy)
  output how many levels of a beeramid can be formed

  pyramid: 1 -> 4 -> 9 -> 16 ... level squared

  compute how many beers you can buy
  compute levels of the pyramid and add to running sum
  if sum would be > beers you can buy, level is 1 - current level


*/

// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
  let numBeers = Math.floor(bonus / price);

  if (numBeers <= 0) return 0;

  let sum = 0;
  let levels = 0;
  while (sum <= numBeers) {
    levels += 1;
    sum += (levels ** 2);
  }
  return (levels - 1);
}

console.log(beeramid(1500, 2));
console.log(beeramid(5000, 3));
console.log(beeramid(10, 2));