// Default Params (user = 'Bot')

function registerUser(user = 'Bot') {
    return user + ' is registered';
}

console.log(registerUser('Will'));
console.log(registerUser());

// Rest Params, this will put the values in an Array, unlimited number of arguments that will get put into an Array

function sum(...numbers) {
    return numbers;
}

console.log(sum(1,2,3,4));

// Objects as params
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
    id: 1,
    name: 'Will',
};

console.log(loginUser(user));
console.log(loginUser({
    id: 2,
    name: 'Tim',
}));

// Arrays as params
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item);
}

getRandom([1,2,3,4,5,6,7,8,10]);

