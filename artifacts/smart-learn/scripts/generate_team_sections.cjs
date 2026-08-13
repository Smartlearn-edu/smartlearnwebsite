const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const sectionsDir = path.join(publicDir, 'sections');
const catalogPath = path.join(publicDir, 'catalog.json');

// Ensure sections directory exists
if (!fs.existsSync(sectionsDir)) {
  fs.mkdirSync(sectionsDir, { recursive: true });
}

// Helper to escape HTML for JSON
function clean(str) {
  return str.trim();
}

const sections = [
  {
    id: "team-grid",
    name: "Faculty Grid",
    category: "People",
    variant: "Institutional Roster",
    description: "A dependable, polished grid layout for universities, schools, academies, and corporate Moodle installations.",
    tags: ["team", "faculty", "teachers", "grid", "profiles"],
    image_count: 4,
    preview_image: "",
    html: clean(`
<!-- sl-section: team-grid | v1.0 -->
<div class="sl-team-grid sl-py-20">
    <div class="container">
        <div class="text-center sl-mb-16">
            <h2 class="sl-section-title" data-sl-edit="text">Meet Our Expert Faculty</h2>
            <p class="sl-section-subtitle" data-sl-edit="text">Learn from industry leaders and dedicated educators committed to your success.</p>
        </div>
        
        <div class="sl-roster-grid">
            <!-- Profile 1 -->
            <div class="sl-teacher-card">
                <div class="sl-teacher-img-wrap">
                    <img src="https://i.pravatar.cc/400?img=32" alt="Dr. Sarah Ahmed" class="sl-teacher-img" data-sl-edit="image">
                </div>
                <div class="sl-teacher-content">
                    <h3 class="sl-teacher-name" data-sl-edit="text">Dr. Sarah Ahmed</h3>
                    <p class="sl-teacher-role" data-sl-edit="text">Lead Instructor · Data Science</p>
                    <p class="sl-teacher-bio" data-sl-edit="text">Former AI researcher with a passion for making complex machine learning concepts accessible to everyone.</p>
                    
                    <div class="sl-teacher-expertise">
                        <span class="sl-expertise-badge" data-sl-edit="text">AI</span>
                        <span class="sl-expertise-badge" data-sl-edit="text">Python</span>
                        <span class="sl-expertise-badge" data-sl-edit="text">Machine Learning</span>
                    </div>

                    <div class="sl-teacher-footer">
                        <div class="sl-teacher-socials">
                            <a href="#" data-sl-edit="link" aria-label="LinkedIn"><svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg></a>
                            <a href="#" data-sl-edit="link" aria-label="Twitter"><svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg></a>
                        </div>
                        <a href="#" class="sl-btn sl-btn-outline" data-sl-edit="link" data-sl-edit-text="View Profile">View Profile</a>
                    </div>
                </div>
            </div>

            <!-- Profile 2 -->
            <div class="sl-teacher-card">
                <div class="sl-teacher-img-wrap">
                    <img src="https://i.pravatar.cc/400?img=11" alt="Michael Chen" class="sl-teacher-img" data-sl-edit="image">
                </div>
                <div class="sl-teacher-content">
                    <h3 class="sl-teacher-name" data-sl-edit="text">Michael Chen</h3>
                    <p class="sl-teacher-role" data-sl-edit="text">Professor · Graphic Design</p>
                    <p class="sl-teacher-bio" data-sl-edit="text">Award-winning designer focusing on user experience, digital illustration, and modern branding.</p>
                    
                    <div class="sl-teacher-expertise">
                        <span class="sl-expertise-badge" data-sl-edit="text">UI/UX</span>
                        <span class="sl-expertise-badge" data-sl-edit="text">Illustrator</span>
                    </div>

                    <div class="sl-teacher-footer">
                        <div class="sl-teacher-socials">
                            <a href="#" data-sl-edit="link" aria-label="LinkedIn"><svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg></a>
                        </div>
                        <a href="#" class="sl-btn sl-btn-primary" data-sl-edit="link" data-sl-edit-text="View Courses">View Courses</a>
                    </div>
                </div>
            </div>

            <!-- Profile 3 -->
            <div class="sl-teacher-card">
                <div class="sl-teacher-img-wrap">
                    <img src="https://i.pravatar.cc/400?img=47" alt="Elena Rodriguez" class="sl-teacher-img" data-sl-edit="image">
                </div>
                <div class="sl-teacher-content">
                    <h3 class="sl-teacher-name" data-sl-edit="text">Elena Rodriguez</h3>
                    <p class="sl-teacher-role" data-sl-edit="text">Senior Instructor · Business</p>
                    <p class="sl-teacher-bio" data-sl-edit="text">Specializes in modern marketing strategies, digital growth, and organizational leadership.</p>
                    
                    <div class="sl-teacher-expertise">
                        <span class="sl-expertise-badge" data-sl-edit="text">Marketing</span>
                        <span class="sl-expertise-badge" data-sl-edit="text">Leadership</span>
                    </div>

                    <div class="sl-teacher-footer">
                        <div class="sl-teacher-socials">
                            <a href="#" data-sl-edit="link" aria-label="LinkedIn"><svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg></a>
                        </div>
                        <a href="#" class="sl-btn sl-btn-outline" data-sl-edit="link" data-sl-edit-text="View Profile">View Profile</a>
                    </div>
                </div>
            </div>

            <!-- Profile 4 -->
            <div class="sl-teacher-card">
                <div class="sl-teacher-img-wrap">
                    <img src="https://i.pravatar.cc/400?img=68" alt="David Kim" class="sl-teacher-img" data-sl-edit="image">
                </div>
                <div class="sl-teacher-content">
                    <h3 class="sl-teacher-name" data-sl-edit="text">David Kim</h3>
                    <p class="sl-teacher-role" data-sl-edit="text">Head of Engineering</p>
                    <p class="sl-teacher-bio" data-sl-edit="text">Full-stack developer teaching web architecture, React, and scalable cloud solutions.</p>
                    
                    <div class="sl-teacher-expertise">
                        <span class="sl-expertise-badge" data-sl-edit="text">Web Dev</span>
                        <span class="sl-expertise-badge" data-sl-edit="text">Cloud</span>
                    </div>

                    <div class="sl-teacher-footer">
                        <div class="sl-teacher-socials">
                            <a href="#" data-sl-edit="link" aria-label="LinkedIn"><svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg></a>
                        </div>
                        <a href="#" class="sl-btn sl-btn-outline" data-sl-edit="link" data-sl-edit-text="View Profile">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `),
    css: clean(`
.sl-team-grid {
    position: relative;
    padding: 5rem 0;
    background-color: var(--smartlearn-bg);
}
.sl-team-grid .sl-py-20 { padding: 5rem 0; }
.sl-team-grid .sl-mb-16 { margin-bottom: 4rem; }
.sl-team-grid .text-center { text-align: center; }

.sl-team-grid .sl-section-title {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--smartlearn-text);
}
.sl-team-grid .sl-section-subtitle {
    font-size: 1.125rem;
    color: var(--smartlearn-text-muted);
    max-width: 600px;
    margin: 0 auto;
}

.sl-team-grid .sl-roster-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2.5rem;
    max-width: 1200px;
    margin: 0 auto;
}

.sl-team-grid .sl-teacher-card {
    background-color: var(--smartlearn-card-bg);
    border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.08));
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

@media (prefers-reduced-motion: no-preference) {
    .sl-team-grid .sl-teacher-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
}

.sl-team-grid .sl-teacher-img-wrap {
    width: 100%;
    aspect-ratio: 4/3;
    overflow: hidden;
    background-color: var(--smartlearn-card-border, rgba(0,0,0,0.05));
}

.sl-team-grid .sl-teacher-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

@media (prefers-reduced-motion: no-preference) {
    .sl-team-grid .sl-teacher-card:hover .sl-teacher-img {
        transform: scale(1.05);
    }
}

.sl-team-grid .sl-teacher-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.sl-team-grid .sl-teacher-name {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--smartlearn-text);
    margin-bottom: 0.25rem;
}

.sl-team-grid .sl-teacher-role {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--smartlearn-primary);
    margin-bottom: 1rem;
}

.sl-team-grid .sl-teacher-bio {
    font-size: 0.9375rem;
    color: var(--smartlearn-text-muted);
    margin-bottom: 1.5rem;
    line-height: 1.5;
    flex-grow: 1;
}

.sl-team-grid .sl-teacher-expertise {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.sl-team-grid .sl-expertise-badge {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.25rem 0.6rem;
    border-radius: 9999px;
    background-color: var(--smartlearn-card-border, rgba(0,0,0,0.05));
    color: var(--smartlearn-text-muted);
}

.sl-team-grid .sl-teacher-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 1.5rem;
    border-top: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.08));
}

.sl-team-grid .sl-teacher-socials {
    display: flex;
    gap: 0.75rem;
}

.sl-team-grid .sl-teacher-socials a {
    color: var(--smartlearn-text-muted);
    transition: color 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.sl-team-grid .sl-teacher-socials a:hover {
    color: var(--smartlearn-primary);
}

.sl-team-grid .sl-btn {
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    text-decoration: none;
    transition: all 0.2s ease;
}

.sl-team-grid .sl-btn-outline {
    background-color: transparent;
    border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.2));
    color: var(--smartlearn-text);
}

.sl-team-grid .sl-btn-outline:hover {
    border-color: var(--smartlearn-text);
}

.sl-team-grid .sl-btn-primary {
    background-color: var(--smartlearn-primary);
    border: 1px solid var(--smartlearn-primary);
    color: #FFFFFF;
}

.sl-team-grid .sl-btn-primary:hover {
    background-color: var(--smartlearn-primary-hover, var(--smartlearn-text));
    border-color: var(--smartlearn-primary-hover, var(--smartlearn-text));
}
    `),
    js: ""
  },
  {
    id: "team-featured",
    name: "Featured Instructor",
    category: "People",
    variant: "Editorial Profile",
    description: "A premium profile layout for highlighting an important instructor with detailed biography and credentials.",
    tags: ["team", "featured", "instructor", "profile", "editorial"],
    image_count: 1,
    preview_image: "",
    html: clean(`
<!-- sl-section: team-featured | v1.0 -->
<div class="sl-team-featured sl-py-20">
    <div class="container">
        <div class="sl-featured-card">
            <div class="sl-featured-image-col">
                <img src="https://i.pravatar.cc/600?img=33" alt="Prof. Elizabeth Shaw" class="sl-featured-img" data-sl-edit="image">
            </div>
            
            <div class="sl-featured-content-col">
                <div class="sl-featured-header">
                    <p class="sl-featured-tag" data-sl-edit="text">Course Director</p>
                    <h2 class="sl-featured-name" data-sl-edit="text">Prof. Elizabeth Shaw</h2>
                    <p class="sl-featured-role" data-sl-edit="text">Ph.D. in Cognitive Psychology, Oxford University</p>
                </div>

                <div class="sl-featured-bio">
                    <p data-sl-edit="text">With over 15 years of experience in educational psychology and curriculum design, Prof. Shaw leads our instructional design department. She has authored multiple award-winning textbooks on modern learning methodologies.</p>
                    <p data-sl-edit="text">Her approach focuses on active learning strategies and technology-enhanced environments that adapt to individual student needs.</p>
                </div>

                <div class="sl-featured-stats">
                    <div class="sl-stat-box">
                        <span class="sl-stat-value" data-sl-edit="text">15+</span>
                        <span class="sl-stat-label" data-sl-edit="text">Years Experience</span>
                    </div>
                    <div class="sl-stat-box">
                        <span class="sl-stat-value" data-sl-edit="text">24</span>
                        <span class="sl-stat-label" data-sl-edit="text">Courses Published</span>
                    </div>
                    <div class="sl-stat-box">
                        <span class="sl-stat-value" data-sl-edit="text">12k</span>
                        <span class="sl-stat-label" data-sl-edit="text">Students Enrolled</span>
                    </div>
                </div>

                <div class="sl-featured-actions">
                    <a href="#" class="sl-btn sl-btn-primary" data-sl-edit="link" data-sl-edit-text="View All Courses">View All Courses</a>
                    <a href="#" class="sl-btn sl-btn-outline" data-sl-edit="link" data-sl-edit-text="View Full Profile">View Full Profile</a>
                </div>
            </div>
        </div>
    </div>
</div>
    `),
    css: clean(`
.sl-team-featured {
    position: relative;
    padding: 5rem 0;
    background-color: var(--smartlearn-bg);
}

.sl-team-featured .sl-py-20 { padding: 5rem 0; }

.sl-team-featured .sl-featured-card {
    display: flex;
    flex-direction: column;
    background-color: var(--smartlearn-card-bg);
    border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.08));
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
    max-width: 1000px;
    margin: 0 auto;
}

@media (min-width: 992px) {
    .sl-team-featured .sl-featured-card {
        flex-direction: row;
    }
}

.sl-team-featured .sl-featured-image-col {
    flex: 0 0 40%;
    position: relative;
    min-height: 300px;
    background-color: var(--smartlearn-card-border, rgba(0,0,0,0.05));
}

.sl-team-featured .sl-featured-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 991px) {
    .sl-team-featured .sl-featured-image-col {
        padding-top: 60%; /* 16:9ish aspect ratio on mobile */
    }
}

.sl-team-featured .sl-featured-content-col {
    flex: 1;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

@media (max-width: 767px) {
    .sl-team-featured .sl-featured-content-col {
        padding: 2rem;
    }
}

.sl-team-featured .sl-featured-header {
    margin-bottom: 2rem;
}

.sl-team-featured .sl-featured-tag {
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--smartlearn-primary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.75rem;
}

.sl-team-featured .sl-featured-name {
    font-size: 2.25rem;
    font-weight: 800;
    color: var(--smartlearn-text);
    margin-bottom: 0.5rem;
}

.sl-team-featured .sl-featured-role {
    font-size: 1.125rem;
    color: var(--smartlearn-text-muted);
    font-weight: 500;
}

.sl-team-featured .sl-featured-bio {
    font-size: 1rem;
    color: var(--smartlearn-text-muted);
    line-height: 1.7;
    margin-bottom: 2.5rem;
}

.sl-team-featured .sl-featured-bio p {
    margin-bottom: 1rem;
}
.sl-team-featured .sl-featured-bio p:last-child {
    margin-bottom: 0;
}

.sl-team-featured .sl-featured-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 2.5rem;
    padding-top: 2rem;
    border-top: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.08));
}

.sl-team-featured .sl-stat-box {
    display: flex;
    flex-direction: column;
}

.sl-team-featured .sl-stat-value {
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--smartlearn-text);
    margin-bottom: 0.25rem;
}

.sl-team-featured .sl-stat-label {
    font-size: 0.875rem;
    color: var(--smartlearn-text-muted);
    font-weight: 500;
}

.sl-team-featured .sl-featured-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.sl-team-featured .sl-btn {
    padding: 0.875rem 1.75rem;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.2s ease;
    text-align: center;
}

.sl-team-featured .sl-btn-primary {
    background-color: var(--smartlearn-primary);
    border: 1px solid var(--smartlearn-primary);
    color: #FFFFFF;
}

.sl-team-featured .sl-btn-primary:hover {
    background-color: var(--smartlearn-primary-hover, var(--smartlearn-text));
    border-color: var(--smartlearn-primary-hover, var(--smartlearn-text));
}

.sl-team-featured .sl-btn-outline {
    background-color: transparent;
    border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.2));
    color: var(--smartlearn-text);
}

.sl-team-featured .sl-btn-outline:hover {
    border-color: var(--smartlearn-text);
    background-color: var(--smartlearn-card-border, rgba(0,0,0,0.05));
}
    `),
    js: ""
  },
  {
    id: "team-showcase",
    name: "Instructor Showcase",
    category: "People",
    variant: "Immersive Interaction",
    description: "A visually dramatic teacher presentation for premium academies with accessible interactive tabs.",
    tags: ["team", "showcase", "interactive", "tabs", "immersive"],
    image_count: 3,
    preview_image: "",
    html: clean(`
<!-- sl-section: team-showcase | v1.0 -->
<div class="sl-team-showcase sl-py-20">
    <div class="container">
        <div class="text-center sl-mb-16">
            <h2 class="sl-section-title" data-sl-edit="text">World-Class Mentors</h2>
            <p class="sl-section-subtitle" data-sl-edit="text">Learn directly from industry practitioners.</p>
        </div>

        <div class="sl-showcase-container">
            <!-- Tabs Navigation -->
            <div class="sl-showcase-nav" role="tablist" aria-label="Instructors">
                <button class="sl-showcase-tab" role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1">
                    <img src="https://i.pravatar.cc/100?img=60" alt="Thumbnail of James Miller" class="sl-tab-thumb">
                    <span class="sl-tab-name" data-sl-edit="text">James Miller</span>
                </button>
                <button class="sl-showcase-tab" role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2">
                    <img src="https://i.pravatar.cc/100?img=44" alt="Thumbnail of Anita Patel" class="sl-tab-thumb">
                    <span class="sl-tab-name" data-sl-edit="text">Anita Patel</span>
                </button>
                <button class="sl-showcase-tab" role="tab" aria-selected="false" aria-controls="panel-3" id="tab-3">
                    <img src="https://i.pravatar.cc/100?img=59" alt="Thumbnail of Marcus Johnson" class="sl-tab-thumb">
                    <span class="sl-tab-name" data-sl-edit="text">Marcus Johnson</span>
                </button>
            </div>

            <!-- Tab Panels -->
            <div class="sl-showcase-panels">
                
                <!-- Panel 1 -->
                <div id="panel-1" class="sl-showcase-panel active" role="tabpanel" aria-labelledby="tab-1">
                    <div class="sl-panel-bg">
                        <img src="https://i.pravatar.cc/800?img=60" alt="James Miller portrait" class="sl-panel-img" data-sl-edit="image">
                        <div class="sl-panel-overlay"></div>
                    </div>
                    <div class="sl-panel-content">
                        <span class="sl-panel-tag" data-sl-edit="text">Design System Architect</span>
                        <h3 class="sl-panel-name" data-sl-edit="text">James Miller</h3>
                        <p class="sl-panel-bio" data-sl-edit="text">A former lead designer at major tech firms, James brings practical, production-ready design principles to all his UI/UX courses.</p>
                        <a href="#" class="sl-btn sl-btn-primary" data-sl-edit="link" data-sl-edit-text="Explore Courses">Explore Courses</a>
                    </div>
                </div>

                <!-- Panel 2 -->
                <div id="panel-2" class="sl-showcase-panel" role="tabpanel" aria-labelledby="tab-2" hidden>
                    <div class="sl-panel-bg">
                        <img src="https://i.pravatar.cc/800?img=44" alt="Anita Patel portrait" class="sl-panel-img" data-sl-edit="image">
                        <div class="sl-panel-overlay"></div>
                    </div>
                    <div class="sl-panel-content">
                        <span class="sl-panel-tag" data-sl-edit="text">Senior Cloud Architect</span>
                        <h3 class="sl-panel-name" data-sl-edit="text">Anita Patel</h3>
                        <p class="sl-panel-bio" data-sl-edit="text">Certified AWS and Azure expert. Anita simplifies complex cloud infrastructure concepts through hands-on labs and real-world scenarios.</p>
                        <a href="#" class="sl-btn sl-btn-primary" data-sl-edit="link" data-sl-edit-text="Explore Courses">Explore Courses</a>
                    </div>
                </div>

                <!-- Panel 3 -->
                <div id="panel-3" class="sl-showcase-panel" role="tabpanel" aria-labelledby="tab-3" hidden>
                    <div class="sl-panel-bg">
                        <img src="https://i.pravatar.cc/800?img=59" alt="Marcus Johnson portrait" class="sl-panel-img" data-sl-edit="image">
                        <div class="sl-panel-overlay"></div>
                    </div>
                    <div class="sl-panel-content">
                        <span class="sl-panel-tag" data-sl-edit="text">Full Stack Developer</span>
                        <h3 class="sl-panel-name" data-sl-edit="text">Marcus Johnson</h3>
                        <p class="sl-panel-bio" data-sl-edit="text">Specializing in modern JavaScript frameworks. Marcus believes in learning by doing and building production-ready applications.</p>
                        <a href="#" class="sl-btn sl-btn-primary" data-sl-edit="link" data-sl-edit-text="Explore Courses">Explore Courses</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
    `),
    css: clean(`
.sl-team-showcase {
    position: relative;
    padding: 5rem 0;
    background-color: var(--smartlearn-bg);
}

.sl-team-showcase .sl-py-20 { padding: 5rem 0; }
.sl-team-showcase .sl-mb-16 { margin-bottom: 4rem; }
.sl-team-showcase .text-center { text-align: center; }

.sl-team-showcase .sl-section-title {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--smartlearn-text);
}
.sl-team-showcase .sl-section-subtitle {
    font-size: 1.125rem;
    color: var(--smartlearn-text-muted);
    max-width: 600px;
    margin: 0 auto;
}

.sl-team-showcase .sl-showcase-container {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

@media (min-width: 992px) {
    .sl-team-showcase .sl-showcase-container {
        flex-direction: row;
        align-items: stretch;
    }
}

/* Tabs Navigation */
.sl-team-showcase .sl-showcase-nav {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding-bottom: 1rem;
}

@media (min-width: 992px) {
    .sl-team-showcase .sl-showcase-nav {
        flex-direction: column;
        flex: 0 0 250px;
        overflow-x: visible;
        padding-bottom: 0;
    }
}

.sl-team-showcase .sl-showcase-tab {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: transparent;
    border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.1));
    border-radius: 0.75rem;
    padding: 0.75rem;
    cursor: pointer;
    text-align: left;
    transition: all 0.2s ease;
    min-width: 200px;
}

@media (min-width: 992px) {
    .sl-team-showcase .sl-showcase-tab {
        min-width: 0;
        border-color: transparent;
    }
}

.sl-team-showcase .sl-showcase-tab:hover {
    background-color: var(--smartlearn-card-border, rgba(0,0,0,0.05));
}

.sl-team-showcase .sl-showcase-tab:focus-visible {
    outline: 2px solid var(--smartlearn-primary);
    outline-offset: 2px;
}

.sl-team-showcase .sl-showcase-tab[aria-selected="true"] {
    background-color: var(--smartlearn-card-bg);
    border-color: var(--smartlearn-primary);
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
}

.sl-team-showcase .sl-tab-thumb {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid transparent;
    transition: border-color 0.2s ease;
}

.sl-team-showcase .sl-showcase-tab[aria-selected="true"] .sl-tab-thumb {
    border-color: var(--smartlearn-primary);
}

.sl-team-showcase .sl-tab-name {
    font-size: 1rem;
    font-weight: 600;
    color: var(--smartlearn-text);
}

/* Panels */
.sl-team-showcase .sl-showcase-panels {
    flex: 1;
    position: relative;
    border-radius: 1.5rem;
    overflow: hidden;
    background-color: var(--smartlearn-card-bg);
    min-height: 500px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.sl-team-showcase .sl-showcase-panel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s ease;
}

@media (prefers-reduced-motion: reduce) {
    .sl-team-showcase .sl-showcase-panel {
        transition: none;
    }
}

.sl-team-showcase .sl-showcase-panel.active {
    opacity: 1;
    pointer-events: auto;
    position: relative; /* important for flexbox to give it height if content overflows */
}

.sl-team-showcase .sl-panel-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.sl-team-showcase .sl-panel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
}

.sl-team-showcase .sl-panel-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%);
}

.sl-team-showcase .sl-panel-content {
    position: relative;
    z-index: 1;
    padding: 3rem;
    color: #FFFFFF;
    transform: translateY(20px);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (prefers-reduced-motion: reduce) {
    .sl-team-showcase .sl-panel-content {
        transform: translateY(0);
        transition: none;
    }
}

.sl-team-showcase .sl-showcase-panel.active .sl-panel-content {
    transform: translateY(0);
}

.sl-team-showcase .sl-panel-tag {
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--smartlearn-primary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
}

.sl-team-showcase .sl-panel-name {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: #FFFFFF;
}

.sl-team-showcase .sl-panel-bio {
    font-size: 1.125rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.9);
    max-width: 500px;
}

.sl-team-showcase .sl-btn {
    display: inline-block;
    padding: 0.875rem 2rem;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.2s ease;
}

.sl-team-showcase .sl-btn-primary {
    background-color: var(--smartlearn-primary);
    border: 1px solid var(--smartlearn-primary);
    color: #FFFFFF;
}

.sl-team-showcase .sl-btn-primary:hover {
    background-color: var(--smartlearn-primary-hover, var(--smartlearn-text));
    border-color: var(--smartlearn-primary-hover, var(--smartlearn-text));
}

@media (max-width: 767px) {
    .sl-team-showcase .sl-showcase-panels {
        min-height: 600px;
    }
    .sl-team-showcase .sl-panel-content {
        padding: 2rem;
    }
    .sl-team-showcase .sl-panel-name {
        font-size: 2rem;
    }
}
    `),
    js: clean(`
(function() {
    const root = document.querySelector('.sl-team-showcase');
    if (!root) return;

    const tabs = root.querySelectorAll('[role="tab"]');
    const panels = root.querySelectorAll('[role="tabpanel"]');

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            // Deactivate all
            tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
            panels.forEach(p => {
                p.classList.remove('active');
                p.setAttribute('hidden', '');
            });

            // Activate clicked
            this.setAttribute('aria-selected', 'true');
            const panelId = this.getAttribute('aria-controls');
            const panel = document.getElementById(panelId);
            if (panel) {
                panel.removeAttribute('hidden');
                // Small timeout to allow display:block to apply before opacity transition
                setTimeout(() => panel.classList.add('active'), 10);
            }
        });

        // Keyboard navigation (arrows)
        tab.addEventListener('keydown', function(e) {
            let nextTab = null;
            const index = Array.from(tabs).indexOf(this);
            
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                nextTab = tabs[(index + 1) % tabs.length];
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                nextTab = tabs[(index - 1 + tabs.length) % tabs.length];
            }

            if (nextTab) {
                nextTab.focus();
                nextTab.click();
            }
        });
    });
})();
    `)
  },
  {
    id: "team-courses",
    name: "Instructor + Courses",
    category: "People",
    variant: "Moodle Showcase",
    description: "A genuinely Moodle-specific teacher section that connects an instructor directly to their learning content.",
    tags: ["team", "courses", "moodle", "instructor", "discovery"],
    image_count: 4,
    preview_image: "",
    html: clean(`
<!-- sl-section: team-courses | v1.0 -->
<div class="sl-team-courses sl-py-20">
    <div class="container">
        <div class="sl-courses-showcase">
            <!-- Left: Instructor Profile -->
            <div class="sl-instructor-col">
                <div class="sl-instructor-sticky">
                    <img src="https://i.pravatar.cc/400?img=12" alt="Prof. Ahmed Hassan" class="sl-instructor-img" data-sl-edit="image">
                    
                    <h2 class="sl-instructor-name" data-sl-edit="text">Dr. Ahmed Hassan</h2>
                    <p class="sl-instructor-role" data-sl-edit="text">Professor of Computer Science</p>
                    
                    <div class="sl-instructor-stats">
                        <div class="sl-stat">
                            <span class="sl-stat-val" data-sl-edit="text">15</span>
                            <span class="sl-stat-lbl" data-sl-edit="text">Years Exp.</span>
                        </div>
                        <div class="sl-stat">
                            <span class="sl-stat-val" data-sl-edit="text">12</span>
                            <span class="sl-stat-lbl" data-sl-edit="text">Courses</span>
                        </div>
                        <div class="sl-stat">
                            <span class="sl-stat-val" data-sl-edit="text">★ 4.9</span>
                            <span class="sl-stat-lbl" data-sl-edit="text">Rating</span>
                        </div>
                    </div>

                    <a href="#" class="sl-btn sl-btn-outline" data-sl-edit="link" data-sl-edit-text="View Full Profile">View Full Profile</a>
                </div>
            </div>

            <!-- Right: Courses List -->
            <div class="sl-courses-col">
                <div class="sl-courses-header">
                    <h3 class="sl-courses-title">
                        <span data-sl-edit="text">Courses by Ahmed</span>
                    </h3>
                </div>

                <div class="sl-course-list">
                    <!-- Course 1 -->
                    <div class="sl-course-card">
                        <div class="sl-course-img-wrap">
                            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" alt="Python Course" class="sl-course-img" data-sl-edit="image">
                        </div>
                        <div class="sl-course-info">
                            <h4 class="sl-course-name" data-sl-edit="text">Python for Data Analysis</h4>
                            <p class="sl-course-meta" data-sl-edit="text">8 Weeks · Certificate</p>
                            <a href="#" class="sl-course-link" data-sl-edit="link" data-sl-edit-text="View Course">View Course &rarr;</a>
                        </div>
                    </div>

                    <!-- Course 2 -->
                    <div class="sl-course-card">
                        <div class="sl-course-img-wrap">
                            <img src="https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=400&q=80" alt="Machine Learning" class="sl-course-img" data-sl-edit="image">
                        </div>
                        <div class="sl-course-info">
                            <h4 class="sl-course-name" data-sl-edit="text">Machine Learning Fundamentals</h4>
                            <p class="sl-course-meta" data-sl-edit="text">10 Weeks · Certificate</p>
                            <a href="#" class="sl-course-link" data-sl-edit="link" data-sl-edit-text="View Course">View Course &rarr;</a>
                        </div>
                    </div>

                    <!-- Course 3 -->
                    <div class="sl-course-card">
                        <div class="sl-course-img-wrap">
                            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80" alt="Advanced Python" class="sl-course-img" data-sl-edit="image">
                        </div>
                        <div class="sl-course-info">
                            <h4 class="sl-course-name" data-sl-edit="text">Advanced Python Programming</h4>
                            <p class="sl-course-meta" data-sl-edit="text">12 Weeks · Certificate</p>
                            <a href="#" class="sl-course-link" data-sl-edit="link" data-sl-edit-text="View Course">View Course &rarr;</a>
                        </div>
                    </div>
                </div>

                <div class="sl-courses-footer">
                    <a href="#" class="sl-btn sl-btn-primary" data-sl-edit="link" data-sl-edit-text="View All Courses">View All Courses</a>
                </div>
            </div>
        </div>
    </div>
</div>
    `),
    css: clean(`
.sl-team-courses {
    position: relative;
    padding: 5rem 0;
    background-color: var(--smartlearn-bg);
}

.sl-team-courses .sl-py-20 { padding: 5rem 0; }

.sl-team-courses .sl-courses-showcase {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 1100px;
    margin: 0 auto;
}

@media (min-width: 992px) {
    .sl-team-courses .sl-courses-showcase {
        flex-direction: row;
        gap: 5rem;
    }
}

/* Instructor Column */
.sl-team-courses .sl-instructor-col {
    flex: 0 0 300px;
}

.sl-team-courses .sl-instructor-sticky {
    position: sticky;
    top: 2rem;
    text-align: center;
}

.sl-team-courses .sl-instructor-img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto 1.5rem;
    border: 4px solid var(--smartlearn-card-bg);
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}

.sl-team-courses .sl-instructor-name {
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--smartlearn-text);
    margin-bottom: 0.5rem;
}

.sl-team-courses .sl-instructor-role {
    font-size: 1rem;
    color: var(--smartlearn-text-muted);
    margin-bottom: 2rem;
}

.sl-team-courses .sl-instructor-stats {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
    padding: 1.5rem 0;
    border-top: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.08));
    border-bottom: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.08));
}

.sl-team-courses .sl-stat {
    display: flex;
    flex-direction: column;
}

.sl-team-courses .sl-stat-val {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--smartlearn-text);
}

.sl-team-courses .sl-stat-lbl {
    font-size: 0.75rem;
    color: var(--smartlearn-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

/* Courses Column */
.sl-team-courses .sl-courses-col {
    flex: 1;
}

.sl-team-courses .sl-courses-header {
    border-bottom: 2px solid var(--smartlearn-card-border, rgba(0,0,0,0.08));
    margin-bottom: 2rem;
    padding-bottom: 1rem;
}

.sl-team-courses .sl-courses-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--smartlearn-text);
    margin: 0;
}

.sl-team-courses .sl-course-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
}

.sl-team-courses .sl-course-card {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background-color: var(--smartlearn-card-bg);
    border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.05));
    border-radius: 1rem;
    padding: 1rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

@media (prefers-reduced-motion: no-preference) {
    .sl-team-courses .sl-course-card:hover {
        transform: translateX(5px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
    }
}

.sl-team-courses .sl-course-img-wrap {
    flex: 0 0 100px;
    height: 80px;
    border-radius: 0.5rem;
    overflow: hidden;
    background-color: var(--smartlearn-card-border, rgba(0,0,0,0.05));
}

.sl-team-courses .sl-course-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.sl-team-courses .sl-course-info {
    flex: 1;
}

.sl-team-courses .sl-course-name {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--smartlearn-text);
    margin-bottom: 0.25rem;
}

.sl-team-courses .sl-course-meta {
    font-size: 0.875rem;
    color: var(--smartlearn-text-muted);
    margin-bottom: 0.5rem;
}

.sl-team-courses .sl-course-link {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--smartlearn-primary);
    text-decoration: none;
    display: inline-block;
}

.sl-team-courses .sl-course-link:hover {
    text-decoration: underline;
}

.sl-team-courses .sl-courses-footer {
    text-align: right;
}

/* Buttons */
.sl-team-courses .sl-btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.2s ease;
}

.sl-team-courses .sl-btn-outline {
    background-color: transparent;
    border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.2));
    color: var(--smartlearn-text);
}

.sl-team-courses .sl-btn-outline:hover {
    background-color: var(--smartlearn-card-border, rgba(0,0,0,0.05));
    border-color: var(--smartlearn-text);
}

.sl-team-courses .sl-btn-primary {
    background-color: var(--smartlearn-primary);
    border: 1px solid var(--smartlearn-primary);
    color: #FFFFFF;
}

.sl-team-courses .sl-btn-primary:hover {
    background-color: var(--smartlearn-primary-hover, var(--smartlearn-text));
    border-color: var(--smartlearn-primary-hover, var(--smartlearn-text));
}

@media (max-width: 575px) {
    .sl-team-courses .sl-course-card {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
    .sl-team-courses .sl-course-img-wrap {
        width: 100%;
        height: 160px;
    }
}
    `),
    js: ""
  }
];

// Update catalog.json
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

  // Add to catalog if not exists
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

console.log('Team Profile sections generated successfully!');
