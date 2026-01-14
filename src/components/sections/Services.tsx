"use client";

import { motion } from "framer-motion";
import { allServices } from "@/data/services";
import ServiceCard from "@/components/services/ServiceCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Seleccionar 6 servicios destacados para mostrar en home
const featuredServices = allServices.slice(0, 6);

export default function Services() {
  return (
    <section className="section-padding bg-tyse-light-gray/30">
      <div className="container-tyse">
        {/* Encabezado de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tyse-dark-teal">
            Servicios que{" "}
            <span className="text-tyse-turquoise">transforman campañas</span>
          </h2>
          <p className="mt-4 text-lg text-tyse-teal/70">
            Soluciones tecnológicas integrales diseñadas para maximizar tus
            resultados electorales con precisión y transparencia.
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
