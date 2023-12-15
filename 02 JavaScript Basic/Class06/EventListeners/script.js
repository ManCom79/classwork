let myInputElement = document.getElementById("myInput");
let myButton = document.getElementById("myButton");

function focusGreeting() {
  alert("Focus on Input!");
}

function blurGreeting() {
  alert("Input lost focus!");
}

function buttonClicked() {
  alert("Button clicked!");
}

function secondButtonClicked() {
  alert("Button clicked, but the second one!");
}
// myInputElement.addEventListener("focus", focusGreeting);
// myInputElement.addEventListener("blur", blurGreeting);
