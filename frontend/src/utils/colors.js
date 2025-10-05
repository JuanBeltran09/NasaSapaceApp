export const colorForType = (type) => {
  const lower = type.toLowerCase();
  if (lower.includes("soleado")) return "#facc15";
  if (lower.includes("nublado")) return "#94a3b8";
  if (lower.includes("lluvia fuerte")) return "#2563eb";
  if (lower.includes("lluvia")) return "#3b82f6";
  if (lower.includes("ventoso")) return "#7dd3fc";
  if (lower.includes("extremo")) return "#ef4444";
  return "#a78bfa";
};
