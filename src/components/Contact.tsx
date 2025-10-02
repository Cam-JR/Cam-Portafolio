"use client";
import { Mail, Github, Linkedin, Calendar } from "lucide-react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

// Definimos las variantes de animación para cada elemento
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Anima cada hijo con un retraso de 0.1 segundos
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_49q7nln", //  Service ID
        "template_79k2s8o", //  Template ID
        form.current,
        "q2BMeRfWZBm3XaOUx" //  Public Key
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          form.current?.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-10 bg-white dark:bg-[#0a0a1f] transition-colors duration-500">
      <motion.h2
        className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-gray-50 transition-colors duration-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contacto
      </motion.h2>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* --- Left Side --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show" 
        >
          <motion.p
            className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-500"
            variants={itemVariants}
          >
            Siempre me interesan nuevas oportunidades y colaboraciones. ¡No dudes en contactarme si quieres colaborar!
          </motion.p>

          {/* Contact Info */}
          <motion.ul className="space-y-4" variants={containerVariants}>
            <motion.li
              className="flex items-center gap-3 text-gray-800 dark:text-gray-200 transition-colors duration-500"
              variants={itemVariants}
            >
              <Mail className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
              <a href="mailto:camilajimenezr21@gmail.com" className="hover:underline">
                camilajimenezr21@gmail.com
              </a>
            </motion.li>
            <motion.li
              className="flex items-center gap-3 text-gray-800 dark:text-gray-200 transition-colors duration-500"
              variants={itemVariants}
            >
              <Github className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
              <a href="https://github.com/Cam-JR" target="_blank" className="hover:underline">
                https://github.com/Cam-JR
              </a>
            </motion.li>
            <motion.li
              className="flex items-center gap-3 text-gray-800 dark:text-gray-200 transition-colors duration-500"
              variants={itemVariants}
            >
              <Linkedin className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
              <a href="https://www.linkedin.com/in/cam-jimenez/" target="_blank" className="hover:underline">
                https://www.linkedin.com/in/cam-jimenez/
              </a>
            </motion.li>
          </motion.ul>

          {/* Meeting Card */}
          <motion.div
            className="mt-8 p-5 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800 transition-colors duration-500"
            variants={itemVariants}
          >
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-500">
              Programar una reunión
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-500">
              Hablemos de su proyecto a través de una videollamada. Estoy disponible para consultas y discusiones de
              proyectos.
            </p>
            <a
              href="https://calendly.com/camilajimenezr21/30min"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 dark:bg-indigo-600 text-white hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors duration-500"
            >
              <Calendar className="w-5 h-5" />
              Schedule Meeting
            </a>
          </motion.div>
        </motion.div>

        {/* --- Right Side Form --- */}
        <motion.div
          className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800 transition-colors duration-500"
          variants={containerVariants}
          initial="hidden"
          whileInView="show" 
        >
          <motion.h3
            className="text-xl font-semibold mb-6 text-gray-900 dark:text-white transition-colors duration-500"
            variants={itemVariants} // <-- APLICADO EL 'variants'
          >
            Enviar un Mensaje
          </motion.h3>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4"
            variants={containerVariants}
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-500"
              variants={itemVariants}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-500"
              variants={itemVariants}
            />
            <motion.select
              name="project_type"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500"
              variants={itemVariants}
            >
              <option className="bg-white dark:bg-gray-900">Web Development</option>
              <option className="bg-white dark:bg-gray-900">UI/UX Design</option>
              <option className="bg-white dark:bg-gray-900">Consultoria</option>
            </motion.select>
            <motion.textarea
              name="message"
              placeholder="Cuéntame sobre tu proyecto..."
              rows={4}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-500"
              variants={itemVariants}
            ></motion.textarea>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full py-2 rounded-lg bg-indigo-500 dark:bg-indigo-600 text-white font-medium hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors duration-500"
              variants={itemVariants}
            >
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </motion.button>
          </motion.form>

          {success && (
            <motion.p className="mt-4 text-green-600 dark:text-green-400 transition-colors duration-500" variants={itemVariants}>
              Mensaje enviado exitosamente!
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}