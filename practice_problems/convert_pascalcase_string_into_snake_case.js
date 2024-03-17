/*


  
*/


function toUnderscore(string) {
  string = String(string);

  let regex = /[A-Z][^A-Z]+/g
  if (!string.match(regex)) return string;
  return string.match(regex).map(word => word.toLowerCase()).join('_');
}

console.log(toUnderscore('TestController'));
console.log(toUnderscore('App7Test'));
console.log(toUnderscore('5'));