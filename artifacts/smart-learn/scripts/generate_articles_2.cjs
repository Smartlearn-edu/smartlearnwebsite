const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const sectionsDir = path.join(publicDir, 'sections');
const catalogPath = path.join(publicDir, 'catalog.json');

if (!fs.existsSync(sectionsDir)) {
    fs.mkdirSync(sectionsDir, { recursive: true });
}

// -----------------------------------------------------------------------------
// CORE CSS FOR ARTICLES
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
`;

const sections = [
    // -----------------------------------------------------------------------------
    // 6. Grid Story (Magazine / News)
    // -----------------------------------------------------------------------------
    {
        id: 'article-grid-story',
        meta: {
            name: 'Grid Story',
            category: 'Article',
            variant: 'Magazine',
            description: 'A dynamic masonry-style CSS grid layout for news, case studies, or multi-topic overviews.',
            tags: ['article', 'grid', 'magazine', 'news', 'story'],
            image_count: 3
        },
        html: `<!-- sl-section: article-grid-story | v1.0 -->
<section class="sl-article-grid py-5 py-lg-6 sl-bg-main">
    <div class="container">
        
        <header class="mb-5 text-center mx-auto" style="max-width: 800px;">
            <h2 class="display-5 fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Campus Stories & Innovations</h2>
            <p class="sl-text-muted fs-5 mb-0" data-sl-edit="text">Explore how our students and faculty are pushing the boundaries of what is possible in education and industry.</p>
        </header>

        <!-- CSS Grid Container -->
        <div class="sl-masonry-grid">
            
            <!-- Main Featured Story (Spans 2 columns on tablet/desktop) -->
            <div class="sl-grid-item sl-item-large sl-bg-card rounded-4 overflow-hidden sl-border d-flex flex-column">
                <div class="position-relative" style="height: 350px;">
                    <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Main Story Image" class="w-100 h-100 object-fit-cover position-relative z-1 sl-hover-zoom" loading="lazy">
                    <div class="position-absolute bottom-0 start-0 w-100 p-4 z-2 sl-gradient-overlay-bottom">
                        <span class="badge sl-bg-primary text-white fw-bold mb-2">FEATURED</span>
                        <h3 class="h2 fw-bold text-white mb-0" data-sl-edit="text">The Future of AI in Modern Classrooms</h3>
                    </div>
                </div>
                <div class="p-4 flex-grow-1">
                    <p class="sl-text-muted lh-lg mb-4" data-sl-edit="text">Discover how our latest research initiative is integrating generative AI into the core curriculum, ensuring students are prepared for the jobs of tomorrow.</p>
                    <a href="#" class="fw-bold sl-text-primary text-decoration-none sl-focus-ring" data-sl-edit="link">Read full story <i class="fa fa-arrow-right ms-2"></i></a>
                </div>
            </div>

            <!-- Secondary Story 1 -->
            <div class="sl-grid-item sl-bg-card rounded-4 overflow-hidden sl-border d-flex flex-column">
                <div class="position-relative" style="height: 200px;">
                    <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Story 1 Image" class="w-100 h-100 object-fit-cover position-relative z-1 sl-hover-zoom" loading="lazy">
                </div>
                <div class="p-4 flex-grow-1">
                    <div class="small sl-text-muted fw-bold mb-2">ALUMNI SPOTLIGHT</div>
                    <h4 class="h5 fw-bold sl-text-emphasis mb-3" data-sl-edit="text">From Student to Startup Founder in 12 Months</h4>
                    <a href="#" class="fw-bold sl-text-primary text-decoration-none sl-focus-ring" data-sl-edit="link">Read more <i class="fa fa-arrow-right ms-2"></i></a>
                </div>
            </div>

            <!-- Secondary Story 2 -->
            <div class="sl-grid-item sl-bg-card rounded-4 overflow-hidden sl-border d-flex flex-column">
                <div class="position-relative" style="height: 200px;">
                    <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Story 2 Image" class="w-100 h-100 object-fit-cover position-relative z-1 sl-hover-zoom" loading="lazy">
                </div>
                <div class="p-4 flex-grow-1">
                    <div class="small sl-text-muted fw-bold mb-2">RESEARCH</div>
                    <h4 class="h5 fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Breakthroughs in Sustainable Architecture</h4>
                    <a href="#" class="fw-bold sl-text-primary text-decoration-none sl-focus-ring" data-sl-edit="link">Read more <i class="fa fa-arrow-right ms-2"></i></a>
                </div>
            </div>

            <!-- Text-Only Highlight -->
            <div class="sl-grid-item sl-bg-primary rounded-4 overflow-hidden p-4 d-flex flex-column justify-content-center text-white text-center">
                <i class="fa fa-bullhorn fs-1 mb-3 opacity-75"></i>
                <h4 class="h3 fw-bold mb-3" data-sl-edit="text">Join our upcoming virtual open day.</h4>
                <p class="mb-4 opacity-75" data-sl-edit="text">Experience the campus from anywhere in the world.</p>
                <a href="#" class="btn btn-light rounded-pill fw-bold text-dark w-100 sl-focus-ring" data-sl-edit="link">Register Now</a>
            </div>

        </div>
    </div>
</section>`,
        css: baseCss + `
.sl-article-grid .py-lg-6 { padding-top: 6rem; padding-bottom: 6rem; }

/* CSS Grid Layout */
.sl-masonry-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
}

@media (min-width: 768px) {
    .sl-masonry-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .sl-item-large {
        grid-column: span 2;
    }
}

@media (min-width: 992px) {
    .sl-masonry-grid {
        grid-template-columns: repeat(3, 1fr);
    }
    .sl-item-large {
        grid-column: span 2;
        grid-row: span 2;
    }
}

/* Hover effects and overlays */
.sl-article-grid .sl-hover-zoom {
    transition: transform 0.6s ease;
}
@media (hover: hover) and (prefers-reduced-motion: no-preference) {
    .sl-article-grid .sl-grid-item:hover .sl-hover-zoom {
        transform: scale(1.05);
    }
}

.sl-article-grid .sl-gradient-overlay-bottom {
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
}
`,
        js: `(function() { const root = document.querySelector('.sl-article-grid'); if (!root) return; })();`
    },

    // -----------------------------------------------------------------------------
    // 7. Dual Column Academic
    // -----------------------------------------------------------------------------
    {
        id: 'article-dual-column',
        meta: {
            name: 'Dual Column Academic',
            category: 'Article',
            variant: 'Academic',
            description: 'A classic, authoritative two-column text layout designed for formal university updates or research papers.',
            tags: ['article', 'academic', 'columns', 'research', 'formal'],
            image_count: 0
        },
        html: `<!-- sl-section: article-dual-column | v1.0 -->
<section class="sl-article-academic py-5 py-lg-6 sl-bg-main">
    <div class="container">
        
        <header class="mb-5 pb-4 border-bottom sl-border text-center mx-auto" style="max-width: 900px;">
            <div class="small sl-text-muted text-uppercase tracking-wide fw-bold mb-3" data-sl-edit="text">Department of Computer Science &middot; Published Nov 2026</div>
            <h1 class="display-4 fw-bold sl-text-emphasis mb-4 lh-sm" data-sl-edit="text">An Analysis of Concurrent Data Structures in High-Load Systems</h1>
            <p class="fs-5 sl-text-muted mb-0" data-sl-edit="text">Abstract: This paper examines the latency implications of lock-free versus lock-based queue implementations under sustained, multi-threaded high-frequency loads.</p>
        </header>

        <!-- CSS Columns for text -->
        <div class="sl-academic-columns sl-text-emphasis lh-lg text-justify">
            
            <p class="sl-drop-cap" data-sl-edit="text">Concurrency remains one of the most challenging aspects of modern software engineering. As core counts continue to grow, the overhead of thread synchronization often becomes the primary bottleneck in system performance, overshadowing actual computation time. This phenomenon is particularly acute in systems that must process millions of discrete events per second.</p>
            
            <p data-sl-edit="text">Historically, the standard approach to thread safety involved mutual exclusion locks (mutexes). While simple to reason about, mutexes introduce significant problems: priority inversion, deadlocks, and convoying. The threads wait, the CPU idles, and overall throughput suffers catastrophically under contention.</p>
            
            <h3 class="h5 fw-bold mt-4 mb-3" data-sl-edit="text">The Lock-Free Paradigm</h3>
            <p data-sl-edit="text">In response, the industry has shifted towards lock-free and wait-free algorithms. These structures rely on atomic hardware primitives, such as Compare-And-Swap (CAS), to ensure that at least one thread always makes progress. However, implementing these structures correctly requires a deep understanding of memory ordering and CPU cache coherency protocols.</p>
            
            <!-- Pull Quote within the flow -->
            <blockquote class="sl-pull-quote my-4 p-4 sl-bg-card sl-border rounded-3">
                <p class="fw-bold fst-italic sl-text-primary mb-0" data-sl-edit="text">"The complexity of a lock-free algorithm is often disproportionate to its size. A five-line function may require five weeks of verification."</p>
            </blockquote>

            <p data-sl-edit="text">Our empirical tests demonstrate that while lock-free queues generally outperform their lock-based counterparts, this advantage is highly dependent on the nature of the workload. In scenarios with low contention, a highly optimized spinlock can sometimes offer lower absolute latency due to simpler cache interactions.</p>
            
            <h3 class="h5 fw-bold mt-4 mb-3" data-sl-edit="text">Methodology</h3>
            <p data-sl-edit="text">We constructed a test harness simulating a financial matching engine. Producer threads generated simulated market orders, while consumer threads attempted to execute them. We tested three queue variants: a standard mutex-locked <code>std::queue</code>, a spinlock-protected ring buffer, and a fully lock-free Michael-Scott queue.</p>
            
            <p data-sl-edit="text">The results, detailed in Figure 1, show a clear inflection point. Up to 4 concurrent threads, the spinlock performed admirably. However, as contention increased to 16 and 32 threads, the spinlock implementation degraded sharply due to cache line bouncing (false sharing). The lock-free queue maintained consistent throughput across all thread counts.</p>

        </div>
        
        <!-- Footnotes / References -->
        <div class="mt-5 pt-4 border-top sl-border small sl-text-muted">
            <h4 class="h6 fw-bold mb-3" data-sl-edit="text">References</h4>
            <ol class="ps-3">
                <li class="mb-2" data-sl-edit="text">Michael, M. M., & Scott, M. L. (1996). Simple, fast, and practical non-blocking and blocking concurrent queue algorithms.</li>
                <li class="mb-2" data-sl-edit="text">Herlihy, M., & Shavit, N. (2008). The Art of Multiprocessor Programming.</li>
            </ol>
        </div>

    </div>
</section>`,
        css: baseCss + `
.sl-article-academic .py-lg-6 { padding-top: 6rem; padding-bottom: 6rem; }
.sl-article-academic .tracking-wide { letter-spacing: 0.1em; }
.sl-article-academic .text-justify { text-align: justify; }

/* Elegant Drop Cap */
.sl-article-academic .sl-drop-cap::first-letter {
    float: left;
    font-size: 3.5rem;
    line-height: 0.8;
    padding-top: 0.2rem;
    padding-right: 0.5rem;
    font-weight: bold;
    color: var(--smartlearn-primary);
}

/* CSS Columns */
.sl-academic-columns {
    column-count: 1;
    column-gap: 3rem;
    /* Prevent headings from breaking across columns */
    orphans: 3;
    widows: 3;
}
.sl-academic-columns h3 {
    break-after: avoid;
    page-break-after: avoid;
}
.sl-academic-columns .sl-pull-quote {
    break-inside: avoid;
    page-break-inside: avoid;
}

@media (min-width: 992px) {
    .sl-academic-columns {
        column-count: 2;
    }
}
`,
        js: `(function() { const root = document.querySelector('.sl-article-academic'); if (!root) return; })();`
    },

    // -----------------------------------------------------------------------------
    // 8. Visual Step-by-Step
    // -----------------------------------------------------------------------------
    {
        id: 'article-step-by-step',
        meta: {
            name: 'Visual Step-by-Step',
            category: 'Article',
            variant: 'Tutorial',
            description: 'Interactive tutorial layout where clicking a step reveals related media. Ideal for processes and how-tos.',
            tags: ['article', 'steps', 'tutorial', 'process', 'interactive'],
            image_count: 4
        },
        html: `<!-- sl-section: article-step-by-step | v1.0 -->
<section class="sl-article-steps py-5 py-lg-6 sl-bg-main overflow-hidden">
    <div class="container">
        
        <header class="mb-5 pb-4 border-bottom sl-border">
            <h2 class="display-5 fw-bold sl-text-emphasis mb-3" data-sl-edit="text">How to Enroll</h2>
            <p class="fs-5 sl-text-muted mb-0" data-sl-edit="text">Begin your journey in four simple steps.</p>
        </header>

        <div class="row align-items-center">
            
            <!-- Steps List -->
            <div class="col-lg-5 mb-5 mb-lg-0 pe-lg-5">
                <div class="sl-steps-container d-flex flex-column gap-3">
                    
                    <!-- Step 1 -->
                    <button class="sl-step-btn text-start p-4 rounded-4 border-0 sl-bg-main sl-border position-relative w-100 active sl-focus-ring" data-step="1" aria-expanded="true">
                        <div class="d-flex align-items-start gap-3">
                            <div class="display-6 fw-bold sl-text-primary opacity-50 sl-step-num">01</div>
                            <div>
                                <h3 class="h5 fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Create your account</h3>
                                <p class="sl-text-muted mb-0 small sl-step-desc" data-sl-edit="text">Sign up using your email or institutional single sign-on (SSO). Verify your identity to gain access to the student dashboard.</p>
                            </div>
                        </div>
                    </button>

                    <!-- Step 2 -->
                    <button class="sl-step-btn text-start p-4 rounded-4 border-0 sl-bg-main sl-border position-relative w-100 sl-focus-ring" data-step="2" aria-expanded="false">
                        <div class="d-flex align-items-start gap-3">
                            <div class="display-6 fw-bold sl-text-primary opacity-50 sl-step-num">02</div>
                            <div>
                                <h3 class="h5 fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Choose your course</h3>
                                <p class="sl-text-muted mb-0 small sl-step-desc" data-sl-edit="text">Browse our catalog of over 500 accredited courses. Filter by skill level, duration, and industry relevance.</p>
                            </div>
                        </div>
                    </button>

                    <!-- Step 3 -->
                    <button class="sl-step-btn text-start p-4 rounded-4 border-0 sl-bg-main sl-border position-relative w-100 sl-focus-ring" data-step="3" aria-expanded="false">
                        <div class="d-flex align-items-start gap-3">
                            <div class="display-6 fw-bold sl-text-primary opacity-50 sl-step-num">03</div>
                            <div>
                                <h3 class="h5 fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Complete enrollment</h3>
                                <p class="sl-text-muted mb-0 small sl-step-desc" data-sl-edit="text">Process your tuition fee through our secure gateway, or apply your institutional voucher code at checkout.</p>
                            </div>
                        </div>
                    </button>

                    <!-- Step 4 -->
                    <button class="sl-step-btn text-start p-4 rounded-4 border-0 sl-bg-main sl-border position-relative w-100 sl-focus-ring" data-step="4" aria-expanded="false">
                        <div class="d-flex align-items-start gap-3">
                            <div class="display-6 fw-bold sl-text-primary opacity-50 sl-step-num">04</div>
                            <div>
                                <h3 class="h5 fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Start learning</h3>
                                <p class="sl-text-muted mb-0 small sl-step-desc" data-sl-edit="text">Access your materials immediately. Join the community forums and introduce yourself to your cohort.</p>
                            </div>
                        </div>
                    </button>

                </div>
            </div>

            <!-- Media Display Area -->
            <div class="col-lg-7">
                <div class="sl-steps-media-container rounded-4 overflow-hidden sl-border sl-bg-card shadow-lg position-relative" style="aspect-ratio: 4/3;">
                    
                    <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                    
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Create Account" class="sl-step-media w-100 h-100 object-fit-cover position-absolute top-0 start-0 active" data-step="1" loading="lazy">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Choose Course" class="sl-step-media w-100 h-100 object-fit-cover position-absolute top-0 start-0" data-step="2" loading="lazy">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Complete Enrollment" class="sl-step-media w-100 h-100 object-fit-cover position-absolute top-0 start-0" data-step="3" loading="lazy">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Start Learning" class="sl-step-media w-100 h-100 object-fit-cover position-absolute top-0 start-0" data-step="4" loading="lazy">
                    
                </div>
            </div>

        </div>
    </div>
</section>`,
        css: baseCss + `
.sl-article-steps .py-lg-6 { padding-top: 6rem; padding-bottom: 6rem; }

/* Button Styling & States */
.sl-article-steps .sl-step-btn {
    transition: all 0.3s ease;
    cursor: pointer;
}
/* Ensure descriptions are hidden by default unless active */
.sl-article-steps .sl-step-btn .sl-step-desc {
    display: none;
}

.sl-article-steps .sl-step-btn.active {
    background-color: var(--smartlearn-card-bg) !important;
    border: 1px solid var(--smartlearn-card-border) !important;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.05);
}
.sl-article-steps .sl-step-btn.active .sl-step-num {
    opacity: 1 !important;
}
.sl-article-steps .sl-step-btn.active .sl-step-desc {
    display: block;
    animation: slFadeInDown 0.3s ease forwards;
}

/* Media Transitions */
.sl-article-steps .sl-step-media {
    opacity: 0;
    transition: opacity 0.5s ease, transform 0.5s ease;
    transform: scale(1.05);
    z-index: 1;
}
.sl-article-steps .sl-step-media.active {
    opacity: 1;
    transform: scale(1);
    z-index: 2;
}

@keyframes slFadeInDown {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
    .sl-article-steps .sl-step-media {
        transition: opacity 0.2s ease;
        transform: none;
    }
    .sl-article-steps .sl-step-media.active {
        transform: none;
    }
}
`,
        js: `(function() {
    const section = document.querySelector('.sl-article-steps');
    if (!section) return;

    const buttons = section.querySelectorAll('.sl-step-btn');
    const images = section.querySelectorAll('.sl-step-media');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const step = btn.getAttribute('data-step');
            
            // Update buttons
            buttons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-expanded', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-expanded', 'true');
            
            // Update images
            images.forEach(img => {
                img.classList.remove('active');
                if (img.getAttribute('data-step') === step) {
                    img.classList.add('active');
                }
            });
        });
    });
})();`
    },

    // -----------------------------------------------------------------------------
    // 9. Course Story / Case Study
    // -----------------------------------------------------------------------------
    {
        id: 'article-course-story',
        meta: {
            name: 'Course Story / Case Study',
            category: 'Article',
            variant: 'Moodle Specific',
            description: 'Educational storytelling layout featuring course metadata and a breakdown of outcomes alongside large course media.',
            tags: ['article', 'course', 'case study', 'learning', 'moodle'],
            image_count: 1
        },
        html: `<!-- sl-section: article-course-story | v1.0 -->
<section class="sl-article-course py-5 py-lg-6 sl-bg-main">
    <div class="container">
        
        <!-- Header & Metadata -->
        <div class="row mb-5">
            <div class="col-lg-8">
                <span class="badge sl-bg-primary-subtle sl-text-primary px-3 py-2 rounded-pill mb-3 fw-bold tracking-wide" data-sl-edit="text">COURSE STORY</span>
                <h1 class="display-4 fw-bold sl-text-emphasis mb-4 lh-sm" data-sl-edit="text">Python for Data Analysis & Visualization</h1>
                
                <div class="d-flex flex-wrap gap-3 gap-md-4 sl-text-emphasis fw-bold mb-4">
                    <div class="d-flex align-items-center gap-2">
                        <i class="fa fa-clock-o sl-text-primary"></i>
                        <span data-sl-edit="text">12 Weeks</span>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <i class="fa fa-bar-chart sl-text-primary"></i>
                        <span data-sl-edit="text">Intermediate Level</span>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <i class="fa fa-certificate sl-text-primary"></i>
                        <span data-sl-edit="text">Professional Certificate</span>
                    </div>
                </div>
                
                <p class="fs-5 sl-text-muted" data-sl-edit="text">Transform raw data into actionable insights. Learn how to clean, analyze, and visualize complex datasets using Python's most powerful libraries: Pandas, NumPy, and Matplotlib.</p>
            </div>
        </div>

        <div class="row align-items-start">
            
            <!-- Main Content & Outcomes -->
            <div class="col-lg-7 order-2 order-lg-1">
                <h2 class="h3 fw-bold sl-text-emphasis mb-4" data-sl-edit="text">What you'll learn</h2>
                
                <div class="sl-learning-outcomes d-flex flex-column gap-3 mb-5">
                    
                    <div class="p-4 sl-bg-card sl-border rounded-4 d-flex gap-3">
                        <div class="fs-4 fw-bold sl-text-primary opacity-50">01</div>
                        <div>
                            <h3 class="h5 fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Data Preparation</h3>
                            <p class="sl-text-muted mb-0" data-sl-edit="text">Master the art of cleaning messy data. Handle missing values, outliers, and formatting inconsistencies using Pandas.</p>
                        </div>
                    </div>

                    <div class="p-4 sl-bg-card sl-border rounded-4 d-flex gap-3">
                        <div class="fs-4 fw-bold sl-text-primary opacity-50">02</div>
                        <div>
                            <h3 class="h5 fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Statistical Analysis</h3>
                            <p class="sl-text-muted mb-0" data-sl-edit="text">Apply core statistical concepts to your datasets to uncover trends, correlations, and predictive markers.</p>
                        </div>
                    </div>

                    <div class="p-4 sl-bg-card sl-border rounded-4 d-flex gap-3">
                        <div class="fs-4 fw-bold sl-text-primary opacity-50">03</div>
                        <div>
                            <h3 class="h5 fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Advanced Visualization</h3>
                            <p class="sl-text-muted mb-0" data-sl-edit="text">Build interactive dashboards and compelling visual narratives using Seaborn and Plotly.</p>
                        </div>
                    </div>
                    
                    <div class="p-4 sl-bg-card sl-border rounded-4 d-flex gap-3">
                        <div class="fs-4 fw-bold sl-text-primary opacity-50">04</div>
                        <div>
                            <h3 class="h5 fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Real-world Projects</h3>
                            <p class="sl-text-muted mb-0" data-sl-edit="text">Complete a capstone project analyzing a real dataset from the World Bank, resulting in a portfolio-ready presentation.</p>
                        </div>
                    </div>

                </div>

                <!-- Instructor Info -->
                <div class="d-flex align-items-center gap-4 p-4 rounded-4 sl-bg-main border sl-border">
                    <div class="rounded-circle sl-bg-card sl-border d-flex align-items-center justify-content-center overflow-hidden flex-shrink-0" style="width: 64px; height: 64px;">
                        <i class="fa fa-user fs-3 sl-text-muted"></i>
                    </div>
                    <div>
                        <h4 class="h5 fw-bold sl-text-emphasis mb-1" data-sl-edit="text">Taught by Sarah Jenkins</h4>
                        <p class="small sl-text-muted mb-0" data-sl-edit="text">Senior Data Scientist at TechCorp. Over 10 years of experience in machine learning and data engineering.</p>
                    </div>
                </div>

            </div>

            <!-- Sticky Sidebar Media -->
            <div class="col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0">
                <div class="position-sticky" style="top: 2rem;">
                    <div class="rounded-4 overflow-hidden sl-border shadow-lg sl-bg-card position-relative" style="aspect-ratio: 3/4;">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Course Environment" class="w-100 h-100 object-fit-cover position-relative z-1" loading="lazy">
                        
                        <!-- Overlay CTA inside image -->
                        <div class="position-absolute bottom-0 start-0 w-100 p-4 z-2" style="background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);">
                            <a href="#" class="btn sl-bg-primary text-white w-100 rounded-pill py-3 fw-bold fs-5 sl-focus-ring" data-sl-edit="link">Access Course Materials</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>`,
        css: baseCss + `
.sl-article-course .py-lg-6 { padding-top: 6rem; padding-bottom: 6rem; }
.sl-article-course .tracking-wide { letter-spacing: 0.1em; }

/* Subtle hover interaction on outcome cards */
.sl-article-course .sl-learning-outcomes > div {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}
@media (hover: hover) and (prefers-reduced-motion: no-preference) {
    .sl-article-course .sl-learning-outcomes > div:hover {
        transform: translateX(10px);
        box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.05);
    }
}
`,
        js: `(function() { const root = document.querySelector('.sl-article-course'); if (!root) return; })();`
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
console.log('Successfully generated Article Sections 6-9 and updated catalog.json');
