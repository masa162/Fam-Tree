
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../../config';

export async function GET(context) {
  const articles = await getCollection('articles');
  const posts = articles.map(article => ({
    slug: article.slug,
    title: article.data.title,
    description: article.data.description,
    tags: article.data.tags,
  }));

  return new Response(
    JSON.stringify(posts), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
