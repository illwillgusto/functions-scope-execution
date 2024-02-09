// function add(a,b) {
//     return a + b;
// }

// Arrow Function, '=>' is called a fat arrow, regular arrow function syntax
const add = (a, b) => {
    return a + b;
}

// Implicit Return
const subtr = (a, b) => a - b;

// Can leave off () with a single param
const double = a => a * 2;

// Returning an object
const createObj = () => ({
    name: 'Will'
})

const numbers = [1,2,3,4,5];

numbers.forEach(function (n) {
    console.log(n);
})

// Arrow function in a callback, a callback is passing a function into another function like seen below
numbers.forEach((n) => console.log(n));

console.log(add(1,2));
console.log(add(1,2));
console.log(double(10));

console.log(createObj());