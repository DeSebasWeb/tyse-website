"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { Service } from "@/types/services";

interface ServiceGridProps {
  services: Service[];
  columns?: 2 | 3 | 4;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/**
 * Grid responsive para mostrar múltiples servicios
 */
export default function ServiceGrid({
  services,
  columns = 3,
}: ServiceGridProps) {
  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`grid ${gridCols[columns]} gap-6`}
    >
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </motion.div>
  );
}
