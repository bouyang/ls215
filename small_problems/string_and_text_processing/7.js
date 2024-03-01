function staggeredCase(str) {
  let upper = true;
  return str.split('').map(letter => {
      if ((/[a-z]/i).test(letter)) {
        if (upper) {
          upper = false;
          return letter.toUpperCase();
        } else {
          upper = true;
          return letter.toLowerCase();
        }
      } else {
        return letter;
      }
    }
  ).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"