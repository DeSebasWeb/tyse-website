"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Años de experiencia", suffix: "" },
  { value: "200+", label: "Campañas exitosas", suffix: "" },
  { value: "50K+", label: "Testigos gestionados", suffix: "" },
  { value: "98%", label: "Tasa de éxito", suffix: "" },
];

export default function Stats() {
  return (
    <section className="bg-tyse-dark-teal py-16 md:py-20">
      <div className="container-tyse">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-tyse-turquoise">
                {stat.value}
              </p>
              <p className="mt-2 text-sm md:text-base text-white/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
