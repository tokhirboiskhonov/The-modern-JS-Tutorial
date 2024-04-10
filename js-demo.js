//* Function/variable(binding) declaration, initialization, assignment, reassignment

function f() {
  {
    let a = 1;
    var b = 2;
  }

  //   console.log(a); // Reference error, because of scope
  console.log(b);
}

f();

// const a = 1; //Initilizate // nearest block scope;

// let b; //nearest block scope; //Initilizate //! if we don't give the value, it will be automatically undefined

// b = 2; //assign
// b = 3; //reassign

// var c = 4; // nearest function scope;

//? Identifier: binding, property
// Identifier means name of binding or property

let d = 1;
let $ = 2;
let _ = 3;

//? Statement and expression

console.log(1); // statement

let a = 1;
if (a == 1) {
  //condition is equal true
  console.log("Alright"); // output is Alright
}

var num1 = 1;
let num2 = 2;
const num3 = 3;
// console.log(num3); // right hand side

function fNum() {
  if (1) {
    num2 = 5;
    console.log(num2);
  }
}

fNum();

//*  ========================================================================================================================================================================

//* Operators and operands
//* Unary, binary, ternary
//* Conversion and coersion

// +operand = operand * (+1)
console.log(+"1"); // 1
console.log(typeof +"1"); // number
// -operand = operand * (-1)
console.log(-"1"); // -1
console.log(typeof -"1"); // number
// ++operand = increment then evaluate
let i = 1;
console.log(++i); // 2
// --operand = decrement then evaluate
let j = 1;
console.log(--j); // 0
// operand++ = evaluate then increment
let k = 1;
console.log(k++); // 1
console.log(k); // 2
// operand-- = evaluate then decrement
let n = 1;
console.log(n--); // 1
console.log(n); // 0

// ++ and -- operands only work with variable, we can't use straightly with value, For instance: you can write variable++ or variable-- to increment or decrement the value of variable by 1, but you cannot write 5++ or 10-- directly.
// console.log(10++); // SyntaxError: Invalid left-hand side expression in postfix operation

//! Math

// operand1 + operand2
console.log(1 + 2); // 3
// operand1 - operand2
console.log(3 - 1); // 2
// operand1 * operand2
console.log(5 * 3); // 15
// operand1 / operand2
console.log(6 / 3); // 2
// operand1 % operand2
console.log(8 % 3); // 2
console.log(9 % 4); // 1
console.log(10 % 3); // 1
// operand1 ** operand2
console.log(8 ** 3); // 512 // 8 ni 3chi darajasi

//! String

// operand1 + operand2 =  concatenate strings
console.log("abc" + "efg"); // abcefg
console.log("1" + 1); // 11, typeof is a string

//! Boolean
//. !operand = logical not, negation
console.log(!1); // false number convert  to boolean automatically, it means coersion.
console.log(!!1); // true
console.log(!"abc"); // false
console.log(!!"abc"); // true
console.log(Boolean(0)); // false
console.log(!0); // true
console.log(!NaN); // true
console.log(!!NaN); // false

//! Ternary
console.log(1 === 1 ? "YES" : "NO"); // YES, because of condition is true
console.log(1 === 10 ? "YES" : "NO"); // NO, because of condition is false

//! instanceof

console.log({} instanceof Object); // true
console.log([] instanceof Object); // true
console.log(function () {} instanceof Object); // true
console.log([] instanceof Array); // true
console.log("smth" instanceof Object); // false

//! typeof
console.log(typeof undefined); // undefined
console.log(typeof 1); // number
console.log(typeof "abc"); // string
console.log(typeof ""); // string
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof 123n); // bigint
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function () {}); // function
console.log(typeof Symbol()); // symbol

// typeof always returns string, for example:
console.log(typeof typeof 1); // string

//! delete
const user = {
  name: "John",
  surname: "Smith",
  job: "Doctor",
};

delete user.job;

console.log(user); // { name: 'John', surname: 'Smith' }

