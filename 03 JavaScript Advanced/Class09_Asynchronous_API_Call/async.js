console.log("Start");

async function fetchCountryInfoAsync(countryCode) {
  let url = `https://restcountries.com/v3.1/alpha/${countryCode}`;
  let response = await fetch(url);
  console.log(response);
  if (!response.ok) {
    console.log("HTTP error status: ", response.status);
  }
  let data = await response.json();
  console.log(data);
  return data;
}

fetchCountryInfoAsync("MK");
