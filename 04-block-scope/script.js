const x = 100;
const foo = 1;
var bar = 2; // this will be added to the window object, const doesn't get added 

if (true) {
    const y = 200;
    console.log(x + y);
}

// Loop example

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

if(true) {
    const a = 500;
    let b = 600;
    var c = 700;
}

// var is not block scope, meaning you can console.log outside of the if statement and you will get the value of the key 
// that's not what you want, you want your variables to be block scope 
//  var is function scoped 

function run() {
    var d = 100;
}

// console.log(var); this would through a error though