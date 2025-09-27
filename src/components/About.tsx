import React from 'react';
import { FaUser, FaMapMarkerAlt, FaGraduationCap, FaEnvelope, FaPhone, FaBriefcase, FaDownload } from 'react-icons/fa';

// --- Estructura de Datos (Opcional, pero recomendado para mantener el código limpio) ---
const personalData = [
    { icon: <FaUser />, label: 'Nombre', value: 'Camila Jimenez Riveros' }, 
    { icon: <FaEnvelope />, label: 'Email', value: 'camilajimenezr21@gmail.com' }, 
    { icon: <FaBriefcase />, label: 'Estado', value: 'Disponible para trabajar' },
];

const interests = [
    'Desarrollo Frontend',
    'React.js',
    'UI/UX Design',
    'Tecnologías Web',
];


export default function About() {
    return (
        <section id="about" className="py-16 bg-indigo-50 dark:bg-indigo-800">
            <div className="container mx-auto px-6">
                
                {/* Título y subtítulo */}
                <h2 className="text-4xl font-extrabold mb-7 text-center text-gray-900 dark:text-white">
                    About me
                </h2>
                <p className="max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300 mb-10">
                    Me apasiona el desarrollo frontend y actualmente trabajo en proyectos propios y como freelance. Me centro en escribir código limpio y escalable, diseñar interfaces centradas en la experiencia de usuario (UX/UI) y cuidar cada detalle para lograr aplicaciones web útiles, confiables y atractivas que las personas realmente disfruten utilizar.
                </p>

                {/* --- Grid de Información Personal --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
                    {personalData.map((item, index) => (
                        <div key={index} className="flex items-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                            <span className="text-indigo-600 dark:text-indigo-400 text-2xl mr-4">
                                {item.icon}
                            </span>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">{item.label}</h3>
                                <p className="text-base font-medium text-gray-800 dark:text-gray-200">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Intereses y Botones de Acción --- */}
                <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-6">
                        Intereses & Enfoque
                    </h3>
                    
                    {/* Tags de Intereses */}
                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                        {interests.map((interest, index) => (
                            <span key={index} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                                {interest}
                            </span>
                        ))}
                    </div>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a 
                            href="/cv.pdf"
                            download
                            className="flex items-center justify-center px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-lg hover:bg-indigo-600 transition transition duration-300"  
                        >
                            <FaDownload className="mr-2" />
                            Descargar mi CV
                        </a>
                        <a 
                            href="#contact" // Reemplaza esto con tu correo electrónico
                            className="flex items-center justify-center px-6 py-3 bg-white border border-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
                        >
                            <FaBriefcase className="mr-2" />
                            Contactarme ahora
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}