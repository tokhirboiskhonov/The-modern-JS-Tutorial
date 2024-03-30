//* Rest parameters and spread syntax

// Many JavaScript built-in functions support an arbitrary number of arguments.

// For instance:

//? Math.max(arg1, arg2, ..., argN) – returns the greatest of the arguments.
//? Object.assign(dest, src1, ..., srcN) – copies properties from src1..N into dest.
//? …and so on.

// In this chapter we’ll learn how to do the same. And also, how to pass arrays to such functions as parameters.

//* Rest parameters ...

// A function can be called with any number of arguments, no matter how it is defined.

// Like here:

function sum(a, b) {
  return a + b;
}

alert(sum(1, 2, 3, 4, 5));

// There will be no error because of “excessive” arguments. But of course in the result only the first two will be counted, so the result in the code above is 3.

// The rest of the parameters can be included in the function definition by using three dots ... followed by the name of the array that will contain them. The dots literally mean “gather the remaining parameters into an array”.

// For instance, to gather all arguments into array args:

function sumAll(...args) {
  // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert(sumAll(1)); // 1
alert(sumAll(1, 2)); // 3
alert(sumAll(1, 2, 3)); // 6

// We can choose to get the first parameters as variables, and gather only the rest.

// Here the first two arguments go into variables and the rest go into titles array:

function showName(firstName, lastName, ...titles) {
  alert(firstName + " " + lastName); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  alert(titles[0]); // Consul
  alert(titles[1]); // Imperator
  alert(titles.length); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");

//! The rest parameters must be at the end

// The rest parameters gather all remaining arguments, so the following does not make sense and causes an error:

// function f(arg1, ...rest, arg2) { // arg2 after ...rest ?!
// error
// }
// The ...rest must always be last.
