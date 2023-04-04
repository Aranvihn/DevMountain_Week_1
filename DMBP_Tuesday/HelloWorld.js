console.log("Hello world!");

const firstName = "Aranvihn";
let age = 31;

console.log(`${firstName} is ${age}-years-old.`);

const isCool = false;
if (isCool === false) console.log(`${firstName} is not cool...`)
else console.log(`${firstName} is cool.`)

let x = 4;
let y = 10;
let z = 7 + 8;
let sum = x + y + z;

console.log(sum);
console.log(sum + y);
console.log(sum - z + sum + y);

let str = "String";
let str2 = 'String';
let str3 = `String ${str} ${str2}`;
let str4 = "String " + "String " + str3;

let quote = 'This is how you use "quotes" in a string variable.'

console.log(str3 + "\n");
console.log(str4 + "\n");
console.log(quote + "\n");

let away = 102;
let home = 115;

if (home > away) console.log(`The home team wins with a score of ${home}!\n`);
else if (home < away) console.log(`The away team wins with a score of ${away}!\n`);
else console.log(`It is a tie game with a score of ${home} for both!\n`);

age = 10;
let age2 = 20;
let age3 = 21;

if (age >= age2) console.log(age);
if (age === age3) console.log("They're the same age");
if (age !== age2) console.log("It's not the same");