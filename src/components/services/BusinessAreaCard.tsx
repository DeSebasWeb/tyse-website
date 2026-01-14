"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BusinessArea } from "@/types/services";

interface BusinessAreaCardProps {
  area: BusinessArea;
  index?: number;
}

/**
 * Card para mostrar un área de negocio
 * Incluye icono, título, descripción y cantidad de servicios
 */
export default function BusinessAreaCard({
  area,
  index = 0,
}: BusinessAreaCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Link
        href={`/servicios?categoria=${area.id}`}
        className="block group"
      >
        <div className="relative p-8 rounded-2xl bg-white border-2 border-tyse-light-gray hover:border-tyse-turquoise/50 transition-all hover:shadow-xl h-full">
          {/* Icono */}
          <div className="w-16 h-16 rounded-2xl bg-tyse-turquoise/10 flex items-center justify-center mb-6 group-hover:bg-tyse-turquoise/20 group-hover:scale-110 transition-all">
            <area.icon className="w-8 h-8 text-tyse-turquoise" />
          </div>

          {/* Contenido */}
          <h3 className="text-2xl font-bold text-tyse-dark-teal mb-3 group-hover:text-tyse-turquoise transition-colors">
            {area.title}
          </h3>
          <p className="text-tyse-teal/70 mb-4 leading-relaxed">
            {area.description}
          </p>

          {/* Badge de cantidad de servicios */}
          <div className="inline-flex items-center gap-2 text-sm text-tyse-turquoise font-medium">
            <span>{area.services.length} servicios</span>
            <span className="text-lg group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
