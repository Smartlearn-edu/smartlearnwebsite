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
    // 1. Classic Academic
    // -----------------------------------------------------------------------------
    {
        id: 'footer-academic',
        meta: {
            name: 'Classic Academic',
            category: 'Footer',
            variant: 'Institutional',
            description: 'A sophisticated multi-column footer with traditional navigation suitable for universities and schools.',
            tags: ['footer', 'academic', 'institutional', 'columns'],
            image_count: 0
        },
        html: `<!-- sl-section: footer-academic | v1.0 -->
<footer class="sl-footer-academic sl-bg-main pt-6 pb-4 border-top sl-border">
    <div class="container">
        <div class="row gy-5 mb-5">
            <div class="col-lg-4 pe-lg-5">
                <h3 class="fw-bold sl-text-emphasis mb-4" data-sl-edit="text">SmartLearn University</h3>
                <p class="sl-text-muted mb-4 pe-4" data-sl-edit="text">Empowering the next generation of leaders through innovative online education and academic excellence since 1994.</p>
                <div class="d-flex gap-3">
                    <a href="#" class="sl-social-icon sl-text-muted" aria-label="Facebook"><i class="fa fa-facebook-square fs-4"></i></a>
                    <a href="#" class="sl-social-icon sl-text-muted" aria-label="Twitter"><i class="fa fa-twitter-square fs-4"></i></a>
                    <a href="#" class="sl-social-icon sl-text-muted" aria-label="LinkedIn"><i class="fa fa-linkedin-square fs-4"></i></a>
                </div>
            </div>
            <div class="col-lg-2 col-md-4">
                <h5 class="fw-bold sl-text-emphasis mb-4" data-sl-edit="text">About Us</h5>
                <ul class="list-unstyled d-flex flex-column gap-3">
                    <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Our History</a></li>
                    <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Leadership</a></li>
                    <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Careers</a></li>
                    <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">News & Press</a></li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-4">
                <h5 class="fw-bold sl-text-emphasis mb-4" data-sl-edit="text">Academics</h5>
                <ul class="list-unstyled d-flex flex-column gap-3">
                    <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Undergraduate</a></li>
                    <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Graduate</a></li>
                    <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Online Degrees</a></li>
                    <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Certificates</a></li>
                </ul>
            </div>
            <div class="col-lg-4 col-md-4">
                <h5 class="fw-bold sl-text-emphasis mb-4" data-sl-edit="text">Contact Info</h5>
                <ul class="list-unstyled d-flex flex-column gap-3 sl-text-muted">
                    <li><i class="fa fa-map-marker sl-text-primary me-2"></i> <span data-sl-edit="text">123 University Ave, Boston, MA</span></li>
                    <li><i class="fa fa-phone sl-text-primary me-2"></i> <span data-sl-edit="text">+1 (800) 555-0199</span></li>
                    <li><i class="fa fa-envelope sl-text-primary me-2"></i> <span data-sl-edit="text">admissions@smartlearn.edu</span></li>
                </ul>
            </div>
        </div>
        <div class="row border-top sl-border pt-4">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <span class="small sl-text-muted" data-sl-edit="text">© 2026 SmartLearn University. All rights reserved.</span>
            </div>
            <div class="col-md-6 text-center text-md-end">
                <div class="d-inline-flex gap-4">
                    <a href="#" class="text-decoration-none small sl-text-muted sl-footer-link" data-sl-edit="link">Privacy Policy</a>
                    <a href="#" class="text-decoration-none small sl-text-muted sl-footer-link" data-sl-edit="link">Terms of Use</a>
                    <a href="#" class="text-decoration-none small sl-text-muted sl-footer-link" data-sl-edit="link">Accessibility</a>
                </div>
            </div>
        </div>
    </div>
</footer>`,
        css: baseCss + `
.sl-footer-academic { font-family: inherit; }
.sl-footer-academic .sl-footer-link { transition: color 0.2s ease, text-shadow 0.2s ease; }
.sl-footer-academic .sl-footer-link:hover, .sl-footer-academic .sl-footer-link:focus {
    color: var(--smartlearn-primary) !important;
    text-decoration: underline !important;
}
.sl-footer-academic .sl-social-icon { transition: color 0.2s ease; }
.sl-footer-academic .sl-social-icon:hover, .sl-footer-academic .sl-social-icon:focus {
    color: var(--smartlearn-primary) !important;
}
`,
        js: `(function() { const root = document.querySelector('.sl-footer-academic'); if (!root) return; })();`
    },

    // -----------------------------------------------------------------------------
    // 2. Minimal Footer
    // -----------------------------------------------------------------------------
    {
        id: 'footer-minimal',
        meta: {
            name: 'Minimal Footer',
            category: 'Footer',
            variant: 'Institutional',
            description: 'Clean, distraction-free footer with massive whitespace and elegant typography.',
            tags: ['footer', 'minimal', 'clean', 'centered'],
            image_count: 0
        },
        html: `<!-- sl-section: footer-minimal | v1.0 -->
<footer class="sl-footer-minimal sl-bg-main py-6 border-top sl-border">
    <div class="container text-center">
        <h2 class="fw-bold sl-text-emphasis mb-3" data-sl-edit="text">SmartLearn</h2>
        <p class="sl-text-muted tracking-widest text-uppercase small mb-5 fw-bold opacity-75" data-sl-edit="text">Learn. Grow. Succeed.</p>
        
        <div class="d-flex justify-content-center flex-wrap gap-4 gap-md-5 mb-5">
            <a href="#" class="text-decoration-none sl-text-emphasis fw-medium sl-footer-nav-link" data-sl-edit="link">Courses</a>
            <a href="#" class="text-decoration-none sl-text-emphasis fw-medium sl-footer-nav-link" data-sl-edit="link">About Us</a>
            <a href="#" class="text-decoration-none sl-text-emphasis fw-medium sl-footer-nav-link" data-sl-edit="link">Instructors</a>
            <a href="#" class="text-decoration-none sl-text-emphasis fw-medium sl-footer-nav-link" data-sl-edit="link">Contact</a>
        </div>
        
        <div class="d-flex justify-content-center gap-4 mb-5">
            <a href="#" class="sl-text-muted sl-social-icon" aria-label="Twitter"><i class="fa fa-twitter fs-5"></i></a>
            <a href="#" class="sl-text-muted sl-social-icon" aria-label="Instagram"><i class="fa fa-instagram fs-5"></i></a>
            <a href="#" class="sl-text-muted sl-social-icon" aria-label="LinkedIn"><i class="fa fa-linkedin fs-5"></i></a>
        </div>
        
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center pt-4 border-top sl-border">
            <span class="small sl-text-muted mb-3 mb-md-0" data-sl-edit="text">© 2026 SmartLearn Academy</span>
            <div class="d-flex gap-3">
                <a href="#" class="text-decoration-none small sl-text-muted sl-footer-link" data-sl-edit="link">Privacy</a>
                <a href="#" class="text-decoration-none small sl-text-muted sl-footer-link" data-sl-edit="link">Terms</a>
            </div>
        </div>
    </div>
</footer>`,
        css: baseCss + `
.sl-footer-minimal .tracking-widest { letter-spacing: 0.15em; }
.sl-footer-minimal .sl-footer-nav-link { transition: color 0.2s ease, opacity 0.2s ease; position: relative; }
.sl-footer-minimal .sl-footer-nav-link:hover, .sl-footer-minimal .sl-footer-nav-link:focus { color: var(--smartlearn-primary) !important; opacity: 1; }
.sl-footer-minimal .sl-social-icon { transition: all 0.2s ease; display: inline-block; }
.sl-footer-minimal .sl-social-icon:hover, .sl-footer-minimal .sl-social-icon:focus { color: var(--smartlearn-primary) !important; transform: translateY(-2px); }
.sl-footer-minimal .sl-footer-link:hover, .sl-footer-minimal .sl-footer-link:focus { color: var(--smartlearn-primary) !important; }
`,
        js: `(function() { const root = document.querySelector('.sl-footer-minimal'); if (!root) return; })();`
    },

    // -----------------------------------------------------------------------------
    // 3. Mega Footer
    // -----------------------------------------------------------------------------
    {
        id: 'footer-mega',
        meta: {
            name: 'Mega Footer',
            category: 'Footer',
            variant: 'Institutional',
            description: 'Massive footer acting as a secondary category navigation system for large Moodle sites.',
            tags: ['footer', 'mega', 'corporate', 'large', 'categories'],
            image_count: 0
        },
        html: `<!-- sl-section: footer-mega | v1.0 -->
<footer class="sl-footer-mega sl-bg-card pt-6 pb-4 border-top sl-border">
    <div class="container">
        <!-- Mega Category Grid -->
        <div class="row mb-5 pb-5 border-bottom sl-border">
            <div class="col-12 mb-4">
                <h4 class="fw-bold sl-text-emphasis" data-sl-edit="text">Explore Categories</h4>
            </div>
            <div class="col-md-3 col-sm-6 mb-4 mb-md-0">
                <ul class="list-unstyled d-flex flex-column gap-2">
                    <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link d-flex align-items-center" data-sl-edit="link"><div class="sl-icon-wrapper sl-bg-primary-subtle rounded d-flex align-items-center justify-content-center me-3"><i class="fa fa-code sl-text-primary"></i></div>Development</a></li>
                    <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link d-flex align-items-center" data-sl-edit="link"><div class="sl-icon-wrapper sl-bg-primary-subtle rounded d-flex align-items-center justify-content-center me-3"><i class="fa fa-briefcase sl-text-primary"></i></div>Business</a></li>
                    <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link d-flex align-items-center" data-sl-edit="link"><div class="sl-icon-wrapper sl-bg-primary-subtle rounded d-flex align-items-center justify-content-center me-3"><i class="fa fa-money sl-text-primary"></i></div>Finance</a></li>
                </ul>
            </div>
            <div class="col-md-3 col-sm-6 mb-4 mb-md-0">
                <ul class="list-unstyled d-flex flex-column gap-2">
                    <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link d-flex align-items-center" data-sl-edit="link"><div class="sl-icon-wrapper sl-bg-primary-subtle rounded d-flex align-items-center justify-content-center me-3"><i class="fa fa-paint-brush sl-text-primary"></i></div>Design</a></li>
                    <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link d-flex align-items-center" data-sl-edit="link"><div class="sl-icon-wrapper sl-bg-primary-subtle rounded d-flex align-items-center justify-content-center me-3"><i class="fa fa-bullhorn sl-text-primary"></i></div>Marketing</a></li>
                    <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link d-flex align-items-center" data-sl-edit="link"><div class="sl-icon-wrapper sl-bg-primary-subtle rounded d-flex align-items-center justify-content-center me-3"><i class="fa fa-camera sl-text-primary"></i></div>Photography</a></li>
                </ul>
            </div>
            <div class="col-md-3 col-sm-6 mb-4 mb-md-0">
                <ul class="list-unstyled d-flex flex-column gap-2">
                    <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link d-flex align-items-center" data-sl-edit="link"><div class="sl-icon-wrapper sl-bg-primary-subtle rounded d-flex align-items-center justify-content-center me-3"><i class="fa fa-heartbeat sl-text-primary"></i></div>Health & Fitness</a></li>
                    <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link d-flex align-items-center" data-sl-edit="link"><div class="sl-icon-wrapper sl-bg-primary-subtle rounded d-flex align-items-center justify-content-center me-3"><i class="fa fa-music sl-text-primary"></i></div>Music</a></li>
                    <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link d-flex align-items-center" data-sl-edit="link"><div class="sl-icon-wrapper sl-bg-primary-subtle rounded d-flex align-items-center justify-content-center me-3"><i class="fa fa-flask sl-text-primary"></i></div>Science</a></li>
                </ul>
            </div>
            <div class="col-md-3 col-sm-6">
                <ul class="list-unstyled d-flex flex-column gap-2">
                    <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link d-flex align-items-center" data-sl-edit="link"><div class="sl-icon-wrapper sl-bg-primary-subtle rounded d-flex align-items-center justify-content-center me-3"><i class="fa fa-language sl-text-primary"></i></div>Languages</a></li>
                    <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link d-flex align-items-center" data-sl-edit="link"><div class="sl-icon-wrapper sl-bg-primary-subtle rounded d-flex align-items-center justify-content-center me-3"><i class="fa fa-users sl-text-primary"></i></div>Personal Dev</a></li>
                    <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link d-flex align-items-center" data-sl-edit="link"><div class="sl-icon-wrapper sl-bg-primary-subtle rounded d-flex align-items-center justify-content-center me-3"><i class="fa fa-desktop sl-text-primary"></i></div>IT & Software</a></li>
                </ul>
            </div>
        </div>
        
        <!-- Standard Footer Links -->
        <div class="row gy-4 mb-5">
            <div class="col-lg-5 pe-lg-5">
                <h3 class="fw-bold sl-text-emphasis mb-3" data-sl-edit="text">SmartLearn Hub</h3>
                <p class="sl-text-muted mb-4" data-sl-edit="text">The world's largest selection of online courses. Learn anytime, anywhere, at your own pace.</p>
                <a href="#" class="btn sl-btn-primary rounded-pill px-4" data-sl-edit="link">Explore All Courses</a>
            </div>
            <div class="col-lg-7">
                <div class="row">
                    <div class="col-sm-4 mb-4">
                        <h6 class="fw-bold sl-text-emphasis mb-3 text-uppercase small" data-sl-edit="text">Learn</h6>
                        <ul class="list-unstyled d-flex flex-column gap-2">
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Learning Paths</a></li>
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Certifications</a></li>
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Free Courses</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 mb-4">
                        <h6 class="fw-bold sl-text-emphasis mb-3 text-uppercase small" data-sl-edit="text">Community</h6>
                        <ul class="list-unstyled d-flex flex-column gap-2">
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Instructors</a></li>
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Student Forums</a></li>
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Blog</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 mb-4">
                        <h6 class="fw-bold sl-text-emphasis mb-3 text-uppercase small" data-sl-edit="text">Support</h6>
                        <ul class="list-unstyled d-flex flex-column gap-2">
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Help Center</a></li>
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">System Requirements</a></li>
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center pt-4 border-top sl-border">
            <span class="small sl-text-muted mb-3 mb-md-0" data-sl-edit="text">© 2026 SmartLearn Hub. All rights reserved.</span>
            <div class="d-flex gap-3">
                <a href="#" class="text-decoration-none small sl-text-muted sl-footer-link" data-sl-edit="link">Privacy</a>
                <a href="#" class="text-decoration-none small sl-text-muted sl-footer-link" data-sl-edit="link">Terms</a>
                <a href="#" class="text-decoration-none small sl-text-muted sl-footer-link" data-sl-edit="link">Sitemap</a>
            </div>
        </div>
    </div>
</footer>`,
        css: baseCss + `
.sl-footer-mega .sl-icon-wrapper { width: 32px; height: 32px; transition: background-color 0.2s ease; }
.sl-footer-mega .sl-footer-link { transition: all 0.2s ease; }
.sl-footer-mega .sl-footer-link:hover, .sl-footer-mega .sl-footer-link:focus { color: var(--smartlearn-primary) !important; padding-left: 6px; }
.sl-footer-mega .sl-footer-link:hover .sl-icon-wrapper { background-color: var(--smartlearn-primary) !important; }
.sl-footer-mega .sl-footer-link:hover .sl-icon-wrapper i { color: #FFFFFF !important; }
`,
        js: `(function() { const root = document.querySelector('.sl-footer-mega'); if (!root) return; })();`
    },

    // -----------------------------------------------------------------------------
    // 4. Modern Signature
    // -----------------------------------------------------------------------------
    {
        id: 'footer-modern-signature',
        meta: {
            name: 'Modern Signature',
            category: 'Footer',
            variant: 'Marketing',
            description: 'The flagship "wow" footer. Animated visual composition, sophisticated navigation, and premium interactions.',
            tags: ['footer', 'modern', 'signature', 'premium', 'animated'],
            image_count: 0
        },
        html: `<!-- sl-section: footer-modern-signature | v1.0 -->
<footer class="sl-footer-modern position-relative overflow-hidden sl-bg-main pt-7 pb-4 border-top sl-border">
    <div class="sl-bg-glow position-absolute top-0 start-50 translate-middle-x w-100 h-100" style="z-index: 0; pointer-events: none;"></div>
    
    <div class="container position-relative z-1">
        <div class="row align-items-center mb-6">
            <div class="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
                <h2 class="display-5 fw-bolder sl-text-emphasis mb-3" data-sl-edit="text">Level up your skills.</h2>
                <p class="fs-5 sl-text-muted mb-0" data-sl-edit="text">Join 50,000+ professionals learning on SmartLearn today.</p>
            </div>
            <div class="col-lg-6 text-center text-lg-end">
                <a href="#" class="btn sl-btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg sl-hover-lift d-inline-flex align-items-center gap-2" data-sl-edit="link">
                    Start Learning Free
                    <i class="fa fa-arrow-right"></i>
                </a>
            </div>
        </div>
        
        <div class="row gy-5 pb-5 border-bottom sl-border">
            <div class="col-lg-4 pe-lg-5 text-center text-lg-start">
                <h4 class="fw-bold sl-text-emphasis mb-4">SmartLearn</h4>
                <p class="sl-text-muted mb-4" data-sl-edit="text">Delivering world-class education directly to your screen with interactive, expert-led courses designed for real-world impact.</p>
                <div class="d-flex justify-content-center justify-content-lg-start gap-3">
                    <a href="#" class="sl-social-btn rounded-circle d-flex align-items-center justify-content-center sl-bg-card sl-text-emphasis sl-border" aria-label="Twitter"><i class="fa fa-twitter"></i></a>
                    <a href="#" class="sl-social-btn rounded-circle d-flex align-items-center justify-content-center sl-bg-card sl-text-emphasis sl-border" aria-label="LinkedIn"><i class="fa fa-linkedin"></i></a>
                    <a href="#" class="sl-social-btn rounded-circle d-flex align-items-center justify-content-center sl-bg-card sl-text-emphasis sl-border" aria-label="YouTube"><i class="fa fa-youtube-play"></i></a>
                </div>
            </div>
            
            <div class="col-lg-8">
                <div class="row text-center text-md-start">
                    <div class="col-md-4 mb-4 mb-md-0">
                        <h6 class="fw-bold sl-text-emphasis mb-4 text-uppercase sl-tracking-wide" data-sl-edit="text">Platform</h6>
                        <ul class="list-unstyled d-flex flex-column gap-3">
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Course Catalog</a></li>
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Pricing</a></li>
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">For Enterprise</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 mb-4 mb-md-0">
                        <h6 class="fw-bold sl-text-emphasis mb-4 text-uppercase sl-tracking-wide" data-sl-edit="text">Resources</h6>
                        <ul class="list-unstyled d-flex flex-column gap-3">
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Blog</a></li>
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Tutorials</a></li>
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Webinars</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h6 class="fw-bold sl-text-emphasis mb-4 text-uppercase sl-tracking-wide" data-sl-edit="text">Company</h6>
                        <ul class="list-unstyled d-flex flex-column gap-3">
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">About Us</a></li>
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Careers</a></li>
                            <li><a href="#" class="text-decoration-none sl-text-muted sl-footer-link" data-sl-edit="link">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center pt-4">
            <span class="small sl-text-muted mb-3 mb-md-0" data-sl-edit="text">© 2026 SmartLearn Inc.</span>
            <div class="d-flex gap-4">
                <a href="#" class="text-decoration-none small sl-text-muted sl-footer-link" data-sl-edit="link">Privacy</a>
                <a href="#" class="text-decoration-none small sl-text-muted sl-footer-link" data-sl-edit="link">Terms</a>
            </div>
        </div>
    </div>
</footer>`,
        css: baseCss + `
.sl-footer-modern .sl-bg-glow {
    background: radial-gradient(ellipse at top, color-mix(in srgb, var(--smartlearn-primary) 8%, transparent) 0%, transparent 70%);
}
.sl-footer-modern .sl-tracking-wide { letter-spacing: 0.05em; font-size: 0.85rem; }
.sl-footer-modern .sl-footer-link { transition: color 0.2s ease; position: relative; }
.sl-footer-modern .sl-footer-link:hover, .sl-footer-modern .sl-footer-link:focus { color: var(--smartlearn-primary) !important; }
.sl-footer-modern .sl-social-btn {
    width: 44px; height: 44px;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.sl-footer-modern .sl-social-btn:hover, .sl-footer-modern .sl-social-btn:focus {
    transform: translateY(-5px);
    background-color: var(--smartlearn-primary) !important;
    color: #FFFFFF !important;
    border-color: var(--smartlearn-primary) !important;
    box-shadow: 0 8px 15px color-mix(in srgb, var(--smartlearn-primary) 25%, transparent) !important;
}
.sl-footer-modern .sl-hover-lift { transition: transform 0.2s ease, box-shadow 0.2s ease; }
.sl-footer-modern .sl-hover-lift:hover { transform: translateY(-4px); }
`,
        js: `(function() { const root = document.querySelector('.sl-footer-modern'); if (!root) return; })();`
    },

    // -----------------------------------------------------------------------------
    // 5. CTA Footer
    // -----------------------------------------------------------------------------
    {
        id: 'footer-cta',
        meta: {
            name: 'CTA Footer',
            category: 'Footer',
            variant: 'Marketing',
            description: 'Conversion footer. Deliberately simple standard navigation overshadowed by a massive CTA element.',
            tags: ['footer', 'cta', 'conversion', 'marketing'],
            image_count: 0
        },
        html: `<!-- sl-section: footer-cta | v1.0 -->
<footer class="sl-footer-cta sl-bg-main pt-0 pb-4">
    <!-- CTA Banner -->
    <div class="sl-cta-banner sl-bg-primary py-7 mb-5 text-center position-relative overflow-hidden">
        <div class="sl-cta-overlay position-absolute inset-0 w-100 h-100"></div>
        <div class="container position-relative z-1">
            <h2 class="display-4 fw-bolder mb-4" style="color: #FFFFFF !important;" data-sl-edit="text">Ready to start learning?</h2>
            <p class="fs-4 mb-5 mx-auto opacity-75" style="max-width: 600px; color: #FFFFFF !important;" data-sl-edit="text">Discover thousands of courses built for your personal and professional goals.</p>
            <a href="#" class="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold text-dark shadow-lg sl-btn-cta" data-sl-edit="link">Explore Courses</a>
        </div>
    </div>
    
    <!-- Standard Minimal Footer -->
    <div class="container">
        <div class="row align-items-center py-4 border-bottom sl-border mb-4">
            <div class="col-md-3 text-center text-md-start mb-4 mb-md-0">
                <h3 class="fw-bold sl-text-emphasis mb-0">SmartLearn</h3>
            </div>
            <div class="col-md-9 text-center text-md-end">
                <div class="d-flex flex-wrap justify-content-center justify-content-md-end gap-4">
                    <a href="#" class="text-decoration-none sl-text-emphasis fw-medium sl-footer-nav-link" data-sl-edit="link">Courses</a>
                    <a href="#" class="text-decoration-none sl-text-emphasis fw-medium sl-footer-nav-link" data-sl-edit="link">Resources</a>
                    <a href="#" class="text-decoration-none sl-text-emphasis fw-medium sl-footer-nav-link" data-sl-edit="link">Instructors</a>
                    <a href="#" class="text-decoration-none sl-text-emphasis fw-medium sl-footer-nav-link" data-sl-edit="link">Support</a>
                </div>
            </div>
        </div>
        
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <span class="small sl-text-muted mb-3 mb-md-0" data-sl-edit="text">© 2026 SmartLearn. All rights reserved.</span>
            <div class="d-flex gap-3">
                <a href="#" class="sl-text-muted sl-footer-link" aria-label="Facebook"><i class="fa fa-facebook fs-5"></i></a>
                <a href="#" class="sl-text-muted sl-footer-link" aria-label="Twitter"><i class="fa fa-twitter fs-5"></i></a>
                <a href="#" class="sl-text-muted sl-footer-link" aria-label="LinkedIn"><i class="fa fa-linkedin fs-5"></i></a>
            </div>
        </div>
    </div>
</footer>`,
        css: baseCss + `
.sl-footer-cta .sl-cta-banner {
    border-radius: 0 0 40px 40px;
    background: linear-gradient(135deg, var(--smartlearn-primary) 0%, color-mix(in srgb, var(--smartlearn-primary) 60%, #000000) 100%);
}
.sl-footer-cta .sl-cta-overlay {
    background: radial-gradient(circle at top right, rgba(255,255,255,0.1), transparent 60%);
    pointer-events: none;
}
.sl-footer-cta .sl-btn-cta { transition: transform 0.2s ease, box-shadow 0.2s ease; }
.sl-footer-cta .sl-btn-cta:hover, .sl-footer-cta .sl-btn-cta:focus { transform: scale(1.05); }
.sl-footer-cta .sl-footer-nav-link, .sl-footer-cta .sl-footer-link {
    transition: color 0.2s ease, opacity 0.2s ease;
}
.sl-footer-cta .sl-footer-nav-link:hover, .sl-footer-cta .sl-footer-nav-link:focus { opacity: 0.7; color: var(--smartlearn-primary) !important; }
.sl-footer-cta .sl-footer-link:hover, .sl-footer-cta .sl-footer-link:focus { color: var(--smartlearn-primary) !important; }
@media (max-width: 768px) {
    .sl-footer-cta .sl-cta-banner { border-radius: 0 0 20px 20px; }
}
`,
        js: `(function() { const root = document.querySelector('.sl-footer-cta'); if (!root) return; })();`
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
console.log('Successfully generated first 5 Footers and updated catalog.json');
