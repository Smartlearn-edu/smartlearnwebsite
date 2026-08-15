const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const sectionsDir = path.join(publicDir, 'sections');
const catalogPath = path.join(publicDir, 'catalog.json');

if (!fs.existsSync(sectionsDir)) {
    fs.mkdirSync(sectionsDir, { recursive: true });
}

// -----------------------------------------------------------------------------
// CORE CSS FOR FEATURES
// -----------------------------------------------------------------------------
const baseCss = `
/* SmartLearn Native Color Classes */
.sl-text-primary { color: var(--smartlearn-primary) !important; }
.sl-text-emphasis { color: var(--smartlearn-text) !important; }
.sl-text-muted { color: var(--smartlearn-text-muted) !important; }

.sl-bg-main { background-color: var(--smartlearn-bg) !important; }
.sl-bg-card { background-color: var(--smartlearn-card-bg) !important; border: 1px solid var(--smartlearn-card-border) !important; }
.sl-bg-primary { background-color: var(--smartlearn-primary) !important; }
.sl-bg-primary-subtle { background-color: color-mix(in srgb, var(--smartlearn-primary) 10%, transparent) !important; }

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
`;

const sections = [
    // -----------------------------------------------------------------------------
    // 6. 3D Central Hub (Dynamic)
    // -----------------------------------------------------------------------------
    {
        id: 'feature-central-hub',
        meta: {
            name: '3D Central Hub',
            category: 'Features',
            variant: 'Dynamic Orbit',
            description: 'A highly visual section featuring orbiting nodes around a central LMS graphic.',
            tags: ['feature', 'orbit', '3d', 'dynamic', 'hub'],
            image_count: 5
        },
        html: `<!-- sl-section: feature-central-hub | v1.0 -->
<section class="sl-feature-hub py-6 sl-bg-main overflow-hidden position-relative">
    <div class="container position-relative z-1">
        <div class="text-center mb-5 pb-lg-5">
            <h2 class="display-5 fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Everything revolves around learning</h2>
            <p class="fs-5 sl-text-muted mx-auto" style="max-width: 600px;" data-sl-edit="text">Our platform is designed with the student experience at the center of every feature.</p>
        </div>

        <div class="sl-hub-wrapper position-relative mx-auto" style="max-width: 800px; height: 600px;">
            
            <!-- Orbit Tracks -->
            <div class="sl-orbit-track sl-track-1 position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed border-2 sl-border opacity-50" style="width: 400px; height: 400px;"></div>
            <div class="sl-orbit-track sl-track-2 position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed border-2 sl-border opacity-25" style="width: 650px; height: 650px;"></div>

            <!-- Central Hub Core -->
            <div class="sl-hub-center position-absolute top-50 start-50 translate-middle rounded-circle sl-bg-card shadow-lg sl-border d-flex align-items-center justify-content-center z-2 p-3" style="width: 200px; height: 200px;">
                <div class="rounded-circle overflow-hidden w-100 h-100 position-relative">
                    <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Central Hub" class="w-100 h-100 object-fit-cover position-relative z-1">
                </div>
            </div>

            <!-- Orbiting Nodes -->
            <div class="sl-orbiting-nodes position-absolute top-0 start-0 w-100 h-100 z-3 pointer-events-none">
                
                <!-- Node 1 (Inner Track) -->
                <div class="sl-node sl-node-inner position-absolute sl-bg-card sl-border p-2 rounded-pill shadow-sm d-flex align-items-center gap-2 pointer-events-auto" style="animation-delay: -2s;" tabindex="0">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" class="rounded-circle" style="width:32px; height:32px;">
                    <span class="fw-bold small pe-2 sl-text-emphasis" data-sl-edit="text">AI Grading</span>
                </div>

                <!-- Node 2 (Inner Track) -->
                <div class="sl-node sl-node-inner position-absolute sl-bg-card sl-border p-2 rounded-pill shadow-sm d-flex align-items-center gap-2 pointer-events-auto" style="animation-delay: -6s;" tabindex="0">
                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80" class="rounded-circle" style="width:32px; height:32px;">
                    <span class="fw-bold small pe-2 sl-text-emphasis" data-sl-edit="text">Live Forums</span>
                </div>

                <!-- Node 3 (Outer Track) -->
                <div class="sl-node sl-node-outer position-absolute sl-bg-card sl-border p-2 rounded-pill shadow-sm d-flex align-items-center gap-2 pointer-events-auto" style="animation-delay: -4s;" tabindex="0">
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80" class="rounded-circle" style="width:32px; height:32px;">
                    <span class="fw-bold small pe-2 sl-text-emphasis" data-sl-edit="text">Analytics Engine</span>
                </div>

                <!-- Node 4 (Outer Track) -->
                <div class="sl-node sl-node-outer position-absolute sl-bg-card sl-border p-2 rounded-pill shadow-sm d-flex align-items-center gap-2 pointer-events-auto" style="animation-delay: -10s;" tabindex="0">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" class="rounded-circle" style="width:32px; height:32px;">
                    <span class="fw-bold small pe-2 sl-text-emphasis" data-sl-edit="text">Secure Exams</span>
                </div>

            </div>
            
        </div>
    </div>
</section>`,
        css: baseCss + `
.sl-feature-hub .py-6 { padding-top: 5rem; padding-bottom: 5rem; }
.sl-feature-hub .pointer-events-none { pointer-events: none; }
.sl-feature-hub .pointer-events-auto { pointer-events: auto; }

.sl-feature-hub .sl-node {
    top: 50%; left: 50%;
    margin-top: -24px;
    margin-left: -70px;
    transition: transform 0.3s ease, border-color 0.3s ease;
    cursor: pointer;
}
.sl-feature-hub .sl-node:hover, .sl-feature-hub .sl-node:focus-visible {
    transform: scale(1.1) !important;
    border-color: var(--smartlearn-primary) !important;
    z-index: 10;
}

/* Animations - Respecting prefers-reduced-motion */
@keyframes slOrbitInner {
    0% { transform: rotate(0deg) translateX(200px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(200px) rotate(-360deg); }
}
@keyframes slOrbitOuter {
    0% { transform: rotate(0deg) translateX(325px) rotate(0deg); }
    100% { transform: rotate(-360deg) translateX(325px) rotate(360deg); }
}

@media (prefers-reduced-motion: no-preference) {
    .sl-feature-hub .sl-node-inner {
        animation: slOrbitInner 25s linear infinite;
    }
    .sl-feature-hub .sl-node-outer {
        animation: slOrbitOuter 35s linear infinite;
    }
    .sl-feature-hub .sl-orbiting-nodes:hover .sl-node {
        animation-play-state: paused;
    }
}
@media (prefers-reduced-motion: reduce) {
    /* Fallback static positioning if motion is reduced */
    .sl-feature-hub .sl-node-inner:nth-child(1) { transform: rotate(0deg) translateX(200px) rotate(0deg); }
    .sl-feature-hub .sl-node-inner:nth-child(2) { transform: rotate(180deg) translateX(200px) rotate(-180deg); }
    .sl-feature-hub .sl-node-outer:nth-child(3) { transform: rotate(90deg) translateX(325px) rotate(-90deg); }
    .sl-feature-hub .sl-node-outer:nth-child(4) { transform: rotate(270deg) translateX(325px) rotate(-270deg); }
}

/* Mobile scaling */
@media (max-width: 768px) {
    .sl-feature-hub .sl-hub-wrapper { transform: scale(0.6); margin-top: -100px; margin-bottom: -100px; }
}
`,
        js: `(function() { const root = document.querySelector('.sl-feature-hub'); if (!root) return; })();`
    },

    // -----------------------------------------------------------------------------
    // 7. Minimalist Typography + Media (Editorial)
    // -----------------------------------------------------------------------------
    {
        id: 'feature-typography-media',
        meta: {
            name: 'Minimalist Typography',
            category: 'Features',
            variant: 'Editorial',
            description: 'Massive typography with hairline dividers. Hovering reveals contextual media.',
            tags: ['feature', 'typography', 'minimalist', 'editorial', 'media'],
            image_count: 4
        },
        html: `<!-- sl-section: feature-typography-media | v1.0 -->
<section class="sl-feature-typo py-6 sl-bg-main position-relative">
    <div class="container">
        
        <div class="row">
            <div class="col-12 mb-5">
                <span class="text-uppercase fw-bold sl-text-primary tracking-wide small" data-sl-edit="text">THE PLATFORM</span>
            </div>
        </div>

        <div class="sl-typo-list d-flex flex-column">
            
            <!-- Row 1 -->
            <a href="#" class="sl-typo-row text-decoration-none py-4 border-top border-bottom sl-border position-relative d-block">
                <div class="row align-items-center">
                    <div class="col-2 col-md-1">
                        <span class="fs-5 sl-text-muted fw-light">01</span>
                    </div>
                    <div class="col-10 col-md-6 col-lg-7">
                        <h3 class="display-5 fw-bold sl-text-emphasis m-0 sl-row-title transition-all" data-sl-edit="text">Interactive Seminars</h3>
                    </div>
                    <div class="col-12 col-md-5 col-lg-4 mt-3 mt-md-0 d-md-flex justify-content-end align-items-center">
                        <p class="sl-text-muted mb-0 small text-md-end w-75 ms-auto ms-md-0 me-md-4" data-sl-edit="text">Host live, low-latency video sessions directly in the browser.</p>
                        <i class="fa fa-arrow-right fs-4 sl-text-primary d-none d-md-block opacity-0 sl-row-arrow transition-all"></i>
                    </div>
                </div>
                <!-- Media Reveal -->
                <div class="sl-typo-media position-absolute end-0 top-50 translate-middle-y me-5 rounded-4 overflow-hidden shadow-lg d-none d-xl-block pointer-events-none z-3 sl-border" style="width: 350px; height: 220px;">
                    <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" class="w-100 h-100 object-fit-cover position-relative z-1" loading="lazy">
                </div>
            </a>

            <!-- Row 2 -->
            <a href="#" class="sl-typo-row text-decoration-none py-4 border-bottom sl-border position-relative d-block">
                <div class="row align-items-center">
                    <div class="col-2 col-md-1">
                        <span class="fs-5 sl-text-muted fw-light">02</span>
                    </div>
                    <div class="col-10 col-md-6 col-lg-7">
                        <h3 class="display-5 fw-bold sl-text-emphasis m-0 sl-row-title transition-all" data-sl-edit="text">Adaptive Quizzes</h3>
                    </div>
                    <div class="col-12 col-md-5 col-lg-4 mt-3 mt-md-0 d-md-flex justify-content-end align-items-center">
                        <p class="sl-text-muted mb-0 small text-md-end w-75 ms-auto ms-md-0 me-md-4" data-sl-edit="text">Questions that intelligently scale in difficulty based on student performance.</p>
                        <i class="fa fa-arrow-right fs-4 sl-text-primary d-none d-md-block opacity-0 sl-row-arrow transition-all"></i>
                    </div>
                </div>
                <!-- Media Reveal -->
                <div class="sl-typo-media position-absolute end-0 top-50 translate-middle-y me-5 rounded-4 overflow-hidden shadow-lg d-none d-xl-block pointer-events-none z-3 sl-border" style="width: 350px; height: 220px;">
                    <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                    <video class="w-100 h-100 object-fit-cover position-relative z-1" poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" autoplay muted loop playsinline><source src="" type="video/mp4"></video>
                </div>
            </a>

            <!-- Row 3 -->
            <a href="#" class="sl-typo-row text-decoration-none py-4 border-bottom sl-border position-relative d-block">
                <div class="row align-items-center">
                    <div class="col-2 col-md-1">
                        <span class="fs-5 sl-text-muted fw-light">03</span>
                    </div>
                    <div class="col-10 col-md-6 col-lg-7">
                        <h3 class="display-5 fw-bold sl-text-emphasis m-0 sl-row-title transition-all" data-sl-edit="text">Secure Portfolios</h3>
                    </div>
                    <div class="col-12 col-md-5 col-lg-4 mt-3 mt-md-0 d-md-flex justify-content-end align-items-center">
                        <p class="sl-text-muted mb-0 small text-md-end w-75 ms-auto ms-md-0 me-md-4" data-sl-edit="text">A private, encrypted vault for students to store and showcase their achievements.</p>
                        <i class="fa fa-arrow-right fs-4 sl-text-primary d-none d-md-block opacity-0 sl-row-arrow transition-all"></i>
                    </div>
                </div>
                <!-- Media Reveal -->
                <div class="sl-typo-media position-absolute end-0 top-50 translate-middle-y me-5 rounded-4 overflow-hidden shadow-lg d-none d-xl-block pointer-events-none z-3 sl-border" style="width: 350px; height: 220px;">
                    <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" class="w-100 h-100 object-fit-cover position-relative z-1" loading="lazy">
                </div>
            </a>

        </div>
    </div>
</section>`,
        css: baseCss + `
.sl-feature-typo .py-6 { padding-top: 5rem; padding-bottom: 5rem; }
.sl-feature-typo .tracking-wide { letter-spacing: 0.1em; }
.sl-feature-typo .transition-all { transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); }

.sl-feature-typo .sl-typo-row { border-bottom-color: var(--smartlearn-card-border) !important; }
.sl-feature-typo .sl-typo-row:first-child { border-top-color: var(--smartlearn-card-border) !important; }

/* Desktop hover interactions */
@media (hover: hover) and (min-width: 992px) {
    .sl-feature-typo .sl-typo-row:hover .sl-row-title {
        color: var(--smartlearn-primary) !important;
        transform: translateX(20px);
    }
    .sl-feature-typo .sl-typo-row:hover .sl-row-arrow {
        opacity: 1 !important;
        transform: translateX(10px);
    }
    
    /* Media reveal logic */
    .sl-feature-typo .sl-typo-media {
        opacity: 0;
        transform: translateY(-50%) scale(0.95);
        transition: opacity 0.4s ease, transform 0.4s ease;
    }
    .sl-feature-typo .sl-typo-row:hover .sl-typo-media {
        opacity: 1;
        transform: translateY(-50%) scale(1);
    }
}
`,
        js: `(function() { const root = document.querySelector('.sl-feature-typo'); if (!root) return; })();`
    },

    // -----------------------------------------------------------------------------
    // 8. Learning Journey (Process/Curriculum)
    // -----------------------------------------------------------------------------
    {
        id: 'feature-learning-journey',
        meta: {
            name: 'Learning Journey',
            category: 'Features',
            variant: 'Curriculum Timeline',
            description: 'Features presented as a connected LMS journey from discovery to certification.',
            tags: ['feature', 'timeline', 'journey', 'process', 'curriculum'],
            image_count: 4
        },
        html: `<!-- sl-section: feature-learning-journey | v1.0 -->
<section class="sl-feature-journey py-6 sl-bg-main position-relative">
    <div class="container">
        
        <div class="text-center mb-5 pb-4">
            <h2 class="display-6 fw-bold sl-text-emphasis mb-3" data-sl-edit="text">The Student Journey</h2>
            <p class="fs-5 sl-text-muted mx-auto" style="max-width: 600px;" data-sl-edit="text">A seamlessly connected experience from day one to graduation.</p>
        </div>

        <div class="row position-relative">
            <!-- Connecting Line Background -->
            <div class="position-absolute top-50 start-0 w-100 border-top border-2 border-dashed sl-border d-none d-lg-block z-0" style="margin-top: -100px;"></div>

            <!-- Step 1 -->
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0 position-relative z-1 sl-journey-step">
                <div class="text-center px-3">
                    <div class="sl-step-media mx-auto rounded-circle overflow-hidden sl-border sl-bg-card mb-4 position-relative shadow-sm" style="width: 140px; height: 140px; border-width: 4px !important;">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" class="w-100 h-100 object-fit-cover position-relative z-1 sl-step-img" loading="lazy">
                        <div class="position-absolute top-50 start-50 translate-middle z-2 sl-step-number bg-white text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold shadow" style="width: 32px; height: 32px;">1</div>
                    </div>
                    <h5 class="fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Discover & Enroll</h5>
                    <p class="sl-text-muted small mb-0" data-sl-edit="text">Browse the beautiful course catalog and enroll with a single click using integrated payments.</p>
                </div>
            </div>

            <!-- Step 2 -->
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0 position-relative z-1 sl-journey-step">
                <div class="text-center px-3">
                    <div class="sl-step-media mx-auto rounded-circle overflow-hidden sl-border sl-bg-card mb-4 position-relative shadow-sm" style="width: 140px; height: 140px; border-width: 4px !important; margin-top: 40px;">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" class="w-100 h-100 object-fit-cover position-relative z-1 sl-step-img" loading="lazy">
                        <div class="position-absolute top-50 start-50 translate-middle z-2 sl-step-number bg-white text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold shadow" style="width: 32px; height: 32px;">2</div>
                    </div>
                    <h5 class="fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Learn & Engage</h5>
                    <p class="sl-text-muted small mb-0" data-sl-edit="text">Consume multimedia content, participate in forums, and attend live synchronous sessions.</p>
                </div>
            </div>

            <!-- Step 3 -->
            <div class="col-lg-3 col-md-6 mb-5 mb-md-0 position-relative z-1 sl-journey-step">
                <div class="text-center px-3">
                    <div class="sl-step-media mx-auto rounded-circle overflow-hidden sl-border sl-bg-card mb-4 position-relative shadow-sm" style="width: 140px; height: 140px; border-width: 4px !important;">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" class="w-100 h-100 object-fit-cover position-relative z-1 sl-step-img" loading="lazy">
                        <div class="position-absolute top-50 start-50 translate-middle z-2 sl-step-number bg-white text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold shadow" style="width: 32px; height: 32px;">3</div>
                    </div>
                    <h5 class="fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Practice & Assess</h5>
                    <p class="sl-text-muted small mb-0" data-sl-edit="text">Take automated quizzes and submit assignments through the secure grading portal.</p>
                </div>
            </div>

            <!-- Step 4 -->
            <div class="col-lg-3 col-md-6 position-relative z-1 sl-journey-step">
                <div class="text-center px-3">
                    <div class="sl-step-media mx-auto rounded-circle overflow-hidden border-primary sl-bg-primary-subtle mb-4 position-relative shadow-sm" style="width: 140px; height: 140px; border-width: 4px !important; margin-top: 40px; border-style: solid;">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" class="w-100 h-100 object-fit-cover position-relative z-1 sl-step-img opacity-75" loading="lazy">
                        <div class="position-absolute top-50 start-50 translate-middle z-2 sl-step-number sl-bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold shadow" style="width: 32px; height: 32px;"><i class="fa fa-trophy small"></i></div>
                    </div>
                    <h5 class="fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Certify & Graduate</h5>
                    <p class="sl-text-muted small mb-0" data-sl-edit="text">Automatically receive verifiable blockchain credentials upon successful completion.</p>
                </div>
            </div>

        </div>
    </div>
</section>`,
        css: baseCss + `
.sl-feature-journey .py-6 { padding-top: 5rem; padding-bottom: 5rem; }
.sl-feature-journey .sl-step-media { transition: transform 0.3s ease, border-color 0.3s ease; cursor: pointer; }
.sl-feature-journey .sl-step-img { transition: transform 0.5s ease; }

.sl-feature-journey .sl-journey-step:hover .sl-step-media {
    transform: translateY(-10px);
    border-color: var(--smartlearn-primary) !important;
}
.sl-feature-journey .sl-journey-step:hover .sl-step-img {
    transform: scale(1.1);
}

@media (prefers-reduced-motion: no-preference) {
    .sl-feature-journey .sl-journey-step {
        opacity: 0;
        transform: translateY(30px);
        animation: slFadeUp 0.6s ease forwards;
    }
    .sl-feature-journey .sl-journey-step:nth-child(2) { animation-delay: 0.1s; }
    .sl-feature-journey .sl-journey-step:nth-child(3) { animation-delay: 0.2s; }
    .sl-feature-journey .sl-journey-step:nth-child(4) { animation-delay: 0.3s; }
    .sl-feature-journey .sl-journey-step:nth-child(5) { animation-delay: 0.4s; }
}
@keyframes slFadeUp {
    to { opacity: 1; transform: translateY(0); }
}
`,
        js: `(function() { const root = document.querySelector('.sl-feature-journey'); if (!root) return; })();`
    },

    // -----------------------------------------------------------------------------
    // 9. Dashboard Showcase (Actual Moodle Experience)
    // -----------------------------------------------------------------------------
    {
        id: 'feature-dashboard-showcase',
        meta: {
            name: 'Dashboard Showcase',
            category: 'Features',
            variant: 'Product Mockup',
            description: 'A massive visual showcase of the actual student dashboard UI.',
            tags: ['feature', 'dashboard', 'showcase', 'mockup', 'moodle'],
            image_count: 1
        },
        html: `<!-- sl-section: feature-dashboard-showcase | v1.0 -->
<section class="sl-feature-dashboard py-6 sl-bg-main overflow-hidden">
    <div class="container">
        
        <div class="row justify-content-center text-center mb-5">
            <div class="col-lg-8">
                <span class="badge sl-bg-primary-subtle sl-text-primary px-3 py-2 rounded-pill mb-3 fw-bold" data-sl-edit="text">THE EXPERIENCE</span>
                <h2 class="display-5 fw-bold sl-text-emphasis mb-4" data-sl-edit="text">A dashboard that students actually love using.</h2>
                <p class="fs-5 sl-text-muted" data-sl-edit="text">We've redesigned the Moodle dashboard from the ground up. It's clean, intuitive, and puts your progress front and center.</p>
            </div>
        </div>

        <!-- 3D Perspective Dashboard Image -->
        <div class="row justify-content-center mb-5 position-relative">
            <div class="col-12 px-md-5">
                <div class="sl-dashboard-mockup position-relative rounded-4 overflow-hidden shadow-lg sl-border sl-bg-card mx-auto" style="aspect-ratio: 16/9; max-width: 1000px; transform: perspective(1000px) rotateX(5deg) scale(0.95);">
                    <div class="sl-media-fallback w-100 h-100 position-absolute z-0">
                        <!-- Mockup placeholder UI if image fails -->
                        <div class="w-100 h-100 d-flex flex-column p-4 opacity-25">
                            <div class="d-flex justify-content-between mb-4 border-bottom pb-3">
                                <div class="bg-secondary rounded w-25" style="height: 20px;"></div>
                                <div class="bg-secondary rounded-circle" style="width: 32px; height: 32px;"></div>
                            </div>
                            <div class="row flex-grow-1">
                                <div class="col-3 border-end"><div class="bg-secondary rounded w-100 mb-2" style="height: 15px;"></div><div class="bg-secondary rounded w-75" style="height: 15px;"></div></div>
                                <div class="col-9 p-4"><div class="bg-secondary rounded w-50 mb-4" style="height: 30px;"></div><div class="row"><div class="col-4"><div class="bg-secondary rounded w-100 h-100" style="min-height: 150px;"></div></div></div></div>
                            </div>
                        </div>
                    </div>
                    <!-- High-res dashboard screenshot -->
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Student Dashboard Interface" class="w-100 h-100 object-fit-cover position-relative z-1" loading="lazy">
                    
                    <!-- Floating overlay widgets -->
                    <div class="position-absolute sl-floating-widget sl-bg-card shadow-lg rounded-3 p-3 sl-border z-2 d-none d-md-flex align-items-center gap-3" style="bottom: -20px; left: -20px; animation-delay: 0s;">
                        <i class="fa fa-bell text-warning fs-3"></i>
                        <div>
                            <div class="fw-bold sl-text-emphasis text-sm">Assignment Due</div>
                            <div class="sl-text-muted small">In 2 hours</div>
                        </div>
                    </div>

                    <div class="position-absolute sl-floating-widget sl-bg-primary text-white shadow-lg rounded-3 p-3 z-2 d-none d-lg-flex flex-column justify-content-center align-items-center" style="top: 40px; right: -30px; animation-delay: 1.5s;">
                        <div class="fs-4 fw-bold">95%</div>
                        <div class="small opacity-75">Course Progress</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Text Features Below Mockup -->
        <div class="row g-4 mt-4 justify-content-center">
            <div class="col-md-4 text-center px-4">
                <i class="fa fa-tachometer sl-text-primary fs-2 mb-3"></i>
                <h5 class="fw-bold sl-text-emphasis" data-sl-edit="text">Performance Overview</h5>
                <p class="sl-text-muted small" data-sl-edit="text">Instant visualization of grades, upcoming deadlines, and missing assignments on login.</p>
            </div>
            <div class="col-md-4 text-center px-4">
                <i class="fa fa-bolt sl-text-primary fs-2 mb-3"></i>
                <h5 class="fw-bold sl-text-emphasis" data-sl-edit="text">Quick Actions</h5>
                <p class="sl-text-muted small" data-sl-edit="text">Jump straight back into the last viewed lecture or resume a saved quiz immediately.</p>
            </div>
            <div class="col-md-4 text-center px-4">
                <i class="fa fa-calendar sl-text-primary fs-2 mb-3"></i>
                <h5 class="fw-bold sl-text-emphasis" data-sl-edit="text">Unified Timeline</h5>
                <p class="sl-text-muted small" data-sl-edit="text">A consolidated view of all campus events, live seminars, and due dates across all courses.</p>
            </div>
        </div>

    </div>
</section>`,
        css: baseCss + `
.sl-feature-dashboard .py-6 { padding-top: 5rem; padding-bottom: 5rem; }

.sl-feature-dashboard .sl-dashboard-mockup {
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.6s ease;
}

@media (hover: hover) and (prefers-reduced-motion: no-preference) {
    .sl-feature-dashboard .sl-dashboard-mockup:hover {
        transform: perspective(1000px) rotateX(0deg) scale(1) !important;
        box-shadow: 0 2rem 4rem rgba(0,0,0,0.12) !important;
    }
}

.sl-feature-dashboard .sl-floating-widget {
    animation: slFloat 6s ease-in-out infinite;
}

@keyframes slFloat {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
    .sl-feature-dashboard .sl-floating-widget { animation: none; }
    .sl-feature-dashboard .sl-dashboard-mockup { transform: scale(1) !important; }
}
`,
        js: `(function() { const root = document.querySelector('.sl-feature-dashboard'); if (!root) return; })();`
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
console.log('Successfully generated Feature Sections 6-9 and updated catalog.json');
