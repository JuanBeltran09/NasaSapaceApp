import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Cell,
} from "recharts";
import { colorForType } from "../../utils/colors";

export default function ChartBar({ resultados }) {
  const data = Object.entries(resultados).map(([key, value]) => ({
    name: key.replace(/_/g, " "),
    probabilidad: Number(value).toFixed(1),
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
        <XAxis dataKey="name" tick={{ fill: "#cbd5e1", fontSize: 12 }} />
        <YAxis tick={{ fill: "#cbd5e1", fontSize: 12 }} domain={[0, 100]} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#0f172a",
            borderRadius: "0.5rem",
            border: "1px solid #1e293b",
          }}
          formatter={(v) => [`${v}%`, "Probabilidad"]}
        />
        <Bar dataKey="probabilidad" barSize={40} radius={[6, 6, 0, 0]}>
          {data.map((entry, idx) => (
            <Cell key={idx} fill={colorForType(entry.name)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
