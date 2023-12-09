console.log("-----------Functions-----------");

console.log("");
console.log("-----------Function Declaration-----------");

function funacionName(parameter1, parameter2) {
  // FUNCTION BODY - code goes here
}

//Function without parameters

function greet() {
  console.log("Hello from SEDC!");
}

greet();
greet();
greet();
greet();
greet();
greet();

console.log("");

console.log("Hello Todor, SEDC wishes you happy holidays!");
console.log("Hello Sirma, SEDC wishes you happy holidays!");
console.log("Hello Slavko, SEDC wishes you happy holidays!");
console.log("Hello Boris, SEDC wishes you happy holidays!");

function greetStudent(studentName) {
  console.log(`Hello ${studentName}, SEDC wishes you happy holidays!`);
}

console.log("");
console.log("-----------Function Execution-----------");

greetStudent("Todor");
greetStudent("Sirma");
greetStudent("Slavko");
greetStudent("Boris");

console.log("");
console.log("-----------Function that returns value-----------");

function sum(number1, number2) {
  let result = number1 + number2;
  return result;
  console.log(`Result is ${result}`); //Unreachable code - will not execute because it's after return
}

let results = sum(5, 4);
console.log(results);

// Function for getting statistics

function getNumberStatistics(number) {
  switch (number) {
    case 1:
      return "Positive"; //When we have return we don't need brake
    case -1:
      return "Negative";
    case 0:
      return "Zero";
    default:
      return "Invalid data!";
  }
}

let inputNumber = prompt("Enter a number:");
let parsedNumber = parseFloat(inputNumber);
//Check if parsed value is a valid number

let numberStats = getNumberStatistics(parsedNumber);
console.log(numberStats);

function testReturn() {
  console.log("Return a value!");
  return 100;
}

// testReturn();

let testReturnValue = testReturn();
console.log(testReturnValue);

console.log("-----------Schoolwork Exercises-----------");
// Write 4 funstions that take two parameters and output result of addition, subtraction, multiplication and division

let inputNum1 = prompt("Enter first number");
let num1 = parseInt(inputNum1);
let inputNum2 = prompt("Enter second number:");
let num2 = parseInt(inputNum2);

function sum(num1, num2) {
  let resultSum = num1 + num2;
  return resultSum;
}

function subtract(num1, num2) {
  let resultSubtract = num1 - num2;
  return resultSubtract;
}

function multiply(num1, num2) {
  let resultMultiply = num1 * num2;
  return resultMultiply;
}

function divide(num1, num2) {
  let resultDivision = num1 / num2;
  return resultDivision;
}

let summedNumbers = sum(num1, num2);
console.log(`Sum of ${num1} and ${num2} is ${summedNumbers}`);
let subtractedNumbers = subtract(num1, num2);
console.log(`Difference between ${num1} and ${num2} is ${subtractedNumbers}`);
let multipliedNumbers = multiply(num1, num2);
console.log(`Product of ${num1} and ${num2} is ${multipliedNumbers}`);
let divideNumbers = divide(num1, num2);
console.log(`Quotient of ${num1} and ${num2} is ${divideNumbers}`);
