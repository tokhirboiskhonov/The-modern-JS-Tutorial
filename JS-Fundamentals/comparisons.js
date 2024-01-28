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

