import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { colorForType } from "../../utils/colors";

export default function ChartDonut({ resultados }) {
  if (!resultados || Object.keys(resultados).length === 0) {
    return <p className="text-gray-500 italic">No hay datos disponibles.</p>;
  }

  const data = Object.entries(resultados).map(([key, value]) => ({
    name: key.replace(/_/g, " "),
    value: Number(value.toFixed(1)), // ✅ mantiene tipo numérico
  }));

  return (
    <div className="w-full h-[320px] p-2">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={3}
            label={({ name, value }) => `${name}: ${value}%`} // ✅ etiqueta clara
          >
            {data.map((entry, idx) => (
              <Cell key={idx} fill={colorForType(entry.name)} />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: "0.5rem",
              color: "#e2e8f0",
            }}
            formatter={(v) => [`${v}%`, "Probabilidad"]}
          />

          <Legend
            wrapperStyle={{ color: "#cbd5e1" }}
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
