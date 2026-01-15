import type { Metadata } from "next";
import Mission from "@/components/about/Mission";
import BrandValues from "@/components/about/BrandValues";

export const metadata: Metadata = {
  title: "Nosotros | T&SE",
  description:
    "Conoce al equipo detrás de T&SE. Más de 15 años de experiencia en tecnología y servicios electorales en Colombia.",
};

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-hero">
        <div className="container-tyse section-padding pt-32 pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Sobre Nosotros
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
            Donde otros reaccionan, nosotros nos anticipamos. Más de 15 años
            transformando campañas electorales con tecnología.
          </p>
        </div>
      </div>

      {/* Misión */}
      <Mission />

      {/* Valores de Marca */}
      <BrandValues />
    </div>
  );
}
