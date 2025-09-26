// Layout global (navbar, footer, theme)

import "./globals.css";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

export const metadata = {
  title: "Camila Jimenez | Frontend Developer",
  description: "Portafolio de Camila - Frontend Developer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors">
        <Navbar />
        <main className="container mx-auto">{children}</main>
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}


