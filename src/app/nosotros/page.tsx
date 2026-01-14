import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | T&SE",
  description:
    "Conoce al equipo detrás de T&SE. Más de 15 años de experiencia en tecnología y servicios electorales en Colombia.",
};

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container-tyse section-padding pt-32">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Sobre Nosotros
        </h1>
        <p className="mt-4 text-lg text-white/70 max-w-2xl">
          Donde otros reaccionan, nosotros nos anticipamos. Más de 15 años
          transformando campañas electorales con tecnología.
        </p>
      </div>
    </div>
  );
}
