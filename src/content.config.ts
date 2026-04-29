import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    price: z.number(),
    price_label: z.string(),
    category: z.enum(['done-for-you', 'consulting', 'digital']),
    cta_label: z.string(),
    cta_url: z.string(),
    featured: z.boolean().default(false),
    badge: z.string().optional(),
    available_for: z.array(z.string()).optional(),
    sort_order: z.number().optional(),
  }),
});

export const collections = { blog, products };
