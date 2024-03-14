/*
  attribute a weight to numbers
  the weight of a number is the sum of its digits

  order a string by weights
  if same weight, class as abc

  coule be more than one space

  separate weights into numbers (regex /\d+/g)
  sort weights by str first
  sort weights again by summing digits
*/

function orderWeight(strng) {
  let weights = strng.match(/\d+/g);

  if (!weights) return '';

  weights.sort()
  weights.sort((a, b) => {
    let sumA = a.split('').reduce(((tot, curr) => tot + Number(curr)), 0);
    let sumB = b.split('').reduce(((tot, curr) => tot + Number(curr)), 0);

    return sumA - sumB;
  });

  return weights.join(' ');
}

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
console.log(orderWeight(". 2000 10003 1234000   44444444 9999 11 11 22 123. "));