// Nested functions relate to closes 

function first() {
    const x = 100;

    function second() {
        const y = 200;
        console.log(x + y);
    }

    second();
}

first();

if(true) {
    const x = 100;

    if(x === 100) {
        const y = 200;
        console.log(x + y);
    }
}

// in these nesting rules the child can access the parents variable values but the parent can't access the child
// meaning the second if statement can access const x but the first if statement can't access const y