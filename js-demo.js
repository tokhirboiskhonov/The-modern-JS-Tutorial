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

//! void always returns undfined

console.log(void (1 + 1)); // undefined
console.log(void 1); // undefined

//*  ========================================================================================================================================================================

//Functions

//1. Function declaration

function funcDec(param1, param2) {
  console.log("Function declaration"); // it works, then output is Function declaration
  console.log(`${param1 + param2}`); // 100
}

// funcDec();
funcDec(10, 90);

// fD(); // Demakki, function declaration hoist bo'lgan payit u faqatgina declaration (ya'ni e'lon qilinishi) o'zi emas, balki qiymati blan birga hoist bo'ladi.

fD(); // output: fD2 // When you create a function declaration so that you can overwrite it with the same name of the function, it will not produce an error.

function fD() {
  console.log("fD1");
}

function fD() {
  console.log("fD2");
}

//2. Function expression

// g(); // ReferenceError: Cannot access 'g' before initialization

const g = function f() {
  console.log("f");
};

g();

const e = function () {
  console.log("eLog");
};

console.log(e.name); // e

console.log(function () {}.name); // no output, empty

//3. Arrow function expression
// funcArrow(); // ReferenceError: Cannot access 'funcArrow' before initialization

const funcArrow = (param1, param2) => console.log("It's Arrow function");
funcArrow(); // It's Arrow function
console.log(funcArrow.name); //output: funcArrow. (Function.name property)

//4. Parameters: default values, rest

const paramFunc = (param1 = 1, param2, ...rest) => {
  console.log(`${param1}, ${param2}`);
  console.log(rest);
};

paramFunc(
  "Hello",
  "How are you doing?",
  "What's up?",
  "What are you doing man?"
);

//5. Function calling and arguments
// function call, method call, constructor call

function fa() {
  console.log("1");
}

const obj = {
  b: fa,
};

let obj1 = new obj.b();
// console.log(obj.b());
console.log(obj1);

//6. Function scope

function fff() {
  // scope
  console.log("Smth");
}

//7. Calling context and overriding it
// this keyword is implicit
// explicit

// call, apply, bind

function fiftilion(p1, p2) {
  //   console.log(this);
  console.log(p1 + p2);
}

fiftilion(1, 2);

const aObj = {
  b: fiftilion,
};

console.log(aObj.b(1, 2));

function Car(type, fuelType) {
  this.type = type;
  this.fuelType = fuelType;
}

function setBrand(brand) {
  Car.call(this, "convertible", "petrol");
  this.brand = brand;
  //   console.log(`Car details = `, this);
}

const newBrand = new setBrand("Merc");
console.log(newBrand.type);

//8. Closure = a function with it's environment

function func1(p1) {
  // scope of func1
  return function func2(p2) {
    // scope of func2
    return function func3(p3) {
      //scope of func3
      return p1 + p2 + p3;
    };
  };
}

console.log(func1(1)(2)(3));

function fn1(p1) {
  return function fn2(p2) {
    p1 = p1 + 1;
    return p1;
  };
}

const count = fn1(0);

console.log(count());
console.log(count());
console.log(count());
console.log(count());

// Examples from a book

// FD

function printProps(o) {
  for (let p in o) {
    console.log(`${p}: ${o[p]}\n`);
  }
}

printProps("Tokhirkhuja");
// printProps("Boiskhonov");
// printProps("FrontendDeveloper");

function hypotenuse(a, b) {
  function square(x) {
    return x * x;
  }

  return Math.sqrt(square(a) + square(b));
}

console.log(hypotenuse(5, 10));

let scope = "Global scope";

function checkScope() {
  let scope = "Local scope";
  function f() {
    return scope;
  }
  return f;
}

let s = checkScope()();
console.log(s);
