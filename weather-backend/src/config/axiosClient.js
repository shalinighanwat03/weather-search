const axios = require("axios");

const axiosClient = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",   // <--- VERY IMPORTANT
  timeout: 5000
});

module.exports = axiosClient;
