import { z, defineCollection } from "astro:content";

// 📝 blog コレクションのスキーマ
const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.string().optional(),
  heroImage: z.string().optional(),
  badge: z.string().optional(),
  tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
    message: 'tags must be unique',
  }).optional(),
});

// 🛍 store コレクションのスキーマ
const storeSchema = z.object({
  title: z.string(),
  description: z.string(),
  custom_link_label: z.string(),
  custom_link: z.string().optional(),
  updatedDate: z.coerce.date(),
  pricing: z.string().optional(),
  oldPricing: z.string().optional(),
  badge: z.string().optional(),
  checkoutUrl: z.string().optional(),
  heroImage: z.string().optional(),
});

// 📰 articles コレクションのスキーマ
const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(), // ← ここを z.string() → z.coerce.date() に統一
  image: z.string().optional(), // ← heroImage ではなく image を使っているのでここも追加
  tags: z.array(z.string()).optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;
export type ArticleSchema = z.infer<typeof articleSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const storeCollection = defineCollection({ schema: storeSchema });
const articleCollection = defineCollection({ schema: articleSchema });

export const collections = {
  blog: blogCollection,
  store: storeCollection,
  articles: articleCollection,
};
