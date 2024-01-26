// Data types
// There are 8 data types in JS.
// If you don't know how to check the data type of your value, you can use typeof to determine its data type. Typeof in JS is  an operator used for type checking and returns the data type of the operand passed to it.

// ! Seven primitive data types:

// ** 1. Number

let n = 123;

n = 1.23;

// The number type represents both integer and floating point numbers.

// There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.

// Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.

// 1.1 Infinity

// console.log(1 / 0); //Infinity
// console.log(Infinity); //Infinity

// 1.2 NaN
// NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:

console.log("not a number" / 1); //NaN

// NaN is sticky. Any further mathematical operation on NaN returns NaN:

console.log(NaN + 1); // NaN
console.log(3 * NaN); // NaN
console.log("not a number" / 2 - 1); // NaN

// So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).
console.log(NaN ** 0); // 1

// ** 2. BigInt

// In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992 // this expression isn't working correct.

// So to say, all odd integers greater than (253-1) can’t be stored at all in the “number” type.

// A BigInt value is created by appending n to the end of an integer:

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

// ** 3. String

// A string in JS must be surrounded by quotes.

let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed another ${str}`;

// In JavaScript, there are 3 types of quotes.

// 1. Double quotes: "Hello".
// 2. Single quotes: 'Hello'.
// 3. Backticks: `Hello`.
// Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

// let name = "John";

// embed a variable
// console.log(`Hello, ${name}!`); // Hello, John!

// embed an expression
console.log(`the result is ${1 + 2}`); // the result is 3

// The expression inside ${…} is evaluated and the result becomes a part of the string. We can put anything in there: a variable like name or an arithmetical expression like 1 + 2 or something more complex.
// Please note that this can only be done in backticks. Other quotes don’t have this embedding functionality!

console.log("the result is ${1 + 2}"); // the result is ${1 + 2} (double quotes do nothing)

// ** 4. Boolean (logical type)

// The boolean type has only two values: true and false.
// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

//For instance:

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

// Boolean values also come as a result of comparisons:

let isGreater = 4 > 1;

console.log(isGreater); // true (the comparison result is "yes")

// ** 5. Null

// The special null value does not belong to any of the types described above.

// It forms a separate type of its own which contains only the null value:

let age = null;

// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

// The code above states that age is unknown.

// ** 6. Undefined

// The special value undefined also stands apart. It makes a type of its own, just like null.

// The meaning of undefined is “value is not assigned”.

// If a variable is declared, but not assigned, then its value is undefined:

let age1;
console.log(age1); //undefined

// Technically, it is possible to explicitly assign undefined to a variable:

let age2 = 100;

// change the value to undefined
age2 = undefined;

alert(age2); // "undefined"

// …But we don’t recommend doing that. Normally, one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things.

// ** 7. Symbol
// symbol for unique identifiers.

// ! And one non-primitive data type:
// object for more complex data structures.

// *** ====================================

// ! The typeof operator
// The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.

// A call to typeof x returns a string with the type name:

console.log(typeof undefined); // "undefined"

console.log(typeof 0); // "number"

console.log(typeof 10n); // "bigint"

console.log(typeof true); // "boolean"

console.log(typeof "foo"); // "string"

console.log(typeof Symbol("id")); // "symbol"

console.log(typeof Math); // "object"  (1)

console.log(typeof null); // "object"  (2)

console.log(typeof alert); // "function"  (3)
