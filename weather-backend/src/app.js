const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./routes/weather.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/weather", weatherRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

module.exports = app;
