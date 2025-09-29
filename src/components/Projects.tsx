'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import projects from '../lib/projects';
import ProjectCard from './ProjectCard';
import { Sun, Moon } from "lucide-react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(true); // lo pongo en true por defecto

  return (
    <section
      id="projects"
      className={`py-12 relative overflow-hidden transition-colors duration-700 ${
        darkMode
          ? 'text-gray-100'
          : 'bg-white text-gray-900'
      }`}
    >
      {/* Fondo degradado tipo referencia */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 -z-10"
      >
        <div
          className={`w-full h-full ${
            darkMode
              ? 'bg-gradient-to-br from-[#0a0a1f] via-[#1e1e2f] to-black'
              : 'bg-gradient-to-br from-indigo-50 to-white'
          }`}
        />
      </motion.div>

      <h2
        className={`text-4xl font-extrabold mb-6 text-center drop-shadow-md ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        Proyectos
      </h2>

      {/* Botón para activar dark mode */}
      <div className="text-center mb-10">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex-center   gap-2 px-4 py-3 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition"
        >
          {darkMode ? (
            <>
              <Sun className="w-5 h-5" /> 
            </>
          ) : (
            <>
              <Moon className="w-5 h-5" /> 
            </>
          )}
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          spaceBetween={40}
          slidesPerView={1.05}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 160,
            modifier: 1.1,
            slideShadows: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1.05 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          autoplay={{ delay: 4500, disableOnInteraction: true }}
          className="py-8"
        >
          {projects.map((p, index) => (
            <SwiperSlide key={p.id} className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                viewport={{ once: false }}
                className="w-full max-w-[340px]"
              >
                <ProjectCard {...p} isActive={index === activeIndex} darkMode={darkMode} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
