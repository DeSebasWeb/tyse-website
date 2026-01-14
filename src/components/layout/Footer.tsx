import Link from "next/link";
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/brand/Logo";

const quickLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/servicios/control-360", label: "Control 360°" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

const socialLinks = [
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tyse-dark-teal text-white">
      <div className="container-tyse section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Columna 1: Logo y descripción */}
          <div className="space-y-6">
            <Logo variant="light" />
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Donde otros reaccionan, nosotros nos anticipamos. Tecnología
              electoral de vanguardia con inteligencia artificial para campañas
              ganadoras.
            </p>
            {/* Redes sociales */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tyse-turquoise transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Links rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-tyse-turquoise transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-tyse-turquoise flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Bogotá, Colombia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-tyse-turquoise flex-shrink-0" />
                <a
                  href="tel:+573001234567"
                  className="text-white/70 hover:text-tyse-turquoise transition-colors text-sm"
                >
                  +57 300 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-tyse-turquoise flex-shrink-0" />
                <a
                  href="mailto:contacto@tyse.co"
                  className="text-white/70 hover:text-tyse-turquoise transition-colors text-sm"
                >
                  contacto@tyse.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              &copy; {currentYear} T&SE - Tecnología & Servicios Electorales.
              Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <Link href="/privacidad" className="hover:text-white/70 transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-white/70 transition-colors">
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
