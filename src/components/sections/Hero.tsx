"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Isotipo from "@/components/brand/Isotipo";
import BrandPattern from "@/components/brand/BrandPattern";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Patrón de fondo */}
      <BrandPattern className="text-white" opacity={0.03} />

      {/* Gradiente decorativo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-tyse-turquoise/10 to-transparent pointer-events-none" />

      <div className="container-tyse relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-24 lg:py-0">
          {/* Contenido de texto */}
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              Tecnología que impulsa{" "}
              <span className="text-tyse-turquoise">campañas ganadoras.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed"
            >
              Control Electoral 360° con inteligencia artificial, transparencia y
              resultados medibles. Donde otros reaccionan, nosotros nos anticipamos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link href="/servicios">
                <Button variant="default" size="lg">
                  Conoce nuestros servicios
                </Button>
              </Link>
              <Link href="/contacto">
                <Button variant="outlineLight" size="lg">
                  Contactar ahora
                </Button>
              </Link>
            </motion.div>

            {/* Stats rápidas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 grid grid-cols-3 gap-8"
            >
              <div>
                <p className="text-3xl md:text-4xl font-bold text-tyse-turquoise">
                  15+
                </p>
                <p className="text-sm text-white/60 mt-1">Años de experiencia</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-tyse-turquoise">
                  200+
                </p>
                <p className="text-sm text-white/60 mt-1">Campañas exitosas</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-tyse-turquoise">
                  98%
                </p>
                <p className="text-sm text-white/60 mt-1">Satisfacción</p>
              </div>
            </motion.div>
          </div>

          {/* Isotipo animado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 blur-3xl bg-tyse-turquoise/20 rounded-full scale-150" />
              <Isotipo size={350} animated />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
