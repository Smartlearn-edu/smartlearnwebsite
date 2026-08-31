const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'generate_slider_sections.cjs');
let scriptContent = fs.readFileSync(scriptPath, 'utf8');

// Force white color on sl-hero-title by adding !important
scriptContent = scriptContent.replace(/color: #fff;/g, 'color: #fff !important;');
scriptContent = scriptContent.replace(/color: #f8f9fa;/g, 'color: #f8f9fa !important;');

fs.writeFileSync(scriptPath, scriptContent);
console.log("Forced text color for image overlays!");
