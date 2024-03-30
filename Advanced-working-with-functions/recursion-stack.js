//* Recursion and stack

// Let’s return to functions and study them more in-depth.

// Our first topic will be recursion.

// If you are not new to programming, then it is probably familiar and you could skip this chapter.

// Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can be simplified into an easy action plus a simpler variant of the same task. Or, as we’ll see soon, to deal with certain data structures.

// When a function solves a task, in the process it can call many other functions. A partial case of this is when a function calls itself. That’s called recursion.

//* Two ways of thinking

// For something simple to start with – let’s write a function pow(x, n) that raises x to a natural power of n. In other words, multiplies x by itself n times.

//? pow(2, 2) = 4
//? pow(2, 3) = 8
//? pow(2, 4) = 16

// There are two ways to implement it.

//! 1. Iterative thinking: the for loop:

function pow(x, n) {
  let result = 1;

  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

alert(pow(2, 3)); // 8

//! 2. Recursive thinking: simplify the task and call self:

function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert(pow(2, 3)); // 8

// Please note how the recursive variant is fundamentally different.

// When pow(x, n) is called, the execution splits into two branches:

//   if n==1  = x
//  /
// pow(x, n) =
//  \
//   else     = x * pow(x, n - 1)

// 1. If n == 1, then everything is trivial. It is called the base of recursion, because it immediately produces the obvious result: pow(x, 1) equals x.
// 2. Otherwise, we can represent pow(x, n) as x * pow(x, n - 1). In maths, one would write xn = x * xn-1. This is called a recursive step: we transform the task into a simpler action (multiplication by x) and a simpler call of the same task (pow with lower n). Next steps simplify it further and further until n reaches 1.
// We can also say that pow recursively calls itself till n == 1.
// For example, to calculate pow(2, 4) the recursive variant does these steps:

//? pow(2, 4) = 2 * pow(2, 3)
//? pow(2, 3) = 2 * pow(2, 2)
//? pow(2, 2) = 2 * pow(2, 1)
//? pow(2, 1) = 2

// So, the recursion reduces a function call to a simpler one, and then – to even more simpler, and so on, until the result becomes obvious.

//! Recursion is usually shorter

// A recursive solution is usually shorter than an iterative one.

// Here we can rewrite the same using the conditional operator ? instead of if to make pow(x, n) more terse and still very readable:

// function pow(x, n) {
//   return n == 1 ? x : x * pow(x, n - 1);
// }

// The maximal number of nested calls (including the first one) is called recursion depth. In our case, it will be exactly n.

// The maximal recursion depth is limited by JavaScript engine. We can rely on it being 10000, some engines allow more, but 100000 is probably out of limit for the majority of them. There are automatic optimizations that help alleviate this (“tail calls optimizations”), but they are not yet supported everywhere and work only in simple cases.

// That limits the application of recursion, but it still remains very wide. There are many tasks where recursive way of thinking gives simpler code, easier to maintain.

//* The execution context and stack

// Now let’s examine how recursive calls work. For that we’ll look under the hood of functions.

// The information about the process of execution of a running function is stored in its execution context.

// The execution context is an internal data structure that contains details about the execution of a function: where the control flow is now, the current variables, the value of this (we don’t use it here) and few other internal details.

// One function call has exactly one execution context associated with it.

// When a function makes a nested call, the following happens:

//? The current function is paused.
//? The execution context associated with it is remembered in a special data structure called execution context stack.
//? The nested call executes.
//? After it ends, the old execution context is retrieved from the stack, and the outer function is resumed from where it stopped.

// Let’s see what happens during the pow(2, 3) call.

