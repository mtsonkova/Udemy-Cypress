// Falsy values 6:

// false
// undefined
// null
// 0
// NaN
// ''  -> empty string


// nulish values:
// undefined
// null

// truethy values
// any other value but false, undefined, null, 0, NaN and '';

let value;

if(value) {
    console.log('conditions met... value is truthy')
} else {
    console.log('falsy value...');
}


// in numerical context undeifned evaluates to NaN
console.log(5 + undefined); // NaN

// in numerical context null evaluates to 0;
console.log(5 + null); // null = 0 here