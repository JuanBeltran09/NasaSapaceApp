// src/components/WeatherLegend.jsx
import React from "react";

const WeatherLegend = () => {
  const legends = [
    {
      type: "☀️ Soleado",
      color: "bg-yellow-300",
      desc: "Días con poca o ninguna lluvia, temperaturas agradables y cielos despejados.",
    },
    {
      type: "⛅ Nublado",
      color: "bg-gray-300",
      desc: "Presencia de nubes pero sin lluvias significativas. Temperaturas moderadas.",
    },
    {
      type: "🌦️ Lluvia ligera",
      color: "bg-blue-300",
      desc: "Lluvias leves o intermitentes, típicas de climas templados o húmedos.",
    },
    {
      type: "🌧️ Lluvia fuerte",
      color: "bg-blue-600",
      desc: "Precipitaciones intensas que pueden afectar actividades al aire libre.",
    },
    {
      type: "💨 Ventoso",
      color: "bg-cyan-400",
      desc: "Vientos moderados a fuertes, perceptibles especialmente en áreas abiertas.",
    },
    {
      type: "⚠️ Extremo",
      color: "bg-red-500",
      desc: "Condiciones severas: calor intenso, tormentas o vientos peligrosos.",
    },
  ];

  return (
    <div className="bg-white/90 rounded-2xl shadow-md border p-4 mt-6">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Tipos de clima</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {legends.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className={`w-4 h-4 mt-1 rounded-full ${item.color}`}></div>
            <div>
              <p className="font-medium text-gray-800">{item.type}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherLegend;
