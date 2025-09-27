// projects.tsx
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import projects from '../lib/projects';
import ProjectCard from './ProjectCard';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Projects() {
  return (
    <section id="projects" className="py-15">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900">Proyectos</h2>
      
      {/* Carrusel de Swiper */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {projects.map((p) => (
          <SwiperSlide key={p.id}>
            <div className="flex justify-center p-2">
              <ProjectCard {...p} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}