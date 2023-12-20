// let firstInput;
// let secondInput;

// do {
//   firstInput = prompt("Please enter first number larger than zero:");
//   firstInput = Number(firstInput);
// } while (firstInput <= 0);

// do {
//   secondInput = prompt("Please enter second number larger than zero:");
//   secondInput = Number(secondInput);
// } while (secondInput <= 0);

let firstInput = prompt("Please enter number larger than zero:");
firstInput = parseInt(firstInput);
if (isNaN(firstInput) === true) {
  console.log("Please enter A NUMBER!!!");
}

let secondInput = prompt("Please enter number larger than zero:");
secondInput = parseInt(secondInput);
if (isNaN(secondInput) === true) {
  console.log("Please enter A NUMBER!!!");
}

function closerToOneHundred(number1, number2) {
  let firstInputDiffToHundred = 100 - number1;
  let secondInputDiffToHundred = 100 - number2;
  if (firstInputDiffToHundred < 0) {
    firstInputDiffToHundred = firstInputDiffToHundred * -1;
  }
  if (secondInputDiffToHundred < 0) {
    secondInputDiffToHundred = secondInputDiffToHundred * -1;
  }
  //   console.log(firstInputDiffToHundred, secondInputDiffToHundred);

  if (firstInputDiffToHundred < secondInputDiffToHundred) {
    console.log(`Number ${number1} is closer to 100 than ${number2}!`);
  } else if (secondInputDiffToHundred < firstInputDiffToHundred) {
    console.log(`Number ${number2} is closer to 100 than ${number1}!`);
  } else {
    console.log("Number are with same proximity to 100!");
  }
}

if (isNaN(firstInput) !== true && isNaN(secondInput) !== true) {
  closerToOneHundred(firstInput, secondInput);
}
