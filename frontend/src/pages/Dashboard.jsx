// src/pages/Dashboard.jsx
import React, { useState } from "react";
import { fetchWeatherData } from "../api/weatherApi";
import DateSelector from "../components/DateSelector";
import MapSelector from "../components/MapSelector";
import ResultCard from "../components/ResultCard";
import ProbabilityChartCarousel from "../components/ProbabilityChartCarousel";
import DownloadButton from "../components/DownloadButton";
import StatsCard from "../components/StatsCard";
import WeatherLegend from "../components/WeatherLegend";

export default function Dashboard() {
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [coords, setCoords] = useState({ lat: null, lon: null });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!date || !coords.lat || !coords.lon) {
      alert("Por favor selecciona fecha y ubicación.");
      return;
    }

    setLoading(true);
    try {
      const result = await fetchWeatherData(location, coords.lat, coords.lon, date);
      setData(result);
    } catch (err) {
      console.error(err);
      alert("Error al obtener datos del clima.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">🌦️ Weather Probability App</h1>

      <div className="grid md:grid-cols-2 gap-4">
        <DateSelector date={date} onChange={setDate} />
        <MapSelector
          location={location}
          onLocationChange={setLocation}
          onCoordsChange={setCoords}
        />
      </div>

      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Consultando..." : "Obtener datos"}
        </button>
      </div>

      {data && (
        <div className="space-y-6">
          <ProbabilityChartCarousel resultados={data.resultados} />
          <div>
            <>
              <StatsCard stats={data.estadisticas} />
              <WeatherLegend />
            </>
          </div>
          <DownloadButton data={data} />
        </div>
      )}
    </div>
  );
}
