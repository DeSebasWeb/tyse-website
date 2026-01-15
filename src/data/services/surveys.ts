import { BarChart3, Users, Laptop } from "lucide-react";
import { ServiceDetail, ServiceListItem } from "@/types/services";

/**
 * Servicios del área de Encuestas
 */

export const surveyServices: ServiceDetail[] = [
  {
    id: "encuestas-presenciales",
    slug: "encuestas-presenciales",
    icon: Users,
    title: "Encuestas de clima político presenciales y/o virtuales",
    description:
      "Estudios de opinión pública presenciales y virtuales para medir tendencias electorales.",
    longDescription:
      "Realizamos encuestas científicas de clima político con metodología rigurosa, tanto presenciales como virtuales, para medir intención de voto, imagen de candidatos y percepción ciudadana.",
    benefits: [
      "Metodología científica certificada",
      "Muestreo estadísticamente representativo",
      "Análisis demográfico y geográfico detallado",
      "Comparativos históricos y de tendencias",
      "Entrega de resultados en tiempo récord",
    ],
    features: [
      {
        title: "Encuestas presenciales",
        description:
          "Aplicación cara a cara con encuestadores capacitados en campo.",
        icon: Users,
      },
      {
        title: "Encuestas virtuales",
        description:
          "Plataformas digitales con controles de calidad y validación de respuestas.",
        icon: Laptop,
      },
      {
        title: "Análisis multidimensional",
        description:
          "Cruces de variables demográficas, geográficas y socioeconómicas.",
        icon: BarChart3,
      },
    ],
    category: "encuestas",
  },
];

export const specificSurveyServices: ServiceListItem[] = [
  {
    title: "Encuestas de clima político",
    description: "Presenciales y/o virtuales con metodología científica",
    highlight: true,
  },
  {
    title: "Recolección en campo",
    description:
      "Información, ubicación y tabulación en tiempo real mediante encuestadores capacitados",
    highlight: false,
  },
  {
    title: "Estudios cuantitativos completos",
    description:
      "Cualitativos, de satisfacción, posicionamiento, percepción, estudios e inteligencia de mercados",
    highlight: false,
  },
  {
    title: "Recolección con robots",
    description:
      "Plataformas de mensajería instantánea con información de ubicación y tabulación en tiempo real",
    highlight: false,
  },
];

/**
 * Talleres de Vocería
 */
export const voceríaWorkshops = {
  title: "Talleres de Vocería",
  description:
    "Está diseñado para altos ejecutivos, empresarios, directivos del sector público y privado, líderes políticos y sociales, conferencistas o profesionales de todas las áreas que quieran desenvolverse exitosamente en entrevistas ante los medios de comunicación, así como en presentaciones, conferencias y discursos.",
  targetAudience: [
    "Altos ejecutivos",
    "Empresarios",
    "Directivos del sector público y privado",
    "Líderes políticos y sociales",
    "Conferencistas",
    "Profesionales que requieran habilidades de comunicación",
  ],
  objective:
    "Desarrollar habilidades de comunicación efectiva para entrevistas, presentaciones, conferencias y discursos ante medios y audiencias diversas.",
};
