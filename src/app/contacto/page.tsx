import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | T&SE",
  description:
    "Contáctanos para una consultoría gratuita. Estamos listos para ayudarte a ganar tu próxima elección.",
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container-tyse section-padding pt-32">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Contacto
        </h1>
        <p className="mt-4 text-lg text-white/70 max-w-2xl">
          Agenda una consultoría gratuita y descubre cómo nuestra tecnología
          puede transformar tu campaña electoral.
        </p>
      </div>
    </div>
  );
}
