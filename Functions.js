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