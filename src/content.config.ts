import { z, defineCollection } from "astro:content";
import { file } from "astro/loaders";

const projects = defineCollection({
    loader: file("src/data/projects.json"),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string().optional(),
        image: z.string(),
        liveSiteURL: z.string().optional(),
        githubURL: z.string(),
        tech: z.array(z.string()),
        highlights: z.array(z.string())
    }),
});

export const collections = { projects };