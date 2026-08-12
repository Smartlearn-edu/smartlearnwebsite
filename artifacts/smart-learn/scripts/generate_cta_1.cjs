const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, '../public/sections');
const catalogPath = path.join(__dirname, '../public/catalog.json');

// Ensure directory exists
if (!fs.existsSync(sectionsDir)) {
    fs.mkdirSync(sectionsDir, { recursive: true });
}

// Helper to save section
function saveSection(id, data) {
    const filePath = path.join(sectionsDir, id + '.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log('Saved ' + id + '.json');
}

// 1. The Immersive Hero CTA (Full-bleed media)
const cta1 = {
    id: "cta_immersive_hero",
    name: "Immersive Hero CTA",
    category: "Call to Action",
    subcategory: "High-Impact",
    description: "Full-bleed background with integrated cinematic CTA.",
    schema: {
        settings: [
            { id: "background_type", type: "select", label: "Background Type", options: ["image", "video"], default: "image" },
            { id: "background_image", type: "image", label: "Background Image/Poster" },
            { id: "background_video", type: "url", label: "Background Video URL (mp4)" },
            { id: "overlay_opacity", type: "range", label: "Overlay Opacity", min: 0, max: 100, default: 60 },
            { id: "heading", type: "text", label: "Heading", default: "Transform Your Future" },
            { id: "subheading", type: "textarea", label: "Subheading", default: "Join our vibrant community of learners and achieve your goals." },
            { id: "primary_cta_text", type: "text", label: "Primary CTA Text", default: "Explore Courses" },
            { id: "primary_cta_url", type: "url", label: "Primary CTA Link", default: "#" },
            { id: "secondary_cta_text", type: "text", label: "Secondary CTA Text", default: "Learn More" },
            { id: "secondary_cta_url", type: "url", label: "Secondary CTA Link", default: "#" }
        ]
    },
    template: `
        <div class="sl-cta-immersive position-relative overflow-hidden sl-bg-primary" style="min-height: 80vh; display: flex; align-items: center; justify-content: center;">
            {{#background_video}}
            <video class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" autoplay loop muted playsinline poster="{{background_image}}">
                <source src="{{background_video}}" type="video/mp4">
            </video>
            {{/background_video}}
            {{^background_video}}
            <div class="position-absolute top-0 start-0 w-100 h-100 bg-image" style="background-image: url('{{background_image}}'); background-size: cover; background-position: center;"></div>
            {{/background_video}}
            
            <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark" style="opacity: calc({{overlay_opacity}} / 100);"></div>
            
            <div class="container position-relative z-1 text-center py-5">
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-xl-7">
                        <h2 class="display-3 fw-bold text-white mb-4">{{heading}}</h2>
                        {{#subheading}}<p class="lead text-white-50 mb-5 fs-4">{{subheading}}</p>{{/subheading}}
                        <div class="d-flex flex-column flex-sm-row justify-content-center gap-3">
                            <a href="{{primary_cta_url}}" class="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold text-uppercase tracking-wide shadow-lg sl-btn-primary">{{primary_cta_text}}</a>
                            {{#secondary_cta_text}}
                            <a href="{{secondary_cta_url}}" class="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-bold text-uppercase tracking-wide">{{secondary_cta_text}}</a>
                            {{/secondary_cta_text}}
                        </div>
                    </div>
                </div>
            </div>
            
            <style>
                @media (prefers-reduced-motion: reduce) {
                    .sl-cta-immersive video { display: none; }
                    .sl-cta-immersive .bg-image { background-color: var(--sl-bg-primary); background-image: none !important; }
                }
                .sl-btn-primary { background-color: var(--sl-color-primary); border-color: var(--sl-color-primary); color: var(--sl-text-on-primary); transition: transform 0.3s ease, box-shadow 0.3s ease; }
                .sl-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.2) !important; background-color: var(--sl-color-primary-hover); }
            </style>
        </div>
    `
};

// 2. The Glassmorphism Banner (Floating surface)
const cta2 = {
    id: "cta_glass_banner",
    name: "Glassmorphism Banner",
    category: "Call to Action",
    subcategory: "Premium",
    description: "A compact floating glass card over a gradient background.",
    schema: {
        settings: [
            { id: "heading", type: "text", label: "Heading", default: "Ready to elevate your skills?" },
            { id: "subheading", type: "textarea", label: "Subheading", default: "Get unlimited access to thousands of courses." },
            { id: "primary_cta_text", type: "text", label: "Button Text", default: "Start Learning" },
            { id: "primary_cta_url", type: "url", label: "Button Link", default: "#" },
            { id: "bg_color_1", type: "color", label: "Gradient Color 1", default: "#4f46e5" },
            { id: "bg_color_2", type: "color", label: "Gradient Color 2", default: "#06b6d4" }
        ]
    },
    template: `
        <div class="sl-cta-glass-wrap py-6 py-md-8 px-3" style="background: linear-gradient(135deg, {{bg_color_1}}, {{bg_color_2}});">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="sl-glass-card rounded-4 p-5 p-md-6 text-center position-relative overflow-hidden shadow-lg border border-white border-opacity-25">
                            <div class="position-relative z-1">
                                <h3 class="display-5 fw-bold mb-3 sl-text-heading">{{heading}}</h3>
                                {{#subheading}}<p class="lead mb-5 sl-text-body opacity-75">{{subheading}}</p>{{/subheading}}
                                <a href="{{primary_cta_url}}" class="btn btn-dark btn-lg px-5 py-3 rounded-pill fw-semibold shadow-sm sl-btn-glass-cta">{{primary_cta_text}}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>
                .sl-glass-card {
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                }
                .sl-btn-glass-cta {
                    background-color: var(--sl-color-primary);
                    color: var(--sl-text-on-primary);
                    border: none;
                    transition: transform 0.3s ease;
                }
                .sl-btn-glass-cta:hover {
                    transform: translateY(-2px);
                    background-color: var(--sl-color-primary-hover);
                }
                [data-bs-theme="dark"] .sl-glass-card {
                    background: rgba(0, 0, 0, 0.25);
                    border-color: rgba(255, 255, 255, 0.1) !important;
                }
                [data-bs-theme="dark"] .sl-text-heading, [data-bs-theme="dark"] .sl-text-body {
                    color: #fff;
                }
                @media (prefers-reduced-motion: reduce) {
                    .sl-btn-glass-cta { transition: none; }
                }
            </style>
        </div>
    `
};

// 3. The Minimalist Statement (Typography/whitespace)
const cta3 = {
    id: "cta_minimalist",
    name: "Minimalist Statement",
    category: "Call to Action",
    subcategory: "Typography",
    description: "Pure, distraction-free typography with a single button.",
    schema: {
        settings: [
            { id: "statement", type: "textarea", label: "Statement", default: "Your next chapter starts here." },
            { id: "primary_cta_text", type: "text", label: "Button Text", default: "Explore Courses →" },
            { id: "primary_cta_url", type: "url", label: "Button Link", default: "#" }
        ]
    },
    template: `
        <div class="sl-cta-minimal py-7 py-md-9 text-center" style="background-color: var(--sl-bg-card);">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <h2 class="display-4 fw-black mb-5" style="color: var(--sl-text-primary); letter-spacing: -0.03em;">{{statement}}</h2>
                        <a href="{{primary_cta_url}}" class="sl-btn-minimal d-inline-block fw-bold fs-5 text-decoration-none">
                            {{primary_cta_text}}
                            <span class="sl-btn-minimal-underline"></span>
                        </a>
                    </div>
                </div>
            </div>
            
            <style>
                .fw-black { font-weight: 900; }
                .sl-btn-minimal {
                    color: var(--sl-color-primary);
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
                    background-color: var(--sl-color-primary);
                    transform-origin: right;
                    transform: scaleX(0);
                    transition: transform 0.3s ease;
                }
                .sl-btn-minimal:hover .sl-btn-minimal-underline {
                    transform-origin: left;
                    transform: scaleX(1);
                }
                .sl-btn-minimal:hover {
                    color: var(--sl-color-primary-hover);
                }
                @media (prefers-reduced-motion: reduce) {
                    .sl-btn-minimal-underline { transition: none; display: none; }
                    .sl-btn-minimal:hover { text-decoration: underline !important; }
                }
            </style>
        </div>
    `
};

// 4. The Split-Action (Dual Audience)
const cta4 = {
    id: "cta_split_action",
    name: "Split-Action",
    category: "Call to Action",
    subcategory: "Multi-Audience",
    description: "A 50/50 split layout designed for two distinct audiences or paths.",
    schema: {
        settings: [
            { id: "left_heading", type: "text", label: "Left Heading", default: "For Students" },
            { id: "left_desc", type: "textarea", label: "Left Description", default: "Access world-class education from anywhere." },
            { id: "left_cta_text", type: "text", label: "Left Button Text", default: "Browse Courses" },
            { id: "left_cta_url", type: "url", label: "Left Button Link", default: "#" },
            { id: "right_heading", type: "text", label: "Right Heading", default: "For Instructors" },
            { id: "right_desc", type: "textarea", label: "Right Description", default: "Share your knowledge and reach millions." },
            { id: "right_cta_text", type: "text", label: "Right Button Text", default: "Start Teaching" },
            { id: "right_cta_url", type: "url", label: "Right Button Link", default: "#" }
        ]
    },
    template: `
        <div class="sl-cta-split container-fluid px-0">
            <div class="row g-0">
                <div class="col-md-6 sl-split-pane p-5 p-md-7 text-center text-md-end d-flex flex-column justify-content-center align-items-center align-items-md-end" style="background-color: var(--sl-bg-card); border-right: 1px solid var(--sl-border-color);">
                    <div class="max-w-md w-100">
                        <h3 class="display-6 fw-bold mb-3" style="color: var(--sl-text-primary);">{{left_heading}}</h3>
                        {{#left_desc}}<p class="lead mb-4" style="color: var(--sl-text-secondary);">{{left_desc}}</p>{{/left_desc}}
                        <a href="{{left_cta_url}}" class="btn btn-outline-primary btn-lg rounded-pill px-5 sl-btn-outline">{{left_cta_text}}</a>
                    </div>
                </div>
                <div class="col-md-6 sl-split-pane p-5 p-md-7 text-center text-md-start d-flex flex-column justify-content-center align-items-center align-items-md-start" style="background-color: var(--sl-bg-primary);">
                    <div class="max-w-md w-100">
                        <h3 class="display-6 fw-bold mb-3" style="color: var(--sl-text-on-primary);">{{right_heading}}</h3>
                        {{#right_desc}}<p class="lead mb-4 text-white-50">{{right_desc}}</p>{{/right_desc}}
                        <a href="{{right_cta_url}}" class="btn btn-light btn-lg rounded-pill px-5 sl-btn-solid">{{right_cta_text}}</a>
                    </div>
                </div>
            </div>
            
            <style>
                .sl-cta-split .max-w-md { max-width: 400px; }
                .sl-btn-outline {
                    color: var(--sl-color-primary);
                    border-color: var(--sl-color-primary);
                    transition: all 0.3s ease;
                }
                .sl-btn-outline:hover {
                    background-color: var(--sl-color-primary);
                    color: var(--sl-text-on-primary);
                }
                .sl-btn-solid {
                    color: var(--sl-text-on-primary);
                    background-color: transparent;
                    border: 2px solid rgba(255,255,255,0.3);
                    transition: all 0.3s ease;
                }
                .sl-btn-solid:hover {
                    background-color: var(--sl-text-on-primary);
                    color: var(--sl-color-primary);
                    border-color: var(--sl-text-on-primary);
                }
                @media (max-width: 767.98px) {
                    .sl-cta-split .sl-split-pane { border-right: none !important; border-bottom: 1px solid var(--sl-border-color); }
                }
            </style>
        </div>
    `
};

[cta1, cta2, cta3, cta4].forEach(cta => saveSection(cta.id, cta));

// Update catalog
let catalog = { sections: [] };
if (fs.existsSync(catalogPath)) {
    catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
}

[cta1, cta2, cta3, cta4].forEach(cta => {
    if (!catalog.sections.find(s => s.id === cta.id)) {
        catalog.sections.push({
            id: cta.id,
            name: cta.name,
            category: cta.category,
            subcategory: cta.subcategory
        });
    }
});

fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2));
console.log('Updated catalog.json');
