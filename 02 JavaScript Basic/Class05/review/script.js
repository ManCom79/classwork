let input = prompt(
  "Please enter your weight in kg (please neter numeric value)"
);

function weightInChickens(weight, chicken = 0.5) {
  let weightInChickensCalculated = weight / chicken;
  return weightInChickensCalculated;
}

let weight = weightInChickens(input);
console.log(weight);

let showResultOnPage = document.getElementById("result");
console.log(showResultOnPage.innerText);
showResultOnPage.innerText = `Your weight of ${input} kilograms equals ${weight} chickens.`;
