import React from "react";
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip,
} from "recharts";
import { colorForType } from "../../utils/colors";

export default function ChartRadar({ resultados }) {
  const data = Object.entries(resultados).map(([key, value]) => ({
    subject: key.replace(/_/g, " "),
    probabilidad: Number(value).toFixed(1),
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={data} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
        <PolarGrid stroke="#1e293b" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: "#cbd5e1", fontSize: 12 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "#cbd5e1" }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#0f172a",
            border: "1px solid #1e293b",
            borderRadius: "0.5rem",
          }}
          formatter={(v) => [`${v}%`, "Probabilidad"]}
        />
        <Radar
          name="Clima"
          dataKey="probabilidad"
          stroke="#3b82f6"
          fill="#3b82f6"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
