console.log(addDollarSign(100)); // hoisting allows this to be called before the function declaration and it still work
// declarations are available before the code is executed, expressions cannot do this  
// Function Declaration, below is an example of a function declaration 

function addDollarSign(value) {
    return '$' + value;
}


// Function Expression, below is an example of function expression
const addPlusSign = function (value) {
    return '+' + value;
};

console.log(addPlusSign(200));