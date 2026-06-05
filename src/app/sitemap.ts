import { MetadataRoute } from 'next';
import { productsData } from '@/lib/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://deltatraders.co.in';

  const routes = [
    '',
    '/about',
    '/products',
    '/products/upvc-windows',
    '/products/upvc-doors',
    '/products/aluminium',
    '/products/glass-partitions',
    '/products/specialty',
    '/services',
    '/gallery',
    '/blog',
    '/faq',
    '/contact',
    '/get-quote',
    '/privacy-policy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const productRoutes = productsData.map((product) => ({
    url: `${baseUrl}/products/${product.categorySlug}/${product.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...productRoutes];
}
