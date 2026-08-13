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
  {
    id: "stats-animated",
    name: "Impact Stats",
    category: "Facts",
    variant: "Animated Counters",
    description: "A classic social-proof section showing big numbers that animate when scrolled into view. Handles robust formatting.",
    tags: ["stats", "counters", "numbers", "impact", "animated"],
    image_count: 0,
    preview_image: "",
    html: clean(`
<!-- sl-section: stats-animated | v1.0 -->
<div class="sl-stats-animated sl-py-20">
    <div class="container">
        <div class="sl-stats-header text-center sl-mb-16">
            <h2 class="sl-section-title" data-sl-edit="text">Our Global Impact</h2>
            <p class="sl-section-subtitle" data-sl-edit="text">Join a growing community of learners achieving their goals.</p>
        </div>

        <div class="sl-stats-grid" id="sl-stats-grid-wrapper">
            
            <div class="sl-stat-item">
                <div class="sl-stat-number-wrap">
                    <!-- aria-live="polite" helps screen readers read updates gracefully -->
                    <span class="sl-stat-number" data-sl-edit="text" aria-live="polite">50K+</span>
                </div>
                <h3 class="sl-stat-label" data-sl-edit="text">Active Students</h3>
            </div>
            
            <div class="sl-stat-item">
                <div class="sl-stat-number-wrap">
                    <span class="sl-stat-number" data-sl-edit="text" aria-live="polite">1,250+</span>
                </div>
                <h3 class="sl-stat-label" data-sl-edit="text">Expert Instructors</h3>
            </div>
            
            <div class="sl-stat-item">
                <div class="sl-stat-number-wrap">
                    <span class="sl-stat-number" data-sl-edit="text" aria-live="polite">98%</span>
                </div>
                <h3 class="sl-stat-label" data-sl-edit="text">Completion Rate</h3>
            </div>
            
            <div class="sl-stat-item">
                <div class="sl-stat-number-wrap">
                    <span class="sl-stat-number" data-sl-edit="text" aria-live="polite">4.9/5</span>
                </div>
                <h3 class="sl-stat-label" data-sl-edit="text">Average Rating</h3>
            </div>

        </div>
    </div>
</div>
    `),
    css: clean(`
.sl-stats-animated {
    padding: 5rem 0;
    background-color: var(--smartlearn-card-bg);
    border-top: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.05));
    border-bottom: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.05));
}
.sl-stats-animated .sl-py-20 { padding: 5rem 0; }
.sl-stats-animated .sl-mb-16 { margin-bottom: 4rem; }
.sl-stats-animated .text-center { text-align: center; }

.sl-stats-animated .sl-section-title {
    font-size: 2.25rem;
    font-weight: 700;
    color: var(--smartlearn-text);
    margin-bottom: 1rem;
}

.sl-stats-animated .sl-section-subtitle {
    font-size: 1.125rem;
    color: var(--smartlearn-text-muted);
    max-width: 600px;
    margin: 0 auto;
}

.sl-stats-animated .sl-stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2rem;
    max-width: 1000px;
    margin: 0 auto;
}

@media (min-width: 768px) {
    .sl-stats-animated .sl-stats-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

.sl-stats-animated .sl-stat-item {
    text-align: center;
    padding: 1.5rem;
}

.sl-stats-animated .sl-stat-number-wrap {
    margin-bottom: 0.5rem;
}

.sl-stats-animated .sl-stat-number {
    font-size: 3.5rem;
    font-weight: 800;
    color: var(--smartlearn-primary);
    line-height: 1;
    display: inline-block;
}

.sl-stats-animated .sl-stat-label {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--smartlearn-text);
    margin: 0;
}
    `),
    js: clean(`
(function() {
    const root = document.querySelector('.sl-stats-animated');
    if (!root) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (document.body.classList.contains('sl-editor-mode') || document.body.hasAttribute('data-sl-editing')) return;

    const statElements = root.querySelectorAll('.sl-stat-number');
    let hasAnimated = false;

    function easeOutExpo(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function animateValue(element, originalText) {
        // Match prefix, numeric portion (with optional commas/decimals/slashes like 4.9/5), suffix
        // We'll be very robust here. If we find something like 4.9/5, we only animate the 4.9 part if it's the main number.
        // Easiest is: match leading non-digits, digits/commas/dots, trailing non-digits.
        const match = originalText.match(/^([^0-9]*)([0-9,\.]+)(.*)$/);
        
        if (!match) return; 

        const prefix = match[1] || '';
        const rawNumStr = match[2];
        const suffix = match[3] || '';
        
        // Remove commas to parse safely
        const cleanNumStr = rawNumStr.replace(/,/g, '');
        const target = parseFloat(cleanNumStr);
        
        if (isNaN(target)) return;

        const isFloat = cleanNumStr.includes('.');
        const hasCommas = rawNumStr.includes(',');

        const duration = 2000;
        const start = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentVal = target * easeOutExpo(progress);
            
            let displayVal;
            if (isFloat) {
                displayVal = currentVal.toFixed(1);
            } else {
                displayVal = Math.floor(currentVal).toString();
            }

            // Restore commas if they were originally present
            if (hasCommas && !isFloat) {
                displayVal = displayVal.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
            }

            element.innerText = prefix + displayVal + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.innerText = originalText;
            }
        }
        
        requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                statElements.forEach(el => {
                    const originalText = el.innerText.trim();
                    if(!el.hasAttribute('contenteditable')) {
                         animateValue(el, originalText);
                    }
                });
                observer.disconnect();
            }
        });
    }, { threshold: 0.2 });

    observer.observe(root.querySelector('.sl-stats-grid'));
})();
    `)
  },
  {
    id: "stats-countdown",
    name: "Registration Countdown",
    category: "Facts",
    variant: "Event Timer",
    description: "A focused banner with a configurable countdown timer, handling active and expired states gracefully.",
    tags: ["stats", "countdown", "timer", "event", "registration", "urgency"],
    image_count: 0,
    preview_image: "",
    html: clean(`
<!-- sl-section: stats-countdown | v1.0 -->
<div class="sl-stats-countdown sl-py-16">
    <div class="container">
        <!-- data-target-date controls the deadline -->
        <!-- This static content ensures screen readers and non-JS clients see useful information -->
        <div class="sl-countdown-wrapper" id="sl-timer-wrapper" data-target-date="2026-12-31T23:59:59Z">
            <div class="sl-countdown-content">
                <h2 class="sl-countdown-title" data-sl-edit="text">Fall Semester Registration Closes Soon!</h2>
                <p class="sl-countdown-desc">
                    <span data-sl-edit="text">Deadline: </span>
                    <!-- Non-JS fallback text, editor can update this safely -->
                    <span class="sl-static-deadline" data-sl-edit="text">December 31, 2026</span>
                </p>
            </div>
            
            <div class="sl-countdown-timer-group">
                <div class="sl-countdown-timer sl-active-state" id="sl-timer">
                    <div class="sl-time-block">
                        <span class="sl-time-val" id="sl-cd-days">00</span>
                        <span class="sl-time-lbl" data-sl-edit="text">Days</span>
                    </div>
                    <div class="sl-time-sep">:</div>
                    <div class="sl-time-block">
                        <span class="sl-time-val" id="sl-cd-hours">00</span>
                        <span class="sl-time-lbl" data-sl-edit="text">Hours</span>
                    </div>
                    <div class="sl-time-sep">:</div>
                    <div class="sl-time-block">
                        <span class="sl-time-val" id="sl-cd-mins">00</span>
                        <span class="sl-time-lbl" data-sl-edit="text">Mins</span>
                    </div>
                    <div class="sl-time-sep">:</div>
                    <div class="sl-time-block">
                        <span class="sl-time-val" id="sl-cd-secs">00</span>
                        <span class="sl-time-lbl" data-sl-edit="text">Secs</span>
                    </div>
                </div>
                
                <!-- Expired State (Hidden by default via JS) -->
                <div class="sl-countdown-expired sl-hidden-state" id="sl-timer-expired">
                    <div class="sl-expired-msg">
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" class="sl-mr-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                        <span data-sl-edit="text">Registration is now closed.</span>
                    </div>
                </div>
            </div>

            <div class="sl-countdown-action">
                <a href="#" class="sl-btn sl-btn-primary" data-sl-edit="link" data-sl-edit-text="Enroll Now">Enroll Now</a>
            </div>
        </div>
    </div>
</div>
    `),
    css: clean(`
.sl-stats-countdown {
    padding: 4rem 0;
    background: linear-gradient(135deg, var(--smartlearn-primary) 0%, rgba(0,0,0,0.8) 100%);
    position: relative;
    overflow: hidden;
}

.sl-stats-countdown::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: url('data:image/svg+xml;utf8,<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="2" fill="rgba(255,255,255,0.05)"/></svg>');
    background-size: 20px 20px;
    z-index: 0;
}

.sl-stats-countdown .container {
    position: relative;
    z-index: 1;
}

.sl-stats-countdown .sl-countdown-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.5rem;
}

@media (min-width: 992px) {
    .sl-stats-countdown .sl-countdown-wrapper {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
    }
}

.sl-stats-countdown .sl-countdown-content {
    flex: 1;
    max-width: 500px;
}

.sl-stats-countdown .sl-countdown-title {
    font-size: 2rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 0.75rem;
}

.sl-stats-countdown .sl-countdown-desc {
    font-size: 1.125rem;
    color: rgba(255, 255, 255, 0.85);
    margin: 0;
}

.sl-stats-countdown .sl-countdown-timer-group {
    display: flex;
    align-items: center;
    justify-content: center;
}

.sl-stats-countdown .sl-countdown-timer {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: rgba(0, 0, 0, 0.25);
    padding: 1.5rem 2rem;
    border-radius: 1rem;
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.1);
}

.sl-stats-countdown .sl-hidden-state {
    display: none !important;
}

.sl-stats-countdown .sl-countdown-expired {
    background-color: rgba(0, 0, 0, 0.4);
    padding: 1.5rem 2rem;
    border-radius: 1rem;
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.2);
}

.sl-stats-countdown .sl-expired-msg {
    display: flex;
    align-items: center;
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: 600;
}
.sl-stats-countdown .sl-mr-2 { margin-right: 0.5rem; }

@media (max-width: 575px) {
    .sl-stats-countdown .sl-countdown-timer {
        padding: 1rem;
        gap: 0.25rem;
    }
}

.sl-stats-countdown .sl-time-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 60px;
}

.sl-stats-countdown .sl-time-val {
    font-size: 2.5rem;
    font-weight: 800;
    color: #ffffff;
    line-height: 1;
    font-variant-numeric: tabular-nums;
}

.sl-stats-countdown .sl-time-lbl {
    font-size: 0.75rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: 0.5rem;
}

.sl-stats-countdown .sl-time-sep {
    font-size: 2rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.3);
    margin-top: -1.5rem;
}

.sl-stats-countdown .sl-countdown-action {
    flex-shrink: 0;
}

.sl-stats-countdown .sl-btn {
    display: inline-block;
    padding: 1rem 2.5rem;
    border-radius: 0.5rem;
    font-weight: 700;
    font-size: 1.125rem;
    text-decoration: none;
    transition: all 0.2s ease;
    white-space: nowrap;
}

.sl-stats-countdown .sl-btn-primary {
    background-color: #ffffff;
    color: var(--smartlearn-primary);
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}

.sl-stats-countdown .sl-btn-primary:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
}
    `),
    js: clean(`
(function() {
    const root = document.querySelector('.sl-stats-countdown');
    if (!root) return;
    
    const isEditing = document.body.classList.contains('sl-editor-mode') || document.body.hasAttribute('data-sl-editing');
    
    const wrapper = root.querySelector('#sl-timer-wrapper');
    const timerActive = root.querySelector('#sl-timer');
    const timerExpired = root.querySelector('#sl-timer-expired');
    if(!wrapper || !timerActive || !timerExpired) return;
    
    let targetStr = wrapper.getAttribute('data-target-date');
    let targetDate = new Date(targetStr).getTime();
    
    // Fallback if configured improperly
    if (isNaN(targetDate)) {
        const d = new Date();
        d.setDate(d.getDate() + 10);
        targetDate = d.getTime();
    }

    const dEl = root.querySelector('#sl-cd-days');
    const hEl = root.querySelector('#sl-cd-hours');
    const mEl = root.querySelector('#sl-cd-mins');
    const sEl = root.querySelector('#sl-cd-secs');

    function update() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            dEl.innerText = "00";
            hEl.innerText = "00";
            mEl.innerText = "00";
            sEl.innerText = "00";
            
            // Show expired state, hide active timer
            // In editor mode, we might want to keep the active timer visible so they can edit it
            if (!isEditing) {
                timerActive.classList.add('sl-hidden-state');
                timerExpired.classList.remove('sl-hidden-state');
            }
            return false; // stop timer
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        dEl.innerText = days.toString().padStart(2, '0');
        hEl.innerText = hours.toString().padStart(2, '0');
        mEl.innerText = minutes.toString().padStart(2, '0');
        sEl.innerText = seconds.toString().padStart(2, '0');
        
        return true; // continue timer
    }

    const shouldContinue = update();
    if (shouldContinue && !isEditing) {
        setInterval(update, 1000);
    }
})();
    `)
  },
  {
    id: "stats-fast-facts",
    name: "Fast Facts",
    category: "Facts",
    variant: "Asymmetric Icon Grid",
    description: "Mix qualitative facts with quantitative data in an elegant, asymmetric premium layout.",
    tags: ["stats", "facts", "grid", "icons", "asymmetric"],
    image_count: 0,
    preview_image: "",
    html: clean(`
<!-- sl-section: stats-fast-facts | v1.0 -->
<div class="sl-stats-fast-facts sl-py-20">
    <div class="container">
        
        <div class="sl-facts-header sl-mb-16">
            <h2 class="sl-section-title" data-sl-edit="text">Why Choose SmartLearn?</h2>
            <p class="sl-section-subtitle" data-sl-edit="text">We build the foundation for lifelong achievement.</p>
        </div>

        <div class="sl-facts-grid">
            
            <!-- Featured Large Fact -->
            <div class="sl-fact-card sl-fact-featured">
                <div class="sl-fact-icon-wrap">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <h3 class="sl-fact-big-title" data-sl-edit="text">Top 1% Globally</h3>
                <p class="sl-fact-desc" data-sl-edit="text">Ranked among the top 1% of educational institutions worldwide for innovation, student success, and cutting-edge curriculum design.</p>
                <div class="sl-fact-stats">
                    <div class="sl-fact-micro-stat">
                        <strong data-sl-edit="text">#1</strong> <span data-sl-edit="text">in Online Learning</span>
                    </div>
                    <div class="sl-fact-micro-stat">
                        <strong data-sl-edit="text">98%</strong> <span data-sl-edit="text">Employment Rate</span>
                    </div>
                </div>
            </div>

            <!-- Smaller Fact 1 -->
            <div class="sl-fact-card">
                <div class="sl-fact-icon-wrap sl-icon-small">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                </div>
                <div class="sl-fact-content">
                    <h3 class="sl-fact-title" data-sl-edit="text">24/7 Support</h3>
                    <p class="sl-fact-desc-small" data-sl-edit="text">Our dedicated academic support team is available around the clock across all timezones.</p>
                </div>
            </div>

            <!-- Smaller Fact 2 -->
            <div class="sl-fact-card">
                <div class="sl-fact-icon-wrap sl-icon-small">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div class="sl-fact-content">
                    <h3 class="sl-fact-title" data-sl-edit="text">50,000+ Alumni</h3>
                    <p class="sl-fact-desc-small" data-sl-edit="text">Join a massive network of successful graduates employed at top tier companies worldwide.</p>
                </div>
            </div>

        </div>
    </div>
</div>
    `),
    css: clean(`
.sl-stats-fast-facts {
    padding: 5rem 0;
    background-color: var(--smartlearn-bg);
}

.sl-stats-fast-facts .sl-py-20 { padding: 5rem 0; }
.sl-stats-fast-facts .sl-mb-16 { margin-bottom: 3rem; }

.sl-stats-fast-facts .sl-facts-header {
    max-width: 600px;
}

.sl-stats-fast-facts .sl-section-title {
    font-size: 2.25rem;
    font-weight: 700;
    color: var(--smartlearn-text);
    margin-bottom: 1rem;
}

.sl-stats-fast-facts .sl-section-subtitle {
    font-size: 1.125rem;
    color: var(--smartlearn-text-muted);
}

/* Asymmetric Grid */
.sl-stats-fast-facts .sl-facts-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

@media (min-width: 992px) {
    .sl-stats-fast-facts .sl-facts-grid {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto auto;
    }
}

.sl-stats-fast-facts .sl-fact-card {
    background-color: var(--smartlearn-card-bg);
    border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.05));
    border-radius: 1.5rem;
    padding: 2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
}

@media (prefers-reduced-motion: no-preference) {
    .sl-stats-fast-facts .sl-fact-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.1);
    }
}

/* Featured Large Fact */
.sl-stats-fast-facts .sl-fact-featured {
    background: linear-gradient(135deg, var(--smartlearn-primary) 0%, rgba(0,0,0,0.85) 100%);
    color: #ffffff;
    border-color: transparent;
    padding: 3rem;
}

@media (min-width: 992px) {
    .sl-stats-fast-facts .sl-fact-featured {
        grid-column: 1 / span 2;
        grid-row: 1 / span 2;
    }
}

.sl-stats-fast-facts .sl-fact-icon-wrap {
    background-color: var(--smartlearn-card-border, rgba(0,0,0,0.05));
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    color: var(--smartlearn-primary);
    width: fit-content;
    padding: 1rem;
}

.sl-stats-fast-facts .sl-fact-featured .sl-fact-icon-wrap {
    background-color: rgba(255,255,255,0.15);
    color: #ffffff;
}

.sl-stats-fast-facts .sl-icon-small {
    padding: 0.75rem;
    border-radius: 0.75rem;
    margin-bottom: 1.25rem;
}

.sl-stats-fast-facts .sl-fact-big-title {
    font-size: 2.5rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 1.5rem;
}

.sl-stats-fast-facts .sl-fact-desc {
    font-size: 1.25rem;
    color: rgba(255,255,255,0.9);
    line-height: 1.6;
    margin-bottom: 2.5rem;
}

.sl-stats-fast-facts .sl-fact-stats {
    display: flex;
    gap: 2rem;
    margin-top: auto;
    border-top: 1px solid rgba(255,255,255,0.15);
    padding-top: 1.5rem;
}

.sl-stats-fast-facts .sl-fact-micro-stat strong {
    display: block;
    font-size: 1.75rem;
    font-weight: 800;
    margin-bottom: 0.25rem;
}

.sl-stats-fast-facts .sl-fact-micro-stat span {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: rgba(255,255,255,0.7);
}

/* Smaller Facts */
.sl-stats-fast-facts .sl-fact-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--smartlearn-text);
    margin-bottom: 0.75rem;
}

.sl-stats-fast-facts .sl-fact-desc-small {
    font-size: 1rem;
    color: var(--smartlearn-text-muted);
    line-height: 1.6;
    margin: 0;
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
    preview_image: sec.preview_image,
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

console.log('Stats, Counters, & Facts sections generated successfully with strict refinements!');
