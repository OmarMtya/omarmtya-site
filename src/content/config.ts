import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string().default('Omar Montoya'),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    lang: z.enum(['en', 'es']).default('en'),
    image: z.string().optional(),
  }),
});

const siteCollection = defineCollection({
  type: 'data',
  schema: z.object({
    hero: z.object({
      status: z.string(),
      location: z.string(),
      id: z.string(),
      label: z.string(),
      title: z.string(),
      role: z.string(),
      description: z.string(),
      btn_modules: z.string(),
      btn_github: z.string()
    }),
    about: z.object({
      id: z.string(),
      auth: z.string(),
      title: z.string(),
      p1_strong: z.string(),
      p1: z.string(),
      p2: z.string(),
      stack_title: z.string(),
      stack: z.array(z.string()),
      method_title: z.string(),
      method: z.array(z.string()),
      certs_title: z.string(),
      certs: z.array(z.string())
    }),
    projects: z.object({
      title: z.string(),
      version: z.string(),
      empty_message: z.string().optional(),
      list: z.array(z.object({
        title: z.string(),
        type: z.string(),
        description: z.string(),
        tech: z.array(z.string()),
        link: z.string(),
        demoLink: z.string().optional(),
        cta: z.string()
      }))
    }),
    footer: z.object({
      brand: z.string(),
      description: z.string(),
      connect_title: z.string(),
      status_title: z.string(),
      status_avail_label: z.string(),
      status_avail_value: z.string(),
      status_update_label: z.string(),
      status_update_value: z.string(),
      status_version_label: z.string(),
      status_version_value: z.string(),
      copyright: z.string()
    })
  })
});

export const collections = {
  'blog': blogCollection,
  'site': siteCollection,
};
