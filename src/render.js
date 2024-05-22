export function renderWeather(weatherData) {
  const container = document.querySelector(".container");
  const info = document.querySelector(".info");
  const city = document.querySelector("h1");
  const temperature = document.querySelector(".temp");
  const condition = document.querySelector(".condition");
  const location = document.querySelector("#location");
  const time = document.querySelector("#time");
  const tempC = document.querySelector("#tempC");
  const tempF = document.querySelector("#tempF");
  const humidity = document.querySelector("#humidity");
  const lastUpdated = document.querySelector("#last-updated");

  city.textContent = weatherData.location.city;
  temperature.textContent = weatherData.weather.tempF;
  const degree = document.createElement("span");
  degree.classList.add("degree");
  degree.textContent = "°F";
  temperature.appendChild(degree);
  condition.textContent = weatherData.weather.condition;

  location.textContent = `${weatherData.location.city}, ${weatherData.location.region}, ${weatherData.location.country}`;
  time.textContent = weatherData.location.time;
  tempC.textContent = `${weatherData.weather.tempC}°C`;
  tempF.textContent = `${weatherData.weather.tempF}°F`;
  humidity.textContent = `${weatherData.weather.humidity}%`;
  lastUpdated.textContent = weatherData.weather.lastUpdated;

  container.style.cssText = "display: flex;";
  info.style.cssText = "display: grid;";
}

export const errorText = (function () {
  const errorTextDiv = document.querySelector(".error");
  const set = (message) => (errorTextDiv.textContent = message);
  const clear = () => (errorTextDiv.textContent = "");
  return { set, clear };
})();
