'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaGlobe, FaGraduationCap, FaBriefcase, FaAward
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

type Education = {
  title: string;
  company: string;
  period: string;
  location: string;
};

type Language = {
  title: string;
  level: string;
};

type Achievement = {
  title: string;
  institution: string;
  year: string;
};

// Tipo de Unión para los datos de cualquier pestaña (Corrige el error de 'any')
type TimelineItemData = Experience | Education | Language | Achievement; 

type TabKey = 'Experiencia Profesional' | 'Educación' | 'Idiomas' | 'Cursos';

const EXPERIENCE_DATA: Experience[] = [
  
  {
    title: 'Desarrolladora Web / Proyectos Personales',
    company: 'Independiente',
    period: 'Mar 2025 – Presente',
    location: 'Lima, Perú',
    description: [
      'Desarrollo de proyectos personales enfocados en el front-end, aplicando buenas prácticas y nuevas tecnologías.',
      'Creación de interfaces interactivas con React y consumo de APIs.',
      'Optimización de rendimiento, diseño responsivo y control de versiones con Git.',
      'Participación en comunidades y retos de programación para seguir fortaleciendo habilidades técnicas.',
      'Mantuve un aprendizaje continuo sobre frameworks modernos y herramientas de desarrollo.',
    ],
    techStack: [
      { name: 'React' },
      { name: 'JavaScript' },
      { name: 'CSS' },
      { name: 'Git' },
      { name: 'GitHub' },
    ],
  },
  {
    title: 'Practicante de Desarrollo Web (WordPress)',
    company: 'CaféLink Peru E.I.R.L.',
    period: 'Feb 2024 – Jul 2024',
    location: 'Santiago de Surco, Lima',
    description: [ 
      'Participé en el rediseño del sitio web corporativo, migrándolo de HTML/CSS a WordPress para mejorar la gestión de contenidos.',
      'Migré y optimicé un sitio e-commerce con WordPress y WooCommerce, mejorando el rendimiento y la escalabilidad.',
      'Implementé un chatbot conectado a WhatsApp API (Wasapi) para automatizar consultas.',
      'Actualicé información en línea (precios, imágenes, artículos del blog), fortaleciendo la presencia digital de la marca.',
    ],
    techStack: [
      { name: 'WordPress' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'PHP' },
      { name: 'Wasapi' },
    ],
  },
  {
    title: 'Practicante de Desarrollo Frontend',
    company: 'Colegio San Mateo',
    period: 'Sept 2023 – Dec 2023',
    location: 'San Juan de Lurigancho, Lima',
    description: [
      'Diseñé y desarrollé una página web con secciones de noticias, eventos y matrícula online.',
      'Implementé un sistema que mejoró la comunicación con padres durante el proceso de matricula.',
    ],
    techStack: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'Bootstrap' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Figma' },
    ],
  },
  {
    title: 'Practicante Desarrollo de Software',
    company: 'Max Import S.A.',
    period: 'Mar 2023 – Aug 2023',
    location: 'Chorrillos, Lima',
    description: [
      'Participé en un proyecto en equipo para crear una base de datos completa en MySQL que registraba y organizaba todos los pedidos.',
      'Diseñé y estructuré la base de datos para optimizar el flujo de información.',
      'Colaboré en la creación de una página en Wix orientada a mostrar los productos y servicios de la empresa.',
      'Desarrollé un sistema de seguimiento de pedidos en tiempo real, aumentando la transparencia y la eficiencia del proceso.',
    ],
    techStack: [
      { name: 'MySQL' },
      { name: 'PHP' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' }, 
      { name: 'Git' },
      { name: 'GitHub' },
    ],
  },
];

const EDUCATION_DATA: Education[] = [
  {
    title: 'Ingeniería de Software con Inteligencia Artificial (IA)',
    company: 'SENATI',
    period: 'Feb 2021 – Jun 2024',
    location: 'Villa el Salvador, Lima',
  }, 
];

const LANGUAGES_DATA: Language[] = [
  { title: 'Inglés', level: 'Intermediate (B1-B2)' },
  { title: 'Español', level: 'Nativo' },
];

const ACHIEVEMENTS_DATA: Achievement[] = [
  { title: 'Especialización en Programación Web y Apps', institution: 'Netzun', year: 'En Proceso' },
  { title: 'Universidad Desarrollo Web - Front-end Web Developer', institution: 'Udemy', year: 'Noviembre 2025' },
  { title: 'Complete Web & Mobile Designer: UI/UX, Figma, +more', institution: 'Udemy', year: 'Oct 2025' },
  { title: 'Desarrollo Web Completo con HTML5, CSS3, JS, AJAX, PHP y MySQL', institution: 'Udemy', year: 'Jul 2025' },
  { title: 'Base de Datos Relacionales - SQL', institution: 'IDAT', year: 'Jun - Aug 2023' },
];

const TAB_DATA: Record<TabKey, { data: TimelineItemData[] }> = {
  'Experiencia Profesional': { data: EXPERIENCE_DATA },
  'Educación': { data: EDUCATION_DATA },
  'Idiomas': { data: LANGUAGES_DATA },
  'Cursos': { data: ACHIEVEMENTS_DATA },
};

const TABS: TabKey[] = Object.keys(TAB_DATA) as TabKey[];

// --- Componente Reutilizable para el Item de la Línea de Tiempo ---
interface TimelineItemProps {
  title: string;
  company?: string;
  period?: string;
  location?: string;
  description?: string[];
  level?: string;
  institution?: string;
  year?: string;
  techStack?: Tech[];
  activeTab: TabKey;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title, company, period, location, description, level, institution, year, techStack, activeTab
}) => {
  const isLanguage = activeTab === 'Idiomas';
  const isAchievement = activeTab === 'Cursos';
  const isEducation = activeTab === 'Educación';
  const isExperience = activeTab === 'Experiencia Profesional';

  return (
    <motion.div
      className="relative bg-white p-5 rounded-2xl shadow-md border hover:shadow-lg transition duration-300 mb-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Punto de la línea */}
      <span className="absolute -left-3 top-6 w-5 h-5 rounded-full bg-white border-2 border-indigo-500 dark:bg-gray-900  "></span>

      <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
        <div className="sm:w-3/5 w-full">
          {/* Título SIN ícono */}
          <h3 className="font-bold text-gray-800 text-lg">
            {title}
          </h3>

          {/* Subtítulo */}
          {(company || level || institution) && (
            <p className="text-sm text-indigo-600 mt-1 flex items-center">
              {isEducation && <FaBuilding className="text-base mr-1 text-gray-400" />}
              {isAchievement && <FaBuilding className="text-base mr-1 text-gray-400" />}
              {isExperience && <FaBriefcase className="text-base mr-1 text-gray-400" />}
              {isLanguage ? level : isAchievement ? institution : company}
            </p>
          )}
        </div>

        {/* Periodo / ubicación / año */}
        <div className="text-left sm:text-right text-sm text-gray-600 sm:min-w-max sm:ml-4 mt-2 sm:mt-0">
          {period && (
            <p className="flex items-center sm:justify-end">
              <FaCalendarAlt className="h-4 w-4 mr-1 text-gray-400" />
              {period}
            </p>
          )}
          {location && (
            <p className="flex items-center sm:justify-end">
              <FaMapMarkerAlt className="h-4 w-4 mr-1 text-gray-400" />
              {location}
            </p>
          )}
          {year && (
            <p className="flex items-center sm:justify-end">
              <FaCalendarAlt className="h-4 w-4 mr-1 text-gray-400" />
              {year}
            </p>
          )}
        </div>
      </div>

      {description && (
        <ul className="mt-3 text-gray-700 text-sm list-disc pl-5 space-y-1">
          {description.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )}

      {isExperience && techStack && (
        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <span key={i} className="inline-flex items-center px-3 py-1 bg-gray-800 text-white dark:bg-gray-700 dark:text-gray-100 text-xs font-medium rounded-full shadow-sm">
              {tech.name}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

// --- Componente Principal ---
export default function About() {
  const [activeTab, setActiveTab] = useState<TabKey>('Experiencia Profesional');
  const currentTabContent = TAB_DATA[activeTab];

  return (
    <section id="experience" className="py-16 bg-gray-50  transition-colors duration-500">
      <h2 className="text-4xl font-extrabold mb-7 text-center text-gray-900   transition-colors duration-500">
        Mi experiencia
      </h2>
      <p className="text-base text-gray-600   text-center mb-7 transition-colors duration-500">
        Un viaje a través de mi crecimiento profesional, formación, idiomas y cursos.
      </p>

      {/* Tabs */}
      <div className="flex justify-center mb-10 px-4">
        <div className="flex p-1 bg-white  rounded-xl shadow-md border border-gray-100   overflow-x-auto whitespace-nowrap max-w-full transition-colors duration-500">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center px-3 py-2 sm:px-4 rounded-lg text-sm font-medium transition duration-300 ${
                activeTab === tab
                  ? 'bg-indigo-700 text-white shadow-lg'
                  : 'text-gray-600   hover:bg-gray-100   hover:text-gray-800 dark:hover:text-white'
              }`}
            >
              {tab === 'Experiencia Profesional' && <FaBriefcase className="h-5 w-5 mr-1 sm:mr-2" />}
              {tab === 'Educación' && <FaGraduationCap className="h-5 w-5 mr-1 sm:mr-2" />}
              {tab === 'Idiomas' && <FaGlobe className="h-5 w-5 mr-1 sm:mr-2" />}
              {tab === 'Cursos' && <FaAward className="h-5 w-5 mr-1 sm:mr-2" />}
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Contenido con Framer Motion */}
      <div className="container max-w-3xl mx-auto px-6">
        <div className="relative border-l-2 border-gray-300 dark:border-gray-600 pl-6 space-y-8 transition-colors duration-500">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {currentTabContent.data.map((item: TimelineItemData, index: number) => (
                <TimelineItem
                  key={index}
                  title={item.title}
                  // Se usan Type Guards ('propiedad' in item) para verificar si la propiedad existe
                  // en el objeto antes de acceder a ella, evitando el error de TypeScript.
                  company={('company' in item) ? item.company : undefined}
                  period={('period' in item) ? item.period : undefined} // ESTA FUE LA CORRECCIÓN CLAVE
                  location={('location' in item) ? item.location : undefined}
                  description={('description' in item) ? item.description : undefined}
                  level={('level' in item) ? item.level : undefined}
                  institution={('institution' in item) ? item.institution : undefined}
                  year={('year' in item) ? item.year : undefined}
                  techStack={('techStack' in item) ? item.techStack : undefined}
                  activeTab={activeTab}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}