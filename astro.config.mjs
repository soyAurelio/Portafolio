// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://soyaurelio.dev',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          en: 'en-US',
        },
      },
      serialize(item) {
        // The i18n auto-detection handles home + changelog (paths match after locale prefix).
        // For project pages, paths differ (proyectos/ ≠ projects/) — add hreflang manually.
        const url = item.url;

        if (url.includes('/proyectos/')) {
          return {
            ...item,
            links: [
              { lang: 'es-ES', url },
              { lang: 'en-US', url: url.replace('/proyectos/', '/en/projects/') },
            ],
          };
        }

        if (url.includes('/en/projects/')) {
          return {
            ...item,
            links: [
              { lang: 'es-ES', url: url.replace('/en/projects/', '/proyectos/') },
              { lang: 'en-US', url },
            ],
          };
        }

        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
