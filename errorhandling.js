//Error => base error
//RefferenceError
//SyntaxError
//TypeError

try{
    console.log(abc);
} catch(error) {
    let customErr = `ReferenceError: variable is not defined`;
    throw customErr;
}