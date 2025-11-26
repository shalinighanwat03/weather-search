export default function WeatherCard({ data }) {
  const w = data.data;
  const icon = w.weather[0].icon;

  return (
    <div className="card">
      <h2 style={{ marginBottom: "6px" }}>
        {w.name}, {w.country}
        <span style={{ fontSize: "12px", color: "#333" }}>
          {" "}
          ({data.source})
        </span>
      </h2>

      <img
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt="Weather"
      />

      <h1>{w.temp}°C</h1>
      <p>{w.weather?.[0]?.description}</p>

      <div className="grid">
        <div className="grid-item">🌡️ Feels Like: {w.feels_like}°C</div>
        <div className="grid-item">💧 Humidity: {w.humidity}%</div>
        <div className="grid-item">🌬️ Wind: {w.wind.speed} m/s</div>
        <div className="grid-item">🔽 Pressure: {w.pressure} hPa</div>
        <div className="grid-item">👁️ Visibility: {w.visibility} m</div>
        <div className="grid-item">🌅 Sunrise: {new Date(w.sunrise*1000).toLocaleTimeString()}</div>
        <div className="grid-item">🌇 Sunset: {new Date(w.sunset*1000).toLocaleTimeString()}</div>
      </div>
    </div>
  );
}
