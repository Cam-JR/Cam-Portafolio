"use client";
import { motion } from "framer-motion"; 
import { FaRegStar, FaArrowRight, FaDownload, FaEnvelope } from 'react-icons/fa';

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
      <motion.div className="relative z-10 text-white px-6 ">
        <motion.h1
          className="text-5xl font-bold mb-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ¡Hola! Soy <span className="text-indigo-400">Cam</span> 
        </motion.h1>
        <motion.p
          className="text-lg text-gray-200 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Frontend Developer | Apasionada por el diseño y la web
        </motion.p> 

        
        {/* --- Contenedor de Botones - ¡AJUSTADO! --- */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
           
          {/* Botón "Ver Proyectos" - ¡AJUSTADO PARA SER MÁS COMPACTO! */}
          <motion.a
            href="#projects" 
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl shadow-lg hover:bg-indigo-600 transition duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <FaRegStar className="text-base" />
            <span className="font-medium">Ver Proyectos</span>
            <FaArrowRight className="text-base" />
          </motion.a>

          {/* Botón "Descargar CV" */}
          <motion.a
            href="/cv.pdf"
            download
            className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-xl shadow-lg hover:bg-indigo-600 transition duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <FaDownload className="text-base mr-2" />
            Descargar CV
          </motion.a> 

          {/* Botón Contacto */}
          <motion.a
            href="#contact"
            download
            className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-xl shadow-lg hover:bg-indigo-600 transition duration-300 transform hover:-translate-y-1 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <FaEnvelope className="mr-2" />
            Let's work together
          </motion.a> 

           
        </div>
      </motion.div>
    </section>
  );
}