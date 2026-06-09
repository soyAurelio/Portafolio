# Marco Aurelio — Backend Developer

Portfolio personal construido con **Astro v6**, **Tailwind CSS v4** y **TypeScript**.

## 🌐 Sitio

**[soyaurelio.dev](https://soyaurelio.dev)**

## ✨ Features

- **i18n**: español e inglés con routing automático y traducción de slugs
- **Dark mode**: detección del sistema + toggle manual con persistencia
- **SEO completo**: JSON-LD (Person schema), Open Graph, Twitter Cards, hreflang, sitemap automático
- **Smooth scroll**: Lenis con animaciones de entrada nativas
- **CV preview**: modal con iframe para previsualizar antes de descargar
- **Typewriter effect**: animación de nombre en hero y footer
- **Marquee tags**: scroll horizontal automático para stack y tags de proyectos
- **Responsive**: mobile-first con Tailwind CSS v4

## 🛠 Stack del proyecto

| Categoría | Tecnología |
|-----------|-----------|
| Framework | Astro v6 |
| Estilos | Tailwind CSS v4 |
| Lenguaje | TypeScript |
| Scroll | Lenis |
| Package manager | pnpm |
| Deploy | Cloudflare Pages |

## 🗂 Estructura

```
src/
├── components/   # Componentes reutilizables (.astro)
├── data/         # Datos: proyectos, experiencia, stack, autor, changelog
├── i18n/         # Utilidades de internacionalización y traducciones
├── layouts/      # Layout base con SEO
├── pages/        # Rutas (es + en)
│   ├── index.astro
│   ├── proyectos/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── changelog.astro
│   └── en/
│       ├── index.astro
│       ├── projects/
│       │   ├── index.astro
│       │   └── [slug].astro
│       └── changelog.astro
└── styles/       # CSS global y design tokens
```

## 🚀 Desarrollo

```bash
# Instalar dependencias
pnpm install

# Servidor de desarrollo
pnpm dev

# Type checking
pnpm check

# Build de producción
pnpm build

# Previsualizar build
pnpm preview
```

## 📄 Licencia

MIT — ver [LICENSE](./LICENSE)
