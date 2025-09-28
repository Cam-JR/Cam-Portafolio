'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import projects from '../lib/projects';
import ProjectCard from './ProjectCard';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white">
        Proyectos
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {projects.map((p, index) => (
          <SwiperSlide key={p.id}>
            <motion.div
              className="flex justify-center p-2"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...p} />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
