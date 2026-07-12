'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  id?: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  isActive?: boolean;
  darkMode?: boolean;
  onClick?: () => void;
};

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  github,
  demo,
  isActive = false,
  darkMode = false,
  onClick,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
  });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const maxRotate = 8;

    const rotateY = ((x - cx) / cx) * maxRotate * -1;
    const rotateX = ((y - cy) / cy) * maxRotate;

    const scale = isActive ? 1.04 : 1.02;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(
        2
      )}deg) rotateY(${rotateY.toFixed(2)}deg) scale(${scale})`,
    });
  };

  const handleLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      whileHover={{ translateY: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      style={style}
      className={`rounded-2xl overflow-hidden transform-gpu will-change-transform transition duration-500 
        ${
          darkMode
            ? 'bg-[#03020D]/90 border border-[#4F39F6]/30 shadow-lg shadow-[#4F39F6]/15 backdrop-blur-md text-gray-100'
            : 'bg-white border border-[#4F39F6]/20 shadow-md text-gray-900'
        } ${isActive ? 'ring-2 ring-[#4F39F6]/40' : 'ring-0'}`}
    >
      <div className="relative w-full aspect-[16/12] overflow-hidden">
        <img
          src={image}
          alt={`${title} blurred`}
          className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
        />

        <img
          src={image}
          alt={title}
          className="relative w-full h-full object-contain transition-all duration-200"
          style={{
            transform: isActive
              ? 'scale(1.06) translateZ(20px)'
              : 'scale(1.02)',
          }}
        />
      </div>

      <div className="p-5">
        <h3
          className={`text-lg font-bold mb-1 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-sm mb-3 line-clamp-3 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                darkMode
                  ? 'bg-[#4F39F6]/15 text-[#EDE9FF] border border-[#4F39F6]/30'
                  : 'bg-[#F2EBFF] text-[#4F39F6]'
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        <div
          className={`flex gap-4 ${
            darkMode ? 'text-[#CFC7FF]' : 'text-[#4F39F6]'
          }`}
        >
          {github && github !== '#' && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          )}

          {demo && demo !== '#' && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}