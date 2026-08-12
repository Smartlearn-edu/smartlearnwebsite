const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const sectionsDir = path.join(publicDir, 'sections');
const catalogPath = path.join(publicDir, 'catalog.json');

if (!fs.existsSync(sectionsDir)) {
    fs.mkdirSync(sectionsDir, { recursive: true });
}

const baseCss = `
/* SmartLearn Native Color Classes */
.sl-text-primary { color: var(--smartlearn-primary) !important; }
.sl-text-emphasis { color: var(--smartlearn-text) !important; }
.sl-text-muted { color: var(--smartlearn-text-muted) !important; }
.sl-bg-main { background-color: var(--smartlearn-bg) !important; }
.sl-bg-card { background-color: var(--smartlearn-card-bg) !important; border: 1px solid var(--smartlearn-card-border) !important; }
.sl-bg-primary { background-color: var(--smartlearn-primary) !important; }
.sl-btn-primary { background-color: var(--smartlearn-primary) !important; border-color: var(--smartlearn-primary) !important; color: #fff !important; transition: transform 0.3s ease, box-shadow 0.3s ease; }
.sl-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.2) !important; filter: brightness(0.9); }
`;

const sections = [
    {
        id: "cta_immersive_hero",
        meta: {
            name: "Immersive Hero CTA",
            category: "Call to Action",
            variant: "High-Impact",
            description: "Full-bleed background with integrated cinematic CTA.",
            tags: ["cta", "marketing", "call to action"],
            image_count: 1
        },
        html: `<!-- sl-section: cta_immersive_hero | v1.0 -->
<div class="sl-cta-immersive position-relative overflow-hidden sl-bg-primary" style="min-height: 80vh; display: flex; align-items: center; justify-content: center;">
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-image" style="background-image: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80'); background-size: cover; background-position: center;"></div>
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark" style="opacity: 0.6;"></div>
    
    <div class="container position-relative z-1 text-center py-5">
        <div class="row justify-content-center">
            <div class="col-lg-8 col-xl-7">
                <h2 class="display-3 fw-bold text-white mb-4" data-sl-edit="text">Transform Your Future</h2>
                <p class="lead text-white-50 mb-5 fs-4" data-sl-edit="text">Join our vibrant community of learners and achieve your goals.</p>
                <div class="d-flex flex-column flex-sm-row justify-content-center gap-3">
                    <a href="#" class="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold text-uppercase tracking-wide shadow-lg sl-btn-primary" data-sl-edit="link">Explore Courses</a>
                    <a href="#" class="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-bold text-uppercase tracking-wide" data-sl-edit="link">Learn More</a>
                </div>
            </div>
        </div>
    </div>
</div>`,
        css: baseCss + `
@media (prefers-reduced-motion: reduce) {
    .sl-cta-immersive .bg-image { background-color: var(--smartlearn-primary); background-image: none !important; }
}
`,
        js: `(function() {})();`
    },
    {
        id: "cta_glass_banner",
        meta: {
            name: "Glassmorphism Banner",
            category: "Call to Action",
            variant: "Premium",
            description: "A compact floating glass card over a gradient background.",
            tags: ["cta", "marketing", "call to action"],
            image_count: 0
        },
        html: `<!-- sl-section: cta_glass_banner | v1.0 -->
<div class="sl-cta-glass-wrap py-6 py-md-8 px-3" style="background: linear-gradient(135deg, #4f46e5, #06b6d4);">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="sl-glass-card rounded-4 p-5 p-md-6 text-center position-relative overflow-hidden shadow-lg border border-white border-opacity-25">
                    <div class="position-relative z-1">
                        <h3 class="display-5 fw-bold mb-3 sl-text-heading text-white" data-sl-edit="text">Ready to elevate your skills?</h3>
                        <p class="lead mb-5 sl-text-body text-white opacity-75" data-sl-edit="text">Get unlimited access to thousands of courses.</p>
                        <a href="#" class="btn btn-dark btn-lg px-5 py-3 rounded-pill fw-semibold shadow-sm sl-btn-glass-cta" data-sl-edit="link">Start Learning</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,
        css: baseCss + `
.sl-glass-card {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}
.sl-btn-glass-cta {
    background-color: var(--smartlearn-primary);
    color: #fff;
    border: none;
    transition: transform 0.3s ease;
}
.sl-btn-glass-cta:hover {
    transform: translateY(-2px);
    background-color: var(--smartlearn-primary);
    filter: brightness(0.9);
}
[data-bs-theme="dark"] .sl-glass-card {
    background: rgba(0, 0, 0, 0.25);
    border-color: rgba(255, 255, 255, 0.1) !important;
}
@media (prefers-reduced-motion: reduce) {
    .sl-btn-glass-cta { transition: none; }
}
`,
        js: `(function() {})();`
    },
    {
        id: "cta_minimalist",
        meta: {
            name: "Minimalist Statement",
            category: "Call to Action",
            variant: "Typography",
            description: "Pure, distraction-free typography with a single button.",
            tags: ["cta", "marketing", "call to action"],
            image_count: 0
        },
        html: `<!-- sl-section: cta_minimalist | v1.0 -->
<div class="sl-cta-minimal py-7 py-md-9 text-center sl-bg-card">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <h2 class="display-4 fw-black mb-5 sl-text-primary" style="letter-spacing: -0.03em; font-weight: 900;" data-sl-edit="text">Your next chapter starts here.</h2>
                <a href="#" class="sl-btn-minimal d-inline-block fw-bold fs-5 text-decoration-none" data-sl-edit="link">
                    Explore Courses &rarr;
                    <span class="sl-btn-minimal-underline"></span>
                </a>
            </div>
        </div>
    </div>
</div>`,
        css: baseCss + `
.sl-btn-minimal {
    color: var(--smartlearn-primary);
    position: relative;
    padding-bottom: 5px;
    transition: color 0.3s ease;
}
.sl-btn-minimal-underline {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--smartlearn-primary);
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease;
}
.sl-btn-minimal:hover .sl-btn-minimal-underline {
    transform-origin: left;
    transform: scaleX(1);
}
.sl-btn-minimal:hover {
    color: var(--smartlearn-primary);
    filter: brightness(0.9);
}
@media (prefers-reduced-motion: reduce) {
    .sl-btn-minimal-underline { transition: none; display: none; }
    .sl-btn-minimal:hover { text-decoration: underline !important; }
}
`,
        js: `(function() {})();`
    },
    {
        id: "cta_split_action",
        meta: {
            name: "Split-Action",
            category: "Call to Action",
            variant: "Multi-Audience",
            description: "A 50/50 split layout designed for two distinct audiences or paths.",
            tags: ["cta", "marketing", "call to action"],
            image_count: 0
        },
        html: `<!-- sl-section: cta_split_action | v1.0 -->
<div class="sl-cta-split container-fluid px-0">
    <div class="row g-0">
        <div class="col-md-6 sl-split-pane p-5 p-md-7 text-center text-md-end d-flex flex-column justify-content-center align-items-center align-items-md-end sl-bg-card" style="border-right: 1px solid var(--smartlearn-card-border);">
            <div class="w-100" style="max-width: 400px;">
                <h3 class="display-6 fw-bold mb-3 sl-text-primary" data-sl-edit="text">For Students</h3>
                <p class="lead mb-4 sl-text-muted" data-sl-edit="text">Access world-class education from anywhere.</p>
                <a href="#" class="btn btn-outline-primary btn-lg rounded-pill px-5 sl-btn-outline" data-sl-edit="link">Browse Courses</a>
            </div>
        </div>
        <div class="col-md-6 sl-split-pane p-5 p-md-7 text-center text-md-start d-flex flex-column justify-content-center align-items-center align-items-md-start sl-bg-primary">
            <div class="w-100" style="max-width: 400px;">
                <h3 class="display-6 fw-bold mb-3 text-white" data-sl-edit="text">For Instructors</h3>
                <p class="lead mb-4 text-white-50" data-sl-edit="text">Share your knowledge and reach millions.</p>
                <a href="#" class="btn btn-light btn-lg rounded-pill px-5 sl-btn-solid text-primary" data-sl-edit="link">Start Teaching</a>
            </div>
        </div>
    </div>
</div>`,
        css: baseCss + `
.sl-btn-outline {
    color: var(--smartlearn-primary);
    border-color: var(--smartlearn-primary);
    transition: all 0.3s ease;
}
.sl-btn-outline:hover {
    background-color: var(--smartlearn-primary);
    color: #fff;
}
.sl-btn-solid {
    background-color: #fff;
    border: 2px solid #fff;
    transition: all 0.3s ease;
}
.sl-btn-solid:hover {
    background-color: transparent;
    color: #fff !important;
}
@media (max-width: 767.98px) {
    .sl-cta-split .sl-split-pane { border-right: none !important; border-bottom: 1px solid var(--smartlearn-card-border); }
}
`,
        js: `(function() {})();`
    }
];

let catalog = { version: "1.0", updated: new Date().toISOString().split('T')[0], sections: [] };
if (fs.existsSync(catalogPath)) {
    catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
}
if (!catalog.sections) catalog.sections = [];

sections.forEach(sec => {
    const sectionData = {
        smartlearn_section: true,
        format_version: "1.0",
        meta: sec.meta,
        html: sec.html,
        css: sec.css,
        js: sec.js
    };
    
    const filePath = path.join(sectionsDir, sec.id + '.json');
    fs.writeFileSync(filePath, JSON.stringify(sectionData, null, 2));
    
    const sectionMeta = {
        id: sec.id,
        ...sec.meta,
        preview_image: "",
        download_url: '/sections/' + sec.id + '.json',
        is_premium: true,
        is_new: true,
        popularity: Math.floor(Math.random() * 50) + 50
    };
    
    const existingIndex = catalog.sections.findIndex(c => c.id === sec.id);
    if (existingIndex >= 0) {
        catalog.sections[existingIndex] = sectionMeta;
    } else {
        catalog.sections.push(sectionMeta);
    }
});

fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2));
console.log('Successfully generated CTA Sections 1-4 and updated catalog.json');
