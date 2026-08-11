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
    // 6. Continue Learning (Logged-In State)
    // -----------------------------------------------------------------------------
    {
        id: 'course-continue-learning',
        meta: {
            name: 'Continue Learning',
            category: 'Courses & Categories',
            variant: 'Dashboard',
            description: 'A personalized dashboard-style section showing the student’s current progress and recently accessed materials.',
            tags: ['courses', 'dashboard', 'progress', 'logged-in', 'continue'],
            image_count: 2
        },
        html: `<!-- sl-section: course-continue-learning | v1.0 -->
<section class="sl-continue-learning py-5 py-lg-6 sl-bg-main">
    <div class="container">
        
        <header class="mb-5 d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3">
            <div>
                <h2 class="display-6 fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Welcome back, Sarah!</h2>
                <p class="sl-text-muted fs-5 mb-0" data-sl-edit="text">You're making great progress. Pick up where you left off.</p>
            </div>
            <a href="#" class="btn btn-outline-dark sl-text-emphasis sl-border rounded-pill px-4 fw-bold sl-focus-ring">My Dashboard</a>
        </header>

        <div class="row g-4">
            
            <!-- Main Progress Card -->
            <div class="col-lg-8">
                <div class="card h-100 border-0 sl-bg-card sl-border rounded-4 overflow-hidden shadow-sm d-flex flex-column flex-md-row">
                    <!-- Image -->
                    <div class="col-md-5 position-relative" style="min-height: 200px;">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://picsum.photos/seed/slcont1/600/600" alt="Course" class="w-100 h-100 object-fit-cover position-absolute z-1" loading="lazy">
                        <!-- Resume Play Icon overlay -->
                        <div class="position-absolute top-50 start-50 translate-middle z-2 bg-white rounded-circle d-flex align-items-center justify-content-center shadow" style="width: 60px; height: 60px;">
                            <i class="fa fa-play sl-text-primary fs-4 ms-1"></i>
                        </div>
                    </div>
                    
                    <!-- Content & Progress -->
                    <div class="col-md-7 p-4 p-md-5 d-flex flex-column justify-content-center">
                        <div class="small fw-bold text-uppercase sl-text-primary tracking-wide mb-2" data-sl-edit="text">In Progress</div>
                        <h3 class="h4 fw-bold sl-text-emphasis mb-1" data-sl-edit="text">Python for Data Analysis</h3>
                        <p class="sl-text-muted small mb-4" data-sl-edit="text">Next lesson: Module 4 - Pandas DataFrames</p>
                        
                        <!-- Progress Bar -->
                        <div class="mb-4">
                            <div class="d-flex justify-content-between mb-2 small fw-bold">
                                <span class="sl-text-emphasis">72% Complete</span>
                                <span class="sl-text-muted">18 / 25 Lessons</span>
                            </div>
                            <div class="progress rounded-pill bg-light" style="height: 8px;">
                                <div class="progress-bar rounded-pill sl-bg-primary" role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        
                        <a href="#" class="btn sl-bg-primary text-white rounded-pill px-4 py-2 fw-bold align-self-start sl-focus-ring" data-sl-edit="link">Continue Course</a>
                    </div>
                </div>
            </div>

            <!-- Side column: Next up / Recent -->
            <div class="col-lg-4">
                <div class="card h-100 border-0 sl-bg-card sl-border rounded-4 p-4 shadow-sm">
                    <h4 class="h6 fw-bold sl-text-emphasis mb-4 text-uppercase tracking-wide" data-sl-edit="text">Recently Accessed</h4>
                    
                    <!-- Item 1 -->
                    <a href="#" class="d-flex gap-3 mb-4 text-decoration-none sl-focus-ring sl-hover-row rounded-3 p-2 transition-all">
                        <div class="rounded-3 overflow-hidden flex-shrink-0" style="width: 60px; height: 60px;">
                            <img src="https://picsum.photos/seed/slcont2/100/100" class="w-100 h-100 object-fit-cover" alt="Course" loading="lazy">
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                            <h5 class="h6 fw-bold sl-text-emphasis mb-1 lh-sm" data-sl-edit="text">Statistics 101</h5>
                            <span class="small sl-text-muted fw-bold">14% Complete</span>
                        </div>
                    </a>

                    <!-- Item 2 -->
                    <a href="#" class="d-flex gap-3 mb-4 text-decoration-none sl-focus-ring sl-hover-row rounded-3 p-2 transition-all">
                        <div class="rounded-3 sl-bg-primary-subtle d-flex align-items-center justify-content-center flex-shrink-0" style="width: 60px; height: 60px;">
                            <i class="fa fa-certificate sl-text-primary fs-4"></i>
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                            <h5 class="h6 fw-bold sl-text-emphasis mb-1 lh-sm" data-sl-edit="text">Data Visualization cert</h5>
                            <span class="small sl-text-muted fw-bold">Passed</span>
                        </div>
                    </a>

                    <div class="mt-auto">
                        <a href="#" class="btn btn-outline-dark w-100 rounded-pill fw-bold sl-border sl-text-emphasis sl-focus-ring">View All Activity</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>`,
        css: baseCss + `
.sl-continue-learning .py-lg-6 { padding-top: 6rem; padding-bottom: 6rem; }
.sl-continue-learning .tracking-wide { letter-spacing: 0.1em; }
.sl-continue-learning .transition-all { transition: all 0.2s ease; }
@media (hover: hover) {
    .sl-continue-learning .sl-hover-row:hover { background-color: var(--smartlearn-bg); }
}
`,
        js: `(function() { const root = document.querySelector('.sl-continue-learning'); if (!root) return; })();`
    },

    // -----------------------------------------------------------------------------
    // 7. Learning Paths / Programs
    // -----------------------------------------------------------------------------
    {
        id: 'course-learning-paths',
        meta: {
            name: 'Learning Paths / Programs',
            category: 'Courses & Categories',
            variant: 'Path',
            description: 'Showcases multi-course structures displaying a connected journey rather than isolated courses.',
            tags: ['courses', 'programs', 'learning path', 'journey', 'timeline'],
            image_count: 0
        },
        html: `<!-- sl-section: course-learning-paths | v1.0 -->
<section class="sl-learning-paths py-5 py-lg-6 sl-bg-main">
    <div class="container">
        
        <header class="text-center mb-5 mx-auto" style="max-width: 700px;">
            <div class="badge sl-bg-primary-subtle sl-text-primary px-3 py-2 rounded-pill fw-bold mb-3 tracking-wide text-uppercase" data-sl-edit="text">Specializations</div>
            <h2 class="display-6 fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Career-Ready Learning Paths</h2>
            <p class="sl-text-muted fs-5" data-sl-edit="text">Master a skill from start to finish with our structured multi-course programs.</p>
        </header>

        <div class="row justify-content-center">
            <div class="col-lg-10">
                
                <div class="card border-0 sl-bg-card sl-border rounded-4 p-4 p-md-5 shadow-sm">
                    <!-- Path Header -->
                    <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-start mb-5 pb-4 border-bottom sl-border gap-4">
                        <div>
                            <h3 class="h3 fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Professional Data Analyst</h3>
                            <div class="d-flex flex-wrap gap-3 small fw-bold sl-text-muted">
                                <span class="d-flex align-items-center gap-2"><i class="fa fa-book sl-text-primary fs-5"></i> 4 Courses</span>
                                <span class="d-flex align-items-center gap-2"><i class="fa fa-clock-o sl-text-primary fs-5"></i> 16 Weeks</span>
                                <span class="d-flex align-items-center gap-2"><i class="fa fa-certificate sl-text-primary fs-5"></i> Certificate Included</span>
                            </div>
                        </div>
                        <a href="#" class="btn sl-bg-primary text-white rounded-pill px-4 py-2 fw-bold flex-shrink-0 sl-focus-ring" data-sl-edit="link">Enroll in Program</a>
                    </div>

                    <!-- Path Timeline -->
                    <div class="sl-timeline position-relative">
                        <!-- Vertical connecting line (desktop) -->
                        <div class="position-absolute sl-bg-main d-none d-md-block border-start sl-border" style="left: 24px; top: 24px; bottom: 24px; width: 1px;"></div>
                        
                        <!-- Step 1 -->
                        <div class="d-flex flex-column flex-md-row gap-4 mb-4 position-relative z-1">
                            <div class="rounded-circle sl-bg-primary text-white d-flex align-items-center justify-content-center fw-bold shadow-sm flex-shrink-0" style="width: 48px; height: 48px; border: 4px solid var(--smartlearn-card-bg);">1</div>
                            <div class="flex-grow-1 p-4 rounded-4 sl-bg-main sl-border">
                                <h4 class="h5 fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Python Fundamentals</h4>
                                <p class="sl-text-muted small mb-0" data-sl-edit="text">Learn the basics of programming, variables, and data structures.</p>
                            </div>
                        </div>

                        <!-- Step 2 -->
                        <div class="d-flex flex-column flex-md-row gap-4 mb-4 position-relative z-1">
                            <div class="rounded-circle sl-bg-main sl-text-emphasis border sl-border d-flex align-items-center justify-content-center fw-bold flex-shrink-0" style="width: 48px; height: 48px; border: 4px solid var(--smartlearn-card-bg);">2</div>
                            <div class="flex-grow-1 p-4 rounded-4 sl-bg-main sl-border">
                                <h4 class="h5 fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Statistics for Data Science</h4>
                                <p class="sl-text-muted small mb-0" data-sl-edit="text">Probability, hypothesis testing, and statistical significance.</p>
                            </div>
                        </div>

                        <!-- Step 3 -->
                        <div class="d-flex flex-column flex-md-row gap-4 mb-4 position-relative z-1">
                            <div class="rounded-circle sl-bg-main sl-text-emphasis border sl-border d-flex align-items-center justify-content-center fw-bold flex-shrink-0" style="width: 48px; height: 48px; border: 4px solid var(--smartlearn-card-bg);">3</div>
                            <div class="flex-grow-1 p-4 rounded-4 sl-bg-main sl-border">
                                <h4 class="h5 fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Data Visualization</h4>
                                <p class="sl-text-muted small mb-0" data-sl-edit="text">Matplotlib, Seaborn, and creating compelling data narratives.</p>
                            </div>
                        </div>

                        <!-- Step 4 -->
                        <div class="d-flex flex-column flex-md-row gap-4 position-relative z-1">
                            <div class="rounded-circle sl-bg-main sl-text-emphasis border sl-border d-flex align-items-center justify-content-center fw-bold flex-shrink-0" style="width: 48px; height: 48px; border: 4px solid var(--smartlearn-card-bg);">4</div>
                            <div class="flex-grow-1 p-4 rounded-4 sl-bg-main sl-border">
                                <h4 class="h5 fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Machine Learning Basics</h4>
                                <p class="sl-text-muted small mb-0" data-sl-edit="text">Linear regression, classification, and model evaluation.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="text-center mt-5">
                    <button class="btn btn-outline-dark sl-text-emphasis sl-border rounded-pill px-4 fw-bold sl-focus-ring">View All 12 Learning Paths</button>
                </div>

            </div>
        </div>
    </div>
</section>`,
        css: baseCss + `
.sl-learning-paths .py-lg-6 { padding-top: 6rem; padding-bottom: 6rem; }
.sl-learning-paths .tracking-wide { letter-spacing: 0.1em; }
`,
        js: `(function() { const root = document.querySelector('.sl-learning-paths'); if (!root) return; })();`
    },

    // -----------------------------------------------------------------------------
    // 8. The Visual Category Explorer
    // -----------------------------------------------------------------------------
    {
        id: 'category-visual-explorer',
        meta: {
            name: 'Visual Category Explorer',
            category: 'Courses & Categories',
            variant: 'Grid',
            description: 'A sleek grid of rich category cards featuring subtle image backgrounds and glassmorphism.',
            tags: ['categories', 'grid', 'visual', 'glassmorphism'],
            image_count: 4
        },
        html: `<!-- sl-section: category-visual-explorer | v1.0 -->
<section class="sl-category-visual py-5 py-lg-6 sl-bg-main">
    <div class="container">
        
        <header class="text-center mb-5">
            <h2 class="display-6 fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Browse Top Categories</h2>
            <p class="sl-text-muted fs-5" data-sl-edit="text">Discover programs across various disciplines.</p>
        </header>

        <div class="row g-4">
            
            <!-- Category 1 -->
            <div class="col-md-6 col-lg-3">
                <a href="#" class="card h-100 border-0 rounded-4 overflow-hidden text-decoration-none sl-hover-card sl-focus-ring position-relative" style="min-height: 280px;">
                    <div class="position-absolute top-0 start-0 w-100 h-100 z-0">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://picsum.photos/seed/slcat1/400/500" alt="Tech" class="w-100 h-100 object-fit-cover position-relative z-1 sl-hover-zoom" loading="lazy">
                        <div class="position-absolute top-0 start-0 w-100 h-100 z-2" style="background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1));"></div>
                    </div>
                    
                    <div class="card-body p-4 d-flex flex-column justify-content-end position-relative z-3">
                        <h3 class="h4 fw-bold text-white mb-2" data-sl-edit="text">Technology</h3>
                        <p class="text-white opacity-75 small mb-3" data-sl-edit="text">AI &middot; Programming &middot; Cyber</p>
                        <div class="mt-auto d-flex align-items-center justify-content-between">
                            <span class="badge bg-white text-dark rounded-pill fw-bold" data-sl-edit="text">128 Courses</span>
                            <div class="rounded-circle bg-white bg-opacity-25 text-white d-flex align-items-center justify-content-center" style="width: 36px; height: 36px; backdrop-filter: blur(4px);">
                                <i class="fa fa-arrow-right small"></i>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <!-- Category 2 -->
            <div class="col-md-6 col-lg-3">
                <a href="#" class="card h-100 border-0 rounded-4 overflow-hidden text-decoration-none sl-hover-card sl-focus-ring position-relative" style="min-height: 280px;">
                    <div class="position-absolute top-0 start-0 w-100 h-100 z-0">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://picsum.photos/seed/slcat2/400/500" alt="Business" class="w-100 h-100 object-fit-cover position-relative z-1 sl-hover-zoom" loading="lazy">
                        <div class="position-absolute top-0 start-0 w-100 h-100 z-2" style="background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1));"></div>
                    </div>
                    
                    <div class="card-body p-4 d-flex flex-column justify-content-end position-relative z-3">
                        <h3 class="h4 fw-bold text-white mb-2" data-sl-edit="text">Business</h3>
                        <p class="text-white opacity-75 small mb-3" data-sl-edit="text">Finance &middot; Management &middot; HR</p>
                        <div class="mt-auto d-flex align-items-center justify-content-between">
                            <span class="badge bg-white text-dark rounded-pill fw-bold" data-sl-edit="text">84 Courses</span>
                            <div class="rounded-circle bg-white bg-opacity-25 text-white d-flex align-items-center justify-content-center" style="width: 36px; height: 36px; backdrop-filter: blur(4px);">
                                <i class="fa fa-arrow-right small"></i>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <!-- Category 3 -->
            <div class="col-md-6 col-lg-3">
                <a href="#" class="card h-100 border-0 rounded-4 overflow-hidden text-decoration-none sl-hover-card sl-focus-ring position-relative" style="min-height: 280px;">
                    <div class="position-absolute top-0 start-0 w-100 h-100 z-0">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://picsum.photos/seed/slcat3/400/500" alt="Design" class="w-100 h-100 object-fit-cover position-relative z-1 sl-hover-zoom" loading="lazy">
                        <div class="position-absolute top-0 start-0 w-100 h-100 z-2" style="background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1));"></div>
                    </div>
                    
                    <div class="card-body p-4 d-flex flex-column justify-content-end position-relative z-3">
                        <h3 class="h4 fw-bold text-white mb-2" data-sl-edit="text">Design</h3>
                        <p class="text-white opacity-75 small mb-3" data-sl-edit="text">UI/UX &middot; Graphic &middot; Motion</p>
                        <div class="mt-auto d-flex align-items-center justify-content-between">
                            <span class="badge bg-white text-dark rounded-pill fw-bold" data-sl-edit="text">42 Courses</span>
                            <div class="rounded-circle bg-white bg-opacity-25 text-white d-flex align-items-center justify-content-center" style="width: 36px; height: 36px; backdrop-filter: blur(4px);">
                                <i class="fa fa-arrow-right small"></i>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <!-- Category 4 -->
            <div class="col-md-6 col-lg-3">
                <a href="#" class="card h-100 border-0 rounded-4 overflow-hidden text-decoration-none sl-hover-card sl-focus-ring position-relative" style="min-height: 280px;">
                    <div class="position-absolute top-0 start-0 w-100 h-100 z-0">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://picsum.photos/seed/slcat4/400/500" alt="Science" class="w-100 h-100 object-fit-cover position-relative z-1 sl-hover-zoom" loading="lazy">
                        <div class="position-absolute top-0 start-0 w-100 h-100 z-2" style="background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1));"></div>
                    </div>
                    
                    <div class="card-body p-4 d-flex flex-column justify-content-end position-relative z-3">
                        <h3 class="h4 fw-bold text-white mb-2" data-sl-edit="text">Science</h3>
                        <p class="text-white opacity-75 small mb-3" data-sl-edit="text">Physics &middot; Biology &middot; Chemistry</p>
                        <div class="mt-auto d-flex align-items-center justify-content-between">
                            <span class="badge bg-white text-dark rounded-pill fw-bold" data-sl-edit="text">65 Courses</span>
                            <div class="rounded-circle bg-white bg-opacity-25 text-white d-flex align-items-center justify-content-center" style="width: 36px; height: 36px; backdrop-filter: blur(4px);">
                                <i class="fa fa-arrow-right small"></i>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

        </div>
    </div>
</section>`,
        css: baseCss + `
.sl-category-visual .py-lg-6 { padding-top: 6rem; padding-bottom: 6rem; }
`,
        js: `(function() { const root = document.querySelector('.sl-category-visual'); if (!root) return; })();`
    },

    // -----------------------------------------------------------------------------
    // 9. The Category Split-Story
    // -----------------------------------------------------------------------------
    {
        id: 'category-split-story',
        meta: {
            name: 'Category Split-Story',
            category: 'Courses & Categories',
            variant: 'Split Interactive',
            description: 'A large, sticky image on the left. On the right, a vertical list of categories. Hovering or clicking a category dynamically updates the image and details.',
            tags: ['categories', 'interactive', 'split', 'story', 'hover'],
            image_count: 4 // Note: The script handles the initial image. Interactive images handled via JS data attributes for demo.
        },
        html: `<!-- sl-section: category-split-story | v1.0 -->
<section class="sl-category-story py-5 py-lg-6 sl-bg-main position-relative">
    <div class="container">
        
        <!-- Mobile/Tablet Layout (Accordion) -->
        <div class="d-lg-none">
            <h2 class="display-6 fw-bold sl-text-emphasis mb-5 text-center" data-sl-edit="text">What will you learn?</h2>
            
            <div class="accordion accordion-flush sl-category-accordion border sl-border rounded-4 overflow-hidden sl-bg-card" id="slCategoryAccordion">
                
                <!-- Acc 1 -->
                <div class="accordion-item bg-transparent border-bottom sl-border">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed sl-bg-card sl-text-emphasis fw-bold fs-5 py-4 sl-focus-ring shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#slAcc1" aria-expanded="false" aria-controls="slAcc1">
                            Technology
                        </button>
                    </h2>
                    <div id="slAcc1" class="accordion-collapse collapse" data-bs-parent="#slCategoryAccordion">
                        <div class="accordion-body p-4">
                            <img src="https://picsum.photos/seed/slstory1/600/400" alt="Tech" class="w-100 rounded-3 mb-3 object-fit-cover" style="height: 200px;" loading="lazy">
                            <p class="sl-text-muted mb-4">Explore programming, AI, cybersecurity and data science.</p>
                            <a href="#" class="btn btn-outline-dark sl-text-emphasis sl-border rounded-pill px-4 fw-bold w-100">Explore 128 Courses</a>
                        </div>
                    </div>
                </div>

                <!-- Acc 2 -->
                <div class="accordion-item bg-transparent border-bottom sl-border">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed sl-bg-card sl-text-emphasis fw-bold fs-5 py-4 sl-focus-ring shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#slAcc2" aria-expanded="false" aria-controls="slAcc2">
                            Business
                        </button>
                    </h2>
                    <div id="slAcc2" class="accordion-collapse collapse" data-bs-parent="#slCategoryAccordion">
                        <div class="accordion-body p-4">
                            <img src="https://picsum.photos/seed/slstory2/600/400" alt="Business" class="w-100 rounded-3 mb-3 object-fit-cover" style="height: 200px;" loading="lazy">
                            <p class="sl-text-muted mb-4">Master finance, team management, and corporate strategy.</p>
                            <a href="#" class="btn btn-outline-dark sl-text-emphasis sl-border rounded-pill px-4 fw-bold w-100">Explore 84 Courses</a>
                        </div>
                    </div>
                </div>

                <!-- Acc 3 -->
                <div class="accordion-item bg-transparent">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed sl-bg-card sl-text-emphasis fw-bold fs-5 py-4 sl-focus-ring shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#slAcc3" aria-expanded="false" aria-controls="slAcc3">
                            Design
                        </button>
                    </h2>
                    <div id="slAcc3" class="accordion-collapse collapse" data-bs-parent="#slCategoryAccordion">
                        <div class="accordion-body p-4">
                            <img src="https://picsum.photos/seed/slstory3/600/400" alt="Design" class="w-100 rounded-3 mb-3 object-fit-cover" style="height: 200px;" loading="lazy">
                            <p class="sl-text-muted mb-4">Create stunning interfaces, brand identities, and user experiences.</p>
                            <a href="#" class="btn btn-outline-dark sl-text-emphasis sl-border rounded-pill px-4 fw-bold w-100">Explore 42 Courses</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- Desktop Layout (Split Interactive) -->
        <div class="d-none d-lg-flex row g-5 align-items-start">
            
            <!-- Left: Sticky Image Area -->
            <div class="col-lg-6 position-sticky" style="top: 100px;">
                <div class="rounded-4 overflow-hidden position-relative shadow-sm sl-border" style="height: 600px; border: 1px solid var(--smartlearn-card-border);">
                    <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                    <!-- The active image -->
                    <img id="slStoryImage" src="https://picsum.photos/seed/slstory1/800/800" alt="Category Image" class="w-100 h-100 object-fit-cover position-relative z-1 sl-fade-transition" loading="lazy">
                </div>
            </div>

            <!-- Right: Interactive List -->
            <div class="col-lg-6 py-4">
                <h2 class="display-5 fw-bold sl-text-emphasis mb-5 pb-3 border-bottom sl-border" data-sl-edit="text">What will you learn?</h2>
                
                <div class="sl-story-list d-flex flex-column gap-2">
                    
                    <!-- Item 1 -->
                    <div class="sl-story-item p-4 rounded-4 cursor-pointer sl-bg-card border sl-border active transition-all" 
                         data-image="https://picsum.photos/seed/slstory1/800/800" tabindex="0" role="button">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h3 class="h3 fw-bold sl-text-emphasis mb-0">Technology</h3>
                            <span class="badge sl-bg-primary-subtle sl-text-primary rounded-pill fw-bold">128 Courses</span>
                        </div>
                        <p class="sl-text-muted mb-4 fs-5 sl-story-desc">Explore programming, AI, cybersecurity and data science.</p>
                        <a href="#" class="btn sl-bg-primary text-white rounded-pill px-4 py-2 fw-bold sl-focus-ring sl-story-btn">Explore Category</a>
                    </div>

                    <!-- Item 2 -->
                    <div class="sl-story-item p-4 rounded-4 cursor-pointer bg-transparent border border-transparent transition-all" 
                         data-image="https://picsum.photos/seed/slstory2/800/800" tabindex="0" role="button">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h3 class="h3 fw-bold sl-text-emphasis mb-0 opacity-75 sl-story-title">Business</h3>
                            <span class="badge sl-bg-main sl-border sl-text-muted rounded-pill fw-bold opacity-75 sl-story-badge">84 Courses</span>
                        </div>
                        <!-- Hidden initially -->
                        <p class="sl-text-muted mb-4 fs-5 sl-story-desc d-none">Master finance, team management, and corporate strategy.</p>
                        <a href="#" class="btn sl-bg-primary text-white rounded-pill px-4 py-2 fw-bold sl-focus-ring sl-story-btn d-none">Explore Category</a>
                    </div>

                    <!-- Item 3 -->
                    <div class="sl-story-item p-4 rounded-4 cursor-pointer bg-transparent border border-transparent transition-all" 
                         data-image="https://picsum.photos/seed/slstory3/800/800" tabindex="0" role="button">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h3 class="h3 fw-bold sl-text-emphasis mb-0 opacity-75 sl-story-title">Design</h3>
                            <span class="badge sl-bg-main sl-border sl-text-muted rounded-pill fw-bold opacity-75 sl-story-badge">42 Courses</span>
                        </div>
                        <p class="sl-text-muted mb-4 fs-5 sl-story-desc d-none">Create stunning interfaces, brand identities, and user experiences.</p>
                        <a href="#" class="btn sl-bg-primary text-white rounded-pill px-4 py-2 fw-bold sl-focus-ring sl-story-btn d-none">Explore Category</a>
                    </div>

                </div>
            </div>

        </div>
    </div>
</section>`,
        css: baseCss + `
.sl-category-story .py-lg-6 { padding-top: 6rem; padding-bottom: 6rem; }
.sl-category-story .cursor-pointer { cursor: pointer; }
.sl-category-story .transition-all { transition: all 0.3s ease; }
.sl-category-story .border-transparent { border-color: transparent !important; }

/* Image Fade Transition */
.sl-category-story .sl-fade-transition {
    transition: opacity 0.4s ease;
}

/* Accordion overrides for mobile */
.sl-category-accordion .accordion-button:not(.collapsed) {
    background-color: var(--smartlearn-card-bg);
    color: var(--smartlearn-primary);
    box-shadow: inset 0 -1px 0 var(--smartlearn-card-border);
}
.sl-category-accordion .accordion-button::after {
    filter: invert(0.5); /* Basic fix for dark/light generic icon */
}
`,
        js: `(function() {
    const section = document.querySelector('.sl-category-story');
    if (!section) return;

    const items = section.querySelectorAll('.sl-story-item');
    const imageEl = section.querySelector('#slStoryImage');

    if (!items.length || !imageEl) return;

    items.forEach(item => {
        // Handle both click and mouseenter (hover) for desktop
        const activateItem = () => {
            if (item.classList.contains('active')) return;

            // Deactivate all
            items.forEach(i => {
                i.classList.remove('active', 'sl-bg-card', 'border', 'sl-border');
                i.classList.add('bg-transparent', 'border-transparent');
                
                // Hide details
                const desc = i.querySelector('.sl-story-desc');
                const btn = i.querySelector('.sl-story-btn');
                const title = i.querySelector('.sl-story-title');
                const badge = i.querySelector('.sl-story-badge');

                if(desc) desc.classList.add('d-none');
                if(btn) btn.classList.add('d-none');
                if(title) title.classList.add('opacity-75');
                
                if(badge) {
                    badge.classList.remove('sl-bg-primary-subtle', 'sl-text-primary');
                    badge.classList.add('sl-bg-main', 'sl-border', 'sl-text-muted', 'opacity-75');
                }
            });

            // Activate target
            item.classList.add('active', 'sl-bg-card', 'border', 'sl-border');
            item.classList.remove('bg-transparent', 'border-transparent');
            
            // Show details
            const desc = item.querySelector('.sl-story-desc');
            const btn = item.querySelector('.sl-story-btn');
            const title = item.querySelector('.sl-story-title');
            const badge = item.querySelector('.sl-story-badge');

            if(desc) desc.classList.remove('d-none');
            if(btn) btn.classList.remove('d-none');
            if(title) title.classList.remove('opacity-75');
            
            if(badge) {
                badge.classList.add('sl-bg-primary-subtle', 'sl-text-primary');
                badge.classList.remove('sl-bg-main', 'sl-border', 'sl-text-muted', 'opacity-75');
            }

            // Update Image with Fade
            const newSrc = item.getAttribute('data-image');
            if (newSrc && imageEl.src !== newSrc) {
                imageEl.style.opacity = '0.4';
                setTimeout(() => {
                    imageEl.src = newSrc;
                    imageEl.onload = () => { imageEl.style.opacity = '1'; };
                }, 200);
            }
        };

        item.addEventListener('mouseenter', activateItem);
        item.addEventListener('click', activateItem);
        item.addEventListener('keydown', (e) => {
            if(e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                activateItem();
            }
        });
    });
})();`
    },

    // -----------------------------------------------------------------------------
    // 10. Typography Category Explorer
    // -----------------------------------------------------------------------------
    {
        id: 'category-typography',
        meta: {
            name: 'Typography Explorer',
            category: 'Courses & Categories',
            variant: 'Editorial',
            description: 'A purely text-driven editorial layout featuring massive, bold numbered category names with hover reveals.',
            tags: ['categories', 'typography', 'editorial', 'minimal'],
            image_count: 5
        },
        html: `<!-- sl-section: category-typography | v1.0 -->
<section class="sl-category-typo py-5 py-lg-6 sl-bg-main position-relative overflow-hidden">
    <div class="container position-relative z-1">
        
        <header class="mb-5 border-bottom sl-border pb-4">
            <h2 class="h5 fw-bold sl-text-primary text-uppercase tracking-wide" data-sl-edit="text">Curriculum Directory</h2>
        </header>

        <div class="sl-typo-list d-flex flex-column">
            
            <!-- Item 1 -->
            <a href="#" class="sl-typo-item text-decoration-none py-4 border-bottom sl-border d-flex align-items-center justify-content-between position-relative sl-focus-ring" data-image="https://picsum.photos/seed/sltypo1/600/400">
                <div class="d-flex align-items-baseline gap-3 gap-md-5 position-relative z-1">
                    <span class="fs-5 fw-bold sl-text-muted sl-typo-num transition-all">01</span>
                    <h3 class="display-4 fw-bold sl-text-emphasis mb-0 sl-typo-title transition-all">Business</h3>
                </div>
                <div class="d-flex align-items-center gap-4 position-relative z-1">
                    <span class="badge sl-bg-card sl-border sl-text-emphasis rounded-pill fw-bold fs-6 px-3 py-2 d-none d-md-inline-block">84 Courses</span>
                    <i class="fa fa-arrow-right fs-4 sl-text-primary sl-typo-icon transition-all" style="opacity: 0; transform: translateX(-20px);"></i>
                </div>
            </a>

            <!-- Item 2 -->
            <a href="#" class="sl-typo-item text-decoration-none py-4 border-bottom sl-border d-flex align-items-center justify-content-between position-relative sl-focus-ring" data-image="https://picsum.photos/seed/sltypo2/600/400">
                <div class="d-flex align-items-baseline gap-3 gap-md-5 position-relative z-1">
                    <span class="fs-5 fw-bold sl-text-muted sl-typo-num transition-all">02</span>
                    <h3 class="display-4 fw-bold sl-text-emphasis mb-0 sl-typo-title transition-all">Technology</h3>
                </div>
                <div class="d-flex align-items-center gap-4 position-relative z-1">
                    <span class="badge sl-bg-card sl-border sl-text-emphasis rounded-pill fw-bold fs-6 px-3 py-2 d-none d-md-inline-block">128 Courses</span>
                    <i class="fa fa-arrow-right fs-4 sl-text-primary sl-typo-icon transition-all" style="opacity: 0; transform: translateX(-20px);"></i>
                </div>
            </a>

            <!-- Item 3 -->
            <a href="#" class="sl-typo-item text-decoration-none py-4 border-bottom sl-border d-flex align-items-center justify-content-between position-relative sl-focus-ring" data-image="https://picsum.photos/seed/sltypo3/600/400">
                <div class="d-flex align-items-baseline gap-3 gap-md-5 position-relative z-1">
                    <span class="fs-5 fw-bold sl-text-muted sl-typo-num transition-all">03</span>
                    <h3 class="display-4 fw-bold sl-text-emphasis mb-0 sl-typo-title transition-all">Design</h3>
                </div>
                <div class="d-flex align-items-center gap-4 position-relative z-1">
                    <span class="badge sl-bg-card sl-border sl-text-emphasis rounded-pill fw-bold fs-6 px-3 py-2 d-none d-md-inline-block">42 Courses</span>
                    <i class="fa fa-arrow-right fs-4 sl-text-primary sl-typo-icon transition-all" style="opacity: 0; transform: translateX(-20px);"></i>
                </div>
            </a>

            <!-- Item 4 -->
            <a href="#" class="sl-typo-item text-decoration-none py-4 border-bottom sl-border d-flex align-items-center justify-content-between position-relative sl-focus-ring" data-image="https://picsum.photos/seed/sltypo4/600/400">
                <div class="d-flex align-items-baseline gap-3 gap-md-5 position-relative z-1">
                    <span class="fs-5 fw-bold sl-text-muted sl-typo-num transition-all">04</span>
                    <h3 class="display-4 fw-bold sl-text-emphasis mb-0 sl-typo-title transition-all">Languages</h3>
                </div>
                <div class="d-flex align-items-center gap-4 position-relative z-1">
                    <span class="badge sl-bg-card sl-border sl-text-emphasis rounded-pill fw-bold fs-6 px-3 py-2 d-none d-md-inline-block">56 Courses</span>
                    <i class="fa fa-arrow-right fs-4 sl-text-primary sl-typo-icon transition-all" style="opacity: 0; transform: translateX(-20px);"></i>
                </div>
            </a>
            
             <!-- Item 5 -->
            <a href="#" class="sl-typo-item text-decoration-none py-4 border-bottom sl-border d-flex align-items-center justify-content-between position-relative sl-focus-ring" data-image="https://picsum.photos/seed/sltypo5/600/400">
                <div class="d-flex align-items-baseline gap-3 gap-md-5 position-relative z-1">
                    <span class="fs-5 fw-bold sl-text-muted sl-typo-num transition-all">05</span>
                    <h3 class="display-4 fw-bold sl-text-emphasis mb-0 sl-typo-title transition-all">Science</h3>
                </div>
                <div class="d-flex align-items-center gap-4 position-relative z-1">
                    <span class="badge sl-bg-card sl-border sl-text-emphasis rounded-pill fw-bold fs-6 px-3 py-2 d-none d-md-inline-block">34 Courses</span>
                    <i class="fa fa-arrow-right fs-4 sl-text-primary sl-typo-icon transition-all" style="opacity: 0; transform: translateX(-20px);"></i>
                </div>
            </a>

        </div>
    </div>
    
    <!-- Floating Image Preview (JS handled, absolute to body for z-index safety, or absolute to section) -->
    <!-- Positioned within section but spans full width/height to follow cursor -->
    <div id="slTypoHoverPreview" class="position-absolute z-0 pointer-events-none d-none d-lg-block" style="width: 400px; height: 300px; opacity: 0; transition: opacity 0.3s ease, transform 0.1s linear; top: 0; left: 0; transform: translate(-50%, -50%); border-radius: 1rem; overflow: hidden; box-shadow: 0 2rem 4rem rgba(0,0,0,0.2);">
        <img src="" alt="Preview" class="w-100 h-100 object-fit-cover" loading="lazy">
    </div>
</section>`,
        css: baseCss + `
.sl-category-typo .py-lg-6 { padding-top: 6rem; padding-bottom: 6rem; }
.sl-category-typo .tracking-wide { letter-spacing: 0.1em; }
.sl-category-typo .transition-all { transition: all 0.3s ease; }
.sl-category-typo .pointer-events-none { pointer-events: none; }

/* Desktop Hover Effects */
@media (hover: hover) and (min-width: 992px) {
    /* Dim the list when hovering over the container */
    .sl-category-typo .sl-typo-list:hover .sl-typo-title { opacity: 0.3; }
    .sl-category-typo .sl-typo-list:hover .sl-typo-num { opacity: 0.3; }
    
    /* Highlight the specific hovered item */
    .sl-category-typo .sl-typo-item:hover .sl-typo-title { 
        opacity: 1 !important; 
        transform: translateX(20px);
        color: var(--smartlearn-primary) !important;
    }
    .sl-category-typo .sl-typo-item:hover .sl-typo-num { 
        opacity: 1 !important;
        color: var(--smartlearn-primary) !important;
    }
    .sl-category-typo .sl-typo-item:hover .sl-typo-icon {
        opacity: 1 !important;
        transform: translateX(0) !important;
    }
}

/* Mobile specific styling since hover doesn't apply well */
@media (max-width: 991px) {
    .sl-category-typo .sl-typo-icon {
        opacity: 1 !important;
        transform: translateX(0) !important;
    }
}
`,
        js: `(function() {
    const section = document.querySelector('.sl-category-typo');
    if (!section) return;

    // Desktop hover preview logic
    const isDesktop = window.matchMedia('(min-width: 992px)').matches;
    if (!isDesktop) return;

    const items = section.querySelectorAll('.sl-typo-item');
    const previewContainer = section.querySelector('#slTypoHoverPreview');
    const previewImg = previewContainer ? previewContainer.querySelector('img') : null;

    if (!items.length || !previewContainer || !previewImg) return;

    let currentX = 0;
    let currentY = 0;
    let aimX = 0;
    let aimY = 0;
    
    // Smooth follow cursor using RAF
    const animate = () => {
        currentX += (aimX - currentX) * 0.1;
        currentY += (aimY - currentY) * 0.1;
        
        previewContainer.style.transform = \`translate(\${currentX - 200}px, \${currentY - 150}px)\`;
        requestAnimationFrame(animate);
    };
    animate();

    // Track mouse over section
    section.addEventListener('mousemove', (e) => {
        const rect = section.getBoundingClientRect();
        aimX = e.clientX - rect.left;
        aimY = e.clientY - rect.top;
    });

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const imgSrc = item.getAttribute('data-image');
            if (imgSrc) {
                previewImg.src = imgSrc;
                previewContainer.style.opacity = '1';
                previewContainer.style.zIndex = '0'; // Keep behind text
            }
        });

        item.addEventListener('mouseleave', () => {
            previewContainer.style.opacity = '0';
        });
    });
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
console.log('Successfully generated Courses Sections 6-10 and updated catalog.json');
