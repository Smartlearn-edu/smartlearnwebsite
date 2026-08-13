const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const sectionsDir = path.join(publicDir, 'sections');
const catalogPath = path.join(publicDir, 'catalog.json');

if (!fs.existsSync(sectionsDir)) {
  fs.mkdirSync(sectionsDir, { recursive: true });
}

function clean(str) {
  return str.trim();
}

const sections = [
  // 1. Cinematic Course Trailer
  {
    id: "gallery-cinematic",
    name: "Cinematic Course Trailer",
    category: "Gallery",
    variant: "Course Conversion",
    description: "Full-width cinematic composition with floating course information.",
    tags: ["gallery", "video", "cinematic", "trailer", "course"],
    image_count: 1,
    html: clean(`
<!-- sl-section: gallery-cinematic | v1.0 -->
<div class="sl-gallery-cinematic sl-py-20">
    <div class="container sl-cinematic-container">
        <!-- Media Fallback / Poster -->
        <div class="sl-cinematic-media" id="sl-cine-media-area">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Course Trailer" class="sl-cinematic-poster" data-sl-edit="image" id="sl-cine-poster" />
            <div class="sl-play-overlay sl-cine-play" id="sl-cine-play-btn">
                <svg width="48" height="48" fill="var(--smartlearn-primary)" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <div class="sl-cinematic-overlay" id="sl-cine-overlay"></div>
        </div>
        
        <!-- Floating Course Info -->
        <div class="sl-cinematic-info" id="sl-cine-info">
            <span class="sl-badge" data-sl-edit="text">Featured Course</span>
            <h2 class="sl-cinematic-title" data-sl-edit="text">Advanced Machine Learning</h2>
            <p class="sl-cinematic-desc" data-sl-edit="text">Master the algorithms of tomorrow with our comprehensive, industry-led curriculum. Watch the trailer to see what you'll build.</p>
            
            <!-- Editable Video URL (Subtle) -->
            <div class="sl-cinematic-video-url" data-sl-edit="text" style="font-size:11px; opacity:0.6; margin-bottom:1.5rem; word-break:break-all;">https://www.youtube.com/embed/dQw4w9WgXcQ</div>
            
            <div class="sl-cinematic-actions">
                <a href="#" class="sl-btn sl-btn-primary" data-sl-edit="link" data-sl-edit-text="Enroll Now">Enroll Now</a>
                <a href="#" class="sl-btn sl-btn-outline" data-sl-edit="link" data-sl-edit-text="View Syllabus">View Syllabus</a>
            </div>
        </div>
    </div>
</div>
    `),
    css: clean(`
.sl-gallery-cinematic { padding: 4rem 0; background-color: var(--smartlearn-bg); }
.sl-cinematic-container { position: relative; border-radius: 1.5rem; overflow: hidden; min-height: 600px; display: flex; align-items: flex-end; padding: 3rem; }
.sl-cinematic-media { position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 0; background-color: var(--smartlearn-card-bg); }
.sl-media-embed { width: 100%; height: 100%; }
.sl-media-embed iframe, .sl-cinematic-poster { width: 100%; height: 100%; object-fit: cover; border: none; }
.sl-cinematic-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%); pointer-events: none; }
.sl-cinematic-info { position: relative; z-index: 1; max-width: 600px; color: #fff; }
.sl-badge { display: inline-block; padding: 0.25rem 0.75rem; background-color: var(--smartlearn-primary); color: #fff; border-radius: 1rem; font-size: 0.875rem; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem; }
.sl-cinematic-title { font-size: 3rem; font-weight: 800; margin-bottom: 1rem; color: #fff; }
.sl-cinematic-desc { font-size: 1.25rem; line-height: 1.6; margin-bottom: 2rem; color: rgba(255,255,255,0.9); }
.sl-cinematic-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
.sl-btn { padding: 0.875rem 2rem; border-radius: 0.5rem; font-weight: 700; text-decoration: none; transition: all 0.2s ease; }
.sl-btn-primary { background-color: var(--smartlearn-primary); color: #fff; border: 2px solid var(--smartlearn-primary); }
.sl-btn-outline { background-color: transparent; color: #fff; border: 2px solid #fff; }
.sl-btn-primary:hover { filter: brightness(1.1); }
.sl-btn-outline:hover { background-color: #fff; color: #000; }
@media (max-width: 767px) {
    .sl-cinematic-container { flex-direction: column; padding: 0; border-radius: 0; min-height: auto; }
    .sl-cinematic-media { position: relative; height: 300px; }
    .sl-cinematic-info { padding: 2rem; background-color: var(--smartlearn-card-bg); color: var(--smartlearn-text); }
    .sl-cinematic-title { color: var(--smartlearn-text); font-size: 2rem; }
    .sl-cinematic-desc { color: var(--smartlearn-text-muted); }
    .sl-cinematic-overlay { display: none; }
    .sl-btn-outline { border-color: var(--smartlearn-text); color: var(--smartlearn-text); }
    .sl-btn-outline:hover { background-color: var(--smartlearn-text); color: var(--smartlearn-bg); }
}
    `),
    css: clean(`
.sl-gallery-cinematic { padding: 4rem 0; background-color: var(--smartlearn-bg); }
.sl-cinematic-container { position: relative; border-radius: 1.5rem; overflow: hidden; min-height: 600px; display: flex; align-items: flex-end; padding: 3rem; }
.sl-cinematic-media { position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 0; background-color: var(--smartlearn-card-bg); }
.sl-media-embed { width: 100%; height: 100%; }
.sl-cinematic-poster { width: 100%; height: 100%; object-fit: cover; border: none; }
.sl-cinematic-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%); pointer-events: none; transition: opacity 0.3s ease; }
.sl-cinematic-info { position: relative; z-index: 1; max-width: 600px; color: #fff; transition: opacity 0.3s ease; }
.sl-play-overlay { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80px; height: 80px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(0,0,0,0.2); cursor: pointer; transition: transform 0.2s ease; z-index: 5; }
.sl-play-overlay:hover { transform: translate(-50%, -50%) scale(1.1); }
.sl-badge { display: inline-block; padding: 0.25rem 0.75rem; background-color: var(--smartlearn-primary); color: #fff; border-radius: 1rem; font-size: 0.875rem; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem; }
.sl-cinematic-title { font-size: 3rem; font-weight: 800; margin-bottom: 1rem; color: #fff; }
.sl-cinematic-desc { font-size: 1.25rem; line-height: 1.6; margin-bottom: 1rem; color: rgba(255,255,255,0.9); }
.sl-cinematic-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
.sl-btn { padding: 0.875rem 2rem; border-radius: 0.5rem; font-weight: 700; text-decoration: none; transition: all 0.2s ease; }
.sl-btn-primary { background-color: var(--smartlearn-primary); color: #fff; border: 2px solid var(--smartlearn-primary); }
.sl-btn-outline { background-color: transparent; color: #fff; border: 2px solid #fff; }
.sl-btn-primary:hover { filter: brightness(1.1); }
.sl-btn-outline:hover { background-color: #fff; color: #000; }
@media (max-width: 767px) {
    .sl-cinematic-container { flex-direction: column; padding: 0; border-radius: 0; min-height: auto; }
    .sl-cinematic-media { position: relative; height: 300px; width: 100%; }
    .sl-cinematic-info { padding: 2rem; background-color: var(--smartlearn-card-bg); color: var(--smartlearn-text); }
    .sl-cinematic-title { color: var(--smartlearn-text); font-size: 2rem; }
    .sl-cinematic-desc { color: var(--smartlearn-text-muted); }
    .sl-cinematic-overlay { display: none; }
    .sl-btn-outline { border-color: var(--smartlearn-text); color: var(--smartlearn-text); }
    .sl-btn-outline:hover { background-color: var(--smartlearn-text); color: var(--smartlearn-bg); }
}
    `),
    js: clean(`
(function() {
    const root = document.querySelector('.sl-gallery-cinematic');
    if (!root) return;
    const playBtn = root.querySelector('#sl-cine-play-btn');
    const mediaArea = root.querySelector('#sl-cine-media-area');
    const poster = root.querySelector('#sl-cine-poster');
    const overlay = root.querySelector('#sl-cine-overlay');
    const info = root.querySelector('#sl-cine-info');
    const urlEl = root.querySelector('.sl-cinematic-video-url');
    
    if(!playBtn || !mediaArea || !urlEl) return;
    
    playBtn.addEventListener('click', () => {
        if(document.body.classList.contains('sl-editor-mode')) return;
        const videoUrl = urlEl.innerText.trim();
        if(!videoUrl) return;
        
        poster.style.display = 'none';
        playBtn.style.display = 'none';
        if(overlay) overlay.style.opacity = '0';
        // info.style.opacity = '0'; // Optional: hide info when playing
        
        const iframe = document.createElement('iframe');
        iframe.src = videoUrl + (videoUrl.includes('?') ? '&' : '?') + 'autoplay=1';
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        iframe.style.zIndex = '10';
        iframe.setAttribute('allow', 'autoplay; fullscreen; encrypted-media');
        iframe.setAttribute('allowfullscreen', 'true');
        
        mediaArea.appendChild(iframe);
    });
})();
    `)
  },

  // 2. Interactive Video Chapters
  {
    id: "gallery-chapters",
    name: "Interactive Video Chapters",
    category: "Gallery",
    variant: "Educational Exploration",
    description: "Educational video exploration with interactive chapters.",
    tags: ["gallery", "video", "chapters", "learning"],
    image_count: 3,
    html: clean(`
<!-- sl-section: gallery-chapters | v1.0 -->
<div class="sl-gallery-chapters sl-py-20">
    <div class="container">
        <div class="sl-chapters-header sl-mb-16">
            <h2 class="sl-section-title" data-sl-edit="text">Course Curriculum Sneak Peek</h2>
            <p class="sl-section-subtitle" data-sl-edit="text">Explore key concepts from our top-rated modules.</p>
        </div>
        
        <div class="sl-chapters-layout">
            <!-- Active Video Area -->
            <div class="sl-chapters-media">
                <div class="sl-media-ratio" id="sl-chapters-media-area">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Video Poster" class="sl-chapters-poster" id="sl-chapter-active-img" />
                    <div class="sl-play-overlay" id="sl-chapter-play-btn">
                        <svg width="48" height="48" fill="var(--smartlearn-primary)" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                </div>
            </div>
            
            <!-- Chapter Navigation -->
            <div class="sl-chapters-nav">
                
                <button class="sl-chapter-item sl-active" data-poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80">
                    <div class="sl-chapter-thumb">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Chapter 1" data-sl-edit="image" />
                    </div>
                    <div class="sl-chapter-info">
                        <span class="sl-chapter-num" data-sl-edit="text">Chapter 1</span>
                        <h4 class="sl-chapter-title" data-sl-edit="text">Introduction to the Ecosystem</h4>
                        <div class="sl-chapter-video-url" data-sl-edit="text" style="font-size:11px; opacity:0.6; margin-top:5px; word-break:break-all;">https://www.youtube.com/embed/dQw4w9WgXcQ</div>
                    </div>
                </button>
                
                <button class="sl-chapter-item" data-poster="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80">
                    <div class="sl-chapter-thumb">
                        <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Chapter 2" data-sl-edit="image" />
                    </div>
                    <div class="sl-chapter-info">
                        <span class="sl-chapter-num" data-sl-edit="text">Chapter 2</span>
                        <h4 class="sl-chapter-title" data-sl-edit="text">Core Architectures</h4>
                        <div class="sl-chapter-video-url" data-sl-edit="text" style="font-size:11px; opacity:0.6; margin-top:5px; word-break:break-all;">https://www.youtube.com/embed/M7lc1UVf-VE</div>
                    </div>
                </button>
                
                <button class="sl-chapter-item" data-poster="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80">
                    <div class="sl-chapter-thumb">
                        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Chapter 3" data-sl-edit="image" />
                    </div>
                    <div class="sl-chapter-info">
                        <span class="sl-chapter-num" data-sl-edit="text">Chapter 3</span>
                        <h4 class="sl-chapter-title" data-sl-edit="text">Advanced Methodologies</h4>
                        <div class="sl-chapter-video-url" data-sl-edit="text" style="font-size:11px; opacity:0.6; margin-top:5px; word-break:break-all;">https://www.youtube.com/embed/LXb3EKWsInQ</div>
                    </div>
                </button>

            </div>
        </div>
    </div>
</div>
    `),
    css: clean(`
.sl-gallery-chapters { padding: 5rem 0; background-color: var(--smartlearn-bg); }
.sl-gallery-chapters .sl-mb-16 { margin-bottom: 3rem; }
.sl-gallery-chapters .sl-section-title { font-size: 2.25rem; font-weight: 700; color: var(--smartlearn-text); margin-bottom: 0.5rem; }
.sl-gallery-chapters .sl-section-subtitle { font-size: 1.125rem; color: var(--smartlearn-text-muted); }
.sl-chapters-layout { display: flex; flex-direction: column; gap: 2rem; }
@media (min-width: 992px) { .sl-chapters-layout { flex-direction: row; align-items: stretch; } }
.sl-chapters-media { flex: 1; border-radius: 1rem; overflow: hidden; background-color: var(--smartlearn-card-bg); border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.05)); }
.sl-media-ratio { position: relative; padding-bottom: 56.25%; height: 0; }
.sl-chapters-poster { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; transition: opacity 0.3s ease; }
.sl-play-overlay { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80px; height: 80px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(0,0,0,0.2); cursor: pointer; transition: transform 0.2s ease; }
.sl-play-overlay:hover { transform: translate(-50%, -50%) scale(1.1); }
.sl-chapters-nav { display: flex; flex-direction: row; overflow-x: auto; gap: 1rem; padding-bottom: 1rem; scroll-snap-type: x mandatory; }
@media (min-width: 992px) { .sl-chapters-nav { flex-direction: column; overflow-x: visible; width: 350px; padding-bottom: 0; scroll-snap-type: none; } }
.sl-chapter-item { display: flex; align-items: center; gap: 1rem; padding: 1rem; background-color: var(--smartlearn-card-bg); border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.05)); border-radius: 0.75rem; text-align: left; cursor: pointer; transition: all 0.2s ease; min-width: 280px; scroll-snap-align: start; outline: none; }
.sl-chapter-item:focus-visible { box-shadow: 0 0 0 3px var(--smartlearn-primary); }
.sl-chapter-item:hover { background-color: var(--smartlearn-bg); }
.sl-chapter-item.sl-active { border-color: var(--smartlearn-primary); background-color: var(--smartlearn-bg); box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
.sl-chapter-thumb { width: 80px; height: 60px; border-radius: 0.5rem; overflow: hidden; flex-shrink: 0; }
.sl-chapter-thumb img { width: 100%; height: 100%; object-fit: cover; }
.sl-chapter-info { display: flex; flex-direction: column; }
.sl-chapter-num { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--smartlearn-primary); margin-bottom: 0.25rem; }
.sl-chapter-title { font-size: 1rem; font-weight: 600; color: var(--smartlearn-text); margin: 0; line-height: 1.4; }
    `),
    js: clean(`
(function() {
    const root = document.querySelector('.sl-gallery-chapters');
    if (!root) return;
    const chapters = root.querySelectorAll('.sl-chapter-item');
    const activeImg = root.querySelector('#sl-chapter-active-img');
    const playBtn = root.querySelector('#sl-chapter-play-btn');
    const mediaArea = root.querySelector('#sl-chapters-media-area');
    if(!chapters.length || !activeImg || !playBtn || !mediaArea) return;
    
    let currentVideoUrl = "";

    function updateActiveChapter(btn) {
        if(document.body.classList.contains('sl-editor-mode')) return;
        
        const existingIframe = mediaArea.querySelector('iframe');
        if(existingIframe) existingIframe.remove();
        
        activeImg.style.display = 'block';
        playBtn.style.display = 'flex';
        
        chapters.forEach(c => c.classList.remove('sl-active'));
        btn.classList.add('sl-active');
        
        const poster = btn.getAttribute('data-poster');
        if(poster) activeImg.src = poster;
        
        const urlEl = btn.querySelector('.sl-chapter-video-url');
        if(urlEl) {
            currentVideoUrl = urlEl.innerText.trim();
        }
    }

    chapters.forEach(btn => {
        btn.addEventListener('click', () => updateActiveChapter(btn));
    });
    
    playBtn.addEventListener('click', () => {
        if(document.body.classList.contains('sl-editor-mode') || !currentVideoUrl) return;
        
        activeImg.style.display = 'none';
        playBtn.style.display = 'none';
        
        const iframe = document.createElement('iframe');
        iframe.src = currentVideoUrl + (currentVideoUrl.includes('?') ? '&' : '?') + 'autoplay=1';
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        iframe.setAttribute('allow', 'autoplay; fullscreen; encrypted-media');
        iframe.setAttribute('allowfullscreen', 'true');
        
        mediaArea.appendChild(iframe);
    });
    
    // Init first chapter
    const firstActive = root.querySelector('.sl-chapter-item.sl-active') || chapters[0];
    const urlEl = firstActive.querySelector('.sl-chapter-video-url');
    if(urlEl) currentVideoUrl = urlEl.innerText.trim();
})();
    `)
  },

  // 3. Floating Media Wall
  {
    id: "gallery-floating-wall",
    name: "Floating Media Wall",
    category: "Gallery",
    variant: "Premium Showcase",
    description: "Premium visual showcase with overlapping depth and hover transforms.",
    tags: ["gallery", "floating", "wall", "premium", "showcase"],
    image_count: 3,
    html: clean(`
<!-- sl-section: gallery-floating-wall | v1.0 -->
<div class="sl-gallery-floating-wall sl-py-20">
    <div class="container">
        <div class="sl-wall-layout">
            <div class="sl-wall-content">
                <h2 class="sl-section-title" data-sl-edit="text">Experience Life on Campus</h2>
                <p class="sl-section-subtitle" data-sl-edit="text">Immerse yourself in a vibrant, diverse community dedicated to innovation and creativity.</p>
                <a href="#" class="sl-btn sl-btn-primary" data-sl-edit="link" data-sl-edit-text="View Virtual Tour">View Virtual Tour</a>
            </div>
            
            <div class="sl-wall-media">
                <!-- Large Dominant Image -->
                <div class="sl-wall-card sl-wall-main">
                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Campus Life" data-sl-edit="image" />
                </div>
                
                <!-- Floating Small Image 1 -->
                <div class="sl-wall-card sl-wall-sub1">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Students" data-sl-edit="image" />
                </div>
                
                <!-- Floating Small Image 2 -->
                <div class="sl-wall-card sl-wall-sub2">
                    <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Graduation" data-sl-edit="image" />
                </div>
                
                <!-- Floating Badge -->
                <div class="sl-wall-badge">
                    <span class="sl-badge-icon">🎓</span>
                    <span class="sl-badge-text" data-sl-edit="text">#1 Student Satisfaction</span>
                </div>
            </div>
        </div>
    </div>
</div>
    `),
    css: clean(`
.sl-gallery-floating-wall { padding: 6rem 0; background-color: var(--smartlearn-card-bg); overflow: hidden; }
.sl-wall-layout { display: flex; flex-direction: column; gap: 4rem; align-items: center; }
@media (min-width: 992px) { .sl-wall-layout { flex-direction: row; justify-content: space-between; } }
.sl-wall-content { flex: 1; max-width: 450px; }
.sl-wall-content .sl-section-title { font-size: 2.5rem; font-weight: 800; color: var(--smartlearn-text); margin-bottom: 1.5rem; line-height: 1.2; }
.sl-wall-content .sl-section-subtitle { font-size: 1.125rem; color: var(--smartlearn-text-muted); margin-bottom: 2rem; line-height: 1.6; }
.sl-wall-content .sl-btn { display: inline-block; padding: 1rem 2rem; background-color: var(--smartlearn-primary); color: #fff; text-decoration: none; border-radius: 0.5rem; font-weight: 700; transition: background-color 0.2s ease; }
.sl-wall-content .sl-btn:hover { filter: brightness(1.1); }
.sl-wall-media { flex: 1; position: relative; width: 100%; max-width: 600px; min-height: 400px; }
.sl-wall-card { position: absolute; border-radius: 1rem; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1); border: 4px solid var(--smartlearn-card-bg); transition: transform 0.4s ease, box-shadow 0.4s ease; }
.sl-wall-card img { width: 100%; height: 100%; object-fit: cover; display: block; }
.sl-wall-main { width: 70%; height: 80%; top: 10%; left: 10%; z-index: 1; }
.sl-wall-sub1 { width: 40%; height: 40%; top: 0; right: 0; z-index: 2; }
.sl-wall-sub2 { width: 45%; height: 45%; bottom: 0; right: 10%; z-index: 3; }
.sl-wall-badge { position: absolute; bottom: 15%; left: 0; z-index: 4; background-color: var(--smartlearn-bg); padding: 1rem 1.5rem; border-radius: 2rem; box-shadow: 0 10px 20px rgba(0,0,0,0.1); display: flex; align-items: center; gap: 0.75rem; border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.05)); }
.sl-badge-text { font-weight: 700; color: var(--smartlearn-text); font-size: 0.875rem; }
@media (prefers-reduced-motion: no-preference) {
    .sl-wall-main:hover { transform: translateY(-10px) scale(1.02); z-index: 10; box-shadow: 0 30px 60px rgba(0,0,0,0.15); }
    .sl-wall-sub1:hover, .sl-wall-sub2:hover { transform: translateY(-10px) scale(1.05); z-index: 10; box-shadow: 0 30px 60px rgba(0,0,0,0.15); }
}
@media (max-width: 767px) {
    .sl-wall-media { min-height: auto; position: static; display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
    .sl-wall-card { position: static; width: 100%; height: 200px; border: none; box-shadow: none; }
    .sl-wall-main { grid-column: 1 / -1; height: 250px; }
    .sl-wall-badge { position: static; grid-column: 1 / -1; justify-content: center; }
}
    `),
    js: ""
  },

  // 4. Scroll-Reveal Filmstrip
  {
    id: "gallery-filmstrip",
    name: "Scroll-Reveal Filmstrip",
    category: "Gallery",
    variant: "Storytelling",
    description: "Horizontal scrolling storytelling filmstrip with native scroll snapping.",
    tags: ["gallery", "filmstrip", "scroll", "story"],
    image_count: 3,
    html: clean(`
<!-- sl-section: gallery-filmstrip | v1.0 -->
<div class="sl-gallery-filmstrip sl-py-16">
    <div class="sl-filmstrip-header sl-mb-12 container">
        <h2 class="sl-section-title" data-sl-edit="text">Our Journey in Moments</h2>
        <p class="sl-section-subtitle" data-sl-edit="text">Swipe to explore the highlights of our vibrant academic year.</p>
    </div>
    
    <div class="sl-filmstrip-scroll-container">
        
        <!-- Image Card -->
        <div class="sl-filmstrip-item">
            <div class="sl-filmstrip-media">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Moment 1" data-sl-edit="image" />
            </div>
            <div class="sl-filmstrip-caption" data-sl-edit="text">Welcome Week 2026</div>
        </div>
        
        <!-- Quote Card -->
        <div class="sl-filmstrip-item sl-item-quote">
            <div class="sl-quote-content">
                <svg width="40" height="40" fill="var(--smartlearn-primary)" viewBox="0 0 24 24" class="sl-mb-4"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                <p class="sl-quote-text" data-sl-edit="text">"The resources and community here completely transformed my career trajectory."</p>
                <div class="sl-quote-author" data-sl-edit="text">— Sarah J., Alumni</div>
            </div>
        </div>
        
        <!-- Image Card -->
        <div class="sl-filmstrip-item">
            <div class="sl-filmstrip-media">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Moment 2" data-sl-edit="image" />
            </div>
            <div class="sl-filmstrip-caption" data-sl-edit="text">Annual Hackathon</div>
        </div>
        
        <!-- Image Card -->
        <div class="sl-filmstrip-item">
            <div class="sl-filmstrip-media">
                <img src="https://images.unsplash.com/photo-1523580494112-071d192c9e1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Moment 3" data-sl-edit="image" />
            </div>
            <div class="sl-filmstrip-caption" data-sl-edit="text">Graduation Day</div>
        </div>

    </div>
</div>
    `),
    css: clean(`
.sl-gallery-filmstrip { padding: 4rem 0; background-color: var(--smartlearn-bg); overflow: hidden; }
.sl-filmstrip-header .sl-section-title { font-size: 2.25rem; font-weight: 700; color: var(--smartlearn-text); margin-bottom: 0.5rem; }
.sl-filmstrip-header .sl-section-subtitle { font-size: 1.125rem; color: var(--smartlearn-text-muted); }
.sl-gallery-filmstrip .sl-mb-12 { margin-bottom: 2.5rem; }
.sl-filmstrip-scroll-container { display: flex; gap: 2rem; padding: 0 1rem 2rem 1rem; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; -ms-overflow-style: none; }
.sl-filmstrip-scroll-container::-webkit-scrollbar { display: none; }
@media (min-width: 768px) { .sl-filmstrip-scroll-container { padding: 0 5vw 3rem 5vw; } }
.sl-filmstrip-item { flex: 0 0 85%; max-width: 500px; scroll-snap-align: center; display: flex; flex-direction: column; gap: 1rem; transition: transform 0.3s ease; }
@media (min-width: 768px) { .sl-filmstrip-item { flex: 0 0 400px; } }
.sl-filmstrip-media { width: 100%; aspect-ratio: 4/3; border-radius: 1rem; overflow: hidden; background-color: var(--smartlearn-card-bg); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
.sl-filmstrip-media img { width: 100%; height: 100%; object-fit: cover; }
.sl-filmstrip-caption { font-size: 1.125rem; font-weight: 600; color: var(--smartlearn-text); padding: 0 0.5rem; }
.sl-item-quote { justify-content: center; background-color: var(--smartlearn-card-bg); border-radius: 1rem; padding: 3rem 2rem; border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.05)); aspect-ratio: 4/3; box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
.sl-gallery-filmstrip .sl-mb-4 { margin-bottom: 1rem; }
.sl-quote-text { font-size: 1.5rem; font-weight: 600; color: var(--smartlearn-text); line-height: 1.4; margin-bottom: 1.5rem; font-style: italic; }
.sl-quote-author { font-size: 1rem; color: var(--smartlearn-text-muted); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
@media (prefers-reduced-motion: no-preference) {
    .sl-filmstrip-item:hover { transform: translateY(-5px); }
}
    `),
    js: ""
  },

  // 5. Before / After Learning Journey
  {
    id: "gallery-before-after",
    name: "Before / After Journey",
    category: "Gallery",
    variant: "Student Transformation",
    description: "Interactive visual slider showing transformation.",
    tags: ["gallery", "before", "after", "slider", "transformation"],
    image_count: 2,
    html: clean(`
<!-- sl-section: gallery-before-after | v1.0 -->
<div class="sl-gallery-before-after sl-py-20">
    <div class="container">
        <div class="sl-ba-header text-center sl-mb-16">
            <h2 class="sl-section-title" data-sl-edit="text">See the Transformation</h2>
            <p class="sl-section-subtitle" data-sl-edit="text">Drag the slider to see how our curriculum turns beginners into professionals.</p>
        </div>
        
        <div class="sl-ba-container">
            <div class="sl-ba-image sl-img-before">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Before" data-sl-edit="image" />
                <span class="sl-ba-label sl-label-before" data-sl-edit="text">Beginner Code</span>
            </div>
            
            <div class="sl-ba-image sl-img-after" id="sl-ba-after">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="After" data-sl-edit="image" />
                <span class="sl-ba-label sl-label-after" data-sl-edit="text">Professional Architecture</span>
            </div>
            
            <input type="range" min="0" max="100" value="50" class="sl-ba-slider" id="sl-ba-slider" aria-label="Compare before and after images" />
            <div class="sl-ba-handle" id="sl-ba-handle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline><polyline points="9 18 15 12 9 6" transform="translate(6, 0) scale(-1, 1)"></polyline></svg>
            </div>
        </div>
    </div>
</div>
    `),
    css: clean(`
.sl-gallery-before-after { padding: 5rem 0; background-color: var(--smartlearn-card-bg); }
.sl-gallery-before-after .text-center { text-align: center; }
.sl-gallery-before-after .sl-mb-16 { margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto; }
.sl-ba-header .sl-section-title { font-size: 2.25rem; font-weight: 700; color: var(--smartlearn-text); margin-bottom: 0.5rem; }
.sl-ba-header .sl-section-subtitle { font-size: 1.125rem; color: var(--smartlearn-text-muted); }
.sl-ba-container { position: relative; width: 100%; max-width: 1000px; margin: 0 auto; aspect-ratio: 16/9; border-radius: 1rem; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1); border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.05)); }
@media (max-width: 767px) { .sl-ba-container { aspect-ratio: 4/3; } }
.sl-ba-image { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
.sl-ba-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
.sl-img-after { clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%); }
.sl-ba-label { position: absolute; top: 1.5rem; padding: 0.5rem 1rem; background: rgba(0,0,0,0.6); color: #fff; font-weight: 600; border-radius: 2rem; backdrop-filter: blur(4px); font-size: 0.875rem; }
.sl-label-before { right: 1.5rem; }
.sl-label-after { left: 1.5rem; }
.sl-ba-slider { position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; cursor: ew-resize; z-index: 10; margin: 0; }
.sl-ba-handle { position: absolute; top: 0; left: 50%; bottom: 0; width: 4px; background-color: #fff; transform: translateX(-50%); pointer-events: none; z-index: 5; box-shadow: 0 0 10px rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; }
.sl-ba-handle svg { background: #fff; color: var(--smartlearn-primary); width: 40px; height: 40px; border-radius: 50%; padding: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.3); }
    `),
    js: clean(`
(function() {
    const root = document.querySelector('.sl-gallery-before-after');
    if (!root) return;
    const slider = root.querySelector('#sl-ba-slider');
    const afterImg = root.querySelector('#sl-ba-after');
    const handle = root.querySelector('#sl-ba-handle');
    if(!slider || !afterImg || !handle) return;
    
    function update(val) {
        afterImg.style.clipPath = \`polygon(0 0, \${val}% 0, \${val}% 100%, 0 100%)\`;
        handle.style.left = \`\${val}%\`;
    }
    
    slider.addEventListener('input', (e) => update(e.target.value));
})();
    `)
  },

  // 6. 3D Media Stage
  {
    id: "gallery-3d-stage",
    name: "3D Media Stage",
    category: "Gallery",
    variant: "Premium Visual Centerpiece",
    description: "Showcase-quality 3D carousel stage.",
    tags: ["gallery", "3d", "stage", "premium"],
    image_count: 3,
    html: clean(`
<!-- sl-section: gallery-3d-stage | v1.0 -->
<div class="sl-gallery-3d-stage sl-py-20">
    <div class="container text-center sl-mb-12">
        <h2 class="sl-section-title" data-sl-edit="text">Featured Work</h2>
        <p class="sl-section-subtitle" data-sl-edit="text">Select an item to view it on the main stage.</p>
    </div>
    <div class="sl-stage-container">
        <!-- Stage Items -->
        <div class="sl-stage-item sl-stage-left" data-index="0">
            <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Work 1" data-sl-edit="image" />
        </div>
        <div class="sl-stage-item sl-stage-center" data-index="1">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Work 2" data-sl-edit="image" />
        </div>
        <div class="sl-stage-item sl-stage-right" data-index="2">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Work 3" data-sl-edit="image" />
        </div>
    </div>
</div>
    `),
    css: clean(`
.sl-gallery-3d-stage { padding: 5rem 0; background-color: var(--smartlearn-bg); overflow: hidden; }
.sl-gallery-3d-stage .text-center { text-align: center; }
.sl-gallery-3d-stage .sl-mb-12 { margin-bottom: 3rem; }
.sl-gallery-3d-stage .sl-section-title { font-size: 2.25rem; font-weight: 700; color: var(--smartlearn-text); margin-bottom: 0.5rem; }
.sl-gallery-3d-stage .sl-section-subtitle { font-size: 1.125rem; color: var(--smartlearn-text-muted); }
.sl-stage-container { position: relative; max-width: 1000px; margin: 0 auto; height: 400px; perspective: 1200px; display: flex; align-items: center; justify-content: center; }
.sl-stage-item { position: absolute; width: 60%; max-width: 600px; aspect-ratio: 16/9; border-radius: 1rem; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.2); transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); cursor: pointer; border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.1)); }
.sl-stage-item img { width: 100%; height: 100%; object-fit: cover; }
.sl-stage-center { transform: translateX(0) translateZ(0) rotateY(0); z-index: 3; filter: brightness(1); }
.sl-stage-left { transform: translateX(-40%) translateZ(-200px) rotateY(25deg); z-index: 2; filter: brightness(0.6); }
.sl-stage-right { transform: translateX(40%) translateZ(-200px) rotateY(-25deg); z-index: 2; filter: brightness(0.6); }
/* Reduced motion fallback: flat grid */
@media (prefers-reduced-motion: reduce) {
    .sl-stage-container { perspective: none; height: auto; flex-direction: column; gap: 2rem; }
    .sl-stage-item { position: static; width: 100%; transform: none !important; filter: none !important; cursor: default; }
}
@media (max-width: 767px) {
    .sl-stage-container { perspective: none; height: auto; flex-direction: column; gap: 1rem; padding: 0 1rem; }
    .sl-stage-item { position: static; width: 100%; transform: none !important; filter: none !important; cursor: default; }
}
    `),
    js: clean(`
(function() {
    const root = document.querySelector('.sl-gallery-3d-stage');
    if (!root) return;
    const items = root.querySelectorAll('.sl-stage-item');
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 768) return;
    
    items.forEach(item => {
        item.addEventListener('click', () => {
            if(document.body.classList.contains('sl-editor-mode')) return;
            const currentCenter = root.querySelector('.sl-stage-center');
            if(currentCenter === item) return;
            
            // Swap classes based on position
            const clickedClass = item.classList.contains('sl-stage-left') ? 'sl-stage-left' : 'sl-stage-right';
            const centerClass = 'sl-stage-center';
            
            item.classList.remove(clickedClass);
            item.classList.add(centerClass);
            
            currentCenter.classList.remove(centerClass);
            currentCenter.classList.add(clickedClass);
        });
    });
})();
    `)
  },

  // 7. Interactive Map / Explorer
  {
    id: "gallery-interactive-map",
    name: "Interactive Explorer",
    category: "Gallery",
    variant: "Campus/Ecosystem Map",
    description: "Explore physical campus or online ecosystem visually.",
    tags: ["gallery", "map", "interactive", "explorer"],
    image_count: 1,
    html: clean(`
<!-- sl-section: gallery-interactive-map | v1.0 -->
<div class="sl-gallery-interactive-map sl-py-20">
    <div class="container">
        <div class="text-center sl-mb-12">
            <h2 class="sl-section-title" data-sl-edit="text">Explore the Ecosystem</h2>
            <p class="sl-section-subtitle" data-sl-edit="text">Click the hotspots to learn more about our facilities.</p>
        </div>
        
        <div class="sl-map-container">
            <!-- Base Map Image -->
            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Campus Map" class="sl-map-base" data-sl-edit="image" />
            
            <!-- Pins -->
            <button class="sl-map-pin sl-pin-active" style="top: 30%; left: 40%;" aria-label="Library" data-target="info-1">
                <span class="sl-pin-pulse"></span>
                <span class="sl-pin-dot"></span>
            </button>
            <button class="sl-map-pin" style="top: 60%; left: 70%;" aria-label="Science Lab" data-target="info-2">
                <span class="sl-pin-pulse"></span>
                <span class="sl-pin-dot"></span>
            </button>
            <button class="sl-map-pin" style="top: 45%; left: 20%;" aria-label="Student Center" data-target="info-3">
                <span class="sl-pin-pulse"></span>
                <span class="sl-pin-dot"></span>
            </button>
            
            <!-- Info Panels (Absolutely positioned on desktop, inline on mobile) -->
            <div class="sl-map-info-panel sl-show" id="info-1">
                <h4 class="sl-info-title" data-sl-edit="text">Central Library</h4>
                <p class="sl-info-desc" data-sl-edit="text">Over 2 million resources and 24/7 study spaces.</p>
            </div>
            <div class="sl-map-info-panel" id="info-2">
                <h4 class="sl-info-title" data-sl-edit="text">Innovation Labs</h4>
                <p class="sl-info-desc" data-sl-edit="text">State-of-the-art tech and research facilities.</p>
            </div>
            <div class="sl-map-info-panel" id="info-3">
                <h4 class="sl-info-title" data-sl-edit="text">Student Center</h4>
                <p class="sl-info-desc" data-sl-edit="text">The heart of campus life and community events.</p>
            </div>
        </div>
    </div>
</div>
    `),
    css: clean(`
.sl-gallery-interactive-map { padding: 5rem 0; background-color: var(--smartlearn-card-bg); }
.sl-gallery-interactive-map .text-center { text-align: center; }
.sl-gallery-interactive-map .sl-mb-12 { margin-bottom: 3rem; }
.sl-gallery-interactive-map .sl-section-title { font-size: 2.25rem; font-weight: 700; color: var(--smartlearn-text); margin-bottom: 0.5rem; }
.sl-gallery-interactive-map .sl-section-subtitle { font-size: 1.125rem; color: var(--smartlearn-text-muted); }
.sl-map-container { position: relative; max-width: 1000px; margin: 0 auto; border-radius: 1rem; overflow: hidden; border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.05)); box-shadow: 0 15px 30px rgba(0,0,0,0.05); }
.sl-map-base { width: 100%; display: block; object-fit: cover; aspect-ratio: 16/9; }
.sl-map-pin { position: absolute; width: 32px; height: 32px; background: transparent; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transform: translate(-50%, -50%); outline: none; z-index: 10; }
.sl-pin-dot { width: 16px; height: 16px; background-color: var(--smartlearn-primary); border-radius: 50%; box-shadow: 0 2px 5px rgba(0,0,0,0.3); border: 2px solid #fff; z-index: 2; transition: transform 0.2s ease; }
.sl-map-pin:hover .sl-pin-dot, .sl-map-pin:focus-visible .sl-pin-dot, .sl-pin-active .sl-pin-dot { transform: scale(1.3); }
.sl-pin-pulse { position: absolute; width: 100%; height: 100%; background-color: var(--smartlearn-primary); border-radius: 50%; opacity: 0.5; z-index: 1; animation: sl-pulse 2s infinite; }
@keyframes sl-pulse { 0% { transform: scale(1); opacity: 0.7; } 100% { transform: scale(2.5); opacity: 0; } }
@media (prefers-reduced-motion: reduce) { .sl-pin-pulse { animation: none; display: none; } }
.sl-map-info-panel { position: absolute; bottom: 2rem; left: 2rem; background: var(--smartlearn-bg); padding: 1.5rem; border-radius: 0.75rem; box-shadow: 0 10px 25px rgba(0,0,0,0.15); border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.05)); max-width: 300px; opacity: 0; visibility: hidden; transform: translateY(10px); transition: all 0.3s ease; z-index: 20; }
.sl-map-info-panel.sl-show { opacity: 1; visibility: visible; transform: translateY(0); }
.sl-info-title { font-size: 1.125rem; font-weight: 700; color: var(--smartlearn-text); margin-bottom: 0.5rem; }
.sl-info-desc { font-size: 0.875rem; color: var(--smartlearn-text-muted); margin: 0; line-height: 1.5; }
@media (max-width: 767px) {
    .sl-map-container { display: flex; flex-direction: column; aspect-ratio: auto; }
    .sl-map-base { aspect-ratio: 4/3; }
    .sl-map-pin { display: none; /* Hide pins on mobile, show list instead */ }
    .sl-map-info-panel { position: static; max-width: 100%; opacity: 1; visibility: visible; transform: none; box-shadow: none; border-radius: 0; border: none; border-bottom: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.05)); display: block !important; }
}
    `),
    js: clean(`
(function() {
    const root = document.querySelector('.sl-gallery-interactive-map');
    if (!root) return;
    const pins = root.querySelectorAll('.sl-map-pin');
    const panels = root.querySelectorAll('.sl-map-info-panel');
    if(!pins.length) return;
    
    pins.forEach(pin => {
        pin.addEventListener('click', () => {
            if(document.body.classList.contains('sl-editor-mode')) return;
            const targetId = pin.getAttribute('data-target');
            
            pins.forEach(p => p.classList.remove('sl-pin-active'));
            pin.classList.add('sl-pin-active');
            
            panels.forEach(panel => {
                if(panel.id === targetId) {
                    panel.classList.add('sl-show');
                } else {
                    panel.classList.remove('sl-show');
                }
            });
        });
    });
})();
    `)
  },

  // 8. Media Collage / Scrapbook
  {
    id: "gallery-scrapbook",
    name: "Media Collage",
    category: "Gallery",
    variant: "Editorial Storytelling",
    description: "Magazine-style layered collage of media and quotes.",
    tags: ["gallery", "collage", "scrapbook", "editorial"],
    image_count: 3,
    html: clean(`
<!-- sl-section: gallery-scrapbook | v1.0 -->
<div class="sl-gallery-scrapbook sl-py-20">
    <div class="container">
        <div class="sl-scrapbook-header sl-mb-16 text-center">
            <h2 class="sl-section-title" data-sl-edit="text">Life Beyond the Screen</h2>
            <p class="sl-section-subtitle" data-sl-edit="text">Real stories from real students.</p>
        </div>
        
        <div class="sl-scrapbook-grid">
            
            <!-- Large Image -->
            <div class="sl-scrapbook-item sl-sb-large">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Group Study" data-sl-edit="image" />
                <div class="sl-sb-caption" data-sl-edit="text">Collaborative Learning</div>
            </div>
            
            <!-- Editorial Quote -->
            <div class="sl-scrapbook-item sl-sb-quote">
                <p class="sl-sb-quote-text" data-sl-edit="text">"It's more than just a platform; it's a living ecosystem of ideas."</p>
            </div>
            
            <!-- Tall Image -->
            <div class="sl-scrapbook-item sl-sb-tall">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Focus" data-sl-edit="image" />
                <div class="sl-sb-caption" data-sl-edit="text">Deep Focus</div>
            </div>
            
            <!-- Wide Image -->
            <div class="sl-scrapbook-item sl-sb-wide">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tech" data-sl-edit="image" />
                <div class="sl-sb-caption" data-sl-edit="text">Modern Facilities</div>
            </div>

        </div>
    </div>
</div>
    `),
    css: clean(`
.sl-gallery-scrapbook { padding: 5rem 0; background-color: var(--smartlearn-bg); }
.sl-gallery-scrapbook .text-center { text-align: center; }
.sl-gallery-scrapbook .sl-mb-16 { margin-bottom: 4rem; }
.sl-gallery-scrapbook .sl-section-title { font-size: 2.25rem; font-weight: 700; color: var(--smartlearn-text); margin-bottom: 0.5rem; }
.sl-gallery-scrapbook .sl-section-subtitle { font-size: 1.125rem; color: var(--smartlearn-text-muted); }

.sl-scrapbook-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
@media (min-width: 768px) {
    .sl-scrapbook-grid { grid-template-columns: repeat(4, 1fr); grid-auto-rows: 250px; gap: 1.5rem; }
}

.sl-scrapbook-item { position: relative; border-radius: 0.5rem; overflow: hidden; background-color: var(--smartlearn-card-bg); box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s ease; }
.sl-scrapbook-item img { width: 100%; height: 100%; object-fit: cover; display: block; }
.sl-sb-caption { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); color: #fff; padding: 2rem 1rem 1rem 1rem; font-weight: 600; font-size: 1rem; }

.sl-sb-quote { display: flex; align-items: center; justify-content: center; padding: 2rem; background-color: var(--smartlearn-primary); color: #fff; border-radius: 0.5rem; }
.sl-sb-quote-text { font-size: 1.5rem; font-weight: 700; line-height: 1.4; font-style: italic; margin: 0; }

@media (min-width: 768px) {
    .sl-sb-large { grid-column: span 2; grid-row: span 2; }
    .sl-sb-quote { grid-column: span 2; grid-row: span 1; }
    .sl-sb-tall { grid-column: span 1; grid-row: span 2; }
    .sl-sb-wide { grid-column: span 3; grid-row: span 1; }
}

@media (prefers-reduced-motion: no-preference) {
    .sl-scrapbook-item:hover { transform: scale(1.02); z-index: 10; box-shadow: 0 15px 40px rgba(0,0,0,0.1); }
}
    `),
    js: ""
  }
];

let catalog = {};
if (fs.existsSync(catalogPath)) {
  catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
} else {
  catalog = { version: "1.0", updated: new Date().toISOString().split('T')[0], sections: [] };
}

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

console.log('All 8 Gallery & Video sections generated successfully with strict technical rules applied!');
