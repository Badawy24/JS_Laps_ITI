printVariables(1,2,3); 
// Dosn't Give Error because of Hoisting Function

function printVariables(value1,value2,value3=0){
    var localVar = 3; 
    testingVar = 5;

    // Using arguments to print All Parameters Which Send 
    console.log(" print them using (arguments)",arguments);

    return [value1,value2,value3];
}

let expressionFunction = function(value1, value2, value3) {
    return [value1, value2, value3];
}

function summation(num1=0,num2=0){
    return num1 + num2;
}

//Solve Problem in summation() Function

function summationImproved(num1=0,num2=0){
    if(typeof(num1)==="number" && typeof(num2)==="number"){
        return num1 + num2;
    }else{
        return "You Must Enter Numeric Data";
    }
}