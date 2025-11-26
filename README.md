# Weather Search — Current Weather by City

A small project that implements a search engine to fetch current weather by city name.

**Tech stack**
- Backend: Node.js + Express (MVC + Services), Axios, lru-cache
- Frontend: React + Vite (simple UI)
- Weather provider: OpenWeatherMap Current Weather API (https://openweathermap.org/current)

---

## Features
- `GET /api/weather?city=<name>` — returns current weather for a city
- Caching with LRU + TTL on backend (reduces vendor calls)
- Proper REST response codes (400, 404, 504, 500)
- Frontend UI to search and display rich weather info + raw JSON

