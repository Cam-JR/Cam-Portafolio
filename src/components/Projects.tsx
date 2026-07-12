'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import projects from '../lib/projects';
import ProjectCard from './ProjectCard';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  category?: string;
};

export default function Projects() {
  const categories = ['Todos', 'Website', 'Blog', 'Personal', 'Gestión'] as const;
  type Category = typeof categories[number];

  const [activeCategory, setActiveCategory] = useState<Category>('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = (projects as Project[])
  .filter((p) => (activeCategory === 'Todos' ? true : p.category === activeCategory));

  return (
    <section
      id="projects"
      className="py-12 relative overflow-hidden bg-[#0a0a1f] text-gray-100"
    >
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 -z-10"
      >
        <div className="bg-gradient-to-br from-[#0a0a1f] via-[#1e1e2f] to-black w-full h-full" />
      </motion.div>

      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center drop-shadow-md text-transparent bg-clip-text bg-gradient-to-r from-[#4F39F6] via-[#6C5CE7] to-[#03020D]">
        Mi Portafolio
        <br />
        <br />
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center mb-8 gap-4 flex-wrap">
          {categories.map((cat) => {
            const active = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? 'border-[#4F39F6] bg-[#4F39F6]/20 text-[#F4F0FF] shadow-lg shadow-[#4F39F6]/20'
                    : 'border-[#4F39F6]/30 bg-[#03020D] text-gray-300 hover:border-[#4F39F6] hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <ProjectCard
                {...p}
                isActive={false}
                darkMode={true}
                onClick={() => setSelectedProject(p)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl rounded-2xl border border-[#4F39F6]/30 bg-[#03020D] p-6 shadow-2xl shadow-[#4F39F6]/20"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4F39F6]">
                  {selectedProject.category ?? 'Proyecto'}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-full border border-[#4F39F6]/40 px-3 py-1 text-sm text-[#F4F0FF]"
              >
                Cerrar
              </button>
            </div>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="mt-5 h-56 w-full rounded-xl object-cover"
            />

            <p className="mt-5 text-sm leading-7 text-gray-300">
              {selectedProject.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {selectedProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#4F39F6]/30 bg-[#4F39F6]/10 px-3 py-1 text-xs font-semibold text-[#EDE9FF]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {selectedProject.github && selectedProject.github !== '#' && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-[#4F39F6] px-4 py-2 text-sm font-semibold text-white hover:bg-[#3D2AC4]"
                >
                  GitHub
                </a>
              )}

              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-[#4F39F6]/40 px-4 py-2 text-sm font-semibold text-[#EDE9FF] hover:bg-[#4F39F6]/10"
                >
                  Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}