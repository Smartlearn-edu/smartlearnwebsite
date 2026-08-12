import os

CTA_1 = """const fs = require('fs');
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
"""

CTA_2 = """const fs = require('fs');
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
        id: "cta_bento_grid",
        meta: {
            name: "Bento Action Grid",
            category: "Call to Action",
            variant: "Multi-Action",
            description: "An asymmetrical grid highlighting a primary action and supporting secondary actions.",
            tags: ["cta", "marketing", "call to action"],
            image_count: 0
        },
        html: `<!-- sl-section: cta_bento_grid | v1.0 -->
<div class="sl-cta-bento py-6 py-md-8 sl-bg-main">
    <div class="container">
        <div class="row g-4 justify-content-center">
            <!-- Main Card -->
            <div class="col-lg-6 col-xl-5">
                <div class="sl-bento-card main h-100 p-5 rounded-4 d-flex flex-column justify-content-between sl-bg-primary position-relative overflow-hidden shadow-sm">
                    <div class="position-relative z-1">
                        <h3 class="display-6 fw-bold text-white mb-3" data-sl-edit="text">Ready to Apply?</h3>
                        <p class="fs-5 text-white-50 mb-5" data-sl-edit="text">Join the next cohort and accelerate your career.</p>
                    </div>
                    <div class="position-relative z-1 mt-auto">
                        <a href="#" class="btn btn-light btn-lg px-4 py-3 rounded-pill fw-semibold text-primary w-100 sl-bento-main-btn" data-sl-edit="link">Apply Now</a>
                    </div>
                    <!-- Subtle decorative circle -->
                    <div class="position-absolute sl-bento-deco bg-white opacity-10 rounded-circle" style="width: 300px; height: 300px; top: -100px; right: -100px;"></div>
                </div>
            </div>
            <!-- Secondary Cards -->
            <div class="col-lg-6 col-xl-5">
                <div class="row g-4 h-100">
                    <!-- Card 1 -->
                    <div class="col-12">
                        <a href="#" class="sl-bento-card secondary h-100 p-4 rounded-4 text-decoration-none d-flex align-items-center sl-bg-card shadow-sm sl-hover-lift">
                            <div class="sl-bento-icon-wrap rounded-circle text-primary d-flex align-items-center justify-content-center me-4" style="width: 56px; height: 56px; background-color: color-mix(in srgb, var(--smartlearn-primary) 15%, transparent);">
                                <i class="fa fa-book fs-4"></i>
                            </div>
                            <div>
                                <h4 class="fs-5 fw-bold mb-0 sl-text-emphasis" data-sl-edit="text">Explore Courses</h4>
                                <span class="sl-text-muted small">Learn more &rarr;</span>
                            </div>
                        </a>
                    </div>
                    <!-- Card 2 & 3 -->
                    <div class="col-md-6">
                        <a href="#" class="sl-bento-card secondary h-100 p-4 rounded-4 text-decoration-none d-flex flex-column sl-bg-card shadow-sm sl-hover-lift text-center">
                            <div class="sl-bento-icon-wrap rounded-circle sl-bg-main sl-text-muted d-flex align-items-center justify-content-center mx-auto mb-3 border sl-border" style="width: 48px; height: 48px;">
                                <i class="fa fa-download fs-5"></i>
                            </div>
                            <h4 class="fs-6 fw-bold mb-0 sl-text-emphasis" data-sl-edit="text">Download Syllabus</h4>
                        </a>
                    </div>
                    <div class="col-md-6">
                        <a href="#" class="sl-bento-card secondary h-100 p-4 rounded-4 text-decoration-none d-flex flex-column sl-bg-card shadow-sm sl-hover-lift text-center">
                            <div class="sl-bento-icon-wrap rounded-circle sl-bg-main sl-text-muted d-flex align-items-center justify-content-center mx-auto mb-3 border sl-border" style="width: 48px; height: 48px;">
                                <i class="fa fa-comments fs-5"></i>
                            </div>
                            <h4 class="fs-6 fw-bold mb-0 sl-text-emphasis" data-sl-edit="text">Talk to an Advisor</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,
        css: baseCss + `
.sl-bento-main-btn { transition: transform 0.2s ease, box-shadow 0.2s ease; color: var(--smartlearn-primary) !important; }
.sl-bento-main-btn:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
.sl-hover-lift { transition: transform 0.2s ease, box-shadow 0.2s ease; }
.sl-hover-lift:hover { transform: translateY(-4px); box-shadow: 0 10px 25px rgba(0,0,0,0.05) !important; border-color: var(--smartlearn-primary) !important; }
@media (prefers-reduced-motion: reduce) {
    .sl-bento-main-btn, .sl-hover-lift { transition: none; }
    .sl-bento-main-btn:hover, .sl-hover-lift:hover { transform: none; }
}
`,
        js: `(function() {})();`
    },
    {
        id: "cta_app_download",
        meta: {
            name: "App Store Download",
            category: "Call to Action",
            variant: "Mobile Conversion",
            description: "A modular section designed to drive mobile app installs.",
            tags: ["cta", "marketing", "call to action"],
            image_count: 1
        },
        html: `<!-- sl-section: cta_app_download | v1.0 -->
<div class="sl-cta-app py-7 py-md-9 overflow-hidden sl-bg-card border-top border-bottom sl-border">
    <div class="container position-relative">
        <div class="row align-items-center justify-content-between">
            <div class="col-lg-5 col-xl-5 mb-5 mb-lg-0 text-center text-lg-start z-1">
                <h2 class="display-5 fw-bold mb-3 sl-text-primary" data-sl-edit="text">Learn on the go</h2>
                <p class="lead mb-5 sl-text-muted" data-sl-edit="text">Download our mobile app to access your courses anytime, anywhere.</p>
                <div class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 align-items-center">
                    <a href="#" class="sl-app-btn sl-hover-lift" aria-label="Download on the App Store" data-sl-edit="link">
                        <svg viewBox="0 0 135 40" width="135" height="40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0,5 C0,2.23857625 2.23857625,0 5,0 L130,0 C132.761424,0 135,2.23857625 135,5 L135,35 C135,37.7614237 132.761424,40 130,40 L5,40 C2.23857625,40 0,37.7614237 0,35 L0,5 Z" fill="#000000"></path>
                            <path d="M25.75,21.5 C25.75,18.04 28.5,16 28.6,15.9 C27,13.5 24.3,13 23.3,12.9 C20.9,12.6 18.5,14.2 17.2,14.2 C15.9,14.2 14,12.8 12,12.9 C9.6,12.9 7.3,14.3 6,16.5 C3.3,21.2 5.3,28.2 7.9,32 C9.2,33.8 10.7,35.9 12.7,35.8 C14.7,35.7 15.5,34.5 17.9,34.5 C20.3,34.5 21,35.9 23.1,35.8 C25.2,35.7 26.5,33.8 27.8,32 C29.2,29.9 29.8,27.8 29.8,27.7 C29.7,27.6 25.75,26.1 25.75,21.5 M20.9,10.6 C22,9.3 22.8,7.4 22.6,5.5 C21,5.6 19,6.6 17.9,7.9 C16.9,9 16,11 16.3,12.8 C18.1,12.9 20,11.9 20.9,10.6" fill="#FFFFFF"></path>
                            <text x="38" y="16" fill="#FFFFFF" font-family="-apple-system, sans-serif" font-size="10" font-weight="500">Download on the</text>
                            <text x="38" y="31" fill="#FFFFFF" font-family="-apple-system, sans-serif" font-size="16" font-weight="bold">App Store</text>
                        </svg>
                    </a>
                    <a href="#" class="sl-app-btn sl-hover-lift" aria-label="Get it on Google Play" data-sl-edit="link">
                        <svg viewBox="0 0 135 40" width="135" height="40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0,5 C0,2.23857625 2.23857625,0 5,0 L130,0 C132.761424,0 135,2.23857625 135,5 L135,35 C135,37.7614237 132.761424,40 130,40 L5,40 C2.23857625,40 0,37.7614237 0,35 L0,5 Z" fill="#000000"></path>
                            <path d="M8.5,8.1 L23.9,16.8 L23.9,16.8 C24.6,17.2 24.6,18.3 23.9,18.7 L8.5,27.4 C7.9,27.8 7,27.3 7,26.5 L7,9 C7,8.2 7.9,7.7 8.5,8.1 Z" fill="#FFFFFF"></path>
                            <text x="32" y="16" fill="#FFFFFF" font-family="-apple-system, sans-serif" font-size="10" font-weight="500">GET IT ON</text>
                            <text x="32" y="31" fill="#FFFFFF" font-family="-apple-system, sans-serif" font-size="15" font-weight="bold">Google Play</text>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="col-lg-6 col-xl-6 mt-5 mt-lg-0 text-center position-relative">
                <div class="position-absolute top-50 start-50 translate-middle sl-bg-primary opacity-25 rounded-circle blur-effect d-none d-lg-block" style="width: 400px; height: 400px; filter: blur(60px);"></div>
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80" alt="Mobile app preview" class="img-fluid position-relative z-1" style="max-height: 500px; filter: drop-shadow(0 20px 30px rgba(0,0,0,0.15));">
            </div>
        </div>
    </div>
</div>`,
        css: baseCss + `
.sl-hover-lift { transition: transform 0.2s ease, box-shadow 0.2s ease; display: inline-block; border-radius: 5px; }
.sl-hover-lift:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
@media (prefers-reduced-motion: reduce) {
    .sl-hover-lift { transition: none; }
    .sl-hover-lift:hover { transform: none; box-shadow: none; }
}
`,
        js: `(function() {})();`
    },
    {
        id: "cta_course_enrollment",
        meta: {
            name: "Course Enrollment CTA",
            category: "Call to Action",
            variant: "LMS specific",
            description: "A highly detailed, Moodle-specific transactional CTA designed to drive enrollment for a single course.",
            tags: ["cta", "marketing", "call to action"],
            image_count: 1
        },
        html: `<!-- sl-section: cta_course_enrollment | v1.0 -->
<div class="sl-cta-course py-5 py-md-7 border-top border-bottom sl-border sl-bg-main">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10 col-xl-8">
                <div class="sl-course-cta-card rounded-4 p-4 p-md-5 d-flex flex-column flex-md-row align-items-center gap-4 sl-bg-card shadow-sm border sl-border">
                    <div class="sl-course-thumb rounded-3 overflow-hidden flex-shrink-0 mb-3 mb-md-0 shadow-sm" style="width: 120px; height: 120px;">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300&q=80" alt="Course Thumbnail" class="w-100 h-100 object-fit-cover">
                    </div>
                    
                    <div class="sl-course-info flex-grow-1 text-center text-md-start">
                        <h3 class="fs-3 fw-bold mb-2 sl-text-emphasis" data-sl-edit="text">Python for Data Analysis</h3>
                        <div class="d-flex flex-wrap justify-content-center justify-content-md-start gap-2 gap-md-3 mb-3 sl-text-muted small fw-medium align-items-center">
                            <span class="sl-meta-item text-warning"><i class="fa fa-star me-1"></i>4.9</span>
                            <span class="sl-meta-item"><i class="fa fa-users me-1 opacity-75"></i>2,480 learners</span>
                            <span class="sl-meta-item"><i class=\"fa fa-signal me-1 opacity-75\"></i>Intermediate</span>
                            <span class="sl-meta-item"><i class=\"fa fa-clock-o me-1 opacity-75\"></i>12 Weeks</span>
                        </div>
                        <div class="sl-cert-badge d-inline-flex align-items-center px-3 py-1 rounded-pill small fw-semibold" style="background-color: rgba(var(--sl-color-success-rgb, 40, 167, 69), 0.1); color: #28a745;">
                            <i class="fa fa-certificate me-2"></i> Certificate included
                        </div>
                    </div>
                    
                    <div class="sl-course-action border-start-md ps-md-4 text-center d-flex flex-column align-items-center justify-content-center mt-3 mt-md-0 sl-border" style="min-width: 180px;">
                        <div class="fs-2 fw-black sl-text-emphasis mb-3 lh-1" data-sl-edit="text">$129</div>
                        <a href="/course/view.php?id=1" class="btn btn-primary btn-lg w-100 rounded-pill fw-bold shadow-sm sl-btn-primary" data-sl-edit="link">Enroll Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,
        css: baseCss + `
.sl-meta-item { display: inline-flex; align-items: center; }
.sl-meta-item:not(:last-child)::after { content: "•"; margin-left: 0.75rem; opacity: 0.3; }
@media (max-width: 767.98px) {
    .border-start-md { border-left: none !important; }
    .sl-course-action { width: 100%; border-top: 1px solid var(--smartlearn-card-border); padding-top: 1.5rem; }
    .sl-meta-item:not(:last-child)::after { display: none; }
    .sl-meta-item { border: 1px solid var(--smartlearn-card-border); padding: 2px 8px; border-radius: 4px; }
}
`,
        js: `(function() {})();`
    },
    {
        id: "cta_dynamic_floating",
        meta: {
            name: "Dynamic Floating Elements",
            category: "Call to Action",
            variant: "Community",
            description: "Visually engaging community-focused layout with floating meaningful LMS elements.",
            tags: ["cta", "marketing", "call to action"],
            image_count: 3
        },
        html: `<!-- sl-section: cta_dynamic_floating | v1.0 -->
<div class="sl-cta-floating py-8 py-md-10 position-relative overflow-hidden sl-bg-main">
    <div class="position-absolute top-0 start-0 w-100 h-100 overflow-hidden z-0 pointer-events-none sl-floating-container">
        <div class="sl-float-item position-absolute rounded-circle overflow-hidden shadow" style="width: 60px; height: 60px; top: 15%; left: 15%; animation-delay: 0s;">
            <img src="https://i.pravatar.cc/150?u=1" alt="Student" class="w-100 h-100 object-fit-cover">
        </div>
        <div class="sl-float-item position-absolute rounded-circle overflow-hidden shadow" style="width: 80px; height: 80px; bottom: 20%; left: 10%; animation-delay: 1.5s;">
            <img src="https://i.pravatar.cc/150?u=2" alt="Student" class="w-100 h-100 object-fit-cover">
        </div>
        <div class="sl-float-item position-absolute rounded-circle overflow-hidden shadow" style="width: 70px; height: 70px; top: 25%; right: 10%; animation-delay: 0.5s;">
            <img src="https://i.pravatar.cc/150?u=3" alt="Student" class="w-100 h-100 object-fit-cover">
        </div>
        <div class="sl-float-item position-absolute sl-bg-card rounded-3 shadow p-2 d-flex align-items-center gap-2 sl-border" style="bottom: 30%; right: 15%; animation-delay: 2s;">
            <i class="fa fa-certificate fs-4 sl-text-primary"></i>
            <span class="fw-bold small sl-text-emphasis d-none d-md-block">Certified</span>
        </div>
        <div class="sl-float-item position-absolute sl-bg-card rounded-pill shadow p-2 px-3 d-flex align-items-center gap-2 sl-border" style="top: 10%; right: 30%; animation-delay: 1s;">
            <i class="fa fa-check-circle text-success fs-5"></i>
            <span class="fw-bold small sl-text-emphasis d-none d-md-block">100% Completed</span>
        </div>
    </div>
    <div class="container position-relative z-1 text-center">
        <div class="row justify-content-center">
            <div class="col-lg-6 col-md-8">
                <div class="sl-bg-card bg-opacity-75 p-5 rounded-4 shadow-sm sl-backdrop-blur sl-border">
                    <h2 class="display-5 fw-bold mb-4 sl-text-primary" data-sl-edit="text">Join thousands of successful learners</h2>
                    <a href="#" class="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow sl-btn-primary text-uppercase tracking-wide" data-sl-edit="link">Create Free Account</a>
                </div>
            </div>
        </div>
    </div>
</div>`,
        css: baseCss + `
.sl-backdrop-blur { backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); }
.sl-float-item { animation: floatY 6s ease-in-out infinite; }
@keyframes floatY {
    0% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
    .sl-float-item { animation: none !important; opacity: 0.5; transform: scale(0.8); }
    .sl-floating-container { display: none; }
}
@media (max-width: 767.98px) {
    .sl-floating-container { display: none; }
    .sl-cta-floating .sl-bg-card { padding: 2rem !important; border: none; background: transparent !important; box-shadow: none !important; backdrop-filter: none; }
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
console.log('Successfully generated CTA Sections 5-8 and updated catalog.json');
"""

with open('scripts/generate_cta_1.cjs', 'w') as f:
    f.write(CTA_1)

with open('scripts/generate_cta_2.cjs', 'w') as f:
    f.write(CTA_2)

print("Rewrote JS files.")
