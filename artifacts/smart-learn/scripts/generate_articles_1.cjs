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
    // 1. Immersive Reader
    // -----------------------------------------------------------------------------
    {
        id: 'article-immersive-reader',
        meta: {
            name: 'Immersive Reader',
            category: 'Article',
            variant: 'Long-form',
            description: 'A distraction-free, narrow column layout optimized for long-form reading with a reading progress bar.',
            tags: ['article', 'reading', 'long-form', 'typography', 'clean'],
            image_count: 0
        },
        html: `<!-- sl-section: article-immersive-reader | v1.0 -->
<section class="sl-article-reader sl-bg-main position-relative pb-6">
    <!-- Reading Progress Bar -->
    <div class="sl-reading-progress-container position-sticky top-0 start-0 w-100 z-3" style="height: 4px; background-color: var(--smartlearn-card-bg);">
        <div class="sl-reading-progress-bar sl-bg-primary h-100" style="width: 0%; transition: width 0.1s ease-out;"></div>
    </div>

    <div class="container py-5">
        <article class="mx-auto" style="max-width: 65ch;">
            
            <!-- Metadata & Header -->
            <header class="mb-5 border-bottom sl-border pb-4">
                <div class="d-flex align-items-center gap-3 mb-3 small sl-text-muted">
                    <span class="text-uppercase fw-bold tracking-wide" data-sl-edit="text">Course Guide</span>
                    <span>&bull;</span>
                    <span data-sl-edit="text"><i class="fa fa-clock-o me-2"></i>5 min read</span>
                </div>
                <h1 class="display-4 fw-bold sl-text-emphasis mb-4 lh-sm" data-sl-edit="text">The Complete Guide to Advanced Algorithmic Trading</h1>
                
                <div class="d-flex align-items-center gap-3 mt-4">
                    <div class="rounded-circle sl-bg-card sl-border d-flex align-items-center justify-content-center overflow-hidden" style="width: 48px; height: 48px;">
                        <i class="fa fa-user fs-4 sl-text-muted"></i>
                    </div>
                    <div>
                        <div class="fw-bold sl-text-emphasis" data-sl-edit="text">Dr. Elena Rostova</div>
                        <div class="small sl-text-muted" data-sl-edit="text">Lead Instructor &middot; Updated Oct 12, 2026</div>
                    </div>
                </div>
            </header>

            <!-- Main Content -->
            <div class="sl-reader-content sl-text-emphasis fs-5 lh-lg">
                <p class="sl-drop-cap" data-sl-edit="text">Welcome to the definitive guide on building high-frequency trading algorithms. This document serves as your primary syllabus and core reading material for the first semester. Before we dive into the mathematics, it is crucial to understand the historical context of quantitative analysis in modern financial markets.</p>
                
                <p data-sl-edit="text">For decades, human intuition drove the markets. Today, milliseconds separate profit from loss. This shift demands not just a theoretical understanding of finance, but a robust practical mastery of computational efficiency.</p>
                
                <h2 class="h3 fw-bold mt-5 mb-3" data-sl-edit="text">1. The Necessity of Low Latency</h2>
                <p data-sl-edit="text">When we discuss algorithmic trading, we must first separate retail trading bots from true institutional high-frequency trading (HFT). The latter operates on a microsecond timescale where standard network protocols are simply too slow.</p>
                
                <blockquote class="sl-blockquote my-5 p-4 rounded-3 sl-bg-card sl-border border-start border-4 sl-border-primary">
                    <p class="fs-4 fst-italic sl-text-emphasis mb-2" data-sl-edit="text">"In algorithmic trading, time isn't just money. Time is survival. If your execution is delayed by a single millisecond, the opportunity you identified has already been captured by someone else."</p>
                    <footer class="small sl-text-muted fw-bold" data-sl-edit="text">— Market Dynamics Report, 2025</footer>
                </blockquote>

                <p data-sl-edit="text">Therefore, our first module focuses heavily on C++ memory management and kernel-bypass networking. While Python is excellent for strategy research and data analysis (which we cover in Module 3), it cannot be used in the critical execution path.</p>

                <h2 class="h3 fw-bold mt-5 mb-3" data-sl-edit="text">2. Core Technologies</h2>
                <p data-sl-edit="text">To succeed in this course, you will need to familiarize yourself with several key technologies. We will provide sandbox environments, but independent study is expected.</p>
                
                <ul class="mb-4">
                    <li class="mb-2" data-sl-edit="text"><strong>FPGA Programming:</strong> Hardware-level execution logic.</li>
                    <li class="mb-2" data-sl-edit="text"><strong>C++20:</strong> The language of choice for low-latency systems.</li>
                    <li class="mb-2" data-sl-edit="text"><strong>Colocation:</strong> Understanding physical network topology.</li>
                </ul>

                <p data-sl-edit="text">By the end of this module, you will build a functioning order-book matching engine capable of processing 100,000 orders per second.</p>
            </div>
            
            <div class="mt-5 pt-4 border-top sl-border text-center">
                <button class="btn sl-bg-primary text-white rounded-pill px-4 py-2 fw-bold sl-focus-ring" data-sl-edit="link">Mark as Read & Continue</button>
            </div>
        </article>
    </div>
</section>`,
        css: baseCss + `
.sl-article-reader .pb-6 { padding-bottom: 5rem; }
.sl-article-reader .tracking-wide { letter-spacing: 0.1em; }

/* Typography Polish */
.sl-article-reader .sl-reader-content p {
    margin-bottom: 1.75rem;
}

.sl-article-reader .sl-reader-content ul {
    padding-left: 1.5rem;
}

/* Elegant Drop Cap */
.sl-article-reader .sl-drop-cap::first-letter {
    float: left;
    font-size: 4.5rem;
    line-height: 0.8;
    padding-top: 0.2rem;
    padding-right: 0.75rem;
    font-weight: 800;
    color: var(--smartlearn-primary);
}

/* Blockquote styling */
.sl-article-reader .sl-blockquote {
    transition: transform 0.3s ease;
}
@media (hover: hover) and (prefers-reduced-motion: no-preference) {
    .sl-article-reader .sl-blockquote:hover {
        transform: translateX(10px);
    }
}
`,
        js: `(function() {
    const section = document.querySelector('.sl-article-reader');
    if (!section) return;
    
    const progressBar = section.querySelector('.sl-reading-progress-bar');
    if (!progressBar) return;

    const updateProgress = () => {
        // Calculate scroll progress within this specific section
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // If section is below viewport, progress is 0
        if (rect.top > windowHeight) {
            progressBar.style.width = '0%';
            return;
        }
        
        // If section is above viewport completely, progress is 100
        if (rect.bottom < 0) {
            progressBar.style.width = '100%';
            return;
        }
        
        const totalScrollable = rect.height;
        const currentScroll = windowHeight - rect.top;
        let percentage = (currentScroll / totalScrollable) * 100;
        
        // Clamp between 0 and 100
        percentage = Math.max(0, Math.min(100, percentage));
        progressBar.style.width = percentage + '%';
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    updateProgress();
})();`
    },

    // -----------------------------------------------------------------------------
    // 2. Editorial Split
    // -----------------------------------------------------------------------------
    {
        id: 'article-editorial-split',
        meta: {
            name: 'Editorial Split',
            category: 'Article',
            variant: 'Storytelling',
            description: 'A 50/50 split screen on desktop. Sticky image on one side, scrolling text on the other. Gracefully handles missing images.',
            tags: ['article', 'split', 'editorial', 'storytelling', 'sticky'],
            image_count: 1
        },
        html: `<!-- sl-section: article-editorial-split | v1.0 -->
<section class="sl-article-split sl-bg-main overflow-hidden">
    <div class="row g-0">
        
        <!-- Left Side: Sticky Media (Optional) -->
        <div class="col-lg-5 sl-split-media-col position-relative d-none d-lg-block">
            <div class="position-sticky top-0 start-0 w-100 vh-100 sl-border-end">
                <div class="sl-media-fallback w-100 h-100 position-absolute z-0">
                    <i class="fa fa-picture-o fs-1 opacity-25"></i>
                </div>
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Editorial Image" class="w-100 h-100 object-fit-cover position-relative z-1 sl-editorial-img" loading="lazy">
            </div>
        </div>

        <!-- Right Side: Scrolling Content -->
        <div class="col-lg-7 sl-split-content-col position-relative">
            
            <!-- Mobile Media Fallback (only visible on small screens) -->
            <div class="d-lg-none w-100 position-relative" style="height: 40vh; min-height: 300px;">
                <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Editorial Image Mobile" class="w-100 h-100 object-fit-cover position-relative z-1" loading="lazy">
            </div>

            <!-- Text Content Container -->
            <div class="p-4 p-md-5 py-lg-6 px-xl-6 mx-auto" style="max-width: 800px;">
                <span class="text-uppercase fw-bold sl-text-primary tracking-wide small mb-3 d-block" data-sl-edit="text">OUR STORY</span>
                <h2 class="display-4 fw-bold sl-text-emphasis mb-4 lh-sm" data-sl-edit="text">Bridging the gap between theory and execution.</h2>
                
                <div class="sl-text-muted fs-5 lh-lg mb-5">
                    <p data-sl-edit="text">The SmartLearn Academy was founded on a simple premise: traditional education systems are struggling to keep pace with rapid technological advancements in the industry.</p>
                </div>

                <div class="sl-text-emphasis lh-lg">
                    <p data-sl-edit="text">In 2023, a consortium of industry leaders realized that new graduates, while theoretically sound, often required six to twelve months of on-the-job training before becoming productive contributors. The theoretical foundations were there, but the practical execution was missing.</p>
                    
                    <p data-sl-edit="text">We built this platform to simulate real-world environments. When you take a course here, you aren't just watching videos and answering multiple-choice questions. You are deploying code, managing simulated budgets, leading virtual teams, and solving crisis scenarios that mirror actual industry events.</p>
                    
                    <blockquote class="border-start border-4 sl-border-primary ps-4 my-5 fs-4 fst-italic sl-text-emphasis">
                        <p data-sl-edit="text">"Education isn't about memorizing facts anymore. It's about developing the cognitive flexibility to solve problems that didn't exist yesterday."</p>
                    </blockquote>

                    <h3 class="h4 fw-bold mt-5 mb-3" data-sl-edit="text">A New Methodology</h3>
                    <p data-sl-edit="text">Our pedagogical approach combines cognitive load theory with active learning methodologies. Every lesson is chunked into digestible concepts, immediately followed by an application exercise. If you learn about a sorting algorithm, you implement it. If you learn about a marketing funnel, you build one.</p>
                    
                    <p data-sl-edit="text">This hands-on approach ensures that when you leave our programs, you are not just certified; you are genuinely prepared.</p>
                </div>
                
                <div class="mt-5 pt-4">
                    <a href="#" class="btn sl-bg-primary text-white rounded-pill px-4 py-2 fw-bold sl-focus-ring" data-sl-edit="link">Meet the Faculty</a>
                </div>
            </div>
            
        </div>
    </div>
</section>`,
        css: baseCss + `
.sl-article-split .py-lg-6 { padding-top: 6rem; padding-bottom: 6rem; }
.sl-article-split .px-xl-6 { padding-left: 6rem; padding-right: 6rem; }
.sl-article-split .tracking-wide { letter-spacing: 0.1em; }

/* Handle missing image gracefully by allowing text column to expand if we apply a class */
.sl-article-split.no-media .sl-split-media-col { display: none !important; }
.sl-article-split.no-media .sl-split-content-col { width: 100% !important; max-width: 100% !important; }
.sl-article-split.no-media .sl-split-content-col > div { max-width: 900px; margin: 0 auto; }

/* Slight zoom effect on the image when scrolling */
@media (prefers-reduced-motion: no-preference) {
    .sl-article-split .sl-editorial-img {
        transition: transform 0.2s ease-out;
        transform: scale(1.05); /* initial scale */
    }
}
`,
        js: `(function() {
    const section = document.querySelector('.sl-article-split');
    if (!section) return;
    
    const img = section.querySelector('.sl-editorial-img');
    
    // Check if image is effectively missing/empty to trigger full-width fallback
    if (img && (!img.getAttribute('src') || img.getAttribute('src').trim() === '')) {
        section.classList.add('no-media');
    }

    // Parallax effect on scroll for the sticky image
    if (img && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('scroll', () => {
            const rect = section.getBoundingClientRect();
            // Only calculate if section is in view
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                // Scale from 1.05 down to 1.00 based on scroll
                const scale = 1.05 - (scrollPercent * 0.05);
                img.style.transform = 'scale(' + Math.max(1, scale) + ')';
            }
        }, { passive: true });
    }
})();`
    },

    // -----------------------------------------------------------------------------
    // 3. Chaptered Scroll
    // -----------------------------------------------------------------------------
    {
        id: 'article-chaptered-scroll',
        meta: {
            name: 'Chaptered Scroll',
            category: 'Article',
            variant: 'Documentation',
            description: 'Long-form layout featuring a sticky sidebar Table of Contents with scroll-spy functionality.',
            tags: ['article', 'chapters', 'toc', 'documentation', 'policies'],
            image_count: 0
        },
        html: `<!-- sl-section: article-chaptered-scroll | v1.0 -->
<section class="sl-article-chapters py-5 py-lg-6 sl-bg-main">
    <div class="container">
        
        <div class="row mb-5 pb-4 border-bottom sl-border">
            <div class="col-lg-8 mx-auto text-center">
                <span class="badge sl-bg-primary-subtle sl-text-primary px-3 py-2 rounded-pill mb-3 fw-bold" data-sl-edit="text">DOCUMENTATION</span>
                <h1 class="display-5 fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Platform Terms of Service & Privacy Policy</h1>
                <p class="sl-text-muted mb-0" data-sl-edit="text">Last updated: November 2026. Please read these terms carefully before using the platform.</p>
            </div>
        </div>

        <div class="row">
            <!-- Mobile TOC Toggle (Visible only on small screens) -->
            <div class="col-12 d-lg-none mb-4">
                <button class="btn sl-bg-card sl-border w-100 text-start p-3 fw-bold sl-text-emphasis d-flex justify-content-between align-items-center sl-focus-ring" type="button" data-bs-toggle="collapse" data-bs-target="#mobileToc" aria-expanded="false" aria-controls="mobileToc">
                    <span><i class="fa fa-list-ul me-2"></i> Table of Contents</span>
                    <i class="fa fa-chevron-down"></i>
                </button>
                <div class="collapse mt-2" id="mobileToc">
                    <div class="card card-body sl-bg-card sl-border p-0">
                        <nav class="nav flex-column sl-toc-nav-mobile py-2">
                            <a class="nav-link sl-text-muted px-4 py-2 border-start border-3 border-transparent" href="#ch1">1. Introduction & Acceptance</a>
                            <a class="nav-link sl-text-muted px-4 py-2 border-start border-3 border-transparent" href="#ch2">2. User Accounts & Security</a>
                            <a class="nav-link sl-text-muted px-4 py-2 border-start border-3 border-transparent" href="#ch3">3. Intellectual Property Rights</a>
                            <a class="nav-link sl-text-muted px-4 py-2 border-start border-3 border-transparent" href="#ch4">4. Academic Integrity Policy</a>
                            <a class="nav-link sl-text-muted px-4 py-2 border-start border-3 border-transparent" href="#ch5">5. Data Privacy & GDPR</a>
                        </nav>
                    </div>
                </div>
            </div>

            <!-- Sticky Sidebar TOC (Desktop) -->
            <div class="col-lg-3 d-none d-lg-block">
                <div class="position-sticky top-0 pt-4" style="z-index: 10;">
                    <h5 class="fw-bold sl-text-emphasis mb-4 text-uppercase small tracking-wide">Contents</h5>
                    <nav class="nav flex-column sl-toc-nav border-start sl-border">
                        <a class="nav-link sl-text-muted py-2 ps-3 position-relative sl-toc-link active" href="#ch1" data-target="ch1">
                            1. Introduction & Acceptance
                        </a>
                        <a class="nav-link sl-text-muted py-2 ps-3 position-relative sl-toc-link" href="#ch2" data-target="ch2">
                            2. User Accounts & Security
                        </a>
                        <a class="nav-link sl-text-muted py-2 ps-3 position-relative sl-toc-link" href="#ch3" data-target="ch3">
                            3. Intellectual Property Rights
                        </a>
                        <a class="nav-link sl-text-muted py-2 ps-3 position-relative sl-toc-link" href="#ch4" data-target="ch4">
                            4. Academic Integrity Policy
                        </a>
                        <a class="nav-link sl-text-muted py-2 ps-3 position-relative sl-toc-link" href="#ch5" data-target="ch5">
                            5. Data Privacy & GDPR
                        </a>
                    </nav>
                </div>
            </div>

            <!-- Main Content Area -->
            <div class="col-lg-8 offset-lg-1 sl-chapter-content">
                
                <div id="ch1" class="sl-chapter mb-5 pb-4 border-bottom sl-border">
                    <h2 class="h3 fw-bold sl-text-emphasis mb-4" data-sl-edit="text">1. Introduction & Acceptance</h2>
                    <div class="sl-text-emphasis lh-lg">
                        <p data-sl-edit="text">By accessing or using the SmartLearn Academy platform, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, then you may not access the website or use any services.</p>
                        <p data-sl-edit="text">These Terms apply to all users of the site, including without limitation users who are browsers, vendors, students, instructors, and/or contributors of content. We reserve the right to update, change or replace any part of these Terms by posting updates to our website.</p>
                    </div>
                </div>

                <div id="ch2" class="sl-chapter mb-5 pb-4 border-bottom sl-border">
                    <h2 class="h3 fw-bold sl-text-emphasis mb-4" data-sl-edit="text">2. User Accounts & Security</h2>
                    <div class="sl-text-emphasis lh-lg">
                        <p data-sl-edit="text">To access certain features of the platform, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
                        <p data-sl-edit="text">You are responsible for safeguarding the password that you use to access the platform and for any activities or actions under your password, whether your password is with our service or a third-party service. You agree not to disclose your password to any third party.</p>
                    </div>
                </div>

                <div id="ch3" class="sl-chapter mb-5 pb-4 border-bottom sl-border">
                    <h2 class="h3 fw-bold sl-text-emphasis mb-4" data-sl-edit="text">3. Intellectual Property Rights</h2>
                    <div class="sl-text-emphasis lh-lg">
                        <p data-sl-edit="text">The platform and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of SmartLearn and its licensors. The platform is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>
                        <p data-sl-edit="text">Course materials, including videos, PDFs, and interactive modules, are licensed solely for your personal, non-commercial educational use. Redistribution, recording, or selling of these materials is strictly prohibited and will result in immediate account termination.</p>
                    </div>
                </div>

                <div id="ch4" class="sl-chapter mb-5 pb-4 border-bottom sl-border">
                    <h2 class="h3 fw-bold sl-text-emphasis mb-4" data-sl-edit="text">4. Academic Integrity Policy</h2>
                    <div class="sl-text-emphasis lh-lg">
                        <p data-sl-edit="text">SmartLearn maintains a zero-tolerance policy for academic dishonesty. This includes, but is not limited to:</p>
                        <ul class="mb-3">
                            <li data-sl-edit="text">Plagiarism (submitting someone else's work as your own).</li>
                            <li data-sl-edit="text">Unauthorized collaboration on exams or individual assignments.</li>
                            <li data-sl-edit="text">Using automated bots or scripts to complete coursework.</li>
                            <li data-sl-edit="text">Sharing quiz answers or exam prompts on external websites.</li>
                        </ul>
                        <p data-sl-edit="text">Violations of this policy may result in failing grades, revoked certificates, and permanent bans from the platform.</p>
                    </div>
                </div>

                <div id="ch5" class="sl-chapter mb-5 pb-4">
                    <h2 class="h3 fw-bold sl-text-emphasis mb-4" data-sl-edit="text">5. Data Privacy & GDPR</h2>
                    <div class="sl-text-emphasis lh-lg">
                        <p data-sl-edit="text">We respect your privacy and are committed to protecting it. Our Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
                        <p data-sl-edit="text">For users within the European Economic Area (EEA), we comply fully with the General Data Protection Regulation (GDPR). You have the right to access, correct, or delete your personal data. You may export your learning history at any time from your account settings pane.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>`,
        css: baseCss + `
.sl-article-chapters .py-lg-6 { padding-top: 6rem; padding-bottom: 6rem; }
.sl-article-chapters .tracking-wide { letter-spacing: 0.1em; }

/* Desktop TOC Styling */
.sl-article-chapters .sl-toc-link {
    transition: color 0.2s ease, font-weight 0.2s ease;
    border-left: 2px solid transparent;
    margin-left: -2px; /* Pull back over the container border */
}
.sl-article-chapters .sl-toc-link:hover, .sl-article-chapters .sl-toc-link:focus-visible {
    color: var(--smartlearn-text) !important;
}
.sl-article-chapters .sl-toc-link.active {
    color: var(--smartlearn-primary) !important;
    font-weight: bold;
    border-left-color: var(--smartlearn-primary);
}

/* Smooth scrolling for anchor links */
.sl-article-chapters { scroll-behavior: smooth; }

/* Focus management for accessibility */
.sl-article-chapters .sl-chapter:focus-visible {
    outline: 2px dashed var(--smartlearn-primary);
    outline-offset: 10px;
}
`,
        js: `(function() {
    const section = document.querySelector('.sl-article-chapters');
    if (!section) return;

    const chapters = section.querySelectorAll('.sl-chapter');
    const tocLinks = section.querySelectorAll('.sl-toc-link');
    
    if (chapters.length === 0 || tocLinks.length === 0) return;

    // Scroll spy logic
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px', // Trigger when element is near top third of screen
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active from all
                tocLinks.forEach(link => link.classList.remove('active'));
                
                // Add active to current
                const id = entry.target.getAttribute('id');
                const activeLink = section.querySelector('.sl-toc-link[data-target="' + id + '"]');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    chapters.forEach(chapter => observer.observe(chapter));

    // Handle clicks to smoothly scroll and set focus for accessibility
    tocLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' });
                // Make target focusable briefly to manage keyboard focus
                targetEl.setAttribute('tabindex', '-1');
                targetEl.focus({ preventScroll: true });
                
                // Update active state manually before observer catches up
                tocLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
})();`
    },

    // -----------------------------------------------------------------------------
    // 4. Media Intersect
    // -----------------------------------------------------------------------------
    {
        id: 'article-media-intersect',
        meta: {
            name: 'Media Intersect',
            category: 'Article',
            variant: 'Visual Editorial',
            description: 'Stunning visual layout where text blocks overlay background images using a glassmorphism effect.',
            tags: ['article', 'visual', 'media', 'glass', 'intersect'],
            image_count: 2
        },
        html: `<!-- sl-section: article-media-intersect | v1.0 -->
<section class="sl-article-intersect position-relative overflow-hidden sl-bg-main pb-5">
    
    <!-- Top Background Image -->
    <div class="position-absolute top-0 start-0 w-100" style="height: 60vh; min-height: 400px; max-height: 600px;">
        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Creative Studio" class="w-100 h-100 object-fit-cover position-relative z-1" loading="lazy">
        <!-- Gradient overlay to ensure text readability if glass fails -->
        <div class="position-absolute top-0 start-0 w-100 h-100 z-2 sl-gradient-overlay"></div>
    </div>

    <!-- Content Container -->
    <div class="container position-relative z-3" style="padding-top: 25vh;">
        
        <!-- Main Glass Box -->
        <div class="row mb-5">
            <div class="col-lg-8">
                <div class="sl-glass-box rounded-4 p-4 p-md-5 shadow-lg sl-border sl-bg-card-glass">
                    <span class="badge sl-bg-primary text-white px-3 py-2 rounded-pill mb-4 fw-bold" data-sl-edit="text">CREATIVE ARTS</span>
                    <h2 class="display-4 fw-bold sl-text-emphasis mb-4 lh-sm" data-sl-edit="text">The intersection of technology and human emotion.</h2>
                    <div class="sl-text-emphasis fs-5 lh-lg mb-0">
                        <p data-sl-edit="text">Digital art is no longer just about mastering software tools. It requires a profound understanding of how interactive media influences human psychology. In this program, we strip away the technical jargon to focus on the core: what makes an experience memorable?</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Secondary Intersect -->
        <div class="row align-items-center mt-5 pt-5">
            <div class="col-lg-6 mb-5 mb-lg-0 order-2 order-lg-1">
                <div class="p-4 p-lg-5 sl-bg-card rounded-4 sl-border shadow-sm position-relative z-3 sl-intersect-box">
                    <h3 class="fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Bridging the Gap</h3>
                    <p class="sl-text-muted lh-lg mb-4" data-sl-edit="text">Our curriculum forces students to constantly switch between the analytical and the creative. You will write shaders in GLSL in the morning, and study classical color theory in the afternoon. This duality produces graduates who can both conceive impossible ideas and possess the technical chops to build them.</p>
                    <a href="#" class="fw-bold sl-text-primary text-decoration-none sl-focus-ring" data-sl-edit="link">Explore the curriculum <i class="fa fa-arrow-right ms-2"></i></a>
                </div>
            </div>
            
            <div class="col-lg-7 offset-lg-5 position-lg-absolute order-1 order-lg-2" style="right: 0; z-index: 1;">
                <div class="rounded-4 overflow-hidden shadow-lg sl-border position-relative" style="aspect-ratio: 4/3;">
                    <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Students collaborating" class="w-100 h-100 object-fit-cover position-relative z-1 sl-hover-zoom" loading="lazy">
                </div>
            </div>
        </div>

    </div>
</section>`,
        css: baseCss + `
.sl-article-intersect .sl-gradient-overlay {
    background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, var(--smartlearn-bg) 100%);
}

.sl-article-intersect .sl-bg-card-glass {
    background: color-mix(in srgb, var(--smartlearn-card-bg) 85%, transparent) !important;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
}

.sl-article-intersect .sl-hover-zoom {
    transition: transform 0.6s ease;
}
@media (hover: hover) and (prefers-reduced-motion: no-preference) {
    .sl-article-intersect .rounded-4:hover .sl-hover-zoom {
        transform: scale(1.05);
    }
}

/* Offset styling for the secondary box to create the overlap effect on desktop */
@media (min-width: 992px) {
    .sl-article-intersect .sl-intersect-box {
        margin-right: -100px;
    }
}
`,
        js: `(function() { const root = document.querySelector('.sl-article-intersect'); if (!root) return; })();`
    },

    // -----------------------------------------------------------------------------
    // 5. Statement / Editorial Hero
    // -----------------------------------------------------------------------------
    {
        id: 'article-statement-block',
        meta: {
            name: 'Statement Block',
            category: 'Article',
            variant: 'Impactful',
            description: 'A minimalist section featuring massive typography for mission statements or key stats, supported by a subtle background.',
            tags: ['article', 'statement', 'quote', 'typography', 'impact'],
            image_count: 0
        },
        html: `<!-- sl-section: article-statement-block | v1.0 -->
<section class="sl-article-statement py-6 py-lg-7 sl-bg-main position-relative overflow-hidden d-flex align-items-center" style="min-height: 60vh;">
    
    <!-- Animated Gradient Background (Pure CSS) -->
    <div class="position-absolute top-0 start-0 w-100 h-100 z-0 sl-animated-bg opacity-25"></div>

    <div class="container position-relative z-1 text-center">
        <div class="row justify-content-center">
            <div class="col-lg-10 col-xl-8">
                
                <i class="fa fa-quote-left fs-1 sl-text-primary mb-4 opacity-50"></i>
                
                <h2 class="display-3 fw-bolder sl-text-emphasis mb-5 lh-sm" data-sl-edit="text">
                    Education is not the learning of facts, but the training of the mind to think.
                </h2>
                
                <div class="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4 gap-sm-5">
                    <div class="text-start">
                        <div class="display-6 fw-bold sl-text-primary" data-sl-edit="text">98%</div>
                        <div class="sl-text-muted text-uppercase small tracking-wide fw-bold" data-sl-edit="text">Employment Rate</div>
                    </div>
                    <div class="d-none d-sm-block border-end sl-border" style="height: 40px;"></div>
                    <div class="text-start">
                        <div class="display-6 fw-bold sl-text-primary" data-sl-edit="text">120+</div>
                        <div class="sl-text-muted text-uppercase small tracking-wide fw-bold" data-sl-edit="text">Industry Partners</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>`,
        css: baseCss + `
.sl-article-statement .py-6 { padding-top: 5rem; padding-bottom: 5rem; }
.sl-article-statement .py-lg-7 { padding-top: 8rem; padding-bottom: 8rem; }
.sl-article-statement .tracking-wide { letter-spacing: 0.1em; }

/* Subtle Animated Mesh/Gradient Background */
.sl-article-statement .sl-animated-bg {
    background: radial-gradient(circle at 15% 50%, color-mix(in srgb, var(--smartlearn-primary) 15%, transparent), transparent 50%),
                radial-gradient(circle at 85% 30%, color-mix(in srgb, var(--smartlearn-primary) 10%, transparent), transparent 50%);
    animation: slGradientShift 15s ease-in-out infinite alternate;
}

@keyframes slGradientShift {
    0% { transform: scale(1) translate(0, 0); }
    50% { transform: scale(1.1) translate(2%, 2%); }
    100% { transform: scale(1) translate(-2%, -2%); }
}

@media (prefers-reduced-motion: reduce) {
    .sl-article-statement .sl-animated-bg {
        animation: none;
    }
}
`,
        js: `(function() { const root = document.querySelector('.sl-article-statement'); if (!root) return; })();`
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
console.log('Successfully generated Article Sections 1-5 and updated catalog.json');
