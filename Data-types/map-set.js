//* Map and Set

//! Till now, we’ve learned about the following complex data structures:

//? Objects are used for storing keyed collections.

//? Arrays are used for storing ordered collections.

//! But that’s not enough for real life. That’s why Map and Set also exist.

//* Map

// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

//! Methods and properties are:

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element (the key/value pair) by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.

// For instance:

let map = new Map();

map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log(map.get(1)); // 'num1'
console.log(map.get("1")); // 'str1'

console.log(map.size); // 3

//! As we can see, unlike objects, keys are not converted to strings. Any type of key is possible.

//? map[key] isn’t the right way to use a Map

// Although map[key] also works, e.g. we can set map[key] = 2, this is treating map as a plain JavaScript object, so it implies all corresponding limitations (only string/symbol keys and so on).

// So we should use map methods: set, get and so on.

//! Map can also use objects as keys.

// For example:

let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

alert(visitsCountMap.get(john)); // 123

// Using objects as keys is one of the most notable and important Map features. The same does not count for Object. String as a key in Object is fine, but we can’t use another Object as a key in Object.

// Let’s try:

let steve = { name: "Steve" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[steve] = 123; // try to use steve object as the key, ben object will get replaced

// That's what got written!
alert(visitsCountObj["[object Object]"]); // 123

// As visitsCountObj is an object, it converts all Object keys, such as john and ben above, to same string "[object Object]". Definitely not what we want.

//! How Map compares keys

// To test keys for equivalence, Map uses the algorithm SameValueZero. It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. So NaN can be used as the key as well.

// This algorithm can’t be changed or customized.

//! Chaining

// Every map.set call returns the map itself, so we can “chain” the calls:

map.set("1", "str1").set(1, "num1").set(true, "bool1");

//* Iteration over Map

// For looping over a map, there are 3 methods:

//? map.keys() – returns an iterable for keys,
//? map.values() – returns an iterable for values,
//? map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

// For exapmle

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) {
  // the same as of recipeMap.entries()
  console.log(entry); // cucumber,500 (and so on)
}

//! The insertion order is used

// The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object.

//! Besides that, Map has a built-in forEach method, similar to Array:

// runs the function for each (key, value) pair
recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`); // cucumber: 500 etc
});

//* Object.entries: Map from Object

// When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization, like this:

// array of [key, value] pairs
let map1 = new Map([
  ["1", "str1"],
  [1, "num1"],
  [true, "bool1"],
]);

alert(map1.get("1")); // str1

// If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.

// So we can create a map from an object like this:

let obj2 = {
  name: "John",
  age: 30,
};

let map2 = new Map(Object.entries(obj2));

console.log(map2.get("name")); // John

// Here, Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ]. That’s what Map needs.

//* Object.fromEntries: Object from Map

// We’ve just seen how to create Map from a plain object with Object.entries(obj).

// There’s Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them:

let prices = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

// now prices = { banana: 1, orange: 2, meat: 4 }

console.log(prices.orange); // 2

//? We can use Object.fromEntries to get a plain object from Map.

// E.g. we store the data in a Map, but we need to pass it to a 3rd-party code that expects a plain object.

// Here we go:

let map3 = new Map();
map3.set("banana", 1);
map3.set("orange", 2);
map3.set("meat", 4);

let obj3 = Object.fromEntries(map3.entries()); // make a plain object (*)

// done!
// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj3.orange); // 2

// A call to map.entries() returns an iterable of key/value pairs, exactly in the right format for Object.fromEntries.

//? We could also make line (*) shorter:

// let obj = Object.fromEntries(map); // omit .entries()

// That’s the same, because Object.fromEntries expects an iterable object as the argument. Not necessarily an array. And the standard iteration for map returns same key/value pairs as map.entries(). So we get a plain object with same key/values as the map.
