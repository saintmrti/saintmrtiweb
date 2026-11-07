import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const clases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/clases' }),
  schema: ({ image }) =>
    z
      .object({
        titulo: z.string(),
        tituloCorto: z.string(),
        resultado: z.string(),
        descripcion: z.string(),
        estado: z.enum(['proximamente', 'disponible']),
        nivel: z.string(),
        precio: z.number().optional(),
        precioLanzamiento: z.number().optional(),
        lanzamientoHasta: z.coerce.date().optional(),
        compraUrl: z.string().url().optional(),
        compraUrlLanzamiento: z.string().url().optional(),
        trailerYoutubeId: z.string().optional(),
        portada: image().optional(),
        paraQuien: z.array(z.string()),
        orden: z.number().default(0),
      })
      // Una clase disponible sin enlace de compra no puede publicarse.
      .refine((c) => c.estado !== 'disponible' || Boolean(c.compraUrl), {
        message: 'Una clase "disponible" necesita compraUrl.',
        path: ['compraUrl'],
      }),
});

const servicios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/servicios' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      tituloCorto: z.string(),
      etiqueta: z.string(),
      descripcion: z.string(),
      incluye: z.array(z.string()),
      entrega: z.string(),
      mensajeWhatsApp: z.string(),
      destacado: z.boolean().default(false),
      imagen: image().optional(),
      orden: z.number(),
    }),
});

const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: ({ image }) =>
    z.object({
      nombre: z.string(),
      descripcion: z.string(),
      estado: z.enum(['proximamente', 'disponible']),
      version: z.string().optional(),
      nota: z.string().optional(),
      url: z.string().url().optional(),
      imagen: image().optional(),
      imagenMovil: image().optional(),
      funciones: z.array(z.string()).default([]),
      stack: z.array(z.string()).default([]),
      orden: z.number().default(0),
    }),
});

export const collections = { clases, servicios, apps };
