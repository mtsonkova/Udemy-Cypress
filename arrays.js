let arr = ["1", "24", "45", "67", "32", "64"];

let modifiedArr = arr.map(el => Number(el));

let filteredArr = arr.filter(el => el % 2 == 0)
    .map(el => Number(el));

console.log(arr);
console.log(modifiedArr);
console.log(filteredArr);