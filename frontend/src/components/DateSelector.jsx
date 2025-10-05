// src/components/DateSelector.jsx
import React from "react";

export default function DateSelector({ date, onChange }) {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <label className="block font-medium mb-2">Seleccionar fecha</label>
      <input
        type="date"
        value={date}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />
    </div>
  );
}
