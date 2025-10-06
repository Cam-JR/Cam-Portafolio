// Layout global (navbar, footer, theme)
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import WhatsappButton from "../components/WhatsappButton";
import ScrollToTopButton from "../components/ScrollToTopButton";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export const metadata = {
  title: "Camila Jimenez | Frontend Developer",
  description: "Portafolio de Camila - Frontend Developer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors">
        <Navbar />
        <Hero />
        <About/>
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <main className="container mx-auto px-4">{children}</main>
        <WhatsappButton />
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
