/*
  
  pair of identical characters serve as book ends for all chars between them
  returns total num of unique characters (books) between all pairs of book ends

  split the string based on bookend and keep the odd indexed ones

  for each set, find the unique values and then count those

  sum up the count

*/

function countUniqueBooks(s, bookend) {
  let books = s.split(bookend).filter((_, idx) => idx % 2 === 1);
  let unique = books.map(book => {
    return book.split('');
  });

  unique = unique.flat();
  unique = unique.filter((letter, index, self) => self.indexOf(letter) === index).map(ele => ele.length);

  return unique.reduce((total, current) => total + current, 0);
}

console.log(countUniqueBooks("AZYWABBCATTTA", "A"));
console.log(countUniqueBooks("&3&3&3&", "&"));