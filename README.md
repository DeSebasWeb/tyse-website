# T&SE - Tecnología & Servicios Electorales

Sitio web corporativo para T&SE, empresa colombiana especializada en servicios electorales con tecnología e inteligencia artificial.

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start

# Linter
npm run lint
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Stack Tecnológico

- **Framework:** Next.js 16+ (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4
- **Componentes:** shadcn/ui (customizados)
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Fuente:** Manrope (Google Fonts)

## Estructura de Carpetas

```
src/
├── app/
│   ├── layout.tsx          # Layout global con Navbar + Footer
│   ├── page.tsx            # Landing page principal
│   ├── globals.css         # Estilos globales + Tailwind
│   ├── servicios/
│   │   ├── page.tsx
│   │   └── control-360/
│   │       └── page.tsx
│   ├── nosotros/
│   │   └── page.tsx
│   └── contacto/
│       └── page.tsx
│
├── components/
│   ├── ui/                 # Componentes base (Button, Card, Input, etc.)
│   ├── layout/             # Navbar, Footer
│   ├── brand/              # Logo, Isotipo, BrandPattern
│   └── sections/           # Hero, Services, Stats, CTA
│
├── lib/
│   └── utils.ts            # Utilidades (cn para clases)
│
└── public/
    └── images/
```

## Paleta de Colores T&SE

### Colores Primarios
| Nombre | Hex | Uso |
|--------|-----|-----|
| Turquoise | `#57B8A8` | CTAs principales, acentos importantes |
| Teal | `#1B4C5C` | Backgrounds oscuros, headers |
| Dark Teal | `#0F2A35` | Texto sobre fondos claros, footer |

### Colores Secundarios
| Nombre | Hex | Uso |
|--------|-----|-----|
| Orange | `#FF4F1F` | Highlights, elementos de urgencia |
| Sand | `#D4A574` | Acentos cálidos opcionales |
| Cyan | `#7EC8BA` | Variante de turquoise para hovers |

### Neutros
| Nombre | Hex |
|--------|-----|
| Light Gray | `#E5E7EB` |
| White | `#FFFFFF` |

### Uso en Tailwind

```tsx
// Colores disponibles como clases de Tailwind
<div className="bg-tyse-turquoise text-tyse-dark-teal">
  Contenido
</div>

// Gradientes custom
<div className="bg-gradient-hero">...</div>
<div className="bg-gradient-primary">...</div>

// Clases de utilidad
<p className="gradient-text">Texto con gradiente</p>
<div className="glass-effect">Card con blur</div>
<section className="section-padding">...</section>
```

## Componentes Disponibles

### Button
```tsx
import { Button } from "@/components/ui/button";

<Button variant="default">Primario</Button>
<Button variant="secondary">Secundario</Button>
<Button variant="outline">Outline</Button>
<Button variant="outlineLight">Outline Light</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="accent">Acento (naranja)</Button>
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
```

### Logo
```tsx
import Logo from "@/components/brand/Logo";

<Logo variant="default" />   // Para fondos claros
<Logo variant="light" />     // Para fondos oscuros
<Logo showText={false} />    // Solo isotipo
```

## Rutas Disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Landing page principal |
| `/servicios` | Listado de servicios |
| `/servicios/control-360` | Control Electoral 360° |
| `/nosotros` | Sobre la empresa |
| `/contacto` | Formulario de contacto |

## Próximos Pasos

1. [ ] Completar página de Servicios con cards detalladas
2. [ ] Implementar página de Nosotros con equipo y timeline
3. [ ] Crear formulario de contacto funcional
4. [ ] Agregar página de Control 360° con features detalladas
5. [ ] Implementar sistema de blog/noticias (opcional)
6. [ ] Agregar animaciones de scroll con Framer Motion
7. [ ] Optimizar imágenes y agregar assets reales
8. [ ] Implementar formulario de "Solicitar Consultoría"
9. [ ] Agregar metadatos Open Graph para redes sociales
10. [ ] Configurar Google Analytics / Pixel de Facebook

## Despliegue

El proyecto está optimizado para desplegar en [Vercel](https://vercel.com).

```bash
# Build de producción
npm run build

# El build genera páginas estáticas para mejor rendimiento
```

## Licencia

Proyecto privado de T&SE - Tecnología & Servicios Electorales.
