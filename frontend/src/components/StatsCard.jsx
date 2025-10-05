// src/components/StatsCard.jsx
import React from "react";
import { Droplets, Thermometer, Wind } from "lucide-react";

const StatsCard = ({ stats }) => {
  const { temperatura_media, precipitacion_media, viento_medio } = stats;

  const data = [
    {
      label: "Temperatura media",
      value: `${temperatura_media} °C`,
      icon: <Thermometer className="text-red-500 w-6 h-6" />,
      desc: "Promedio diario de temperatura del aire a 2 m sobre el suelo.",
    },
    {
      label: "Precipitación media",
      value: `${precipitacion_media} mm`,
      icon: <Droplets className="text-blue-500 w-6 h-6" />,
      desc: "Cantidad promedio de lluvia por día en milímetros.",
    },
    {
      label: "Viento medio",
      value: `${viento_medio} m/s`,
      icon: <Wind className="text-cyan-600 w-6 h-6" />,
      desc: "Velocidad promedio del viento a 10 m sobre el suelo.",
    },
  ];

  return (
    <div className="grid sm:grid-cols-3 gap-4 w-full mt-4">
      {data.map((item, i) => (
        <div
          key={i}
          className="bg-white/80 rounded-2xl shadow p-4 border border-gray-100 flex flex-col items-center text-center"
        >
          <div className="mb-2">{item.icon}</div>
          <h3 className="text-lg font-semibold text-gray-700">{item.label}</h3>
          <p className="text-xl font-bold text-gray-900">{item.value}</p>
          <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
