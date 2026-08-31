const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'generate_slider_sections.cjs');
let scriptContent = fs.readFileSync(scriptPath, 'utf8');

const originalCarouselJS = `
(function() {
    const root = document.querySelector('.sl-slider-carousel');
    if (!root) return;
    const track = root.querySelector('#slCardTrack');
    const prev = root.querySelector('.sl-c-prev');
    const next = root.querySelector('.sl-c-next');
    if(!track || !prev || !next) return;
    
    const scrollAmount = 350; // approximate width of one card
    
    prev.addEventListener('click', () => {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    
    next.addEventListener('click', () => {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
})();
`;

// Find slider-carousel object in scriptContent and replace its js: clean(...)
// This is tricky with regex, let's just do a manual string replace
const parts = scriptContent.split('id: "slider-carousel",');
if(parts.length === 2) {
    const part2 = parts[1];
    // Find the js: clean(
    const jsIndex = part2.indexOf('js: clean(');
    if (jsIndex !== -1) {
        const nextObjectEnd = part2.indexOf('id: "slider-twocol",');
        let blockToFix = part2.substring(0, nextObjectEnd);
        
        blockToFix = blockToFix.replace(/js: clean\([\s\S]*?\n\s{2}\}/, "js: clean(`" + originalCarouselJS + "`)\n  }");
        
        scriptContent = parts[0] + 'id: "slider-carousel",' + blockToFix + part2.substring(nextObjectEnd);
        fs.writeFileSync(scriptPath, scriptContent);
        console.log("Restored slider-carousel JS");
    }
}
