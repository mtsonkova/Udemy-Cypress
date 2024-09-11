//8 data types 7 primitive 1 reference
// Primitive data types
// string -> String object is a wrapper around a string primitive
// number
// bigint
// boolean -> this type does not have default value in JS. If you don't declare value it will be undefined
// undefined -> utomatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.

// symbol -> Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique. Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object. That enables a form of weak encapsulation, or a weak form of information hiding.

// null -> when using the typeof operator, it returns "object".


//Reference types 1
// object

let greeting = 'Hi'; // string

//number
let num = 5;
let num2 = 5.673;

//boolean
let bool = true;
let isValid = false;

//undefined
let userInput;

//null
let userData = null;
//null can be used to reset an object. To erase all its content example:

let person = {
    firstName: 'John',
    lastName: 'Dow',
    age: 42
}

console.log(person)

person = null;
console.log('Reset person with null value:' + person);


//typeof operator

typeof person; // first syntax
typeof(person); // second syntax

//difference between literal, variable and expression

console.log('Hello'); //literal
let fullName = 'Jane Dow'; // variable
console.log('Hello' + fullName) //expression