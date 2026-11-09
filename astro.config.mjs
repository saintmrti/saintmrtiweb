// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://saintmrti.com',

  // La barra de herramientas de Astro tapa la página al revisarla; no se usa en este proyecto.
  devToolbar: { enabled: false },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],

  // Las rutas del sitio anterior (/project/*, /registro y /links) se redirigen con `public/_redirects`: Cloudflare
  // las responde con 301 o 302 reales, no con una página HTML de redirección.

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Barlow Condensed',
      cssVariable: '--font-barlow-condensed',
      weights: [600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Arial Narrow', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Barlow',
      cssVariable: '--font-barlow',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Zilla Slab',
      cssVariable: '--font-zilla-slab',
      weights: [700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
  ],
});
