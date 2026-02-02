import { getAllPosts } from '@/utils/mdx'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.fadiljaleel.com'
  const posts = await getAllPosts()

  // Base site routes
  const routes = [
    { path: '', changefreq: 'daily', priority: 1.0 },
    { path: 'about', changefreq: 'weekly', priority: 0.8 },
    { path: 'projects', changefreq: 'weekly', priority: 0.8 },
    { path: 'blog', changefreq: 'daily', priority: 0.9 },
    { path: 'contact', changefreq: 'monthly', priority: 0.5 },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}/${route.path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('')}

  ${posts
    .map(
      (post) => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.frontmatter.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  })
}
