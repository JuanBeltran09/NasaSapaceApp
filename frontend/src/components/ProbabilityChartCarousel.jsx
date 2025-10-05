import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import ChartBar from "./charts/ChartBar";
import ChartDonut from "./charts/ChartDonut";
import ChartRadar from "./charts/ChartRadar";

const charts = [
  { id: "bar", label: "Barras", component: ChartBar },
  { id: "donut", label: "Donut", component: ChartDonut },
  { id: "radar", label: "Radar", component: ChartRadar },
];

export default function ProbabilityChartCarousel({ resultados = {} }) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const next = () => setIndex((prev) => (prev + 1) % charts.length);
  const prev = () => setIndex((prev) => (prev - 1 + charts.length) % charts.length);

  const startAutoplay = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(next, 6000); // cambia cada 6 segundos
    }
  };

  const stopAutoplay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay; // limpia al desmontar
  }, []);

  const CurrentChart = charts[index].component;

  return (
    <div
      className="relative bg-weather-card p-4 rounded-2xl shadow-md border border-white/10 text-white"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-100">
          Probabilidades (%)
        </h2>

        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="p-1 rounded-lg hover:bg-white/10 transition"
            aria-label="Gráfico anterior"
          >
            <ChevronLeft size={20} />
          </button>

          <span className="text-sm text-gray-400">
            {charts[index].label}
          </span>

          <button
            onClick={next}
            className="p-1 rounded-lg hover:bg-white/10 transition"
            aria-label="Siguiente gráfico"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="h-[320px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={charts[index].id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <CurrentChart resultados={resultados} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 🔵 Indicadores tipo slider */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {charts.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "bg-blue-400 w-4" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Ir a gráfico ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
