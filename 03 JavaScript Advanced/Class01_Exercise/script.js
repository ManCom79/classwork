// Generate an array that has all the numbers that are divisible by 3 from 1 to 1000

function divisibleByThree() {
  let numbersDivByThree = [];
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0) {
      numbersDivByThree.push(i);
    }
  }
  return numbersDivByThree;
}

let numbersDivByThreeResult = divisibleByThree();
console.log(numbersDivByThreeResult);

// Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000

function evenDivisibleByFour() {
  let evenNumbersDivByFour = [];
  for (let i = 0; i < 1000; i++) {
    if (i % 2 === 0 && i % 4 === 0) {
      evenNumbersDivByFour.push(i);
    }
  }
  return evenNumbersDivByFour;
}

let numbersDivByFourResult = evenDivisibleByFour();
console.log(numbersDivByFourResult);

// Generate an array that has all the numbers that end with digit 1 from 1 to 1000

function endingInOne() {
  let endingOnOne = [];
  for (let i = 0; i < 1000; i++) {
    if (i % 10 === 1) {
      endingOnOne.push(i);
    }
  }
  return endingOnOne;
}

let numbersEndingInOne = endingInOne();
console.log(numbersEndingInOne);
