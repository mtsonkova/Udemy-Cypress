//object is mutable
// we use for in to iterate over an object

let testRunner = 'local';
let machineID = 'asdfgrq';
let envFile = 'test_config';

let reportData = {
    testId : 12345,
    status: 'pass',
    'Pass/Fail flag': 'Pass',
    totalTest: 100,
    totalPass: 80,
    inScope: true,
    passrate() {
        return (this.totalPass / this.totalTest) * 100;
    },
    //dynamic properties and values
    runDate: new Date(),
    runner: testRunner,
    macID: machineID ? machineID : 'unknown',
    [envFile]: {
        env:'test',
        url:'https://test.com'
    }
};

console.log(reportData);
console.log(reportData.runDate);
console.log(reportData.macID);
console.log(reportData.envFile);
console.log(reportData.test_config);


console.log(reportData["Pass/Fail flag"]);

// Access object keys
let keys = Object.keys(reportData);

let values = Object.values(reportData);

let entries = Object.entries(reportData);


// Object.entries(reportData).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
//   });  


  // Merge 2 objects

  let person = {
    firstName: 'Simon',
    lastName: 'Hill',
    age: 24
  }

  let student = {
    university: 'SoftUni',
    program: 'Softare engineering',
    facultiNumber: '123432',
    courses: ['Web development', 'JavaScript advanced', 'SQL'],
  }

  //First way with Object.assign

  let trainee = Object.assign(person, student);
  //console.log(trainee);
  
  //Second way with ...rest operator

  let trainee2 = {
    ...person,
    ...student
  } 

  console.log(trainee2);