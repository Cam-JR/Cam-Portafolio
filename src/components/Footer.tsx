export default function Footer() {
  return (
    <footer
      className="relative w-full py-6 text-center text-gray-200"
      style={{
        backgroundImage: "url('/images/fondofooter.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay para que el texto se lea */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

      {/* Contenido */}
      <div className="relative z-10">
        <p>© {new Date().getFullYear()} Camila Jimenez Riveros. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/Cam-JR"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-indigo-400"
          >
            <img src="/icons/github.svg" alt="GitHub" className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/cam-jimenez/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-indigo-400"
          >
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
