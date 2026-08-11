const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const sectionsDir = path.join(publicDir, 'sections');
const catalogPath = path.join(publicDir, 'catalog.json');

if (!fs.existsSync(sectionsDir)) {
    fs.mkdirSync(sectionsDir, { recursive: true });
}

// -----------------------------------------------------------------------------
// CORE CSS FOR ALL FOOTERS
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

/* Buttons */
.sl-btn-primary {
    background-color: var(--smartlearn-primary) !important;
    border-color: var(--smartlearn-primary) !important;
    color: #FFFFFF !important;
}
.sl-btn-primary:hover, .sl-btn-primary:focus, .sl-btn-primary:active {
    background-color: var(--smartlearn-primary-hover, var(--smartlearn-primary)) !important;
    filter: brightness(0.9);
    color: #FFFFFF !important;
    box-shadow: 0 4px 12px color-mix(in srgb, var(--smartlearn-primary) 30%, transparent) !important;
}

.sl-btn-outline-primary {
    border-color: var(--smartlearn-primary) !important;
    color: var(--smartlearn-primary) !important;
}
.sl-btn-outline-primary:hover, .sl-btn-outline-primary:focus, .sl-btn-outline-primary:active {
    background-color: var(--smartlearn-primary) !important;
    color: #FFFFFF !important;
}

/* Borders */
.sl-border-primary { border-color: var(--smartlearn-primary) !important; }
.sl-border { border-color: var(--smartlearn-card-border) !important; }
`;

const sections = [
    // -----------------------------------------------------------------------------
    // 6. Glass Footer
    // -----------------------------------------------------------------------------
    {
        id: 'footer-glass',
        meta: {
            name: 'Glass Footer',
            category: 'Footer',
            variant: 'Modern',
            description: 'Immersive floating glassmorphism container over a glowing background. Ideal for creative academies.',
            tags: ['footer', 'glass', 'glassmorphism', 'floating'],
            image_count: 0
        },
        html: `<!-- sl-section: footer-glass | v1.0 -->
<footer class="sl-footer-glass position-relative overflow-hidden sl-bg-main py-5">
    <div class="sl-bg-glow position-absolute top-50 start-50 translate-middle w-100 h-100" style="z-index: 0; pointer-events: none;"></div>
    
    <div class="container position-relative z-1">
        <div class="sl-glass-container rounded-4 p-5 sl-border shadow-lg">
            <div class="row gy-4 mb-4 pb-4 border-bottom sl-border">
                <div class="col-lg-4 text-center text-lg-start pe-lg-4">
                    <h3 class="fw-bolder sl-text-emphasis mb-3" data-sl-edit="text">SmartLearn.</h3>
                    <p class="sl-text-muted mb-4" data-sl-edit="text">Redefining online education with immersive, interactive, and beautiful learning experiences.</p>
                    <a href="#" class="btn sl-btn-primary rounded-pill px-4 fw-bold shadow-sm" data-sl-edit="link">Join Now</a>
                </div>
                
                <div class="col-lg-8">
                    <div class="row text-center text-md-start">
                        <div class="col-md-4 mb-4 mb-md-0">
                            <h6 class="fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Discover</h6>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Browse Courses</a></li>
                                <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Top Instructors</a></li>
                                <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Student Success</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4 mb-4 mb-md-0">
                            <h6 class="fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Information</h6>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">About Us</a></li>
                                <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Careers</a></li>
                                <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Blog</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <h6 class="fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Connect</h6>
                            <div class="d-flex justify-content-center justify-content-md-start gap-3">
                                <a href="#" class="sl-social-glass rounded d-flex align-items-center justify-content-center sl-border" aria-label="Twitter"><i class="fa fa-twitter sl-text-emphasis"></i></a>
                                <a href="#" class="sl-social-glass rounded d-flex align-items-center justify-content-center sl-border" aria-label="Instagram"><i class="fa fa-instagram sl-text-emphasis"></i></a>
                                <a href="#" class="sl-social-glass rounded d-flex align-items-center justify-content-center sl-border" aria-label="LinkedIn"><i class="fa fa-linkedin sl-text-emphasis"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <span class="small sl-text-muted mb-3 mb-md-0 fw-medium" data-sl-edit="text">© 2026 SmartLearn Inc.</span>
                <div class="d-flex gap-4">
                    <a href="#" class="text-decoration-none small sl-text-muted sl-footer-link fw-medium" data-sl-edit="link">Privacy</a>
                    <a href="#" class="text-decoration-none small sl-text-muted sl-footer-link fw-medium" data-sl-edit="link">Terms</a>
                </div>
            </div>
        </div>
    </div>
</footer>`,
        css: baseCss + `
.sl-footer-glass .sl-bg-glow {
    background: radial-gradient(circle at center, color-mix(in srgb, var(--smartlearn-primary) 15%, transparent) 0%, transparent 70%);
}
.sl-footer-glass .sl-glass-container {
    background-color: color-mix(in srgb, var(--smartlearn-card-bg) 70%, transparent);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
}
.sl-footer-glass .sl-footer-link { transition: color 0.2s ease; }
.sl-footer-glass .sl-footer-link:hover, .sl-footer-glass .sl-footer-link:focus { color: var(--smartlearn-primary) !important; text-decoration: underline !important; }
.sl-footer-glass .sl-social-glass {
    width: 36px; height: 36px;
    background-color: color-mix(in srgb, var(--smartlearn-bg) 50%, transparent);
    transition: all 0.3s ease;
}
.sl-footer-glass .sl-social-glass:hover, .sl-footer-glass .sl-social-glass:focus {
    background-color: var(--smartlearn-primary) !important;
    border-color: var(--smartlearn-primary) !important;
    transform: translateY(-3px);
}
.sl-footer-glass .sl-social-glass:hover i { color: #FFFFFF !important; }
`,
        js: `(function() { const root = document.querySelector('.sl-footer-glass'); if (!root) return; })();`
    },

    // -----------------------------------------------------------------------------
    // 7. Bento Footer
    // -----------------------------------------------------------------------------
    {
        id: 'footer-bento',
        meta: {
            name: 'Bento Footer',
            category: 'Footer',
            variant: 'Modern',
            description: 'A spatial grid layout dividing footer content into distinct bento-style cards.',
            tags: ['footer', 'bento', 'grid', 'modern'],
            image_count: 0
        },
        html: `<!-- sl-section: footer-bento | v1.0 -->
<footer class="sl-footer-bento sl-bg-main py-5 border-top sl-border">
    <div class="container">
        <div class="row g-4 mb-4">
            <!-- Main Brand Card -->
            <div class="col-lg-6">
                <div class="sl-bento-card sl-bg-card rounded-4 p-5 h-100 d-flex flex-column justify-content-center sl-hover-card">
                    <h2 class="display-6 fw-bold sl-text-emphasis mb-3" data-sl-edit="text">SmartLearn.</h2>
                    <p class="fs-5 sl-text-muted mb-4 pe-lg-4" data-sl-edit="text">The ultimate platform to accelerate your career and master new skills online.</p>
                    <div class="mt-auto">
                        <a href="#" class="btn sl-btn-primary rounded-pill px-4 py-2 fw-bold" data-sl-edit="link">Start for free</a>
                    </div>
                </div>
            </div>
            
            <!-- Navigation Cards -->
            <div class="col-lg-6">
                <div class="row g-4 h-100">
                    <div class="col-sm-6">
                        <div class="sl-bento-card sl-bg-card rounded-4 p-4 h-100 sl-hover-card">
                            <h5 class="fw-bold sl-text-emphasis mb-4">Learn</h5>
                            <ul class="list-unstyled d-flex flex-column gap-3 mb-0">
                                <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link d-flex justify-content-between align-items-center" data-sl-edit="link">Courses <i class="fa fa-angle-right sl-text-primary opacity-0 sl-arrow"></i></a></li>
                                <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link d-flex justify-content-between align-items-center" data-sl-edit="link">Paths <i class="fa fa-angle-right sl-text-primary opacity-0 sl-arrow"></i></a></li>
                                <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link d-flex justify-content-between align-items-center" data-sl-edit="link">Certificates <i class="fa fa-angle-right sl-text-primary opacity-0 sl-arrow"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="sl-bento-card sl-bg-card rounded-4 p-4 h-100 sl-hover-card">
                            <h5 class="fw-bold sl-text-emphasis mb-4">Support</h5>
                            <ul class="list-unstyled d-flex flex-column gap-3 mb-0">
                                <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link d-flex justify-content-between align-items-center" data-sl-edit="link">Help Center <i class="fa fa-angle-right sl-text-primary opacity-0 sl-arrow"></i></a></li>
                                <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link d-flex justify-content-between align-items-center" data-sl-edit="link">Contact <i class="fa fa-angle-right sl-text-primary opacity-0 sl-arrow"></i></a></li>
                                <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link d-flex justify-content-between align-items-center" data-sl-edit="link">Community <i class="fa fa-angle-right sl-text-primary opacity-0 sl-arrow"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row g-4">
            <!-- Social Card -->
            <div class="col-md-5 col-lg-4">
                <div class="sl-bento-card sl-bg-card rounded-4 p-4 h-100 d-flex align-items-center justify-content-center gap-4 sl-hover-card">
                    <a href="#" class="sl-social-btn rounded-circle d-flex align-items-center justify-content-center sl-bg-primary-subtle sl-text-primary" aria-label="Twitter"><i class="fa fa-twitter fs-5"></i></a>
                    <a href="#" class="sl-social-btn rounded-circle d-flex align-items-center justify-content-center sl-bg-primary-subtle sl-text-primary" aria-label="LinkedIn"><i class="fa fa-linkedin fs-5"></i></a>
                    <a href="#" class="sl-social-btn rounded-circle d-flex align-items-center justify-content-center sl-bg-primary-subtle sl-text-primary" aria-label="YouTube"><i class="fa fa-youtube-play fs-5"></i></a>
                </div>
            </div>
            
            <!-- Legal Card -->
            <div class="col-md-7 col-lg-8">
                <div class="sl-bento-card sl-bg-card rounded-4 p-4 h-100 d-flex flex-column flex-md-row align-items-center justify-content-between sl-hover-card">
                    <span class="sl-text-muted fw-medium mb-3 mb-md-0" data-sl-edit="text">© 2026 SmartLearn Inc.</span>
                    <div class="d-flex flex-wrap justify-content-center gap-4">
                        <a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Privacy</a>
                        <a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Terms</a>
                        <a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Cookies</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>`,
        css: baseCss + `
.sl-footer-bento .sl-bento-card { transition: transform 0.3s ease, border-color 0.3s ease; }
.sl-footer-bento .sl-hover-card:hover { transform: translateY(-5px); border-color: var(--smartlearn-primary) !important; }
.sl-footer-bento .sl-footer-link { transition: color 0.2s ease; font-weight: 500; }
.sl-footer-bento .sl-footer-link:hover, .sl-footer-bento .sl-footer-link:focus { color: var(--smartlearn-primary) !important; }
.sl-footer-bento .sl-arrow { transition: opacity 0.2s ease, transform 0.2s ease; transform: translateX(-10px); }
.sl-footer-bento .sl-footer-link:hover .sl-arrow, .sl-footer-bento .sl-footer-link:focus .sl-arrow { opacity: 1 !important; transform: translateX(0); }
.sl-footer-bento .sl-social-btn {
    width: 48px; height: 48px;
    transition: all 0.3s ease;
}
.sl-footer-bento .sl-social-btn:hover, .sl-footer-bento .sl-social-btn:focus {
    background-color: var(--smartlearn-primary) !important;
    color: #FFFFFF !important;
    transform: scale(1.1);
}
`,
        js: `(function() { const root = document.querySelector('.sl-footer-bento'); if (!root) return; })();`
    },

    // -----------------------------------------------------------------------------
    // 8. Contact & Support Footer
    // -----------------------------------------------------------------------------
    {
        id: 'footer-support',
        meta: {
            name: 'Contact & Support',
            category: 'Footer',
            variant: 'LMS',
            description: 'Help-first navigation focusing on technical support, FAQ, and operating hours.',
            tags: ['footer', 'support', 'help', 'contact', 'lms'],
            image_count: 0
        },
        html: `<!-- sl-section: footer-support | v1.0 -->
<footer class="sl-footer-support sl-bg-main pt-6 pb-4 border-top sl-border">
    <div class="container">
        <div class="row mb-5">
            <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="pe-lg-5">
                    <h2 class="display-6 fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Need help? We're here.</h2>
                    <p class="fs-5 sl-text-muted mb-5" data-sl-edit="text">Our dedicated support team is ready to assist you with any technical or academic inquiries.</p>
                    
                    <div class="d-flex flex-column gap-4">
                        <div class="d-flex align-items-start">
                            <div class="sl-icon-circle sl-bg-primary-subtle sl-text-primary rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0">
                                <i class="fa fa-envelope fs-5"></i>
                            </div>
                            <div>
                                <h6 class="fw-bold sl-text-emphasis mb-1">Email Support</h6>
                                <a href="mailto:support@smartlearn.edu" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">support@smartlearn.edu</a>
                            </div>
                        </div>
                        <div class="d-flex align-items-start">
                            <div class="sl-icon-circle sl-bg-primary-subtle sl-text-primary rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0">
                                <i class="fa fa-phone fs-5"></i>
                            </div>
                            <div>
                                <h6 class="fw-bold sl-text-emphasis mb-1">Call Us</h6>
                                <p class="sl-text-muted mb-0" data-sl-edit="text">+1 (800) 123-4567</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-start">
                            <div class="sl-icon-circle sl-bg-primary-subtle sl-text-primary rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0">
                                <i class="fa fa-clock-o fs-5"></i>
                            </div>
                            <div>
                                <h6 class="fw-bold sl-text-emphasis mb-1">Operating Hours</h6>
                                <p class="sl-text-muted mb-0" data-sl-edit="text">Mon – Fri · 9:00 AM – 5:00 PM EST</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-6">
                <div class="sl-bg-card rounded-4 p-4 p-md-5 sl-border h-100">
                    <div class="row h-100">
                        <div class="col-sm-6 mb-4 mb-sm-0">
                            <h5 class="fw-bold sl-text-emphasis mb-4 border-bottom sl-border pb-2"><i class="fa fa-life-ring sl-text-primary me-2"></i> Support Links</h5>
                            <ul class="list-unstyled d-flex flex-column gap-3 mb-0">
                                <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link fw-medium" data-sl-edit="link">Help Center</a></li>
                                <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link fw-medium" data-sl-edit="link">Technical FAQ</a></li>
                                <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link fw-medium" data-sl-edit="link">Submit a Ticket</a></li>
                                <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link fw-medium" data-sl-edit="link">System Status</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6">
                            <h5 class="fw-bold sl-text-emphasis mb-4 border-bottom sl-border pb-2"><i class="fa fa-graduation-cap sl-text-primary me-2"></i> Student Guide</h5>
                            <ul class="list-unstyled d-flex flex-column gap-3 mb-0">
                                <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link fw-medium" data-sl-edit="link">Getting Started</a></li>
                                <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link fw-medium" data-sl-edit="link">Course Navigation</a></li>
                                <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link fw-medium" data-sl-edit="link">Exams & Quizzes</a></li>
                                <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link fw-medium" data-sl-edit="link">Certificates</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center pt-4 border-top sl-border">
            <span class="small sl-text-muted mb-3 mb-md-0" data-sl-edit="text">© 2026 SmartLearn Support.</span>
            <div class="d-flex gap-4">
                <a href="#" class="text-decoration-none small sl-text-muted sl-footer-link" data-sl-edit="link">Privacy Policy</a>
                <a href="#" class="text-decoration-none small sl-text-muted sl-footer-link" data-sl-edit="link">Terms of Service</a>
            </div>
        </div>
    </div>
</footer>`,
        css: baseCss + `
.sl-footer-support .sl-icon-circle { width: 48px; height: 48px; }
.sl-footer-support .sl-footer-link { transition: color 0.2s ease; }
.sl-footer-support .sl-footer-link:hover, .sl-footer-support .sl-footer-link:focus { color: var(--smartlearn-primary) !important; text-decoration: underline !important; }
`,
        js: `(function() { const root = document.querySelector('.sl-footer-support'); if (!root) return; })();`
    },

    // -----------------------------------------------------------------------------
    // 9. App & Student Footer
    // -----------------------------------------------------------------------------
    {
        id: 'footer-student-app',
        meta: {
            name: 'App & Student utility',
            category: 'Footer',
            variant: 'LMS',
            description: 'Modular footer featuring App Store downloads, selectors, and quick-access student links.',
            tags: ['footer', 'app', 'student', 'lms', 'utility'],
            image_count: 0
        },
        html: `<!-- sl-section: footer-student-app | v1.0 -->
<footer class="sl-footer-student sl-bg-main pt-6 pb-4 border-top sl-border">
    <div class="container">
        <!-- Main Content Area -->
        <div class="row mb-5">
            <!-- App Download & Brand - Modular Block -->
            <div class="col-lg-4 mb-5 mb-lg-0 pe-lg-4">
                <h4 class="fw-bold sl-text-emphasis mb-3" data-sl-edit="text">SmartLearn</h4>
                <p class="sl-text-muted mb-4" data-sl-edit="text">Take your learning anywhere. Download the SmartLearn mobile app for offline access and on-the-go progress.</p>
                
                <!-- App Store Buttons (Can be hidden by admin via CSS or removal) -->
                <div class="d-flex flex-column flex-sm-row gap-3 sl-app-buttons-wrapper">
                    <a href="#" class="btn sl-bg-card sl-text-emphasis sl-border rounded px-3 py-2 d-flex align-items-center gap-3 sl-app-btn" data-sl-edit="link">
                        <i class="fa fa-apple fs-3"></i>
                        <div class="text-start lh-1">
                            <small class="d-block sl-text-muted" style="font-size: 0.65rem;">Download on the</small>
                            <span class="fw-bold">App Store</span>
                        </div>
                    </a>
                    <a href="#" class="btn sl-bg-card sl-text-emphasis sl-border rounded px-3 py-2 d-flex align-items-center gap-3 sl-app-btn" data-sl-edit="link">
                        <i class="fa fa-play fs-3"></i>
                        <div class="text-start lh-1">
                            <small class="d-block sl-text-muted" style="font-size: 0.65rem;">GET IT ON</small>
                            <span class="fw-bold">Google Play</span>
                        </div>
                    </a>
                </div>
            </div>
            
            <!-- Student Utilities -->
            <div class="col-lg-8">
                <div class="row">
                    <div class="col-md-4 mb-4 mb-md-0">
                        <h6 class="fw-bold sl-text-emphasis mb-3" data-sl-edit="text">My Learning</h6>
                        <ul class="list-unstyled d-flex flex-column gap-3">
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Dashboard</a></li>
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">My Courses</a></li>
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Grades & Feedback</a></li>
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Certificates</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 mb-4 mb-md-0">
                        <h6 class="fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Campus</h6>
                        <ul class="list-unstyled d-flex flex-column gap-3">
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Calendar</a></li>
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Messages</a></li>
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Forums</a></li>
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Announcements</a></li>
                        </ul>
                    </div>
                    
                    <!-- Selectors - Modular Block -->
                    <div class="col-md-4">
                        <h6 class="fw-bold sl-text-emphasis mb-3" data-sl-edit="text">Preferences</h6>
                        
                        <!-- Language Selector Placeholder -->
                        <div class="dropdown mb-3 sl-selector-wrapper">
                            <button class="btn sl-bg-card sl-border sl-text-muted w-100 text-start d-flex justify-content-between align-items-center rounded sl-dropdown-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span><i class="fa fa-globe me-2"></i> English (US)</span>
                                <i class="fa fa-chevron-down small"></i>
                            </button>
                            <ul class="dropdown-menu w-100 sl-bg-card sl-border shadow">
                                <li><a class="dropdown-item sl-text-emphasis sl-dropdown-item" href="#">English (US)</a></li>
                                <li><a class="dropdown-item sl-text-emphasis sl-dropdown-item" href="#">Español</a></li>
                                <li><a class="dropdown-item sl-text-emphasis sl-dropdown-item" href="#">Français</a></li>
                            </ul>
                        </div>
                        
                        <!-- Currency Selector Placeholder -->
                        <div class="dropdown sl-selector-wrapper">
                            <button class="btn sl-bg-card sl-border sl-text-muted w-100 text-start d-flex justify-content-between align-items-center rounded sl-dropdown-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span><i class="fa fa-money me-2"></i> USD ($)</span>
                                <i class="fa fa-chevron-down small"></i>
                            </button>
                            <ul class="dropdown-menu w-100 sl-bg-card sl-border shadow">
                                <li><a class="dropdown-item sl-text-emphasis sl-dropdown-item" href="#">USD ($)</a></li>
                                <li><a class="dropdown-item sl-text-emphasis sl-dropdown-item" href="#">EUR (€)</a></li>
                                <li><a class="dropdown-item sl-text-emphasis sl-dropdown-item" href="#">GBP (£)</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center pt-4 border-top sl-border">
            <span class="small sl-text-muted mb-3 mb-md-0" data-sl-edit="text">© 2026 SmartLearn Platform.</span>
            <div class="d-flex align-items-center gap-4">
                <a href="#" class="text-decoration-none small sl-text-muted sl-footer-link" data-sl-edit="link">Help</a>
                <a href="#" class="text-decoration-none small sl-text-muted sl-footer-link" data-sl-edit="link">Privacy</a>
                <a href="#" class="text-decoration-none small sl-text-muted sl-footer-link" data-sl-edit="link">Terms</a>
                <div class="d-flex gap-3 ms-md-2 border-start sl-border ps-4">
                    <a href="#" class="sl-social-icon sl-text-muted" aria-label="Twitter"><i class="fa fa-twitter"></i></a>
                    <a href="#" class="sl-social-icon sl-text-muted" aria-label="LinkedIn"><i class="fa fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>`,
        css: baseCss + `
.sl-footer-student .sl-footer-link { transition: color 0.2s ease; }
.sl-footer-student .sl-footer-link:hover, .sl-footer-student .sl-footer-link:focus { color: var(--smartlearn-primary) !important; }
.sl-footer-student .sl-app-btn { transition: all 0.2s ease; border-width: 2px !important; }
.sl-footer-student .sl-app-btn:hover, .sl-footer-student .sl-app-btn:focus { border-color: var(--smartlearn-primary) !important; transform: translateY(-2px); }
.sl-footer-student .sl-dropdown-btn { transition: border-color 0.2s ease, box-shadow 0.2s ease; }
.sl-footer-student .sl-dropdown-btn:hover, .sl-footer-student .sl-dropdown-btn:focus { border-color: var(--smartlearn-primary) !important; color: var(--smartlearn-primary) !important; }
.sl-footer-student .sl-dropdown-item:hover, .sl-footer-student .sl-dropdown-item:focus { background-color: var(--smartlearn-primary-subtle, rgba(0,0,0,0.05)); color: var(--smartlearn-primary) !important; }
.sl-footer-student .sl-social-icon { transition: color 0.2s ease; }
.sl-footer-student .sl-social-icon:hover, .sl-footer-student .sl-social-icon:focus { color: var(--smartlearn-primary) !important; }
`,
        js: `(function() { const root = document.querySelector('.sl-footer-student'); if (!root) return; })();`
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
console.log('Successfully generated Footers 6-9 and updated catalog.json');
