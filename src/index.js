import "./style.css";

const form = document.querySelector("form");
const searchInput = document.querySelector("#search");
const errorText = document.querySelector(".error");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (searchInput.value) {
    getWeatherData(searchInput.value);
    form.reset();
    errorText.textContent = "";
  } else {
    errorText.textContent = "Please enter search";
  }
});

async function getWeatherData(search) {
  const APIKEY = "d7c1713ad5724af9a37173303241905";
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${search}`
  );
  const weatherDataRaw = await response.json();
  const weatherData = new Weather(weatherDataRaw);
  return weatherData;
}

class Weather {
  constructor(weatherData) {
    (this.location = {
      city: weatherData.location.name,
      region: weatherData.location.region,
      country: weatherData.location.country,
    }),
      (this.weather = {
        condition: weatherData.current.condition.text,
        iconURL: weatherData.current.condition.icon,
        temperatureF: weatherData.current.temp_f,
        temperatureC: weatherData.current.temp_c,
        humidity: weatherData.current.humidity,
        lastUpdated: weatherData.current.last_updated,
      });
  }
}
