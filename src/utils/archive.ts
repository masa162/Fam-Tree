// utils/archive.ts
import { getCollection } from "astro:content";

export async function getArchiveByMonth() {
  const articles = await getCollection("articles");
  const archiveMap: Record<string, { title: string; slug: string }[]> = {};

  for (const article of articles) {
    const date = new Date(article.data.pubDate);
    const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

    if (!archiveMap[yearMonth]) archiveMap[yearMonth] = [];
    archiveMap[yearMonth].push({ title: article.data.title, slug: article.slug });
  }

  return archiveMap;
}
