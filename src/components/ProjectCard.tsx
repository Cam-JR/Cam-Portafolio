// projectcard.tsx
'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  id?: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo?: string;
  isActive?: boolean;
};

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  github,
  demo,
  isActive = false,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)' });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left; // x dentro del elemento
    const y = e.clientY - rect.top;  // y dentro del elemento
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const maxRotate = 8; // grados
    const rotateY = ((x - cx) / cx) * maxRotate * -1; // invertir para efecto natural
    const rotateX = ((y - cy) / cy) * maxRotate;

    const scale = isActive ? 1.04 : 1.02;
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(${scale})`,
    });
  };

  const handleLeave = () => {
    setStyle({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)' });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ translateY: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      style={style}
      className={`bg-white dark:bg-indigo-800 rounded-xl shadow-lg overflow-hidden transform-gpu will-change-transform border ${
        isActive ? 'ring-2 ring-indigo-400/30' : 'ring-0'
      }`}
    >
      <div className="relative w-full aspect-[16/15] overflow-hidden">

        {/* Fondo censurado */}
        <img
          src={image}
          alt={`${title} blurred`}
          className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
        />
        {/* Imagen principal */}
        <img
          src={image}
          alt={title}
          className="relative w-full h-full object-contain transition-all duration-200"
          style={{
          transform: isActive ? 'scale(1.06) translateZ(20px)' : 'scale(1.02)',
          }}
        />
        {/* Capa brillante sutil */}
        <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-0 group-hover:opacity-30 transition-opacity" />
      </div>
 

      <div className="p-5">
        <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="px-2 py-1 bg-indigo-500 text-white rounded-md text-xs">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-indigo-500">
          <a href={github} target="_blank" rel="noreferrer" className="hover:underline">
            GitHub
          </a>
          {demo ? (
            <a href={demo} target="_blank" rel="noreferrer" className="hover:underline">
              Demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
