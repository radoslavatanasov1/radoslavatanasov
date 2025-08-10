// Automatic sitemap.xml generator for SEO
export class SitemapGenerator {
  constructor(baseUrl = 'https://radoslav.site') {
    this.baseUrl = baseUrl.replace(/\/$/, ''); // Remove trailing slash
    this.pages = [];
    this.lastGenerated = null;
  }

  // Add a page to the sitemap
  addPage(url, priority = 0.8, changefreq = 'monthly', lastmod = new Date()) {
    this.pages.push({
      url: url.startsWith('http') ? url : `${this.baseUrl}${url}`,
      priority,
      changefreq,
      lastmod: lastmod instanceof Date ? lastmod.toISOString().split('T')[0] : lastmod
    });
  }

  // Generate default portfolio pages
  generateDefaultPages() {
    const now = new Date().toISOString().split('T')[0];
    
    // Main pages
    this.addPage('/', 1.0, 'weekly', now);
    this.addPage('/#home', 0.9, 'monthly', now);
    this.addPage('/#services', 0.8, 'monthly', now);
    this.addPage('/#skills', 0.8, 'monthly', now);
    this.addPage('/#work', 0.9, 'weekly', now); // Portfolio section
    this.addPage('/#resume', 0.7, 'monthly', now);
    this.addPage('/#testimonial', 0.6, 'monthly', now);
    this.addPage('/#pricing', 0.8, 'monthly', now);
    this.addPage('/#blog', 0.7, 'weekly', now);
    this.addPage('/#contact', 0.8, 'monthly', now);
  }

  // Add project pages from portfolio data
  addProjectPages(projects) {
    projects.forEach(project => {
      if (project.link) {
        // Add external project link with lower priority
        this.addPage(project.link, 0.6, 'monthly');
      }
    });
  }

  // Generate XML sitemap
  generateXML() {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    this.pages.forEach(page => {
      xml += '  <url>\n';
      xml += `    <loc>${page.url}</loc>\n`;
      xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += '  </url>\n';
    });
    
    xml += '</urlset>';
    this.lastGenerated = new Date();
    return xml;
  }

  // Generate robots.txt content
  generateRobotsTxt() {
    return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${this.baseUrl}/sitemap.xml

# Block common bot traps
Disallow: /admin/
Disallow: /private/
Disallow: /.git/
Disallow: /node_modules/

# Allow important resources
Allow: /assets/
Allow: /images/
Allow: /*.css
Allow: /*.js
Allow: /*.png
Allow: /*.jpg
Allow: /*.jpeg
Allow: /*.gif
Allow: /*.svg
Allow: /*.webp

# Crawl-delay for respectful crawling
Crawl-delay: 1`;
  }

  // Download sitemap as file
  downloadSitemap() {
    const xml = this.generateXML();
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    console.log('Sitemap downloaded successfully!');
  }

  // Download robots.txt as file
  downloadRobotsTxt() {
    const robotsTxt = this.generateRobotsTxt();
    const blob = new Blob([robotsTxt], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'robots.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    console.log('robots.txt downloaded successfully!');
  }

  // Get sitemap stats
  getStats() {
    return {
      totalPages: this.pages.length,
      lastGenerated: this.lastGenerated,
      baseUrl: this.baseUrl,
      pages: this.pages
    };
  }

  // Clear all pages
  clear() {
    this.pages = [];
  }

  // Generate complete SEO package
  generateSEOPackage(projects = []) {
    this.clear();
    this.generateDefaultPages();
    this.addProjectPages(projects);
    
    return {
      sitemap: this.generateXML(),
      robotsTxt: this.generateRobotsTxt(),
      stats: this.getStats()
    };
  }
}

// Singleton instance
export const sitemapGenerator = new SitemapGenerator();
