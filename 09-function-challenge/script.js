//  Challenge 1 

// function getCelsius (f) {
    // const celsius = (f - 32) * 5 / 9;  
    // return celsius;
// }


const getCelsius = (f) => (f - 32) * 5 / 9; // arrow function for the above solution 

console.log(getCelsius(32));

console.log(`The temp is ${getCelsius(50)} \xB0C`);

// alert(`The temp is ${getCelsius(50)} \xB0C`);

// Challenge 2 

function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        min,
        max,
    }

    console.log(min);
    console.log(max);

}

console.log(minMax([1,2,35,4,85]));


// Challenge 3 

((length, width) => {
    const area = length * width;

    const output = `the area of a rectangle with a length of ${length} and a ${width} of 5 is ${area}.`

    console.log(output);
})(20,30); // iffe statement 
