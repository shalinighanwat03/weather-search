import { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard.jsx";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const searchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await axios.get(`http://localhost:3001/api/weather`, {
        params: { city },
      });
      setWeather(res.data);
    } catch (err) {
      setError("City not found or server error");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") searchWeather();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="container">
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Weather Forecast
          </h1>
          <p className="text-lg text-white/80 mt-3">
            Get real-time weather updates instantly
          </p>
        </div>

        <div className="searchBox">
          <input
            type="text"
            placeholder="Search city (e.g. London, Tokyo)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading}
          />
          <button onClick={searchWeather} disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
        </div>

        {error && <p className="error mt-6">{error}</p>}
        {weather && <WeatherCard data={weather} />}
      </div>
    </div>
  );
}