// src/components/MapSelector.jsx
import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// 🧭 Componente hijo que maneja clicks y actualiza posición
function LocationMarker({ position, onCoordsChange, onLocationChange }) {
  const map = useMap();

  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      onCoordsChange({ lat, lon: lng });
      // Reverse geocoding: obtener nombre del lugar
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        );
        const data = await res.json();
        if (data.display_name) {
          onLocationChange(data.display_name);
        }
      } catch (err) {
        console.error("Error en reverse geocoding:", err);
      }
    },
  });

  useEffect(() => {
    if (position) {
      map.setView([position.lat, position.lon], 8);
    }
  }, [position, map]);

  return position ? <Marker position={[position.lat, position.lon]} icon={markerIcon} /> : null;
}

export default function MapSelector({ location, onLocationChange, onCoordsChange }) {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [position, setPosition] = useState(null);
  const mapRef = useRef(null);

  // 🧭 Cuando cambian coords manualmente
  const handleManualCoords = async () => {
    if (!lat || !lon) {
      alert("Introduce latitud y longitud válidas.");
      return;
    }

    const coords = { lat: parseFloat(lat), lon: parseFloat(lon) };
    setPosition(coords);
    onCoordsChange(coords);

    // Reverse geocoding automático
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lon}`
      );
      const data = await res.json();
      if (data.display_name) {
        onLocationChange(data.display_name);
      }
    } catch (err) {
      console.error("Error en reverse geocoding:", err);
    }
  };

  // 📍 Cuando cambia el campo de ubicación por texto
  const handleLocationSearch = async (e) => {
    const value = e.target.value;
    onLocationChange(value);
    if (value.length < 3) return;

    // Forward geocoding
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(value)}&limit=1`
      );
      const data = await res.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        const coords = { lat: parseFloat(lat), lon: parseFloat(lon) };
        setLat(coords.lat.toFixed(4));
        setLon(coords.lon.toFixed(4));
        setPosition(coords);
        onCoordsChange(coords);
      }
    } catch (err) {
      console.error("Error en forward geocoding:", err);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm space-y-4">
      <label className="block font-medium mb-2">Seleccionar ubicación</label>
      <input
        type="text"
        placeholder="Escribe una ciudad o país"
        value={location}
        onChange={handleLocationSearch}
        className="w-full border px-3 py-2 rounded"
      />

      {/* 🗺️ Mapa interactivo */}
      <div className="h-64 w-full rounded-lg overflow-hidden">
        <MapContainer
          center={[4.711, -74.0721]} // Bogotá
          zoom={5}
          style={{ height: "100%", width: "100%" }}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker
            position={position}
            onCoordsChange={(coords) => {
              setPosition(coords);
              setLat(coords.lat.toFixed(4));
              setLon(coords.lon.toFixed(4));
              onCoordsChange(coords);
            }}
            onLocationChange={onLocationChange}
          />
        </MapContainer>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <input
          type="number"
          placeholder="Latitud"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <input
          type="number"
          placeholder="Longitud"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
          className="border px-3 py-2 rounded"
        />
      </div>

      <button
        onClick={handleManualCoords}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full"
      >
        Usar coordenadas manuales
      </button>
    </div>
  );
}
