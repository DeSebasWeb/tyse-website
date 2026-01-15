"use client";

import { motion } from "framer-motion";
import { Mic2, Users, Briefcase, Target } from "lucide-react";

export default function VoceriaWorkshop() {
  const targetAudience = [
    { icon: Briefcase, text: "Altos ejecutivos y empresarios" },
    { icon: Users, text: "Directivos del sector público y privado" },
    { icon: Target, text: "Líderes políticos y sociales" },
    { icon: Mic2, text: "Conferencistas y profesionales" },
  ];

  return (
    <section className="section-padding bg-tyse-light-gray/30">
      <div className="container-tyse">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tyse-dark-teal mb-6">
              Talleres de <span className="text-tyse-turquoise">Vocería</span>
            </h2>
            <p className="text-lg md:text-xl text-tyse-teal/70 max-w-4xl mx-auto">
              Está diseñado para altos ejecutivos, empresarios, directivos del
              sector público y privado, líderes políticos y sociales,
              conferencistas o profesionales de todas las áreas que quieran
              desenvolverse exitosamente en entrevistas ante los medios de
              comunicación, así como en presentaciones, conferencias y discursos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {targetAudience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border-2 border-tyse-light-gray hover:border-tyse-turquoise/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-tyse-turquoise/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-tyse-turquoise" />
                </div>
                <p className="text-tyse-dark-teal font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-tyse-turquoise to-tyse-teal p-8 rounded-2xl text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Objetivo del Taller</h3>
            <p className="text-lg text-white/90">
              Desarrollar habilidades de comunicación efectiva para entrevistas,
              presentaciones, conferencias y discursos ante medios y audiencias
              diversas.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
