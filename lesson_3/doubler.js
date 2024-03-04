function doubler(arr) {

}

// - elements that are numbers should be multiplied by 2
console.log(doubler([1, 2, 3])); // [2, 4, 6]
// - elements that are strings should be repeated twice via concatenation
console.log(doubler(['a', 'b', 'cc'])); // ['aa', 'bb', 'cccc']
// - other types of elements should be duplicated in the array
console.log(doubler([true, false]));                // [true, true, false, false]
console.log(doubler([null]));                       // [null, null]
console.log(doubler([undefined]));                  // [undefined, undefined]
console.log(doubler([[1], []]));                    // [[1], [1], [], []]
console.log(doubler([{ foo: 'bar' }]));             // [{ foo: "bar" }, { foo: "bar" }]
console.log(doubler([function foo() {}]));          // [function foo(), function foo()]
console.log(doubler([/abc/]));                      // [/abc/, /abc/]
// - the input array should not be mutated
let arr1 = [1, 2, 3];
console.log(doubler(arr1)); // [2, 4, 6]
console.log(arr1); // [1, 2, 3]
// - elements that are special number values should remain unchanged
console.log(doubler([Infinity, NaN])); // [Infinity, NaN]
// - elements that are any other type of number should be treated normally (multiplied by 2)
console.log(doubler([0, -1, 0.3])); // [0, -2, 0.6]
// - elements that are empty strings should remain unchanged
console.log(doubler(['', ''])); // ['', '']
// - elements that are any other type of string should be treated normally (repeated twice)
console.log(doubler([' ', 'aB', '@', '\n', '1']));  // ["  ", "aBaB", "@@", "\n\n", "11"]
// the input array can contain a mixture of different types of elements
console.log(doubler([1, 'a', true, [], {}]));       // [2, "aa", true, true, [], [], {}, {}]

// non-primitive elements should have their reference duplicated, not their value
let doubled = doubler([{ a: 'b' }]);
console.log(doubled[0] === doubled[1]);             // true

// elements that appear more than once should be treated normally (as specified above)
console.log(doubler([1, 1, true, true, {}, {}]));   // [2, 2, true, true, true, true, {}, {}, {}, {}]

// elements that contain nested arrays or objects should be treated normally (duplicated)
console.log(doubler([[1, [2, 3], {}]]));            // [[1, [2, 3], {}], [1, [2, 3], {}]]
console.log(doubler([{ a: [1] }]));                 // [{ a: [1] }, { a: [1] }]

// if the input array contains empty slots (a "sparse array"), they should be removed
console.log(doubler([1, , 2, , , 3]));              // [2, 4, 6]

// if an inner array (element) contains empty slots, they should remain unchanged
console.log(doubler([[1, , , 2]]));                 // [[1, empty × 2, 2], [1, empty × 2, 2]]

// if the input array contains any object properties, they should remain unchanged
let arr2 = [1, 2];
arr2.foo = 'bar';
console.log(doubler(arr2));                        // [2, 4, foo: "bar"]

// if an inner array (element) contains any object properties, they should remain unchanged
let arr3 = [1, 2];
arr3.foo = 'bar';
console.log(doubler([arr3]));                      // [[1, 2, foo: "bar"], [1, 2, foo: "bar"]]

// if the input array is empty, return an empty array
console.log(doubler([]));                           // []

// if multiple arguments are passed, ignore all but the first
console.log(doubler(['a'], ['b']));                 // ['aa']

// if the argument is a string, treat it as an array of characters
console.log(doubler('abc'));                        // ["aa", "bb", "cc"]
doubler('123');                        // ["11", "22", "33"]
doubler('');                           // []

// if the argument is a non-negative integer, treat it as an array of digits
console.log(doubler(123));                          // [2, 4, 6]
doubler(0);                            // [0]

// if the argument is an object, treat it as an array of its property values
console.log(doubler({ a: 1, b: 2 }));               // [2, 4]
doubler({ a: 'A', b: [] });            // ["AA", [], []]
doubler({});                           // []