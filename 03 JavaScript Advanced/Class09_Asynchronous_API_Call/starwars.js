console.log("Start");

function fetchCountryInfo(countryCode) {
  fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Country info: ", data);
      return data;
    })
    .then((countryInfo) => {
      let countryName = countryInfo[0].name.common;
      console.log(countryName);
      return countryName;
    })
    .catch((error) => {
      console.error("Errir woth parsing the data: ", error);
    });
}

fetchCountryInfo("MK");
