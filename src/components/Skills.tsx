'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- Estructura de Datos (sin cambios) ---

type Skill = {
  name: string;
  level: number;
  category: string;
  icon?: string;
};

type SkillCategory = 'Programming' | 'Frontend' | 'Backend' | 'Tools';

const SKILLS_DATA: Record<SkillCategory, Skill[]> = {
  Programming: [
    { name: 'JavaScript', level: 40, category: 'Language', icon: '/icons/javascript.svg' },
    { name: 'PHP', level: 40, category: 'Language', icon: '/icons/php.svg' },
  ],
  Frontend: [
    { name: 'React.js', level: 40, category: 'Framework', icon: '/icons/react.svg' },
    { name: 'Next.js', level: 40, category: 'Framework', icon: '/icons/nextdotjs.svg' },
    { name: 'Tailwind CSS', level: 40, category: 'CSS', icon: '/icons/tailwindcss.svg' },
    { name: 'HTML5', level: 75, category: 'Markup', icon: '/icons/html.svg' },
    { name: 'CSS3', level: 75, category: 'Styling', icon: '/icons/css.svg' },
    { name: 'Bootstrap', level: 75, category: 'Framework', icon: "/icons/bootstrap.svg" },
  ],
  Backend: [
    { name: 'Laravel', level: 40, category: 'Framework', icon: '/icons/laravel.svg' },
    { name: 'MySQL', level: 76, category: 'Database', icon: '/icons/mysql.svg' },
  ],
  Tools: [
    { name: 'Git', level: 75, category: 'Version Control', icon: '/icons/git.svg' },
    { name: 'GitHub', level: 75, category: 'Version Control', icon: '/icons/github1.svg' },
    { name: 'Netlify', level: 80, category: 'Deployment', icon: '/icons/netlify.svg' },
    { name: 'Figma', level: 40, category: 'Design', icon: '/icons/figma.svg' },
    { name: 'VS Code', level: 100, category: 'Editor', icon: '/icons/vscode.svg' },
    { name: 'Notion', level: 100, category: 'Productivity', icon: '/icons/notion.svg' },
  ],
};

const TABS: SkillCategory[] = Object.keys(SKILLS_DATA) as SkillCategory[];

// --- Variantes de Animación ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Retraso entre la aparición de cada tarjeta
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// --- Componente Reutilizable para la Tarjeta de Habilidad ---
interface SkillCardProps {
  level: number;
  name: string;
  category: string;
  icon?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ level, name, category, icon }) => {
  return (
    <motion.div
      className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
      variants={itemVariants}
    >
      {icon && (
        <img src={icon} alt={name} className="w-12 h-12 object-contain mb-3" />
      )}
      <h4 className="text-lg font-semibold text-gray-800 mb-1">{name}</h4>
      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full mb-3">
        {category}
      </span>
      <div className="w-full flex justify-between items-center mb-2 px-1">
        <span className="text-md font-bold text-gray-700">{level}%</span>
        <div className="relative flex-grow h-2 bg-gray-200 rounded-full overflow-hidden ml-3">
          <div
            className="h-full bg-indigo-600 rounded-full"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Componente Principal `Skills` con Animación al hacer Scroll ---

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>('Programming');

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold mb-10 text-center text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        {/* --- Contenedor de Pestañas (Tabs) --- */}
        <div className="flex justify-center mb-10 mx-4"> 
          <div className="flex p-1 bg-white rounded-xl shadow-md border border-gray-100 overflow-x-auto whitespace-nowrap">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center px-3 py-2 sm:px-4 rounded-lg text-sm font-medium transition duration-300 ease-in-out ${
                  activeTab === tab
                    ? 'bg-indigo-700 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }`}
              >
                {tab === 'Programming' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 4l-4 4 4 4" />
                  </svg>
                )}
                {tab === 'Frontend' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1l-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
                {tab === 'Backend' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5v-3m0 0l-4-4m4 4l-4 4m-4-4H3" />
                  </svg>
                )}
                {tab === 'Tools' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* --- Contenido de las Habilidades (Grid) con Animación al Scroll --- */}
        <motion.div
          key={activeTab} // Mantener el key para la transición de pestañas
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // <-- Usa whileInView para animar al entrar en la vista
          viewport={{ amount: 0.2 }} // Ajusta 'amount' según cuánto del elemento debe ser visible
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          {SKILLS_DATA[activeTab].map((skill: Skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              level={skill.level}
              category={skill.category}
              icon={skill.icon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}