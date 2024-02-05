let pilotImage = document.getElementById("pilotImage");
let nextButton = document.getElementById("btnNext");
let btnPrevious = document.getElementById("btnPrevious");
let counter = 1;

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
  <table class="table table-hover table-bordered">
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
`;
  let bodyOfTable = document.getElementById("bodyOfTable");
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
}

function callPilotsApi() {
  fetch("https://swapi.dev/api/people")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      transformPeopleData(response);
      btnNext.style.visibility = "visible";
    });
}

pilotImage.addEventListener("click", function () {
  callPilotsApi();
});

btnNext.addEventListener("click", async () => {
  let url = `https://swapi.dev/api/people/?page=${counter + 1}`;
  let response = await fetch(url);
  let data = await response.json();
  if (data.next === null) {
    transformPeopleData(data);
    btnNext.style.visibility = "hidden";
    btnPrevious.style.visibility = "visible";
  } else {
    transformPeopleData(data);
    btnPrevious.style.visibility = "visible";
    btnNext.style.visibility = "visible";
  }
  counter = counter + 1;
  console.log(counter);
});

btnPrevious.addEventListener("click", async () => {
  let url = `https://swapi.dev/api/people/?page=${counter - 1}`;
  let response = await fetch(url);
  let data = await response.json();
  if (data.previous === null) {
    transformPeopleData(data);
    btnPrevious.style.visibility = "hidden";
    btnNext.style.visibility = "visible";
  } else {
    transformPeopleData(data);
    btnNext.style.visibility = "visible";
  }
  counter = counter - 1;
  console.log(counter);
});
