let inputName = prompt("What's your name?");
let greetButton = document.getElementById("greetButton");

greetButton.addEventListener("click", function () {
  alert(`Hello ${inputName}!`);
});
