"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Background con gradiente */}
      <div className="absolute inset-0 bg-gradient-primary" />

      {/* Decoración */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container-tyse section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            ¿Listo para ganar tu próxima elección?
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/80">
            Agenda una consultoría gratuita y descubre cómo nuestra tecnología
            puede transformar tu campaña electoral.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contacto">
              <Button
                variant="outlineLight"
                size="lg"
                className="group bg-white text-tyse-teal hover:bg-white/90 border-white"
              >
                Solicitar Consultoría Gratuita
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/servicios">
              <Button variant="outlineLight" size="lg">
                Ver todos los servicios
              </Button>
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-sm text-white/60"
          >
            Más de 200 campañas exitosas en toda Colombia
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
