// Map and compare number to previous number. (Keep track of most recent number (the 1's place))
// Using storage counter If < previous, then need to add 10
// All numbers add storage plus current number

// Check for -, :, or .. If encounter, map to range

function expandRange(rangeStr) {
  let storage = 0;
  let numbersArr = rangeStr.split(',');
  let recentOnes;
  
  return numbersArr.map((number, index) => {
    if (index === 0) {
      recentOnes = Number(number.split('').reverse()[0]);
      storage = number - recentOnes;
      return number;
    } else {
      if (Number(number) < Number(numbersArr[index - 1])) {
        storage += 10;
      }
      return Number(number) + storage;
    }
  }).join(',');
}

function expandRange2(rangeStr) {
  let result = [];
  let eachElement = rangeStr.split(',');

  result = eachElement.map(element => {
    if ((new RegExp('-:|..', 'g')).test(element)) {
      let num1 = element.split(/[-:|..]/)[0];
      let num2 = element.split(/[-:|..]/)[1];

      return fillRange(num1, (nextNumber(num1, num2)));
    } else {
      return element;
    }
  });

  return result.flat();
}

function nextNumber(num, nextPart) {
  num = num.trim();
  nextPart = nextPart.trim();

  let keepPlaces = num.length - nextPart.length;
  let result = [];

  if (Number(nextPart) > Number(num)) {
    return nextPart;
  }

  if (keepPlaces === 0) {
    return String(Number(nextPart) + 10);
  }

  for (let index = 0; index < keepPlaces - 1; index += 1) {
    result.push(num[index]);
  }

  result.push(Number(num[keepPlaces - 1]) + 1);
  result.push(nextPart);

  return result.join('');
}

function fillRange(num1, num2) {
  let result = [];
  for (let count = Number(num1); count <= Number(num2); count += 1) {
    result.push(String(count));
  }
  return result;
}

console.log(expandRange2('1,3,7,2,4,1'));
console.log(expandRange2('1-3, 1-2'));
// console.log(expandRange2('1:5:2'));
console.log(expandRange2('104-2'));
console.log(expandRange2('104-02'));
// console.log(expandRange2('545, 64:11'));

// console.log(nextNumber('104', '2'));
// console.log(nextNumber('104', '02'));
// console.log(nextNumber('1004', '2'));