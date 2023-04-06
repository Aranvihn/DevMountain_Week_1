// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:

let lowest = 0;
let highest = 0;
for (let i = 0; i < array.length; i++){
    if (array[i] < lowest) lowest = array[i];
    if (array[i] > highest) highest = array[i];
}
console.log(`Lowest value is ${lowest}.`);
console.log(`Highest value is ${highest}.`);

