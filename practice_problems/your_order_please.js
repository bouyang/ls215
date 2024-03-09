/*
  given string, each word in string contains a single number
  the number determines position 1-9 consecutive
  rearrange words based on that

  split into words and sort
  sorting function: find the number
    regex match for digit
*/


function order(words){
  return words.split(' ').sort((a, b) => {
    let num1 = a.match(/\d/)[0];
    let num2 = b.match(/\d/)[0];
    return num1 - num2;
  }).join(' ');
}

console.log(order("is2 Thi1s T4est 3a"));