console.log("We are live!");

//JSON explaine

let myJson = `{
    "trainer": "Trainer Name",
    "assistant": "Assistant Name",
    "student": [
        "Bob",
        "Samantha",
        "Chris",
        "Jill",
        "Greg"
    ],
    "academy": "Code"
}`;

console.log(typeof myJson); //STRING!!!!!!!!!!!!!!!!!!!

let myJson2 = {
  trainer: "Trainer Name",
  assistant: "Assistant Name",
  student: ["Bob", "Samantha", "Chris", "Jill", "Greg"],
  academy: "Code",
};

console.log(myJson);
console.log(myJson2);
console.log(myJson.assistant); //Will be undefined because JSON is a strong, not an object
console.log(myJson2.assistant); //Will work because it's an object

let jsObject = JSON.parse(myJson); //Converting JSON to object
console.log(jsObject);

let jsonString = JSON.stringify(jsObject); //Converting object to JSON
console.log(jsonString);

console.log("----------------------------------------------------");

// document.getElementById("sendRequest").
// addEventListener("click", function() {

// })

let btn = document.getElementById("sendRequest");
btn.addEventListener("click", function () {
  fetch(
    "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json"
  )
    .then(function (response) {
      console.log(response);
      return response.json(); //promise to parse the returned value as JSON (like automatic JSON.parse())
    })
    .then(function (response) {
      console.log("request successful");
      console.log(response);
      let responseString = JSON.stringify(response);
      console.log(responseString);
    })
    .catch(function (response) {
      console.log("The request has failed: " + response.status);
      console.log(response.responseText);
    });
});

btn.addEventListener("click", function () {
  fetch("http://api.open-notify.org/astros.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log("astros call successful!");
      console.log(response);

      let element = document.getElementById("astros");
      element.innerHTML = "";
      for (let i = 0; i < response.people.length; i++) {
        element.innerHTML += `<li>${response.people[i].name}</li>`;
      }
    })
    .catch(function (response) {
      console.log("The request has failed!" + response.status);
      console.log(response);
      console.log(response.responseText);
    });
});
