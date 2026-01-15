"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="section-padding bg-white">
      <div className="container-tyse">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl md:text-2xl text-tyse-dark-teal leading-relaxed mb-6">
              En <span className="font-bold text-tyse-turquoise">T&SE</span>{" "}
              <span className="font-semibold">
                Tecnología y Servicios Electorales
              </span>{" "}
              acompañamos a candidatos, partidos y movimientos políticos con una
              misión clara: ayudarlos a ganar elecciones con seguridad,
              estrategia y control absoluto del proceso.
            </p>

            <p className="text-lg md:text-xl text-tyse-teal/80 leading-relaxed mb-6">
              Combinamos el conocimiento experto en derecho electoral con
              tecnología de punta, inteligencia artificial y analítica avanzada
              para proteger cada voto y potenciar cada decisión.
            </p>

            <p className="text-lg md:text-xl text-tyse-teal/80 leading-relaxed mb-6">
              Nuestro equipo multidisciplinario se convierte en un aliado
              estratégico desde la etapa preelectoral hasta el cierre del
              escrutinio, anticipando riesgos, monitoreando la jornada en tiempo
              real y defendiendo con contundencia los resultados ante las
              autoridades competentes. Transformamos la información en ventajas
              competitivas, para que campañas y organizaciones políticas actúen
              con precisión y nunca pierdan el control del escenario.
            </p>

            <p className="text-lg md:text-xl text-tyse-teal/80 leading-relaxed font-medium">
              T&SE empodera a quienes se juegan el futuro en las urnas. Creamos
              confianza con resultados medibles, decisiones fundamentadas y una
              defensa jurídica y tecnológica que marca la diferencia entre
              disputar curules y obtenerlas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
