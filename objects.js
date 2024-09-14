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

