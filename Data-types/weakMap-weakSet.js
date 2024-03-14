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

