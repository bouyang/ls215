/*
  given string of numbers (first one represents count of the numbers)
  there can be pairs of numbers that exist in the string
  identify the number of pairs

  can ignore first number
  slice first out

  split string to array of numbers
  find all unique numbers in string
    have array of running numbers
    during iteration, check if that running num array contains next number
      if so, skip. if not, add to running nums
  iterate through unique numbers and generate new array based on original string
    count the number of pairs for each of those (length / 2 floor)
  return total number of pairs
*/

function numberPairs(str) {
  let numbers = str.split(' ').slice(1);

  let uniqueNums = [];
  numbers.forEach(num => {
    if (!uniqueNums.includes(num)) {
      uniqueNums.push(num);
    }
  });

  let numberOfPairs = 0;
  uniqueNums.forEach(num => {
    numberOfPairs += Math.floor(numbers.filter(target => target === num).length / 2);
  });

  return numberOfPairs;
}

console.log(numberPairs("7 1 2 1 2 1 3 2"));
console.log(numberPairs("9 10 20 20 10 10 30 50 10 20"));
console.log(numberPairs("4 2 3 4 1"));