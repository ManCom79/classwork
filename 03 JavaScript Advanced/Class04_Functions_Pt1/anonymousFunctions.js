//Anonymous function in a variable
let greeting = function (name) {
  return `Hello ${name}.`;
};

let greet = greeting("Sirma");
console.log(greet);

let randomNumber = function () {
  return Math.floor(Math.random() * 1000);
};

let myRandomNumber = randomNumber();
console.log(myRandomNumber);

//Annonymous function in event listener
let changingColorsButton = document.getElementById("changingColorsButton");

changingColorsButton.addEventListener("click", function () {
  changingColorsButton.style.backgroundColor = "red";
});

let logMessageIntoConsole = function () {
  console.log("A button was clicked!");
};

let loggingMessageButton = document.getElementById("loggingMessageButton");
loggingMessageButton.addEventListener("click", logMessageIntoConsole);
