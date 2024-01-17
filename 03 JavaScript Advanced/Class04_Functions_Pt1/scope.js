//Global Scope
let a = "Hello"; //global scope

function greet() {
  return "Hello World!";
}

//ARROW AND ANNONYMOUSFUNCTIONS ARE NOT IN GLOBAL SCOPE!!! (cannot be accessed by window.greet)
let greetArrow = () => "Hello World!";

//Function Scope

//Block Scope
function sumArrayOfNumbersBlock(array) {
  let sum = 0; //FUNCTION SCOPE
  for (let i = 0; i < array.length; i++) {
    // let sum = 0; //BLOCK SCOPE
    sum += array[i];
  }
  console.log(sum);
}

sumArrayOfNumbersBlock([1, 4, 7, 9]);

//HOISTING - Global functions are always palced at top of the code by JavaScript, when the file is run. This means global function can be called even before it is declared. Hoisting does not work for annonymous and arrow functions.
