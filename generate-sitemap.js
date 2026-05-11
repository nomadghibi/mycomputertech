import { createWriteStream, writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { SitemapStream, streamToPromise } from 'sitemap';
import { businessInfo } from './src/data/businessInfo.js';
import { blogPosts } from './src/data/blogPosts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');
const rawSiteUrl = process.env.SITE_URL || process.env.VITE_SITE_URL || businessInfo.siteUrl;
const siteUrl = rawSiteUrl.replace(/\/+$/, '');

const staticRoutes = ['/', '/services', '/service-areas', '/about', '/contact', '/blog'];
const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
const allRoutes = [...staticRoutes, ...blogRoutes];

const links = allRoutes.map((route) => ({
  url: route,
  changefreq: route.startsWith('/blog/') ? 'monthly' : 'weekly',
  priority: route === '/' ? 1 : route.startsWith('/blog/') ? 0.7 : 0.8,
  lastmodISO: new Date().toISOString(),
}));

const sitemapPath = resolve(__dirname, 'public', 'sitemap.xml');
const sitemapStream = new SitemapStream({ hostname: siteUrl });
const writeStream = createWriteStream(sitemapPath);

sitemapStream.pipe(writeStream);

links.forEach((link) => sitemapStream.write(link));
sitemapStream.end();

streamToPromise(sitemapStream)
  .then(() => {
    writeFileSync(
      resolve(__dirname, 'public', 'robots.txt'),
      `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      'utf8'
    );
    console.log('Sitemap successfully created!');
  })
  .catch((err) => {
    console.error('Error generating sitemap', err);
  });
