// src/components/ResultCard.jsx
import React from "react";

export default function ResultCard({ title, data }) {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <ul className="space-y-1">
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="text-sm">
            <span className="font-medium">{key}:</span> {value.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
