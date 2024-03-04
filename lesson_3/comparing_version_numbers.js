// extra zeroes are equal
// go by each first number, if same, go to next, etc.

function compareVersions(version1, version2) {
  let v1_digits = version1.split('.');
  let v2_digits = version2.split('.');

  if (version1.match(/[^0-9\.]/ig) || version2.match(/[^0-9\.]/ig) ||
      version1.match(/\.{2,}/g) || version2.match(/\.{2,}/g) ||
      version1.match(/\.$/g) || version2.match(/\.$/g) ||
      version1.match(/^\./g) || version2.match(/^\./g)) {
    return null;
  }

  let maxLength = Math.max(v1_digits.length, v2_digits.length);

  for (let index = 0; index < maxLength; index += 1) {
    // console.log(`index ${index}, v1: ${v1_digits[index]}, v2: ${v2_digits[index]}`);
    if (v1_digits[index] !== v2_digits[index]) {
      if (v1_digits[index] === undefined) {
        v1_digits[index] = 0;
      } else if (v2_digits[index] === undefined) {
        v2_digits[index] = 0;
      }

      if (Number(v1_digits[index]) > Number(v2_digits[index])) {
        return 1;
      } else if (Number(v1_digits[index]) < Number(v2_digits[index])) {
        return -1;
      }
    }
  }

  return 0;
}


// console.log(compareVersions('0.1', '1'));
// console.log(compareVersions('1', '1.0'));
// console.log(compareVersions('1.0', '1.1'));
// console.log(compareVersions('1.1', '1.2'));
// console.log(compareVersions('1.2', '1.2.0.0'));
// console.log(compareVersions('1.2.0.0', '1.18.2'));
// console.log(compareVersions('1.18.2', '13.37'));
// console.log('');
// console.log(compareVersions('1.2', '1.1'));
// console.log(compareVersions('1.2.0.0', '1.2'));
// console.log(compareVersions('1.18.2', '1.2.0.0'));
// console.log(compareVersions('13.37', '1.18.2'));
// console.log(compareVersions('a.123', '123'));
// console.log(compareVersions('1', '1.'));
// console.log(compareVersions('1..1', '1'));
// console.log(compareVersions('1.0', '1.0.5'));

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1