const x = 100;


function run() {
    console.log(window.innerHeight);
}

run()

function add() {
    const x = 25;
    const y = 50;
    console.log(x + y); // this is called variable shadowing, the function is only focused on what's inside and not the global x which is above
}

add();