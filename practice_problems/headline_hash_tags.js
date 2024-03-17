/*
  
  retrieves top 3 longest words of a headline
  transforms into hashtag
  if multiple same length, get first one

  punctuation does not count
  hashtags are lowercase
  if < 3 words, sort by length then return all
  order by length

  input: string of words

  output: array of strings, each string is a #string

  questions:

  input:
    - always be strings? (nums)
    - only ABC count as letter length (do special chars count?)
    - capitalization does not seem to count

  
  split string into words
  sort by length
  output the top 3 by lowercase and adding a # in front into array
*/

function getHashTags(str) {
  str = str.replace(/[^A-Za-z ]/gi, '');

  let words = str.split(' ');
  words.sort((a, b) => b.length - a.length);

  let result = [];

  for (let idx = 0; idx < words.length; idx += 1) {
    if (idx <= 2) {
      result.push(`#${words[idx].toLowerCase()}`);
    }
  }

  return result;
}

console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade"));
console.log(getHashTags("Are You an Elite Entrepreneur?"));
console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"));