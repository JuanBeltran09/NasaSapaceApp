import React from "react";

const ResultCard = ({ data }) => {
  if (!data) return <p>No hay resultados aún.</p>;

  const { location, date, probabilities, variables_used } = data;

  return (
    <div className="card">
      <h2>Resultados para {location}</h2>
      <p><strong>Fecha:</strong> {date}</p>
      <ul>
        {Object.entries(probabilities).map(([key, value]) => (
          <li key={key}>{key.replace("_", " ")}: {value}</li>
        ))}
      </ul>
      <p><strong>Variables utilizadas:</strong> {variables_used.join(", ")}</p>
    </div>
  );
};

export default ResultCard;
