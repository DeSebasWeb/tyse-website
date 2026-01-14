import { LucideIcon } from "lucide-react";

/**
 * Tipos para el sistema de servicios de T&SE
 */

// Servicio principal (vista resumida)
export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
}

// Servicio detallado (vista completa)
export interface ServiceDetail extends Service {
  longDescription: string;
  benefits: string[];
  features: ServiceFeature[];
  category: ServiceCategory;
}

// Característica de un servicio
export interface ServiceFeature {
  title: string;
  description: string;
  icon?: LucideIcon;
}

// Categoría de servicio
export type ServiceCategory =
  | "electoral"
  | "tecnologia"
  | "encuestas"
  | "asesoria-juridica";

// Área de negocio
export interface BusinessArea {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  services: string[]; // IDs de servicios relacionados
}

// Servicio específico listado (para las listas de servicios)
export interface ServiceListItem {
  title: string;
  description: string;
  highlight?: boolean;
}
