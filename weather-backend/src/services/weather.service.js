const axiosClient = require("../config/axiosClient");
const cache = require("../utils/cache");

class WeatherService {
  async getWeatherByCity(city) {
    const key = city.toLowerCase();
    console.log("API KEY LOADED =", process.env.OPENWEATHER_KEY);

    const cachedData = cache.get(key);
    if (cachedData) {
      return { source: "cache", data: cachedData };
    }

    const response = await axiosClient.get("weather", {
      params: {
        q: city,
        appid: process.env.OPENWEATHER_KEY,
        units: "metric"
      }
    });

    const data = response.data;

    const formatted = {
      name: data.name,
      country: data.sys.country,
      coords: data.coord,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      pressure: data.main.pressure,
      visibility: data.visibility,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      weather: data.weather,
      raw: data
    };

    cache.set(key, formatted);

    return { source: "api", data: formatted };
  }
}

module.exports = new WeatherService();
