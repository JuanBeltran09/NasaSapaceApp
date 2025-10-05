// src/components/ProbabilityChart.jsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function ProbabilityChart({ resultados }) {
  const data = Object.entries(resultados).map(([key, value]) => ({
    name: key.replace("_", " "),
    probabilidad: (value * 100).toFixed(1),
  }));

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-3">Probabilidades (%)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="probabilidad" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
