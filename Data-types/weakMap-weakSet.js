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

