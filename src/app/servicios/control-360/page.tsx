import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Control 360° | T&SE",
  description:
    "Sistema integral de monitoreo electoral en tiempo real. Control total de tu campaña con tecnología de vanguardia.",
};

export default function Control360Page() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container-tyse section-padding pt-32">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Control Electoral 360°
        </h1>
        <p className="mt-4 text-lg text-white/70 max-w-2xl">
          Monitoreo integral en tiempo real de todas las variables de tu campaña
          electoral.
        </p>
      </div>
    </div>
  );
}
