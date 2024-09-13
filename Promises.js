// Promise is an object. It takes a callback function with 2 parameters -> resolve and reject 
// pending, fulfilled, rejected states

let promiseObj = new Promise((resolve, reject) => {
    console.log(`Executing the promise...`);

    if(1 < 2) {
        setTimeout(() => {
            resolve('Promise is resolved successfully...');
        }, 2000);
    } else {
        reject('Promise rejected due to an error');
    }  
})

// consume the promise

promiseObj.then((resolve) => {
    console.log(resolve);
}).catch((err) => {
    console.log(err);
});


async function getData() {
    try{
    let result = await promiseObj;
    console.log(result);
    } catch(error) {
        console.log(error);
    }
}

getData();