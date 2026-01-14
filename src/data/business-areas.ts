import { Vote, Cpu, BarChart3, Scale } from "lucide-react";
import { BusinessArea } from "@/types/services";

/**
 * Áreas de negocio de T&SE
 * Basado en las 4 áreas principales: Electoral, Tecnología, Encuestas, Asesoría Jurídica
 */

export const businessAreas: BusinessArea[] = [
  {
    id: "electoral",
    title: "Electoral",
    description:
      "Gestión integral de procesos electorales con tecnología de punta para garantizar transparencia y eficiencia en cada etapa.",
    icon: Vote,
    services: [
      "recoleccion-apoyos-candidatos",
      "recoleccion-apoyos-revocatorias",
      "asesoria-juridica-electoral",
    ],
  },
  {
    id: "tecnologia",
    title: "Tecnología",
    description:
      "Desarrollo de software y aplicaciones que optimizan actividades administrativas y operacionales de campañas electorales.",
    icon: Cpu,
    services: [
      "diseno-paginas-web",
      "software-medida",
      "aplicaciones-moviles",
      "aplicaciones-web-pwas",
      "chatbots",
      "bases-datos-analitica",
      "inteligencia-artificial",
    ],
  },
  {
    id: "encuestas",
    title: "Encuestas",
    description:
      "Estudios científicos de opinión pública para medir clima político y tendencias electorales con precisión estadística.",
    icon: BarChart3,
    services: ["encuestas-presenciales"],
  },
  {
    id: "asesoria-juridica",
    title: "Asesoría Jurídica",
    description:
      "Acompañamiento legal especializado en todas las fases del proceso electoral para garantizar cumplimiento normativo.",
    icon: Scale,
    services: ["asesoria-juridica-electoral", "asesoria-financiacion"],
  },
];

/**
 * Obtener área de negocio por ID
 */
export const getBusinessAreaById = (id: string): BusinessArea | undefined => {
  return businessAreas.find((area) => area.id === id);
};

/**
 * Obtener área de negocio por servicio
 */
export const getBusinessAreaByService = (
  serviceId: string
): BusinessArea | undefined => {
  return businessAreas.find((area) => area.services.includes(serviceId));
};
