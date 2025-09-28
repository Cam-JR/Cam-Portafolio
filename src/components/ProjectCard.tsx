import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo?: string;
};

export default function ProjectCard({ title, description, image, tech, github, demo }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="px-2 py-1 bg-indigo-500 text-white rounded-md text-sm">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={github} target="_blank" className="text-indigo-500 hover:underline">
            GitHub
          </a>
          {demo && (
            <a href={demo} target="_blank" className="text-indigo-500 hover:underline">
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
