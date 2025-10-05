// src/api/weatherApi.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/weather"; // Ajusta si usas proxy o diferente puerto

export const fetchWeatherData = async (location, lat, lon, date) => {
  try {
    const response = await axios.post(API_URL, {
      location,
      lat,
      lon,
      date,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
