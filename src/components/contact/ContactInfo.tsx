"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageSquare } from "lucide-react";
import { contactInfo } from "@/data/contact";

export default function ContactInfo() {
  return (
    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
      {/* Dirección */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl border-2 border-tyse-light-gray hover:border-tyse-turquoise/30 transition-all hover:shadow-lg"
      >
        <div className="w-16 h-16 rounded-2xl bg-tyse-turquoise/10 flex items-center justify-center mb-6">
          <MapPin className="w-8 h-8 text-tyse-turquoise" />
        </div>
        <h3 className="text-2xl font-bold text-tyse-dark-teal mb-4">
          Dirección
        </h3>
        <p className="text-lg text-tyse-teal/80 mb-2 leading-relaxed">
          {contactInfo.address.street}
        </p>
        <p className="text-lg text-tyse-teal/80 leading-relaxed">
          {contactInfo.address.city} – {contactInfo.address.country}
        </p>
      </motion.div>

      {/* Teléfonos */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white p-8 rounded-2xl border-2 border-tyse-light-gray hover:border-tyse-turquoise/30 transition-all hover:shadow-lg"
      >
        <div className="w-16 h-16 rounded-2xl bg-tyse-turquoise/10 flex items-center justify-center mb-6">
          <Phone className="w-8 h-8 text-tyse-turquoise" />
        </div>
        <h3 className="text-2xl font-bold text-tyse-dark-teal mb-4">
          Teléfonos
        </h3>
        <div className="space-y-2">
          {contactInfo.phones.map((phone, index) => (
            <a
              key={index}
              href={`tel:${phone.number}`}
              className="block text-lg text-tyse-teal/80 hover:text-tyse-turquoise transition-colors"
            >
              {phone.display}
            </a>
          ))}
        </div>
      </motion.div>

      {/* WhatsApp */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white p-8 rounded-2xl border-2 border-tyse-light-gray hover:border-tyse-turquoise/30 transition-all hover:shadow-lg"
      >
        <div className="w-16 h-16 rounded-2xl bg-tyse-turquoise/10 flex items-center justify-center mb-6">
          <MessageSquare className="w-8 h-8 text-tyse-turquoise" />
        </div>
        <h3 className="text-2xl font-bold text-tyse-dark-teal mb-4">
          WhatsApp
        </h3>
        <div className="space-y-2">
          {contactInfo.whatsapp.map((wa, index) => (
            <a
              key={index}
              href={`https://wa.me/${wa.number.replace(/\+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg text-tyse-turquoise hover:text-tyse-teal transition-colors font-medium"
            >
              {wa.display}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
