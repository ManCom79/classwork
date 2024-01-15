// Create 3 inputs: Color, Font Size, Text
// Create button for generating titles
// When the button is clicked generate new h1 element with the color, fontsize and text from the inputs
let inputColor = document.getElementById("color");
let inputFontSize = document.getElementById("fontSize");
let inputText = document.getElementById("title");
let titleHolder = document.getElementById("titleHolder");
let btn = document.getElementById("generateTitle");

btn.addEventListener("click", function () {
  console.log(inputColor);
  console.log(inputFontSize);
  console.log(inputText);
  titleHolder.innerHTML += `<h1 style="color: ${inputColor.value}; font-size: ${inputFontSize.value}px;">${inputText.value}</h1>`;
});
