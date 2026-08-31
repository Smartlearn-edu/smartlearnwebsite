const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const sectionsDir = path.join(publicDir, 'sections');
const catalogPath = path.join(publicDir, 'catalog.json');

if (!fs.existsSync(sectionsDir)) {
  fs.mkdirSync(sectionsDir, { recursive: true });
}

let catalog;
if (fs.existsSync(catalogPath)) {
  catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
} else {
  catalog = { version: "1.0", updated: new Date().toISOString().split("T")[0], sections: [] };
}
function clean(str) {
  return str.trim();
}

const sections = [
  // 1. Classic Full-Width Hero Slider
  {
    id: "slider-hero",
    name: "Classic Hero Slider",
    category: "Sliders",
    variant: "Hero Banner",
    description: "Edge-to-edge background images with centered text and dots.",
    tags: ["slider", "hero", "banner", "carousel"],
    image_count: 3,
    html: clean(`
<!-- sl-section: slider-hero | v1.0 -->
<div class="sl-slider-hero">
    <div id="slHeroCarousel" class="carousel slide" data-bs-ride="carousel">
        
        <!-- Indicators -->
        <div class="carousel-indicators sl-hero-indicators">
            <button type="button" data-bs-target="#slHeroCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#slHeroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#slHeroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        
        <!-- Slides -->
        <div class="carousel-inner">
            <!-- Slide 1 -->
            <div class="carousel-item active">
                <div class="sl-hero-bg">
                    <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" class="d-block w-100" alt="Slide 1" data-sl-edit="image" data-sl-label="Slide 1 Image" />
                    <div class="sl-hero-overlay"></div>
                </div>
                <div class="carousel-caption sl-hero-caption">
                    <h2 class="sl-hero-title" data-sl-edit="text" data-sl-label="Slide 1 Title">Access Online Learning Anywhere Easily</h2>
                    <p class="sl-hero-subtitle" data-sl-edit="text" data-sl-label="Slide 1 Subtitle">A solution for easy and flexible online learning, you can study anywhere through this platform.</p>
                    <div class="sl-hero-actions">
                        <a href="#" class="btn btn-primary sl-btn-hero" data-sl-edit="link" data-sl-edit-text="Get Started">Get Started</a>
                        <a href="#" class="btn btn-outline-light sl-btn-hero-outline" data-sl-edit="link" data-sl-edit-text="Learn More">Learn More</a>
                    </div>
                </div>
            </div>
            
            <!-- Slide 2 -->
            <div class="carousel-item">
                <div class="sl-hero-bg">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" class="d-block w-100" alt="Slide 2" data-sl-edit="image" data-sl-label="Slide 2 Image" />
                    <div class="sl-hero-overlay"></div>
                </div>
                <div class="carousel-caption sl-hero-caption">
                    <h2 class="sl-hero-title" data-sl-edit="text" data-sl-label="Slide 2 Title">Empower Your Future</h2>
                    <p class="sl-hero-subtitle" data-sl-edit="text" data-sl-label="Slide 2 Subtitle">Join a vibrant community of learners and educators shaping tomorrow.</p>
                    <div class="sl-hero-actions">
                        <a href="#" class="btn btn-primary sl-btn-hero" data-sl-edit="link" data-sl-edit-text="View Courses">View Courses</a>
                    </div>
                </div>
            </div>
            
            <!-- Slide 3 -->
            <div class="carousel-item">
                <div class="sl-hero-bg">
                    <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" class="d-block w-100" alt="Slide 3" data-sl-edit="image" data-sl-label="Slide 3 Image" />
                    <div class="sl-hero-overlay"></div>
                </div>
                <div class="carousel-caption sl-hero-caption">
                    <h2 class="sl-hero-title" data-sl-edit="text" data-sl-label="Slide 3 Title">Achieve Your Goals</h2>
                    <p class="sl-hero-subtitle" data-sl-edit="text" data-sl-label="Slide 3 Subtitle">Step-by-step guidance from industry experts to accelerate your career.</p>
                    <div class="sl-hero-actions">
                        <a href="#" class="btn btn-primary sl-btn-hero" data-sl-edit="link" data-sl-edit-text="Join Now">Join Now</a>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Controls -->
        <button class="carousel-control-prev sl-hero-control" type="button" data-bs-target="#slHeroCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next sl-hero-control" type="button" data-bs-target="#slHeroCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>
    `),
    css: clean(`
.sl-slider-hero { position: relative; background-color: var(--smartlearn-bg); }
.sl-slider-hero .carousel-item { height: 80vh; min-height: 500px; max-height: 800px; }
.sl-hero-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; }
.sl-hero-bg img { width: 100%; height: 100%; object-fit: cover; }
.sl-hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 2; }
.sl-hero-caption { z-index: 3; top: 50%; bottom: auto; transform: translateY(-50%); padding-left: 10%; padding-right: 10%; text-align: center; }
.sl-hero-title { font-size: 3.5rem; font-weight: 800; color: #fff; margin-bottom: 1.5rem; line-height: 1.2; text-shadow: 0 2px 10px rgba(0,0,0,0.3); animation: slFadeInUp 0.8s ease forwards; }
.sl-hero-subtitle { font-size: 1.25rem; font-weight: 500; color: #f8f9fa; margin-bottom: 2.5rem; text-shadow: 0 1px 5px rgba(0,0,0,0.3); animation: slFadeInUp 1s ease forwards; }
.sl-hero-actions { display: flex; gap: 1rem; justify-content: center; animation: slFadeInUp 1.2s ease forwards; }
.sl-btn-hero { padding: 0.875rem 2rem; font-weight: 700; border-radius: 0.5rem; font-size: 1.125rem; }
.sl-btn-hero-outline { padding: 0.875rem 2rem; font-weight: 700; border-radius: 0.5rem; font-size: 1.125rem; border-width: 2px; }
.sl-hero-indicators { margin-bottom: 2rem; z-index: 4; }
.sl-hero-indicators button { width: 40px !important; height: 6px !important; border-radius: 3px; background-color: rgba(255,255,255,0.5) !important; border: none !important; margin: 0 5px !important; transition: background-color 0.3s ease; }
.sl-hero-indicators button.active { background-color: #fff !important; }
.sl-hero-control { z-index: 4; width: 10%; opacity: 0; transition: opacity 0.3s ease; }
.sl-slider-hero:hover .sl-hero-control { opacity: 0.8; }
.sl-hero-control:hover { opacity: 1 !important; }
@keyframes slFadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@media (max-width: 767px) {
    .sl-slider-hero .carousel-item { height: 70vh; }
    .sl-hero-caption { padding-left: 5%; padding-right: 5%; }
    .sl-hero-title { font-size: 2.25rem; }
    .sl-hero-subtitle { font-size: 1.125rem; }
    .sl-hero-actions { flex-direction: column; width: 100%; max-width: 300px; margin: 0 auto; }
}
    `),
    js: clean(`\n(function() {\n    var carousels = document.querySelectorAll('.carousel');\n    if (typeof bootstrap !== 'undefined') {\n        carousels.forEach(c => new bootstrap.Carousel(c));\n    }\n})();\n`)
  },

  // 2. Split-Screen Content Slider
  {
    id: "slider-split",
    name: "Split-Screen Slider",
    category: "Sliders",
    variant: "Content Presentation",
    description: "A 50/50 split layout. The left side has text/buttons, right side image.",
    tags: ["slider", "split", "presentation"],
    image_count: 2,
    html: clean(`
<!-- sl-section: slider-split | v1.0 -->
<div class="sl-slider-split">
    <div id="slSplitCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <!-- Slide 1 -->
            <div class="carousel-item active">
                <div class="sl-split-row">
                    <div class="sl-split-content">
                        <div class="sl-split-inner">
                            <span class="sl-split-badge" data-sl-edit="text">New Program</span>
                            <h2 class="sl-split-title" data-sl-edit="text">Data Science Bootcamp</h2>
                            <p class="sl-split-desc" data-sl-edit="text">Learn Python, Machine Learning, and AI from top industry experts. Build a portfolio of real-world projects.</p>
                            <a href="#" class="btn btn-primary sl-btn-split" data-sl-edit="link" data-sl-edit-text="View Curriculum">View Curriculum</a>
                        </div>
                    </div>
                    <div class="sl-split-image">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Slide 1" data-sl-edit="image" data-sl-label="Slide 1 Image" />
                    </div>
                </div>
            </div>
            <!-- Slide 2 -->
            <div class="carousel-item">
                <div class="sl-split-row">
                    <div class="sl-split-content">
                        <div class="sl-split-inner">
                            <span class="sl-split-badge" data-sl-edit="text">Featured Course</span>
                            <h2 class="sl-split-title" data-sl-edit="text">Advanced UI/UX Design</h2>
                            <p class="sl-split-desc" data-sl-edit="text">Master Figma and learn how to create beautiful, accessible user experiences for web and mobile applications.</p>
                            <a href="#" class="btn btn-primary sl-btn-split" data-sl-edit="link" data-sl-edit-text="Start Learning">Start Learning</a>
                        </div>
                    </div>
                    <div class="sl-split-image">
                        <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Slide 2" data-sl-edit="image" data-sl-label="Slide 2 Image" />
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Custom Controls placed inside content area via CSS/HTML structure -->
        <div class="sl-split-controls">
            <button class="sl-split-ctrl-btn" type="button" data-bs-target="#slSplitCarousel" data-bs-slide="prev" aria-label="Previous">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
            </button>
            <button class="sl-split-ctrl-btn" type="button" data-bs-target="#slSplitCarousel" data-bs-slide="next" aria-label="Next">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
            </button>
        </div>
    </div>
</div>
    `),
    css: clean(`
.sl-slider-split { position: relative; background-color: var(--smartlearn-card-bg); overflow: hidden; }
.sl-split-row { display: flex; flex-direction: column; min-height: 60vh; }
@media (min-width: 992px) { .sl-split-row { flex-direction: row; height: 70vh; min-height: 500px; max-height: 700px; } }
.sl-split-content { flex: 1; display: flex; align-items: center; justify-content: center; padding: 4rem 2rem; background-color: var(--smartlearn-bg); position: relative; z-index: 2; }
.sl-split-inner { max-width: 450px; width: 100%; animation: slSplitFadeIn 0.6s ease forwards; opacity: 0; }
.sl-split-badge { display: inline-block; padding: 0.25rem 0.75rem; background-color: rgba(var(--bs-primary-rgb), 0.1); color: var(--smartlearn-primary); border-radius: 1rem; font-size: 0.875rem; font-weight: 700; text-transform: uppercase; margin-bottom: 1.5rem; }
.sl-split-title { font-size: 2.75rem; font-weight: 800; color: var(--smartlearn-text); margin-bottom: 1rem; line-height: 1.2; }
.sl-split-desc { font-size: 1.125rem; color: var(--smartlearn-text-muted); margin-bottom: 2rem; line-height: 1.6; }
.sl-btn-split { padding: 0.75rem 2rem; font-weight: 600; border-radius: 0.5rem; }
.sl-split-image { flex: 1; position: relative; background-color: var(--smartlearn-card-bg); overflow: hidden; min-height: 300px; }
.sl-split-image img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; animation: slSplitZoom 10s linear forwards; }
.sl-split-controls { position: absolute; bottom: 2rem; left: 2rem; z-index: 10; display: flex; gap: 0.5rem; }
@media (min-width: 992px) { .sl-split-controls { left: max(2rem, calc((50vw - 450px)/2)); } }
.sl-split-ctrl-btn { background: var(--smartlearn-card-bg); border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.1)); color: var(--smartlearn-text); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.sl-split-ctrl-btn:hover { background: var(--smartlearn-primary); color: #fff; border-color: var(--smartlearn-primary); }
@keyframes slSplitFadeIn { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
@keyframes slSplitZoom { from { transform: scale(1); } to { transform: scale(1.1); } }
.carousel-item.active .sl-split-inner { animation: slSplitFadeIn 0.8s ease forwards; }
.carousel-item.active .sl-split-image img { animation: slSplitZoom 10s linear forwards; }
    `),
    js: clean(`\n(function() {\n    var carousels = document.querySelectorAll('.carousel');\n    if (typeof bootstrap !== 'undefined') {\n        carousels.forEach(c => new bootstrap.Carousel(c));\n    }\n})();\n`)
  },

  // 3. Glassmorphism Floating Card Slider
  {
    id: "slider-glass",
    name: "Glassmorphism Slider",
    category: "Sliders",
    variant: "Premium",
    description: "Full-width images with a translucent glass floating card.",
    tags: ["slider", "glass", "premium", "card"],
    image_count: 2,
    html: clean(`
<!-- sl-section: slider-glass | v1.0 -->
<div class="sl-slider-glass">
    <div id="slGlassCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            
            <!-- Slide 1 -->
            <div class="carousel-item active">
                <div class="sl-glass-bg">
                    <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Slide 1" data-sl-edit="image" data-sl-label="Slide 1 Image" />
                </div>
                <div class="container sl-glass-container">
                    <div class="sl-glass-card">
                        <span class="sl-glass-tag" data-sl-edit="text">Executive Education</span>
                        <h2 class="sl-glass-title" data-sl-edit="text">Leadership in the Digital Age</h2>
                        <p class="sl-glass-desc" data-sl-edit="text">Transform your organization and lead with confidence through our intensive executive program.</p>
                        <a href="#" class="btn btn-primary sl-btn-glass" data-sl-edit="link" data-sl-edit-text="Apply Now">Apply Now</a>
                    </div>
                </div>
            </div>
            
            <!-- Slide 2 -->
            <div class="carousel-item">
                <div class="sl-glass-bg">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Slide 2" data-sl-edit="image" data-sl-label="Slide 2 Image" />
                </div>
                <div class="container sl-glass-container">
                    <div class="sl-glass-card">
                        <span class="sl-glass-tag" data-sl-edit="text">Global Network</span>
                        <h2 class="sl-glass-title" data-sl-edit="text">Connect Worldwide</h2>
                        <p class="sl-glass-desc" data-sl-edit="text">Join a network of over 50,000 alumni across 120 countries shaping global industries.</p>
                        <a href="#" class="btn btn-primary sl-btn-glass" data-sl-edit="link" data-sl-edit-text="Discover More">Discover More</a>
                    </div>
                </div>
            </div>
            
        </div>
        
        <!-- Custom Pagination & Progress inside container to align with card -->
        <div class="container sl-glass-nav-container">
            <div class="sl-glass-nav">
                <div class="sl-glass-counter">
                    <span id="sl-glass-current">01</span><span class="sl-glass-divider">/</span><span id="sl-glass-total">02</span>
                </div>
                <div class="sl-glass-arrows">
                    <button type="button" data-bs-target="#slGlassCarousel" data-bs-slide="prev" aria-label="Previous">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
                    </button>
                    <button type="button" data-bs-target="#slGlassCarousel" data-bs-slide="next" aria-label="Next">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                    </button>
                </div>
            </div>
        </div>
        
    </div>
</div>
    `),
    css: clean(`
.sl-slider-glass { position: relative; background-color: var(--smartlearn-bg); }
.sl-slider-glass .carousel-item { height: 80vh; min-height: 550px; max-height: 800px; }
.sl-glass-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; }
.sl-glass-bg img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.85); }
.sl-glass-container { position: relative; height: 100%; z-index: 2; display: flex; align-items: center; }
.sl-glass-card { background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.2); padding: 3rem; border-radius: 1rem; max-width: 500px; color: #fff; box-shadow: 0 20px 40px rgba(0,0,0,0.2); animation: slGlassSlideUp 0.8s ease forwards; opacity: 0; }
.sl-glass-tag { display: inline-block; padding: 0.25rem 0.75rem; background: rgba(0,0,0,0.3); color: #fff; border-radius: 1rem; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem; letter-spacing: 0.05em; }
.sl-glass-title { font-size: 2.5rem; font-weight: 700; color: #fff; margin-bottom: 1rem; line-height: 1.2; text-shadow: 0 2px 4px rgba(0,0,0,0.2); }
.sl-glass-desc { font-size: 1.125rem; color: rgba(255,255,255,0.9); margin-bottom: 2rem; line-height: 1.6; text-shadow: 0 1px 3px rgba(0,0,0,0.2); }
.sl-btn-glass { background-color: #fff; color: #000; border: none; font-weight: 700; padding: 0.75rem 2rem; border-radius: 0.5rem; transition: all 0.2s; }
.sl-btn-glass:hover { background-color: var(--smartlearn-primary); color: #fff; transform: translateY(-2px); }
.sl-glass-nav-container { position: absolute; bottom: 3rem; left: 0; right: 0; z-index: 10; display: flex; }
.sl-glass-nav { display: flex; align-items: center; gap: 2rem; background: rgba(0,0,0,0.4); backdrop-filter: blur(8px); padding: 0.75rem 1.5rem; border-radius: 2rem; border: 1px solid rgba(255,255,255,0.1); color: #fff; }
.sl-glass-counter { font-family: monospace; font-size: 1.125rem; letter-spacing: 2px; }
.sl-glass-divider { opacity: 0.5; margin: 0 0.25rem; }
.sl-glass-arrows { display: flex; gap: 0.5rem; }
.sl-glass-arrows button { background: none; border: 1px solid rgba(255,255,255,0.3); color: #fff; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; }
.sl-glass-arrows button:hover { background: #fff; color: #000; }
@keyframes slGlassSlideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
.carousel-item.active .sl-glass-card { animation: slGlassSlideUp 0.8s ease forwards; }
@media (max-width: 767px) {
    .sl-glass-card { padding: 2rem; margin: 0 1rem; }
    .sl-glass-title { font-size: 2rem; }
    .sl-glass-nav-container { justify-content: center; bottom: 1.5rem; }
}
    `),
    js: clean(`
(function() {
    const root = document.querySelector('.sl-slider-glass');
    if (!root) return;
    const carouselEl = root.querySelector('#slGlassCarousel');
    const currentEl = root.querySelector('#sl-glass-current');
    if(!carouselEl || !currentEl) return;
    
    carouselEl.addEventListener('slide.bs.carousel', function (e) {
        let index = e.to + 1;
        currentEl.textContent = index < 10 ? '0' + index : index;
    });
})();
    `)
  },

  // 4. Interactive Carousel Card Slider
  {
    id: "slider-carousel",
    name: "Card Carousel",
    category: "Sliders",
    variant: "Multi-Item",
    description: "Horizontal track showing multiple cards at once using scroll snapping.",
    tags: ["slider", "carousel", "cards", "multi-item"],
    image_count: 4,
    html: clean(`
<!-- sl-section: slider-carousel | v1.0 -->
<div class="sl-slider-carousel sl-py-16">
    <div class="container">
        <div class="sl-carousel-header">
            <div>
                <h2 class="sl-section-title" data-sl-edit="text">Featured Programs</h2>
                <p class="sl-section-subtitle" data-sl-edit="text">Explore our most popular career tracks.</p>
            </div>
            <div class="sl-carousel-arrows">
                <button class="sl-c-btn sl-c-prev" aria-label="Previous">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
                </button>
                <button class="sl-c-btn sl-c-next" aria-label="Next">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                </button>
            </div>
        </div>
    </div>
    
    <div class="sl-carousel-track-container">
        <div class="sl-carousel-track" id="slCardTrack">
            
            <!-- Card 1 -->
            <div class="sl-c-card">
                <div class="sl-c-img">
                    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Program 1" data-sl-edit="image" />
                    <span class="sl-c-badge" data-sl-edit="text">Business</span>
                </div>
                <div class="sl-c-body">
                    <h3 class="sl-c-title" data-sl-edit="text">MBA Program</h3>
                    <p class="sl-c-desc" data-sl-edit="text">Master business administration with global leaders.</p>
                    <a href="#" class="sl-c-link" data-sl-edit="link" data-sl-edit-text="Learn More">Learn More &rarr;</a>
                </div>
            </div>
            
            <!-- Card 2 -->
            <div class="sl-c-card">
                <div class="sl-c-img">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Program 2" data-sl-edit="image" />
                    <span class="sl-c-badge" data-sl-edit="text">Technology</span>
                </div>
                <div class="sl-c-body">
                    <h3 class="sl-c-title" data-sl-edit="text">Data Science</h3>
                    <p class="sl-c-desc" data-sl-edit="text">Deep dive into analytics, AI, and machine learning.</p>
                    <a href="#" class="sl-c-link" data-sl-edit="link" data-sl-edit-text="Learn More">Learn More &rarr;</a>
                </div>
            </div>
            
            <!-- Card 3 -->
            <div class="sl-c-card">
                <div class="sl-c-img">
                    <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Program 3" data-sl-edit="image" />
                    <span class="sl-c-badge" data-sl-edit="text">Design</span>
                </div>
                <div class="sl-c-body">
                    <h3 class="sl-c-title" data-sl-edit="text">UI/UX Design</h3>
                    <p class="sl-c-desc" data-sl-edit="text">Create engaging, accessible digital experiences.</p>
                    <a href="#" class="sl-c-link" data-sl-edit="link" data-sl-edit-text="Learn More">Learn More &rarr;</a>
                </div>
            </div>
            
            <!-- Card 4 -->
            <div class="sl-c-card">
                <div class="sl-c-img">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Program 4" data-sl-edit="image" />
                    <span class="sl-c-badge" data-sl-edit="text">Marketing</span>
                </div>
                <div class="sl-c-body">
                    <h3 class="sl-c-title" data-sl-edit="text">Digital Marketing</h3>
                    <p class="sl-c-desc" data-sl-edit="text">Master SEO, content strategy, and social media.</p>
                    <a href="#" class="sl-c-link" data-sl-edit="link" data-sl-edit-text="Learn More">Learn More &rarr;</a>
                </div>
            </div>

        </div>
    </div>
</div>
    `),
    css: clean(`
.sl-slider-carousel { background-color: var(--smartlearn-bg); overflow: hidden; }
.sl-carousel-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem; }
.sl-carousel-header .sl-section-title { font-size: 2.25rem; font-weight: 700; color: var(--smartlearn-text); margin-bottom: 0.5rem; }
.sl-carousel-header .sl-section-subtitle { font-size: 1.125rem; color: var(--smartlearn-text-muted); margin: 0; }
.sl-carousel-arrows { display: flex; gap: 0.5rem; }
.sl-c-btn { background: var(--smartlearn-card-bg); border: 1px solid var(--smartlearn-card-border, #e5e7eb); color: var(--smartlearn-text); width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s ease; }
.sl-c-btn:hover { background: var(--smartlearn-primary); color: #fff; border-color: var(--smartlearn-primary); }
.sl-carousel-track-container { width: 100%; max-width: 100vw; }
.sl-carousel-track { display: flex; gap: 1.5rem; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; -ms-overflow-style: none; padding: 0 1rem 2rem 1rem; }
.sl-carousel-track::-webkit-scrollbar { display: none; }
@media (min-width: 768px) { .sl-carousel-track { padding: 0 calc(50vw - 648px) 2rem calc(50vw - 648px); /* Center align with bootstrap container (1320px max) roughly */ } }
.sl-c-card { flex: 0 0 85%; max-width: 380px; scroll-snap-align: start; background: var(--smartlearn-card-bg); border-radius: 1rem; overflow: hidden; border: 1px solid var(--smartlearn-card-border, #e5e7eb); box-shadow: 0 4px 6px rgba(0,0,0,0.02); transition: transform 0.3s ease, box-shadow 0.3s ease; display: flex; flex-direction: column; }
@media (min-width: 768px) { .sl-c-card { flex: 0 0 380px; } }
.sl-c-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.08); }
.sl-c-img { position: relative; aspect-ratio: 4/3; width: 100%; }
.sl-c-img img { width: 100%; height: 100%; object-fit: cover; }
.sl-c-badge { position: absolute; top: 1rem; left: 1rem; background: #fff; color: #000; padding: 0.25rem 0.75rem; border-radius: 2rem; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
.sl-c-body { padding: 1.5rem; display: flex; flex-direction: column; flex: 1; }
.sl-c-title { font-size: 1.25rem; font-weight: 700; color: var(--smartlearn-text); margin-bottom: 0.75rem; }
.sl-c-desc { font-size: 1rem; color: var(--smartlearn-text-muted); margin-bottom: 1.5rem; flex: 1; }
.sl-c-link { color: var(--smartlearn-primary); font-weight: 600; text-decoration: none; transition: color 0.2s; }
.sl-c-link:hover { color: var(--smartlearn-primary-dark, #000); text-decoration: underline; }
    `),
    js: clean(`
(function() {
    const root = document.querySelector('.sl-slider-carousel');
    if (!root) return;
    const track = root.querySelector('#slCardTrack');
    const prev = root.querySelector('.sl-c-prev');
    const next = root.querySelector('.sl-c-next');
    if(!track || !prev || !next) return;
    
    const scrollAmount = 350; // approximate width of one card
    
    prev.addEventListener('click', () => {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    
    next.addEventListener('click', () => {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
})();
    `)
  },

  // 5. 2-Column Section (Slider + Text)
  {
    id: "slider-twocol",
    name: "2-Column Slider + Text",
    category: "Sliders",
    variant: "Feature Presentation",
    description: "A practical 2-column layout with static text on one side and an image carousel on the other.",
    tags: ["slider", "carousel", "2-column", "split"],
    image_count: 3,
    html: clean(`
<!-- sl-section: slider-twocol | v1.0 -->
<div class="sl-slider-twocol sl-py-20">
    <div class="container">
        <div class="row align-items-center">
            
            <!-- Text Column -->
            <div class="col-lg-5 sl-twocol-text">
                <span class="sl-twocol-badge" data-sl-edit="text">Campus Facilities</span>
                <h2 class="sl-section-title" data-sl-edit="text">State-of-the-art Learning Environments</h2>
                <p class="sl-section-subtitle" data-sl-edit="text">Our campus is designed to foster collaboration, creativity, and focused study. Take a look at where you'll be spending your time.</p>
                <ul class="sl-twocol-list">
                    <li><span class="sl-check">✓</span> <span data-sl-edit="text">24/7 Library Access</span></li>
                    <li><span class="sl-check">✓</span> <span data-sl-edit="text">Advanced Research Labs</span></li>
                    <li><span class="sl-check">✓</span> <span data-sl-edit="text">Collaborative Study Spaces</span></li>
                </ul>
                <a href="#" class="btn btn-primary sl-btn-twocol" data-sl-edit="link" data-sl-edit-text="Schedule a Tour">Schedule a Tour</a>
            </div>
            
            <!-- Slider Column -->
            <div class="col-lg-7 mt-5 mt-lg-0">
                <div class="sl-twocol-carousel-wrap">
                    <div id="slTwoColCarousel" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators sl-twocol-indicators">
                            <button type="button" data-bs-target="#slTwoColCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#slTwoColCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#slTwoColCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner sl-twocol-inner">
                            <div class="carousel-item active">
                                <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" class="d-block w-100" alt="Facility 1" data-sl-edit="image" />
                            </div>
                            <div class="carousel-item">
                                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" class="d-block w-100" alt="Facility 2" data-sl-edit="image" />
                            </div>
                            <div class="carousel-item">
                                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" class="d-block w-100" alt="Facility 3" data-sl-edit="image" />
                            </div>
                        </div>
                        <button class="carousel-control-prev sl-twocol-ctrl" type="button" data-bs-target="#slTwoColCarousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next sl-twocol-ctrl" type="button" data-bs-target="#slTwoColCarousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
    `),
    css: clean(`
.sl-slider-twocol { background-color: var(--smartlearn-bg); overflow: hidden; }
.sl-twocol-text { padding-right: 3rem; }
@media (max-width: 991px) { .sl-twocol-text { padding-right: calc(var(--bs-gutter-x) * .5); } }
.sl-twocol-badge { display: inline-block; padding: 0.25rem 0.75rem; background-color: rgba(var(--bs-primary-rgb), 0.1); color: var(--smartlearn-primary); border-radius: 1rem; font-size: 0.875rem; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem; }
.sl-slider-twocol .sl-section-title { font-size: 2.5rem; font-weight: 800; color: var(--smartlearn-text); margin-bottom: 1.25rem; line-height: 1.2; }
.sl-slider-twocol .sl-section-subtitle { font-size: 1.125rem; color: var(--smartlearn-text-muted); margin-bottom: 2rem; line-height: 1.6; }
.sl-twocol-list { list-style: none; padding: 0; margin: 0 0 2rem 0; }
.sl-twocol-list li { font-size: 1.125rem; color: var(--smartlearn-text); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.75rem; }
.sl-check { display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; background-color: var(--smartlearn-primary); color: #fff; border-radius: 50%; font-size: 12px; font-weight: bold; }
.sl-btn-twocol { padding: 0.75rem 2rem; font-weight: 600; border-radius: 0.5rem; }
.sl-twocol-carousel-wrap { border-radius: 1.5rem; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1); border: 1px solid var(--smartlearn-card-border, #e5e7eb); }
.sl-twocol-inner { aspect-ratio: 4/3; background-color: var(--smartlearn-card-bg); }
.sl-twocol-inner img { width: 100%; height: 100%; object-fit: cover; }
.sl-twocol-ctrl { width: 15%; opacity: 0; transition: opacity 0.3s; }
.sl-twocol-carousel-wrap:hover .sl-twocol-ctrl { opacity: 0.7; }
.sl-twocol-ctrl:hover { opacity: 1 !important; }
.sl-twocol-indicators { margin-bottom: 1rem; }
    `),
    js: clean(`\n(function() {\n    var carousels = document.querySelectorAll('.carousel');\n    if (typeof bootstrap !== 'undefined') {\n        carousels.forEach(c => new bootstrap.Carousel(c));\n    }\n})();\n`)
  }
];

sections.forEach(sec => {
  const fileData = {
    smartlearn_section: true,
    format_version: "1.0",
    meta: {
      name: sec.name,
      category: sec.category,
      variant: sec.variant,
      description: sec.description,
      tags: sec.tags,
      image_count: sec.image_count
    },
    html: sec.html,
    css: sec.css,
    js: sec.js
  };

  const filename = sec.id + '.json';
  fs.writeFileSync(path.join(sectionsDir, filename), JSON.stringify(fileData, null, 2));

  const existingIndex = catalog.sections.findIndex(s => s.id === sec.id);
  const catalogEntry = {
    id: sec.id,
    name: sec.name,
    category: sec.category,
    variant: sec.variant,
    description: sec.description,
    tags: sec.tags,
    image_count: sec.image_count,
    preview_image: sec.preview_image || "",
    download_url: '/sections/' + filename
  };

  if (existingIndex >= 0) {
    catalog.sections[existingIndex] = catalogEntry;
  } else {
    catalog.sections.push(catalogEntry);
  }
});

catalog.updated = new Date().toISOString().split('T')[0];
fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2));

console.log('5 Slider sections generated and catalog updated successfully!');
