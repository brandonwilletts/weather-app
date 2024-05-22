import { getWeatherData } from "./data";
import { errorText, renderWeather } from "./render";
import "./style.css";

const form = document.querySelector("form");
const searchInput = document.querySelector("#search");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (searchInput.value) {
    const weatherData = await getWeatherData(searchInput.value);
    if (weatherData != undefined) {
      renderWeather(weatherData);
      form.reset();
      errorText.clear();
    }
  } else {
    errorText.set("Please enter valid search");
  }
});
