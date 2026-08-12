const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, '../public/sections');
const catalogPath = path.join(__dirname, '../public/catalog.json');

// Ensure directory exists
if (!fs.existsSync(sectionsDir)) {
    fs.mkdirSync(sectionsDir, { recursive: true });
}

// Helper to save section
function saveSection(id, data) {
    const filePath = path.join(sectionsDir, id + '.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log('Saved ' + id + '.json');
}

// 5. Bento Action Grid
const cta5 = {
    id: "cta_bento_grid",
    name: "Bento Action Grid",
    category: "Call to Action",
    subcategory: "Multi-Action",
    description: "An asymmetrical grid highlighting a primary action and supporting secondary actions.",
    schema: {
        settings: [
            { id: "main_heading", type: "text", label: "Main Heading", default: "Ready to Apply?" },
            { id: "main_desc", type: "textarea", label: "Main Description", default: "Join the next cohort and accelerate your career." },
            { id: "main_cta_text", type: "text", label: "Main CTA Text", default: "Apply Now" },
            { id: "main_cta_url", type: "url", label: "Main CTA URL", default: "#" },
            { id: "card1_title", type: "text", label: "Card 1 Title", default: "Explore Courses" },
            { id: "card1_url", type: "url", label: "Card 1 URL", default: "#" },
            { id: "card1_icon", type: "icon", label: "Card 1 Icon", default: "fa-book" },
            { id: "card2_title", type: "text", label: "Card 2 Title", default: "Download Syllabus" },
            { id: "card2_url", type: "url", label: "Card 2 URL", default: "#" },
            { id: "card2_icon", type: "icon", label: "Card 2 Icon", default: "fa-download" },
            { id: "card3_title", type: "text", label: "Card 3 Title", default: "Talk to an Advisor" },
            { id: "card3_url", type: "url", label: "Card 3 URL", default: "#" },
            { id: "card3_icon", type: "icon", label: "Card 3 Icon", default: "fa-comments" }
        ]
    },
    template: `
        <div class="sl-cta-bento py-6 py-md-8 sl-bg-secondary">
            <div class="container">
                <div class="row g-4 justify-content-center">
                    <!-- Main Card -->
                    <div class="col-lg-6 col-xl-5">
                        <div class="sl-bento-card main h-100 p-5 rounded-4 d-flex flex-column justify-content-between sl-bg-primary position-relative overflow-hidden shadow-sm">
                            <div class="position-relative z-1">
                                <h3 class="display-6 fw-bold text-white mb-3">{{main_heading}}</h3>
                                {{#main_desc}}<p class="fs-5 text-white-50 mb-5">{{main_desc}}</p>{{/main_desc}}
                            </div>
                            <div class="position-relative z-1 mt-auto">
                                <a href="{{main_cta_url}}" class="btn btn-light btn-lg px-4 py-3 rounded-pill fw-semibold text-primary w-100 sl-bento-main-btn">{{main_cta_text}}</a>
                            </div>
                            <!-- Subtle decorative circle -->
                            <div class="position-absolute sl-bento-deco bg-white opacity-10 rounded-circle" style="width: 300px; height: 300px; top: -100px; right: -100px;"></div>
                        </div>
                    </div>
                    <!-- Secondary Cards -->
                    <div class="col-lg-6 col-xl-5">
                        <div class="row g-4 h-100">
                            <!-- Card 1 -->
                            <div class="col-12">
                                <a href="{{card1_url}}" class="sl-bento-card secondary h-100 p-4 rounded-4 text-decoration-none d-flex align-items-center bg-white shadow-sm sl-hover-lift">
                                    <div class="sl-bento-icon-wrap rounded-circle sl-bg-primary-subtle text-primary d-flex align-items-center justify-content-center me-4" style="width: 56px; height: 56px;">
                                        <i class="fa {{card1_icon}} fs-4"></i>
                                    </div>
                                    <div>
                                        <h4 class="fs-5 fw-bold mb-0 text-dark">{{card1_title}}</h4>
                                        <span class="text-muted small">Learn more &rarr;</span>
                                    </div>
                                </a>
                            </div>
                            <!-- Card 2 & 3 -->
                            <div class="col-md-6">
                                <a href="{{card2_url}}" class="sl-bento-card secondary h-100 p-4 rounded-4 text-decoration-none d-flex flex-column bg-white shadow-sm sl-hover-lift text-center">
                                    <div class="sl-bento-icon-wrap rounded-circle bg-light text-secondary d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 48px; height: 48px;">
                                        <i class="fa {{card2_icon}} fs-5"></i>
                                    </div>
                                    <h4 class="fs-6 fw-bold mb-0 text-dark">{{card2_title}}</h4>
                                </a>
                            </div>
                            <div class="col-md-6">
                                <a href="{{card3_url}}" class="sl-bento-card secondary h-100 p-4 rounded-4 text-decoration-none d-flex flex-column bg-white shadow-sm sl-hover-lift text-center">
                                    <div class="sl-bento-icon-wrap rounded-circle bg-light text-secondary d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 48px; height: 48px;">
                                        <i class="fa {{card3_icon}} fs-5"></i>
                                    </div>
                                    <h4 class="fs-6 fw-bold mb-0 text-dark">{{card3_title}}</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>
                .sl-bento-main-btn { transition: transform 0.2s ease, box-shadow 0.2s ease; color: var(--sl-color-primary) !important; }
                .sl-bento-main-btn:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
                .sl-hover-lift { transition: transform 0.2s ease, box-shadow 0.2s ease; border: 1px solid var(--sl-border-color); }
                .sl-hover-lift:hover { transform: translateY(-4px); box-shadow: 0 10px 25px rgba(0,0,0,0.05) !important; border-color: var(--sl-color-primary); }
                .sl-bg-primary-subtle { background-color: rgba(var(--sl-color-primary-rgb), 0.1); }
                
                [data-bs-theme="dark"] .sl-bento-card.secondary { background-color: var(--sl-bg-card) !important; }
                [data-bs-theme="dark"] .sl-bento-card.secondary h4 { color: var(--sl-text-primary) !important; }
                
                @media (prefers-reduced-motion: reduce) {
                    .sl-bento-main-btn, .sl-hover-lift { transition: none; }
                    .sl-bento-main-btn:hover, .sl-hover-lift:hover { transform: none; }
                }
            </style>
        </div>
    `
};

// 6. The App Store Download
const cta6 = {
    id: "cta_app_download",
    name: "App Store Download",
    category: "Call to Action",
    subcategory: "Mobile Conversion",
    description: "A modular section designed to drive mobile app installs. Hides completely if no links are provided.",
    schema: {
        settings: [
            { id: "heading", type: "text", label: "Heading", default: "Learn on the go" },
            { id: "desc", type: "textarea", label: "Description", default: "Download our mobile app to access your courses anytime, anywhere." },
            { id: "app_store_url", type: "url", label: "App Store URL (Leave empty to hide)" },
            { id: "play_store_url", type: "url", label: "Google Play URL (Leave empty to hide)" },
            { id: "phone_mockup", type: "image", label: "Phone Mockup Image (Optional)" },
            { id: "qr_code", type: "image", label: "QR Code Image (Optional)" }
        ]
    },
    template: `
        {{#app_store_url}}<!-- Valid CTA --><div class="sl-cta-app py-7 py-md-9 overflow-hidden" style="background-color: var(--sl-bg-card);">{{/app_store_url}}
        {{^app_store_url}}{{#play_store_url}}<!-- Valid CTA --><div class="sl-cta-app py-7 py-md-9 overflow-hidden" style="background-color: var(--sl-bg-card);">{{/play_store_url}}{{/app_store_url}}
        
        {{#app_store_url}}
            <div class="container position-relative">
                <div class="row align-items-center justify-content-between">
                    <!-- Text & Buttons -->
                    <div class="col-lg-5 col-xl-5 mb-5 mb-lg-0 text-center text-lg-start z-1">
                        <h2 class="display-5 fw-bold mb-3" style="color: var(--sl-text-primary);">{{heading}}</h2>
                        {{#desc}}<p class="lead mb-5" style="color: var(--sl-text-secondary);">{{desc}}</p>{{/desc}}
                        
                        <div class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 align-items-center">
                            {{#app_store_url}}
                            <a href="{{app_store_url}}" class="sl-app-btn sl-app-store sl-hover-lift" aria-label="Download on the App Store">
                                <svg viewBox="0 0 135 40" width="135" height="40" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0,5 C0,2.23857625 2.23857625,0 5,0 L130,0 C132.761424,0 135,2.23857625 135,5 L135,35 C135,37.7614237 132.761424,40 130,40 L5,40 C2.23857625,40 0,37.7614237 0,35 L0,5 Z" fill="#000000"></path>
                                    <path d="M25.75,21.5 C25.75,18.04 28.5,16 28.6,15.9 C27,13.5 24.3,13 23.3,12.9 C20.9,12.6 18.5,14.2 17.2,14.2 C15.9,14.2 14,12.8 12,12.9 C9.6,12.9 7.3,14.3 6,16.5 C3.3,21.2 5.3,28.2 7.9,32 C9.2,33.8 10.7,35.9 12.7,35.8 C14.7,35.7 15.5,34.5 17.9,34.5 C20.3,34.5 21,35.9 23.1,35.8 C25.2,35.7 26.5,33.8 27.8,32 C29.2,29.9 29.8,27.8 29.8,27.7 C29.7,27.6 25.75,26.1 25.75,21.5 M20.9,10.6 C22,9.3 22.8,7.4 22.6,5.5 C21,5.6 19,6.6 17.9,7.9 C16.9,9 16,11 16.3,12.8 C18.1,12.9 20,11.9 20.9,10.6" fill="#FFFFFF"></path>
                                    <text x="38" y="16" fill="#FFFFFF" font-family="-apple-system, sans-serif" font-size="10" font-weight="500">Download on the</text>
                                    <text x="38" y="31" fill="#FFFFFF" font-family="-apple-system, sans-serif" font-size="16" font-weight="bold">App Store</text>
                                </svg>
                            </a>
                            {{/app_store_url}}
                            
                            {{#play_store_url}}
                            <a href="{{play_store_url}}" class="sl-app-btn sl-play-store sl-hover-lift" aria-label="Get it on Google Play">
                                <svg viewBox="0 0 135 40" width="135" height="40" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0,5 C0,2.23857625 2.23857625,0 5,0 L130,0 C132.761424,0 135,2.23857625 135,5 L135,35 C135,37.7614237 132.761424,40 130,40 L5,40 C2.23857625,40 0,37.7614237 0,35 L0,5 Z" fill="#000000"></path>
                                    <path d="M8.5,8.1 L23.9,16.8 L23.9,16.8 C24.6,17.2 24.6,18.3 23.9,18.7 L8.5,27.4 C7.9,27.8 7,27.3 7,26.5 L7,9 C7,8.2 7.9,7.7 8.5,8.1 Z" fill="#FFFFFF"></path>
                                    <text x="32" y="16" fill="#FFFFFF" font-family="-apple-system, sans-serif" font-size="10" font-weight="500">GET IT ON</text>
                                    <text x="32" y="31" fill="#FFFFFF" font-family="-apple-system, sans-serif" font-size="15" font-weight="bold">Google Play</text>
                                </svg>
                            </a>
                            {{/play_store_url}}
                            
                            {{#qr_code}}
                            <div class="d-none d-xl-flex align-items-center ms-3 ps-3 border-start">
                                <img src="{{qr_code}}" alt="Scan to download" class="rounded border bg-white p-1 shadow-sm" width="60" height="60">
                                <div class="ms-2 small text-muted lh-sm text-start">Scan to<br>download</div>
                            </div>
                            {{/qr_code}}
                        </div>
                    </div>
                    
                    {{#phone_mockup}}
                    <!-- Mockup image (Optional) -->
                    <div class="col-lg-6 col-xl-6 mt-5 mt-lg-0 text-center position-relative">
                        <!-- Background glow effect behind mockup -->
                        <div class="position-absolute top-50 start-50 translate-middle sl-bg-primary opacity-25 rounded-circle blur-effect d-none d-lg-block" style="width: 400px; height: 400px; filter: blur(60px);"></div>
                        <img src="{{phone_mockup}}" alt="Mobile app preview" class="img-fluid position-relative z-1 sl-mockup-img" style="max-height: 500px; filter: drop-shadow(0 20px 30px rgba(0,0,0,0.15));">
                    </div>
                    {{/phone_mockup}}
                </div>
            </div>
            
            <style>
                .sl-hover-lift { transition: transform 0.2s ease, box-shadow 0.2s ease; display: inline-block; border-radius: 5px; }
                .sl-hover-lift:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
                @media (prefers-reduced-motion: reduce) {
                    .sl-hover-lift { transition: none; }
                    .sl-hover-lift:hover { transform: none; box-shadow: none; }
                }
            </style>
        {{/app_store_url}}
        {{#app_store_url}}</div>{{/app_store_url}}
        {{^app_store_url}}{{#play_store_url}}</div>{{/play_store_url}}{{/app_store_url}}
    `
};

// 7. The Course Enrollment CTA (Showcase Component - Transactional LMS)
const cta7 = {
    id: "cta_course_enrollment",
    name: "Course Enrollment CTA",
    category: "Call to Action",
    subcategory: "LMS specific",
    description: "A highly detailed, Moodle-specific transactional CTA designed to drive enrollment for a single course.",
    schema: {
        settings: [
            { id: "course_id", type: "text", label: "Moodle Course ID (Required for state tracking)", default: "1" },
            { id: "course_title", type: "text", label: "Course Title", default: "Python for Data Analysis" },
            { id: "course_thumb", type: "image", label: "Course Thumbnail (Optional)" },
            { id: "price", type: "text", label: "Price (e.g. '$129', 'Free') - Leave empty to hide", default: "$129" },
            { id: "rating", type: "text", label: "Rating (Optional)", default: "4.9" },
            { id: "enrollment_count", type: "text", label: "Learners Count (Optional)", default: "2,480" },
            { id: "level", type: "text", label: "Level (Optional)", default: "Intermediate" },
            { id: "duration", type: "text", label: "Duration (Optional)", default: "12 Weeks" },
            { id: "has_cert", type: "checkbox", label: "Includes Certificate?", default: true }
        ]
    },
    template: `
        <!-- Note: Real Moodle implementations would use PHP to inject 'user_enrolled', 'is_guest', etc. -->
        <div class="sl-cta-course py-5 py-md-7 border-top border-bottom" style="background-color: var(--sl-bg-body);">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10 col-xl-8">
                        <div class="sl-course-cta-card rounded-4 p-4 p-md-5 d-flex flex-column flex-md-row align-items-center gap-4 bg-white shadow-sm border" style="border-color: var(--sl-border-color) !important;">
                            
                            {{#course_thumb}}
                            <div class="sl-course-thumb rounded-3 overflow-hidden flex-shrink-0 mb-3 mb-md-0 shadow-sm" style="width: 120px; height: 120px;">
                                <img src="{{course_thumb}}" alt="{{course_title}}" class="w-100 h-100 object-fit-cover">
                            </div>
                            {{/course_thumb}}
                            
                            <div class="sl-course-info flex-grow-1 text-center text-md-start">
                                <h3 class="fs-3 fw-bold mb-2 text-dark">{{course_title}}</h3>
                                
                                <div class="d-flex flex-wrap justify-content-center justify-content-md-start gap-2 gap-md-3 mb-3 text-muted small fw-medium align-items-center">
                                    {{#rating}}<span class="sl-meta-item text-warning"><i class="fa fa-star me-1"></i>{{rating}}</span>{{/rating}}
                                    {{#enrollment_count}}<span class="sl-meta-item"><i class="fa fa-users me-1 opacity-75"></i>{{enrollment_count}} learners</span>{{/enrollment_count}}
                                    {{#level}}<span class="sl-meta-item"><i class="fa fa-signal me-1 opacity-75"></i>{{level}}</span>{{/level}}
                                    {{#duration}}<span class="sl-meta-item"><i class="fa fa-clock-o me-1 opacity-75"></i>{{duration}}</span>{{/duration}}
                                </div>
                                
                                {{#has_cert}}
                                <div class="sl-cert-badge d-inline-flex align-items-center px-3 py-1 rounded-pill small fw-semibold" style="background-color: rgba(var(--sl-color-success-rgb), 0.1); color: var(--sl-color-success);">
                                    <i class="fa fa-certificate me-2"></i> Certificate included
                                </div>
                                {{/has_cert}}
                            </div>
                            
                            <div class="sl-course-action border-start-md ps-md-4 text-center d-flex flex-column align-items-center justify-content-center mt-3 mt-md-0" style="min-width: 180px;">
                                {{#price}}<div class="fs-2 fw-black text-dark mb-3 lh-1">{{price}}</div>{{/price}}
                                
                                <!-- State: Guest / Not enrolled -->
                                <a href="/course/view.php?id={{course_id}}" class="btn btn-primary btn-lg w-100 rounded-pill fw-bold shadow-sm sl-btn-primary">Enroll Now</a>
                                
                                <!-- State: Enrolled (Hidden in preview, would be toggled via PHP/JS) -->
                                <!-- <a href="/course/view.php?id={{course_id}}" class="btn btn-success btn-lg w-100 rounded-pill fw-bold shadow-sm"><i class="fa fa-play-circle me-2"></i>Continue Course</a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>
                [data-bs-theme="dark"] .sl-course-cta-card { background-color: var(--sl-bg-card) !important; }
                [data-bs-theme="dark"] .sl-course-cta-card h3, [data-bs-theme="dark"] .sl-course-action .fs-2 { color: var(--sl-text-primary) !important; }
                .sl-meta-item { display: inline-flex; align-items: center; }
                .sl-meta-item:not(:last-child)::after { content: "•"; margin-left: 0.75rem; opacity: 0.3; }
                
                .sl-btn-primary { background-color: var(--sl-color-primary); border-color: var(--sl-color-primary); color: var(--sl-text-on-primary); transition: background-color 0.2s, transform 0.2s; }
                .sl-btn-primary:hover { background-color: var(--sl-color-primary-hover); transform: translateY(-2px); }
                
                @media (max-width: 767.98px) {
                    .border-start-md { border-left: none !important; }
                    .sl-course-action { width: 100%; border-top: 1px solid var(--sl-border-color); padding-top: 1.5rem; }
                    .sl-meta-item:not(:last-child)::after { display: none; }
                    .sl-meta-item { border: 1px solid var(--sl-border-color); padding: 2px 8px; border-radius: 4px; }
                }
                @media (prefers-reduced-motion: reduce) {
                    .sl-btn-primary { transition: none; transform: none !important; }
                }
            </style>
        </div>
    `
};

// 8. The Dynamic Floating Elements (Community/3D composition)
const cta8 = {
    id: "cta_dynamic_floating",
    name: "Dynamic Floating Elements",
    category: "Call to Action",
    subcategory: "Community",
    description: "Visually engaging community-focused layout with floating meaningful LMS elements.",
    schema: {
        settings: [
            { id: "heading", type: "text", label: "Heading", default: "Join thousands of successful learners" },
            { id: "primary_cta_text", type: "text", label: "Button Text", default: "Create Free Account" },
            { id: "primary_cta_url", type: "url", label: "Button URL", default: "#" },
            { id: "bg_color", type: "color", label: "Background Color", default: "#f8f9fa" }
        ]
    },
    template: `
        <div class="sl-cta-floating py-8 py-md-10 position-relative overflow-hidden" style="background-color: {{bg_color}};">
            
            <!-- Floating Elements Background Container -->
            <div class="position-absolute top-0 start-0 w-100 h-100 overflow-hidden z-0 pointer-events-none sl-floating-container">
                <!-- Avatar 1 -->
                <div class="sl-float-item position-absolute rounded-circle overflow-hidden shadow" style="width: 60px; height: 60px; top: 15%; left: 15%; animation-delay: 0s;">
                    <img src="https://i.pravatar.cc/150?u=1" alt="Student" class="w-100 h-100 object-fit-cover">
                </div>
                <!-- Avatar 2 -->
                <div class="sl-float-item position-absolute rounded-circle overflow-hidden shadow" style="width: 80px; height: 80px; bottom: 20%; left: 10%; animation-delay: 1.5s;">
                    <img src="https://i.pravatar.cc/150?u=2" alt="Student" class="w-100 h-100 object-fit-cover">
                </div>
                <!-- Avatar 3 -->
                <div class="sl-float-item position-absolute rounded-circle overflow-hidden shadow" style="width: 70px; height: 70px; top: 25%; right: 10%; animation-delay: 0.5s;">
                    <img src="https://i.pravatar.cc/150?u=3" alt="Student" class="w-100 h-100 object-fit-cover">
                </div>
                <!-- Certificate Badge -->
                <div class="sl-float-item position-absolute bg-white rounded-3 shadow p-2 d-flex align-items-center gap-2" style="bottom: 30%; right: 15%; animation-delay: 2s; border: 1px solid var(--sl-border-color);">
                    <i class="fa fa-certificate fs-4" style="color: var(--sl-color-primary);"></i>
                    <span class="fw-bold small text-dark d-none d-md-block">Certified</span>
                </div>
                <!-- Progress Badge -->
                <div class="sl-float-item position-absolute bg-white rounded-pill shadow p-2 px-3 d-flex align-items-center gap-2" style="top: 10%; right: 30%; animation-delay: 1s; border: 1px solid var(--sl-border-color);">
                    <i class="fa fa-check-circle text-success fs-5"></i>
                    <span class="fw-bold small text-dark d-none d-md-block">100% Completed</span>
                </div>
            </div>

            <!-- Content -->
            <div class="container position-relative z-1 text-center">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-8">
                        <div class="bg-white bg-opacity-75 p-5 rounded-4 shadow-sm sl-backdrop-blur" style="border: 1px solid var(--sl-border-color);">
                            <h2 class="display-5 fw-bold mb-4" style="color: var(--sl-text-primary);">{{heading}}</h2>
                            <a href="{{primary_cta_url}}" class="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow sl-btn-primary text-uppercase tracking-wide">{{primary_cta_text}}</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>
                .sl-backdrop-blur { backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); }
                [data-bs-theme="dark"] .sl-cta-floating { background-color: var(--sl-bg-body) !important; }
                [data-bs-theme="dark"] .sl-cta-floating .bg-white { background-color: var(--sl-bg-card) !important; color: var(--sl-text-primary) !important; }
                [data-bs-theme="dark"] .sl-cta-floating .text-dark { color: var(--sl-text-primary) !important; }
                
                .sl-float-item {
                    animation: floatY 6s ease-in-out infinite;
                }
                
                @keyframes floatY {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0); }
                }
                
                .sl-btn-primary { background-color: var(--sl-color-primary); border-color: var(--sl-color-primary); color: var(--sl-text-on-primary); transition: transform 0.2s, box-shadow 0.2s; }
                .sl-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(var(--sl-color-primary-rgb), 0.3) !important; background-color: var(--sl-color-primary-hover); }
                
                /* PREFERS REDUCED MOTION */
                @media (prefers-reduced-motion: reduce) {
                    .sl-float-item { animation: none !important; opacity: 0.5; transform: scale(0.8); }
                    /* Reduce decorative objects on mobile or when reduced motion is preferred */
                    .sl-floating-container { display: none; }
                    .sl-btn-primary { transition: none; transform: none !important; box-shadow: none !important; }
                }
                
                /* Intentional Mobile Composition */
                @media (max-width: 767.98px) {
                    /* Hide floating elements to prevent visual clutter */
                    .sl-floating-container { display: none; }
                    .sl-cta-floating .bg-white { padding: 2rem !important; border: none; background: transparent !important; box-shadow: none !important; backdrop-filter: none; }
                }
            </style>
        </div>
    `
};


[cta5, cta6, cta7, cta8].forEach(cta => saveSection(cta.id, cta));

// Update catalog
let catalog = { sections: [] };
if (fs.existsSync(catalogPath)) {
    catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
}

[cta5, cta6, cta7, cta8].forEach(cta => {
    if (!catalog.sections.find(s => s.id === cta.id)) {
        catalog.sections.push({
            id: cta.id,
            name: cta.name,
            category: cta.category,
            subcategory: cta.subcategory
        });
    }
});

fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2));
console.log('Updated catalog.json');
