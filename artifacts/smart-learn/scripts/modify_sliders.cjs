const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'generate_slider_sections.cjs');
let scriptContent = fs.readFileSync(scriptPath, 'utf8');

// Add data-sl-label to Slide 1
scriptContent = scriptContent.replace(/<img (.*?) alt="Slide 1" data-sl-edit="image" \/>/g, '<img $1 alt="Slide 1" data-sl-edit="image" data-sl-label="Slide 1 Image" />');
scriptContent = scriptContent.replace(/<h2 class="sl-hero-title" data-sl-edit="text">Access/g, '<h2 class="sl-hero-title" data-sl-edit="text" data-sl-label="Slide 1 Title">Access');
scriptContent = scriptContent.replace(/<p class="sl-hero-subtitle" data-sl-edit="text">A solution/g, '<p class="sl-hero-subtitle" data-sl-edit="text" data-sl-label="Slide 1 Subtitle">A solution');

// Add data-sl-label to Slide 2
scriptContent = scriptContent.replace(/<img (.*?) alt="Slide 2" data-sl-edit="image" \/>/g, '<img $1 alt="Slide 2" data-sl-edit="image" data-sl-label="Slide 2 Image" />');
scriptContent = scriptContent.replace(/<h2 class="sl-hero-title" data-sl-edit="text">Empower/g, '<h2 class="sl-hero-title" data-sl-edit="text" data-sl-label="Slide 2 Title">Empower');
scriptContent = scriptContent.replace(/<p class="sl-hero-subtitle" data-sl-edit="text">Join a vibrant/g, '<p class="sl-hero-subtitle" data-sl-edit="text" data-sl-label="Slide 2 Subtitle">Join a vibrant');

// Add data-sl-label to Slide 3
scriptContent = scriptContent.replace(/<img (.*?) alt="Slide 3" data-sl-edit="image" \/>/g, '<img $1 alt="Slide 3" data-sl-edit="image" data-sl-label="Slide 3 Image" />');
scriptContent = scriptContent.replace(/<h2 class="sl-hero-title" data-sl-edit="text">Achieve/g, '<h2 class="sl-hero-title" data-sl-edit="text" data-sl-label="Slide 3 Title">Achieve');
scriptContent = scriptContent.replace(/<p class="sl-hero-subtitle" data-sl-edit="text">Step-by-step/g, '<p class="sl-hero-subtitle" data-sl-edit="text" data-sl-label="Slide 3 Subtitle">Step-by-step');

// Update JS for all sliders to init carousel if not editor mode, but wait, the editor preview renders the section HTML and JS!
// Actually, if we initialize in the JS block, the preview will run it!
scriptContent = scriptContent.replace(/js: clean\(\`\`\)/g, "js: clean(`\\n(function() {\\n    var carousels = document.querySelectorAll('.carousel');\\n    if (typeof bootstrap !== 'undefined') {\\n        carousels.forEach(c => new bootstrap.Carousel(c));\\n    }\\n})();\\n`)");

fs.writeFileSync(scriptPath, scriptContent);
console.log("Updated slider script!");
