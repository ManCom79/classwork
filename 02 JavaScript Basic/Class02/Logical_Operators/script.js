let pass = 50;
let score = 90;
let hasPassed = !(score >= pass); // Negation
console.log(hasPassed);
console.log(!hasPassed);

// Logical AND
console.log("Logical AND");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Logical OR
console.log("Logical OR");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//Negation
console.log("Negation");
console.log(!true);
console.log(!false);

console.log("-------------------");
let comparison1 = 5 < 10;
let comparison2 = 10 != 10;
let comparison3 = 10 !== "10";
console.log(comparison1);
console.log(comparison2);
console.log(comparison3);
console.log("-------------------");
console.log(comparison1 && comparison2);
console.log(!comparison2 || comparison3);
