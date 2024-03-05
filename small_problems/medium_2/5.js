/*
  if num >= 9876543201 return 'no possible'

  starting at num, iterate up and check:
    number must be odd, multiple of 7
      split each digit and check each digit that indexOf is equal to lastIndexOf
  if number fulfills this then return it
*/


function featured(num) {
  if (num >= 9876543201) {
    return 'not possible';
  }

  for (let counter = num + 1; counter <= 9876543201; counter += 1) {
    if (counter % 2 === 1 && counter % 7 === 0) {
      let digits = String(counter).split('');
      if (digits.filter(digit => digits.indexOf(digit) !== digits.lastIndexOf(digit)).length === 0) {
        return counter;
      }
    }
  }
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."