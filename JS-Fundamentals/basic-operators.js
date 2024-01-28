//! Basic operators, maths

//* Terms: 'unary', 'binary', 'operand'

// Before we move on, let's grasp some common technology.

//? An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

//? An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:

let x1 = 1;

x1 = -x1;
alert(x1); // -1, unary negation was applied

//? An operator is binary if it has two operands. The same minus exists in binary form as well:

let x2 = 1,
  y = 3;
alert(y - x2); // 2, binary minus subtracts values

//! Formally, in the examples above we have two different operators that share the same symbol: the negation operator, a unary operator that reverses the sign, and the subtraction operator, a binary operator that subtracts one number from another.

//* Math

// The following math operations are supported:

//? Addition +
//? Subtraction -
//? Multiplication *
//? Division /
//? Remainder %
//? Exponentiation **

// The first four are straightforward, while % and ** need a few words about them.

//* Remainder %

// The remainder operator %, despite its appearance, is not related to percents.

// The result of a % b is the remainder of the integer division of a by b

console.log(5 % 2); // 1, the remainder of 5 divided by 2
console.log(8 % 3); // 2, the remainder of 8 divided by 3
console.log(8 % 4); // 0, the remainder of 8 divided by 4

//* Exponentiation **

// The exponentiation operator a ** b raises a to the power of b.

// For instance:

alert(2 ** 2); // 2² = 4
alert(2 ** 3); // 2³ = 8
alert(2 ** 4); // 2⁴ = 16

// Just like in maths, the exponentiation operator is defined for non-integer numbers as well.

// For example, a square root is an exponentiation by ½:

alert(4 ** (1 / 2)); // 2 (power of 1/2 is the same as a square root)
alert(8 ** (1 / 3)); // 2 (power of 1/3 is the same as a cubic root)

//* String concatenation with binary +

// Let’s meet the features of JavaScript oper`ators that are beyond school arithmetics.

// Usually, the plus operator + sums numbe`rs.

// But, if the binary + is applied to strings, it merges (concatenates) them`:

let s = "my" + "String";
console.log(s);

// Note that if any of the operands is a string, then the other one is converted to a string too.

// For example:

alert("1" + 2); // "12"
alert(2 + "1"); // "21"

// See, it doesn’t matter whether the first operand is a string or the second one. Here’s a more complex example:

alert(2 + 2 + "1"); // "41" and not "221"

// Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.

alert("1" + 2 + 2); // "122" and not "14"

// Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

// The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

// Here’s the demo for subtraction and division:

alert(6 - "2"); // 4, converts '2' to a number
alert("6" / "2"); // 3, converts both operands to numbers

//* Numeric conversion, unary +

// The plus + exists in two forms: the binary form that we used above and the unary form.

// The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

// For example:

// No effect on numbers
let x = 1;
alert(+x); // 1

let y1 = -2;
alert(+y1); // -2

// Converts non-numbers
alert(+true); // 1
alert(+""); // 0

// It actually does the same thing as Number(...), but is shorter.

let apples = "2";
let oranges = "3";

console.log(apples + oranges); // "23"

// both values converted to numbers before the binary plus
console.log(+apples + +oranges); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

// From a mathematician’s standpoint, the abundance of pluses may seem strange. But from a programmer’s standpoint, there’s nothing special: unary pluses are applied first, they convert strings to numbers, and then the binary plus sums them up.

// Why are unary pluses applied to values before the binary ones? As we’re going to see, that’s because of their higher precedence.

//! Operator precedence

// Go to HTML file