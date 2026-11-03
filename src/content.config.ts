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
        duracion: z.string(),
        nivel: z.string(),
        precio: z.number().optional(),
        precioLanzamiento: z.number().optional(),
        lanzamientoHasta: z.coerce.date().optional(),
        hotmartUrl: z.string().url().optional(),
        hotmartUrlLanzamiento: z.string().url().optional(),
        trailerYoutubeId: z.string().optional(),
        portada: image().optional(),
        temario: z.array(z.string()),
        temarioPreliminar: z.boolean().default(false),
        paraQuien: z.array(z.string()),
        orden: z.number().default(0),
      })
      // Una clase disponible sin enlace de compra no puede publicarse.
      .refine((c) => c.estado !== 'disponible' || Boolean(c.hotmartUrl), {
        message: 'Una clase "disponible" necesita hotmartUrl.',
        path: ['hotmartUrl'],
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

// Los testimonios de ejemplo llevan `muestra: true`: se ven en desarrollo y el build los excluye siempre.
const testimonios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonios' }),
  schema: z.object({
    nombre: z.string(),
    rol: z.string().optional(),
    texto: z.string(),
    muestra: z.boolean().default(false),
    orden: z.number().default(0),
  }),
});

export const collections = { clases, servicios, apps, testimonios };
