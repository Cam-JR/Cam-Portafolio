"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Fondo con blur y transparencia */}
      <div className="w-full bg-black/30 backdrop-blur-md">
        <div className="max-w-8xl mx-auto px-4 h-[52px] flex items-center justify-between">
          {/* Logo / Título */}
          <Link href="/" className="text-xl font-bold text-white">
            Cam.dev
          </Link>

          {/* Menú de escritorio */}
          <ul className="hidden md:flex gap-6 text-white">
            <li><a href="#about" className="hover:text-indigo-400">About me</a></li>
            <li><a href="#experience" className="hover:text-indigo-400">Experiencia</a></li>
            <li><a href="#projects" className="hover:text-indigo-400">Proyectos</a></li>
            <li><a href="#skills" className="hover:text-indigo-400">Skills</a></li>
            <li><a href="#contact" className="hover:text-indigo-400">Contacto</a></li>
          </ul>

          {/* Botón menú móvil */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>

        {/* Menú móvil */}
        {open && (
          <ul className="md:hidden flex flex-col items-center py-4 gap-4 text-white bg-black/40 backdrop-blur-md">
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
