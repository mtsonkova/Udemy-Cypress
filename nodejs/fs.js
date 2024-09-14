//fs stands for file system
const fs = require('fs');

//existsSync checks if dir exists
//mkdirSync create dir
//rmdirSync deletes dir
//readdirSync reads directory

let result = fs.existsSync(`${process.cwd()}/data/data.json`); // checks if file exists in the given directory;
console.log(result);

let result2 = result = fs.existsSync(`${process.cwd()}/data/testData`);
if (result2) {
    fs.rmdirSync(`${process.cwd()}/data/testData`);
}
else {
    fs.mkdirSync(`${process.cwd()}/data/testData`);
}

console.log(fs.readdirSync(`${process.cwd()}/data`));

//File operations
//readFileSync -> reads a file

console.log(fs.readFileSync(`${process.cwd()}/data/data.json`, "utf-8"));

//writeFileSync -> writes on a file
let text = `{
"courses" \: ["javaScript", "WebDevelopment", "API Testing"], \n "firstName"\: "Kelly"
}`
fs.writeFileSync(`${process.cwd()}/data/data.json`, text);

//unlinkSync -> deletes a file
//fs.unlinkSync(`${process.cwd()}/data/data.json`);


//To write console output result in a file you use the node command followed by full path to the file and file name, then you add > and write file name where you want to save the result. example: node ./nodejs/fs.js > result.js