let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

function longestSentence(text) {
  let sentencesArr = text.match(/\w[^.!?]*[.!?]/g);

  if (!sentencesArr) {
    console.log('There are no sentences. (Ends with ".", "!", or "?")');
    return;
  }

  let currentLongest = sentencesArr[0];

  sentencesArr.forEach(sentence => {
    if (getSentenceLength(sentence) > getSentenceLength(currentLongest)) {
      currentLongest = sentence;
    }
  });

  console.log(currentLongest);
  console.log(`\nThe longest sentence has ${getSentenceLength(currentLongest)} words.`);
}

function getSentenceLength(sentence) {
  console.log(sentence.split(/\s+(\b)/));
  return sentence.split(/\S*\s+/).length;
}

// longestSentence(longText);

// console output
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

// The longest sentence has 86 words.


// Assuming the last sentence is removed:

// longestSentence(longText);

// // console output
// // Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

// // The longest sentence has 30 words.

// longestSentence("I!");
// longestSentence("Hello there! Why  not? Goodbye.");
// // Hello there! *OR* Why  not?

// // The longest sentence has 2 words.

// longestSentence("No punctuation");
// // 2 words or 0 words depending on rule if there's no punctuation

// longestSentence("Hello! Why? Goodbye.");
// // should output:
// // Hello! (or "Why?" or "Goodye.")

// // The longest sentence has 1 word(s).

// longestSentence("     I yam what I yam! Hi there!");
// // should output:
// // I yam what I yam!

// // The longest sentence has 5 words.
// longestSentence('What\'s up, "Doc"? The brown fox is superlative!');
// // The brown fox is superlative!

// // The longest sentence has 5 words.

longestSentence("Hello   ! Why  not? Goodbye.");
// Why  not?

// The longest sentence has 2 words.