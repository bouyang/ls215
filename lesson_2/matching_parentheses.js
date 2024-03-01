function isBalanced(str) {
  let chars = str.split('');
  let count = 0;

  for (let index = 0; index < chars.length; index += 1) {
    if (chars[index] === '(') {
      count += 1;
    } else if (chars[index] === ')') {
      count -= 1;
    }
    if (count < 0) {
      return false;
    }
  }

  return count === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false