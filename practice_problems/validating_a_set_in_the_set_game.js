/*
  3 cards for a set. Cards have 4 properties
  if each card is identical or different (in all properties) it is a set

  cards are given as array of obj
  obj is each individual card with attributes for the properties

  iterate through all cards in the "deck"
    find length (num of cards in the deck)
    iterate through the 1st property by obj.keys[index]
      collect all values into an array
      compare identical (set value to first one and then check if all other cards)
      compare all different (indexOf === lastIndexOf) for each element
  compare each property to all other cards in the set
  if they are all different or they are all the same, then continue. If not, not a set
  continue until all properties are compared. If finishes then it's a set
*/

function isSet(cards) {
  let numCards = cards.length;
  let result = true;
  
  Object.keys(cards[0]).forEach(property => {
    let cardValues = [];
    cards.forEach(cardInfo => {
      cardValues.push(cardInfo[property]);
    });
    
    let identical = compareIdentical(cardValues);
    let unique = compareUnique(cardValues);

    if (!identical && !unique) {
      result = false;
    }
  });

  return result;
}

function compareIdentical(arr) {
  let target = arr[0];

  return arr.filter(value => value === target).length === arr.length;
}

function compareUnique(arr) {
  return arr.filter(value => {
    return arr.indexOf(value) === arr.lastIndexOf(value);
  }).length === arr.length;
}

console.log(isSet([
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]));

console.log(isSet([
  {color: "red", number: 1, shade: "lined", shape: "squiggle"}, 
  {color: "red", number: 1, shade: "lined", shape: "diamond"}, 
  {color: "red", number: 1, shade: "lined", shape: "squiggle"}
]));