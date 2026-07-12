import { Github, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A1F] text-gray-300 py-10 sm:py-14 lg:py-16 px-4">
      
      <div className="max-w-6xl mx-auto">

        {/* Línea divisoria */}
        <div className="border-t border-[#4F39F6]/20 mb-8 sm:mb-12"></div>

        {/* Iconos Sociales */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <a
            href="https://www.linkedin.com/in/cam-jimenez/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 border border-[#4F39F6]/40 rounded-lg hover:border-[#4F39F6] hover:text-[#4F39F6] transition-colors"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          <a
            href="https://github.com/Cam-JR"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 border border-[#4F39F6]/40 rounded-lg hover:border-[#4F39F6] hover:text-[#4F39F6] transition-colors"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          <a
            href="https://wa.me/51994239048"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 border border-[#4F39F6]/40 rounded-lg hover:border-[#4F39F6] hover:text-[#4F39F6] transition-colors"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-[#4F39F6]/20 mb-8 sm:mb-12"></div>


        {/* Contenido Principal */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-8 
          sm:gap-10 
          lg:gap-12 
          mb-10
        ">

          {/* Sobre */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              Sobre
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Ingeniera de software apasionada por crear soluciones digitales
              modernas, funcionales y centradas en la experiencia del usuario.
            </p>
          </div>


          {/* Enlaces */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              Enlaces
            </h3>

            <ul className="space-y-2 text-sm">
              {[
                ["Inicio", "#"],
                ["Sobre Mí", "#about"],
                ["Skills", "#skills"],
                ["Experiencia", "#experience"],
                ["Portafolio", "#projects"], 
              ].map(([name, link]) => (
                <li key={name}>
                  <a
                    href={link}
                    className="text-gray-400 hover:text-[#4F39F6] transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Servicios */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              Servicios
            </h3>

            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">
                Desarrollo Web
              </li>

              <li className="text-gray-400">
                Frontend
              </li>

              <li className="text-gray-400">
                UX/UI Design
              </li>
            </ul>
          </div>

        </div>


        {/* Línea divisoria */}
        <div className="border-t border-[#4F39F6]/20 py-5 sm:py-6"></div>


        {/* Copyright */}
        <div className="text-center text-xs sm:text-sm text-gray-500 px-2">
          <p>
            © 2026 Camila Jimenez Riveros. Todos los derechos reservados.
          </p>

          <p className="mt-2">
            Diseñado y desarrollado por{" "}
            <a 
              href="#"
              className="text-[#4F39F6] hover:underline"
            >
              Camila Jimenez Riveros
            </a>
          </p>
        </div>

      </div>

    </footer>
  );
}