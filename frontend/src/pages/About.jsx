import React from "react";
import { motion } from "framer-motion";
import { CloudSunRain, Database, BarChart3, Zap } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Datos NASA POWER",
      description: "Información satelital confiable y científicamente validada"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Análisis Estadístico",
      description: "Probabilidades basadas en datos históricos reales"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Interfaz Moderna",
      description: "Visualización intuitiva y fácil de interpretar"
    }
  ];

  return (
    <motion.div
      className="max-w-5xl mx-auto p-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header con gradiente */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 shadow-xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
            <CloudSunRain className="text-white w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold text-white">
            Acerca de Weather Probability App
          </h1>
        </div>
        <p className="text-blue-50 text-lg leading-relaxed">
          Una herramienta científica para comprender patrones climáticos y tomar decisiones informadas
        </p>
      </div>

      {/* Descripción principal */}
      <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          ¿Qué es Weather Probability App?
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed text-lg">
          <strong className="text-blue-600">Weather Probability App</strong> es una aplicación desarrollada
          para analizar y visualizar las probabilidades de diferentes tipos de
          clima, como días soleados, lluviosos, nublados o ventosos.
        </p>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Los datos meteorológicos provienen de la{" "}
          <strong className="text-purple-600">NASA POWER API</strong>, una fuente científica confiable que
          proporciona información ambiental y climática basada en satélites,
          ideal para proyectos agrícolas, energéticos y de investigación.
        </p>
      </div>

      {/* Características */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-blue-600">
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Objetivo */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-3xl">🎯</span>
          Nuestro Objetivo
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Ofrecer una interfaz intuitiva y moderna para que
          investigadores, estudiantes y público general puedan comprender mejor
          los patrones climáticos y tomar decisiones informadas basadas en datos científicos reales.
        </p>
      </div>

      {/* Footer informativo */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-gray-500 text-sm">
          💡 Datos actualizados de la NASA | 📊 Análisis histórico confiable | 🌍 Cobertura global
        </p>
      </motion.div>
    </motion.div>
  );
}