const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const sectionsDir = path.join(publicDir, 'sections');
const catalogPath = path.join(publicDir, 'catalog.json');

if (!fs.existsSync(sectionsDir)) {
    fs.mkdirSync(sectionsDir, { recursive: true });
}

const sections = [
    // 1. Modern Ivy (Typography & Editorial)
    {
        id: 'hero-modern-ivy',
        meta: {
            name: 'Modern Ivy Hero',
            category: 'Hero',
            variant: 'Ivy',
            description: 'Premium editorial layout with serif typography and masonry image collage for executive education.',
            tags: ['hero', 'ivy', 'editorial', 'premium', 'university'],
            image_count: 3
        },
        html: `<!-- sl-section: hero-modern-ivy | v1.0 -->
<div class="sl-hero-ivy sl-bg-main">
    <div class="container py-5 py-lg-7 position-relative z-1">
        <div class="row align-items-center g-5">
            <div class="col-lg-7 pe-lg-5 sl-ivy-text">
                <div class="badge rounded-pill sl-bg-primary-subtle sl-text-primary mb-4 fw-medium tracking-wide px-3 py-2 border">EXECUTIVE EDUCATION</div>
                <h1 class="display-3 fw-bold mb-4 font-serif sl-text-emphasis" data-sl-edit="text">Elevate your <br>leadership potential.</h1>
                <p class="lead mb-5 sl-text-muted pe-lg-4 fs-5" data-sl-edit="text">Join a global network of ambitious professionals. Discover premium courses designed by world-renowned experts to propel your career forward.</p>
                
                <div class="d-flex flex-wrap gap-3">
                    <a href="#" class="btn sl-btn-primary btn-lg rounded-0 px-4 py-3 fw-medium" data-sl-edit="link">Explore Programs</a>
                    <a href="#" class="btn sl-btn-outline-primary btn-lg rounded-0 px-4 py-3 fw-medium" data-sl-edit="link">Speak to an Advisor</a>
                </div>
                
                <div class="mt-5 pt-4 border-top border-secondary-subtle d-flex align-items-center gap-4">
                    <div class="d-flex flex-column">
                        <span class="fs-2 fw-bold sl-text-emphasis font-serif" data-sl-edit="text">45+</span>
                        <span class="text-uppercase small tracking-wide sl-text-muted" data-sl-edit="text">Programs</span>
                    </div>
                    <div class="d-flex flex-column border-start ps-4 border-secondary-subtle">
                        <span class="fs-2 fw-bold sl-text-emphasis font-serif" data-sl-edit="text">12k</span>
                        <span class="text-uppercase small tracking-wide sl-text-muted" data-sl-edit="text">Alumni</span>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-5 sl-ivy-collage">
                <div class="position-relative h-100 w-100 collage-wrapper">
                    <div class="img-box box-1 shadow-lg border-body">
                        <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80" alt="Campus" class="w-100 h-100 object-fit-cover" data-sl-edit="image">
                    </div>
                    <div class="img-box box-2 shadow-lg border-body">
                        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" alt="Students" class="w-100 h-100 object-fit-cover" data-sl-edit="image">
                    </div>
                    <div class="img-box box-3 shadow-lg border-body">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" alt="Meeting" class="w-100 h-100 object-fit-cover" data-sl-edit="image">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Decorative background element -->
    <div class="bg-shape-cream bg-tertiary"></div>
</div>`,
        css: `

/* SmartLearn Native Color Classes */
.sl-text-primary { color: var(--smartlearn-primary) !important; }
.sl-text-emphasis { color: var(--smartlearn-text) !important; }
.sl-text-muted { color: var(--smartlearn-text-muted) !important; }
.sl-bg-main { background-color: var(--smartlearn-bg) !important; }
.sl-bg-card { background-color: var(--smartlearn-card-bg) !important; border: 1px solid var(--smartlearn-card-border) !important; }
.sl-bg-primary { background-color: var(--smartlearn-primary) !important; }
.sl-bg-primary-subtle { background-color: color-mix(in srgb, var(--smartlearn-primary) 15%, transparent) !important; }
.sl-btn-primary { background-color: var(--smartlearn-primary) !important; border-color: var(--smartlearn-primary) !important; color: #fff !important; }
.sl-btn-primary:hover { background-color: var(--smartlearn-primary-hover, var(--smartlearn-primary)) !important; filter: brightness(0.9); }
.sl-btn-outline-primary { border-color: var(--smartlearn-primary) !important; color: var(--smartlearn-primary) !important; }
.sl-btn-outline-primary:hover { background-color: var(--smartlearn-primary) !important; color: #fff !important; }
.sl-border-primary { border-color: var(--smartlearn-primary) !important; }
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');

.sl-hero-ivy {
    background-color: var(--bs-body-bg);
    position: relative;
    overflow: hidden;
    min-height: 85vh;
    display: flex;
    align-items: center;
}
.sl-hero-ivy .font-serif {
    font-family: 'Playfair Display', serif;
}
.sl-hero-ivy .tracking-wide {
    letter-spacing: 0.1em;
}
.sl-hero-ivy .bg-shape-cream {
    position: absolute;
    top: 0;
    right: 0;
    width: 45%;
    height: 100%;
    background-color: var(--bs-tertiary-bg);
    z-index: 0;
}
.sl-hero-ivy .border-body {
    border: 8px solid var(--bs-body-bg) !important;
}
.sl-hero-ivy .collage-wrapper {
    min-height: 500px;
}
.sl-hero-ivy .img-box {
    position: absolute;
    overflow: hidden;
    opacity: 0;
    transform: translateY(30px);
    animation: ivyFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.sl-hero-ivy .box-1 {
    width: 65%;
    height: 60%;
    top: 0;
    left: 0;
    z-index: 2;
    animation-delay: 0.2s;
}
.sl-hero-ivy .box-2 {
    width: 55%;
    height: 50%;
    bottom: 5%;
    right: 0;
    z-index: 3;
    animation-delay: 0.4s;
}
.sl-hero-ivy .box-3 {
    width: 45%;
    height: 40%;
    bottom: -10%;
    left: 10%;
    z-index: 4;
    animation-delay: 0.6s;
}
.sl-hero-ivy .sl-ivy-text {
    opacity: 0;
    transform: translateY(20px);
    animation: ivyFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes ivyFadeIn {
    to { opacity: 1; transform: translateY(0); }
}
@media (max-width: 991px) {
    .sl-hero-ivy .bg-shape-cream { display: none; }
    .sl-hero-ivy .collage-wrapper { min-height: 400px; margin-top: 2rem; }
    .sl-hero-ivy .box-1 { width: 60%; height: 70%; left: 10%; top: 10%; }
    .sl-hero-ivy .box-2 { width: 50%; height: 60%; right: 10%; bottom: 0; }
    .sl-hero-ivy .box-3 { display: none; }
}`,
        js: `(function() {
    const root = document.querySelector('.sl-hero-ivy');
    if (!root) return;
})();`
    },

    // 2. Tech Bootcamp (Animated Gradient)
    {
        id: 'hero-tech-bootcamp',
        meta: {
            name: 'Tech Bootcamp Hero',
            category: 'Hero',
            variant: 'Tech',
            description: 'Dark mode hero with an animated mesh gradient background and terminal-like typography.',
            tags: ['hero', 'tech', 'bootcamp', 'gradient', 'dark'],
            image_count: 0
        },
        html: `<!-- sl-section: hero-tech-bootcamp | v1.0 -->
<div class="sl-hero-tech position-relative text-center overflow-hidden sl-bg-main">
    <div class="mesh-bg"></div>
    <div class="noise-overlay"></div>
    
    <div class="container py-6 py-lg-8 position-relative z-2 h-100 d-flex flex-column justify-content-center align-items-center">
        <div class="terminal-badge mb-4 d-inline-flex align-items-center rounded-pill px-3 py-1 shadow-sm border sl-bg-card" style="backdrop-filter: blur(10px);">
            <span class="pulse-dot me-2"></span>
            <span class="sl-text-emphasis font-mono small tracking-wide" data-sl-edit="text">NEXT COHORT: SEPT 2026</span>
        </div>
        
        <h1 class="display-2 fw-bolder sl-text-emphasis mb-4 sl-tech-title" data-sl-edit="text">
            Build the <br/>
            <span class="position-relative d-inline-block">
                <span class="position-relative z-1">Future.</span>
            </span>
        </h1>
        <p class="lead sl-text-muted mb-5 mx-auto" style="max-width: 700px;" data-sl-edit="text">
            Intensive 12-week bootcamps in Full-Stack, AI, and Data Science. Learn from senior engineers and build a portfolio that gets you hired.
        </p>
        
        <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center w-100" style="max-width: 450px;">
            <a href="#" class="btn sl-btn-primary btn-lg rounded-pill fw-bold tech-btn flex-grow-1" style="color: #FFFFFF !important;" data-sl-edit="link">
                Apply Now <i class="fa fa-arrow-right ms-2"></i>
            </a>
            <a href="#" class="btn sl-btn-outline-primary btn-lg rounded-pill fw-bold tech-btn flex-grow-1" data-sl-edit="link">
                View Curriculum
            </a>
        </div>
        
        <div class="d-flex flex-wrap justify-content-center gap-4 mt-5 sl-fade-in-up" style="animation-delay: 0.4s;">
            <div class="sl-text-emphasis small font-mono"><i class="fa fa-check sl-text-primary me-2"></i>React</div>
            <div class="sl-text-emphasis small font-mono"><i class="fa fa-check sl-text-primary me-2"></i>Node.js</div>
            <div class="sl-text-emphasis small font-mono"><i class="fa fa-check sl-text-primary me-2"></i>Python</div>
            <div class="sl-text-emphasis small font-mono"><i class="fa fa-check sl-text-primary me-2"></i>AWS</div>
        </div>
    </div>
</div>`,
        css: `

/* SmartLearn Native Color Classes */
.sl-text-primary { color: var(--smartlearn-primary) !important; }
.sl-text-emphasis { color: var(--smartlearn-text) !important; }
.sl-text-muted { color: var(--smartlearn-text-muted) !important; }
.sl-bg-main { background-color: var(--smartlearn-bg) !important; }
.sl-bg-card { background-color: var(--smartlearn-card-bg) !important; border: 1px solid var(--smartlearn-card-border) !important; }
.sl-bg-primary { background-color: var(--smartlearn-primary) !important; }
.sl-bg-primary-subtle { background-color: color-mix(in srgb, var(--smartlearn-primary) 15%, transparent) !important; }
.sl-btn-primary { background-color: var(--smartlearn-primary) !important; border-color: var(--smartlearn-primary) !important; color: #fff !important; }
.sl-btn-primary:hover { background-color: var(--smartlearn-primary-hover, var(--smartlearn-primary)) !important; filter: brightness(0.9); }
.sl-btn-outline-primary { border-color: var(--smartlearn-primary) !important; color: var(--smartlearn-primary) !important; }
.sl-btn-outline-primary:hover { background-color: var(--smartlearn-primary) !important; color: #fff !important; }
.sl-border-primary { border-color: var(--smartlearn-primary) !important; }
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@400;600;800&display=swap');

.sl-hero-tech {
    background-color: var(--smartlearn-bg);
    font-family: 'Inter', sans-serif;
    min-height: 90vh;
}
.sl-hero-tech .font-mono {
    font-family: 'JetBrains Mono', monospace;
}
.sl-hero-tech .mesh-bg {
    position: absolute; inset: 0; overflow: hidden; z-index: 0;
    background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--smartlearn-primary) 10%, transparent) 0%, transparent 70%);
}
.sl-hero-tech .sl-particle {
    position: absolute;
    width: 4px; height: 4px;
    background: var(--smartlearn-primary);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--smartlearn-primary);
    opacity: 0;
    animation: slFloatParticle 4s infinite ease-in-out;
}
@keyframes slFloatParticle {
    0% { transform: translateY(0) scale(0.5); opacity: 0; }
    50% { opacity: 0.6; transform: translateY(-20px) scale(1.2); }
    100% { transform: translateY(-40px) scale(0.5); opacity: 0; }
}
.sl-hero-tech .noise-overlay {
    position: absolute; inset: 0; z-index: 1; opacity: 0.05;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
.sl-hero-tech .pulse-dot {
    width: 8px; height: 8px; background: var(--smartlearn-primary); border-radius: 50%;
    box-shadow: 0 0 10px var(--smartlearn-primary);
    animation: slPulse 1.5s infinite;
}
@keyframes slPulse {
    0% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1); }
}
.sl-hero-tech .bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
}
.sl-hero-tech .text-transparent {
    color: transparent;
}
.sl-hero-tech .sl-tech-title {
    letter-spacing: -0.03em;
}
.sl-hero-tech .tech-btn {
    transition: all 0.3s ease;
}
.sl-hero-tech .tech-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(0,0,0,0.2);
}`,
        js: `(function() {
    const root = document.querySelector('.sl-hero-tech');
    if (!root) return;
    const bg = root.querySelector('.mesh-bg');
    if (bg && !bg.querySelector('.sl-particle')) {
        for (let i = 0; i < 40; i++) {
            let p = document.createElement('div');
            p.className = 'sl-particle';
            p.style.left = Math.random() * 100 + '%';
            p.style.top = Math.random() * 100 + '%';
            p.style.animationDelay = (Math.random() * 5) + 's';
            bg.appendChild(p);
        }
    }
})();`
    },

    // 3. Corporate Search Hub (LMS Utility)
    {
        id: 'hero-corporate-search',
        meta: {
            name: 'Corporate Search Hub',
            category: 'Hero',
            variant: 'Search Hub',
            description: 'Neumorphic soft UI focused on a prominent search bar for large course libraries.',
            tags: ['hero', 'search', 'corporate', 'neumorphism', 'light'],
            image_count: 0
        },
        html: `<!-- sl-section: hero-corporate-search | v1.0 -->
<div class="sl-hero-search">
    <div class="container py-6 py-lg-8 text-center position-relative z-1">
        
        <h1 class="display-4 fw-bold sl-text-emphasis mb-3 sl-search-title" data-sl-edit="text">What do you want to learn today?</h1>
        <p class="fs-5 sl-text-muted mb-5 mx-auto" style="max-width: 600px;" data-sl-edit="text">Search through 5,000+ courses across business, technology, and design to advance your career.</p>
        
        <div class="search-container mx-auto position-relative mb-5" style="max-width: 800px;">
            <div class="search-box p-2 rounded-pill d-flex sl-bg-main align-items-center">
                <i class="fa fa-search ms-4 sl-text-muted fs-5"></i>
                <input type="text" class="form-control border-0 bg-transparent fs-5 px-3 py-3 sl-search-input shadow-none text-body" placeholder="Search for courses, skills, or instructors...">
                <button class="btn sl-btn-primary rounded-pill px-5 py-3 fw-bold m-1" data-sl-edit="text">Find Courses</button>
            </div>
            
            <!-- Mock dropdown (initially hidden, can be wired to JS later) -->
            <div class="search-dropdown sl-bg-main rounded-4 shadow-lg text-start p-3 position-absolute w-100 mt-2 d-none border border-secondary-subtle">
                <div class="sl-text-muted small fw-bold px-3 mb-2">POPULAR SEARCHES</div>
                <ul class="list-unstyled mb-0">
                    <li><a href="#" class="dropdown-item py-2 px-3 rounded text-body"><i class="fa fa-line-chart me-2 sl-text-primary"></i> Data Analysis with Python</a></li>
                    <li><a href="#" class="dropdown-item py-2 px-3 rounded text-body"><i class="fa fa-bullhorn me-2 sl-text-primary"></i> Digital Marketing Strategy</a></li>
                    <li><a href="#" class="dropdown-item py-2 px-3 rounded text-body"><i class="fa fa-users me-2 sl-text-primary"></i> Leadership & Management</a></li>
                </ul>
            </div>
        </div>
        
        <div class="d-flex flex-column align-items-center">
            <span class="sl-text-muted small fw-bold mb-3 tracking-wide" data-sl-edit="text">POPULAR TOPICS</span>
            <div class="d-flex flex-wrap justify-content-center gap-3">
                <a href="#" class="sl-tag px-4 py-2 rounded-pill text-decoration-none sl-text-emphasis sl-bg-main fw-medium border border-secondary-subtle">
                    <i class="fa fa-code sl-text-primary me-2"></i> Web Development
                </a>
                <a href="#" class="sl-tag px-4 py-2 rounded-pill text-decoration-none sl-text-emphasis sl-bg-main fw-medium border border-secondary-subtle">
                    <i class="fa fa-pie-chart sl-text-primary me-2"></i> Business Analytics
                </a>
                <a href="#" class="sl-tag px-4 py-2 rounded-pill text-decoration-none sl-text-emphasis sl-bg-main fw-medium border border-secondary-subtle">
                    <i class="fa fa-paint-brush text-warning me-2"></i> UX/UI Design
                </a>
                <a href="#" class="sl-tag px-4 py-2 rounded-pill text-decoration-none sl-text-emphasis sl-bg-main fw-medium border border-secondary-subtle">
                    <i class="fa fa-line-chart text-danger me-2"></i> Marketing
                </a>
            </div>
        </div>
        
    </div>
</div>`,
        css: `

/* SmartLearn Native Color Classes */
.sl-text-primary { color: var(--smartlearn-primary) !important; }
.sl-text-emphasis { color: var(--smartlearn-text) !important; }
.sl-text-muted { color: var(--smartlearn-text-muted) !important; }
.sl-bg-main { background-color: var(--smartlearn-bg) !important; }
.sl-bg-card { background-color: var(--smartlearn-card-bg) !important; border: 1px solid var(--smartlearn-card-border) !important; }
.sl-bg-primary { background-color: var(--smartlearn-primary) !important; }
.sl-bg-primary-subtle { background-color: color-mix(in srgb, var(--smartlearn-primary) 15%, transparent) !important; }
.sl-btn-primary { background-color: var(--smartlearn-primary) !important; border-color: var(--smartlearn-primary) !important; color: #fff !important; }
.sl-btn-primary:hover { background-color: var(--smartlearn-primary-hover, var(--smartlearn-primary)) !important; filter: brightness(0.9); }
.sl-btn-outline-primary { border-color: var(--smartlearn-primary) !important; color: var(--smartlearn-primary) !important; }
.sl-btn-outline-primary:hover { background-color: var(--smartlearn-primary) !important; color: #fff !important; }
.sl-border-primary { border-color: var(--smartlearn-primary) !important; }
.sl-hero-search {
    background-color: var(--bs-secondary-bg);
    min-height: 80vh;
    display: flex;
    align-items: center;
    position: relative;
}
.sl-hero-search::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(circle at 50% 0%, rgba(13, 110, 253, 0.05) 0%, transparent 70%);
}
.sl-hero-search .sl-search-title {
    letter-spacing: -0.02em;
}
.sl-hero-search .search-box {
    box-shadow: 
        inset 0 0 0 1px rgba(255, 255, 255, 0.1),
        8px 8px 16px rgba(0, 0, 0, 0.06),
        -8px -8px 16px rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}
.sl-hero-search .search-box:focus-within {
    box-shadow: 
        inset 0 0 0 2px var(--smartlearn-primary),
        10px 10px 20px rgba(0, 0, 0, 0.1),
        -10px -10px 20px rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
}
.sl-hero-search .sl-search-input:focus {
    outline: none;
}
.sl-hero-search .sl-search-input::placeholder {
    color: var(--bs-secondary-color);
}
.sl-hero-search .search-dropdown {
    z-index: 10;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
}
.sl-hero-search .search-box:focus-within ~ .search-dropdown {
    display: block !important;
    opacity: 1;
    transform: translateY(0);
}
.sl-hero-search .sl-tag {
    box-shadow: 4px 4px 10px rgba(0,0,0,0.03), -4px -4px 10px rgba(255,255,255,0.1);
    transition: all 0.2s ease;
}
.sl-hero-search .sl-tag:hover {
    transform: translateY(-2px);
    box-shadow: 6px 6px 12px rgba(0,0,0,0.05), -6px -6px 12px rgba(255,255,255,0.9);
    color: var(--smartlearn-primary) !important;
}
.sl-hero-search .tracking-wide {
    letter-spacing: 0.1em;
}`,
        js: `(function() {
    const root = document.querySelector('.sl-hero-search');
    if (!root) return;
    
    const input = root.querySelector('.sl-search-input');
    const dropdown = root.querySelector('.search-dropdown');
    if(input && dropdown) {
        input.addEventListener('focus', () => {
            dropdown.classList.remove('d-none');
        });
        
        document.addEventListener('click', (e) => {
            const container = root.querySelector('.search-container');
            if (container && !container.contains(e.target)) {
                dropdown.classList.add('d-none');
            }
        });
    }
})();`
    },

    // 4. Creator Masterclass (Video)
    {
        id: 'hero-creator-masterclass',
        meta: {
            name: 'Creator Masterclass Hero',
            category: 'Hero',
            variant: 'Video',
            description: 'Cinematic full-screen video background with a floating glass course rating card.',
            tags: ['hero', 'video', 'cinematic', 'masterclass', 'creator'],
            image_count: 2 // 1 video placeholder (image), 1 avatar
        },
        html: `<!-- sl-section: hero-creator-masterclass | v1.0 -->
<div class="sl-hero-video position-relative d-flex align-items-center overflow-hidden">
    <!-- Video Background (Fallback to image if video fails) -->
    <div class="video-container position-absolute top-0 start-0 w-100 h-100">
        <div class="overlay position-absolute top-0 start-0 w-100 h-100 z-1 sl-bg-main" style="opacity: 0.85;"></div>
        <video autoplay loop muted playsinline class="w-100 h-100 object-fit-cover position-absolute top-0 start-0" poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80">
            <!-- Example public domain or placeholder video -->
            <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-person-working-on-a-laptop-42171-large.mp4" type="video/mp4">
        </video>
    </div>
    
    <div class="container position-relative z-2 py-6 py-lg-8">
        <div class="row align-items-center">
            <div class="col-lg-7 pe-lg-5">
                <span class="badge sl-bg-primary mb-4 px-3 py-2 rounded-pill fw-bold" style="color: #FFFFFF !important;" data-sl-edit="text">FEATURED MASTERCLASS</span>
                <h1 class="display-2 fw-bolder mb-4 text-shadow sl-cinematic-title sl-text-emphasis" data-sl-edit="text">The Art of Storytelling in Film.</h1>
                <p class="fs-4 mb-5 text-shadow font-light sl-text-muted" data-sl-edit="text">Learn directing, screenwriting, and cinematic vision from Academy Award winners in this exclusive 4-week intensive.</p>
                
                <div class="d-flex align-items-center gap-3">
                    <a href="#" class="btn sl-btn-primary btn-lg rounded-pill px-5 py-3 fw-bold d-flex align-items-center shadow-lg" style="color: #FFFFFF !important;" data-sl-edit="link">
                        <i class="fa fa-play-circle fs-4 me-2"></i> Watch Trailer
                    </a>
                    <a href="#" class="btn sl-btn-outline-primary btn-lg rounded-pill px-4 py-3 fw-bold shadow-lg" style="border-width: 2px;" data-sl-edit="link">Enroll Now</a>
                </div>
            </div>
            
            <div class="col-lg-5 mt-5 mt-lg-0 d-flex justify-content-center justify-content-lg-end">
                <!-- Floating Glass Card -->
                <div class="glass-rating-card p-4 rounded-4 sl-float-anim sl-bg-card">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <div>
                            <div class="text-warning mb-1">
                                <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
                            </div>
                            <span class="fw-bold fs-5 sl-text-emphasis">4.9 / 5.0</span>
                        </div>
                        <span class="badge sl-bg-primary rounded-pill" style="color: #FFFFFF !important;">Top Rated</span>
                    </div>
                    
                    <p class="small fst-italic mb-3 sl-text-muted" data-sl-edit="text">"This course completely changed how I approach writing scripts. Absolute gold."</p>
                    
                    <div class="d-flex align-items-center">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" class="rounded-circle me-3 border border-2 border-secondary-subtle" width="40" height="40" alt="Student">
                        <div>
                            <h6 class="mb-0 fw-bold fs-6 sl-text-emphasis">Sarah Jenkins</h6>
                            <small class="sl-text-muted opacity-75">Film Student</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,
        css: `

/* SmartLearn Native Color Classes */
.sl-text-primary { color: var(--smartlearn-primary) !important; }
.sl-text-emphasis { color: var(--smartlearn-text) !important; }
.sl-text-muted { color: var(--smartlearn-text-muted) !important; }
.sl-bg-main { background-color: var(--smartlearn-bg) !important; }
.sl-bg-card { background-color: var(--smartlearn-card-bg) !important; border: 1px solid var(--smartlearn-card-border) !important; }
.sl-bg-primary { background-color: var(--smartlearn-primary) !important; }
.sl-bg-primary-subtle { background-color: color-mix(in srgb, var(--smartlearn-primary) 15%, transparent) !important; }
.sl-btn-primary { background-color: var(--smartlearn-primary) !important; border-color: var(--smartlearn-primary) !important; color: #fff !important; }
.sl-btn-primary:hover { background-color: var(--smartlearn-primary-hover, var(--smartlearn-primary)) !important; filter: brightness(0.9); }
.sl-btn-outline-primary { border-color: var(--smartlearn-primary) !important; color: var(--smartlearn-primary) !important; }
.sl-btn-outline-primary:hover { background-color: var(--smartlearn-primary) !important; color: #fff !important; }
.sl-border-primary { border-color: var(--smartlearn-primary) !important; }
.sl-hero-video {
    min-height: 85vh;
}
.sl-hero-video .object-fit-cover {
    object-fit: cover;
}
.sl-hero-video .text-shadow {
    text-shadow: 0 4px 20px rgba(0,0,0,0.4);
}
.sl-hero-video .font-light {
    font-weight: 300;
}
.sl-hero-video .sl-cinematic-title {
    line-height: 1.1;
    letter-spacing: -0.02em;
}
.sl-hero-video .glass-rating-card {
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    max-width: 320px;
    transition: transform 0.3s ease;
}
.sl-hero-video .glass-rating-card:hover {
    transform: translateY(-5px);
}
.sl-hero-video .sl-float-anim {
    animation: slFloat 6s ease-in-out infinite;
}
@keyframes slFloat {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
}`,
        js: `(function() {
    const root = document.querySelector('.sl-hero-video');
    if (!root) return;
})();`
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
        download_url: `/sections/${sec.id}.json`,
        is_premium: false,
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
console.log('Successfully generated first 4 Hero sections and updated catalog.json');
