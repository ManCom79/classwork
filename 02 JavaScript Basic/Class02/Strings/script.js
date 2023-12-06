console.log("Hello" + " " + "SEDC!");
console.log("Hello " + "SEDC!");

//String interpolation
let firstName = "John";
console.log(`Hello ${firstName}!`);

// alert(`Hello ${firstName}`);

let first = 10;
let second = "5";
console.log("Conversion from number to string");
let sumResult = first + second;
console.log(first + second);
console.log("The type is:", typeof sumResult);

//Using single and double quotes
let quote = "It's really nice to be a programmer.";
console.log(quote);
// let quote = 'It's really nice to be a programmer.'; Cannot use

let newQuote = "It's really nice to be a programmer"; // 'It\'s really nice to be a programmer'
console.log(newQuote);

let guestMessage = 'The guest said "HELLO" to all of us.'; // "The guest said \"HELLO\" to all of us."
