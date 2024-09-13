//rest param in functions. Rest param is limitless. It can have n number of parameters

function addNumbers(num1, num2, num3, ...nums) {
    let sum = num1 + num2;
    console.log(arguments.length);
    let sum2 = 0;
    for(let i = 0; i< arguments.length; i++) {
        sum2 += arguments[i];
    }
    console.log(sum2);
    return sum;
} 

addNumbers(2, 4, 5, 2, 0, 12);


// In arrow function context "THIS" will not work
() => {
    console.log('Hi from and arrow function');
} 


//Callback function -> a function passed as an argument to another function

function printMsg(msg) {
    console.log(`Calling the callback funcion...`);
    console.log(msg);
}

function greet(name, greeter) {
console.log(`Calling the main function...`);
let greetMsg = `Hello, ${name}`;
return greeter(greetMsg);
}


let res = greet('Rob', (res) => {
    return `the received value from the main function: ${res}`
});
console.log(res);


// if a function does not return anything you cannot save it in a variable;

// if a callback function uses a return statement, that will be returned to the main function