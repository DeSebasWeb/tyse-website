"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ServiceListItem as ServiceListItemType } from "@/types/services";

interface ServiceListItemProps {
  item: ServiceListItemType;
  index?: number;
}

/**
 * Ítem de lista para servicios específicos
 * Usado en listas con viñetas o checkmarks
 */
export default function ServiceListItem({
  item,
  index = 0,
}: ServiceListItemProps) {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: index * 0.05,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex items-start gap-4 group"
    >
      {/* Icono check */}
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 ${
          item.highlight
            ? "bg-tyse-turquoise text-white"
            : "bg-tyse-turquoise/10 text-tyse-turquoise"
        } group-hover:scale-110 transition-transform`}
      >
        <Check className="w-5 h-5" />
      </div>

      {/* Contenido */}
      <div className="flex-1">
        <h4 className="text-lg md:text-xl font-semibold text-tyse-dark-teal group-hover:text-tyse-turquoise transition-colors mb-2">
          {item.title}
        </h4>
        <p className="text-base md:text-lg text-tyse-teal/70 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
