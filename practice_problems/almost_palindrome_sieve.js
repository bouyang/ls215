/*
  
  takes an array of integers, returns the integers that are either palindromes or almost
  almost is an integer that can be rearranged for form a palindrome eg 677

  input:
    - array of integers always?
    - negative or 0?
  data type:
    - special numbers?
  output: order of palindromes?

  iterate through each in array (filter) =>
  - if it is a palindrome:
    - convert to string, reverse and compare
  - if it is an almost palindrome:
    - digits must be such that each one pairs (except one can be a lone number in the middle)
    - sort the digits
    - in a loop that ends if the digits arr is empty or if the lone num counter > 1
      check if the first and second are the same
      - if so, remove them via splice
      - if not, remove and increment a "lone num" counter
    if lone num count > 1, return false
    otherwise return true

    // 3232 => 2233
    // 33
    // []

    // 32321 => 12233
    // 2233 (ln + 1)



*/

function palindromeSieve(nums) {
  return nums.filter(number => {
    return isPalindrome(number) || isAlmostPalindrome(number);
  });
}

function isPalindrome(num) {
  return String(num).split('').reverse() === String(num).split('');
}

function isAlmostPalindrome(num) {
  let digits = String(num).split('').sort();
  let loneNum = 0;
  
  while (digits.length > 0) {
    if (digits[0] === digits[1]) {
      digits.splice(0, 2);
    } else {
      loneNum += 1;
      digits.splice(0, 1);
    }
    if (loneNum > 1) {
      break;
    }
  }
  return loneNum < 2;
}

console.log(palindromeSieve([5, 55, 6655, 8787, 87879, 878790]));