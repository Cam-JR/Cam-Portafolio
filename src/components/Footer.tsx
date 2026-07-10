import { Github, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A1F] text-gray-300 py-16 px-4">

      {/* Línea divisoria */}
        <div className="border-t border-[#4F39F6]/20 mb-12"></div>
        
      <div className="max-w-6xl mx-auto">
        {/* Iconos Sociales */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://www.linkedin.com/in/cam-jimenez/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-[#4F39F6]/40 rounded-lg hover:border-[#4F39F6] hover:text-[#4F39F6] transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Cam-JR"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-[#4F39F6]/40 rounded-lg hover:border-[#4F39F6] hover:text-[#4F39F6] transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/5733158741"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-[#4F39F6]/40 rounded-lg hover:border-[#4F39F6] hover:text-[#4F39F6] transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-[#4F39F6]/20 mb-12"></div>

        {/* Contenido Principal - 3 Columnas */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Sobre */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Sobre</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ingeniera de software apasionada por crear soluciones de impacto digital.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-[#4F39F6] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#4F39F6] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-[#4F39F6] transition-colors">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-[#4F39F6] transition-colors">
                  Experiencia
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-[#4F39F6] transition-colors">
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-400">Desarrollo Web</span>
              </li>
              <li>
                <span className="text-gray-400">Frontend</span>
              </li>
              <li>
                <span className="text-gray-400">UX/UI</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-[#4F39F6]/20 py-6"></div>

        {/* Copyright y Créditos */}
        <div className="text-center text-sm text-gray-500">
          <p>© 2026 Camila Jimenez Riveros. Todos los derechos reservados.</p>
          <p className="mt-2">
            Diseñado y desarrollado por{" "}
            <a href="#" className="text-[#4F39F6] hover:underline">
              Camila Jimenez Riveros
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
