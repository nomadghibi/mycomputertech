import { createWriteStream } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { SitemapStream, streamToPromise } from 'sitemap';
import { businessInfo } from './src/data/businessInfo.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

const staticRoutes = ['/', '/services', '/service-areas', '/about', '/contact'];

const links = staticRoutes.map((route) => ({
  url: route,
  changefreq: 'weekly',
  priority: route === '/' ? 1 : 0.8,
  lastmodISO: new Date().toISOString(),
}));

const sitemapPath = resolve(__dirname, 'public', 'sitemap.xml');
const sitemapStream = new SitemapStream({ hostname: businessInfo.siteUrl });
const writeStream = createWriteStream(sitemapPath);

sitemapStream.pipe(writeStream);

links.forEach((link) => sitemapStream.write(link));
sitemapStream.end();

streamToPromise(sitemapStream)
  .then(() => {
    console.log('Sitemap successfully created!');
  })
  .catch((err) => {
    console.error('Error generating sitemap', err);
  });
