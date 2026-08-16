const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const sectionsDir = path.join(publicDir, 'sections');
const catalogPath = path.join(publicDir, 'catalog.json');

// Ensure directories exist
if (!fs.existsSync(sectionsDir)) {
    fs.mkdirSync(sectionsDir, { recursive: true });
}

const sections = [
    {
        id: 'contact-hub',
        meta: {
            name: 'Contact Hub',
            category: 'Contact',
            variant: 'Hub',
            description: 'A comprehensive contact section with multiple contact methods and a quick form.',
            tags: ['contact', 'form', 'hub', 'support'],
            image_count: 0
        },
        html: `<!-- sl-section: contact-hub | v1.0 -->
<div class="sl-contact-hub">
    <div class="container py-5">
        <div class="row mb-5 text-center">
            <div class="col-12">
                <div class="header-banner p-4 rounded-4 text-start d-flex align-items-center justify-content-between mb-4">
                    <div>
                        <h2 class="fw-bold mb-1" data-sl-edit="text">Stay in Touch</h2>
                        <p class="mb-0 text-muted" data-sl-edit="text">We're here to help and answer any question you may have.</p>
                    </div>
                    <div class="d-none d-md-block fs-1">✈️</div>
                </div>
            </div>
        </div>
        <div class="row g-4 mb-5 text-center">
            <div class="col-md-3 col-sm-6">
                <div class="card border-0 h-100 p-4 contact-card email-card">
                    <div class="icon-wrap mx-auto mb-3"><i class="fa fa-envelope fa-2x"></i></div>
                    <h5 class="fw-bold" data-sl-edit="text">Email Us</h5>
                    <p class="text-muted small mb-3" data-sl-edit="text">support@smartlearn.education</p>
                    <div class="badge rounded-pill bg-light text-primary mt-auto" data-sl-edit="text"><i class="fa fa-clock-o me-1"></i> We reply within 24h</div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="card border-0 h-100 p-4 contact-card phone-card">
                    <div class="icon-wrap mx-auto mb-3"><i class="fa fa-phone fa-2x"></i></div>
                    <h5 class="fw-bold" data-sl-edit="text">Call Us</h5>
                    <p class="text-muted small mb-3" data-sl-edit="text">+1 (555) 123-4567</p>
                    <div class="badge rounded-pill bg-light text-success mt-auto" data-sl-edit="text"><i class="fa fa-circle me-1" style="font-size: 8px; vertical-align: middle;"></i> Mon - Fri, 9AM - 5PM</div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="card border-0 h-100 p-4 contact-card visit-card">
                    <div class="icon-wrap mx-auto mb-3"><i class="fa fa-map-marker fa-2x"></i></div>
                    <h5 class="fw-bold" data-sl-edit="text">Visit Us</h5>
                    <p class="text-muted small mb-3" data-sl-edit="text">123 Education Way<br>Learning City, LC 12345</p>
                    <a href="#" class="btn btn-sm btn-light text-warning w-100 mt-auto" data-sl-edit="link">Get Directions</a>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="card border-0 h-100 p-4 contact-card help-card">
                    <div class="icon-wrap mx-auto mb-3"><i class="fa fa-life-ring fa-2x"></i></div>
                    <h5 class="fw-bold" data-sl-edit="text">Help Center</h5>
                    <p class="text-muted small mb-3" data-sl-edit="text">Browse FAQs and help articles</p>
                    <a href="#" class="btn btn-sm btn-light text-info w-100 mt-auto" data-sl-edit="link">Visit Help Center</a>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-12">
                <div class="quick-form-card p-4 rounded-4 d-flex flex-column flex-md-row align-items-center gap-3">
                    <div class="form-icon rounded-circle d-flex align-items-center justify-content-center text-white"><i class="fa fa-edit"></i></div>
                    <div class="flex-grow-1">
                        <h6 class="fw-bold mb-1" data-sl-edit="text">Send us a quick message</h6>
                        <p class="text-muted small mb-0" data-sl-edit="text">We'll get back to you as soon as possible.</p>
                    </div>
                    <input type="email" class="form-control w-auto" placeholder="Your email">
                    <input type="text" class="form-control w-auto flex-grow-1" placeholder="Your message">
                    <button class="btn btn-primary px-4 rounded-pill" data-sl-edit="text"><i class="fa fa-paper-plane me-2"></i>Send</button>
                </div>
            </div>
        </div>
        
        <div class="row mt-4">
            <div class="col-12">
                <div class="privacy-footer p-3 px-4 rounded-3 d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center gap-3">
                        <i class="fa fa-shield text-primary fs-4"></i>
                        <div>
                            <h6 class="fw-bold mb-0" data-sl-edit="text">Your privacy matters</h6>
                            <p class="text-muted small mb-0" data-sl-edit="text">Your information is safe with us and will never be shared.</p>
                        </div>
                    </div>
                    <a href="#" class="text-decoration-none fw-semibold" data-sl-edit="link">Privacy Policy &rarr;</a>
                </div>
            </div>
        </div>
    </div>
</div>`,
        css: `.sl-contact-hub {
    background-color: var(--bs-body-bg);
    padding-top: 2rem;
    padding-bottom: 2rem;
}
.sl-contact-hub .header-banner {
    background-color: var(--bs-secondary-bg);
    border: 1px solid var(--bs-border-color);
    box-shadow: 0 10px 30px rgba(0,0,0,0.02);
}
.sl-contact-hub .contact-card {
    border-radius: 1rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
    transition: transform 0.3s ease;
}
.sl-contact-hub .contact-card:hover {
    transform: translateY(-5px);
}
.sl-contact-hub .icon-wrap {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.sl-contact-hub .email-card .icon-wrap { background-color: rgba(66, 133, 244, 0.1); color: #4285F4; }
.sl-contact-hub .phone-card .icon-wrap { background-color: rgba(52, 168, 83, 0.1); color: #34A853; }
.sl-contact-hub .visit-card .icon-wrap { background-color: rgba(251, 188, 5, 0.1); color: #FBBC05; }
.sl-contact-hub .help-card .icon-wrap { background-color: rgba(161, 66, 244, 0.1); color: #A142F4; }

.sl-contact-hub .quick-form-card {
    background-color: var(--bs-secondary-bg);
    border: 1px solid var(--bs-border-color);
    box-shadow: 0 10px 30px rgba(0,0,0,0.04);
}
.sl-contact-hub .form-icon {
    width: 45px;
    height: 45px;
    background-color: #7b61ff;
}
.sl-contact-hub .privacy-footer {
    background-color: var(--bs-tertiary-bg);
    border: 1px solid var(--bs-border-color);
}`,
        js: `(function() {
    const root = document.querySelector('.sl-contact-hub');
    if (!root) return;
    // Hub logic here if needed
})();`
    },
    {
        id: 'contact-split',
        meta: {
            name: 'Contact Split Screen',
            category: 'Contact',
            variant: 'Split',
            description: 'A classic 50/50 split layout with contact info on the left and a form on the right.',
            tags: ['contact', 'split', 'form'],
            image_count: 0
        },
        html: `<!-- sl-section: contact-split | v1.0 -->
<div class="sl-contact-split">
    <div class="container py-5">
        <div class="row align-items-center g-5">
            <div class="col-lg-5">
                <div class="pe-lg-4">
                    <span class="badge bg-primary-subtle text-primary mb-3 px-3 py-2 rounded-pill fw-semibold" data-sl-edit="text">Get In Touch</span>
                    <h2 class="fw-bold display-5 mb-4" data-sl-edit="text">Let's start a conversation</h2>
                    <p class="text-muted mb-5 fs-5" data-sl-edit="text">Have a question or want to work together? Leave us a message and our team will get back to you within 24 hours.</p>
                    
                    <div class="d-flex align-items-start mb-4">
                        <div class="contact-icon bg-light text-primary rounded-circle me-3"><i class="fa fa-map-marker fs-5"></i></div>
                        <div>
                            <h6 class="fw-bold mb-1" data-sl-edit="text">Our Location</h6>
                            <p class="text-muted mb-0" data-sl-edit="text">456 Innovation Drive<br>Tech District, TD 90210</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-start mb-4">
                        <div class="contact-icon bg-light text-primary rounded-circle me-3"><i class="fa fa-envelope fs-5"></i></div>
                        <div>
                            <h6 class="fw-bold mb-1" data-sl-edit="text">Email Address</h6>
                            <p class="text-muted mb-0" data-sl-edit="text">support@smartlearn.education</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-start mb-5">
                        <div class="contact-icon bg-light text-primary rounded-circle me-3"><i class="fa fa-phone fs-5"></i></div>
                        <div>
                            <h6 class="fw-bold mb-1" data-sl-edit="text">Phone Number</h6>
                            <p class="text-muted mb-0" data-sl-edit="text">+1 (800) 555-0199</p>
                        </div>
                    </div>
                    
                    <div class="social-links d-flex gap-2">
                        <a href="#" class="btn btn-outline-secondary rounded-circle"><i class="fa fa-facebook"></i></a>
                        <a href="#" class="btn btn-outline-secondary rounded-circle"><i class="fa fa-twitter"></i></a>
                        <a href="#" class="btn btn-outline-secondary rounded-circle"><i class="fa fa-linkedin"></i></a>
                        <a href="#" class="btn btn-outline-secondary rounded-circle"><i class="fa fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="contact-form-wrapper p-4 p-md-5 rounded-4 bg-body shadow-lg">
                    <h4 class="fw-bold mb-4" data-sl-edit="text">Send us a Message</h4>
                    <form>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="form-label fw-semibold text-muted small">First Name</label>
                                <input type="text" class="form-control form-control-lg bg-light border-0" placeholder="John">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-semibold text-muted small">Last Name</label>
                                <input type="text" class="form-control form-control-lg bg-light border-0" placeholder="Doe">
                            </div>
                            <div class="col-12">
                                <label class="form-label fw-semibold text-muted small">Email Address</label>
                                <input type="email" class="form-control form-control-lg bg-light border-0" placeholder="john@example.com">
                            </div>
                            <div class="col-12">
                                <label class="form-label fw-semibold text-muted small">Subject</label>
                                <input type="text" class="form-control form-control-lg bg-light border-0" placeholder="How can we help?">
                            </div>
                            <div class="col-12">
                                <label class="form-label fw-semibold text-muted small">Message</label>
                                <textarea class="form-control form-control-lg bg-light border-0" rows="4" placeholder="Your message here..."></textarea>
                            </div>
                            <div class="col-12 mt-4">
                                <button type="button" class="btn btn-primary btn-lg w-100 py-3 fw-bold rounded-3" data-sl-edit="text">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>`,
        css: `.sl-contact-split {
    background-color: var(--bs-body-bg);
    padding-top: 4rem;
    padding-bottom: 4rem;
}
.sl-contact-split .contact-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.sl-contact-split .social-links .btn {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: rgba(0,0,0,0.1);
    color: var(--sl-text, #333);
}
.sl-contact-split .social-links .btn:hover {
    background-color: var(--sl-primary, #0d6efd);
    color: white;
    border-color: var(--sl-primary, #0d6efd);
}
.sl-contact-split .form-control-lg {
    font-size: 1rem;
}
.sl-contact-split .contact-form-wrapper {
    border: 1px solid rgba(0,0,0,0.05);
}`,
        js: `(function() {
    const root = document.querySelector('.sl-contact-split');
    if (!root) return;
    // Logic here if needed
})();`
    },
    {
        id: 'contact-minimal',
        meta: {
            name: 'Contact Minimal Grid',
            category: 'Contact',
            variant: 'Minimal',
            description: 'A clean, simple 3-column layout highlighting key contact methods without a form.',
            tags: ['contact', 'minimal', 'grid'],
            image_count: 0
        },
        html: `<!-- sl-section: contact-minimal | v1.0 -->
<div class="sl-contact-minimal">
    <div class="container py-5">
        <div class="row mb-5 justify-content-center text-center">
            <div class="col-lg-8">
                <h2 class="fw-bold display-6 mb-3" data-sl-edit="text">We'd love to hear from you</h2>
                <p class="text-muted fs-5" data-sl-edit="text">Reach out to us through any of the channels below. Our support team is available 24/7 to assist you.</p>
            </div>
        </div>
        <div class="row g-4 justify-content-center text-center">
            <div class="col-md-4">
                <div class="minimal-card p-4 rounded-4 bg-body h-100">
                    <div class="icon-circle mx-auto mb-4 bg-primary-subtle text-primary">
                        <i class="fa fa-envelope-o fa-2x"></i>
                    </div>
                    <h5 class="fw-bold mb-3" data-sl-edit="text">Email</h5>
                    <p class="text-muted mb-4" data-sl-edit="text">Drop us a line anytime. We usually reply within a few hours.</p>
                    <a href="mailto:hello@example.com" class="text-decoration-none fw-bold text-primary" data-sl-edit="link">hello@example.com</a>
                </div>
            </div>
            <div class="col-md-4">
                <div class="minimal-card p-4 rounded-4 bg-body h-100 shadow-sm border border-primary border-opacity-25">
                    <div class="icon-circle mx-auto mb-4 bg-primary text-white shadow">
                        <i class="fa fa-phone fa-2x"></i>
                    </div>
                    <h5 class="fw-bold mb-3" data-sl-edit="text">Phone</h5>
                    <p class="text-muted mb-4" data-sl-edit="text">Need immediate assistance? Give us a call during business hours.</p>
                    <a href="tel:+1234567890" class="text-decoration-none fw-bold fs-5 text-body" data-sl-edit="link">+1 (800) 123-4567</a>
                </div>
            </div>
            <div class="col-md-4">
                <div class="minimal-card p-4 rounded-4 bg-body h-100">
                    <div class="icon-circle mx-auto mb-4 bg-info-subtle text-info">
                        <i class="fa fa-map-o fa-2x"></i>
                    </div>
                    <h5 class="fw-bold mb-3" data-sl-edit="text">Office</h5>
                    <p class="text-muted mb-4" data-sl-edit="text">Come visit our headquarters. We'd love to show you around.</p>
                    <p class="mb-0 fw-semibold text-body" data-sl-edit="text">789 Skyline Blvd, Suite 100<br>San Francisco, CA 94107</p>
                </div>
            </div>
        </div>
    </div>
</div>`,
        css: `.sl-contact-minimal {
    background-color: var(--bs-tertiary-bg);
    padding-top: 5rem;
    padding-bottom: 5rem;
}
.sl-contact-minimal .minimal-card {
    border: 1px solid rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.sl-contact-minimal .minimal-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.05) !important;
}
.sl-contact-minimal .icon-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}`,
        js: `(function() {
    const root = document.querySelector('.sl-contact-minimal');
    if (!root) return;
})();`
    },
    {
        id: 'contact-map',
        meta: {
            name: 'Contact Map Glass',
            category: 'Contact',
            variant: 'Map',
            description: 'A premium layout featuring a full-width background map and a floating frosted glass contact card.',
            tags: ['contact', 'map', 'glassmorphism', 'form'],
            image_count: 0
        },
        html: `<!-- sl-section: contact-map | v1.0 -->
<div class="sl-contact-map">
    <div class="map-background d-flex align-items-center justify-content-center justify-content-lg-start">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-5 col-md-8">
                    <div class="glass-card p-4 p-md-5 rounded-4 shadow-lg">
                        <h3 class="fw-bold mb-2 text-dark" data-sl-edit="text">Drop us a line</h3>
                        <p class="text-dark opacity-75 mb-4" data-sl-edit="text">Our headquarters is located in the heart of the city.</p>
                        
                        <div class="d-flex mb-3">
                            <i class="fa fa-map-marker text-primary mt-1 me-3 fs-5"></i>
                            <span class="text-dark fw-medium" data-sl-edit="text">100 Global Center, Downtown<br>Metropolis, NY 10001</span>
                        </div>
                        <div class="d-flex mb-4">
                            <i class="fa fa-phone text-primary mt-1 me-3 fs-5"></i>
                            <span class="text-dark fw-medium" data-sl-edit="text">+1 (555) 987-6543</span>
                        </div>
                        
                        <hr class="border-dark opacity-25 mb-4">
                        
                        <form>
                            <div class="mb-3">
                                <input type="text" class="form-control bg-light text-dark bg-opacity-75 border-0" placeholder="Your Name">
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control bg-light text-dark bg-opacity-75 border-0" placeholder="Your Email">
                            </div>
                            <div class="mb-4">
                                <textarea class="form-control bg-light text-dark bg-opacity-75 border-0" rows="3" placeholder="Message"></textarea>
                            </div>
                            <button type="button" class="btn btn-dark w-100 rounded-3 py-2 fw-bold" data-sl-edit="text">Submit Request</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,
        css: `.sl-contact-map {
    position: relative;
    background-color: #e5e3df; /* Map color fallback */
}
.sl-contact-map .map-background {
    min-height: 700px;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="700"><rect width="100%" height="100%" fill="%23e8eaed"/><path d="M100 100 L300 200 L500 50 L900 300 M50 400 L200 600 L600 450 L800 650 M400 100 L500 700 M700 0 L600 700" stroke="%23ffffff" stroke-width="8" fill="none"/><circle cx="500" cy="350" r="15" fill="%23ea4335"/><circle cx="500" cy="350" r="25" fill="%23ea4335" opacity="0.3"/></svg>');
    background-size: cover;
    background-position: center;
}
.sl-contact-map .glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.4);
}
.sl-contact-map .form-control:focus {
    background: #ffffff;
    box-shadow: none;
    border: 1px solid var(--sl-primary, #0d6efd);
}`,
        js: `(function() {
    const root = document.querySelector('.sl-contact-map');
    if (!root) return;
})();`
    },
    {
        id: 'contact-image',
        meta: {
            name: 'Contact Image Split',
            category: 'Contact',
            variant: 'Image Split',
            description: 'A 50/50 layout with a beautiful full-height image on one side and a form on the other.',
            tags: ['contact', 'image', 'split', 'form'],
            image_count: 1
        },
        html: `<!-- sl-section: contact-image | v1.0 -->
<div class="sl-contact-image">
    <div class="container-fluid p-0">
        <div class="row g-0">
            <div class="col-lg-6 d-none d-lg-block">
                <div class="image-wrapper w-100 h-100" style="min-height: 600px;">
                    <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Customer Support" class="w-100 h-100 object-fit-cover" data-sl-edit="image">
                </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center bg-body">
                <div class="form-wrapper w-100 p-5 px-xl-5 py-xl-5 m-xl-5">
                    <h2 class="fw-bold display-6 mb-3" data-sl-edit="text">Get in touch today.</h2>
                    <p class="text-muted fs-5 mb-5" data-sl-edit="text">Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.</p>
                    
                    <form>
                        <div class="row g-4">
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Name</label>
                                <input type="text" class="form-control border-secondary-subtle py-2" placeholder="Jane Doe">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-semibold">Email</label>
                                <input type="email" class="form-control border-secondary-subtle py-2" placeholder="jane@company.com">
                            </div>
                            <div class="col-12">
                                <label class="form-label fw-semibold">Subject</label>
                                <select class="form-select border-secondary-subtle py-2">
                                    <option>General Inquiry</option>
                                    <option>Sales & Pricing</option>
                                    <option>Technical Support</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <label class="form-label fw-semibold">Message</label>
                                <textarea class="form-control border-secondary-subtle py-2" rows="5" placeholder="How can we help you?"></textarea>
                            </div>
                            <div class="col-12 mt-4">
                                <button type="button" class="btn btn-primary px-5 py-3 fw-bold rounded-pill" data-sl-edit="text">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>`,
        css: `.sl-contact-image {
    background-color: var(--bs-body-bg);
}
.sl-contact-image .object-fit-cover {
    object-fit: cover;
}
.sl-contact-image .form-control:focus, .sl-contact-image .form-select:focus {
    border-color: var(--sl-primary, #0d6efd);
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
}`,
        js: `(function() {
    const root = document.querySelector('.sl-contact-image');
    if (!root) return;
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
    
    // write json file
    const filePath = path.join(sectionsDir, sec.id + '.json');
    fs.writeFileSync(filePath, JSON.stringify(sectionData, null, 2));
    
    // update catalog
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

console.log('Successfully generated 5 contact sections and updated catalog.json');
