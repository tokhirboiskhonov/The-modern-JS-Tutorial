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

//* Assignment

// Let's note that an assignment = is also an operator.It is listed in the precedence table with the very low priority of 2. That’s why, when we assign a variable, like x = 2 * 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x.

let numX = 2 * 2 + 1;
alert(numX);

//? Assignment = returns value

// The fact of = being an operator, not a “magical” language construct has an interesting implication.

// All operators in JavaScript return a value. That’s obvious for + and -, but also true for =.

// The call x = value writes the value into x and then returns it.

// Here’s a demo that uses an assignment as part of a more complex expression:

// let a = 1;
// let b = 2;
// let c = 3 - (a = b + 1);
// console.log(c); // 0
// console.log(a); // 3
// console.log(b); // 2

//* Chaining assignments

// Another interesting feature is the ability to chain assignments:

// let a, b, c;

// a = b = c = 2 + 2;
// console.log(a);
// console.log(b);
// console.log(c);

// Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated and then assigned to the variables on the left: c, b and a. At the end, all the variables share a single value.

// Once again, for the purposes of readability it’s better to split such code into few lines:

// c = 2 + 2;
// b = c;
// a = c;

// That’s easier to read, especially when eye-scanning the code fast.

//* Modify-in-place

// We often need to apply an operator to a variable and store the new result in that same variable.

// let n = 2;

// n = n + 5;

// n = n * 2;

// console.log(n);

//! This notation can be shortened using the operators += and *=:

// let n = 2;
// n += 5; // now n = 7 (same as n = n + 5)
// n *= 2; // now n = 14 (same as n = n * 2)

// console.log(n); // 14

//! Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.

// Such operators have the same precedence as a normal assignment, so they run after most other calculations:

let n = 2;

n *= 3 + 5; // right part evaluated first, same as n *= 8

alert(n); // 16

//* Increment/decrement

// Increasing or decreasing a number by one is among the most common numerical operations.
// So, there are special operators for it:

//! Increment ++ increases a variable by 1:

let counter = 2;

counter++;

console.log(counter);

//! Decrement -- increases a variable by 1:

let count = 2;
count--;
console.log(count);

//!!!!! Important:

//? Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.

// The operators ++ and -- can be placed either before or after a variable.
// When the operator goes after the variable, it is in “postfix form”: counter++.
// The “prefix form” is when the operator goes before the variable: ++counter.

//?1
let counter1 = 1;

let counter1Num = ++counter1;

console.log(counter1Num); // 2

//?2

let counter2 = 1;
let counterNum = counter2++;
console.log(counterNum); // 1

//! Increment/decrement among other operators

let num = 1;

// console.log(2 * ++num); // 4

console.log(2 * num++); // 2

//* Bitwise operators

// Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

// These operators are not JavaScript-specific. They are supported in most programming languages.

// The list of operators:

//? AND ( & )
//? OR ( | )
//? XOR ( ^ )
//? NOT ( ~ )
//? LEFT SHIFT ( << )
//? RIGHT SHIFT ( >> )
//? ZERO-FILL RIGHT SHIFT ( >>> )

// These operators are used very rarely, when we need to fiddle with numbers on the very lowest (bitwise) level. We won’t need these operators any time soon, as web development has little use of them, but in some special areas, such as cryptography, they are useful. You can read the Bitwise Operators chapter on MDN when a need arises.

//* Comma

// The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.

// The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.

// For example:

let a = (1 + 2, 3 + 4);

alert(a); // 7 (the result of 3 + 4)

// Here, the first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as the result.

//! Comma has a very low precedence
//! Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above.

//? Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, then the assignment operator = assigns a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.

