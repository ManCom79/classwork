let salary = 1000;
let rent = 375;
let bills = 250;

let amountLeft = 1000 - 375 - 250;
console.log(amountLeft);
let totalExpenses = 375 + 250;
console.log(totalExpenses);

document.getElementById("left").innerText = amountLeft;
document.getElementById("spent").innerText = totalExpenses;
