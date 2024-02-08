// a way to group code together so it cn be ran at any time or specific time 

function sayHello() {
    console.log('Hello World');
}

sayHello(); // invoking or calling a function

function add(num1, num2) {
    console.log(num1 + num2);
} // defining or declaring a function 

add(5, 10);
// the parameters are (num1, num2)


// most functions are returning a value because we want to do something with that value 

function subtract(num1, num2) {
    return num1 - num2;
}

subtract(10, 2);

const result = subtract(10, 2);

console.log(result);  // 8