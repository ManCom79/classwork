let saveButton = document.getElementById("saveButton");

let users = [];
console.log(users);

function user(name, surname, number) {
  this.name = name;
  this.surname = surname;
  this.number = number;
}

saveButton.addEventListener("click", function () {
  console.log("save clicked");

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let customer = new user(firstName, lastName, phoneNumber);

  console.log(customer.name, customer.surname, customer.number);

  users.push(customer);
  console.log(users);

  drawTable();

  firstName = document.getElementById("firstName").value = "";
  lastName = document.getElementById("lastName").value = "";
  phoneNumber = document.getElementById("phoneNumber").value = "";
});

function drawTable() {
  let tableBody = document.getElementById("tbody");
  tableBody.innerHTML = "";
  for (i = 0; i < users.length; i++) {
    console.log(users[i].name);
    console.log(users[i].surname);
    console.log(users[i].number);
    tableBody.innerHTML += `<tr><td>${users[i].name}</td><td>${users[i].surname}</td><td>${users[i].number}</td></tr>`;
  }
}
