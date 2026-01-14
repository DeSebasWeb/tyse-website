import {
  electoralServices,
  specificElectoralServices,
} from "./electoral";
import {
  technologyServices,
  specificTechnologyServices,
} from "./technology";
import { surveyServices, specificSurveyServices } from "./surveys";
import {
  communicationServices,
  specificCommunicationServices,
} from "./communications";
import { ServiceDetail, ServiceListItem, Service } from "@/types/services";

/**
 * Índice central de todos los servicios de T&SE
 */

// Todos los servicios detallados
export const allServicesDetailed: ServiceDetail[] = [
  ...electoralServices,
  ...technologyServices,
  ...surveyServices,
  ...communicationServices,
];

// Servicios resumidos para home y listados
export const allServices: Service[] = allServicesDetailed.map((service) => ({
  id: service.id,
  icon: service.icon,
  title: service.title,
  description: service.description,
  slug: service.slug,
}));

// Servicios específicos listados por categoría
export const servicesByCategory = {
  electoral: specificElectoralServices,
  tecnologia: specificTechnologyServices,
  encuestas: specificSurveyServices,
  comunicacion: specificCommunicationServices,
};

// Función helper para obtener servicio por slug
export const getServiceBySlug = (
  slug: string
): ServiceDetail | undefined => {
  return allServicesDetailed.find((service) => service.slug === slug);
};

// Función helper para obtener servicios por categoría
export const getServicesByCategory = (
  category: string
): ServiceDetail[] => {
  return allServicesDetailed.filter(
    (service) => service.category === category
  );
};

// Exportar servicios individuales por categoría
export {
  electoralServices,
  technologyServices,
  surveyServices,
  communicationServices,
  specificElectoralServices,
  specificTechnologyServices,
  specificSurveyServices,
  specificCommunicationServices,
};
