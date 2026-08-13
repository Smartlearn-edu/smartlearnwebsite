import re
import sys

with open('scripts/generate_gallery_sections.cjs', 'r') as f:
    content = f.read()

# 1. Floating Media Wall
wall_html_old = """            <div class="sl-wall-content">
                <h2 class="sl-section-title" data-sl-edit="text">Experience Life on Campus</h2>
                <p class="sl-section-subtitle" data-sl-edit="text">Immerse yourself in a vibrant, diverse community dedicated to innovation and creativity.</p>
                <a href="#" class="sl-btn sl-btn-primary" data-sl-edit="link" data-sl-edit-text="View Virtual Tour">View Virtual Tour</a>
            </div>
            
            <div class="sl-wall-media">
                <!-- Large Dominant Image -->
                <div class="sl-wall-card sl-wall-main">
                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Campus Life" data-sl-edit="image" />
                </div>"""

wall_html_new = """            <div class="sl-wall-content">
                <h2 class="sl-section-title" data-sl-edit="text">Experience Life on Campus</h2>
                <p class="sl-section-subtitle" data-sl-edit="text">Immerse yourself in a vibrant, diverse community dedicated to innovation and creativity.</p>
                <div class="sl-item-video-url" data-sl-edit="text" style="font-size:11px; opacity:0.6; margin-bottom:1.5rem; word-break:break-all;">https://www.youtube.com/embed/dQw4w9WgXcQ</div>
                <a href="#" class="sl-btn sl-btn-primary" data-sl-edit="link" data-sl-edit-text="View Virtual Tour">View Virtual Tour</a>
            </div>
            
            <div class="sl-wall-media">
                <!-- Large Dominant Image -->
                <div class="sl-wall-card sl-wall-main sl-video-item" id="sl-wall-main-card">
                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Campus Life" data-sl-edit="image" class="sl-wall-poster" />
                    <div class="sl-play-overlay sl-item-play-btn" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(0,0,0,0.2); cursor: pointer; transition: transform 0.2s ease; z-index: 5;">
                        <svg width="32" height="32" fill="var(--smartlearn-primary)" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                </div>"""

wall_css_old = """.sl-badge-text { font-weight: 700; color: var(--smartlearn-text); font-size: 0.875rem; }"""
wall_css_new = """.sl-badge-text { font-weight: 700; color: var(--smartlearn-text); font-size: 0.875rem; }
.sl-item-play-btn:hover { transform: translate(-50%, -50%) scale(1.1) !important; }"""

wall_js_old = """    js: ""
  },

  // 4. Scroll-Reveal Filmstrip"""
wall_js_new = """    js: clean(`
(function() {
    const root = document.querySelector('.sl-gallery-floating-wall');
    if (!root) return;
    const playBtn = root.querySelector('.sl-item-play-btn');
    const mediaArea = root.querySelector('#sl-wall-main-card');
    const poster = root.querySelector('.sl-wall-poster');
    const urlEl = root.querySelector('.sl-item-video-url');
    
    if(!playBtn || !mediaArea || !urlEl) return;
    
    playBtn.addEventListener('click', () => {
        if(document.body.classList.contains('sl-editor-mode')) return;
        const videoUrl = urlEl.innerText.trim();
        if(!videoUrl) return;
        
        poster.style.display = 'none';
        playBtn.style.display = 'none';
        
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

  // 4. Scroll-Reveal Filmstrip"""

content = content.replace(wall_html_old, wall_html_new)
content = content.replace(wall_css_old, wall_css_new)
content = content.replace(wall_js_old, wall_js_new)

# 2. Scroll-Reveal Filmstrip
fs_html_old = """        <!-- Image Card -->
        <div class="sl-filmstrip-item">
            <div class="sl-filmstrip-media">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Moment 1" data-sl-edit="image" />
            </div>
            <div class="sl-filmstrip-caption" data-sl-edit="text">Welcome Week 2026</div>
        </div>"""

fs_html_new = """        <!-- Image Card -->
        <div class="sl-filmstrip-item sl-video-item">
            <div class="sl-filmstrip-media" style="position:relative;">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Moment 1" data-sl-edit="image" class="sl-fs-poster" />
                <div class="sl-play-overlay sl-item-play-btn" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(0,0,0,0.2); cursor: pointer; transition: transform 0.2s ease; z-index: 5;">
                    <svg width="32" height="32" fill="var(--smartlearn-primary)" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
            </div>
            <div class="sl-filmstrip-caption">
                <span data-sl-edit="text">Welcome Week 2026</span>
                <div class="sl-item-video-url" data-sl-edit="text" style="font-size:11px; opacity:0.6; margin-top:5px; word-break:break-all; font-weight:normal;">https://www.youtube.com/embed/dQw4w9WgXcQ</div>
            </div>
        </div>"""

fs_js_old = """    js: ""
  },

  // 5. Before / After Learning Journey"""
fs_js_new = """    js: clean(`
(function() {
    const root = document.querySelector('.sl-gallery-filmstrip');
    if (!root) return;
    const videoItems = root.querySelectorAll('.sl-video-item');
    
    videoItems.forEach(item => {
        const playBtn = item.querySelector('.sl-item-play-btn');
        const mediaArea = item.querySelector('.sl-filmstrip-media');
        const poster = item.querySelector('.sl-fs-poster');
        const urlEl = item.querySelector('.sl-item-video-url');
        
        if(!playBtn || !mediaArea || !urlEl) return;
        
        playBtn.addEventListener('click', () => {
            if(document.body.classList.contains('sl-editor-mode')) return;
            const videoUrl = urlEl.innerText.trim();
            if(!videoUrl) return;
            
            poster.style.display = 'none';
            playBtn.style.display = 'none';
            
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
    });
})();
    `)
  },

  // 5. Before / After Learning Journey"""

content = content.replace(fs_html_old, fs_html_new)
content = content.replace(fs_js_old, fs_js_new)

# 3. 3D Media Stage
stage_html_old = """    <div class="sl-stage-container">
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
    </div>"""

stage_html_new = """    <div class="sl-stage-container">
        <!-- Stage Items -->
        <div class="sl-stage-item sl-stage-left sl-video-item" data-index="0">
            <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Work 1" data-sl-edit="image" class="sl-stage-poster" />
            <div class="sl-play-overlay sl-item-play-btn" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(0,0,0,0.2); cursor: pointer; transition: transform 0.2s ease; z-index: 5;">
                <svg width="32" height="32" fill="var(--smartlearn-primary)" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <div class="sl-item-video-url" data-sl-edit="text" style="position:absolute; bottom:10px; left:10px; font-size:11px; opacity:0.8; background:rgba(0,0,0,0.6); padding:4px 8px; color:#fff; border-radius:4px; max-width:80%; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">https://www.youtube.com/embed/dQw4w9WgXcQ</div>
        </div>
        <div class="sl-stage-item sl-stage-center sl-video-item" data-index="1">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Work 2" data-sl-edit="image" class="sl-stage-poster" />
            <div class="sl-play-overlay sl-item-play-btn" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(0,0,0,0.2); cursor: pointer; transition: transform 0.2s ease; z-index: 5;">
                <svg width="32" height="32" fill="var(--smartlearn-primary)" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <div class="sl-item-video-url" data-sl-edit="text" style="position:absolute; bottom:10px; left:10px; font-size:11px; opacity:0.8; background:rgba(0,0,0,0.6); padding:4px 8px; color:#fff; border-radius:4px; max-width:80%; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">https://www.youtube.com/embed/M7lc1UVf-VE</div>
        </div>
        <div class="sl-stage-item sl-stage-right sl-video-item" data-index="2">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Work 3" data-sl-edit="image" class="sl-stage-poster" />
            <div class="sl-play-overlay sl-item-play-btn" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(0,0,0,0.2); cursor: pointer; transition: transform 0.2s ease; z-index: 5;">
                <svg width="32" height="32" fill="var(--smartlearn-primary)" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <div class="sl-item-video-url" data-sl-edit="text" style="position:absolute; bottom:10px; left:10px; font-size:11px; opacity:0.8; background:rgba(0,0,0,0.6); padding:4px 8px; color:#fff; border-radius:4px; max-width:80%; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">https://www.youtube.com/embed/LXb3EKWsInQ</div>
        </div>
    </div>"""

stage_js_old = """    items.forEach(item => {
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
    });"""

stage_js_new = """    items.forEach(item => {
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
            
            // Cleanup any playing video in the old center
            const oldIframe = currentCenter.querySelector('iframe');
            if(oldIframe) {
                oldIframe.remove();
                const oldPoster = currentCenter.querySelector('.sl-stage-poster');
                const oldPlay = currentCenter.querySelector('.sl-item-play-btn');
                if(oldPoster) oldPoster.style.display = '';
                if(oldPlay) oldPlay.style.display = '';
            }
        });
        
        // Handle play button
        const playBtn = item.querySelector('.sl-item-play-btn');
        if(playBtn) {
            playBtn.addEventListener('click', (e) => {
                if(document.body.classList.contains('sl-editor-mode')) return;
                
                const currentCenter = root.querySelector('.sl-stage-center');
                if(currentCenter !== item) return; // Only play if it's the center item
                
                e.stopPropagation(); // prevent triggering the swap
                
                const urlEl = item.querySelector('.sl-item-video-url');
                const videoUrl = urlEl ? urlEl.innerText.trim() : '';
                if(!videoUrl) return;
                
                const poster = item.querySelector('.sl-stage-poster');
                if(poster) poster.style.display = 'none';
                playBtn.style.display = 'none';
                
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
                
                item.appendChild(iframe);
            });
        }
    });"""

content = content.replace(stage_html_old, stage_html_new)
content = content.replace(stage_js_old, stage_js_new)


# 4. Media Collage / Scrapbook
scrap_html_old = """            <!-- Large Image -->
            <div class="sl-scrapbook-item sl-sb-large">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Group Study" data-sl-edit="image" />
                <div class="sl-sb-caption" data-sl-edit="text">Collaborative Learning</div>
            </div>"""

scrap_html_new = """            <!-- Large Image -->
            <div class="sl-scrapbook-item sl-sb-large sl-video-item">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Group Study" data-sl-edit="image" class="sl-sb-poster" />
                <div class="sl-play-overlay sl-item-play-btn" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(0,0,0,0.2); cursor: pointer; transition: transform 0.2s ease; z-index: 5;">
                    <svg width="32" height="32" fill="var(--smartlearn-primary)" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <div class="sl-sb-caption">
                    <span data-sl-edit="text">Collaborative Learning</span>
                    <div class="sl-item-video-url" data-sl-edit="text" style="font-size:11px; opacity:0.8; margin-top:5px; word-break:break-all; font-weight:normal;">https://www.youtube.com/embed/dQw4w9WgXcQ</div>
                </div>
            </div>"""

scrap_js_old = """    js: ""
  }
];"""

scrap_js_new = """    js: clean(`
(function() {
    const root = document.querySelector('.sl-gallery-scrapbook');
    if (!root) return;
    const videoItems = root.querySelectorAll('.sl-video-item');
    
    videoItems.forEach(item => {
        const playBtn = item.querySelector('.sl-item-play-btn');
        const poster = item.querySelector('.sl-sb-poster');
        const urlEl = item.querySelector('.sl-item-video-url');
        
        if(!playBtn || !urlEl) return;
        
        playBtn.addEventListener('click', () => {
            if(document.body.classList.contains('sl-editor-mode')) return;
            const videoUrl = urlEl.innerText.trim();
            if(!videoUrl) return;
            
            if(poster) poster.style.display = 'none';
            playBtn.style.display = 'none';
            
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
            
            item.appendChild(iframe);
        });
    });
})();
    `)
  }
];"""

content = content.replace(scrap_html_old, scrap_html_new)
content = content.replace(scrap_js_old, scrap_js_new)

with open('scripts/generate_gallery_sections.cjs', 'w') as f:
    f.write(content)

print("Replaced all targets successfully!")
