"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Service } from "@/types/services";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

/**
 * Card individual para mostrar un servicio
 * Usado en grids de servicios y listados
 */
export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <Card className="h-full group hover:border-tyse-turquoise/30 transition-all hover:shadow-lg">
        <CardHeader>
          <div className="w-12 h-12 rounded-xl bg-tyse-turquoise/10 flex items-center justify-center mb-4 group-hover:bg-tyse-turquoise/20 transition-colors">
            <service.icon className="w-6 h-6 text-tyse-turquoise" />
          </div>
          <CardTitle className="text-tyse-dark-teal group-hover:text-tyse-turquoise transition-colors">
            {service.title}
          </CardTitle>
          <CardDescription className="text-base text-tyse-teal/70">
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link
            href={`/servicios/${service.slug}`}
            className="text-tyse-turquoise font-medium hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all"
          >
            Conocer más
            <span className="text-lg">→</span>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
