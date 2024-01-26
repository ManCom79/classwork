let pilotImage = document.getElementById("pilotImage");

function transformPeopleData(response) {
  let tableHolder = document.getElementById("tableHolder");
  console.log(response.results); //create object
  let pilotArray = [];
  for (let i = 0; i < response.results.length; i++) {
    pilot = new createPilotObject(
      response.results[i].name,
      response.results[i].height,
      response.results[i].mass,
      response.results[i].gender,
      response.results[i].birth_year,
      response.results[i].films.length
    );
    pilotArray.push(pilot);
  }
  console.log(pilotArray);
  renderPeopleTable(pilotArray, tableHolder);
}

function createPilotObject(
  pilotName,
  pilotHeight,
  pilotMass,
  pilotGender,
  pilotBirthYear,
  pilotAppearences
) {
  this.pilotName = pilotName;
  this.pilotHeight = pilotHeight;
  this.pilotMass = pilotMass;
  this.pilotGender = pilotGender;
  this.pilotBirthYear = pilotBirthYear;
  this.pilotAppearences = pilotAppearences;
}

function renderPeopleTable(pilotArray, tableHolderElement) {
  tableHolderElement.innerHTML = `
  <table border="1px solid black">
    <thead>
        <th>Name</th>
        <th>Height</th>
        <th>Mass</th>
        <th>Gender</th>
        <th>Birth Year</th>
        <th>Appearences</th> 
    </thead>
    <tbody id="bodyOfTable">
    </tbody>
</table>
`
let bodyOfTable = document.getElementById("bodyOfTable")
for (let i = 0; i < pilotArray.length; i++) {
  bodyOfTable.innerHTML += `
          <tr>
              <td>${pilotArray[i].pilotName}</td>
              <td>${pilotArray[i].pilotHeight}</td>
              <td>${pilotArray[i].pilotMass}</td>
              <td>${pilotArray[i].pilotGender}</td>
              <td>${pilotArray[i].pilotBirthYear}</td>
              <td>${pilotArray[i].pilotAppearences}</td>
          </tr>
          `;
}
;
console.log(tableHolderElement);
}

function callPilotsApi() {
  fetch("https://swapi.dev/api/people")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      transformPeopleData(response);
    });
}

pilotImage.addEventListener("click", function () {
  callPilotsApi();
});
