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

