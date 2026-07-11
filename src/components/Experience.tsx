'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaAward, FaExternalLinkAlt
} from 'react-icons/fa';

// --- Estructura de Datos ---
type Tech = {
  name: string;
};

type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  techStack: Tech[];
};

type Achievement = {
  title: string;
  institution: string;
  year: string;
  certificateUrl?: string;
};

//EXPERIENCIA PROFESIONAL

const EXPERIENCE_DATA: Experience[] = [
  {
    title: 'Desarrolladora Informática',
    company: 'TECSIS INGENIERIA S.A.C.',
    period: 'Ene 2025 – Abr 2025',
    location: 'San Isidro, Lima',
    description: [
    'Desarrollé e implementé soluciones de automatización de procesos administrativos utilizando Python y CustomTkinter, optimizando los tiempos operativos del equipo de Expediting.',
    'Automaticé el envío masivo de correos personalizados mediante la integración con Microsoft Graph API y autenticación OAuth 2.0, eliminando procesos manuales de comunicación con proveedores.',
    'Desarrollé una solución automatizada en Excel para el cruce, validación y migración de información entre múltiples plantillas, reduciendo tareas repetitivas y mejorando la eficiencia operativa.',
    'Diseñé y desarrollé un sistema ERP interno para la gestión operativa del área, incorporando un módulo de vacaciones que permitió centralizar solicitudes, mejorar el cálculo de días disponibles y fortalecer la trazabilidad de la información.',
    'Implementé un módulo de generación automática de reportes de Expediting, integrando información proveniente de SAP con plantillas corporativas para agilizar la distribución y análisis de datos.',
    'Realicé el levantamiento y análisis de requerimientos funcionales con usuarios finales, identificando necesidades del negocio y transformándolas en soluciones tecnológicas escalables y eficientes.',
  ],
    techStack: [
      { name: 'Python' },
      { name: 'CustomTkinter' },
      { name: 'Microsoft Graph API' },
      { name: 'OAuth 2.0' },
      { name: 'Excel (xlwings)' },
      { name: 'SAP Integration' },
      { name: 'SQL Server' },
      { name: 'Git' },
      { name: 'GitHub' },
    ],
  },
  {
    title: 'WordPress Developer Intern',
    company: 'CaféLink Peru E.I.R.L.',
    period: 'Feb 2024 – Jul 2024',
    location: 'Santiago de Surco, Lima',
    description: [
      'Rediseñé y migré el sitio web corporativo desde HTML/CSS hacia WordPress, facilitando la administración de contenidos y mejorando la experiencia de gestión interna.',
      'Implementé y optimicé una plataforma e-commerce con WordPress y WooCommerce, mejorando la estructura del sitio, rendimiento y capacidad de escalamiento.',
      'Desarrollé la integración de un chatbot conectado a WhatsApp API para automatizar la atención de consultas frecuentes y mejorar la comunicación con clientes.',
      'Gestioné la actualización y mantenimiento de contenido digital (productos, precios, imágenes y artículos del blog), fortaleciendo la presencia online de la empresa.',
    ],
    techStack: [
      { name: 'WordPress' },
      { name: 'WooCommerce' },
      { name: 'PHP' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'WhatsApp API' },
      { name: 'MySQL' },
    ],
  },
  {
    title: 'Front-End Web Developer Intern',
    company: 'Colegio San Mateo',
    period: 'Sept 2023 – Dec 2023',
    location: 'San Juan de Lurigancho, Lima',
    description: [
      'Diseñé y desarrollé un sitio web institucional con secciones de noticias, eventos y matrícula online, mejorando la difusión de información académica.',
      'Implementé interfaces web responsivas y componentes interactivos orientados a mejorar la comunicación entre la institución educativa y los padres de familia.',
      'Colaboré en el diseño de la interfaz utilizando principios de experiencia de usuario (UX/UI) y buenas prácticas de desarrollo frontend.',
    ],
    techStack: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'Bootstrap' },
      { name: 'Figma' },
      { name: 'Git' },
      { name: 'GitHub' },
    ],
  },
  {
    title: 'Junior Web Developer Intern',
    company: 'Max Import S.A.',
    period: 'Mar 2023 – Aug 2023',
    location: 'Chorrillos, Lima',
    description: [
      'Participé en el desarrollo de una solución web para la gestión de pedidos, diseñando una base de datos MySQL para organizar y centralizar la información operativa.',
      'Diseñé y estructuré tablas, relaciones y consultas SQL para optimizar el almacenamiento y acceso a los datos del negocio.',
      'Colaboré en la creación y configuración de una página web en Wix para la presentación de productos y servicios empresariales.',
      'Desarrollé funcionalidades para el seguimiento de pedidos, mejorando la visibilidad del proceso y facilitando el control de operaciones.',
    ],
    techStack: [
      { name: 'PHP' },
      { name: 'MySQL' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'SQL' },
      { name: 'Git' },
      { name: 'GitHub' },
    ],  
  },
];

//CERTIFICACIONES

const ACHIEVEMENTS_DATA: Achievement[] = [
  { title: 'Intermediate Program Of English', institution: 'Britanico', year: '2026', certificateUrl: 'https://drive.google.com/file/d/1TFRx1KheYSIK6f0Qyle9ff6-U1Kmzhdf/view?usp=sharing' },
  { title: 'Desarrollo Web Completo con HTML5, CSS3, JS, AJAX, PHP y MySQL', institution: 'Udemy', year: '2025', certificateUrl: 'https://drive.google.com/file/d/10fqTtbzOZhS2wzbafRhPz6yFUk8Yy1aO/view?usp=sharing' },
  { title: 'WordPress', institution: 'Udemy', year: '2025', certificateUrl: 'https://drive.google.com/file/d/1_p0f6VxUnOqybvJoYW-rx0j6lAahWaED/view?usp=sharing' },
  { title: 'Universidad Desarrollo Web - Front-end Web Developer', institution: 'Udemy', year: '2025', certificateUrl: 'https://drive.google.com/file/d/19DXHlBPByTLVqDTAZLvzVWlGFKXeZtbl/view?usp=sharing' },
  { title: 'Complete Web & Mobile Designer: UI/UX, Figma, +more', institution: 'Udemy', year: '2025', certificateUrl: 'https://drive.google.com/file/d/1rJUyFU9g-R51LkCUB_Pfct0MtKBBTQnX/view?usp=sharing' },
  { title: 'SQL BASE DE DATOS RELACIONALES', institution: 'IDAT', year: '2023', certificateUrl: 'https://drive.google.com/file/d/1l3v5brKFHdIhpTHh7tDMO5P-nr7qS-fj/view?usp=sharing' },
  { title: 'Database Design', institution: 'Oracle Academy', year: '2022', certificateUrl: '#' },
];

// Componente de tarjeta de experiencia
interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  techStack: Tech[];
  index: number;
  expanded: boolean;
  onToggle: (index: number) => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title, company, period, location, description, techStack, index, expanded, onToggle
}) => {
  return (
    <motion.div
      className="relative bg-gradient-to-br from-[#03020D] to-[#0A0A1F] p-6 rounded-xl shadow-lg border border-[#4F39F6]/25 hover:border-[#4F39F6] transition-all duration-300 hover:shadow-lg hover:shadow-[#4F39F6]/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      {/* Punto de la línea */}
      <span className="absolute -left-5 top-8 w-4 h-4 rounded-full bg-gradient-to-br from-[#4F39F6] to-[#03020D] border-4 border-[#02010A]"></span>

      {/* Header con Toggle */}
      <div
        className="flex items-start justify-between cursor-pointer"
        onClick={() => onToggle(index)}
      >
        <div className="flex-1">
          <h3 className="font-bold text-white text-lg hover:text-[#CFC7FF] transition-colors">
            {title}
          </h3>
          <p className="text-sm text-[#CFC7FF] mt-1 flex items-center gap-1">
            <FaBriefcase className="text-xs" />
            {company}
          </p>
        </div>

        {/* Flechita Toggle */}
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4 text-[#4F39F6] text-xl flex-shrink-0"
        >
          ▼
        </motion.div>
      </div>

      {/* Fecha y ubicación */}
      <div className="text-xs text-gray-400 mt-3 flex flex-wrap gap-3">
        <p className="flex items-center gap-1">
          <FaCalendarAlt className="w-3 h-3 text-[#4F39F6]" />
          {period}
        </p>
        <p className="flex items-center gap-1">
          <FaMapMarkerAlt className="w-3 h-3 text-[#4F39F6]" />
          {location}
        </p>
      </div>

      {/* Contenido expandible */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-4"
          >
            {/* Descripción */}
            <ul className="text-gray-300 text-sm list-disc pl-5 space-y-2 mb-4">
              {description.map((item, i) => (
                <li key={i} className="leading-relaxed">{item}</li>
              ))}
            </ul>

            {/* Tech Stack */}
            {techStack && (
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#4F39F6] to-[#03020D] text-white text-xs font-semibold rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Componente de tarjeta de certificado
interface CertificateCardProps {
  title: string;
  institution: string;
  year: string;
  certificateUrl?: string;
  index: number;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  title, institution, year, certificateUrl, index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group relative bg-gradient-to-br from-[#03020D] to-[#0A0A1F] p-6 rounded-xl border border-[#4F39F6]/25 hover:border-[#4F39F6] hover:shadow-lg hover:shadow-[#4F39F6]/20 transition-all duration-300 h-full flex flex-col"
    >
      {/* Header con icono y año */}
      <div className="flex items-start justify-between mb-4 pb-4 border-b border-[#29286E]">
        <div className="p-2.5 bg-[#4F39F6] rounded-lg flex items-center justify-center">
          <FaAward className="text-white text-lg" />
        </div>
        <span className="text-xs font-bold text-[#F4F0FF] bg-[#4F39F6]/20 px-3 py-1 rounded-full">
          {year}
        </span>
      </div>

      {/* Título */}
      <h3 className="text-white font-bold text-sm mb-3 line-clamp-3 group-hover:text-[#CFC7FF] transition-colors flex-grow">
        {title}
      </h3>

      {/* Institución */}
      <p className="text-[#CFC7FF] text-xs font-semibold mb-4">
        {institution}
      </p>

      {/* Botón Ver Certificado */}
      <a
        href={certificateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-[#4F39F6] hover:bg-[#3D2AC4] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 w-full"
      >
        <FaExternalLinkAlt className="w-3.5 h-3.5" />
        Ver Certificado
      </a>
    </motion.div>
  );
};

// --- Componente Principal ---
type TabKey = 'experience' | 'certificates';

export default function Experience() {
  const [expandedIndexes, setExpandedIndexes] = useState<Set<number>>(new Set());
  const [activeTab, setActiveTab] = useState<TabKey>('experience');

  const toggleExpand = (index: number) => {
    const newSet = new Set(expandedIndexes);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setExpandedIndexes(newSet);
  };

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'experience', label: 'Experiencia Profesional' },
    { key: 'certificates', label: 'Certificados' },
  ];

  return (
    <section id="experience" className="relative overflow-hidden py-20 bg-gradient-to-b from-[#02010A] via-[#0A0A1F] to-[#1a1a3f] transition-colors duration-500">
      {/* Título */} 
        <div className="text-center mb-10 px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#4F39F6] via-[#6C5CE7] to-[#03020D] bg-clip-text text-transparent">
                {activeTab === 'experience'
                  ? 'Mi Experiencia'
                  : 'Mis Certificados'}
              </h2>

              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                {activeTab === 'experience'
                  ? 'Un viaje a través de mi crecimiento profesional.'
                  : 'Certificaciones y cursos que respaldan mis conocimientos y habilidades.'}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      <div className="flex flex-wrap justify-center gap-3 px-4 mb-12">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                isActive
              ? 'border-[#4F39F6] bg-[#4F39F6]/20 text-[#F4F0FF] shadow-lg shadow-[#4F39F6]/20'
              : 'border-[#4F39F6]/30 bg-[#03020D] text-gray-300 hover:border-[#4F39F6] hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {activeTab === 'experience' ? (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative border-l-4 border-[#4F39F6]/60 pl-8 space-y-4 transition-colors duration-500">
                {EXPERIENCE_DATA.map((experience, index) => (
                  <ExperienceCard
                    key={index}
                    {...experience}
                    index={index}
                    expanded={expandedIndexes.has(index)}
                    onToggle={toggleExpand}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 auto-rows-fr">
                {ACHIEVEMENTS_DATA.map((cert, index) => (
                  <CertificateCard
                    key={index}
                    {...cert}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decoración de fondo */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#4F39F6]/10 rounded-full blur-3xl pointer-events-none opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#03020D]/50 rounded-full blur-3xl pointer-events-none opacity-20"></div>
    </section>
  );
}
