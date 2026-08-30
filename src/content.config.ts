import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    image: z.string(),
    description: z.string(),
  }),
});

export const collections = { works };