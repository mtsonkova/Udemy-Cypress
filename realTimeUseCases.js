// callback is used to receive processed value from async function

const fetchUrl = require("fetch").fetchUrl;

const url = "https://api.github.com/users/github"

/*
fetchUrl(url, function(err, meta, body) {
    console.log(body.toString());

})
    */


function getAPIResponse() {
    fetchUrl(url, function (err, meta, body) {
        console.log(body.toString());

    })
}

getAPIResponse();


// PROMISES

const fetch = require('node-fetch');

function getAPIResponseWithPromise() {
     fetch(url)
     .then((response) => {
        return response.json();
     }).then((updatedResponse) => {
        console.log(`second response from chained promise`);
     })
     .catch((error) => {
        console.log(error);
     })
}

getAPIResponseWithPromise();


//ASYNC Await

async function getAPIPromiseWithAsyncFunction() {
    const response = await fetch(url);
    const data = await response.json();
    console.log("======");
    console.log(data);
}

getAPIPromiseWithAsyncFunction();


// Function as an object
function addTwoNum(num1, num2) {
    return num1 + num2;
}
console.log(addTwoNum.length); // returns the number of arguments the function can accept
console.log(addTwoNum.toString()); // displays function implementation so you can see the source code of the function 