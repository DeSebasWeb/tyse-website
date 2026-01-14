import {
  Globe,
  Smartphone,
  MessageSquare,
  BarChart,
  Bot,
  Database,
  Brain,
} from "lucide-react";
import { ServiceDetail, ServiceListItem } from "@/types/services";

/**
 * Servicios del área de Tecnología
 */

export const technologyServices: ServiceDetail[] = [
  {
    id: "diseno-paginas-web",
    slug: "diseno-paginas-web",
    icon: Globe,
    title: "Diseño de páginas web",
    description:
      "Diseño UX/UI dinámico y responsive con optimización SEO para motores de búsqueda.",
    longDescription:
      "Creamos sitios web profesionales optimizados para conversión, con diseño responsive y estrategias de posicionamiento en buscadores.",
    benefits: [
      "Diseño responsive para todos los dispositivos",
      "Optimización SEO desde el desarrollo",
      "Velocidad de carga optimizada",
      "Diseño centrado en conversión",
      "Integración con herramientas de análisis",
    ],
    features: [
      {
        title: "UX/UI Profesional",
        description:
          "Diseño de experiencia de usuario enfocado en objetivos electorales.",
        icon: Globe,
      },
      {
        title: "SEO Técnico",
        description:
          "Implementación de mejores prácticas para posicionamiento orgánico.",
        icon: BarChart,
      },
      {
        title: "Performance",
        description:
          "Optimización de velocidad y rendimiento para mejor experiencia.",
        icon: Brain,
      },
    ],
    category: "tecnologia",
  },
  {
    id: "software-medida",
    slug: "software-medida",
    icon: Brain,
    title: "Software a la medida",
    description:
      "Planeación e investigación, diseño, prototipado, desarrollo y lanzamiento con éxito.",
    longDescription:
      "Desarrollamos soluciones de software personalizadas que optimizan procesos administrativos y operacionales específicos de campañas electorales.",
    benefits: [
      "Soluciones adaptadas a necesidades específicas",
      "Escalabilidad garantizada",
      "Integración con sistemas existentes",
      "Soporte técnico dedicado",
      "Actualizaciones y mantenimiento",
    ],
    features: [
      {
        title: "Análisis de requerimientos",
        description:
          "Investigación profunda de necesidades y procesos actuales.",
      },
      {
        title: "Desarrollo ágil",
        description:
          "Metodología iterativa con entregas incrementales y feedback continuo.",
      },
      {
        title: "Garantía de calidad",
        description: "Testing exhaustivo y aseguramiento de calidad en cada fase.",
      },
    ],
    category: "tecnologia",
  },
  {
    id: "aplicaciones-moviles",
    slug: "aplicaciones-moviles",
    icon: Smartphone,
    title: "Aplicaciones móviles",
    description:
      "Desarrollo móvil con lenguaje nativo Android / iOS.",
    longDescription:
      "Aplicaciones móviles nativas de alto rendimiento para gestión de testigos, movilización de votantes y comunicación con equipos de campaña.",
    benefits: [
      "Desarrollo nativo para mejor rendimiento",
      "Funcionamiento offline",
      "Notificaciones push en tiempo real",
      "Geolocalización integrada",
      "Sincronización automática de datos",
    ],
    features: [
      {
        title: "Android nativo",
        description: "Desarrollo en Kotlin para óptimo rendimiento en Android.",
      },
      {
        title: "iOS nativo",
        description: "Desarrollo en Swift para experiencia premium en iOS.",
      },
      {
        title: "Sincronización offline",
        description:
          "Funcionamiento sin conexión con sincronización automática.",
      },
    ],
    category: "tecnologia",
  },
  {
    id: "aplicaciones-web-pwas",
    slug: "aplicaciones-web-pwas",
    icon: Globe,
    title: "Aplicaciones web (PWAs)",
    description:
      "Desarrollo de aplicaciones multiplataforma móvil, tablet, desktop.",
    longDescription:
      "Progressive Web Apps que combinan lo mejor de web y móvil, con instalación opcional y funcionamiento multiplataforma.",
    benefits: [
      "Una sola aplicación para todas las plataformas",
      "Instalable sin tiendas de aplicaciones",
      "Actualizaciones instantáneas",
      "Menor costo de desarrollo",
      "Acceso desde cualquier navegador",
    ],
    features: [
      {
        title: "Multiplataforma",
        description: "Funciona en móvil, tablet y desktop con el mismo código.",
      },
      {
        title: "Instalable",
        description:
          "Los usuarios pueden instalarla como app nativa sin tiendas.",
      },
      {
        title: "Offline-first",
        description: "Diseñada para funcionar sin conexión cuando sea necesario.",
      },
    ],
    category: "tecnologia",
  },
  {
    id: "chatbots",
    slug: "chatbots",
    icon: MessageSquare,
    title: "Chatbots",
    description:
      "Desarrollo de bots en plataformas de mensajería instantánea: WhatsApp, Facebook Messenger y/o Telegram.",
    longDescription:
      "Bots inteligentes para atención automatizada de ciudadanos, movilización de votantes y gestión de voluntarios a través de plataformas de mensajería.",
    benefits: [
      "Atención 24/7 automatizada",
      "Respuestas instantáneas a preguntas frecuentes",
      "Segmentación de audiencias",
      "Recolección de datos estructurados",
      "Integración con CRM y bases de datos",
    ],
    features: [
      {
        title: "WhatsApp Business",
        description:
          "Bot oficial integrado con WhatsApp Business API.",
      },
      {
        title: "Facebook Messenger",
        description: "Automatización de conversaciones en Messenger.",
      },
      {
        title: "Telegram",
        description: "Bots avanzados con comandos personalizados en Telegram.",
      },
    ],
    category: "tecnologia",
  },
  {
    id: "bases-datos-analitica",
    slug: "bases-datos-analitica",
    icon: Database,
    title: "Bases de datos (Analítica)",
    description:
      "Análisis de datos para optimizar parámetros, patrones, tendencias y pronósticos.",
    longDescription:
      "Sistemas de análisis de datos electorales para identificar tendencias, segmentar votantes y optimizar estrategias de campaña basadas en datos reales.",
    benefits: [
      "Decisiones basadas en datos",
      "Identificación de patrones electorales",
      "Segmentación avanzada de votantes",
      "Predicción de tendencias",
      "Optimización de recursos de campaña",
    ],
    features: [
      {
        title: "Data warehousing",
        description: "Almacenamiento estructurado de datos electorales históricos.",
      },
      {
        title: "Análisis predictivo",
        description:
          "Modelos estadísticos para proyección de resultados.",
      },
      {
        title: "Visualización de datos",
        description: "Dashboards interactivos para análisis en tiempo real.",
      },
    ],
    category: "tecnologia",
  },
  {
    id: "inteligencia-artificial",
    slug: "inteligencia-artificial",
    icon: Brain,
    title: "Inteligencia Artificial",
    description:
      "Sistemas de aprendizaje automático: Clasificación y predicción de datos en algoritmos.",
    longDescription:
      "Modelos de machine learning y AI para análisis predictivo electoral, segmentación inteligente de votantes y optimización automática de estrategias.",
    benefits: [
      "Predicción precisa de resultados electorales",
      "Segmentación automática de audiencias",
      "Optimización de mensajes por segmento",
      "Detección de tendencias emergentes",
      "Análisis de sentimiento en redes sociales",
    ],
    features: [
      {
        title: "Machine Learning",
        description:
          "Modelos de aprendizaje automático para predicción electoral.",
      },
      {
        title: "Procesamiento de lenguaje natural",
        description: "Análisis de discursos, comentarios y sentimiento ciudadano.",
      },
      {
        title: "Visión computacional",
        description:
          "Análisis de imágenes para verificación de eventos y conteo de asistencias.",
      },
    ],
    category: "tecnologia",
  },
];

export const specificTechnologyServices: ServiceListItem[] = [
  {
    title: "Diseño de páginas web",
    description: "Diseño UX/UI dinámico y responsive. Optimización SEO para motores de búsqueda",
  },
  {
    title: "Software a la medida",
    description:
      "Planeación e investigación, diseño, prototipado, desarrollo y lanzamiento con éxito",
  },
  {
    title: "Aplicaciones móviles",
    description: "Desarrollo móvil con lenguaje nativo Android / iOS",
  },
  {
    title: "Aplicaciones web (PWAs)",
    description:
      "Desarrollo de aplicaciones multiplataforma móvil, tablet, desktop",
  },
  {
    title: "Chatbots",
    description:
      "Desarrollo de bots en plataformas de mensajería instantánea: WhatsApp, Facebook Messenger y/o Telegram",
  },
  {
    title: "Bases de datos (Analítica)",
    description:
      "Análisis de datos para optimizar parámetros, patrones, tendencias y pronósticos",
  },
  {
    title: "Inteligencia Artificial",
    description:
      "Sistemas de aprendizaje automático: Clasificación y predicción de datos en algoritmos",
  },
];
