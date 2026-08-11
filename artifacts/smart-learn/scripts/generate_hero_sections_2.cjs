const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const sectionsDir = path.join(publicDir, 'sections');
const catalogPath = path.join(publicDir, 'catalog.json');

const sections = [
    // 5. Floating Universe (Courses)
    {
        id: 'hero-floating-universe',
        meta: {
            name: 'Floating Universe Hero',
            category: 'Hero',
            variant: 'Floating',
            description: '3D parallax environment with floating course cards on a clean light background.',
            tags: ['hero', 'floating', '3d', 'courses', 'light'],
            image_count: 3
        },
        html: `<!-- sl-section: hero-floating-universe | v1.0 -->
<div class="sl-hero-universe position-relative overflow-hidden sl-bg-main">
    <!-- SVG Background blobs (Animated via CSS) -->
    <div class="position-absolute top-0 start-0 w-100 h-100 overflow-hidden z-0 pointer-events-none">
        <svg class="sl-blob blob-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="var(--bs-primary-bg-subtle)" d="M45.7,-76.1C58.9,-69.3,68.9,-54.9,76.5,-40.1C84,-25.3,89.1,-10.1,88.4,5C87.8,20.1,81.4,35,72.4,47.8C63.4,60.6,51.8,71.2,38.1,77.9C24.4,84.7,8.5,87.6,-6.4,85.7C-21.3,83.8,-35.1,77.1,-48.6,69.5C-62.1,62,-75.2,53.5,-83.1,41.2C-91,28.9,-93.7,12.8,-92.3,-2.7C-90.9,-18.2,-85.4,-33.1,-75.9,-44.6C-66.4,-56.1,-53,-64.1,-39.6,-70.7C-26.2,-77.3,-13.1,-82.5,1.2,-84.3C15.5,-86.1,30.9,-84.4,45.7,-76.1Z" transform="translate(100 100) scale(1.1)" />
        </svg>
        <svg class="sl-blob blob-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="var(--bs-secondary-bg-subtle)" d="M39.9,-65.4C51.6,-57.4,60.9,-45.5,69.1,-32.4C77.4,-19.3,84.5,-5,83.5,8.8C82.4,22.6,73.1,35.9,62.3,47.2C51.5,58.5,39.1,67.8,25.4,72.9C11.6,78,-3.5,78.9,-18.1,75.3C-32.7,71.6,-46.8,63.4,-58,52.2C-69.2,41,-77.4,26.9,-81.4,11.5C-85.4,-3.9,-85.2,-20.6,-78.3,-34.5C-71.4,-48.5,-57.8,-59.7,-43.3,-66.9C-28.8,-74.1,-14.4,-77.4,0.7,-78.4C15.8,-79.4,31.6,-78,39.9,-65.4Z" transform="translate(100 100) scale(0.9)" />
        </svg>
    </div>

    <div class="container py-6 py-lg-8 position-relative z-1">
        <div class="row align-items-center">
            <div class="col-lg-6 pe-lg-5 mb-5 mb-lg-0">
                <div class="badge sl-bg-primary-subtle sl-text-primary mb-3 px-3 py-2 rounded-pill fw-bold" data-sl-edit="text">Over 10,000 Courses</div>
                <h1 class="display-3 fw-bold mb-4 sl-universe-title sl-text-emphasis" data-sl-edit="text">Learn without <br><span class="sl-text-primary">limits.</span></h1>
                <p class="fs-5 sl-text-muted mb-5" data-sl-edit="text">Build skills with courses, certificates, and degrees online from world-class universities and companies.</p>
                
                <form class="d-flex sl-bg-main rounded-pill p-2 shadow-sm border border-secondary-subtle mb-4 sl-search-form">
                    <input type="text" class="form-control border-0 bg-transparent px-3 shadow-none text-body" placeholder="What do you want to learn?">
                    <button class="btn sl-btn-primary rounded-pill px-4 fw-bold" type="submit" data-sl-edit="text">Search</button>
                </form>
                
                <div class="d-flex align-items-center gap-3">
                    <div class="d-flex sl-avatar-group">
                        <img src="https://randomuser.me/api/portraits/women/11.jpg" alt="User" class="rounded-circle border border-2 border-body">
                        <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="User" class="rounded-circle border border-2 border-body">
                        <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="User" class="rounded-circle border border-2 border-body">
                        <div class="rounded-circle border border-2 border-body bg-light d-flex align-items-center justify-content-center sl-text-emphasis small fw-bold" style="width:40px; height:40px;">+5M</div>
                    </div>
                    <span class="sl-text-muted small fw-medium" data-sl-edit="text">Join 5M+ learners worldwide</span>
                </div>
            </div>
            
            <div class="col-lg-6 position-relative min-vh-50 d-none d-lg-block">
                <!-- Floating 3D Cards -->
                <div class="sl-float-card card-1 sl-bg-main border border-secondary-subtle rounded-4 shadow p-3 position-absolute">
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80" alt="Course" class="rounded-3 mb-3 w-100 object-fit-cover" style="height: 120px;">
                    <div class="badge sl-bg-primary text-white mb-2 rounded-pill"><i class="fa fa-star"></i> 4.8</div>
                    <h6 class="fw-bold fs-6 mb-1 sl-text-emphasis" data-sl-edit="text">Web Development Bootcamp</h6>
                    <small class="sl-text-muted d-block mb-2">Dr. Angela Yu</small>
                </div>
                
                <div class="sl-float-card card-2 sl-bg-main border border-secondary-subtle rounded-4 shadow-lg p-3 position-absolute">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80" alt="Course" class="rounded-3 mb-3 w-100 object-fit-cover" style="height: 140px;">
                    <div class="badge sl-bg-primary text-white mb-2 rounded-pill"><i class="fa fa-star"></i> 4.9</div>
                    <h6 class="fw-bold fs-6 mb-1 sl-text-emphasis" data-sl-edit="text">Data Science & Machine Learning</h6>
                    <small class="sl-text-muted d-block mb-2">Jose Portilla</small>
                </div>
                
                <div class="sl-float-card card-3 sl-bg-main border border-secondary-subtle rounded-4 shadow p-3 position-absolute">
                    <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=300&q=80" alt="Course" class="rounded-3 mb-3 w-100 object-fit-cover" style="height: 100px;">
                    <div class="badge sl-bg-primary text-white mb-2 rounded-pill"><i class="fa fa-star"></i> 4.7</div>
                    <h6 class="fw-bold fs-6 mb-1 sl-text-emphasis" data-sl-edit="text">UI/UX Design Masterclass</h6>
                    <small class="sl-text-muted d-block mb-2">Gary Simon</small>
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
.sl-hero-universe {
    background: transparent;
    min-height: 80vh;
}
.sl-hero-universe .sl-universe-title {
    letter-spacing: -0.03em;
}
.sl-hero-universe .sl-search-form {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.sl-hero-universe .sl-search-form:focus-within {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.08) !important;
}
.sl-hero-universe .sl-search-form input:focus {
    outline: none;
}
.sl-hero-universe .sl-universe-stage {
    perspective: 1000px;
}
.sl-hero-universe .sl-float-card {
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-style: preserve-3d;
}
.sl-hero-universe .sl-float-card:hover {
    transform: translateZ(30px) scale(1.05) !important;
    z-index: 10 !important;
}
.sl-hero-universe .card-1 {
    width: 240px; top: 5%; left: 10%; z-index: 1;
    animation: slUniverseFloat 8s ease-in-out infinite;
}
.sl-hero-universe .card-2 {
    width: 280px; top: 25%; right: 5%; z-index: 3;
    animation: slUniverseFloat 10s ease-in-out infinite reverse;
}
.sl-hero-universe .card-3 {
    width: 220px; bottom: 5%; left: 30%; z-index: 2;
    animation: slUniverseFloat 9s ease-in-out infinite 2s;
}
@keyframes slUniverseFloat {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(2deg); }
    100% { transform: translateY(0px) rotate(0deg); }
}`,
        js: `(function() {
    const root = document.querySelector('.sl-hero-universe');
    if (!root) return;
    
    // Mouse parallax effect
    root.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        
        const card1 = root.querySelector('.card-1');
        const card2 = root.querySelector('.card-2');
        const card3 = root.querySelector('.card-3');
        
        if (card1) card1.style.transform = \`translate3d(\${xAxis * 1.5}px, \${yAxis * 1.5}px, 0)\`;
        if (card2) card2.style.transform = \`translate3d(\${xAxis * 0.8}px, \${yAxis * 0.8}px, 20px)\`;
        if (card3) card3.style.transform = \`translate3d(\${xAxis * 2}px, \${yAxis * 2}px, 0)\`;
    });
    
    // Reset on mouse leave
    root.addEventListener('mouseleave', () => {
        const cards = root.querySelectorAll('.sl-float-card');
        cards.forEach(card => {
            card.style.transform = ''; // Let CSS animation take over again
        });
    });
})();`
    },

    // 6. Abstract Innovator (Organic SVG)
    {
        id: 'hero-abstract-innovator',
        meta: {
            name: 'Abstract Innovator Hero',
            category: 'Hero',
            variant: 'Abstract',
            description: 'Friendly, organic layout using morphing SVG blob shapes to mask images.',
            tags: ['hero', 'abstract', 'svg', 'blob', 'friendly'],
            image_count: 1
        },
        html: `<!-- sl-section: hero-abstract-innovator | v1.0 -->
<div class="sl-hero-abstract position-relative overflow-hidden sl-bg-main">
    <div class="container py-6 py-lg-7">
        <div class="row align-items-center g-5">
            <div class="col-lg-6 position-relative z-2">
                <h1 class="display-3 fw-bold mb-4 sl-blob-title sl-text-emphasis" data-sl-edit="text">Spark your <br>curiosity.</h1>
                <p class="fs-5 sl-text-muted mb-5 pe-lg-5" data-sl-edit="text">Discover interactive classes in design, illustration, photography, and more. Taught by creative professionals.</p>
                <div class="d-flex flex-wrap gap-3 mb-5">
                    <a href="#" class="btn sl-btn-primary btn-lg rounded-pill px-5 fw-bold shadow-sm" data-sl-edit="link">Start Learning</a>
                    <a href="#" class="btn sl-btn-outline-primary btn-lg rounded-pill px-4 fw-bold" data-sl-edit="link">Browse Catalog</a>
                </div>
                
                <!-- Trust indicators -->
                <div class="d-flex flex-wrap align-items-center gap-4 opacity-50">
                    <h6 class="mb-0 fw-bold tracking-wide small" data-sl-edit="text">TRUSTED BY</h6>
                    <i class="fa fa-google fs-4"></i>
                    <i class="fa fa-amazon fs-4"></i>
                    <i class="fa fa-spotify fs-4"></i>
                </div>
            </div>
            
            <div class="col-lg-6 position-relative">
                <!-- Background decorative blobs -->
                <div class="position-absolute sl-blob-bg bg-warning" style="top: -10%; right: 10%; width: 400px; height: 400px; z-index: 1;"></div>
                <div class="position-absolute sl-blob-bg sl-bg-primary opacity-25" style="bottom: -20%; left: 0%; width: 300px; height: 300px; z-index: 1;"></div>
                
                <!-- Image masked by SVG Blob -->
                <div class="sl-blob-mask-container mx-auto position-relative z-2">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-100 h-auto">
                        <defs>
                            <clipPath id="sl-blob-mask">
                                <path d="M47.7,-57.2C59.6,-47.3,65.6,-30.3,68.9,-13.4C72.2,3.4,72.7,20,65.6,33.1C58.4,46.2,43.7,55.9,28,62.3C12.4,68.6,-4.2,71.6,-20.9,68.8C-37.6,65.9,-54.3,57.1,-64.1,43C-73.8,28.9,-76.5,9.6,-71.4,-7.1C-66.2,-23.7,-53.2,-37.8,-39.5,-47.4C-25.8,-57,-12.9,-62.2,2.3,-64.9C17.4,-67.6,34.8,-68,47.7,-57.2Z" transform="translate(100 100)">
                                    <!-- Morphing animation -->
                                    <animate attributeName="d" dur="10s" repeatCount="indefinite" values="
                                        M47.7,-57.2C59.6,-47.3,65.6,-30.3,68.9,-13.4C72.2,3.4,72.7,20,65.6,33.1C58.4,46.2,43.7,55.9,28,62.3C12.4,68.6,-4.2,71.6,-20.9,68.8C-37.6,65.9,-54.3,57.1,-64.1,43C-73.8,28.9,-76.5,9.6,-71.4,-7.1C-66.2,-23.7,-53.2,-37.8,-39.5,-47.4C-25.8,-57,-12.9,-62.2,2.3,-64.9C17.4,-67.6,34.8,-68,47.7,-57.2Z;
                                        M44.7,-68.8C57.4,-60.7,66.8,-46.8,71.4,-31.6C76,-16.3,75.8,0.2,71.7,16.4C67.6,32.7,59.6,48.7,46.8,59.2C34.1,69.7,17,74.7,-0.7,75.8C-18.4,76.8,-36.8,73.8,-50.2,63.5C-63.5,53.2,-71.8,35.6,-75.7,17.4C-79.6,-0.8,-79.1,-19.7,-71.3,-35.1C-63.5,-50.4,-48.5,-62.3,-33.2,-68.7C-17.9,-75,-2,-75.7,13.6,-71C29.1,-66.3,42,-55.8,44.7,-68.8Z;
                                        M38.5,-59.5C51,-52.7,63,-44,70.5,-31.8C77.9,-19.5,80.7,-3.7,76.6,10.6C72.5,24.9,61.4,37.6,48.8,47.3C36.1,57,21.9,63.6,5.8,65.8C-10.4,67.9,-28.7,65.5,-42.6,56.7C-56.5,47.9,-66,32.6,-70.6,16.3C-75.1,-0.1,-74.7,-17.6,-66.7,-31.6C-58.7,-45.6,-43,-56,-28.8,-60.9C-14.7,-65.8,-2,-65.2,10.3,-61.7C22.6,-58.2,33.5,-51.7,38.5,-59.5Z;
                                        M47.7,-57.2C59.6,-47.3,65.6,-30.3,68.9,-13.4C72.2,3.4,72.7,20,65.6,33.1C58.4,46.2,43.7,55.9,28,62.3C12.4,68.6,-4.2,71.6,-20.9,68.8C-37.6,65.9,-54.3,57.1,-64.1,43C-73.8,28.9,-76.5,9.6,-71.4,-7.1C-66.2,-23.7,-53.2,-37.8,-39.5,-47.4C-25.8,-57,-12.9,-62.2,2.3,-64.9C17.4,-67.6,34.8,-68,47.7,-57.2Z
                                    "/>
                                </path>
                            </clipPath>
                        </defs>
                        <!-- Image rendered with the clip-path -->
                        <image href="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#sl-blob-mask)" />
                    </svg>
                    
                    <!-- Floating playful badge -->
                    <div class="position-absolute sl-wobbly-badge sl-bg-main border border-secondary-subtle rounded-pill px-3 py-2 shadow-sm d-flex align-items-center" style="bottom: 15%; right: 5%; z-index: 3;">
                        <span class="fs-3 me-2">🎨</span>
                        <div>
                            <div class="fw-bold fs-6 lh-1 sl-text-emphasis" data-sl-edit="text">Illustration</div>
                            <small class="sl-text-muted" data-sl-edit="text">New Classes</small>
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
.sl-hero-abstract {
    min-height: 80vh;
}
.sl-hero-abstract .sl-blob-title {
    letter-spacing: -0.04em;
}
.sl-hero-abstract .tracking-wide {
    letter-spacing: 0.1em;
}
.sl-hero-abstract .sl-blob-mask-container {
    max-width: 550px;
}
.sl-hero-abstract .sl-blob-bg {
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    animation: slBlobMorph 8s ease-in-out infinite;
}
.sl-hero-abstract .sl-wobbly-badge {
    animation: slWobble 4s ease-in-out infinite;
}
@keyframes slBlobMorph {
    0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: rotate(0deg); }
    34% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; transform: rotate(5deg); }
    67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; transform: rotate(-5deg); }
}
@keyframes slWobble {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(3deg); }
}`,
        js: `(function() {
    const root = document.querySelector('.sl-hero-abstract');
    if (!root) return;
})();`
    },

    // 7. Dynamic Academy (Diagonal Motion)
    {
        id: 'hero-dynamic-academy',
        meta: {
            name: 'Dynamic Academy Hero',
            category: 'Hero',
            variant: 'Dynamic',
            description: 'High-energy layout with a diagonal split and fast-paced animations.',
            tags: ['hero', 'dynamic', 'academy', 'sports', 'diagonal'],
            image_count: 1
        },
        html: `<!-- sl-section: hero-dynamic-academy | v1.0 -->
<div class="sl-hero-dynamic position-relative overflow-hidden sl-bg-main">
    <!-- Right Side Image with Diagonal Clip -->
    <div class="position-absolute top-0 end-0 h-100 sl-dynamic-image-wrapper">
        <div class="sl-dynamic-overlay position-absolute inset-0"></div>
        <img src="https://images.unsplash.com/photo-1552674605-15c37127b82a?auto=format&fit=crop&w=1200&q=80" class="w-100 h-100 object-fit-cover" data-sl-edit="image" alt="Dynamic learning">
    </div>
    
    <div class="container position-relative z-2 h-100">
        <div class="row align-items-center h-100" style="min-height: 85vh;">
            <div class="col-lg-6 sl-dynamic-content sl-text-emphasis py-6">
                
                <div class="d-flex align-items-center mb-4 sl-slide-in-1">
                    <div class="sl-bg-primary px-3 py-1 text-white fw-bold text-uppercase tracking-wide fs-6 me-3" style="transform: skewX(-15deg);" data-sl-edit="text">
                        <span class="d-inline-block" style="transform: skewX(15deg);">Pro Training</span>
                    </div>
                </div>
                
                <h1 class="display-2 fw-black text-uppercase fst-italic lh-1 mb-4 sl-text-emphasis sl-slide-in-2" data-sl-edit="text">
                    Push your <br>
                    <span class="sl-text-primary">Boundaries.</span>
                </h1>
                
                <p class="fs-5 opacity-75 mb-5 pe-lg-5 sl-slide-in-3" data-sl-edit="text">
                    High-performance coaching and certification for driven professionals. Stop watching, start doing.
                </p>
                
                <div class="d-flex flex-wrap gap-3 sl-slide-in-4">
                    <a href="#" class="btn sl-btn-primary btn-lg rounded-0 px-5 py-3 fw-bold text-uppercase fst-italic sl-btn-skew" data-sl-edit="link">
                        <span class="d-inline-block sl-unskew">Start Free Trial</span>
                    </a>
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,900&display=swap');

.sl-hero-dynamic {
    font-family: 'Montserrat', sans-serif;
}
.sl-hero-dynamic .fw-black {
    font-weight: 900;
}
.sl-hero-dynamic .tracking-wide {
    letter-spacing: 0.15em;
}
.sl-hero-dynamic .sl-dynamic-image-wrapper {
    width: 65%;
    clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
    animation: slImageSlideIn 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}
.sl-hero-dynamic .sl-dynamic-overlay {
    background: linear-gradient(90deg, rgba(33,37,41,1) 0%, rgba(33,37,41,0) 50%);
    z-index: 1;
}
.sl-hero-dynamic .object-fit-cover {
    object-fit: cover;
}
.sl-hero-dynamic .sl-btn-skew {
    transform: skewX(-15deg);
    transition: all 0.3s ease;
}
.sl-hero-dynamic .sl-btn-skew:hover {
    background-color: transparent;
    color: var(--smartlearn-primary);
}
.sl-hero-dynamic .sl-btn-skew .sl-unskew {
    transform: skewX(15deg);
}

/* Animations */
.sl-hero-dynamic .sl-slide-in-1,
.sl-hero-dynamic .sl-slide-in-2,
.sl-hero-dynamic .sl-slide-in-3,
.sl-hero-dynamic .sl-slide-in-4 {
    opacity: 0;
    transform: translateX(-50px);
}
.sl-hero-dynamic .sl-slide-in-1 { animation: slSlideRight 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.2s forwards; }
.sl-hero-dynamic .sl-slide-in-2 { animation: slSlideRight 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.3s forwards; }
.sl-hero-dynamic .sl-slide-in-3 { animation: slSlideRight 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.4s forwards; }
.sl-hero-dynamic .sl-slide-in-4 { animation: slSlideRight 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.5s forwards; }

@keyframes slSlideRight {
    to { opacity: 1; transform: translateX(0); }
}
@keyframes slImageSlideIn {
    from { transform: translateX(100px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

@media (max-width: 991px) {
    .sl-hero-dynamic .sl-dynamic-image-wrapper {
        width: 100%;
        clip-path: none;
        opacity: 0.3; /* Wash out image on mobile to show text */
    }
    .sl-hero-dynamic .sl-dynamic-overlay {
        background: rgba(0,0,0,0.7);
    }
}`,
        js: `(function() {
    const root = document.querySelector('.sl-hero-dynamic');
    if (!root) return;
})();`
    },

    // 8. Glass Box (Premium)
    {
        id: 'hero-glass-box',
        meta: {
            name: 'Glass Box Hero',
            category: 'Hero',
            variant: 'Premium Glass',
            description: 'Center-aligned frosted glass panel over a blurred full-width background image.',
            tags: ['hero', 'glassmorphism', 'premium', 'center'],
            image_count: 1
        },
        html: `<!-- sl-section: hero-glass-box | v1.0 -->
<div class="sl-hero-glass position-relative d-flex align-items-center justify-content-center">
    <!-- Blurred Parallax Background -->
    <div class="sl-glass-bg position-absolute inset-0 w-100 h-100"></div>
    <div class="position-absolute inset-0 w-100 h-100 bg-dark opacity-25 z-1"></div>
    
    <div class="container position-relative z-2 py-8">
        <div class="row justify-content-center">
            <div class="col-lg-8 col-xl-7">
                
                <!-- Glass Panel -->
                <div class="sl-glass-panel p-5 p-md-6 rounded-4 text-center text-white shadow-lg border border-white border-opacity-25">
                    <i class="fa fa-gem fs-2 text-white opacity-75 mb-4"></i>
                    
                    <h1 class="display-4 fw-bold mb-4 sl-glass-title" data-sl-edit="text">Elite Masterminds</h1>
                    <p class="fs-5 opacity-75 mb-5 px-md-4 font-light" data-sl-edit="text">Exclusive, cohort-based courses for industry leaders. Connect, grow, and scale with the top 1%.</p>
                    
                    <form class="d-flex flex-column flex-md-row gap-2 justify-content-center px-md-4">
                        <input type="email" class="form-control bg-light bg-opacity-10 border-white border-opacity-25 text-white px-4 py-3 rounded-pill shadow-none sl-glass-input" placeholder="Enter your email to apply">
                        <button class="btn btn-light rounded-pill px-5 py-3 fw-bold text-dark" data-sl-edit="text">Apply Now</button>
                    </form>
                    
                    <div class="mt-4 pt-3 border-top border-white border-opacity-25">
                        <small class="opacity-75" data-sl-edit="text">Next cohort begins October 15th. Only 20 seats available.</small>
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
.sl-hero-glass {
    min-height: 90vh;
    overflow: hidden;
}
.sl-hero-glass .sl-glass-bg {
    background-image: url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80');
    background-size: cover;
    background-position: center;
    background-attachment: fixed; /* Parallax effect */
    filter: blur(8px);
    transform: scale(1.1); /* Prevent blur edges */
}
.sl-hero-glass .sl-glass-panel {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    animation: slGlassFadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    transform: translateY(30px);
    opacity: 0;
}
.sl-hero-glass .sl-glass-title {
    letter-spacing: 0.02em;
}
.sl-hero-glass .font-light {
    font-weight: 300;
}
.sl-hero-glass .sl-glass-input::placeholder {
    color: rgba(255,255,255,0.6);
}
.sl-hero-glass .sl-glass-input:focus {
    background: rgba(255, 255, 255, 0.15) !important;
    border-color: rgba(255, 255, 255, 0.5) !important;
}

@keyframes slGlassFadeUp {
    to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
    .sl-hero-glass .sl-glass-bg {
        background-attachment: scroll; /* Fix iOS fixed background bug */
    }
    .sl-hero-glass .sl-glass-panel {
        padding: 2rem !important;
    }
}`,
        js: `(function() {
    const root = document.querySelector('.sl-hero-glass');
    if (!root) return;
})();`
    }
];

// Append to catalog
if (fs.existsSync(catalogPath)) {
    const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
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
    console.log('Successfully generated Hero sections 5-8 and updated catalog.json');
}
