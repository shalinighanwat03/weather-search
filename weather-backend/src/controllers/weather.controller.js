const WeatherService = require("../services/weather.service");

exports.getWeather = async (req, res) => {
  try {
    const city = req.query.city;

    if (!city) {
      return res.status(400).json({ error: "City name is required" });
    }

    const result = await WeatherService.getWeatherByCity(city);
    return res.json(result);

  } catch (err) {
    if (err.response?.status === 404) {
      return res.status(404).json({ error: "City not found" });
    }

    return res.status(500).json({
      error: "Unable to fetch weather",
      details: err.message
    });
  }
};
