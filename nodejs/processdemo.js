const process = require('process');

//.env file -> file where you store all secret info like user name, password, authentication key
//.env file can be accessed with proces.env module

//process.cwd();

console.log(process.cwd()); //where the node command is passed, represent the root folder
console.log(__dirname); // this will show the path to where the file is currently located

//get correct filepath
let path = process.cwd() + '/data/data.json';
console.log(path);