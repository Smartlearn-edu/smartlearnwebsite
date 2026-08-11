const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const sectionsDir = path.join(publicDir, 'sections');
const catalogPath = path.join(publicDir, 'catalog.json');

const sections = [
    {
        id: 'hero-video-gallery',
        meta: {
            name: 'Video Gallery Hero',
            category: 'Hero',
            variant: 'Video Platform',
            description: 'A comprehensive hero section featuring a multi-video gallery player, text content, and feature highlights at the bottom.',
            tags: ['hero', 'video', 'gallery', 'features', 'modern'],
            image_count: 5
        },
        html: `<!-- sl-section: hero-video-gallery | v1.0 -->
<div class="sl-hero-vid-gallery position-relative bg-body overflow-hidden py-5 py-lg-6">
    <!-- Abstract Background Elements -->
    <div class="position-absolute top-0 start-0 w-100 h-100 pointer-events-none" style="z-index: 0; opacity: 0.4;">
        <svg class="position-absolute" style="top: -10%; left: -5%; width: 50%; height: 50%;" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="var(--bs-primary)" stroke-width="0.5" />
            <path d="M0,60 Q25,40 50,60 T100,60" fill="none" stroke="var(--bs-primary)" stroke-width="0.5" />
            <path d="M0,70 Q25,50 50,70 T100,70" fill="none" stroke="var(--bs-primary)" stroke-width="0.5" />
        </svg>
        <div class="position-absolute rounded-circle border border-primary opacity-10" style="width: 80px; height: 80px; top: 10%; right: 15%;"></div>
        <div class="position-absolute rounded-circle bg-primary opacity-10" style="width: 150px; height: 150px; bottom: 20%; left: -5%;"></div>
    </div>

    <div class="container position-relative z-1">
        <div class="row gx-lg-5 align-items-center mb-5">
            <!-- Left Text Column -->
            <div class="col-lg-5 mb-5 mb-lg-0 sl-animate-fade-in-up" style="animation-delay: 0.1s;">
                <div class="d-inline-flex align-items-center bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-pill mb-4 fw-bold small">
                    <i class="fa fa-graduation-cap me-2"></i> SmartLearn LMS
                </div>
                
                <h1 class="display-4 fw-bolder mb-4 text-body-emphasis sl-tracking-tight" data-sl-edit="text" style="line-height: 1.1;">
                    Learn. Grow.<br>Succeed.<br>
                    <span class="sl-text-gradient">Together.</span>
                </h1>
                
                <p class="fs-5 text-body-secondary mb-5 pe-lg-3" data-sl-edit="text">
                    Discover engaging courses, expert instructors, and resources that help you achieve your goals.
                </p>
                
                <div class="d-flex flex-wrap gap-3 mb-5">
                    <a href="#" class="btn btn-primary btn-lg rounded-3 px-4 py-3 fw-bold d-inline-flex align-items-center" data-sl-edit="link">
                        <i class="fa fa-book me-2"></i> Browse Courses
                    </a>
                    <a href="#" class="btn btn-outline-secondary bg-body btn-lg rounded-3 px-4 py-3 fw-bold text-body-emphasis border-2 d-inline-flex align-items-center" data-sl-edit="link">
                        <i class="fa fa-play me-2"></i> How It Works
                    </a>
                </div>
                
                <div class="d-flex align-items-center">
                    <div class="d-flex me-3">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80" class="rounded-circle border border-2 border-white" style="width: 45px; height: 45px; object-fit: cover;" alt="Avatar">
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&q=80" class="rounded-circle border border-2 border-white" style="width: 45px; height: 45px; object-fit: cover; margin-left: -15px;" alt="Avatar">
                        <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=64&q=80" class="rounded-circle border border-2 border-white" style="width: 45px; height: 45px; object-fit: cover; margin-left: -15px;" alt="Avatar">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80" class="rounded-circle border border-2 border-white" style="width: 45px; height: 45px; object-fit: cover; margin-left: -15px;" alt="Avatar">
                    </div>
                    <div>
                        <div class="fw-bold text-primary fs-5 mb-0 lh-1" data-sl-edit="text">15,000+</div>
                        <small class="text-body-secondary fw-medium" data-sl-edit="text">Active Learners</small>
                    </div>
                </div>
            </div>
            
            <!-- Right Media Column -->
            <div class="col-lg-7 sl-animate-fade-in-up" style="animation-delay: 0.3s;">
                <div class="bg-body rounded-4 shadow-lg p-3 p-md-4 position-relative border border-secondary-subtle">
                    <!-- Navigation Arrows (Absolute) -->
                    <button class="btn btn-light bg-body text-body-emphasis border border-secondary-subtle rounded-circle shadow position-absolute sl-nav-btn start-0 translate-middle-y d-none d-md-flex align-items-center justify-content-center" style="top: 35%; width: 45px; height: 45px; z-index: 10; transform: translateX(-50%);">
                        <i class="fa fa-chevron-left"></i>
                    </button>
                    <button class="btn btn-light bg-body text-body-emphasis border border-secondary-subtle rounded-circle shadow position-absolute sl-nav-btn end-0 translate-middle-y d-none d-md-flex align-items-center justify-content-center" style="top: 35%; width: 45px; height: 45px; z-index: 10; transform: translateX(50%);">
                        <i class="fa fa-chevron-right"></i>
                    </button>

                    <!-- Main Video Area -->
                    <div class="position-relative rounded-4 overflow-hidden mb-3 sl-main-video-container group">
                        <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80" class="w-100 sl-main-video-img transition-transform" style="height: 380px; object-fit: cover;" alt="Main video" data-sl-edit="image">
                        
                        <!-- Gradient Overlay -->
                        <div class="position-absolute top-0 start-0 w-100 h-100 bg-gradient-dark-left"></div>
                        
                        <!-- Play Button Center -->
                        <div class="position-absolute top-50 start-50 translate-middle">
                            <button class="btn btn-light rounded-circle shadow-lg d-flex align-items-center justify-content-center sl-play-main" style="width: 70px; height: 70px;">
                                <i class="fa fa-play fs-3 ms-1 text-dark"></i>
                            </button>
                        </div>
                        
                        <!-- Main Video Content -->
                        <div class="position-absolute top-0 start-0 w-100 h-100 p-4 d-flex flex-column justify-content-between pointer-events-none">
                            <div class="d-flex justify-content-between align-items-start">
                                <span class="badge bg-primary px-3 py-2 rounded-3 fw-medium">Featured</span>
                            </div>
                            
                            <div class="col-md-8 col-10">
                                <h3 class="text-white fw-bold mb-2" data-sl-edit="text">Getting Started<br>with SmartLearn</h3>
                                <p class="text-white text-opacity-75 mb-0 small pe-3" data-sl-edit="text">An overview of the platform and how to get started.</p>
                            </div>
                            
                            <div class="position-absolute bottom-0 start-0 ms-4 mb-4">
                                <span class="bg-dark bg-opacity-50 text-white small px-2 py-1 rounded-2 fw-medium">02:45</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Pagination Dots -->
                    <div class="d-flex justify-content-center gap-2 mb-4">
                        <div class="rounded-pill bg-primary" style="width: 25px; height: 8px;"></div>
                        <div class="rounded-circle bg-secondary bg-opacity-25" style="width: 8px; height: 8px;"></div>
                        <div class="rounded-circle bg-secondary bg-opacity-25" style="width: 8px; height: 8px;"></div>
                        <div class="rounded-circle bg-secondary bg-opacity-25" style="width: 8px; height: 8px;"></div>
                    </div>
                    
                    <!-- Thumbnails -->
                    <div class="row g-3">
                        <div class="col-3">
                            <div class="sl-thumb-card cursor-pointer">
                                <div class="position-relative rounded-3 overflow-hidden mb-2">
                                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300&q=80" class="w-100" style="height: 70px; object-fit: cover;" alt="Thumb 1" data-sl-edit="image">
                                    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25 d-flex align-items-center justify-content-center">
                                        <i class="fa fa-play text-white opacity-75"></i>
                                    </div>
                                    <span class="position-absolute bottom-0 end-0 m-1 bg-dark bg-opacity-75 text-white fw-medium rounded px-1" style="font-size: 10px;">03:18</span>
                                </div>
                                <h6 class="mb-0 fw-bold text-body-emphasis text-truncate" style="font-size: 11px;" data-sl-edit="text">Exploring Courses</h6>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="sl-thumb-card cursor-pointer">
                                <div class="position-relative rounded-3 overflow-hidden mb-2">
                                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80" class="w-100" style="height: 70px; object-fit: cover;" alt="Thumb 2" data-sl-edit="image">
                                    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25 d-flex align-items-center justify-content-center">
                                        <i class="fa fa-play text-white opacity-75"></i>
                                    </div>
                                    <span class="position-absolute bottom-0 end-0 m-1 bg-dark bg-opacity-75 text-white fw-medium rounded px-1" style="font-size: 10px;">02:12</span>
                                </div>
                                <h6 class="mb-0 fw-bold text-body-emphasis text-truncate" style="font-size: 11px;" data-sl-edit="text">Track Your Progress</h6>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="sl-thumb-card cursor-pointer">
                                <div class="position-relative rounded-3 overflow-hidden mb-2">
                                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" class="w-100" style="height: 70px; object-fit: cover;" alt="Thumb 3" data-sl-edit="image">
                                    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25 d-flex align-items-center justify-content-center">
                                        <i class="fa fa-play text-white opacity-75"></i>
                                    </div>
                                    <span class="position-absolute bottom-0 end-0 m-1 bg-dark bg-opacity-75 text-white fw-medium rounded px-1" style="font-size: 10px;">01:56</span>
                                </div>
                                <h6 class="mb-0 fw-bold text-body-emphasis text-truncate" style="font-size: 11px;" data-sl-edit="text">Certificates & Badges</h6>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="sl-thumb-card cursor-pointer">
                                <div class="position-relative rounded-3 overflow-hidden mb-2">
                                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80" class="w-100" style="height: 70px; object-fit: cover;" alt="Thumb 4" data-sl-edit="image">
                                    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25 d-flex align-items-center justify-content-center">
                                        <i class="fa fa-play text-white opacity-75"></i>
                                    </div>
                                    <span class="position-absolute bottom-0 end-0 m-1 bg-dark bg-opacity-75 text-white fw-medium rounded px-1" style="font-size: 10px;">02:33</span>
                                </div>
                                <h6 class="mb-0 fw-bold text-body-emphasis text-truncate" style="font-size: 11px;" data-sl-edit="text">Join Our Community</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Bottom Features Bar -->
        <div class="bg-body border border-secondary-subtle rounded-4 shadow-sm p-4 p-lg-5 sl-animate-fade-in-up" style="animation-delay: 0.5s;">
            <div class="row g-4 justify-content-between">
                
                <!-- Feature 1 -->
                <div class="col-md-6 col-xl-3 d-flex align-items-center gap-3 sl-feature-item">
                    <div class="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width: 60px; height: 60px;">
                        <i class="fa fa-book fs-3"></i>
                    </div>
                    <div>
                        <h6 class="fw-bold mb-1 text-body-emphasis" data-sl-edit="text">Quality Content</h6>
                        <p class="text-body-secondary small mb-0 lh-sm" data-sl-edit="text">Access high-quality courses created by experts.</p>
                    </div>
                </div>
                
                <!-- Feature 2 -->
                <div class="col-md-6 col-xl-3 d-flex align-items-center gap-3 sl-feature-item">
                    <div class="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width: 60px; height: 60px;">
                        <i class="fa fa-line-chart fs-3"></i>
                    </div>
                    <div>
                        <h6 class="fw-bold mb-1 text-body-emphasis" data-sl-edit="text">Track Progress</h6>
                        <p class="text-body-secondary small mb-0 lh-sm" data-sl-edit="text">Monitor your learning and achieve your goals.</p>
                    </div>
                </div>
                
                <!-- Feature 3 -->
                <div class="col-md-6 col-xl-3 d-flex align-items-center gap-3 sl-feature-item">
                    <div class="bg-info bg-opacity-10 text-info rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width: 60px; height: 60px;">
                        <i class="fa fa-users fs-3"></i>
                    </div>
                    <div>
                        <h6 class="fw-bold mb-1 text-body-emphasis" data-sl-edit="text">Learn Together</h6>
                        <p class="text-body-secondary small mb-0 lh-sm" data-sl-edit="text">Connect with learners and grow together.</p>
                    </div>
                </div>
                
                <!-- Feature 4 -->
                <div class="col-md-6 col-xl-3 d-flex align-items-center gap-3 sl-feature-item">
                    <div class="bg-warning bg-opacity-10 text-warning rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width: 60px; height: 60px;">
                        <i class="fa fa-certificate fs-3"></i>
                    </div>
                    <div>
                        <h6 class="fw-bold mb-1 text-body-emphasis" data-sl-edit="text">Earn Certificates</h6>
                        <p class="text-body-secondary small mb-0 lh-sm" data-sl-edit="text">Get recognized and boost your career.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>`,
        css: `.sl-hero-vid-gallery {
    font-family: inherit;
}
.sl-hero-vid-gallery .sl-tracking-tight {
    letter-spacing: -0.04em;
}
.sl-hero-vid-gallery .sl-text-gradient {
    background: linear-gradient(135deg, var(--bs-primary) 0%, var(--bs-secondary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
.sl-hero-vid-gallery .bg-gradient-dark-left {
    background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%);
}
.sl-hero-vid-gallery .pointer-events-none {
    pointer-events: none;
}
.sl-hero-vid-gallery .cursor-pointer {
    cursor: pointer;
}

/* Interactivity */
.sl-hero-vid-gallery .sl-nav-btn {
    transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}
.sl-hero-vid-gallery .sl-nav-btn:hover {
    background-color: transparent;
    transform: translateX(-50%) scale(1.1);
}
.sl-hero-vid-gallery .sl-nav-btn.end-0:hover {
    transform: translateX(50%) scale(1.1);
}
.sl-hero-vid-gallery .sl-main-video-container {
    cursor: pointer;
}
.sl-hero-vid-gallery .sl-main-video-img {
    transition: transform 0.5s ease;
}
.sl-hero-vid-gallery .sl-main-video-container:hover .sl-main-video-img {
    transform: scale(1.05);
}
.sl-hero-vid-gallery .sl-play-main {
    transition: transform 0.2s ease;
}
.sl-hero-vid-gallery .sl-main-video-container:hover .sl-play-main {
    transform: scale(1.15) translate(-50%, -50%); /* Need to maintain translate-middle */
    transform-origin: top left; /* Complex, better to wrap it */
}
.sl-hero-vid-gallery .sl-thumb-card {
    transition: opacity 0.2s ease;
}
.sl-hero-vid-gallery .sl-thumb-card:hover {
    opacity: 0.8;
}
.sl-hero-vid-gallery .sl-feature-item {
    transition: transform 0.3s ease;
}
.sl-hero-vid-gallery .sl-feature-item:hover {
    transform: translateY(-5px);
}

/* Animations */
.sl-hero-vid-gallery .sl-animate-fade-in-up {
    opacity: 0;
    transform: translateY(30px);
    animation: slFadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes slFadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 991px) {
    .sl-hero-vid-gallery .sl-main-video-img {
        height: 250px !important;
    }
}`,
        js: `(function() {
    const root = document.querySelector('.sl-hero-vid-gallery');
    if (!root) return;
    
    // Quick fix for the play button hover effect without breaking centering
    const mainContainer = root.querySelector('.sl-main-video-container');
    const playBtn = root.querySelector('.sl-play-main');
    
    if (mainContainer && playBtn) {
        mainContainer.addEventListener('mouseenter', () => {
            playBtn.style.transform = 'scale(1.15)';
        });
        mainContainer.addEventListener('mouseleave', () => {
            playBtn.style.transform = 'scale(1)';
        });
    }
})();`
    }
];

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
    console.log('Successfully generated Hero section 14 and updated catalog.json');
}
