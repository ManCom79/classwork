console.log("-----------Control Structures-----------");

// 1. Control Statements (if, else, else if)
// 2. Switch Statements
// 3. Looping Structures
// Purpose: Cintrol the flow

console.log("-----------Switch Statement-----------");

// useful when you have multiple conditions to check against SINGLE variable
// basicsyntax
let switchValue = "";
switch (switchValue) {
  case "value1":
    // code to be executed
    break;
  case "value2":
    // code to be executed
    break;
  case "value3":
    // code to be executed
    break;
  default:
    // code to be executed if none switch value is executed
    break;
}

// Program to get day of week

let inputDay = prompt("Enter day of week (1-7):");
let parseInputDay = parseInt(inputDay);

switch (parseInputDay) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid input value");
    break;
}

// Check if it a working day or weekend
// fall through scenario
switch (parseInputDay) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Work day");
    break;
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("Invalid input value");
    break;
}
