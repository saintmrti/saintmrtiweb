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

  // Páginas que ya no viven aquí: el portafolio anterior (y su formulario /registro) está en work.saintmrti.com
  // y /links es el Linktree de Saint. Con salida estática salen como redirección HTML; al publicar se escriben
  // como redirecciones reales en `public/_redirects` (/project/*, /registro y /links).
  redirects: {
    '/project/1': 'https://work.saintmrti.com/project/1',
    '/project/2': 'https://work.saintmrti.com/project/2',
    '/project/3': 'https://work.saintmrti.com/project/3',
    '/registro': 'https://work.saintmrti.com/registro',
    '/links': 'https://linktr.ee/saintmrti',
  },

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
