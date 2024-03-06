

const ADJECTIVES = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
const NOUNS = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
const VERBS = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
const ADVERBS = ['easily', 'lazily', 'noisily', 'excitedly'];

function madlibs(template) {
  return template.split(' ').map(word => {
    if (/adjective/.test(word)) {
      return word.replace(/adjective/, ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)]);
    } else if (/noun/.test(word)) {
      return word.replace(/noun/, NOUNS[Math.floor(Math.random() * NOUNS.length)]);
    } else if (/^(verb)/.test(word)) {
      return word.replace(/^(verb)/, VERBS[Math.floor(Math.random() * VERBS.length)]);
    } else if (/adverb/.test(word)) {
      return word.replace(/adverb/, ADVERBS[Math.floor(Math.random() * ADVERBS.length)]);
    } else {
      return word;
    }
  }).join(' ');
}

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------
let template1 = 'The adjective brown noun adverb verb the adjective yellow noun who adverb verb his noun and looks around';
let template2 = 'The noun verb the noun\'s noun';
console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".