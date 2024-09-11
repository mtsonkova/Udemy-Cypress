// || or logical operator can be used to asign default value;

let name = arr[0] || 'Jack Brown';

//strict mode is used to 
//1. Prevent any undeclared global variables;
// 2. Use of implementsm let, package, private, protected, public, static and yield as modifiers

"use strict";

// example with yield and generator functions

  //Generator functions
  //JavaScript generators are just ways to make iterators. They use the yield keyword to yield execution control back to the calling function and can then resume execution once the next() function is called again. Once the generator runs out of values to return, it returns a value of undefined, and a done value of true, letting you know that there are no more values.

  //declare generator function function*

  function* foo(index) {
    while (index < 2) {
      yield index;
      index++;
    }
  }
  
  const iterator = foo(0);
  
  console.log(iterator.next().value);
  // Expected output: 0
  
  console.log(iterator.next().value);
  // Expected output: 1