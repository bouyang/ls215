/*
Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages.
Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:

If the phone number is less than 10 digits, assume that it is a bad number.
If the phone number is 10 digits, assume that it is good.
If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
If the phone number is 11 digits and the first number is not 1, then it is a bad number.
If the phone number is more than 11 digits, assume that it is a bad number.
For bad numbers, just a return a string of 10 0s.
*/

function phone(num) {
  const regex = /[^0-9]/g;
  num = num.replace(regex, '');

  let length = num.length;

  if (length >= 12 || length <= 9) {
    return '0000000000';
  }

  if (length === 11) {
    if (num[0] !== '1') {
      return '0000000000';
    }
    num = num.slice(1);
  }

  return num;
}

console.log(phone('1234567890'));
console.log(phone('12345678901'));
console.log(phone('22345678901'));
console.log(phone('123456789012'));
console.log(phone('12345678.012'));
console.log(phone('1234567890 2'));
console.log(phone('123-456-7890 '));
console.log(phone('(123) 456-7890'));