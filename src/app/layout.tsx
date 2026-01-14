import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "T&SE | Tecnología & Servicios Electorales",
  description:
    "Tecnología que impulsa campañas ganadoras. Control Electoral 360° con inteligencia artificial, transparencia y resultados medibles.",
  keywords: [
    "servicios electorales",
    "tecnología electoral",
    "campañas políticas",
    "inteligencia artificial",
    "consultoría electoral",
    "Colombia",
  ],
  authors: [{ name: "T&SE - Tecnología & Servicios Electorales" }],
  openGraph: {
    title: "T&SE | Tecnología & Servicios Electorales",
    description:
      "Tecnología que impulsa campañas ganadoras. Control Electoral 360° con inteligencia artificial.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={manrope.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
