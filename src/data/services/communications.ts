import { Share2, MessageCircle, DollarSign } from "lucide-react";
import { ServiceDetail, ServiceListItem } from "@/types/services";

/**
 * Servicios adicionales de Comunicación y Gestión
 */

export const communicationServices: ServiceDetail[] = [
  {
    id: "community-management",
    slug: "community-management",
    icon: Share2,
    title: "Community Management para manejo de redes sociales",
    description:
      "Gestión profesional de redes sociales con estrategia de contenido y engagement.",
    longDescription:
      "Administración integral de redes sociales de la campaña con creación de contenido, programación estratégica, monitoreo de interacciones y análisis de métricas.",
    benefits: [
      "Presencia activa en redes 24/7",
      "Contenido profesional y optimizado",
      "Respuesta rápida a comentarios y mensajes",
      "Análisis de métricas y engagement",
      "Gestión de crisis de reputación",
    ],
    features: [
      {
        title: "Estrategia de contenido",
        description:
          "Planificación de publicaciones alineadas con objetivos de campaña.",
      },
      {
        title: "Monitoreo activo",
        description:
          "Seguimiento de menciones, comentarios y conversaciones relevantes.",
      },
      {
        title: "Reportes de performance",
        description: "Análisis de alcance, engagement y conversión semanal.",
      },
    ],
    category: "tecnologia",
  },
  {
    id: "mensajes-sms",
    slug: "mensajes-sms",
    icon: MessageCircle,
    title: "Mensajes de texto a celulares con contenido de interés",
    description:
      "Campañas masivas de SMS con segmentación y personalización.",
    longDescription:
      "Plataforma de envío masivo de mensajes de texto SMS con alta tasa de apertura, segmentación de audiencias y análisis de efectividad.",
    benefits: [
      "99% de tasa de apertura",
      "Entrega instantánea masiva",
      "Segmentación geográfica y demográfica",
      "Personalización de mensajes",
      "Tracking de entrega y respuestas",
    ],
    features: [
      {
        title: "Envío masivo",
        description: "Capacidad de enviar miles de mensajes simultáneamente.",
      },
      {
        title: "Personalización dinámica",
        description:
          "Inserción de variables personalizadas por destinatario.",
      },
      {
        title: "Programación inteligente",
        description: "Envío en horarios óptimos según zona horaria y perfil.",
      },
    ],
    category: "tecnologia",
  },
  {
    id: "asesoria-financiacion",
    slug: "asesoria-financiacion",
    icon: DollarSign,
    title: "Asesoría en financiación de campañas",
    description:
      "Consultoría especializada en gestión financiera y cumplimiento normativo de campañas.",
    longDescription:
      "Asesoría integral en planeación financiera, gestión de recursos, reporte de ingresos y gastos, y cumplimiento de normatividad electoral en materia de financiación.",
    benefits: [
      "Cumplimiento normativo garantizado",
      "Optimización de recursos de campaña",
      "Gestión de reportes oficiales",
      "Prevención de sanciones",
      "Transparencia financiera",
    ],
    features: [
      {
        title: "Planeación presupuestal",
        description:
          "Diseño de presupuesto realista alineado con estrategia de campaña.",
      },
      {
        title: "Control de gastos",
        description:
          "Sistema de seguimiento y aprobación de gastos en tiempo real.",
      },
      {
        title: "Reportes oficiales",
        description:
          "Preparación de informes para autoridades electorales.",
      },
    ],
    category: "asesoria-juridica",
  },
];

export const specificCommunicationServices: ServiceListItem[] = [
  {
    title: "Community Management",
    description: "Para manejo de redes sociales",
  },
  {
    title: "Mensajes de texto (SMS)",
    description: "A celulares con contenido de interés",
  },
  {
    title: "Asesoría en financiación de campañas",
    description: "Gestión y cumplimiento normativo",
  },
];
