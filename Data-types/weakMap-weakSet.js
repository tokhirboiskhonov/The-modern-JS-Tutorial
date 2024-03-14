//*  WeakMap and WeakSet

// As we know from the chapter Garbage collection, JavaScript engine keeps a value in memory while it is “reachable” and can potentially be used.

// For example:

let john = {
  name: "John",
};

john = null;

console.log(john);

// Usually, properties of an object or elements of an array or another data structure are considered reachable and kept in memory while that data structure is in memory.

// For instance, if we put an object into an array, then while the array is alive, the object will be alive as well, even if there are no other references to it.

// Like this:

let steve = { name: "Steve" };

let array = [steve];

steve = null; // overwrite the reference

// the object previously referenced by john is stored inside the array
// therefore it won't be garbage-collected
// we can get it as array[0]

console.log(array[0]);

// Similar to that, if we use an object as the key in a regular Map, then while the Map exists, that object exists as well. It occupies memory and may not be garbage collected.

// For instance

let hakimura = { name: "Hakimura" };

let map = new Map();

map.set(hakimura, "...");

hakimura = null; //overwrite the reference#

// map.has(hakimura);

console.log(map);

// WeakMap is fundamentally different in this aspect. It doesn’t prevent garbage-collection of key objects.

// Let’s see what it means on examples.

//* WeakMap

//? The first difference between Map and WeakMap is that keys must be objects, not primitive values:

let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok");
// console.log(weakMap.get(obj)); // output is ok (works fine (object key))

weakMap.set("test", "Wassup?");

console.log(weakMap.get("test")); // TypeError: Invalid value used as weak map key, so it means can't use primitive values with WeakMap

// Now, if we use an object as the key in it, and there are no other references to that object – it will be removed from memory (and from the map) automatically.

let name = { name: "Tokhirkhuja" };

let weakMap1 = new WeakMap();

weakMap1.set(name, "...");

name = null; // overwrite the reference

console.log(weakMap1); // WeakMap { <items unknown> }

// name is removed from memory!

// Compare it with the regular Map example above. Now if john only exists as the key of WeakMap – it will be automatically deleted from the map (and memory).

//! WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.

// WeakMap has only the following methods:

//? weakMap.set(key, value)
//? weakMap.get(key)
//? weakMap.delete(key)
//? weakMap.has(key)

// Now, where do we need such a data structure?

//* Use Case: additional data

// The main area of application for WeakMap is an additional data storage.

// If we’re working with an object that “belongs” to another code, maybe even a third-party library, and would like to store some data associated with it, that should only exist while the object is alive – then WeakMap is exactly what’s needed.

// We put the data to a WeakMap, using the object as the key, and when the object is garbage collected, that data will automatically disappear as well.

weakMap.set(john, "secret documents");
// if john dies, secret documents will be destroyed automatically

//* Use Case: caching

// Another common example is caching. We can store (“cache”) results from a function, so that future calls on the same object can reuse it.

// To achieve that, we can use Map (not optimal scenario):

// 📁 cache.js
let cache = new Map();

// calculate and remember the result
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* calculations of the result for */ obj;

    cache.set(obj, result);
    return result;
  }

  return cache.get(obj);
}

// Now we use process() in another file:

// 📁 main.js
let newObj = {
  /* let's say we have an object */
};

let result1 = process(newObj); // calculated

// ...later, from another place of the code...
let result2 = process(newObj); // remembered result taken from cache

// ...later, when the object is not needed any more:
newObj = null;

alert(cache.size); // 1 (Ouch! The object is still in cache, taking memory!)

// For multiple calls of process(obj) with the same object, it only calculates the result the first time, and then just takes it from cache. The downside is that we need to clean cache when the object is not needed any more.

// If we replace Map with WeakMap, then this problem disappears. The cached result will be removed from memory automatically after the object gets garbage collected.

// 📁 cache.js
let newCache = new WeakMap();

// calculate and remember the result
function process(obj) {
  if (!newCache.has(obj)) {
    let result = /* calculate the result for */ obj;

    newCache.set(obj, result);
    return result;
  }

  return newCache.get(obj);
}

// 📁 main.js
let newObj1 = {
  /* some object */
};

let newResult1 = process(newObj1);
let newResult2 = process(newObj1);

// ...later, when the object is not needed any more:
newObj1 = null;

// Can't get cache.size, as it's a WeakMap,
// but it's 0 or soon be 0
// When obj gets garbage collected, cached data will be removed as well

//*  WeakSet

//! WeakSet behaves similarly:

//? It is analogous to Set, but we may only add objects to WeakSet (not primitives).
//? An object exists in the set while it is reachable from somewhere else.
//? Like Set, it supports add, has and delete, but not size, keys() and no iterations.

// Being “weak”, it also serves as additional storage. But not for arbitrary data, rather for “yes/no” facts. A membership in WeakSet may mean something about the object.

// For instance, we can add users to WeakSet to keep track of those who visited our site:

let visitedSet = new WeakSet();

let tokhir = { name: "Tokhir" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(tokhir); // Tokhir visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(tokhir); // Tokhir again

// visitedSet has 2 users now

// check if Tokhir visited?
alert(visitedSet.has(tokhir)); // true

// check if Mary visited?
alert(visitedSet.has(tokhir)); // false

john = null;

// visitedSet will be cleaned automatically

// The most notable limitation of WeakMap and WeakSet is the absence of iterations, and the inability to get all current content. That may appear inconvenient, but does not prevent WeakMap/WeakSet from doing their main job – be an “additional” storage of data for objects which are stored/managed at another place.

//* Summary

// WeakMap is Map-like collection that allows only objects as keys and removes them together with associated value once they become inaccessible by other means.

// WeakSet is Set-like collection that stores only objects and removes them once they become inaccessible by other means.

// Their main advantages are that they have weak reference to objects, so they can easily be removed by garbage collector.

// That comes at the cost of not having support for clear, size, keys, values…

// WeakMap and WeakSet are used as “secondary” data structures in addition to the “primary” object storage. Once the object is removed from the primary storage, if it is only found as the key of WeakMap or in a WeakSet, it will be cleaned up automatically.

//*  Tasks

//! 1. Store "unread" flags

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);
readMessages.add(messages[0]);

// console.log(`Read message 0: ${readMessages.has(messages[0])}`);

messages.shift();
// now readMessages has 1 element (technically memory may be cleaned later)

//! 2. Store reads dates

let messages1 = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMap = new WeakMap();

readMap.set(messages1[0], new Date(2024, 14, 3));

console.log(readMap.get(messages1[0]));
