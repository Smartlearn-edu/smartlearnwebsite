import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateMarkdownFiles } from './generate-markdown.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, '../dist/public');
const ssrDistPath = path.resolve(__dirname, '../dist/ssr');

async function build() {
  const templatePath = path.resolve(distPath, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error('index.html not found. Make sure to run vite build first.');
  }
  const template = fs.readFileSync(templatePath, 'utf-8');
  
  // Import the server bundle
  const { render } = await import(path.resolve(ssrDistPath, 'entry-server.js'));

  // Define static routes
  const staticRoutes = [
    '/',
    '/pricing',
    '/success-stories',
    '/gallery',
    '/blog',
    '/docs',
    '/services/moodle-core',
    '/services/plugins',
    '/services/ai',
    '/services/n8n',
    '/services/training',
    '/services/mobile-app'
  ];
  
  // Discover dynamic routes (blog and docs)
  const contentDir = path.resolve(__dirname, '../src/content');
  
  const getRoutesFromDir = (dirName) => {
    const dirPath = path.join(contentDir, dirName);
    if (!fs.existsSync(dirPath)) return [];
    
    // Check for nested language dirs (en, ar)
    const routes = [];
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const langDirPath = path.join(dirPath, entry.name);
        const files = fs.readdirSync(langDirPath).filter(f => f.endsWith('.mdx'));
        for (const f of files) {
          const slug = f.replace('.mdx', '');
          routes.push(`/${dirName}/${entry.name}/${slug}`);
          if (entry.name === 'en') {
            routes.push(`/${dirName}/${slug}`);
          }
        }
      } else if (entry.name.endsWith('.mdx')) {
        routes.push(`/${dirName}/${entry.name.replace('.mdx', '')}`);
      }
    }
    return routes;
  };

  const mdxFiles = [
    ...getRoutesFromDir('blog'),
    ...getRoutesFromDir('docs')
  ];

  const routesToPrerender = Array.from(new Set([...staticRoutes, ...mdxFiles]));

  console.log(`Prerendering ${routesToPrerender.length} routes...`);

  for (const url of routesToPrerender) {
    try {
      const appHtml = render(url);
      
      // Replace the <div id="root"></div> with the rendered HTML
      const html = template.replace(
        /<div id="root"><\/div>/,
        `<div id="root">${appHtml}</div>`
      );

      const filePath = url === '/' 
          ? path.join(distPath, 'index.html') 
          : path.join(distPath, url, 'index.html');
      
      // Create directory if it doesn't exist
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(filePath, html);
      console.log(`pre-rendered: ${url}`);
    } catch (e) {
      console.warn(`Warning: failed to SSR prerender ${url}:`, e.message);
    }
  }

  // Generate Markdown for Agents
  await generateMarkdownFiles();
}

build().catch((err) => {
  console.error("Prerendering failed:", err);
  process.exit(1);
});

