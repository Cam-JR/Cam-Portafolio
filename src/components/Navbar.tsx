"use client";
import { useState } from "react";
// 1. IMPORTAR EL COMPONENTE LINK DE NEXT.JS
import Link from "next/link"; 

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      {/* Overlay ligero o blur opcional */}
      <div className="backdrop-blur-md bg-black/30">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          
          {/* 2. REEMPLAZAR EL <a> POR EL <Link /> DE NEXT.JS */}
          {/* El error era aquí, al usar <a> para navegar a "/" */}
          <Link href="/" className="text-xl font-bold text-white">
            Cam.dev
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-6 text-white">
            <li><a href="#about" className="hover:text-indigo-400">About me</a></li>
            <li><a href="#experience" className="hover:text-indigo-400">Experiencia</a></li>
            <li><a href="#projects" className="hover:text-indigo-400">Proyectos</a></li>
            <li><a href="#skills" className="hover:text-indigo-400">Skills</a></li>
            <li><a href="#contact" className="hover:text-indigo-400">Contacto</a></li>
            <br />
          </ul>

          {/* Mobile menu button, etc. (El resto del código queda igual) */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <ul className="md:hidden flex flex-col items-center py-4 gap-4 text-white">
            <li><a href="#about" onClick={() => setOpen(false)}>About me</a></li>
            <li><a href="#experience" onClick={() => setOpen(false)}>Experiencia</a></li>
            <li><a href="#projects" onClick={() => setOpen(false)}>Proyectos</a></li>
            <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contacto</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
}