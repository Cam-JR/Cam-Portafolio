"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/fondo.jpg')",
      }}
      
    >
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

      {/* Contenido */}
      <motion.div className="relative z-10 text-white px-6">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ¡Hola! Soy <span className="text-indigo-400">Cam</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-200 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Frontend Developer | Apasionada por el diseño y la web
        </motion.p>
        <motion.a
          href="/cv.pdf"
          download
          className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-lg hover:bg-indigo-600 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Descargar CV
        </motion.a>
      </motion.div>
    </section>
  );
}
