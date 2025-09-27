'use client';
import React, { useState } from 'react';
import { 
    FaBuilding, FaAward, FaCalendarAlt, FaMapMarkerAlt, FaGlobe, FaGraduationCap, FaUser, FaBriefcase, FaEnvelope, FaPhone, FaCircle
} from 'react-icons/fa';

// --- 1. Estructura de Datos ---
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
            { name: 'HTML'},
            { name: 'CSS'},
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
            { name: 'HTML'},
            { name: 'CSS'},
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
    { title: 'Complete Web & Mobile Designer: UI/UX, Figma, +more', institution: 'Udemy/Andrei Neagoie & Daniel Schifano', year: 'En Proceso' },
    { title: 'Especialización en Programación Web y Apps', institution: 'Netzun', year: 'En Proceso' },
    { title: 'Desarrollo Web Completo con HTML5, CSS3, JS, AJAX, PHP y MySQL', institution: 'Udemy/Juan Pablo de la Torre Valdez', year: ' Jul 2025' },
    { title: 'Diseño Web Moderno Desde Cero a Avanzado HTML5 y CSS3', institution: 'Udemy/Jordan Alexander', year: 'May 2025' },
    { title: 'Base de Datos Relacionales - SQL', institution: 'IDAT', year: 'Jun - Aug 2023' },
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
    activeTab: TabKey; // Propiedad para saber qué pestaña está activa
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, company, period, location, description, level, institution, year, techStack, activeTab }) => {
    const isLanguage = activeTab === 'Idiomas';
    const isAchievement = activeTab === 'Logros';
    const isEducation = activeTab === 'Educación';
    const isExperience = activeTab === 'Experiencia Profesional';

    // Determina qué ícono principal mostrar basado en el tipo de contenido
    const getIcon = () => {
        if (isAchievement) {
            return <FaAward className="text-xl text-gray-500 dark:text-gray-400" />;
        }
        if (isLanguage) {
            return <FaGlobe className="text-xl text-gray-500 dark:text-gray-400" />;
        }
        if (isEducation) {
            return <FaGraduationCap className="text-xl text-gray-500 dark:text-gray-400" />;
        }
        if (isExperience) {
            return <FaBriefcase className="text-xl text-gray-500 dark:text-gray-400" />;
        }
        return null;
    };

    return (
        <div className="relative bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-md border hover:shadow-lg transition duration-300">
            {/* Círculo de la línea de tiempo */}
            <span className="absolute -left-3 top-6 w-5 h-5 rounded-full bg-white border-2 border-indigo-500 dark:bg-gray-900 dark:border-indigo-400"></span>

            {/* Contenedor del Título y la información */}
            <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                <div className="sm:w-3/5 w-full">
                    {/* Título e Ícono principal */}
                    <div className="flex items-center mb-1">
                        {isLanguage || isAchievement ? (
                            <div className="p-2 mr-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                                {getIcon()}
                            </div>
                        ) : null}
                        <h3 className="font-bold text-gray-800 dark:text-gray-100 text-lg">
                            {title}
                        </h3>
                    </div>

                    {/* Subtítulo con ícono */}
                    {(company || level || institution) && (
                        <p className={`text-sm text-indigo-600 dark:text-gray-400 mt-1 flex items-center ${isLanguage || isAchievement ? 'ml-12' : ''}`}>
                            {isEducation && (
                                <FaBuilding className="text-base mr-1 text-gray-400" />
                            )}
                            {isAchievement && (
                                <FaAward className="text-base mr-1 text-gray-400" />
                            )}
                            {isExperience && (
                                <FaBriefcase className="text-base mr-1 text-gray-400" />
                            )}
                            {isLanguage ? level : isAchievement ? institution : company}
                        </p>
                    )}
                </div>

                {/* Ajuste de responsividad en Periodo/Ubicación */}
                <div className="text-left sm:text-right text-sm text-gray-600 dark:text-gray-400 sm:min-w-max sm:ml-4 mt-2 sm:mt-0">
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
                            className="inline-flex items-center px-3 py-1 bg-gray-800 text-white dark:bg-gray-700 dark:text-gray-100 text-xs font-medium rounded-full shadow-sm"
                        >
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
            <p className="text-base text-gray-600 dark:text-gray-400 text-center mb-10">
                Un viaje a través de mi crecimiento profesional, formación, idiomas y logros.
            </p>

            {/* --- Contenedor de Pestañas (Tabs) --- */}
            <div className="flex justify-center mb-10 px-4">
                <div className="flex p-1 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 overflow-x-auto whitespace-nowrap max-w-full">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex items-center px-3 py-2 sm:px-4 rounded-lg text-sm font-medium transition duration-300 ease-in-out ${
                                activeTab === tab
                                    ? 'bg-indigo-700 text-white shadow-lg'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-white'
                            }`}
                        >
                            {tab === 'Experiencia Profesional' && (
                                <FaBriefcase className="h-5 w-5 mr-1 sm:mr-2" />
                            )}
                            {tab === 'Educación' && (
                                <FaGraduationCap className="h-5 w-5 mr-1 sm:mr-2" />
                            )}
                            {tab === 'Idiomas' && (
                                <FaGlobe className="h-5 w-5 mr-1 sm:mr-2" />
                            )}
                            {tab === 'Logros' && (
                                <FaAward className="h-5 w-5 mr-1 sm:mr-2" />
                            )}
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* --- Contenido de la Pestaña Activa (Línea de Tiempo) --- */}
            <div className="container max-w-3xl mx-auto px-6">
                <div className="relative border-l-2 border-gray-300 dark:border-gray-600 pl-6 space-y-8">
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
                            activeTab={activeTab} // Pasamos la pestaña activa como prop
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}