export interface ChangelogEntry {
  version: string;
  date: string;
  changes: Record<'es' | 'en', string[]>;
}

export const changelog: ChangelogEntry[] = [
  {
    version: 'v1.0.0',
    date: '2026-06-07',
    changes: {
      es: [
        'Diseño minimalista con Astro v6 y Tailwind CSS v4.',
        'Soporte i18n: español e inglés.',
        'Páginas de detalle de proyectos con navegación jerárquica.',
        'Modo claro/oscuro con detección del sistema.',
        'Scroll suave con Lenis.',
        'SEO: JSON-LD, Open Graph, Twitter Cards, hreflang, sitemap.',
        'CV con previsualización en modal.',
        'Changelog (esta página).',
      ],
      en: [
        'Minimalist design with Astro v6 and Tailwind CSS v4.',
        'i18n support: Spanish and English.',
        'Project detail pages with hierarchical navigation.',
        'Light/dark mode with system detection.',
        'Smooth scrolling with Lenis.',
        'SEO: JSON-LD, Open Graph, Twitter Cards, hreflang, sitemap.',
        'CV preview in modal.',
        'Changelog (this page).',
      ],
    },
  },
];
