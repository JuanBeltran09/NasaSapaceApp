// src/components/DownloadButton.jsx
import React from "react";

export default function DownloadButton({ data }) {
  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `weather_data_${data.date}.json`;
    a.click();
  };

  const downloadCSV = () => {
    const rows = [
      ["Categoria", "Valor"],
      ...Object.entries(data.resultados),
      ...Object.entries(data.estadisticas),
    ];
    const csvContent = rows.map((r) => r.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `weather_data_${data.date}.csv`;
    a.click();
  };

  return (
    <div className="flex gap-4 justify-center">
      <button
        onClick={downloadJSON}
        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Descargar JSON
      </button>
      <button
        onClick={downloadCSV}
        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Descargar CSV
      </button>
    </div>
  );
}
