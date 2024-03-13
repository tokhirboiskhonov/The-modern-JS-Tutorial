//* Map and Set

//! Till now, we’ve learned about the following complex data structures:

//? Objects are used for storing keyed collections.

//? Arrays are used for storing ordered collections.

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

