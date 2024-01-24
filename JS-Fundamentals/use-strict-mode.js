// The modern mode, "use strict"

// JavaScript's evolution was initially marked by seamless compatibility, with new features introduced without altering existing functionality. However, this approach led to the persistence of mistakes and suboptimal decisions in the language. In 2009, ECMAScript 5 (ES5) brought a shift. It not only introduced new features but also modified existing ones. To maintain backward compatibility, most modifications were set to off by default. Developers had to explicitly enable them using the "use strict" directive. This marked a crucial turning point in JavaScript's development, balancing innovation with the need for code stability.

"use strict";

// this code works the modern way

function myFunc(a, b, c) {
  return a + b + c;
}

myFunc(1, 2, 3);

// Should we “use strict”? The question may sound obvious, but it’s not so. One could recommend to start scripts with "use strict"… But you know what’s cool? Modern JavaScript supports “classes” and “modules” – advanced language structures (we’ll surely get to them), that enable use strict automatically. So we don’t need to add the "use strict" directive, if we use them. So, for now "use strict"; is a welcome guest at the top of your scripts. Later, when your code is all in classes and modules, you may omit it. As of now, we’ve got to know about use strict in general.

names = "Tokhir";
console.log(names); //ReferenceError: names is not defined, because it was in use strict.
