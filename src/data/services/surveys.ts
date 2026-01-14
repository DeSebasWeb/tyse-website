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
];
