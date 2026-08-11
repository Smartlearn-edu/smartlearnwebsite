const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const sectionsDir = path.join(publicDir, 'sections');
const catalogPath = path.join(publicDir, 'catalog.json');

const sections = [
    // 9. Instructor Spotlight (Human)
    {
        id: 'hero-instructor-spotlight',
        meta: {
            name: 'Instructor Spotlight Hero',
            category: 'Hero',
            variant: 'Instructor',
            description: 'Focuses on the instructor with a large cut-out portrait and orbiting UI badges.',
            tags: ['hero', 'instructor', 'human', 'badges'],
            image_count: 1
        },
        html: `<!-- sl-section: hero-instructor-spotlight | v1.0 -->
<div class="sl-hero-instructor position-relative overflow-hidden bg-body">
    <div class="container py-6 py-lg-8">
        <div class="row align-items-center">
            <div class="col-lg-6 position-relative z-2 sl-instructor-text">
                <div class="d-inline-flex align-items-center bg-danger bg-opacity-10 text-danger px-3 py-1 rounded-pill mb-4 fw-bold">
                    <span class="sl-pulsing-dot bg-danger rounded-circle me-2" style="width: 8px; height: 8px;"></span> Live Masterclass
                </div>
                
                <h1 class="display-3 fw-bold mb-4 sl-title-tracking" data-sl-edit="text">Learn directly <br>from the <span class="text-success position-relative">Masters.<svg class="position-absolute w-100 h-auto bottom-0 start-0 text-success opacity-50" style="margin-bottom: -10px;" viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 10 Q 50 20 100 10 T 200 10" stroke="currentColor" stroke-width="4" fill="none"/></svg></span></h1>
                
                <p class="fs-5 text-body-secondary mb-5 pe-lg-4" data-sl-edit="text">Stop learning from theorists. Start learning from practitioners who have actually built billion-dollar companies.</p>
                
                <div class="d-flex flex-wrap align-items-center gap-4 mb-5">
                    <a href="#" class="btn btn-success btn-lg rounded-pill px-5 py-3 fw-bold shadow-sm" data-sl-edit="text">Meet the Instructors</a>
                    
                    <div class="d-flex align-items-center">
                        <div class="me-2 text-warning fs-5">
                            <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>
                        </div>
                        <span class="fw-bold" data-sl-edit="text">4.9/5</span>
                        <span class="text-body-secondary ms-2" data-sl-edit="text">(12k+ Reviews)</span>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-6 position-relative sl-instructor-stage mt-5 mt-lg-0">
                <!-- Decorative background blob -->
                <div class="position-absolute bg-success rounded-circle opacity-10 sl-blob-bg" style="width: 500px; height: 500px; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 0;"></div>
                
                <!-- Main Instructor Cutout Image -->
                <div class="position-relative z-1 text-center">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" alt="Instructor" class="img-fluid sl-instructor-img position-relative" style="max-height: 600px; mask-image: linear-gradient(to bottom, black 80%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%); object-fit: contain;" data-sl-edit="image">
                </div>
                
                <!-- Orbiting Badges -->
                <div class="sl-orbit-badge sl-badge-1 bg-body border border-secondary-subtle p-2 rounded-4 shadow-lg position-absolute d-flex align-items-center gap-2" style="top: 15%; left: 0; z-index: 2;">
                    <div class="bg-success text-white rounded-3 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;"><i class="fa fa-check"></i></div>
                    <div>
                        <div class="fw-bold lh-1 fs-6" data-sl-edit="text">15+ Years</div>
                        <small class="text-body-secondary" data-sl-edit="text">Experience</small>
                    </div>
                </div>
                
                <div class="sl-orbit-badge sl-badge-2 bg-body border border-secondary-subtle p-2 rounded-4 shadow-lg position-absolute d-flex align-items-center gap-2" style="bottom: 25%; right: -5%; z-index: 2;">
                    <div class="bg-info text-white rounded-3 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;"><i class="fa fa-users"></i></div>
                    <div>
                        <div class="fw-bold lh-1 fs-6" data-sl-edit="text">50k+ Students</div>
                        <small class="text-body-secondary" data-sl-edit="text">Enrolled globally</small>
                    </div>
                </div>
                
                <div class="sl-orbit-badge sl-badge-3 bg-body border border-secondary-subtle p-2 rounded-4 shadow position-absolute d-flex align-items-center gap-2" style="top: 40%; right: 10%; z-index: -1;">
                    <div class="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 30px; height: 30px;"><i class="fa fa-certificate"></i></div>
                    <span class="fw-bold small pe-2" data-sl-edit="text">Certified</span>
                </div>
            </div>
        </div>
    </div>
</div>`,
        css: `.sl-hero-instructor {
    min-height: 85vh;
}
.sl-hero-instructor .sl-title-tracking {
    letter-spacing: -0.03em;
}
.sl-hero-instructor .sl-pulsing-dot {
    animation: slPulseRed 1.5s infinite;
}
@keyframes slPulseRed {
    0% { box-shadow: 0 0 0 0 rgba(220, 53, 69, 0.7); }
    70% { box-shadow: 0 0 0 10px rgba(220, 53, 69, 0); }
    100% { box-shadow: 0 0 0 0 rgba(220, 53, 69, 0); }
}
.sl-hero-instructor .sl-blob-bg {
    animation: slScalePulse 6s ease-in-out infinite alternate;
}
@keyframes slScalePulse {
    0% { transform: translate(-50%, -50%) scale(1); }
    100% { transform: translate(-50%, -50%) scale(1.1); }
}
.sl-hero-instructor .sl-orbit-badge {
    transition: transform 0.3s ease;
}
.sl-hero-instructor .sl-orbit-badge:hover {
    transform: scale(1.05) translateY(-5px) !important;
}
.sl-hero-instructor .sl-badge-1 {
    animation: slFloatBadge 5s ease-in-out infinite;
}
.sl-hero-instructor .sl-badge-2 {
    animation: slFloatBadge 6s ease-in-out infinite 1s;
}
.sl-hero-instructor .sl-badge-3 {
    animation: slFloatBadge 4s ease-in-out infinite 2s;
}
@keyframes slFloatBadge {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
}`,
        js: `(function() {
    const root = document.querySelector('.sl-hero-instructor');
    if (!root) return;
})();`
    },

    // 10. Product Reveal (Student Dashboard)
    {
        id: 'hero-product-reveal',
        meta: {
            name: 'Product Reveal Hero',
            category: 'Hero',
            variant: 'Dashboard Mockup',
            description: 'Shows off the actual student dashboard UI with a stylized 3D CSS mockup.',
            tags: ['hero', 'product', 'dashboard', 'mockup', 'ui'],
            image_count: 0
        },
        html: `<!-- sl-section: hero-product-reveal | v1.0 -->
<div class="sl-hero-reveal position-relative overflow-hidden bg-body">
    <div class="container py-7 py-lg-8">
        <div class="row align-items-center">
            <div class="col-lg-5 position-relative z-2 mb-5 mb-lg-0">
                <h1 class="display-4 fw-bolder mb-4 text-body-emphasis sl-reveal-title" data-sl-edit="text">An LMS people <br><span class="text-success">actually love.</span></h1>
                <p class="fs-5 text-body-secondary mb-5 pe-lg-4" data-sl-edit="text">Experience a learning environment that doesn't feel like a chore. Gamified progress, beautiful UI, and social learning built-in.</p>
                
                <ul class="list-unstyled mb-5">
                    <li class="d-flex align-items-center mb-3"><i class="fa fa-check-circle text-success fs-5 me-3"></i> <span class="fw-medium text-body-emphasis" data-sl-edit="text">Personalized learning paths</span></li>
                    <li class="d-flex align-items-center mb-3"><i class="fa fa-check-circle text-success fs-5 me-3"></i> <span class="fw-medium text-body-emphasis" data-sl-edit="text">Real-time progress tracking</span></li>
                    <li class="d-flex align-items-center"><i class="fa fa-check-circle text-success fs-5 me-3"></i> <span class="fw-medium text-body-emphasis" data-sl-edit="text">Social forums & study groups</span></li>
                </ul>
                
                <a href="#" class="btn btn-success btn-lg rounded-3 px-5 py-3 fw-bold shadow-lg sl-hover-lift" data-sl-edit="link">Take a Product Tour</a>
            </div>
            
            <div class="col-lg-7">
                <!-- 3D CSS Mockup of Dashboard -->
                <div class="sl-dashboard-mockup rounded-4 shadow-lg bg-body overflow-hidden border border-2 border-secondary-subtle">
                    <!-- Browser header -->
                    <div class="bg-body-secondary p-3 d-flex align-items-center border-bottom">
                        <div class="d-flex gap-2 me-4">
                            <div class="rounded-circle bg-danger" style="width: 12px; height: 12px;"></div>
                            <div class="rounded-circle bg-warning" style="width: 12px; height: 12px;"></div>
                            <div class="rounded-circle bg-success" style="width: 12px; height: 12px;"></div>
                        </div>
                        <div class="bg-body rounded-pill px-3 py-1 text-body-secondary small w-50 text-center mx-auto border border-secondary-subtle" style="font-size: 10px;">smartlearn.edu/dashboard</div>
                    </div>
                    
                    <!-- Dashboard Body -->
                    <div class="p-4 bg-body-tertiary">
                        <div class="row g-3">
                            <div class="col-12 mb-2">
                                <h5 class="fw-bold" data-sl-edit="text">Welcome back, Sarah! 👋</h5>
                            </div>
                            
                            <!-- Progress Widget -->
                            <div class="col-md-8">
                                <div class="bg-body p-3 rounded-3 border border-secondary-subtle shadow-sm h-100 sl-mock-widget">
                                    <h6 class="fw-bold small text-body-secondary mb-3">CURRENT COURSE</h6>
                                    <div class="d-flex align-items-center gap-3">
                                        <div class="bg-success-subtle rounded-3" style="width: 60px; height: 60px;"></div>
                                        <div class="flex-grow-1">
                                            <div class="fw-bold mb-1">Advanced React Patterns</div>
                                            <div class="progress" style="height: 8px;">
                                                <div class="progress-bar bg-success" style="width: 65%;"></div>
                                            </div>
                                            <div class="small text-body-secondary mt-1">65% Completed</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Stats Widget -->
                            <div class="col-md-4">
                                <div class="bg-body p-3 rounded-3 border border-secondary-subtle shadow-sm h-100 sl-mock-widget" style="animation-delay: 0.2s;">
                                    <h6 class="fw-bold small text-body-secondary mb-3">WEEKLY GOAL</h6>
                                    <div class="d-flex align-items-center gap-3">
                                        <div class="rounded-circle border border-3 border-success d-flex align-items-center justify-content-center text-success fw-bold" style="width: 50px; height: 50px;">3/5</div>
                                        <div class="small fw-medium">Hours<br>studied</div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Modules Grid -->
                            <div class="col-4">
                                <div class="bg-body p-3 rounded-3 border border-secondary-subtle shadow-sm sl-mock-widget" style="animation-delay: 0.3s; height: 80px;"></div>
                            </div>
                            <div class="col-4">
                                <div class="bg-body p-3 rounded-3 border border-secondary-subtle shadow-sm sl-mock-widget" style="animation-delay: 0.4s; height: 80px;"></div>
                            </div>
                            <div class="col-4">
                                <div class="bg-body p-3 rounded-3 border border-secondary-subtle shadow-sm sl-mock-widget" style="animation-delay: 0.5s; height: 80px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,
        css: `.sl-hero-reveal {
    min-height: 85vh;
}
.sl-hero-reveal .sl-reveal-title {
    letter-spacing: -0.03em;
}
.sl-hero-reveal .sl-hover-lift {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.sl-hero-reveal .sl-hover-lift:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(13, 110, 253, 0.2) !important;
}

/* 3D Mockup Styling */
.sl-hero-reveal .sl-dashboard-mockup {
    transform: perspective(1000px) rotateY(-15deg) rotateX(5deg) scale(0.9);
    transform-origin: center right;
    box-shadow: -20px 20px 60px rgba(0,0,0,0.1) !important;
    animation: slMockupEntrance 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
}
.sl-hero-reveal .sl-mock-widget {
    opacity: 0;
    transform: translateY(15px);
    animation: slWidgetFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 0.8s; /* Start after mockup entrance */
}

@keyframes slMockupEntrance {
    0% { opacity: 0; transform: perspective(1000px) rotateY(-25deg) rotateX(10deg) scale(0.8) translateZ(-100px); }
    100% { opacity: 1; transform: perspective(1000px) rotateY(-15deg) rotateX(5deg) scale(0.9) translateZ(0); }
}
@keyframes slWidgetFade {
    to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 991px) {
    .sl-hero-reveal .sl-dashboard-mockup {
        transform: none !important;
        animation: none !important;
        opacity: 1;
        margin-top: 2rem;
    }
    .sl-hero-reveal .sl-mock-widget {
        opacity: 1;
        transform: none;
        animation: none;
    }
}`,
        js: `(function() {
    const root = document.querySelector('.sl-hero-reveal');
    if (!root) return;
})();`
    },

    // 11. Bento Learning (Modern UI)
    {
        id: 'hero-bento-learning',
        meta: {
            name: 'Bento Learning Hero',
            category: 'Hero',
            variant: 'Bento Grid',
            description: 'Trendy Apple-style bento grid layout organizing different hero elements into distinct cards.',
            tags: ['hero', 'bento', 'grid', 'modern', 'ui'],
            image_count: 1
        },
        html: `<!-- sl-section: hero-bento-learning | v1.0 -->
<div class="sl-hero-bento position-relative bg-body pt-5 pt-lg-7 pb-6">
    <div class="container">
        <div class="row g-4 sl-bento-grid">
            
            <!-- Main Hero Card (Large, Top Left) -->
            <div class="col-lg-8">
                <div class="sl-bento-card bg-success-subtle rounded-5 p-5 h-100 d-flex flex-column justify-content-center position-relative overflow-hidden sl-stagger-1">
                    <div class="position-relative z-2 w-75">
                        <span class="badge bg-body text-success mb-3 px-3 py-2 rounded-pill fw-bold border border-secondary-subtle" data-sl-edit="text">SmartLearn v3.0</span>
                        <h1 class="display-4 fw-bold text-body-emphasis mb-4 lh-sm sl-bento-title" data-sl-edit="text">Everything you need to <span class="text-success">teach online.</span></h1>
                        <p class="fs-5 text-body-emphasis opacity-75 mb-0" data-sl-edit="text">The ultimate toolkit for educators, schools, and creators to build thriving online academies.</p>
                    </div>
                    <!-- Decorative shape -->
                    <div class="position-absolute end-0 bottom-0 opacity-25" style="transform: translate(20%, 20%); pointer-events: none;">
                        <i class="fa fa-graduation-cap text-success" style="font-size: 15rem;"></i>
                    </div>
                </div>
            </div>
            
            <!-- CTA Card (Top Right) -->
            <div class="col-lg-4">
                <div class="sl-bento-card bg-dark text-white rounded-5 p-5 h-100 d-flex flex-column justify-content-between sl-stagger-2">
                    <div>
                        <h3 class="fw-bold mb-3" data-sl-edit="text">Start your free trial today.</h3>
                        <p class="opacity-75 mb-4" data-sl-edit="text">No credit card required. Cancel anytime.</p>
                    </div>
                    <a href="#" class="btn btn-success btn-lg rounded-pill w-100 fw-bold py-3 sl-bento-hover" data-sl-edit="link">Get Started <i class="fa fa-arrow-right ms-2"></i></a>
                </div>
            </div>
            
            <!-- Stat Card 1 (Bottom Left) -->
            <div class="col-md-4">
                <div class="sl-bento-card border border-2 rounded-5 p-4 h-100 text-center d-flex flex-column justify-content-center sl-stagger-3">
                    <h2 class="display-4 fw-black text-success mb-1" data-sl-edit="text">99%</h2>
                    <span class="text-body-secondary fw-medium" data-sl-edit="text">Student Satisfaction</span>
                </div>
            </div>
            
            <!-- Mini Video/Image Card (Bottom Center) -->
            <div class="col-md-4">
                <div class="sl-bento-card bg-body-secondary rounded-5 p-0 h-100 position-relative overflow-hidden sl-stagger-4 group-hover">
                    <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=400&q=80" class="w-100 h-100 object-fit-cover transition-transform" data-sl-edit="image" alt="Workspace">
                    <div class="position-absolute inset-0 bg-dark bg-opacity-25 d-flex align-items-center justify-content-center">
                        <div class="bg-body text-body-emphasis rounded-circle d-flex align-items-center justify-content-center shadow-lg sl-play-btn" style="width: 60px; height: 60px;">
                            <i class="fa fa-play fs-4 ms-1"></i>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Quick Search Card (Bottom Right) -->
            <div class="col-md-4">
                <div class="sl-bento-card bg-info-subtle rounded-5 p-4 h-100 d-flex flex-column justify-content-center sl-stagger-5">
                    <h5 class="fw-bold text-body-emphasis mb-3" data-sl-edit="text">Find a Course</h5>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control bg-body text-body-emphasis border-secondary-subtle rounded-start-pill py-3 px-4" placeholder="Search...">
                        <button class="btn btn-light bg-body border-secondary-subtle border-start-0 rounded-end-pill px-4 text-success"><i class="fa fa-search"></i></button>
                    </div>
                    <div class="d-flex gap-2 flex-wrap">
                        <span class="badge bg-body text-body-emphasis rounded-pill px-2 py-1 border border-secondary-subtle">Design</span>
                        <span class="badge bg-body text-body-emphasis rounded-pill px-2 py-1 border border-secondary-subtle">Code</span>
                        <span class="badge bg-body text-body-emphasis rounded-pill px-2 py-1 border border-secondary-subtle">Business</span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>`,
        css: `.sl-hero-bento .sl-bento-title {
    letter-spacing: -0.03em;
}
.sl-hero-bento .fw-black {
    font-weight: 900;
}
.sl-hero-bento .sl-bento-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.sl-hero-bento .sl-bento-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important;
}
.sl-hero-bento .object-fit-cover {
    object-fit: cover;
}
.sl-hero-bento .transition-transform {
    transition: transform 0.5s ease;
}
.sl-hero-bento .group-hover:hover .transition-transform {
    transform: scale(1.05);
}
.sl-hero-bento .sl-play-btn {
    transition: transform 0.2s ease;
}
.sl-hero-bento .group-hover:hover .sl-play-btn {
    transform: scale(1.1);
}
.sl-hero-bento .sl-bento-hover:hover {
    background-color: transparent;
    color: var(--bs-success);
}

/* Staggered entrance animation */
.sl-hero-bento .sl-stagger-1,
.sl-hero-bento .sl-stagger-2,
.sl-hero-bento .sl-stagger-3,
.sl-hero-bento .sl-stagger-4,
.sl-hero-bento .sl-stagger-5 {
    opacity: 0;
    transform: translateY(20px);
    animation: slBentoFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.sl-hero-bento .sl-stagger-1 { animation-delay: 0.1s; }
.sl-hero-bento .sl-stagger-2 { animation-delay: 0.2s; }
.sl-hero-bento .sl-stagger-3 { animation-delay: 0.3s; }
.sl-hero-bento .sl-stagger-4 { animation-delay: 0.4s; }
.sl-hero-bento .sl-stagger-5 { animation-delay: 0.5s; }

@keyframes slBentoFade {
    to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 991px) {
    .sl-hero-bento .w-75 { width: 100% !important; }
}`,
        js: `(function() {
    const root = document.querySelector('.sl-hero-bento');
    if (!root) return;
})();`
    },

    // 12. Learning Path (Curriculum)
    {
        id: 'hero-learning-path',
        meta: {
            name: 'Learning Path Hero',
            category: 'Hero',
            variant: 'Curriculum',
            description: 'Illustrates a journey with a connected visual timeline of courses.',
            tags: ['hero', 'path', 'curriculum', 'timeline', 'journey'],
            image_count: 0
        },
        html: `<!-- sl-section: hero-learning-path | v1.0 -->
<div class="sl-hero-path position-relative overflow-hidden bg-body">
    <div class="container py-7 py-lg-8">
        <div class="row align-items-center">
            
            <div class="col-lg-5 pe-lg-5 mb-5 mb-lg-0 z-2">
                <h1 class="display-4 fw-bold text-body-emphasis mb-4 sl-path-title" data-sl-edit="text">Your journey to <br>becoming a <span class="text-success">Data Scientist.</span></h1>
                <p class="fs-5 text-body-secondary mb-5" data-sl-edit="text">Don't just take random courses. Follow our expertly crafted curriculum from absolute beginner to job-ready professional in 6 months.</p>
                <a href="#" class="btn btn-success btn-lg rounded-pill px-5 py-3 fw-bold shadow-sm" data-sl-edit="link">Start the Path</a>
            </div>
            
            <div class="col-lg-7 position-relative">
                <!-- SVG Connecting Line -->
                <svg class="position-absolute sl-path-line d-none d-lg-block" width="100%" height="100%" style="top: 0; left: 0; z-index: 0;" preserveAspectRatio="none">
                    <path class="sl-line-draw" d="M50,80 C150,80 200,200 300,200 C400,200 450,80 550,80" fill="none" stroke="#198754" stroke-width="4" stroke-dasharray="10 10"/>
                </svg>
                
                <!-- Pathway Nodes -->
                <div class="position-relative z-1 d-flex flex-column gap-4 sl-path-nodes">
                    
                    <!-- Node 1 -->
                    <div class="d-flex align-items-center bg-body p-3 rounded-4 shadow-sm border border-secondary-subtle sl-node sl-node-1" style="max-width: 400px; margin-left: 0;">
                        <div class="bg-success text-white rounded-circle d-flex align-items-center justify-content-center fw-bold fs-5 me-3" style="width: 50px; height: 50px; flex-shrink: 0;">1</div>
                        <div>
                            <h6 class="fw-bold mb-1 text-body-emphasis" data-sl-edit="text">Python Basics</h6>
                            <small class="text-body-secondary" data-sl-edit="text">Variables, loops, and functions.</small>
                        </div>
                    </div>
                    
                    <!-- Node 2 -->
                    <div class="d-flex align-items-center bg-body p-3 rounded-4 shadow-sm border border-secondary-subtle sl-node sl-node-2" style="max-width: 400px; margin-left: 20%;">
                        <div class="bg-success text-white rounded-circle d-flex align-items-center justify-content-center fw-bold fs-5 me-3" style="width: 50px; height: 50px; flex-shrink: 0;">2</div>
                        <div>
                            <h6 class="fw-bold mb-1 text-body-emphasis" data-sl-edit="text">Data Analysis with Pandas</h6>
                            <small class="text-body-secondary" data-sl-edit="text">Cleaning and manipulating datasets.</small>
                        </div>
                    </div>
                    
                    <!-- Node 3 -->
                    <div class="d-flex align-items-center bg-body p-3 rounded-4 shadow-sm border border-secondary-subtle sl-node sl-node-3" style="max-width: 400px; margin-left: 40%;">
                        <div class="bg-success text-white rounded-circle d-flex align-items-center justify-content-center fw-bold fs-5 me-3" style="width: 50px; height: 50px; flex-shrink: 0;">3</div>
                        <div>
                            <h6 class="fw-bold mb-1 text-body-emphasis" data-sl-edit="text">Machine Learning</h6>
                            <small class="text-body-secondary" data-sl-edit="text">Predictive modeling with Scikit-Learn.</small>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
</div>`,
        css: `.sl-hero-path {
    min-height: 80vh;
}
.sl-hero-path .sl-path-title {
    letter-spacing: -0.03em;
}
.sl-hero-path .sl-node {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
}
.sl-hero-path .sl-node:hover {
    transform: translateY(-5px) scale(1.02) !important;
    box-shadow: 0 15px 30px rgba(25, 135, 84, 0.15) !important;
    border-color: #198754 !important;
}

/* Animations */
.sl-hero-path .sl-node-1 { animation: slNodeFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards; }
.sl-hero-path .sl-node-2 { animation: slNodeFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards; }
.sl-hero-path .sl-node-3 { animation: slNodeFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.0s forwards; }

@keyframes slNodeFade {
    to { opacity: 1; transform: translateY(0); }
}

.sl-hero-path .sl-line-draw {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: slDash 3s linear forwards;
}

@keyframes slDash {
    to { stroke-dashoffset: 0; }
}

@media (max-width: 991px) {
    .sl-hero-path .sl-node { margin-left: 0 !important; max-width: 100% !important; }
}`,
        js: `(function() {
    const root = document.querySelector('.sl-hero-path');
    if (!root) return;
})();`
    },

    // 13. Student Journey (Personalized LMS)
    {
        id: 'hero-student-journey',
        meta: {
            name: 'Student Journey Hero',
            category: 'Hero',
            variant: 'Personalized',
            description: 'Logged-in dashboard hero for returning students showing actual Moodle functionality and progress.',
            tags: ['hero', 'student', 'dashboard', 'progress', 'personalized'],
            image_count: 0
        },
        html: `<!-- sl-section: hero-student-journey | v1.0 -->
<div class="sl-hero-journey position-relative bg-body-tertiary border-bottom">
    <div class="container py-5 py-lg-6">
        
        <!-- Welcome Header -->
        <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-5">
            <div>
                <h1 class="display-5 fw-bold text-body-emphasis mb-1 sl-journey-title" data-sl-edit="text">Good morning, Alex 👋</h1>
                <p class="text-body-secondary fs-5 mb-0" data-sl-edit="text">Ready to continue your learning journey?</p>
            </div>
            <div class="mt-4 mt-md-0 d-flex gap-3">
                <div class="text-center px-4 py-2 bg-body rounded-3 border border-secondary-subtle shadow-sm sl-stat-card">
                    <h3 class="fw-bold text-success mb-0" data-sl-edit="text">3</h3>
                    <small class="text-body-secondary fw-medium text-uppercase" style="font-size: 11px;" data-sl-edit="text">In Progress</small>
                </div>
                <div class="text-center px-4 py-2 bg-body rounded-3 border border-secondary-subtle shadow-sm sl-stat-card">
                    <h3 class="fw-bold text-success mb-0" data-sl-edit="text">2</h3>
                    <small class="text-body-secondary fw-medium text-uppercase" style="font-size: 11px;" data-sl-edit="text">Certificates</small>
                </div>
            </div>
        </div>
        
        <div class="row g-4">
            <!-- Main Continue Learning Card -->
            <div class="col-lg-8">
                <div class="card bg-body border border-secondary-subtle rounded-4 shadow-sm h-100 overflow-hidden sl-progress-card position-relative group">
                    <div class="position-absolute top-0 start-0 w-100 h-100 bg-success opacity-0 transition-opacity" style="z-index: 0; transition: opacity 0.3s ease;"></div>
                    <div class="card-body p-4 p-md-5 position-relative z-1">
                        <div class="d-flex justify-content-between align-items-start mb-4">
                            <span class="badge bg-success-subtle text-success fw-bold px-3 py-2 rounded-pill">CONTINUE LEARNING</span>
                            <span class="text-body-secondary fw-medium"><i class="fa fa-clock-o me-1"></i> Last active 2h ago</span>
                        </div>
                        
                        <h2 class="fw-bold text-body-emphasis mb-2 sl-course-title" data-sl-edit="text">Python for Data Analysis</h2>
                        <p class="text-body-secondary mb-4" data-sl-edit="text">Module 4: Data Visualization with Matplotlib and Seaborn</p>
                        
                        <div class="mb-4">
                            <div class="d-flex justify-content-between mb-2">
                                <span class="fw-bold text-body-emphasis">72% Completed</span>
                                <span class="text-body-secondary small">18 of 25 lessons</span>
                            </div>
                            <div class="progress rounded-pill bg-body-secondary border border-secondary-subtle" style="height: 12px;">
                                <div class="progress-bar bg-success rounded-pill sl-progress-fill" style="width: 0%;" data-target="72%"></div>
                            </div>
                        </div>
                        
                        <a href="#" class="btn btn-success btn-lg rounded-pill px-5 fw-bold shadow-sm" data-sl-edit="link">Resume Course <i class="fa fa-play ms-2"></i></a>
                    </div>
                </div>
            </div>
            
            <!-- Up Next / Recommendations -->
            <div class="col-lg-4">
                <div class="card bg-body border border-secondary-subtle rounded-4 shadow-sm h-100 p-4">
                    <h5 class="fw-bold text-body-emphasis mb-4" data-sl-edit="text">Up Next For You</h5>
                    
                    <div class="d-flex flex-column gap-3">
                        <!-- Rec 1 -->
                        <a href="#" class="text-decoration-none sl-rec-item p-3 rounded-3 border border-secondary-subtle bg-body d-flex align-items-center">
                            <div class="bg-success-subtle text-success rounded-3 d-flex align-items-center justify-content-center me-3" style="width: 48px; height: 48px;"><i class="fa fa-code"></i></div>
                            <div>
                                <h6 class="fw-bold text-body-emphasis mb-1" data-sl-edit="text">Advanced SQL</h6>
                                <small class="text-body-secondary d-block" data-sl-edit="text">Recommended based on your activity</small>
                            </div>
                        </a>
                        
                        <!-- Rec 2 -->
                        <a href="#" class="text-decoration-none sl-rec-item p-3 rounded-3 border border-secondary-subtle bg-body d-flex align-items-center">
                            <div class="bg-success-subtle text-success rounded-3 d-flex align-items-center justify-content-center me-3" style="width: 48px; height: 48px;"><i class="fa fa-line-chart"></i></div>
                            <div>
                                <h6 class="fw-bold text-body-emphasis mb-1" data-sl-edit="text">Tableau Mastery</h6>
                                <small class="text-body-secondary d-block" data-sl-edit="text">Matches your learning goals</small>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div>`,
        css: `.sl-hero-journey {
    /* Subtle background pattern */
    background-image: radial-gradient(var(--bs-border-color) 1px, transparent 1px);
    background-size: 20px 20px;
}
.sl-hero-journey .sl-journey-title {
    letter-spacing: -0.02em;
}
.sl-hero-journey .sl-course-title {
    letter-spacing: -0.01em;
}
.sl-hero-journey .sl-stat-card {
    min-width: 100px;
    transition: transform 0.2s ease;
}
.sl-hero-journey .sl-stat-card:hover {
    transform: translateY(-3px);
}
.sl-hero-journey .sl-progress-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.sl-hero-journey .sl-progress-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.08) !important;
}
.sl-hero-journey .sl-progress-fill {
    transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.sl-hero-journey .sl-rec-item {
    transition: all 0.2s ease;
}
.sl-hero-journey .sl-rec-item:hover {
    border-color: var(--bs-primary) !important;
    background-color: var(--bs-primary-bg-subtle) !important;
    transform: translateX(5px);
}`,
        js: `(function() {
    const root = document.querySelector('.sl-hero-journey');
    if (!root) return;
    
    // Animate progress bar on load
    setTimeout(() => {
        const bar = root.querySelector('.sl-progress-fill');
        if (bar) {
            const target = bar.getAttribute('data-target');
            if(target) bar.style.width = target;
        }
    }, 300);
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
    console.log('Successfully generated Hero sections 9-13 and updated catalog.json');
}
