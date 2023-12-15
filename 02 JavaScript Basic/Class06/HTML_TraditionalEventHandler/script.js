let myButton = document.getElementById("myButton");
let mySecondButton = document.getElementById("mySecondButton");
let myDiv = document.getElementById("myDiv");

function btnClick() {
  alert("You clicked a button!");
}

function greeting() {
  alert("Happy New Year!");
}

function goodBye() {
  alert("Goodbye!");
}

function hiGreeting() {
  alert("Hi!");
}

myButton.onclick = btnClick;
mySecondButton.onclick = btnClick;

myDiv.onmouseover = greeting;
