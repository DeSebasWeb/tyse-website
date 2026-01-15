"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Cpu,
  Eye,
  ShieldCheck,
  Users,
  Zap,
  Target,
  Scale,
} from "lucide-react";

const brandValues = [
  {
    icon: Lightbulb,
    title: "Experta",
    description:
      "Conocimiento profundo en derecho electoral y procesos democráticos",
  },
  {
    icon: Cpu,
    title: "Tecnológica",
    description: "Innovación constante con IA y analítica avanzada",
  },
  {
    icon: Eye,
    title: "Innovadora",
    description: "Soluciones pioneras que transforman campañas electorales",
  },
  {
    icon: ShieldCheck,
    title: "Transparente",
    description: "Procesos claros y verificables en cada etapa",
  },
  {
    icon: Users,
    title: "Confiable y segura",
    description: "Protección absoluta de datos y resultados",
  },
  {
    icon: Zap,
    title: "Aliada",
    description: "Acompañamiento estratégico en todo momento",
  },
  {
    icon: Target,
    title: "Eficiente",
    description: "Optimización de recursos y tiempo para máximos resultados",
  },
  {
    icon: Scale,
    title: "Imparcial",
    description: "Objetividad y ética en cada decisión y análisis",
  },
];

export default function BrandValues() {
  return (
    <section className="section-padding bg-tyse-light-gray/30">
      <div className="container-tyse">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tyse-dark-teal mb-6">
            T&SE como <span className="text-tyse-turquoise">Marca es:</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {brandValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white p-6 rounded-xl border-2 border-tyse-light-gray hover:border-tyse-turquoise/30 transition-all hover:shadow-lg group"
            >
              <div className="w-14 h-14 rounded-xl bg-tyse-turquoise/10 flex items-center justify-center mb-4 group-hover:bg-tyse-turquoise/20 transition-colors">
                <value.icon className="w-7 h-7 text-tyse-turquoise" />
              </div>
              <h3 className="text-xl font-bold text-tyse-dark-teal mb-2">
                {value.title}
              </h3>
              <p className="text-tyse-teal/70">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
