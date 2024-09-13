//string comparison

let town = 'Madrid';

// Full match
if(town.toLocaleLowerCase().trim() === 'Madrid') {
    console.log('the town name matches');
}

//Partial match

let text = 'Lorem ipsum dolor sit amet';

if(text.includes('ipsum')) {
    console.log('Text has partial match');
} else {
    console.log('Text does not match');
}

//starts with

if(text.startsWith('Lorem')) {
    console.log('Text has partial match');
} else {
    console.log('Text does not match');
}

//ends with

if(text.endsWith('amet')) {
    console.log('Text has partial match');
} else {
    console.log('Text does not match');
}


// Extract substring 
//substring method
let substr = text.substring(0, 5); // last index is excluded
console.log(substr);

// slice method
let slicedStr = text.slice(0, 13); // last index is excluded
console.log(slicedStr);

//replace all
let replacedString = text.replaceAll('o', '&');
console.log(replacedString);