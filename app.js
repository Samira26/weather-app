// Assignment 1: In your project, display the current date and time using JavaScript: Tuesday 16:00
function formatDate(date) {
  let day = date.getDay();
  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[day];

  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

  return `${currentDay}, ${currentHour}:${currentMinutes},`;
}

let today = new Date();
let newDay = document.querySelector("#current-date");
newDay.innerHTML = formatDate(today);

// Assignment 2: Add a search engine: a search bar with a button. When searching for a city (i.e. Paris), display the city name on the page after the user submits the form.
// Asignment 3: Display current temperature

function newCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1#city");
  h1.innerHTML = cityInput.value;

  function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temp-element");
    temperatureElement.innerHTML = Math.round(
      response.data.temperature.current
    );
  }

  let city = cityInput.value;
  let apiKey = "df24oeedc433a37t0bf85c483b145ecb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&lat={lat}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

let searchForm = document.querySelector("#city-form");
searchForm.addEventListener("submit", newCity);
