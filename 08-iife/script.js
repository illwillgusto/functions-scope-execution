// Declare a function and invoke a function at the same time - immediately invoked function expression

// avoid global scope pollution 


(function () {
    const user = 'Tim';
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello();

})() // the syntax for iife a function and object literal inside () then () added to the end 


