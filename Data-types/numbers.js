//* Numbers

// In modern JavaScript, there are two types of numbers:

//? 1. Regular numbers in JavaScript are stored in 64-bit format IEEE-754, also known as “double precision floating point numbers”. These are numbers that we’re using most of the time, and we’ll talk about them in this chapter.

//? 2. BigInt numbers represent integers of arbitrary length. They are sometimes needed because a regular integer number can’t safely exceed (253-1) or be less than -(253-1), as we mentioned earlier in the chapter Data types. As bigints are used in few special areas, we devote them a special chapter BigInt.

// So here we’ll talk about regular numbers. Let’s expand our knowledge of them.

//* More ways to write a number

// Imagine we need to write 1 billion. The obvious way is:

let billion = 1000000000;

// We also can use underscore _ as the separator:

let billion_1 = 1_000_000_000;

// Here the underscore _ plays the role of the “syntactic sugar”, it makes the number more readable. The JavaScript engine simply ignores _ between digits, so it’s exactly the same one billion as above.

// In real life though, we try to avoid writing long sequences of zeroes. We’re too lazy for that. We’ll try to write something like "1bn" for a billion or "7.3bn" for 7 billion 300 million. The same is true for most large numbers.

//? In JavaScript, we can shorten a number by appending the letter "e" to it and specifying the zeroes count:

let billion_e = 1e9; // 1 billion, literally: 1 and 9 zeroes

alert(7.3e9); // 7.3 billions (same as 7300000000 or 7_300_000_000)

//? In other words, e multiplies the number by 1 with the given zeroes count.

1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000

// Now let’s write something very small. Say, 1 microsecond (one millionth of a second):

let mсs = 0.000001;

// Just like before, using "e" can help. If we’d like to avoid writing the zeroes explicitly, we could write the same as:

let mcs = 1e-6; // five zeroes to the left from 1

// If we count the zeroes in 0.000001, there are 6 of them. So naturally it’s 1e-6.

//? In other words, a negative number after "e" means a division by 1 with the given number of zeroes:

// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times

//* Hex, binary and octal numbers

// Hexadecimal numbers are widely used in JavaScript to represent colors, encode characters, and for many other things. So naturally, there exists a shorter way to write them: 0x and then the number.

// For instance:

alert(0xff); // 255
alert(0xff); // 255 (the same, case doesn't matter)

// Binary and octal numeral systems are rarely used, but also supported using the 0b and 0o prefixes:

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert(a == b); // true, the same number 255 at both sides

// There are only 3 numeral systems with such support. For other numeral systems, we should use the function parseInt (which we will see later in this chapter).

//* toString(base)

// The method num.toString(base) returns a string representation of num in the numeral system with the given base.

//For example:

let num = 255;

console.log(num.toString(16)); // ff
console.log(num.toString(2)); // 11111111

// The base can vary from 2 to 36. By default it’s 10.

// Common use cases for this are:

// 1. base=16 is used for hex colors, character encodings etc, digits can be 0..9 or A..F.

// 2. base=2 is mostly for debugging bitwise operations, digits can be 0 or 1.

// 3. base=36 is the maximum, digits can be 0..9 or A..Z. The whole latin alphabet is used to represent a number. A funny, but useful case for 36 is when we need to turn a long numeric identifier into something shorter, for example to make a short url. Can simply represent it in the numeral system with base 36:

console.log((123456).toString(36)); // 2n9c

//! Two dots to call a method

// Please note that two dots in 123456..toString(36) is not a typo. If we want to call a method directly on a number, like toString in the example above, then we need to place two dots .. after it.

// If we placed a single dot: 123456.toString(36), then there would be an error, because JavaScript syntax implies the decimal part after the first dot. And if we place one more dot, then JavaScript knows that the decimal part is empty and now goes the method.

// Also could write (123456).toString(36).

//* Rounding

// One of the most used operations when working with numbers is rounding.

// There are several built-in functions for rounding:

//! Math.floor

// Rounds down: 3.1 becomes 3, and -1.1 becomes -2.

console.log(Math.floor(3.1)); // output is 3

//! Math.ceil

// Rounds up: 3.1 becomes 4, and -1.1 becomes -1.

console.log(Math.ceil(3.1)); // output is 4

//! Math.round

// Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.

console.log(Math.round(3.3));
console.log(Math.round(3.5));

//! Math.trunc (not supported by Internet Explorer)

// Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.

console.log(Math.trunc(3.9)); // output is 3

//! These functions cover all of the possible ways to deal with the decimal part of a number. But what if we’d like to round the number to n-th digit after the decimal?

// For instance, we have 1.2345 and want to round it to 2 digits, getting only 1.23.

// There are two ways to do so:

//? 1. Multiply-and-divide.

// For example, to round the number to the 2nd digit after the decimal, we can multiply the number by 100, call the rounding function and then divide it back.

let num1 = 1.23456;

alert(Math.round(num1 * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23

//? 2. The method toFixed(n) rounds the number to n digits after the point and returns a string representation of the result.

let num2 = 12.34;
alert(num2.toFixed(1)); // "12.3"

// This rounds up or down to the nearest value, similar to Math.round:

let num3 = 12.36;
alert(num3.toFixed(1)); // "12.4"

// Please note that the result of toFixed is a string. If the decimal part is shorter than required, zeroes are appended to the end:

let num4 = 12.34;
alert(num4.toFixed(5)); // "12.34000", added zeroes to make exactly 5 digits

// We can convert it to a number using the unary plus or a Number() call, e.g write +num.toFixed(5).

