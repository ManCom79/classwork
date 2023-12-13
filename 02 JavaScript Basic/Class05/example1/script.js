console.log("Test!");

let ourHeader = document.getElementById("myTitle");
console.log(`Our header text is: ${ourHeader.innerHTML}.`);

ourHeader.style.border = "1px solid black";
ourHeader.style.backgroundColor = "red ";
ourHeader.innerText += " This is text from JS";

console.log("");
console.log("------Access by class------");

let ourParagraphs = document.getElementsByClassName("myParagraph");
console.log(`ourParagraph length: ${ourParagraphs.length}`);
console.log(`ourParagraph first element: ${ourParagraphs[0].innerText}`);

console.log("");
console.log("------Access by tag------");

let paragraphs = document.getElementsByTagName("p");
console.log(`paragraphs length: ${paragraphs.length}`);

console.log("------Access by css selectors------");
let firstDivWithClass = document.querySelector(".myDiv");
console.log(firstDivWithClass);

let ourDivs = document.querySelectorAll(".myDiv");
console.log(ourDivs.length);
console.log(ourDivs[1].innerText);

console.log("------Siblings------");
let header = document.getElementsByTagName("h1")[0];
console.log(header);
let nextSibling = header.nextElementSibling;
console.log(nextSibling);

console.log("------Children------");
let children = document.getElementById("main").children;
console.log(children);
