import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Served at /llms.txt. Built from the content collections so titles, prices
// and dates cannot drift from the pages themselves.

const escapeLinkText = (text: string) => text.replace(/([[\]])/g, '\\$1');

export const GET: APIRoute = async ({ site }) => {
  const url = (path: string) => new URL(path, site).href;

  const products = (await getCollection('products')).sort(
    (a, b) => (a.data.sort_order ?? 99) - (b.data.sort_order ?? 99)
  );
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  // Offers that live on their own page (href) are listed first, then the
  // product pages under /products/<slug>/.
  const linkedOffers = products.filter((p) => p.data.href);
  const productPages = products.filter((p) => !p.data.href);

  const serviceLines = [
    ...linkedOffers.map(
      (p) =>
        `- [${escapeLinkText(p.data.title)}](${url(p.data.href!)}): ${p.data.price_label}. ${p.data.tagline}`
    ),
    `- [Products](${url('/products/')}): All products and engagements.`,
    ...productPages.map(
      (p) =>
        `- [${escapeLinkText(p.data.title)}](${url(`/products/${p.id}/`)}): ${p.data.tagline} (${p.data.price_label})`
    ),
  ];

  const postLines = [
    `- [Blog](${url('/blog/')}): Lifecycle Operator, all posts.`,
    ...posts.map((post) => {
      const date = post.data.date.toISOString().slice(0, 10);
      const summary = post.data.description ? ` ${post.data.description}` : '';
      return `- [${escapeLinkText(post.data.title)}](${url(`/blog/${post.id}/`)}): Published ${date}.${summary}`;
    }),
  ];

  const body = [
    '# Boost My Email',
    '',
    '> Boost My Email is a fractional lifecycle email marketing service for B2B SaaS and PLG companies, led by Michael Roberts. 10+ years of hands-on experience.',
    '',
    '## Services',
    ...serviceLines,
    '',
    '## Writing',
    ...postLines,
    '',
    '## About',
    `- [About Michael Roberts](${url('/about/')})`,
    '',
    '## Contact',
    '- [Book a call](https://calendly.com/boostmyemail)',
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
