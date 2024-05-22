import { errorText } from "./render";

export async function getWeatherData(search) {
  const APIKEY = "d7c1713ad5724af9a37173303241905";
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${search}`,
      { mode: "cors" }
    );
    const weatherDataRaw = await response.json();
    const weatherData = new Weather(weatherDataRaw);
    return weatherData;
  } catch (error) {
    errorText.set("No location found");
  }
}

class Weather {
  constructor(weatherData) {
    (this.location = {
      city: weatherData.location.name,
      region: weatherData.location.region,
      country: weatherData.location.country,
      time: weatherData.location.localtime,
    }),
      (this.weather = {
        condition: weatherData.current.condition.text,
        tempF: Math.floor(weatherData.current.temp_f),
        tempC: Math.floor(weatherData.current.temp_c),
        humidity: weatherData.current.humidity,
        lastUpdated: weatherData.current.last_updated,
      });
  }
}
