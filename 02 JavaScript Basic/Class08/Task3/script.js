let input = prompt("Please enter a number: ");
input = Number(input);

function output(number) {
  let difference = number - 13;
  if (number > 13) {
    console.log("Double of the difference is ", difference * 2);
  } else {
    console.log(" The difference is ", difference);
  }
}

output(input);
