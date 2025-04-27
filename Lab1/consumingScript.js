// console.log(value1); // value1 is not defined
// console.log(value2); // Script is Stop in Last Error Value1    
// console.log(value3);

console.log("Call From consumingScript.js", printVariables(1,2,3)); 
// Print array  [1, 2, 3]


console.log("Call With less 3 parameters", printVariables(3,5)); 
// Print [3, 5, undefined]
// to Solve Give The Third Parameter Defualt Value

console.log("Call With More 3 parameters", printVariables(1,2,3,4)); 
// Print array  [1, 2, 3] Ignore The الزيادة


// console.log(localVar); 
// localVar is not defined
// console.log(testingVar); 
// The Script is Stop because the error localVar 
// but Expected the same error testingVar is not defined

printVariables(1,2,3);
// console.log(localVar); 
// localVar is not defined also because var function Scope
console.log(testingVar); 
// priint value 5 After Call Beacuse is Global


//==================================================================

console.log(summation(2)); 
// print NaN because 2 + undefined

console.log(summation("badawy","abdelrahman"))
// concate vaules

console.log(summationImproved(5,"abdelrahman"))
// Solve Problem iS Done

