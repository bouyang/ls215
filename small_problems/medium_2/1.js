/*
split string into chars
iterate through each char
if lowercase/uppercase (toUpperCase) or neither, add to counter
determine percentages of each and add to result object
  toFixed(2)
*/

function letterPercentages(str) {
  let lower = 0;
  let upper = 0;
  let other = 0;

  str.split('').forEach(letter => {
    if (/[^a-z]/ig.test(letter)) {
      other += 1;
    } else if (letter.toUpperCase() === letter) {
      upper += 1;
    } else {
      lower += 1;
    }
  })

  let total = (upper + lower + other);

  return {
    lowercase: String((lower / total * 100).toFixed(2)),
    uppercase: String((upper / total * 100).toFixed(2)),
    other: String((other / total * 100).toFixed(2)),
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }