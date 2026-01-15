"use client";

import { motion } from "framer-motion";
import { Users, BarChart3, Smartphone } from "lucide-react";

const methods = [
  {
    icon: Users,
    title: "Recolección en campo",
    description:
      "Información, ubicación y tabulación en tiempo real mediante encuestadores capacitados",
  },
  {
    icon: BarChart3,
    title: "Estudios cuantitativos completos",
    description:
      "Cualitativos, de satisfacción, posicionamiento, percepción, estudios e inteligencia de mercados",
  },
  {
    icon: Smartphone,
    title: "Recolección con robots",
    description:
      "Plataformas de mensajería instantánea con información de ubicación y tabulación en tiempo real",
  },
];

export default function MeasurementMethods() {
  return (
    <section className="section-padding bg-white">
      <div className="container-tyse">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tyse-dark-teal mb-6">
            Métodos de{" "}
            <span className="text-tyse-turquoise">Medición Avanzados</span>
          </h2>
          <p className="text-lg md:text-xl text-tyse-teal/70 mb-4">
            Porque no todos los temas ni los públicos son iguales, tenemos a su
            disposición diversos métodos de medición que mostraran la realidad.
          </p>
          <p className="text-base text-tyse-teal/60">
            Utilizando tecnología avanzada para recolectar la más precisa
            información
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-tyse-turquoise/10 flex items-center justify-center mx-auto mb-6">
                <method.icon className="w-10 h-10 text-tyse-turquoise" />
              </div>
              <h3 className="text-xl font-bold text-tyse-dark-teal mb-3">
                {method.title}
              </h3>
              <p className="text-tyse-teal/70">{method.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
