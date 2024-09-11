let mobileDevices = ['Samsung', 'iPhone', 'Motorola', 'Huawei'];

//print all devices with simple for loop
// simple loop can have break and continue statements

for(let i=0; i< mobileDevices.length; i++) {
    console.log(mobileDevices[i]);
}

console.log('------');

for(let i=0; i< mobileDevices.length; i++) {
    if(mobileDevices[i].length > 6) {
    console.log(mobileDevices[i]);
    }
    else {
        break;
    }
}

console.log('------');

for(let i=0; i< mobileDevices.length; i++) {
    if(mobileDevices[i].length > 6) {
    console.log(mobileDevices[i]);
    }
    else {
        continue;
    }
}

//print all mobiledevices with forEach
console.log|('Print all devices with forEach')
mobileDevices.forEach(device => {
    console.log(`${device} => device name length: ${device.length}`);
});


//for off loop
//used to iterate through array

console.log|('Print all devices with for off')
for(const device of mobileDevices) {
    console.log(`${device} => device name length: ${device.length}`);
};


//for in loop
//used to iterate through object

console.log('Print object properties and their values with for in');

let person = {
    firstName: 'John',
    lastName: 'Dow',
    age: 42
}

for(let property in person) {
    console.log(`${property} -> ${person[property]}`);
}