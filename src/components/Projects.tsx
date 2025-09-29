// projects.tsx
'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import projects from '../lib/projects';
import ProjectCard from './ProjectCard';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="py-2 relative overflow-hidden">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white">
        Proyectos
      </h2>

      {/* Fondo sutil animado*/}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900 dark:to-gray-900 opacity-30 blur-2xl" />
      </motion.div>

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
                viewport={{ once: true }}
                className="w-full max-w-[340px]" // controla tamaño de cada slide
              >
                {/* Pasamos si la tarjeta es la activa para ajustar sombre/zoom */}
                <ProjectCard {...p} isActive={index === activeIndex} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
