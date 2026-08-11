const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const sectionsDir = path.join(publicDir, 'sections');
const catalogPath = path.join(publicDir, 'catalog.json');

if (!fs.existsSync(sectionsDir)) {
    fs.mkdirSync(sectionsDir, { recursive: true });
}

// -----------------------------------------------------------------------------
// CORE CSS FOR COURSES & CATEGORIES
// -----------------------------------------------------------------------------
const baseCss = `
/* SmartLearn Native Color Classes */
.sl-text-primary { color: var(--smartlearn-primary) !important; }
.sl-text-emphasis { color: var(--smartlearn-text) !important; }
.sl-text-muted { color: var(--smartlearn-text-muted) !important; }

.sl-bg-main { background-color: var(--smartlearn-bg) !important; }
.sl-bg-card { background-color: var(--smartlearn-card-bg) !important; border: 1px solid var(--smartlearn-card-border) !important; }
.sl-bg-primary { background-color: var(--smartlearn-primary) !important; }

.sl-border { border-color: var(--smartlearn-card-border) !important; }
.sl-border-primary { border-color: var(--smartlearn-primary) !important; }

/* Media Fallbacks */
.sl-media-fallback {
    background-color: var(--smartlearn-card-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--smartlearn-text-muted);
}

/* Base Accessibility */
.sl-focus-ring:focus-visible {
    outline: 3px solid var(--smartlearn-primary);
    outline-offset: 3px;
}

/* Smooth zoom on hover for images */
.sl-hover-zoom { transition: transform 0.6s ease; }
@media (hover: hover) and (prefers-reduced-motion: no-preference) {
    .sl-hover-card:hover .sl-hover-zoom { transform: scale(1.05); }
    .sl-hover-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
    .sl-hover-card:hover { 
        transform: translateY(-5px);
        box-shadow: 0 1rem 2rem rgba(0,0,0,0.1) !important;
    }
}
`;

const sections = [
    // -----------------------------------------------------------------------------
    // 1. Classic Course Grid (Premium Edition)
    // -----------------------------------------------------------------------------
    {
        id: 'course-classic-grid',
        meta: {
            name: 'Classic Course Grid',
            category: 'Courses & Categories',
            variant: 'Grid',
            description: 'A dependable 3 or 4-column grid of course cards elevated with subtle hover shadows, badge tags, and beautiful instructor avatars.',
            tags: ['courses', 'grid', 'catalog', 'premium'],
            image_count: 3
        },
        html: `<!-- sl-section: course-classic-grid | v1.0 -->
<section class="sl-course-grid py-5 py-lg-6 sl-bg-main">
    <div class="container">
        
        <header class="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-3">
            <div style="max-width: 600px;">
                <h2 class="display-6 fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Featured Courses</h2>
                <p class="sl-text-muted fs-5 mb-0" data-sl-edit="text">Explore our most popular programs taught by industry experts.</p>
            </div>
            <a href="#" class="btn btn-outline-dark sl-text-emphasis sl-border rounded-pill px-4 fw-bold flex-shrink-0 sl-focus-ring" data-sl-edit="link">View Full Catalog <i class="fa fa-arrow-right ms-2"></i></a>
        </header>

        <div class="row g-4">
            
            <!-- Course Card 1 -->
            <div class="col-md-6 col-lg-4">
                <a href="#" class="card h-100 sl-bg-card sl-border rounded-4 overflow-hidden text-decoration-none sl-hover-card sl-focus-ring d-flex flex-column">
                    <!-- Image Area -->
                    <div class="position-relative" style="height: 220px;">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://picsum.photos/seed/slc1/600/400" alt="Course Image" class="w-100 h-100 object-fit-cover position-relative z-1 sl-hover-zoom" loading="lazy">
                        <div class="position-absolute top-0 end-0 p-3 z-2">
                            <span class="badge bg-white text-dark rounded-pill fw-bold shadow-sm">Intermediate</span>
                        </div>
                    </div>
                    <!-- Body Area -->
                    <div class="card-body p-4 d-flex flex-column flex-grow-1">
                        <div class="d-flex align-items-center justify-content-between mb-3 small fw-bold">
                            <span class="sl-text-primary tracking-wide text-uppercase" data-sl-edit="text">Data Science</span>
                            <div class="sl-text-emphasis">
                                <i class="fa fa-star text-warning"></i> 4.8 <span class="sl-text-muted fw-normal">(1.2k)</span>
                            </div>
                        </div>
                        <h3 class="h5 fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Python for Data Analysis</h3>
                        
                        <div class="mt-auto pt-3 border-top sl-border d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center gap-2">
                                <div class="rounded-circle sl-bg-main d-flex align-items-center justify-content-center border sl-border overflow-hidden flex-shrink-0" style="width: 32px; height: 32px;">
                                    <i class="fa fa-user sl-text-muted small"></i>
                                </div>
                                <span class="small fw-bold sl-text-emphasis" data-sl-edit="text">Dr. S. Jenkins</span>
                            </div>
                            <span class="small fw-bold sl-text-muted" data-sl-edit="text"><i class="fa fa-clock-o me-1"></i> 12 Weeks</span>
                        </div>
                    </div>
                </a>
            </div>

            <!-- Course Card 2 -->
            <div class="col-md-6 col-lg-4">
                <a href="#" class="card h-100 sl-bg-card sl-border rounded-4 overflow-hidden text-decoration-none sl-hover-card sl-focus-ring d-flex flex-column">
                    <div class="position-relative" style="height: 220px;">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://picsum.photos/seed/slc2/600/400" alt="Course Image" class="w-100 h-100 object-fit-cover position-relative z-1 sl-hover-zoom" loading="lazy">
                        <div class="position-absolute top-0 end-0 p-3 z-2">
                            <span class="badge bg-white text-dark rounded-pill fw-bold shadow-sm">Beginner</span>
                        </div>
                    </div>
                    <div class="card-body p-4 d-flex flex-column flex-grow-1">
                        <div class="d-flex align-items-center justify-content-between mb-3 small fw-bold">
                            <span class="sl-text-primary tracking-wide text-uppercase" data-sl-edit="text">Design</span>
                            <div class="sl-text-emphasis">
                                <i class="fa fa-star text-warning"></i> 4.9 <span class="sl-text-muted fw-normal">(850)</span>
                            </div>
                        </div>
                        <h3 class="h5 fw-bold sl-text-emphasis mb-3" data-sl-edit="text">UI/UX Foundations</h3>
                        
                        <div class="mt-auto pt-3 border-top sl-border d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center gap-2">
                                <div class="rounded-circle sl-bg-main d-flex align-items-center justify-content-center border sl-border overflow-hidden flex-shrink-0" style="width: 32px; height: 32px;">
                                    <i class="fa fa-user sl-text-muted small"></i>
                                </div>
                                <span class="small fw-bold sl-text-emphasis" data-sl-edit="text">Elena Rostova</span>
                            </div>
                            <span class="small fw-bold sl-text-muted" data-sl-edit="text"><i class="fa fa-clock-o me-1"></i> 8 Weeks</span>
                        </div>
                    </div>
                </a>
            </div>

            <!-- Course Card 3 -->
            <div class="col-md-6 col-lg-4">
                <a href="#" class="card h-100 sl-bg-card sl-border rounded-4 overflow-hidden text-decoration-none sl-hover-card sl-focus-ring d-flex flex-column">
                    <div class="position-relative" style="height: 220px;">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://picsum.photos/seed/slc3/600/400" alt="Course Image" class="w-100 h-100 object-fit-cover position-relative z-1 sl-hover-zoom" loading="lazy">
                        <div class="position-absolute top-0 end-0 p-3 z-2">
                            <span class="badge sl-bg-primary text-white rounded-pill fw-bold shadow-sm">Advanced</span>
                        </div>
                    </div>
                    <div class="card-body p-4 d-flex flex-column flex-grow-1">
                        <div class="d-flex align-items-center justify-content-between mb-3 small fw-bold">
                            <span class="sl-text-primary tracking-wide text-uppercase" data-sl-edit="text">Engineering</span>
                            <div class="sl-text-emphasis">
                                <i class="fa fa-star text-warning"></i> 4.7 <span class="sl-text-muted fw-normal">(2.1k)</span>
                            </div>
                        </div>
                        <h3 class="h5 fw-bold sl-text-emphasis mb-3" data-sl-edit="text">System Design Architecture</h3>
                        
                        <div class="mt-auto pt-3 border-top sl-border d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center gap-2">
                                <div class="rounded-circle sl-bg-main d-flex align-items-center justify-content-center border sl-border overflow-hidden flex-shrink-0" style="width: 32px; height: 32px;">
                                    <i class="fa fa-user sl-text-muted small"></i>
                                </div>
                                <span class="small fw-bold sl-text-emphasis" data-sl-edit="text">M. Chen</span>
                            </div>
                            <span class="small fw-bold sl-text-muted" data-sl-edit="text"><i class="fa fa-clock-o me-1"></i> 16 Weeks</span>
                        </div>
                    </div>
                </a>
            </div>

        </div>
    </div>
</section>`,
        css: baseCss + `
.sl-course-grid .py-lg-6 { padding-top: 6rem; padding-bottom: 6rem; }
.sl-course-grid .tracking-wide { letter-spacing: 0.1em; }
`,
        js: `(function() { const root = document.querySelector('.sl-course-grid'); if (!root) return; })();`
    },

    // -----------------------------------------------------------------------------
    // 2. Cinematic Course Carousel
    // -----------------------------------------------------------------------------
    {
        id: 'course-cinematic-carousel',
        meta: {
            name: 'Cinematic Carousel',
            category: 'Courses & Categories',
            variant: 'Slider',
            description: 'A horizontal, swipeable slider of featured courses. Features large visuals and drag/swipe interactions.',
            tags: ['courses', 'carousel', 'slider', 'featured', 'cinematic'],
            image_count: 4
        },
        html: `<!-- sl-section: course-cinematic-carousel | v1.0 -->
<section class="sl-course-carousel py-5 py-lg-6 sl-bg-main overflow-hidden">
    <div class="container mb-4">
        <div class="d-flex align-items-center justify-content-between">
            <h2 class="h3 fw-bold sl-text-emphasis mb-0" data-sl-edit="text">New & Trending</h2>
            
            <!-- Carousel Controls -->
            <div class="d-flex gap-2">
                <button class="btn btn-outline-dark rounded-circle p-0 sl-border sl-text-emphasis d-flex align-items-center justify-content-center sl-carousel-prev sl-focus-ring" style="width: 40px; height: 40px;" aria-label="Previous">
                    <i class="fa fa-chevron-left"></i>
                </button>
                <button class="btn btn-outline-dark rounded-circle p-0 sl-border sl-text-emphasis d-flex align-items-center justify-content-center sl-carousel-next sl-focus-ring" style="width: 40px; height: 40px;" aria-label="Next">
                    <i class="fa fa-chevron-right"></i>
                </button>
            </div>
        </div>
    </div>

    <!-- Cinematic Slider Container -->
    <!-- Note: padding-left creates the effect of overflowing on the right but starting aligned on the left -->
    <div class="sl-slider-container container position-relative">
        <div class="sl-slider-track d-flex gap-4 pb-4 px-2" style="overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none;">
            
            <!-- Cinematic Slide 1 -->
            <div class="sl-slide flex-shrink-0" style="scroll-snap-align: start;">
                <div class="card border-0 sl-bg-card sl-border rounded-4 overflow-hidden h-100 shadow-sm sl-hover-card position-relative">
                    <div class="row g-0 h-100">
                        <div class="col-md-6 col-lg-7 position-relative" style="min-height: 250px;">
                            <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                            <img src="https://picsum.photos/seed/slcar1/800/600" alt="Course" class="w-100 h-100 object-fit-cover position-absolute z-1 sl-hover-zoom" loading="lazy">
                            <!-- Gradient for cinematic feel -->
                            <div class="position-absolute top-0 start-0 w-100 h-100 z-2 d-none d-md-block" style="background: linear-gradient(to right, transparent, var(--smartlearn-card-bg));"></div>
                        </div>
                        <div class="col-md-6 col-lg-5 p-4 p-lg-5 d-flex flex-column justify-content-center position-relative z-3 sl-bg-card">
                            <span class="badge sl-bg-primary-subtle sl-text-primary px-3 py-2 rounded-pill fw-bold mb-3 align-self-start" data-sl-edit="text">MASTERCLASS</span>
                            <h3 class="h4 fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Advanced Machine Learning Algorithms</h3>
                            <p class="sl-text-muted mb-4 small" data-sl-edit="text">Dive deep into neural networks, backpropagation, and transformer architectures in this comprehensive 12-week program.</p>
                            
                            <div class="d-flex align-items-center gap-2 mb-4">
                                <i class="fa fa-star text-warning"></i>
                                <span class="fw-bold sl-text-emphasis">4.9</span>
                                <span class="small sl-text-muted">(2.4k reviews)</span>
                            </div>
                            <a href="#" class="btn sl-bg-primary text-white rounded-pill px-4 py-2 fw-bold align-self-start sl-focus-ring" data-sl-edit="link">Enroll Now</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Cinematic Slide 2 -->
            <div class="sl-slide flex-shrink-0" style="scroll-snap-align: start;">
                <div class="card border-0 sl-bg-card sl-border rounded-4 overflow-hidden h-100 shadow-sm sl-hover-card position-relative">
                    <div class="row g-0 h-100">
                        <div class="col-md-6 col-lg-7 position-relative" style="min-height: 250px;">
                            <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                            <img src="https://picsum.photos/seed/slcar2/800/600" alt="Course" class="w-100 h-100 object-fit-cover position-absolute z-1 sl-hover-zoom" loading="lazy">
                            <div class="position-absolute top-0 start-0 w-100 h-100 z-2 d-none d-md-block" style="background: linear-gradient(to right, transparent, var(--smartlearn-card-bg));"></div>
                        </div>
                        <div class="col-md-6 col-lg-5 p-4 p-lg-5 d-flex flex-column justify-content-center position-relative z-3 sl-bg-card">
                            <span class="badge sl-bg-primary-subtle sl-text-primary px-3 py-2 rounded-pill fw-bold mb-3 align-self-start" data-sl-edit="text">CERTIFICATE</span>
                            <h3 class="h4 fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Global Supply Chain Management</h3>
                            <p class="sl-text-muted mb-4 small" data-sl-edit="text">Learn how to optimize logistics and manage international supplier relations in a post-disruption economy.</p>
                            
                            <div class="d-flex align-items-center gap-2 mb-4">
                                <i class="fa fa-star text-warning"></i>
                                <span class="fw-bold sl-text-emphasis">4.7</span>
                                <span class="small sl-text-muted">(850 reviews)</span>
                            </div>
                            <a href="#" class="btn sl-bg-primary text-white rounded-pill px-4 py-2 fw-bold align-self-start sl-focus-ring" data-sl-edit="link">Enroll Now</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Cinematic Slide 3 -->
            <div class="sl-slide flex-shrink-0" style="scroll-snap-align: start;">
                <div class="card border-0 sl-bg-card sl-border rounded-4 overflow-hidden h-100 shadow-sm sl-hover-card position-relative">
                    <div class="row g-0 h-100">
                        <div class="col-md-6 col-lg-7 position-relative" style="min-height: 250px;">
                            <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                            <img src="https://picsum.photos/seed/slcar3/800/600" alt="Course" class="w-100 h-100 object-fit-cover position-absolute z-1 sl-hover-zoom" loading="lazy">
                            <div class="position-absolute top-0 start-0 w-100 h-100 z-2 d-none d-md-block" style="background: linear-gradient(to right, transparent, var(--smartlearn-card-bg));"></div>
                        </div>
                        <div class="col-md-6 col-lg-5 p-4 p-lg-5 d-flex flex-column justify-content-center position-relative z-3 sl-bg-card">
                            <span class="badge sl-bg-primary-subtle sl-text-primary px-3 py-2 rounded-pill fw-bold mb-3 align-self-start" data-sl-edit="text">BOOTCAMP</span>
                            <h3 class="h4 fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Full-Stack Web Development</h3>
                            <p class="sl-text-muted mb-4 small" data-sl-edit="text">Master React, Node.js, and MongoDB. Build a portfolio of real-world applications in 16 weeks.</p>
                            
                            <div class="d-flex align-items-center gap-2 mb-4">
                                <i class="fa fa-star text-warning"></i>
                                <span class="fw-bold sl-text-emphasis">4.9</span>
                                <span class="small sl-text-muted">(3.2k reviews)</span>
                            </div>
                            <a href="#" class="btn sl-bg-primary text-white rounded-pill px-4 py-2 fw-bold align-self-start sl-focus-ring" data-sl-edit="link">Enroll Now</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>`,
        css: baseCss + `
.sl-course-carousel .py-lg-6 { padding-top: 6rem; padding-bottom: 6rem; }

/* Hide scrollbar for cleaner look */
.sl-course-carousel .sl-slider-track::-webkit-scrollbar { display: none; }
.sl-course-carousel .sl-slider-track { -ms-overflow-style: none; }

/* Cinematic Slide sizing */
.sl-course-carousel .sl-slide {
    width: 90%;
    max-width: 900px;
}
@media (min-width: 768px) {
    .sl-course-carousel .sl-slide {
        width: 85%;
    }
}
`,
        js: `(function() {
    const section = document.querySelector('.sl-course-carousel');
    if (!section) return;

    const track = section.querySelector('.sl-slider-track');
    const prevBtn = section.querySelector('.sl-carousel-prev');
    const nextBtn = section.querySelector('.sl-carousel-next');

    if (!track || !prevBtn || !nextBtn) return;

    // Calculate scroll amount (width of one slide + gap)
    const getScrollAmount = () => {
        const slide = track.querySelector('.sl-slide');
        return slide ? slide.offsetWidth + 24 : 300; // 24px is gap-4 roughly
    };

    nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });
})();`
    },

    // -----------------------------------------------------------------------------
    // 3. Filterable Course Explorer
    // -----------------------------------------------------------------------------
    {
        id: 'course-filterable-explorer',
        meta: {
            name: 'Filterable Explorer',
            category: 'Courses & Categories',
            variant: 'Gallery',
            description: 'A powerful grid with interactive category tabs, allowing users to filter large catalogs instantly.',
            tags: ['courses', 'filter', 'tabs', 'catalog', 'gallery'],
            image_count: 4
        },
        html: `<!-- sl-section: course-filterable-explorer | v1.0 -->
<section class="sl-course-explorer py-5 py-lg-6 sl-bg-main">
    <div class="container">
        
        <div class="text-center mb-5">
            <h2 class="display-6 fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Explore the Catalog</h2>
            <p class="sl-text-muted fs-5 mx-auto" style="max-width: 600px;" data-sl-edit="text">Find the perfect program to advance your career.</p>
        </div>

        <!-- Filter Navigation -->
        <div class="d-flex flex-wrap justify-content-center gap-2 mb-5 sl-filter-nav">
            <button class="btn rounded-pill px-4 py-2 fw-bold sl-filter-btn active sl-bg-card sl-text-emphasis sl-border shadow-sm sl-focus-ring" data-filter="all">All Courses</button>
            <button class="btn rounded-pill px-4 py-2 fw-bold sl-filter-btn sl-bg-main text-muted sl-border border-0 sl-focus-ring" data-filter="tech">Technology</button>
            <button class="btn rounded-pill px-4 py-2 fw-bold sl-filter-btn sl-bg-main text-muted sl-border border-0 sl-focus-ring" data-filter="business">Business</button>
            <button class="btn rounded-pill px-4 py-2 fw-bold sl-filter-btn sl-bg-main text-muted sl-border border-0 sl-focus-ring" data-filter="design">Design</button>
        </div>

        <!-- Grid -->
        <div class="row g-4 sl-filter-grid">
            
            <!-- Card: Tech -->
            <div class="col-md-6 col-lg-3 sl-filter-item" data-category="tech">
                <a href="#" class="card h-100 sl-bg-card sl-border rounded-4 overflow-hidden text-decoration-none sl-hover-card sl-focus-ring d-flex flex-column">
                    <div class="position-relative" style="height: 180px;">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://picsum.photos/seed/slfilt1/400/300" alt="Tech" class="w-100 h-100 object-fit-cover position-relative z-1 sl-hover-zoom" loading="lazy">
                    </div>
                    <div class="card-body p-4 d-flex flex-column flex-grow-1">
                        <div class="small fw-bold text-uppercase sl-text-primary tracking-wide mb-2" data-sl-edit="text">Tech</div>
                        <h3 class="h6 fw-bold sl-text-emphasis mb-3 lh-base" data-sl-edit="text">Cloud Architecture AWS</h3>
                        <div class="mt-auto d-flex justify-content-between align-items-center small fw-bold sl-text-muted">
                            <span data-sl-edit="text">8 Weeks</span>
                            <span><i class="fa fa-star text-warning me-1"></i>4.9</span>
                        </div>
                    </div>
                </a>
            </div>

            <!-- Card: Business -->
            <div class="col-md-6 col-lg-3 sl-filter-item" data-category="business">
                <a href="#" class="card h-100 sl-bg-card sl-border rounded-4 overflow-hidden text-decoration-none sl-hover-card sl-focus-ring d-flex flex-column">
                    <div class="position-relative" style="height: 180px;">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://picsum.photos/seed/slfilt2/400/300" alt="Business" class="w-100 h-100 object-fit-cover position-relative z-1 sl-hover-zoom" loading="lazy">
                    </div>
                    <div class="card-body p-4 d-flex flex-column flex-grow-1">
                        <div class="small fw-bold text-uppercase sl-text-primary tracking-wide mb-2" data-sl-edit="text">Business</div>
                        <h3 class="h6 fw-bold sl-text-emphasis mb-3 lh-base" data-sl-edit="text">Agile Project Management</h3>
                        <div class="mt-auto d-flex justify-content-between align-items-center small fw-bold sl-text-muted">
                            <span data-sl-edit="text">4 Weeks</span>
                            <span><i class="fa fa-star text-warning me-1"></i>4.7</span>
                        </div>
                    </div>
                </a>
            </div>

            <!-- Card: Design -->
            <div class="col-md-6 col-lg-3 sl-filter-item" data-category="design">
                <a href="#" class="card h-100 sl-bg-card sl-border rounded-4 overflow-hidden text-decoration-none sl-hover-card sl-focus-ring d-flex flex-column">
                    <div class="position-relative" style="height: 180px;">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://picsum.photos/seed/slfilt3/400/300" alt="Design" class="w-100 h-100 object-fit-cover position-relative z-1 sl-hover-zoom" loading="lazy">
                    </div>
                    <div class="card-body p-4 d-flex flex-column flex-grow-1">
                        <div class="small fw-bold text-uppercase sl-text-primary tracking-wide mb-2" data-sl-edit="text">Design</div>
                        <h3 class="h6 fw-bold sl-text-emphasis mb-3 lh-base" data-sl-edit="text">Typography in UI</h3>
                        <div class="mt-auto d-flex justify-content-between align-items-center small fw-bold sl-text-muted">
                            <span data-sl-edit="text">2 Weeks</span>
                            <span><i class="fa fa-star text-warning me-1"></i>4.8</span>
                        </div>
                    </div>
                </a>
            </div>

            <!-- Card: Tech 2 -->
            <div class="col-md-6 col-lg-3 sl-filter-item" data-category="tech">
                <a href="#" class="card h-100 sl-bg-card sl-border rounded-4 overflow-hidden text-decoration-none sl-hover-card sl-focus-ring d-flex flex-column">
                    <div class="position-relative" style="height: 180px;">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://picsum.photos/seed/slfilt4/400/300" alt="Tech" class="w-100 h-100 object-fit-cover position-relative z-1 sl-hover-zoom" loading="lazy">
                    </div>
                    <div class="card-body p-4 d-flex flex-column flex-grow-1">
                        <div class="small fw-bold text-uppercase sl-text-primary tracking-wide mb-2" data-sl-edit="text">Tech</div>
                        <h3 class="h6 fw-bold sl-text-emphasis mb-3 lh-base" data-sl-edit="text">Applied CyberSecurity</h3>
                        <div class="mt-auto d-flex justify-content-between align-items-center small fw-bold sl-text-muted">
                            <span data-sl-edit="text">10 Weeks</span>
                            <span><i class="fa fa-star text-warning me-1"></i>4.9</span>
                        </div>
                    </div>
                </a>
            </div>

        </div>
    </div>
</section>`,
        css: baseCss + `
.sl-course-explorer .py-lg-6 { padding-top: 6rem; padding-bottom: 6rem; }
.sl-course-explorer .tracking-wide { letter-spacing: 0.1em; }

/* Filter Transitions */
.sl-course-explorer .sl-filter-item {
    transition: opacity 0.3s ease, transform 0.3s ease;
}
.sl-course-explorer .sl-filter-item.d-none {
    opacity: 0;
    transform: scale(0.95);
}
`,
        js: `(function() {
    const section = document.querySelector('.sl-course-explorer');
    if (!section) return;

    const filterBtns = section.querySelectorAll('.sl-filter-btn');
    const items = section.querySelectorAll('.sl-filter-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update Active Tab State
            filterBtns.forEach(b => {
                b.classList.remove('active', 'sl-bg-card', 'sl-text-emphasis', 'shadow-sm');
                b.classList.add('text-muted');
            });
            btn.classList.add('active', 'sl-bg-card', 'sl-text-emphasis', 'shadow-sm');
            btn.classList.remove('text-muted');

            // Filter Items
            items.forEach(item => {
                const category = item.getAttribute('data-category');
                
                // Remove display none first to allow transition if supported
                if (filter === 'all' || category === filter) {
                    item.classList.remove('d-none');
                    // small delay to trigger CSS transition
                    setTimeout(() => item.style.opacity = '1', 10);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => item.classList.add('d-none'), 300); // match css transition
                }
            });
        });
    });
})();`
    },

    // -----------------------------------------------------------------------------
    // 4. The Bento Flagship
    // -----------------------------------------------------------------------------
    {
        id: 'course-bento-flagship',
        meta: {
            name: 'Bento Flagship',
            category: 'Courses & Categories',
            variant: 'Bento Grid',
            description: 'One massive "Hero Course" taking up the left side, surrounded by smaller trending courses on the right.',
            tags: ['courses', 'bento', 'grid', 'featured', 'flagship'],
            image_count: 5
        },
        html: `<!-- sl-section: course-bento-flagship | v1.0 -->
<section class="sl-course-bento py-5 py-lg-6 sl-bg-main">
    <div class="container">
        
        <header class="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-3">
            <div>
                <h2 class="display-6 fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Flagship Programs</h2>
                <p class="sl-text-muted fs-5 mb-0" data-sl-edit="text">Our highest-rated, comprehensive curriculums.</p>
            </div>
            <a href="#" class="fw-bold sl-text-primary text-decoration-none sl-focus-ring" data-sl-edit="link">View all programs <i class="fa fa-arrow-right ms-2"></i></a>
        </header>

        <div class="row g-4">
            
            <!-- Massive Hero Course -->
            <div class="col-lg-7">
                <a href="#" class="card h-100 border-0 sl-bg-card sl-border rounded-4 overflow-hidden text-decoration-none sl-hover-card sl-focus-ring position-relative">
                    <div class="position-absolute top-0 start-0 w-100 h-100 z-0">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://picsum.photos/seed/slbentohero/800/800" alt="Hero Course" class="w-100 h-100 object-fit-cover position-relative z-1 sl-hover-zoom" loading="lazy">
                        <div class="position-absolute top-0 start-0 w-100 h-100 z-2" style="background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 80%);"></div>
                    </div>
                    
                    <div class="card-body p-4 p-md-5 d-flex flex-column justify-content-end position-relative z-3" style="min-height: 400px;">
                        <span class="badge sl-bg-primary text-white rounded-pill fw-bold shadow-sm mb-3 align-self-start" data-sl-edit="text">BOOTCAMP</span>
                        <h3 class="display-5 fw-bold text-white mb-3" data-sl-edit="text">Full-Stack Software Engineering</h3>
                        <p class="text-white opacity-75 fs-5 mb-4" data-sl-edit="text">Zero to deployment in 24 weeks. Master React, Node, and Cloud Infrastructure.</p>
                        
                        <div class="d-flex align-items-center gap-4 text-white">
                            <div class="d-flex align-items-center gap-2">
                                <i class="fa fa-star text-warning"></i>
                                <span class="fw-bold">4.9</span>
                            </div>
                            <div class="d-flex align-items-center gap-2 opacity-75">
                                <i class="fa fa-users"></i>
                                <span>12,000+ Enrolled</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <!-- Bento Right Column: 2x2 Grid of smaller courses -->
            <div class="col-lg-5">
                <div class="row g-4 h-100">
                    
                    <!-- Sub Course 1 -->
                    <div class="col-sm-6">
                        <a href="#" class="card h-100 sl-bg-card sl-border rounded-4 overflow-hidden text-decoration-none sl-hover-card sl-focus-ring d-flex flex-column">
                            <div class="position-relative" style="height: 140px;">
                                <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                                <img src="https://picsum.photos/seed/slbento1/400/300" alt="Course" class="w-100 h-100 object-fit-cover position-relative z-1 sl-hover-zoom" loading="lazy">
                            </div>
                            <div class="card-body p-3 d-flex flex-column">
                                <h4 class="h6 fw-bold sl-text-emphasis mb-2 lh-base" data-sl-edit="text">React Patterns</h4>
                                <div class="mt-auto small sl-text-muted fw-bold">4 Weeks &middot; Adv.</div>
                            </div>
                        </a>
                    </div>

                    <!-- Sub Course 2 -->
                    <div class="col-sm-6">
                        <a href="#" class="card h-100 sl-bg-card sl-border rounded-4 overflow-hidden text-decoration-none sl-hover-card sl-focus-ring d-flex flex-column">
                            <div class="position-relative" style="height: 140px;">
                                <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                                <img src="https://picsum.photos/seed/slbento2/400/300" alt="Course" class="w-100 h-100 object-fit-cover position-relative z-1 sl-hover-zoom" loading="lazy">
                            </div>
                            <div class="card-body p-3 d-flex flex-column">
                                <h4 class="h6 fw-bold sl-text-emphasis mb-2 lh-base" data-sl-edit="text">Node.js APIs</h4>
                                <div class="mt-auto small sl-text-muted fw-bold">6 Weeks &middot; Int.</div>
                            </div>
                        </a>
                    </div>

                    <!-- Sub Course 3 -->
                    <div class="col-sm-6">
                        <a href="#" class="card h-100 sl-bg-card sl-border rounded-4 overflow-hidden text-decoration-none sl-hover-card sl-focus-ring d-flex flex-column">
                            <div class="position-relative" style="height: 140px;">
                                <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                                <img src="https://picsum.photos/seed/slbento3/400/300" alt="Course" class="w-100 h-100 object-fit-cover position-relative z-1 sl-hover-zoom" loading="lazy">
                            </div>
                            <div class="card-body p-3 d-flex flex-column">
                                <h4 class="h6 fw-bold sl-text-emphasis mb-2 lh-base" data-sl-edit="text">Docker Mastery</h4>
                                <div class="mt-auto small sl-text-muted fw-bold">3 Weeks &middot; Int.</div>
                            </div>
                        </a>
                    </div>

                    <!-- Sub Course 4 -->
                    <div class="col-sm-6">
                        <a href="#" class="card h-100 sl-bg-card sl-border rounded-4 overflow-hidden text-decoration-none sl-hover-card sl-focus-ring d-flex flex-column">
                            <div class="position-relative" style="height: 140px;">
                                <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                                <img src="https://picsum.photos/seed/slbento4/400/300" alt="Course" class="w-100 h-100 object-fit-cover position-relative z-1 sl-hover-zoom" loading="lazy">
                            </div>
                            <div class="card-body p-3 d-flex flex-column">
                                <h4 class="h6 fw-bold sl-text-emphasis mb-2 lh-base" data-sl-edit="text">CI/CD Pipelines</h4>
                                <div class="mt-auto small sl-text-muted fw-bold">2 Weeks &middot; Adv.</div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>

        </div>
    </div>
</section>`,
        css: baseCss + `
.sl-course-bento .py-lg-6 { padding-top: 6rem; padding-bottom: 6rem; }
`,
        js: `(function() { const root = document.querySelector('.sl-course-bento'); if (!root) return; })();`
    },

    // -----------------------------------------------------------------------------
    // 5. Professional Catalog / List
    // -----------------------------------------------------------------------------
    {
        id: 'course-professional-list',
        meta: {
            name: 'Professional Catalog / List',
            category: 'Courses & Categories',
            variant: 'List',
            description: 'A compact, directory-style list (rows instead of cards) for universities or corporate LMS installations with massive catalogs.',
            tags: ['courses', 'list', 'catalog', 'directory', 'corporate'],
            image_count: 0
        },
        html: `<!-- sl-section: course-professional-list | v1.0 -->
<section class="sl-course-list py-5 py-lg-6 sl-bg-main">
    <div class="container">
        
        <header class="mb-5 border-bottom sl-border pb-4 d-flex justify-content-between align-items-end">
            <div>
                <h2 class="display-6 fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Course Directory</h2>
                <p class="sl-text-muted fs-5 mb-0" data-sl-edit="text">Browse our complete alphabetical list of offerings.</p>
            </div>
            
            <!-- Desktop Table Headers (Hidden on Mobile) -->
            <div class="d-none d-lg-flex sl-text-muted small fw-bold text-uppercase tracking-wide" style="width: 50%;">
                <div class="col-4 px-3" data-sl-edit="text">Instructor</div>
                <div class="col-3 px-3" data-sl-edit="text">Level</div>
                <div class="col-3 px-3" data-sl-edit="text">Duration</div>
                <div class="col-2 px-3 text-end" data-sl-edit="text">Action</div>
            </div>
        </header>

        <div class="sl-list-container d-flex flex-column gap-3">
            
            <!-- List Item 1 -->
            <div class="sl-list-row p-4 rounded-4 sl-bg-card sl-border d-flex flex-column flex-lg-row align-items-lg-center gap-4 transition-all hover-shadow">
                <!-- Course Info -->
                <div class="d-flex align-items-center gap-3" style="flex: 1;">
                    <div class="rounded-3 sl-bg-primary-subtle d-flex align-items-center justify-content-center flex-shrink-0" style="width: 48px; height: 48px;">
                        <i class="fa fa-code sl-text-primary fs-4"></i>
                    </div>
                    <div>
                        <h3 class="h5 fw-bold sl-text-emphasis mb-1" data-sl-edit="text">Advanced Algorithms</h3>
                        <div class="small sl-text-muted d-lg-none">Dr. Smith &middot; Adv. &middot; 12 Wks</div>
                    </div>
                </div>
                
                <!-- Desktop Meta Data -->
                <div class="d-none d-lg-flex align-items-center" style="width: 50%;">
                    <div class="col-4 px-3 d-flex align-items-center gap-2">
                        <div class="rounded-circle sl-bg-main border sl-border flex-shrink-0" style="width: 24px; height: 24px;"></div>
                        <span class="small sl-text-emphasis fw-bold" data-sl-edit="text">Dr. Smith</span>
                    </div>
                    <div class="col-3 px-3">
                        <span class="badge sl-bg-main sl-border sl-text-muted rounded-pill" data-sl-edit="text">Advanced</span>
                    </div>
                    <div class="col-3 px-3 small sl-text-muted fw-bold" data-sl-edit="text">
                        <i class="fa fa-clock-o me-1"></i> 12 Weeks
                    </div>
                    <div class="col-2 px-3 text-end">
                        <a href="#" class="btn btn-sm btn-outline-dark rounded-pill px-3 fw-bold sl-focus-ring">View</a>
                    </div>
                </div>
                <!-- Mobile CTA -->
                <div class="d-lg-none mt-2">
                    <a href="#" class="btn btn-sm btn-outline-dark w-100 rounded-pill fw-bold sl-focus-ring">View Course</a>
                </div>
            </div>

            <!-- List Item 2 -->
            <div class="sl-list-row p-4 rounded-4 sl-bg-card sl-border d-flex flex-column flex-lg-row align-items-lg-center gap-4 transition-all hover-shadow">
                <div class="d-flex align-items-center gap-3" style="flex: 1;">
                    <div class="rounded-3 sl-bg-primary-subtle d-flex align-items-center justify-content-center flex-shrink-0" style="width: 48px; height: 48px;">
                        <i class="fa fa-briefcase sl-text-primary fs-4"></i>
                    </div>
                    <div>
                        <h3 class="h5 fw-bold sl-text-emphasis mb-1" data-sl-edit="text">Business Ethics & Law</h3>
                        <div class="small sl-text-muted d-lg-none">J. Doe &middot; Beg. &middot; 4 Wks</div>
                    </div>
                </div>
                
                <div class="d-none d-lg-flex align-items-center" style="width: 50%;">
                    <div class="col-4 px-3 d-flex align-items-center gap-2">
                        <div class="rounded-circle sl-bg-main border sl-border flex-shrink-0" style="width: 24px; height: 24px;"></div>
                        <span class="small sl-text-emphasis fw-bold" data-sl-edit="text">J. Doe</span>
                    </div>
                    <div class="col-3 px-3">
                        <span class="badge sl-bg-main sl-border sl-text-muted rounded-pill" data-sl-edit="text">Beginner</span>
                    </div>
                    <div class="col-3 px-3 small sl-text-muted fw-bold" data-sl-edit="text">
                        <i class="fa fa-clock-o me-1"></i> 4 Weeks
                    </div>
                    <div class="col-2 px-3 text-end">
                        <a href="#" class="btn btn-sm btn-outline-dark rounded-pill px-3 fw-bold sl-focus-ring">View</a>
                    </div>
                </div>
                <div class="d-lg-none mt-2">
                    <a href="#" class="btn btn-sm btn-outline-dark w-100 rounded-pill fw-bold sl-focus-ring">View Course</a>
                </div>
            </div>
            
            <!-- List Item 3 -->
            <div class="sl-list-row p-4 rounded-4 sl-bg-card sl-border d-flex flex-column flex-lg-row align-items-lg-center gap-4 transition-all hover-shadow">
                <div class="d-flex align-items-center gap-3" style="flex: 1;">
                    <div class="rounded-3 sl-bg-primary-subtle d-flex align-items-center justify-content-center flex-shrink-0" style="width: 48px; height: 48px;">
                        <i class="fa fa-paint-brush sl-text-primary fs-4"></i>
                    </div>
                    <div>
                        <h3 class="h5 fw-bold sl-text-emphasis mb-1" data-sl-edit="text">Color Theory in UI</h3>
                        <div class="small sl-text-muted d-lg-none">E. Rostova &middot; Int. &middot; 6 Wks</div>
                    </div>
                </div>
                
                <div class="d-none d-lg-flex align-items-center" style="width: 50%;">
                    <div class="col-4 px-3 d-flex align-items-center gap-2">
                        <div class="rounded-circle sl-bg-main border sl-border flex-shrink-0" style="width: 24px; height: 24px;"></div>
                        <span class="small sl-text-emphasis fw-bold" data-sl-edit="text">E. Rostova</span>
                    </div>
                    <div class="col-3 px-3">
                        <span class="badge sl-bg-main sl-border sl-text-muted rounded-pill" data-sl-edit="text">Intermediate</span>
                    </div>
                    <div class="col-3 px-3 small sl-text-muted fw-bold" data-sl-edit="text">
                        <i class="fa fa-clock-o me-1"></i> 6 Weeks
                    </div>
                    <div class="col-2 px-3 text-end">
                        <a href="#" class="btn btn-sm btn-outline-dark rounded-pill px-3 fw-bold sl-focus-ring">View</a>
                    </div>
                </div>
                <div class="d-lg-none mt-2">
                    <a href="#" class="btn btn-sm btn-outline-dark w-100 rounded-pill fw-bold sl-focus-ring">View Course</a>
                </div>
            </div>

        </div>
        
        <div class="text-center mt-5">
            <button class="btn btn-link text-decoration-none sl-text-primary fw-bold sl-focus-ring">Load More Courses...</button>
        </div>
        
    </div>
</section>`,
        css: baseCss + `
.sl-course-list .py-lg-6 { padding-top: 6rem; padding-bottom: 6rem; }
.sl-course-list .tracking-wide { letter-spacing: 0.1em; }
.sl-course-list .transition-all { transition: all 0.2s ease; }

@media (hover: hover) and (prefers-reduced-motion: no-preference) {
    .sl-course-list .hover-shadow:hover {
        transform: translateX(5px);
        box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.05);
        border-color: var(--smartlearn-primary) !important;
    }
}
`,
        js: `(function() { const root = document.querySelector('.sl-course-list'); if (!root) return; })();`
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
console.log('Successfully generated Courses Sections 1-5 and updated catalog.json');
