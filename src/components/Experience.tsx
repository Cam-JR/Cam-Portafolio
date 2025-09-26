'use client'
import React, { useState } from 'react';

// --- 1. Estructura de Datos (Ahora con 'techStack' para Experiencias) ---

type Tech = {
    name: string;
    icon?: string;
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

type TabKey = 'Experiencia Profesional' | 'Educación' | 'Idiomas' | 'Logros';

const EXPERIENCE_DATA: Experience[] = [
     
    // Tus experiencias anteriores, adaptadas para incluir techStack
    {
        title: 'Practicante de Desarrollo Web (WordPress)',
        company: 'CaféLink Peru E.I.R.L.',
        period: 'Feb 2024 – Jul 2024',
        location: 'Santiago de Surco, Lima',
        description: [
            'Participé en la migración del sitio web corporativo a WordPress, facilitando la gestión de contenidos.',
            'Actualicé información en línea (precios, imágenes, artículos), mejorando la presencia digital de la marca.',
        ],
        techStack: [
            { name: 'WordPress'},
            { name: 'HTML/CSS'}, 
            { name: 'PHP'},
        ],
    },
    {
        title: 'Practicante de Desarrollo Frontend',
        company: 'Colegio San Mateo',
        period: 'Sept 2023 – Dec 2023',
        location: 'San Juan de Lurigancho, Lima',
        description: [
            'Diseñé y desarrollé una página web con secciones de noticias, eventos y matrícula online.',
            'Implementé un sistema que mejoró la comunicación con padres durante el proceso de inscripción.',
        ],
        techStack: [
            { name: 'HTML/CSS'}, 
            { name: 'JavaScript'},
            { name: 'Bootstrap'},
        ],
    },
    {
        title: 'Practicante Desarrollo de Software',
        company: 'Max Import S.A.',
        period: 'Mar 2023 – Aug 2023',
        location: 'Chorrillos, Lima',
        description: [
            'Diseñé una base de datos en MySQL para la gestión de pedidos, optimizando procesos internos.',
            'Desarrollé un sistema de seguimiento en tiempo real, mejorando la transparencia y satisfacción del cliente.',
        ],
        techStack: [
            { name: 'MySQL'},
            { name: 'PHP'},
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
    {
        title: 'Base de Datos Relacionales - SQL',
        company: 'IDAT',
        period: 'Jun 2023 – Aug 2023',
        location: 'San Juan de Lurigancho, Lima',
    },
];

const LANGUAGES_DATA: Language[] = [
    { title: 'Inglés', level: 'Intermediate (B1-B2)' },
    { title: 'Español', level: 'Nativo' },
];

const ACHIEVEMENTS_DATA: Achievement[] = [
    { title: 'Certificación en React: De Cero a Experto', institution: 'Udemy/Fernando Herrera', year: '2023' },
    { title: 'Proyecto Final Sobresaliente', institution: 'SENATI', year: '2024' },
    { title: 'Curso de Tailwind CSS Avanzado', institution: 'Platzi', year: '2023' },
];


const TAB_DATA: Record<TabKey, { data: Experience[] | Education[] | Language[] | Achievement[] }> = {
  'Experiencia Profesional': { data: EXPERIENCE_DATA },
  'Educación': { data: EDUCATION_DATA },
  'Idiomas': { data: LANGUAGES_DATA },
  'Logros': { data: ACHIEVEMENTS_DATA },
};

const TABS: TabKey[] = Object.keys(TAB_DATA) as TabKey[];


// --- 2. Componente Reutilizable para el Item de la Línea de Tiempo (TimelineItem) ---

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
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, company, period, location, description, level, institution, year, techStack }) => {
    const isLanguage = !!level;
    const isAchievement = !!institution;
    const isExperience = !!techStack;

    return (
        <div className="relative bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-md border hover:shadow-lg transition duration-300">
            {/* Círculo de la línea de tiempo */}
            <span className="absolute -left-3 top-6 w-5 h-5 rounded-full bg-white border-2 border-indigo-500 dark:bg-gray-900 dark:border-indigo-400"></span>

            <div className="flex justify-between items-start mb-2">
                <div>
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 text-lg">
                        {title}
                    </h3>
                    {(company || level || institution) && (
                        <p className="text-sm text-indigo-600 dark:text-gray-400 flex items-center">
                            {(company || institution) && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            )}
                            {isLanguage ? level : isAchievement ? institution : company}
                        </p>
                    )}
                </div>
                <div className="text-right text-sm text-gray-600 dark:text-gray-400 min-w-max ml-4">
                    {period && (
                        <p className="flex items-center justify-end">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {period}
                        </p>
                    )}
                    {location && (
                        <p className="flex items-center justify-end">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {location}
                        </p>
                    )}
                    {year && (
                        <p className="flex items-center justify-end">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {year}
                        </p>
                    )}
                </div>
            </div>
            {description && description.length > 0 && (
                <ul className="mt-3 text-gray-700 dark:text-gray-300 text-sm list-disc pl-5 space-y-1">
                    {description.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
            {isExperience && techStack && techStack.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {techStack.map((tech: Tech, index: number) => (
                        <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 bg-indigo-800 text-white dark:bg-gray-700 dark:text-gray-100 text-xs font-medium rounded-full shadow-sm"
                        >
                            {tech.icon && (
                                <img src={tech.icon} alt={tech.name} className="h-4 w-4 mr-1 object-contain" />
                            )}
                            {tech.name}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};


// --- 3. Componente Principal `About` ---


export default function About() {
    const [activeTab, setActiveTab] = useState<TabKey>('Experiencia Profesional');
    const currentTabContent = TAB_DATA[activeTab];

    return (
        <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800">
            <h2 className="text-4xl font-extrabold mb-2 text-center text-gray-900 dark:text-white">
                Mi experiencia 
            </h2>
            <br />
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-10">
                Un viaje a través de mi crecimiento profesional, formación, idiomas y logros.
            </p>

            {/* --- Contenedor de Pestañas (Tabs) --- */}
            <div className="flex justify-center mb-10 mx-4">
                <div className="flex p-1 bg-white rounded-xl shadow-md border border-gray-100 overflow-x-auto">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition duration-300 ease-in-out ${
                                activeTab === tab
                                    ? 'bg-indigo-700 text-white shadow-lg' // Color de fondo y texto como la imagen
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                            }`}
                        >
                            {/* Iconos para las pestañas */}
                            {tab === 'Experiencia Profesional' && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.25V7l-5-5H7a2 2 0 00-2 2v16a2 2 0 002 2h6.75M17 17l4-4m-4 4l-4-4m4 4V13" />
                                </svg>
                            )}
                            {tab === 'Educación' && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            )}
                            {tab === 'Idiomas' && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 0115 10c1.558-1.56 2.594-3.35 2.737-5.148M11.5 9h-10M11 21v-7a3 3 0 016 0v7M3 21h18" />
                                </svg>
                            )}
                            {tab === 'Logros' && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697A3.42 3.42 0 007 9.111V12h2.222a2.105 2.105 0 011.5.6l5.272 5.272c.11.11.11.283 0 .393l-1.374 1.374a.733.733 0 01-1.047 0L10.3 15.3l-1.428 1.428a1.2 1.2 0 01-1.704 0L4.76 13.72a1.2 1.2 0 010-1.704l2.52-2.522z" />
                                </svg>
                            )}
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* --- Contenido de la Pestaña Activa (Línea de Tiempo) --- */}
            <div className="container max-w-3xl mx-auto px-6">
                {/* El título principal de la sección ya está arriba, no necesitamos otro aquí */}
                
                {/* Contenedor de la Línea de Tiempo */}
                <div className="relative border-l-2 border-gray-300 dark:border-gray-600 pl-6 space-y-8"> {/* Color de la línea de tiempo ajustado */}
                                        {currentTabContent.data.map((item: any, index: number) => (
                                            <TimelineItem
                                                key={index}
                                                title={item.title}
                                                company={item.company}
                                                period={item.period}
                                                location={item.location}
                                                description={item.description}
                                                level={item.level}
                                                institution={item.institution}
                                                year={item.year}
                                                techStack={item.techStack}
                                            />
                                        ))}
                </div>
            </div>
        </section>
    );
}