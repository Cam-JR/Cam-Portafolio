"use client";
import { Mail, Github, Linkedin, Calendar } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

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

       "service_49q7nln", //  Service ID
        "template_79k2s8o", //  Template ID
        form.current,
        "q2BMeRfWZBm3XaOUx" //  Public Key

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
    <section id="contact" className="py-16"> 
      <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900">Contacto</h2>
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* --- Left Side --- */}
        <div>  
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Siempre me interesan nuevas oportunidades y colaboraciones. 
            ¡No dudes en contactarme si quieres colaborar!
          </p>

          {/* Contact Info */}
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-indigo-500" />
              <a href="camilajimenezr21@gmail.com" className="hover:underline">
                camilajimenezr21@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Github className="w-5 h-5 text-indigo-500" />
              <a href="https://github.com/Cam-JR" target="_blank" className="hover:underline">
                https://github.com/Cam-JR
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 text-indigo-500" />
              <a href="https://www.linkedin.com/in/cam-jimenez/" target="_blank" className="hover:underline">
                https://www.linkedin.com/in/cam-jimenez/
              </a>
            </li>
          </ul>

          {/* Meeting Card */}
          <div className="mt-8 p-5 border rounded-lg shadow-sm bg-white dark:bg-gray-800">
            <h3 className="font-semibold mb-2">Programar una reunión</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Hablemos de su proyecto a través de una videollamada. 
              Estoy disponible para consultas y discusiones de proyectos.
            </p>
            <a
              href="https://calendly.com/camilajimenezr21/30min"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition"
            >
              <Calendar className="w-5 h-5" />
              Schedule Meeting
            </a>
          </div>
        </div>

        {/* --- Right Side Form --- */}
        <div className="p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-6">Enviar un Mensaje</h3>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <select
              name="project_type"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>Consultoria</option>
            </select>
            <textarea
              name="message"
              placeholder="Cuéntame sobre tu proyecto..."
              rows={4}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition"
            >
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>

          {success && (
            <p className="mt-4 text-green-600">  Mensaje enviado exitosamente!</p>
          )}
        </div>
      </div>
    </section>
  );
}