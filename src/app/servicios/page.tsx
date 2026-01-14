"use client";

import { motion } from "framer-motion";
import { businessAreas } from "@/data/business-areas";
import { servicesByCategory } from "@/data/services";
import BusinessAreaCard from "@/components/services/BusinessAreaCard";
import ServiceListItem from "@/components/services/ServiceListItem";

export default function ServiciosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero">
        <div className="container-tyse section-padding pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Nuestros Servicios
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl">
              Soluciones tecnológicas integrales diseñadas para maximizar tus
              resultados electorales con precisión, transparencia y efectividad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Áreas de Negocio */}
      <section className="section-padding bg-white">
        <div className="container-tyse">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tyse-dark-teal">
              Áreas de{" "}
              <span className="text-tyse-turquoise">Especialización</span>
            </h2>
            <p className="mt-4 text-lg text-tyse-teal/70">
              Profesionales de diferentes disciplinas del conocimiento expertos
              en organización, control y ejecución de procesos electorales.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessAreas.map((area, index) => (
              <BusinessAreaCard key={area.id} area={area} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Electoral */}
      <section className="section-padding bg-tyse-light-gray/30">
        <div className="container-tyse">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex items-start gap-6 mb-12">
              <div className="w-20 h-20 rounded-2xl bg-tyse-turquoise/10 flex items-center justify-center flex-shrink-0">
                {(() => {
                  const Icon = businessAreas[0].icon;
                  return <Icon className="w-10 h-10 text-tyse-turquoise" />;
                })()}
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tyse-dark-teal mb-3">
                  Servicios Electorales
                </h2>
                <p className="text-lg md:text-xl text-tyse-teal/70">
                  Gestión integral de procesos electorales
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {servicesByCategory.electoral.map((item, index) => (
                <ServiceListItem key={index} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Servicios de Tecnología */}
      <section className="section-padding bg-white">
        <div className="container-tyse">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex items-start gap-6 mb-12">
              <div className="w-20 h-20 rounded-2xl bg-tyse-turquoise/10 flex items-center justify-center flex-shrink-0">
                {(() => {
                  const Icon = businessAreas[1].icon;
                  return <Icon className="w-10 h-10 text-tyse-turquoise" />;
                })()}
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tyse-dark-teal mb-3">
                  Desarrollo de Software y Tecnología
                </h2>
                <p className="text-lg md:text-xl text-tyse-teal/70">
                  Optimización de actividades operacionales
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {servicesByCategory.tecnologia.map((item, index) => (
                <ServiceListItem key={index} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Servicios de Encuestas */}
      <section className="section-padding bg-tyse-light-gray/30">
        <div className="container-tyse">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex items-start gap-6 mb-12">
              <div className="w-20 h-20 rounded-2xl bg-tyse-turquoise/10 flex items-center justify-center flex-shrink-0">
                {(() => {
                  const Icon = businessAreas[2].icon;
                  return <Icon className="w-10 h-10 text-tyse-turquoise" />;
                })()}
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tyse-dark-teal mb-3">
                  Encuestas y Estudios
                </h2>
                <p className="text-lg md:text-xl text-tyse-teal/70">
                  Medición científica de clima político
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {servicesByCategory.encuestas.map((item, index) => (
                <ServiceListItem key={index} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Servicios Adicionales */}
      <section className="section-padding bg-white">
        <div className="container-tyse">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex items-start gap-6 mb-12">
              <div className="w-20 h-20 rounded-2xl bg-tyse-turquoise/10 flex items-center justify-center flex-shrink-0">
                {(() => {
                  const Icon = businessAreas[3].icon;
                  return <Icon className="w-10 h-10 text-tyse-turquoise" />;
                })()}
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tyse-dark-teal mb-3">
                  Servicios Complementarios
                </h2>
                <p className="text-lg md:text-xl text-tyse-teal/70">
                  Comunicación y asesoría especializada
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {servicesByCategory.comunicacion.map((item, index) => (
                <ServiceListItem key={index} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-tyse">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para transformar tu campaña?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Contáctanos para una consultoría personalizada y descubre cómo
              nuestros servicios pueden impulsar tus resultados electorales.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-tyse-turquoise font-semibold rounded-lg hover:bg-tyse-light-gray transition-colors"
            >
              Solicitar Consultoría
              <span className="text-lg">→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
