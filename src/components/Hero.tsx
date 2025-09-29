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
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-7"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          ¡Hola! Soy <span className="text-indigo-400">Cam</span> 
        </motion.h1>
        <motion.p
          className="text-base md:text-lg lg:text-xl text-gray-200 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Frontend Developer | Apasionada por el diseño y la web
        </motion.p> 

        
        {/* --- Contenedor de Botones - ¡AJUSTADO! --- */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
           
          {/* Botón "Ver Proyectos" - ¡AJUSTADO PARA SER MÁS COMPACTO! */}
          <motion.a
            href="#projects" 
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl shadow-lg hover:bg-indigo-600 transition duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <FaRegStar className="text-base" />
            <span className="font-medium">Ver Proyectos</span>
            <FaArrowRight className="text-base" />
          </motion.a>


          {/* Botón "Descargar CV" */}
          <motion.a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl shadow-lg hover:bg-indigo-600 transition duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <FaDownload className="text-base" />
            <span className="font-medium">Descargar CV</span>
          </motion.a>

          {/* Botón Contacto */}
          <motion.a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl shadow-lg hover:bg-indigo-600 transition duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <FaEnvelope className="text-base" />
            <span className="font-medium">Trabajemos juntos</span>
          </motion.a>


           
        </div>
      </motion.div>
    </section>
  );
}