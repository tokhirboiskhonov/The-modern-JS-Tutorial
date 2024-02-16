//* Optional chaining "?."

// The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.

//* The "non-existing property" problem

// If you’ve just started to read the tutorial and learn JavaScript, maybe the problem hasn’t touched you yet, but it’s quite common.

// As an example, let’s say we have user objects that hold the information about our users.

// Most of our users have addresses in user.address property, with the street user.address.street, but some did not provide them.

// In such case, when we attempt to get user.address.street, and the user happens to be without an address, we get an error:

// let user = {}; // a user without "address" property

// console.log(user.address?.street);

// That’s the expected result. JavaScript works like this. As user.address is undefined, an attempt to get user.address.street fails with an error.

// In many practical cases we’d prefer to get undefined instead of an error here (meaning “no street”).

//* Optional chaining

// The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.

// Further in this article, for brevity, we’ll be saying that something “exists” if it’s not null and not undefined.

//! In other words, value?.prop:
//? 1. works as value.prop, if value exists,
//? 2. otherwise (when value is undefined/null) it returns undefined.

// Here’s the safe way to access user.address.street using ?.:

let user = {}; // user has no address

console.log(user?.address?.street); // undefined

//! Don’t overuse the optional chaining

// We should use ?. only where it’s ok that something doesn’t exist.

// For example, if according to our code logic user object must exist, but address is optional, then we should write user.address?.street, but not user?.address?.street.

// Then, if user happens to be undefined, we’ll see a programming error about it and fix it. Otherwise, if we overuse ?., coding errors can be silenced where not appropriate, and become more difficult to debug.

//! The variable before ?. must be declared

// If there’s no variable user at all, then user?.anything triggers an error:

// ReferenceError: user is not defined
// user?.address;
// The variable must be declared (e.g. let/const/var user or as a function parameter). The optional chaining works only for declared variables.

