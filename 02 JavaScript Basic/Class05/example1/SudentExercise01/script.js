// Select the first div
let firstDiv = document.getElementById("first");
console.log(firstDiv);

//Select all paragraphs
let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);

//Select the last div
let divs = document.getElementsByTagName("div");
let length = divs.length;
console.log(length);
let lastDiv = document.getElementsByTagName("div")[length - 1];
console.log(lastDiv);

//Select header 3 in the last div
let h3 = document.getElementsByTagName("h3");
console.log(h3);

//Select header 1 in the last div
let lastDivH1 = lastDiv.getElementsByTagName("h1");
console.log(lastDivH1);

//Get the text from the first paragraph in the second div
let textParagraphSecondDivAray = document.getElementsByClassName("second");
console.log(textParagraphSecondDivAray);
console.log(`${textParagraphSecondDivAray[0].innerText}`);

//Add the word "text" to the text element in the second div
let textElement = document.getElementsByTagName("text");
console.log((textElement[0].innerText += " text"));

//Change the text to the header 1 in the last div
lastDivH1[0].innerText = "Text added from JS";

//
