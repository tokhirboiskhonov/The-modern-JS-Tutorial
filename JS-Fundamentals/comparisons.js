// We know many comparison operators from maths.

// In JS they are written like this:

//? 1. Greater/less than: a > b, a < b.
//? 2. Greater/less than or equals: a >= b, a <= b.
//? 3. Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
//? 4. Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

//* Boolean is the result

// All comparison operators return a boolean value.

//? true - means "yes", "correct" or "the truth";
//? false - means "no", "wrong" or "not the truth";

// alert(2 > 1); //true
// alert(2 == 1); //false
// alert(2 != 1); //true

let result = 5 > 4;
// alert(result);

//? String comparison

// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

// In other words, strings are compared letter-by-letter.

// alert("Z" > "A"); // true
// alert("Glow" > "Glee"); // true
// alert("Bee" > "Be"); // true

// The algorithm to compare two strings is simple:

//? 1. Compare the first character of both strings.
//? 2. If the first character from the first string is greater (or less) than the other string's, then the first string is greater (or less) than the second. We're done.
//? 3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
//? 4. Repeat until the end of either string.
//? 5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

// In the first example above, the comparison 'Z' > 'A' gets to a result at the first step.

// The second comparison 'Glow' and 'Glee' needs more steps as strings are compared character-by-character:

//? 1. G is the same as G.
//? 2. l is the same as l.
//? 3. o is greater than e. Stop here. The first string is greater.

// For instance, case matters. A capital letter "A" is not equal to the lowercase "a". Which one is greater? The lowercase "a".

//* Comparison of different types

// When comparing values of different types, JavaScript converts the values to numbers.

// For example

alert("2" > 1); // true, string '2' becomes a number 2
alert("01" == 1); // true, string '01' becomes a number 1

// For boolean values, true becomes 1 and false becomes 0.

// For example

alert(true == 1); // true
alert(false == 0); // true

//! A funny consequence

// It is possible that at the same time:

//1. Two values are equal.
//2. One of them is true as a boolean and the other one is false as boolean.

// For example

let a = 0;
alert(Boolean(a)); // false

let b = "0";
alert(Boolean(b)); // true

alert(a == b); // true!

// From JavaScript’s standpoint, this result is quite normal. An equality check converts values using the numeric conversion (hence "0" becomes 0), while the explicit Boolean conversion uses another set of rules.

//* Strict equality

// A regular equality check == has a problem. It cannot differentiate 0 from false;

alert(0 == false); // true;

// The same thing happens with an empty string:

alert("" == false); // true;

// This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.

//! A strict equality operator === checks the equality without type conversion.

// In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.

// Let’s try it:

alert(0 === false); // false, because the types are different

// There is also a “strict non-equality” operator !== analogous to !=.

//* Comparison with null and undefined

// There’s a non-intuitive behavior when null or undefined are compared to other values.

// For a strict equality check ===

// These values are different, because each of them is a different type.

alert(null === undefined); // false

// For a non-strict check ==

// There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.

alert(null == undefined); // true

// For maths and other comparisons < > <= >=

// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

//* Strange result: null vs 0

// Let’s compare null with a zero:

alert(null > 0); // (1) false
alert(null == 0); // (2) false
alert(null >= 0); // (3) true
