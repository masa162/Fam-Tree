import { defineCollection, z } from "astro:content";

/* ---------- blog ---------- */
const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),      // ✅ image() はコールバック引数
      badge: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

/* ---------- store ---------- */
const storeCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      custom_link_label: z.string(),
      custom_link: z.string().url().optional(),
      updatedDate: z.coerce.date(),
      pricing: z.string().optional(),
      oldPricing: z.string().optional(),
      badge: z.string().optional(),
      checkoutUrl: z.string().url().optional(),
      heroImage: image().optional(),      // ✅
    }),
});

/* ---------- articles ---------- */
const articleCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.coerce.date(),
      heroImage: image().optional(),      // ✅ astro:assets オブジェクト
      image: z.string().optional(),       // 文字列パス (/public/images/…)
      tags: z.array(z.string()).optional(),
      badge: z.string().optional(),
      category: z.string().optional(),
      author: z.string().optional(),
    }),
});

/* ---------- コレクション登録 ---------- */
export const collections = {
  blog: blogCollection,
  store: storeCollection,
  articles: articleCollection,
};
