import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

function toTaiwanTime(date) {
  return new Date(date.getTime() + 8 * 60 * 60 * 1000);
}

export async function GET(context) {
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort((a, b) =>
    b.data.publishDate.getTime() - a.data.publishDate.getTime()
  );
  return rss({
    title: 'Maoyue Blog',
    description: 'Personal blog by Maoyue',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: toTaiwanTime(post.data.publishDate),
      link: `/blog/${post.slug}/`,
      categories: post.data.tags || [],
    })),
    customData: `<language>en-us</language>`,
  });
}