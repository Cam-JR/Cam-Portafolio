'use client'
import React from 'react';
import { motion } from 'framer-motion';

type Skill = {
  name: string;
  icon?: string;
};

const ALL_SKILLS: Skill[] = [
  // Frontend
  { name: 'HTML5', icon: '/icons/html.svg' },
  { name: 'CSS3', icon: '/icons/css.svg' },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'TypeScript', icon: '/icons/typescript-icon.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Next.js', icon: '/icons/nextjs-icon.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
  { name: 'Bootstrap', icon: '/icons/bootstrap.svg' },

  // Backend
  { name: 'Node.js', icon: '/icons/nodejs-icon.svg' },
  { name: 'PHP', icon: '/icons/php.svg' },
  { name: 'Laravel', icon: '/icons/laravel.svg' },
  { name: 'Python', icon: '/icons/python.svg' },

  // Base de datos
  { name: 'MySQL', icon: '/icons/mysql.svg' },

  // Control de versiones
  { name: 'Git', icon: '/icons/git.svg' },
  { name: 'GitHub', icon: '/icons/github-icon.svg' },

  // Herramientas
  { name: 'Figma', icon: '/icons/figma.svg' }, 
  { name: 'Postman', icon: '/icons/postman.svg' },
  { name: 'VS Code', icon: '/icons/vscode.svg' },
  { name: 'WordPress', icon: '/icons/wordpress.svg' },
  { name: 'WooCommerce', icon: '/icons/woocommerce-icon.svg' },
  { name: 'Azure', icon: '/icons/microsoft-azure.svg' },
  { name: 'Netlify', icon: '/icons/netlify.svg' },
  { name: 'Notion', icon: '/icons/notion-icon.svg' },
];

// Componente SkillCard simplificado
interface SkillCardProps {
  name: string;
  icon?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon }) => {
  return (
    <div className="flex-shrink-0 w-32 h-40 md:w-40 md:h-48 flex flex-col items-center justify-center bg-gradient-to-br from-[#03020D] to-[#0A0A1F] border border-[#4F39F6]/25 rounded-2xl shadow-lg hover:border-[#4F39F6] hover:shadow-xl hover:shadow-[#4F39F6]/20 transition-all duration-300 p-4">
      {icon && (
        <img src={icon} alt={name} className="w-16 h-16 md:w-20 md:h-20 object-contain mb-3" />
      )}
      <p className="text-white font-semibold text-center text-sm md:text-base">{name}</p>
    </div>
  );
};

// Componente CarrouselRow
interface CarrouselRowProps {
  skills: Skill[];
}

const CarrouselRow: React.FC<CarrouselRowProps> = ({ skills }) => {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max gap-4 md:gap-6"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ willChange: 'transform' }}
      >
        {duplicatedSkills.map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} {...skill} />
        ))}
      </motion.div>
    </div>
  );
};

// Componente Principal
export default function Skills() {
  const firstHalf = ALL_SKILLS.slice(0, Math.ceil(ALL_SKILLS.length / 2));
  const secondHalf = ALL_SKILLS.slice(Math.ceil(ALL_SKILLS.length / 2));

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#0A0A1F] via-[#03020D] to-[#0A0A1F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#4F39F6] via-[#6C5CE7] to-[#03020D] bg-clip-text text-transparent mb-4">
            Skills
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Herramientas y tecnologías que utilizo en mis proyectos
          </p>
        </motion.div>

        {/* Carruseles */}
        <div className="space-y-8 md:space-y-12">
          {/* Primera fila */}
          <div className="relative">
            <CarrouselRow skills={firstHalf} />
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#0A0A1F] to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#0A0A1F] to-transparent pointer-events-none z-10"></div>
          </div>

          {/* Segunda fila */}
          <div className="relative">
            <CarrouselRow skills={secondHalf} />
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#0A0A1F] to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#0A0A1F] to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </div>

      {/* Decoración de fondo */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#4F39F6]/10 rounded-full blur-3xl pointer-events-none opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#03020D]/50 rounded-full blur-3xl pointer-events-none opacity-20"></div>
    </section>
  );
}