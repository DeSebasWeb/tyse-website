import { Vote, CheckSquare, Shield, Users } from "lucide-react";
import { ServiceDetail, ServiceListItem } from "@/types/services";

/**
 * Servicios del área Electoral
 */

export const electoralServices: ServiceDetail[] = [
  {
    id: "recoleccion-apoyos-candidatos",
    slug: "recoleccion-apoyos-candidatos",
    icon: CheckSquare,
    title: "Recolección y verificación de apoyos para la inscripción de candidaturas a cargos públicos",
    description:
      "Sistema integral para recolectar y validar apoyos ciudadanos requeridos para inscripciones electorales.",
    longDescription:
      "Gestionamos el proceso completo de recolección de firmas y apoyos ciudadanos necesarios para la inscripción de candidaturas, con verificación en tiempo real y cumplimiento de requisitos legales.",
    benefits: [
      "Validación automática de documentos de identidad",
      "Seguimiento en tiempo real del progreso de recolección",
      "Base de datos unificada y segura",
      "Reportes de cumplimiento normativo",
      "Identificación de apoyos duplicados",
    ],
    features: [
      {
        title: "Digitalización de apoyos",
        description:
          "Captura digital de firmas y documentos con validación instantánea.",
      },
      {
        title: "Verificación automatizada",
        description:
          "Sistema de verificación cruzada con bases de datos electorales.",
      },
      {
        title: "Dashboard de seguimiento",
        description:
          "Panel de control con métricas en tiempo real del avance de recolección.",
      },
    ],
    category: "electoral",
  },
  {
    id: "recoleccion-apoyos-revocatorias",
    slug: "recoleccion-apoyos-revocatorias",
    icon: Vote,
    title:
      "Recolección y verificación de apoyos para revocatorias del mandato o inscripción de mecanismos de participación ciudadana",
    description:
      "Plataforma especializada para gestionar procesos de revocatoria y mecanismos de participación ciudadana.",
    longDescription:
      "Solución completa para la organización y validación de apoyos en procesos de revocatoria de mandato, consultas populares, referendos y otros mecanismos de participación ciudadana.",
    benefits: [
      "Cumplimiento de requisitos constitucionales y legales",
      "Trazabilidad completa del proceso",
      "Prevención de fraude en recolección",
      "Generación automática de documentación legal",
      "Soporte para múltiples tipos de mecanismos",
    ],
    features: [
      {
        title: "Gestión multicanal",
        description:
          "Recolección presencial y digital con validación centralizada.",
      },
      {
        title: "Verificación geográfica",
        description:
          "Validación de requisitos territoriales y distribución geográfica.",
      },
      {
        title: "Reportes legales",
        description:
          "Generación automática de formatos oficiales para entrega a autoridades.",
      },
    ],
    category: "electoral",
  },
  {
    id: "asesoria-juridica-electoral",
    slug: "asesoria-juridica-electoral",
    icon: Shield,
    title:
      "Asesoría, asistencia jurídica y técnica en las etapas preelectoral y electoral y postelectoral para las elecciones de carácter atípico o nacional",
    description:
      "Acompañamiento legal integral en todas las fases del proceso electoral.",
    longDescription:
      "Equipo especializado de abogados electoralistas que brindan asesoría jurídica completa desde la etapa preelectoral hasta el cierre del proceso, incluyendo recursos y acciones legales.",
    benefits: [
      "Expertos en derecho electoral colombiano",
      "Prevención de contingencias legales",
      "Respuesta rápida ante situaciones críticas",
      "Documentación legal completa",
      "Blindaje jurídico de la campaña",
    ],
    features: [
      {
        title: "Asesoría preventiva",
        description:
          "Análisis de riesgos y estrategias legales antes del inicio de campaña.",
      },
      {
        title: "Acompañamiento en tiempo real",
        description:
          "Soporte jurídico 24/7 durante el día de elecciones.",
      },
      {
        title: "Gestión de recursos",
        description:
          "Preparación y presentación de recursos ante autoridades electorales.",
      },
    ],
    category: "asesoria-juridica",
  },
];

export const specificElectoralServices: ServiceListItem[] = [
  {
    title: "Recolección y verificación de apoyos",
    description:
      "Para la inscripción de candidaturas a cargos públicos",
    highlight: true,
  },
  {
    title: "Recolección y verificación de apoyos",
    description:
      "Para revocatorias del mandato o inscripción de mecanismos de participación ciudadana",
    highlight: true,
  },
  {
    title: "Asesoría, asistencia jurídica y técnica",
    description:
      "En las etapas preelectoral y electoral y postelectoral para las elecciones de carácter atípico o nacional",
    highlight: true,
  },
];
