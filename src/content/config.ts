import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    github: z.string().optional(),
    external: z.string().optional(),
    tech: z.array(z.string()),
    featured: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

export const collections = {
  projects,
};
