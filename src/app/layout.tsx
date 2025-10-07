import "./globals.css";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import ScrollToTopButton from "../components/ScrollToTopButton"; 

export const metadata = {
  title: "Camila Jimenez | Frontend Developer",
  description: "Portafolio de Camila - Frontend Developer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors">
        <Navbar />
        <main>{children}</main>
        <WhatsappButton />
        <ScrollToTopButton />
        <Footer /> 
        <Analytics />
      </body>
    </html>
  );
}
