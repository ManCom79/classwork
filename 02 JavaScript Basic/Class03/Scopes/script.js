console.log("Scopes");

let globalNumber = 2000;

function printGlobalNumber() {
  globalNumber = 1000;
  console.log(globalNumber);
}

printGlobalNumber();

// ---------------------

function localScope(number) {
  let localNumer = 100;
  let result = localNumer - number;
  console.log(result);
}

console.log(localScope(40));
// console.log(localNumer); //Outside scope

// ---------------------

let greeting = "Hello from QinShift Academy";
function printGreeting() {
  let greeting = "Happy Holidays!";
  console.log(greeting);
}
printGreeting();

// ---------------------

function outerFunction() {
  let outerVariable = "I'm from outer function!";

  function innerFunction() {
    let innweVariable = "I'm from the inner function!";
    console.log(outerVariable);
    console.log(innweVariable);
  }
  //   console.log(innweVariable);
  innerFunction();
}

outerFunction();
// innerFunction(); // NO! inner is not in global

// --------------------- BLOCK SCOPE

if (50 < 100) {
  let blockNumer = 50 + 100;
  console.log(blockNumer);
}

console.log(blockNumer);
