let inputNumber = prompt("Please enter number: ");
inputNumber = parseInt(inputNumber);
if (isNaN(inputNumber) === true || inputNumber < 0) {
  console.log("Sorry, please enter a positive number.");
} else {
  checkDivisibility(inputNumber);
}

function checkDivisibility(number) {
  divByThree = number % 3;
  divBySeven = number % 7;
  if (divByThree === 0 && divBySeven === 0) {
    console.log("FizzBuzz");
  } else if (divByThree === 0 && divBySeven !== 0) {
    console.log("Fizz");
  } else if (divByThree !== 0 && divBySeven === 0) {
    console.log("Buzz");
  } else {
    console.log("Number", number, "is not divisible by 3 or 7.");
  }
}
