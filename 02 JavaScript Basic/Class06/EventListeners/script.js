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
  alert("Button clicked, but from the second function!");
}
// myInputElement.addEventListener("focus", focusGreeting);
// myInputElement.addEventListener("blur", blurGreeting);
myButton.addEventListener("click", buttonClicked);
myButton.addEventListener("click", secondButtonClicked);
// myButton.addEventListener("click", function () {
//   alert("Hello from our event listener in the annonymus function!");
// });

// myButton.addEventListener("click", function () {
//   buttonClicked();
//   secondButtonClicked();
//   alert("Hello again after the two functions!");
// });

myButton.addEventListener("click", function (event) {
  console.log(event);
  //get to which element in HTML the event is targeted
  console.log(event.target);
  //get the value of the targeted HTML element
  console.log(event.target.value);
});

myButton.removeEventListener("click", secondButtonClicked);
