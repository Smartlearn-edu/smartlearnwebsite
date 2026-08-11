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
    // 1. Asymmetrical Bento (Visual showcase)
    // -----------------------------------------------------------------------------
    {
        id: 'feature-bento',
        meta: {
            name: 'Asymmetrical Bento',
            category: 'Features',
            variant: 'Bento Grid',
            description: 'A trendy bento grid using LMS UI fragments and media to showcase features like AI, Analytics, and Grading.',
            tags: ['feature', 'bento', 'grid', 'modern', 'lms'],
            image_count: 3
        },
        html: `<!-- sl-section: feature-bento | v1.0 -->
<section class="sl-feature-bento py-6 sl-bg-main">
    <div class="container">
        <div class="text-center mb-5 pb-3">
            <span class="badge sl-bg-primary-subtle sl-text-primary px-3 py-2 rounded-pill mb-3 fw-bold" data-sl-edit="text">POWERFUL PLATFORM</span>
            <h2 class="display-5 fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Everything you need to succeed</h2>
            <p class="lead sl-text-muted mx-auto" style="max-width: 700px;" data-sl-edit="text">A complete ecosystem designed to make learning intuitive, managing effortless, and success inevitable.</p>
        </div>

        <div class="row g-4">
            <!-- Large Hero Bento (Spans 2 columns on desktop) -->
            <div class="col-lg-8">
                <div class="sl-bento-item sl-bg-card rounded-4 position-relative overflow-hidden h-100 d-flex flex-column sl-border">
                    <div class="p-4 p-md-5 z-1">
                        <div class="d-inline-flex align-items-center justify-content-center rounded-3 sl-bg-primary sl-text-white mb-4" style="width: 48px; height: 48px;">
                            <i class="fa fa-magic fs-4"></i>
                        </div>
                        <h3 class="fw-bold sl-text-emphasis mb-2" data-sl-edit="text">AI-Powered Learning Paths</h3>
                        <p class="sl-text-muted mb-0 w-75" data-sl-edit="text">Personalized course recommendations that adapt to student performance in real time.</p>
                    </div>
                    <div class="sl-media-container mt-auto position-relative" style="height: 250px;">
                        <div class="sl-media-fallback w-100 h-100 position-absolute top-0 start-0"></div>
                        <img src="https://picsum.photos/seed/slbento1/800/400" alt="AI Dashboard Mockup" class="w-100 h-100 object-fit-cover position-relative z-1 sl-bento-img" loading="lazy">
                        <!-- Glassmorphism overlay for UI fragment -->
                        <div class="position-absolute bottom-0 end-0 m-4 p-3 rounded-3 sl-glass-panel z-2 d-none d-md-block shadow">
                            <div class="d-flex align-items-center gap-3">
                                <i class="fa fa-line-chart sl-text-primary fs-3"></i>
                                <div>
                                    <div class="fw-bold sl-text-emphasis text-sm">Learning Efficiency</div>
                                    <div class="sl-text-primary fw-bolder">+47%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Square Bento -->
            <div class="col-lg-4">
                <div class="sl-bento-item sl-bg-card rounded-4 p-4 p-md-5 h-100 d-flex flex-column sl-border">
                    <div class="d-inline-flex align-items-center justify-content-center rounded-3 sl-bg-primary-subtle sl-text-primary mb-4" style="width: 48px; height: 48px;">
                        <i class="fa fa-check-circle-o fs-4"></i>
                    </div>
                    <h3 class="fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Automated Grading</h3>
                    <p class="sl-text-muted mb-4" data-sl-edit="text">Save hours every week with intelligent assessment tools and instant feedback mechanisms.</p>
                    <!-- UI Fragment representation -->
                    <div class="mt-auto rounded-3 sl-border p-3 d-flex flex-column gap-2" style="background-color: var(--smartlearn-bg);">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="small sl-text-emphasis fw-medium">Midterm Exam</span>
                            <span class="badge bg-success rounded-pill">A+</span>
                        </div>
                        <div class="progress" style="height: 6px;">
                            <div class="progress-bar bg-success" style="width: 95%"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Vertical Bento -->
            <div class="col-lg-4">
                <div class="sl-bento-item sl-bg-card rounded-4 p-4 p-md-5 h-100 d-flex flex-column sl-border">
                    <div class="d-inline-flex align-items-center justify-content-center rounded-3 sl-bg-primary-subtle sl-text-primary mb-4" style="width: 48px; height: 48px;">
                        <i class="fa fa-pie-chart fs-4"></i>
                    </div>
                    <h3 class="fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Deep Analytics</h3>
                    <p class="sl-text-muted mb-4" data-sl-edit="text">Visualize engagement and pinpoint at-risk students before they fall behind.</p>
                    <div class="mt-auto rounded-3 sl-border p-3 d-flex align-items-end justify-content-between" style="background-color: var(--smartlearn-bg); height: 120px;">
                        <!-- CSS Bar Chart -->
                        <div class="sl-bg-primary-subtle rounded-top w-100 mx-1" style="height: 40%"></div>
                        <div class="sl-bg-primary-subtle rounded-top w-100 mx-1" style="height: 70%"></div>
                        <div class="sl-bg-primary rounded-top w-100 mx-1 shadow-sm" style="height: 100%"></div>
                        <div class="sl-bg-primary-subtle rounded-top w-100 mx-1" style="height: 60%"></div>
                    </div>
                </div>
            </div>

            <!-- Wide Bento (Spans 2 cols) -->
            <div class="col-lg-8">
                <div class="sl-bento-item sl-bg-card rounded-4 position-relative overflow-hidden h-100 d-flex flex-column flex-md-row sl-border">
                    <div class="p-4 p-md-5 z-1 col-md-6 d-flex flex-column justify-content-center">
                        <div class="d-inline-flex align-items-center justify-content-center rounded-3 sl-bg-primary-subtle sl-text-primary mb-4" style="width: 48px; height: 48px;">
                            <i class="fa fa-certificate fs-4"></i>
                        </div>
                        <h3 class="fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Verifiable Certificates</h3>
                        <p class="sl-text-muted mb-0" data-sl-edit="text">Automatically issue secure, shareable credentials instantly upon course completion.</p>
                    </div>
                    <div class="col-md-6 position-relative p-0 m-0">
                        <div class="sl-media-fallback w-100 h-100 position-absolute top-0 start-0"></div>
                        <img src="https://picsum.photos/seed/slbento2/600/600" alt="Certificate Demo" class="w-100 h-100 object-fit-cover sl-bento-img" loading="lazy" style="min-height: 250px;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`,
        css: baseCss + `
.sl-feature-bento .py-6 { padding-top: 5rem; padding-bottom: 5rem; }
.sl-feature-bento .sl-bento-item {
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s ease, box-shadow 0.3s ease;
}
.sl-feature-bento .sl-bento-item:hover {
    transform: translateY(-5px);
    border-color: var(--smartlearn-primary) !important;
    box-shadow: 0 1rem 3rem rgba(0,0,0,0.08) !important;
}
.sl-feature-bento .sl-bento-img {
    transition: transform 0.6s ease;
}
.sl-feature-bento .sl-bento-item:hover .sl-bento-img {
    transform: scale(1.05);
}
.sl-feature-bento .sl-glass-panel {
    background: color-mix(in srgb, var(--smartlearn-card-bg) 85%, transparent);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--smartlearn-card-border);
}
`,
        js: `(function() { const root = document.querySelector('.sl-feature-bento'); if (!root) return; })();`
    },

    // -----------------------------------------------------------------------------
    // 2. Interactive Tabs (Feature exploration)
    // -----------------------------------------------------------------------------
    {
        id: 'feature-interactive-tabs',
        meta: {
            name: 'Interactive Tab Reveal',
            category: 'Features',
            variant: 'Tabs',
            description: 'SaaS-style vertical tabs that swap out a large media showcase when clicked or tapped.',
            tags: ['feature', 'tabs', 'interactive', 'saas', 'media'],
            image_count: 3
        },
        html: `<!-- sl-section: feature-interactive-tabs | v1.0 -->
<section class="sl-feature-tabs py-6 sl-bg-main">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-5 mb-5 mb-lg-0 pe-lg-5">
                <h2 class="display-6 fw-bold sl-text-emphasis mb-4" data-sl-edit="text">Explore the platform</h2>
                <p class="fs-5 sl-text-muted mb-5" data-sl-edit="text">Everything is connected. From course creation to student graduation.</p>
                
                <div class="sl-tab-list d-flex flex-column gap-3" role="tablist">
                    <!-- Tab 1 -->
                    <button class="sl-tab-btn sl-bg-main sl-border text-start p-4 rounded-4 active" role="tab" aria-selected="true" data-bs-target="#sl-tab-pane-1">
                        <div class="d-flex align-items-center mb-2">
                            <i class="fa fa-pencil-square-o fs-4 me-3 sl-tab-icon"></i>
                            <h4 class="fw-bold m-0 sl-tab-title" data-sl-edit="text">Course Builder</h4>
                        </div>
                        <p class="sl-text-muted mb-0 sl-tab-desc" data-sl-edit="text">Drag and drop multimedia, quizzes, and assignments into a cohesive journey.</p>
                    </button>
                    <!-- Tab 2 -->
                    <button class="sl-tab-btn sl-bg-main sl-border text-start p-4 rounded-4" role="tab" aria-selected="false" data-bs-target="#sl-tab-pane-2">
                        <div class="d-flex align-items-center mb-2">
                            <i class="fa fa-users fs-4 me-3 sl-tab-icon"></i>
                            <h4 class="fw-bold m-0 sl-tab-title" data-sl-edit="text">Student Engagement</h4>
                        </div>
                        <p class="sl-text-muted mb-0 sl-tab-desc" data-sl-edit="text">Keep learners active with forums, real-time chat, and peer reviews.</p>
                    </button>
                    <!-- Tab 3 -->
                    <button class="sl-tab-btn sl-bg-main sl-border text-start p-4 rounded-4" role="tab" aria-selected="false" data-bs-target="#sl-tab-pane-3">
                        <div class="d-flex align-items-center mb-2">
                            <i class="fa fa-shield fs-4 me-3 sl-tab-icon"></i>
                            <h4 class="fw-bold m-0 sl-tab-title" data-sl-edit="text">Secure Assessments</h4>
                        </div>
                        <p class="sl-text-muted mb-0 sl-tab-desc" data-sl-edit="text">Built-in proctoring tools and secure browser locking for high-stakes exams.</p>
                    </button>
                </div>
            </div>
            
            <div class="col-lg-7">
                <div class="sl-tab-content-container position-relative rounded-4 overflow-hidden shadow-lg sl-border sl-bg-card" style="aspect-ratio: 4/3;">
                    
                    <!-- Pane 1 -->
                    <div id="sl-tab-pane-1" class="sl-tab-pane active position-absolute top-0 start-0 w-100 h-100">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://picsum.photos/seed/sltab1/1200/900" alt="Course Builder" class="w-100 h-100 object-fit-cover position-relative z-1" loading="lazy">
                    </div>
                    
                    <!-- Pane 2 -->
                    <div id="sl-tab-pane-2" class="sl-tab-pane position-absolute top-0 start-0 w-100 h-100">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://picsum.photos/seed/sltab2/1200/900" alt="Engagement" class="w-100 h-100 object-fit-cover position-relative z-1" loading="lazy">
                    </div>
                    
                    <!-- Pane 3 -->
                    <div id="sl-tab-pane-3" class="sl-tab-pane position-absolute top-0 start-0 w-100 h-100">
                        <!-- Video Fallback structure -->
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <video class="w-100 h-100 object-fit-cover position-relative z-1" poster="https://picsum.photos/seed/sltab3/1200/900" autoplay muted loop playsinline>
                            <!-- Empty src since we don't have a reliable generic video, relies on poster -->
                            <source src="" type="video/mp4">
                        </video>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</section>`,
        css: baseCss + `
.sl-feature-tabs .py-6 { padding-top: 5rem; padding-bottom: 5rem; }
.sl-feature-tabs .sl-tab-btn {
    transition: all 0.3s ease;
    border: 2px solid transparent !important;
    cursor: pointer;
}
.sl-feature-tabs .sl-tab-btn:hover, .sl-feature-tabs .sl-tab-btn:focus-visible {
    border-color: var(--smartlearn-card-border) !important;
    background-color: var(--smartlearn-card-bg) !important;
    outline: none;
}
.sl-feature-tabs .sl-tab-btn.active {
    border-color: var(--smartlearn-primary) !important;
    background-color: var(--smartlearn-card-bg) !important;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}
.sl-feature-tabs .sl-tab-btn .sl-tab-icon { transition: color 0.3s ease; color: var(--smartlearn-text-muted); }
.sl-feature-tabs .sl-tab-btn .sl-tab-title { transition: color 0.3s ease; color: var(--smartlearn-text); }
.sl-feature-tabs .sl-tab-btn.active .sl-tab-icon { color: var(--smartlearn-primary); }
.sl-feature-tabs .sl-tab-btn.active .sl-tab-title { color: var(--smartlearn-primary); }

.sl-feature-tabs .sl-tab-pane {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.4s ease, transform 0.4s ease;
    pointer-events: none;
    z-index: 0;
}
.sl-feature-tabs .sl-tab-pane.active {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
    z-index: 1;
}
`,
        js: `(function() {
    const root = document.querySelector('.sl-feature-tabs');
    if (!root) return;
    const btns = root.querySelectorAll('.sl-tab-btn');
    const panes = root.querySelectorAll('.sl-tab-pane');
    
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-bs-target').substring(1);
            
            // Deactivate all
            btns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            panes.forEach(p => p.classList.remove('active'));
            
            // Activate clicked
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            const targetPane = root.querySelector('#' + targetId);
            if (targetPane) targetPane.classList.add('active');
        });
    });
})();`
    },

    // -----------------------------------------------------------------------------
    // 3. Interactive Panels (Hover-Expand Accordion)
    // -----------------------------------------------------------------------------
    {
        id: 'feature-interactive-panels',
        meta: {
            name: 'Interactive Panels',
            category: 'Features',
            variant: 'Accordion',
            description: 'Immersive vertical panels that expand fluidly to reveal media on click/tap/hover.',
            tags: ['feature', 'panels', 'accordion', 'expand', 'immersive'],
            image_count: 4
        },
        html: `<!-- sl-section: feature-interactive-panels | v1.0 -->
<section class="sl-feature-panels py-6 sl-bg-main">
    <div class="container-fluid px-4 px-lg-5">
        <div class="text-center mb-5">
            <h2 class="display-6 fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Immersive Learning Environments</h2>
            <p class="fs-5 sl-text-muted mx-auto" style="max-width: 600px;" data-sl-edit="text">Dive into our specialized modules designed for absolute focus.</p>
        </div>
        
        <div class="sl-panels-container d-flex flex-column flex-lg-row gap-3 overflow-hidden rounded-4 sl-border" style="min-height: 500px; background-color: var(--smartlearn-card-bg);">
            
            <!-- Panel 1 -->
            <div class="sl-panel sl-border-primary position-relative overflow-hidden flex-grow-1 active" tabindex="0" role="button" aria-expanded="true">
                <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                <img src="https://picsum.photos/seed/slpanel1/800/1000" alt="Virtual Labs" class="sl-panel-bg position-absolute w-100 h-100 object-fit-cover z-1">
                <div class="sl-panel-overlay position-absolute top-0 start-0 w-100 h-100 z-2"></div>
                <div class="sl-panel-content position-absolute bottom-0 start-0 w-100 p-4 z-3 text-white d-flex flex-column justify-content-end h-100">
                    <div class="d-flex align-items-center gap-3 mb-3 sl-panel-header">
                        <div class="sl-panel-icon bg-white text-dark rounded-circle d-flex align-items-center justify-content-center shadow-sm" style="width: 40px; height: 40px; min-width: 40px;">
                            <i class="fa fa-flask"></i>
                        </div>
                        <h4 class="fw-bold m-0 text-white text-truncate" data-sl-edit="text">Virtual Labs</h4>
                    </div>
                    <div class="sl-panel-details overflow-hidden">
                        <p class="mb-0 fs-6 text-white-50" data-sl-edit="text">Safe, simulated environments where students can conduct experiments and learn by doing.</p>
                    </div>
                </div>
            </div>

            <!-- Panel 2 -->
            <div class="sl-panel position-relative overflow-hidden" tabindex="0" role="button" aria-expanded="false">
                <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                <img src="https://picsum.photos/seed/slpanel2/800/1000" alt="Live Seminars" class="sl-panel-bg position-absolute w-100 h-100 object-fit-cover z-1">
                <div class="sl-panel-overlay position-absolute top-0 start-0 w-100 h-100 z-2"></div>
                <div class="sl-panel-content position-absolute bottom-0 start-0 w-100 p-4 z-3 text-white d-flex flex-column justify-content-end h-100">
                    <div class="d-flex align-items-center gap-3 mb-3 sl-panel-header">
                        <div class="sl-panel-icon bg-white text-dark rounded-circle d-flex align-items-center justify-content-center shadow-sm" style="width: 40px; height: 40px; min-width: 40px;">
                            <i class="fa fa-video-camera"></i>
                        </div>
                        <h4 class="fw-bold m-0 text-white text-truncate" data-sl-edit="text">Live Seminars</h4>
                    </div>
                    <div class="sl-panel-details overflow-hidden">
                        <p class="mb-0 fs-6 text-white-50" data-sl-edit="text">Integrated video conferencing with real-time whiteboarding and Q&A sessions.</p>
                    </div>
                </div>
            </div>

            <!-- Panel 3 -->
            <div class="sl-panel position-relative overflow-hidden" tabindex="0" role="button" aria-expanded="false">
                <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                <img src="https://picsum.photos/seed/slpanel3/800/1000" alt="Code Sandbox" class="sl-panel-bg position-absolute w-100 h-100 object-fit-cover z-1">
                <div class="sl-panel-overlay position-absolute top-0 start-0 w-100 h-100 z-2"></div>
                <div class="sl-panel-content position-absolute bottom-0 start-0 w-100 p-4 z-3 text-white d-flex flex-column justify-content-end h-100">
                    <div class="d-flex align-items-center gap-3 mb-3 sl-panel-header">
                        <div class="sl-panel-icon bg-white text-dark rounded-circle d-flex align-items-center justify-content-center shadow-sm" style="width: 40px; height: 40px; min-width: 40px;">
                            <i class="fa fa-code"></i>
                        </div>
                        <h4 class="fw-bold m-0 text-white text-truncate" data-sl-edit="text">Code Sandbox</h4>
                    </div>
                    <div class="sl-panel-details overflow-hidden">
                        <p class="mb-0 fs-6 text-white-50" data-sl-edit="text">Browser-based IDE with instant compilation and syntax highlighting for CS courses.</p>
                    </div>
                </div>
            </div>

            <!-- Panel 4 -->
            <div class="sl-panel position-relative overflow-hidden" tabindex="0" role="button" aria-expanded="false">
                <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                <img src="https://picsum.photos/seed/slpanel4/800/1000" alt="Peer Review" class="sl-panel-bg position-absolute w-100 h-100 object-fit-cover z-1">
                <div class="sl-panel-overlay position-absolute top-0 start-0 w-100 h-100 z-2"></div>
                <div class="sl-panel-content position-absolute bottom-0 start-0 w-100 p-4 z-3 text-white d-flex flex-column justify-content-end h-100">
                    <div class="d-flex align-items-center gap-3 mb-3 sl-panel-header">
                        <div class="sl-panel-icon bg-white text-dark rounded-circle d-flex align-items-center justify-content-center shadow-sm" style="width: 40px; height: 40px; min-width: 40px;">
                            <i class="fa fa-comments-o"></i>
                        </div>
                        <h4 class="fw-bold m-0 text-white text-truncate" data-sl-edit="text">Peer Review</h4>
                    </div>
                    <div class="sl-panel-details overflow-hidden">
                        <p class="mb-0 fs-6 text-white-50" data-sl-edit="text">Structured workshops where students evaluate and learn from each other's work.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>`,
        css: baseCss + `
.sl-feature-panels .py-6 { padding-top: 5rem; padding-bottom: 5rem; }
.sl-feature-panels .sl-panels-container { padding: 0.5rem; }

/* Base Panel Styles */
.sl-feature-panels .sl-panel {
    border-radius: 0.75rem;
    transition: flex 0.5s cubic-bezier(0.25, 1, 0.5, 1), transform 0.3s ease;
    cursor: pointer;
    border: 2px solid transparent;
}
.sl-feature-panels .sl-panel:focus-visible { outline: 2px solid var(--smartlearn-primary); outline-offset: 2px; }

/* Desktop Flex Behavior (Horizontal) */
@media (min-width: 992px) {
    .sl-feature-panels .sl-panel { flex: 1; height: 100%; min-width: 80px; }
    .sl-feature-panels .sl-panel.active { flex: 5; border-color: var(--smartlearn-primary); }
    /* Hover support on desktop */
    @media (hover: hover) {
        .sl-feature-panels .sl-panels-container:hover .sl-panel { flex: 1; }
        .sl-feature-panels .sl-panels-container .sl-panel:hover { flex: 5; border-color: var(--smartlearn-primary); }
    }
}

/* Mobile Flex Behavior (Vertical) */
@media (max-width: 991px) {
    .sl-feature-panels .sl-panel { flex: 0 0 80px; min-height: 80px; }
    .sl-feature-panels .sl-panel.active { flex: 1 1 300px; min-height: 300px; border-color: var(--smartlearn-primary); }
}

/* Internal Visuals */
.sl-feature-panels .sl-panel-bg { filter: grayscale(80%); transition: filter 0.5s ease, transform 0.5s ease; }
.sl-feature-panels .sl-panel.active .sl-panel-bg { filter: grayscale(0%); transform: scale(1.05); }
@media (hover: hover) {
    .sl-feature-panels .sl-panel:hover .sl-panel-bg { filter: grayscale(0%); transform: scale(1.05); }
}

.sl-feature-panels .sl-panel-overlay {
    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%);
}

.sl-feature-panels .sl-panel-details {
    max-height: 0;
    opacity: 0;
    transition: max-height 0.4s ease, opacity 0.3s ease, margin 0.3s ease;
}
.sl-feature-panels .sl-panel.active .sl-panel-details {
    max-height: 100px;
    opacity: 1;
    margin-top: 1rem;
}
@media (hover: hover) {
    .sl-feature-panels .sl-panel:hover .sl-panel-details { max-height: 100px; opacity: 1; margin-top: 1rem; }
    .sl-feature-panels .sl-panels-container:hover .sl-panel:not(:hover) .sl-panel-details { max-height: 0; opacity: 0; margin-top: 0; }
}

.sl-feature-panels .sl-panel-icon { transition: background-color 0.3s ease, color 0.3s ease; }
.sl-feature-panels .sl-panel.active .sl-panel-icon { background-color: var(--smartlearn-primary) !important; color: #FFF !important; }
@media (hover: hover) {
    .sl-feature-panels .sl-panel:hover .sl-panel-icon { background-color: var(--smartlearn-primary) !important; color: #FFF !important; }
    .sl-feature-panels .sl-panels-container:hover .sl-panel:not(:hover) .sl-panel-icon { background-color: #FFF !important; color: #212529 !important; }
}
`,
        js: `(function() {
    const root = document.querySelector('.sl-feature-panels');
    if (!root) return;
    const panels = root.querySelectorAll('.sl-panel');
    
    // Tap/Click interaction for all devices
    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            panels.forEach(p => {
                p.classList.remove('active');
                p.setAttribute('aria-expanded', 'false');
            });
            panel.classList.add('active');
            panel.setAttribute('aria-expanded', 'true');
        });
        
        // Keyboard support
        panel.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                panel.click();
            }
        });
    });
})();`
    },

    // -----------------------------------------------------------------------------
    // 4. Classic Premium Grid (Institutional)
    // -----------------------------------------------------------------------------
    {
        id: 'feature-premium-grid',
        meta: {
            name: 'Classic Premium Grid',
            category: 'Features',
            variant: 'Grid',
            description: 'A polished 3x2 grid of elevated cards containing media and descriptions. Perfect for corporate/university sites.',
            tags: ['feature', 'grid', 'classic', 'institutional', 'premium'],
            image_count: 6
        },
        html: `<!-- sl-section: feature-premium-grid | v1.0 -->
<section class="sl-feature-grid py-6 sl-bg-main">
    <div class="container">
        <div class="text-center mb-5 pb-3">
            <h2 class="display-6 fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Academic Excellence</h2>
            <p class="lead sl-text-muted mx-auto" style="max-width: 600px;" data-sl-edit="text">Providing the foundational tools required for rigorous academic study and assessment.</p>
        </div>

        <div class="row g-4">
            <!-- Card 1 -->
            <div class="col-md-6 col-lg-4">
                <div class="sl-grid-card h-100 sl-bg-card rounded-4 overflow-hidden sl-border d-flex flex-column">
                    <div class="sl-card-img-wrapper position-relative overflow-hidden" style="height: 200px;">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://picsum.photos/seed/slgrid1/600/400" alt="Plagiarism Prevention" class="w-100 h-100 object-fit-cover position-relative z-1 sl-zoom-img">
                    </div>
                    <div class="p-4 d-flex flex-column flex-grow-1">
                        <div class="sl-icon-wrapper sl-bg-primary-subtle sl-text-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style="width: 48px; height: 48px; margin-top: -40px; position: relative; z-index: 2; border: 4px solid var(--smartlearn-card-bg);">
                            <i class="fa fa-shield"></i>
                        </div>
                        <h4 class="fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Plagiarism Prevention</h4>
                        <p class="sl-text-muted mb-0 flex-grow-1" data-sl-edit="text">Integrated scanning ensures academic integrity across all student submissions automatically.</p>
                    </div>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="col-md-6 col-lg-4">
                <div class="sl-grid-card h-100 sl-bg-card rounded-4 overflow-hidden sl-border d-flex flex-column">
                    <div class="sl-card-img-wrapper position-relative overflow-hidden" style="height: 200px;">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://picsum.photos/seed/slgrid2/600/400" alt="Advanced Rubrics" class="w-100 h-100 object-fit-cover position-relative z-1 sl-zoom-img">
                    </div>
                    <div class="p-4 d-flex flex-column flex-grow-1">
                        <div class="sl-icon-wrapper sl-bg-primary-subtle sl-text-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style="width: 48px; height: 48px; margin-top: -40px; position: relative; z-index: 2; border: 4px solid var(--smartlearn-card-bg);">
                            <i class="fa fa-list-alt"></i>
                        </div>
                        <h4 class="fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Advanced Rubrics</h4>
                        <p class="sl-text-muted mb-0 flex-grow-1" data-sl-edit="text">Define clear grading criteria with multi-level rubrics to provide consistent feedback.</p>
                    </div>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="col-md-6 col-lg-4">
                <div class="sl-grid-card h-100 sl-bg-card rounded-4 overflow-hidden sl-border d-flex flex-column">
                    <div class="sl-card-img-wrapper position-relative overflow-hidden" style="height: 200px;">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://picsum.photos/seed/slgrid3/600/400" alt="SCORM Support" class="w-100 h-100 object-fit-cover position-relative z-1 sl-zoom-img">
                    </div>
                    <div class="p-4 d-flex flex-column flex-grow-1">
                        <div class="sl-icon-wrapper sl-bg-primary-subtle sl-text-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style="width: 48px; height: 48px; margin-top: -40px; position: relative; z-index: 2; border: 4px solid var(--smartlearn-card-bg);">
                            <i class="fa fa-cubes"></i>
                        </div>
                        <h4 class="fw-bold sl-text-emphasis mb-2" data-sl-edit="text">SCORM Support</h4>
                        <p class="sl-text-muted mb-0 flex-grow-1" data-sl-edit="text">Full compatibility with standard e-learning packages to easily migrate existing content.</p>
                    </div>
                </div>
            </div>

            <!-- Card 4 -->
            <div class="col-md-6 col-lg-4">
                <div class="sl-grid-card h-100 sl-bg-card rounded-4 overflow-hidden sl-border d-flex flex-column">
                    <div class="sl-card-img-wrapper position-relative overflow-hidden" style="height: 200px;">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://picsum.photos/seed/slgrid4/600/400" alt="Attendance Tracking" class="w-100 h-100 object-fit-cover position-relative z-1 sl-zoom-img">
                    </div>
                    <div class="p-4 d-flex flex-column flex-grow-1">
                        <div class="sl-icon-wrapper sl-bg-primary-subtle sl-text-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style="width: 48px; height: 48px; margin-top: -40px; position: relative; z-index: 2; border: 4px solid var(--smartlearn-card-bg);">
                            <i class="fa fa-calendar-check-o"></i>
                        </div>
                        <h4 class="fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Attendance Tracking</h4>
                        <p class="sl-text-muted mb-0 flex-grow-1" data-sl-edit="text">Monitor student participation across both physical and virtual classroom sessions.</p>
                    </div>
                </div>
            </div>

            <!-- Card 5 -->
            <div class="col-md-6 col-lg-4">
                <div class="sl-grid-card h-100 sl-bg-card rounded-4 overflow-hidden sl-border d-flex flex-column">
                    <div class="sl-card-img-wrapper position-relative overflow-hidden" style="height: 200px;">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://picsum.photos/seed/slgrid5/600/400" alt="Accessible Design" class="w-100 h-100 object-fit-cover position-relative z-1 sl-zoom-img">
                    </div>
                    <div class="p-4 d-flex flex-column flex-grow-1">
                        <div class="sl-icon-wrapper sl-bg-primary-subtle sl-text-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style="width: 48px; height: 48px; margin-top: -40px; position: relative; z-index: 2; border: 4px solid var(--smartlearn-card-bg);">
                            <i class="fa fa-universal-access"></i>
                        </div>
                        <h4 class="fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Accessible Design</h4>
                        <p class="sl-text-muted mb-0 flex-grow-1" data-sl-edit="text">WCAG compliant interfaces ensuring learning is available and equitable for everyone.</p>
                    </div>
                </div>
            </div>

            <!-- Card 6 -->
            <div class="col-md-6 col-lg-4">
                <div class="sl-grid-card h-100 sl-bg-card rounded-4 overflow-hidden sl-border d-flex flex-column">
                    <div class="sl-card-img-wrapper position-relative overflow-hidden" style="height: 200px;">
                        <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                        <img src="https://picsum.photos/seed/slgrid6/600/400" alt="Secure Data" class="w-100 h-100 object-fit-cover position-relative z-1 sl-zoom-img">
                    </div>
                    <div class="p-4 d-flex flex-column flex-grow-1">
                        <div class="sl-icon-wrapper sl-bg-primary-subtle sl-text-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style="width: 48px; height: 48px; margin-top: -40px; position: relative; z-index: 2; border: 4px solid var(--smartlearn-card-bg);">
                            <i class="fa fa-lock"></i>
                        </div>
                        <h4 class="fw-bold sl-text-emphasis mb-2" data-sl-edit="text">Secure Data</h4>
                        <p class="sl-text-muted mb-0 flex-grow-1" data-sl-edit="text">Enterprise-grade encryption protects sensitive student records and intellectual property.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>`,
        css: baseCss + `
.sl-feature-grid .py-6 { padding-top: 5rem; padding-bottom: 5rem; }
.sl-feature-grid .sl-grid-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.sl-feature-grid .sl-grid-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 1rem 3rem rgba(0,0,0,0.08) !important;
    border-color: var(--smartlearn-primary) !important;
}
.sl-feature-grid .sl-zoom-img {
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.sl-feature-grid .sl-grid-card:hover .sl-zoom-img {
    transform: scale(1.08);
}
.sl-feature-grid .sl-icon-wrapper {
    transition: background-color 0.3s ease, color 0.3s ease;
}
.sl-feature-grid .sl-grid-card:hover .sl-icon-wrapper {
    background-color: var(--smartlearn-primary) !important;
    color: #FFFFFF !important;
}
`,
        js: `(function() { const root = document.querySelector('.sl-feature-grid'); if (!root) return; })();`
    },

    // -----------------------------------------------------------------------------
    // 5. Sticky Split-Scroll (Marketing)
    // -----------------------------------------------------------------------------
    {
        id: 'feature-sticky-split',
        meta: {
            name: 'Sticky Split-Scroll',
            category: 'Features',
            variant: 'Split',
            description: 'Storytelling layout. Sticky heading on the left, scrolling media feature cards on the right.',
            tags: ['feature', 'split', 'sticky', 'scroll', 'marketing'],
            image_count: 3
        },
        html: `<!-- sl-section: feature-sticky-split | v1.0 -->
<section class="sl-feature-sticky py-6 sl-bg-main position-relative">
    <div class="container">
        <div class="row">
            <!-- Left Side: Sticky Text -->
            <div class="col-lg-5 mb-5 mb-lg-0">
                <div class="position-sticky" style="top: 100px; padding-bottom: 2rem;">
                    <span class="badge sl-bg-primary-subtle sl-text-primary px-3 py-2 rounded-pill mb-3 fw-bold" data-sl-edit="text">THE ADVANTAGE</span>
                    <h2 class="display-4 fw-bold sl-text-emphasis mb-4" data-sl-edit="text">Why educators choose SmartLearn.</h2>
                    <p class="fs-5 sl-text-muted mb-5" data-sl-edit="text">We strip away the complexity of traditional LMS platforms, providing a fluid, modern interface that lets you focus on teaching, not troubleshooting.</p>
                    
                    <ul class="list-unstyled d-flex flex-column gap-3">
                        <li class="d-flex align-items-center gap-3">
                            <i class="fa fa-check-circle sl-text-primary fs-5"></i>
                            <span class="sl-text-emphasis fw-medium" data-sl-edit="text">Lightning-fast performance</span>
                        </li>
                        <li class="d-flex align-items-center gap-3">
                            <i class="fa fa-check-circle sl-text-primary fs-5"></i>
                            <span class="sl-text-emphasis fw-medium" data-sl-edit="text">Seamless mobile experience</span>
                        </li>
                        <li class="d-flex align-items-center gap-3">
                            <i class="fa fa-check-circle sl-text-primary fs-5"></i>
                            <span class="sl-text-emphasis fw-medium" data-sl-edit="text">Dedicated 24/7 support team</span>
                        </li>
                    </ul>
                    
                    <div class="mt-5">
                        <a href="#" class="btn sl-btn-primary rounded-pill px-4 py-2 fw-bold" data-sl-edit="link">Start free trial</a>
                    </div>
                </div>
            </div>

            <!-- Right Side: Scrolling Cards -->
            <div class="col-lg-6 offset-lg-1">
                <div class="d-flex flex-column gap-5 sl-scroll-cards">
                    
                    <!-- Scroll Card 1 -->
                    <div class="sl-scroll-card sl-bg-card rounded-4 p-4 p-md-5 sl-border shadow-sm">
                        <div class="rounded-3 overflow-hidden mb-4 position-relative sl-border" style="aspect-ratio: 16/9;">
                            <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                            <img src="https://picsum.photos/seed/slscroll1/800/450" alt="Drag and drop builder" class="w-100 h-100 object-fit-cover position-relative z-1" loading="lazy">
                        </div>
                        <h3 class="fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Intuitive Course Builder</h3>
                        <p class="sl-text-muted mb-0" data-sl-edit="text">Construct beautiful courses in minutes using our visual drag-and-drop editor. No coding required. Just layout your modules, upload content, and publish instantly.</p>
                    </div>

                    <!-- Scroll Card 2 -->
                    <div class="sl-scroll-card sl-bg-card rounded-4 p-4 p-md-5 sl-border shadow-sm">
                        <div class="rounded-3 overflow-hidden mb-4 position-relative sl-border" style="aspect-ratio: 16/9;">
                            <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                            <!-- Video fallback demonstration -->
                            <video class="w-100 h-100 object-fit-cover position-relative z-1" poster="https://picsum.photos/seed/slscroll2/800/450" autoplay muted loop playsinline>
                                <source src="" type="video/mp4">
                            </video>
                        </div>
                        <h3 class="fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Rich Media Integration</h3>
                        <p class="sl-text-muted mb-0" data-sl-edit="text">Embed interactive videos, SCORM packages, audio lectures, and high-resolution documents directly inline without pushing students to new windows.</p>
                    </div>

                    <!-- Scroll Card 3 -->
                    <div class="sl-scroll-card sl-bg-card rounded-4 p-4 p-md-5 sl-border shadow-sm">
                        <div class="rounded-3 overflow-hidden mb-4 position-relative sl-border" style="aspect-ratio: 16/9;">
                            <div class="sl-media-fallback w-100 h-100 position-absolute z-0"></div>
                            <img src="https://picsum.photos/seed/slscroll3/800/450" alt="Communication tools" class="w-100 h-100 object-fit-cover position-relative z-1" loading="lazy">
                        </div>
                        <h3 class="fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Unified Communications</h3>
                        <p class="sl-text-muted mb-0" data-sl-edit="text">Keep all student-teacher interactions in one place. Centralized messaging, forum threads, and assignment feedback built right into the dashboard.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>`,
        css: baseCss + `
.sl-feature-sticky .py-6 { padding-top: 5rem; padding-bottom: 5rem; }

/* The sticky behavior works naturally via Bootstrap's .position-sticky on desktop. 
   On mobile, it degrades gracefully to a stacked layout because the parent column loses its height constraint. */

.sl-feature-sticky .sl-scroll-card {
    transition: transform 0.4s ease, opacity 0.4s ease, border-color 0.3s ease;
}
.sl-feature-sticky .sl-scroll-card:hover {
    border-color: var(--smartlearn-primary) !important;
}

/* Optional: Intersection Observer fade-in effect if JS is enabled */
@media (prefers-reduced-motion: no-preference) {
    .sl-feature-sticky .sl-scroll-card.sl-fade-setup {
        opacity: 0.3;
        transform: translateY(40px);
    }
    .sl-feature-sticky .sl-scroll-card.sl-in-view {
        opacity: 1;
        transform: translateY(0);
    }
}
`,
        js: `(function() {
    const root = document.querySelector('.sl-feature-sticky');
    if (!root) return;
    
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const cards = root.querySelectorAll('.sl-scroll-card');
    cards.forEach(card => card.classList.add('sl-fade-setup'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('sl-in-view');
            }
        });
    }, {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    });

    cards.forEach(card => observer.observe(card));
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
console.log('Successfully generated Feature Sections 1-5 and updated catalog.json');
