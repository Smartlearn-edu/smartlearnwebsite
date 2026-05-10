import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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
  const staticRoutes = ['/', '/pricing', '/success-stories', '/blog', '/docs'];
  
  // Discover dynamic routes (blog and docs)
  const contentDir = path.resolve(__dirname, '../src/content');
  
  const getRoutesFromDir = (dirName) => {
    const dirPath = path.join(contentDir, dirName);
    if (!fs.existsSync(dirPath)) return [];
    return fs.readdirSync(dirPath)
         .filter(f => f.endsWith('.mdx'))
         .map(f => `/${dirName}/${f.replace('.mdx', '')}`);
  };

  const mdxFiles = [
    ...getRoutesFromDir('blog'),
    ...getRoutesFromDir('docs')
  ];

  const routesToPrerender = [...staticRoutes, ...mdxFiles];

  console.log(`Prerendering ${routesToPrerender.length} routes...`);

  for (const url of routesToPrerender) {
    const appHtml = render(url);
    
    // Replace the <div id="root"></div> with the rendered HTML
    // Handling possible variations in Vite's HTML output
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
  }
}

build().catch((err) => {
  console.error("Prerendering failed:", err);
  process.exit(1);
});
