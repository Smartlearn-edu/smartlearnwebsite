const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const sectionsDir = path.join(publicDir, 'sections');
const catalogPath = path.join(publicDir, 'catalog.json');

// Ensure directories exist
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(sectionsDir)) fs.mkdirSync(sectionsDir, { recursive: true });

function clean(str) {
    return str.trim();
}

function saveSection(section) {
    const filename = `${section.id}.json`;
    const filepath = path.join(sectionsDir, filename);
    
    // Save individual section file
    fs.writeFileSync(filepath, JSON.stringify(section, null, 2));
    console.log(`Saved ${filename}`);
    
    // Update catalog.json
    let catalog = { version: "1.0", updated: new Date().toISOString().split('T')[0], sections: [] };
    if (fs.existsSync(catalogPath)) {
        try {
            catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
            if (!catalog.sections) catalog.sections = [];
        } catch (e) {
            console.error("Error reading catalog.json", e);
            catalog = { version: "1.0", updated: new Date().toISOString().split('T')[0], sections: [] };
        }
    }
    
    // Check if section already exists in catalog
    const existingIndex = catalog.sections.findIndex(item => item.id === section.id);
    
    const catalogEntry = {
        id: section.id,
        name: section.meta ? section.meta.name : section.name,
        category: section.meta ? section.meta.category : section.category,
        variant: section.meta ? section.meta.variant : "Catalog Flagship",
        description: section.meta ? section.meta.description : section.description,
        tags: section.meta ? section.meta.tags : ["courses", "catalog", "programs", "teachers", "filters", "search"],
        image_count: section.meta ? section.meta.image_count : 6,
        preview_image: "previews/" + section.id + ".webp",
        download_url: '/sections/' + section.id + '.json',
        is_premium: false,
        is_new: true,
        popularity: 100
    };
    
    if (existingIndex >= 0) {
        catalog.sections[existingIndex] = catalogEntry;
    } else {
        catalog.sections.push(catalogEntry);
    }
    
    fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2));
    console.log(`Updated catalog.json with ${section.id}`);

    // Also sync to dist directories if they exist
    const distPublicDir = path.join(__dirname, '../dist/public');
    if (fs.existsSync(distPublicDir)) {
        const distSecDir = path.join(distPublicDir, 'sections');
        if (!fs.existsSync(distSecDir)) fs.mkdirSync(distSecDir, { recursive: true });
        fs.writeFileSync(path.join(distSecDir, filename), JSON.stringify(section, null, 2));
        fs.writeFileSync(path.join(distPublicDir, 'catalog.json'), JSON.stringify(catalog, null, 2));
    }
    const distSsrDir = path.join(__dirname, '../dist/ssr');
    if (fs.existsSync(distSsrDir)) {
        const distSsrSecDir = path.join(distSsrDir, 'sections');
        if (!fs.existsSync(distSsrSecDir)) fs.mkdirSync(distSsrSecDir, { recursive: true });
        fs.writeFileSync(path.join(distSsrSecDir, filename), JSON.stringify(section, null, 2));
        fs.writeFileSync(path.join(distSsrDir, 'catalog.json'), JSON.stringify(catalog, null, 2));
    }
}

const smartCatalogSection = {
    smartlearn_section: true,
    format_version: "1.0",
    id: "catalog_dynamic_integration",
    name: "Smart Catalog Flagship Explorer",
    category: "Courses & Categories",
    meta: {
        name: "Smart Catalog Flagship Explorer",
        category: "Courses & Categories",
        variant: "Flagship Explorer",
        description: "Interactive multi-tab course, program, and teacher catalog with live search, category pills, level filters, and quick-view hover popovers.",
        tags: ["courses", "catalog", "programs", "teachers", "filters", "search", "popover", "flagship"],
        image_count: 6
    },
    html: clean(`
<!-- sl-section: catalog_dynamic_integration | v2.0 -->
<section class="sl-smartcatalog-section py-5" data-show-courses="true" data-show-programs="true" data-show-teachers="true">
    <div class="container-fluid px-lg-5">
        
        <!-- Section Header -->
        <div class="text-center mb-5">
            <span class="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill font-weight-bold mb-2" data-sl-edit="text" data-sl-label="Badge">Course Catalog</span>
            <h2 class="display-5 font-weight-bold text-dark mb-3 sl-title-text" data-sl-edit="text" data-sl-label="Main Heading">Explore Our Learning Programs</h2>
            <p class="lead text-muted mx-auto max-w-700" data-sl-edit="text" data-sl-label="Subtitle">Browse curated courses, structured career programs, and certified instructors to upgrade your skills.</p>
        </div>

        <!-- Catalog Mode Tabs Switcher -->
        <div class="sc-tabs mb-4 text-center d-flex justify-content-center flex-wrap gap-2">
            <button type="button" class="btn btn-primary sc-tab-btn active px-4 py-2 rounded-pill font-weight-bold" data-type="course">
                <i class="fa fa-graduation-cap me-2"></i><span data-sl-edit="text" data-sl-label="Courses Tab Text">Courses</span>
            </button>
            <button type="button" class="btn btn-outline-primary sc-tab-btn px-4 py-2 rounded-pill font-weight-bold" data-type="program">
                <i class="fa fa-sitemap me-2"></i><span data-sl-edit="text" data-sl-label="Programs Tab Text">Programs</span>
            </button>
            <button type="button" class="btn btn-outline-primary sc-tab-btn px-4 py-2 rounded-pill font-weight-bold" data-type="teacher">
                <i class="fa fa-users me-2"></i><span data-sl-edit="text" data-sl-label="Teachers Tab Text">Instructors</span>
            </button>
        </div>

        <!-- Filter & Search Toolbar -->
        <div class="card p-3 p-lg-4 mb-4 border-0 shadow-sm rounded-4 sc-filters-card">
            <div class="row g-3 align-items-center">
                <!-- Search Box -->
                <div class="col-md-5 col-lg-4">
                    <label class="form-label small fw-bold text-muted mb-1 text-uppercase" data-sl-edit="text">Search</label>
                    <div class="input-group">
                        <span class="input-group-text bg-light border-end-0 text-muted"><i class="fa fa-search"></i></span>
                        <input type="text" class="form-control bg-light border-start-0 ps-0 sc-search-input" placeholder="Search title, keywords...">
                    </div>
                </div>

                <!-- Sort Dropdown -->
                <div class="col-md-4 col-lg-3">
                    <label class="form-label small fw-bold text-muted mb-1 text-uppercase" data-sl-edit="text">Sort By</label>
                    <select class="form-select bg-light sc-sort-select">
                        <option value="recent">Most Recent</option>
                        <option value="popular">Most Popular</option>
                        <option value="az">Name (A-Z)</option>
                        <option value="za">Name (Z-A)</option>
                    </select>
                </div>

                <!-- Level Quick Filter -->
                <div class="col-md-3 col-lg-3">
                    <label class="form-label small fw-bold text-muted mb-1 text-uppercase" data-sl-edit="text">Level</label>
                    <select class="form-select bg-light sc-level-select">
                        <option value="all">All Levels</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </div>

                <!-- Results Counter -->
                <div class="col-md-12 col-lg-2 text-lg-end mt-2 mt-lg-auto pb-1">
                    <span class="badge bg-secondary-subtle text-secondary px-3 py-2 rounded-pill sc-results-count font-weight-bold">Showing items</span>
                </div>
            </div>

            <!-- Category Filter Pills Navigation -->
            <div class="sc-category-nav border-top mt-3 pt-3">
                <div class="d-flex align-items-center flex-wrap gap-2">
                    <button type="button" class="btn btn-sm rounded-pill sc-cat-pill active" data-category="all">
                        <span data-sl-edit="text">All Categories</span> <span class="badge bg-light text-dark ms-1 sc-cat-count">6</span>
                    </button>
                    <button type="button" class="btn btn-sm rounded-pill sc-cat-pill sc-pill-featured" data-category="featured">
                        <i class="fa fa-star text-warning me-1"></i> <span data-sl-edit="text">Featured</span>
                    </button>
                    <button type="button" class="btn btn-sm rounded-pill sc-cat-pill" data-category="web">
                        <span data-sl-edit="text">Web Development</span>
                    </button>
                    <button type="button" class="btn btn-sm rounded-pill sc-cat-pill" data-category="data">
                        <span data-sl-edit="text">Data Science & AI</span>
                    </button>
                    <button type="button" class="btn btn-sm rounded-pill sc-cat-pill" data-category="design">
                        <span data-sl-edit="text">UI/UX Design</span>
                    </button>
                    <button type="button" class="btn btn-sm rounded-pill sc-cat-pill" data-category="business">
                        <span data-sl-edit="text">Business & Management</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- ============================================================ -->
        <!-- VIEW 1: COURSES GRID (Default)                               -->
        <!-- ============================================================ -->
        <div class="sc-view-container sc-view-courses">
            <div class="row g-4 sc-items-grid">
                
                <!-- Course Card 1 -->
                <div class="col-md-6 col-lg-4 sc-catalog-item" data-type="course" data-category="data featured" data-level="intermediate" data-popularity="98" data-date="2026-08-15">
                    <div class="sc-card-wrapper position-relative h-100">
                        <div class="card h-100 sc-card border-0 rounded-4 overflow-hidden position-relative d-flex flex-column shadow-sm">
                            <div class="sc-card-img-wrap position-relative">
                                <img src="{{image1}}" class="sc-card-img w-100 object-fit-cover" alt="Data Science" data-sl-edit="image" data-sl-label="Course 1 Image">
                                <span class="badge bg-primary position-absolute top-0 start-0 m-3 rounded-pill px-3 py-1 fw-bold" data-sl-edit="text">Data Science</span>
                            </div>
                            <div class="card-body p-4 d-flex flex-column flex-grow-1">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <span class="badge bg-light text-muted border small"><i class="fa fa-signal me-1"></i> Intermediate</span>
                                    <span class="text-warning small fw-bold"><i class="fa fa-star"></i> 4.9 (1.2k)</span>
                                </div>
                                <h4 class="card-title fw-bold mb-2 sc-item-title" data-sl-edit="text" data-sl-label="Course 1 Title">Applied Machine Learning & Python</h4>
                                <p class="card-text text-muted small mb-4 sc-item-desc" data-sl-edit="text" data-sl-label="Course 1 Description">Master end-to-end predictive modeling, neural networks, and real-world AI pipelines.</p>
                                
                                <div class="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                                    <div class="d-flex align-items-center">
                                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" class="rounded-circle me-2 object-fit-cover" width="32" height="32" alt="Teacher">
                                        <span class="small fw-bold text-dark" data-sl-edit="text">Dr. Sarah Jenkins</span>
                                    </div>
                                    <a href="#" class="btn btn-sm btn-outline-primary rounded-pill px-3 fw-bold" data-sl-edit="link" data-sl-edit-text="View Course">View Course</a>
                                </div>
                            </div>
                        </div>

                        <!-- Hover Detail Popover -->
                        <div class="sc-hover-popover rounded-4 shadow-lg p-4">
                            <h5 class="fw-bold mb-1">Applied Machine Learning & Python</h5>
                            <span class="badge bg-primary-subtle text-primary rounded-pill mb-3">Featured Course</span>
                            <div class="sc-meta-row d-flex gap-3 text-muted small mb-3">
                                <span><i class="fa fa-users text-primary me-1"></i> 1,420 Enrolled</span>
                                <span><i class="fa fa-puzzle-piece text-info me-1"></i> 36 Activities</span>
                                <span><i class="fa fa-clock-o text-warning me-1"></i> 8 Weeks</span>
                            </div>
                            <h6 class="fw-bold small text-uppercase text-muted mb-2"><i class="fa fa-check-circle text-success me-1"></i> What You'll Learn:</h6>
                            <ul class="list-unstyled small mb-3 sc-skills-list">
                                <li>✓ Deep understanding of Scikit-Learn & PyTorch</li>
                                <li>✓ Build & deploy production prediction APIs</li>
                                <li>✓ Feature engineering and cross-validation mastery</li>
                            </ul>
                            <a href="#" class="btn btn-primary w-100 rounded-pill font-weight-bold shadow-sm">Enroll in Course</a>
                        </div>
                    </div>
                </div>

                <!-- Course Card 2 -->
                <div class="col-md-6 col-lg-4 sc-catalog-item" data-type="course" data-category="web featured" data-level="beginner" data-popularity="95" data-date="2026-08-20">
                    <div class="sc-card-wrapper position-relative h-100">
                        <div class="card h-100 sc-card border-0 rounded-4 overflow-hidden position-relative d-flex flex-column shadow-sm">
                            <div class="sc-card-img-wrap position-relative">
                                <img src="{{image2}}" class="sc-card-img w-100 object-fit-cover" alt="Web Development" data-sl-edit="image" data-sl-label="Course 2 Image">
                                <span class="badge bg-success position-absolute top-0 start-0 m-3 rounded-pill px-3 py-1 fw-bold" data-sl-edit="text">Web Dev</span>
                            </div>
                            <div class="card-body p-4 d-flex flex-column flex-grow-1">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <span class="badge bg-light text-muted border small"><i class="fa fa-signal me-1"></i> Beginner</span>
                                    <span class="text-warning small fw-bold"><i class="fa fa-star"></i> 4.8 (950)</span>
                                </div>
                                <h4 class="card-title fw-bold mb-2 sc-item-title" data-sl-edit="text" data-sl-label="Course 2 Title">Full-Stack Modern Web Bootcamp</h4>
                                <p class="card-text text-muted small mb-4 sc-item-desc" data-sl-edit="text" data-sl-label="Course 2 Description">Learn HTML5, CSS3, JavaScript, React, Node.js, and SQL by building 10 real projects.</p>
                                
                                <div class="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                                    <div class="d-flex align-items-center">
                                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" class="rounded-circle me-2 object-fit-cover" width="32" height="32" alt="Teacher">
                                        <span class="small fw-bold text-dark" data-sl-edit="text">Alex Rivera</span>
                                    </div>
                                    <a href="#" class="btn btn-sm btn-outline-primary rounded-pill px-3 fw-bold" data-sl-edit="link" data-sl-edit-text="View Course">View Course</a>
                                </div>
                            </div>
                        </div>

                        <!-- Hover Detail Popover -->
                        <div class="sc-hover-popover rounded-4 shadow-lg p-4">
                            <h5 class="fw-bold mb-1">Full-Stack Modern Web Bootcamp</h5>
                            <span class="badge bg-success-subtle text-success rounded-pill mb-3">Beginner Friendly</span>
                            <div class="sc-meta-row d-flex gap-3 text-muted small mb-3">
                                <span><i class="fa fa-users text-primary me-1"></i> 2,800 Enrolled</span>
                                <span><i class="fa fa-puzzle-piece text-info me-1"></i> 48 Activities</span>
                                <span><i class="fa fa-clock-o text-warning me-1"></i> 12 Weeks</span>
                            </div>
                            <h6 class="fw-bold small text-uppercase text-muted mb-2"><i class="fa fa-check-circle text-success me-1"></i> What You'll Learn:</h6>
                            <ul class="list-unstyled small mb-3 sc-skills-list">
                                <li>✓ Modern JavaScript (ES6+), React Hooks & State</li>
                                <li>✓ Express REST APIs with PostgreSQL / MongoDB</li>
                                <li>✓ Authentication, security & automated deployment</li>
                            </ul>
                            <a href="#" class="btn btn-primary w-100 rounded-pill font-weight-bold shadow-sm">Enroll in Course</a>
                        </div>
                    </div>
                </div>

                <!-- Course Card 3 -->
                <div class="col-md-6 col-lg-4 sc-catalog-item" data-type="course" data-category="design" data-level="intermediate" data-popularity="92" data-date="2026-08-10">
                    <div class="sc-card-wrapper position-relative h-100">
                        <div class="card h-100 sc-card border-0 rounded-4 overflow-hidden position-relative d-flex flex-column shadow-sm">
                            <div class="sc-card-img-wrap position-relative">
                                <img src="{{image3}}" class="sc-card-img w-100 object-fit-cover" alt="UI/UX Design" data-sl-edit="image" data-sl-label="Course 3 Image">
                                <span class="badge bg-info text-dark position-absolute top-0 start-0 m-3 rounded-pill px-3 py-1 fw-bold" data-sl-edit="text">UI/UX</span>
                            </div>
                            <div class="card-body p-4 d-flex flex-column flex-grow-1">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <span class="badge bg-light text-muted border small"><i class="fa fa-signal me-1"></i> Intermediate</span>
                                    <span class="text-warning small fw-bold"><i class="fa fa-star"></i> 4.9 (780)</span>
                                </div>
                                <h4 class="card-title fw-bold mb-2 sc-item-title" data-sl-edit="text" data-sl-label="Course 3 Title">Figma Masterclass: Design Systems</h4>
                                <p class="card-text text-muted small mb-4 sc-item-desc" data-sl-edit="text" data-sl-label="Course 3 Description">Design scalable components, interactive prototypes, and accessible user interfaces.</p>
                                
                                <div class="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                                    <div class="d-flex align-items-center">
                                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" class="rounded-circle me-2 object-fit-cover" width="32" height="32" alt="Teacher">
                                        <span class="small fw-bold text-dark" data-sl-edit="text">Elena Chen</span>
                                    </div>
                                    <a href="#" class="btn btn-sm btn-outline-primary rounded-pill px-3 fw-bold" data-sl-edit="link" data-sl-edit-text="View Course">View Course</a>
                                </div>
                            </div>
                        </div>

                        <!-- Hover Detail Popover -->
                        <div class="sc-hover-popover rounded-4 shadow-lg p-4">
                            <h5 class="fw-bold mb-1">Figma Masterclass: Design Systems</h5>
                            <span class="badge bg-info-subtle text-info rounded-pill mb-3">UI/UX Design</span>
                            <div class="sc-meta-row d-flex gap-3 text-muted small mb-3">
                                <span><i class="fa fa-users text-primary me-1"></i> 1,100 Enrolled</span>
                                <span><i class="fa fa-puzzle-piece text-info me-1"></i> 24 Activities</span>
                                <span><i class="fa fa-clock-o text-warning me-1"></i> 6 Weeks</span>
                            </div>
                            <h6 class="fw-bold small text-uppercase text-muted mb-2"><i class="fa fa-check-circle text-success me-1"></i> What You'll Learn:</h6>
                            <ul class="list-unstyled small mb-3 sc-skills-list">
                                <li>✓ Auto-layout, component variants and variables in Figma</li>
                                <li>✓ WCAG 2.2 color contrast & accessibility guidelines</li>
                                <li>✓ Handoff workflows with engineering teams</li>
                            </ul>
                            <a href="#" class="btn btn-primary w-100 rounded-pill font-weight-bold shadow-sm">Enroll in Course</a>
                        </div>
                    </div>
                </div>

                <!-- Course Card 4 -->
                <div class="col-md-6 col-lg-4 sc-catalog-item" data-type="course" data-category="business" data-level="advanced" data-popularity="89" data-date="2026-08-05">
                    <div class="sc-card-wrapper position-relative h-100">
                        <div class="card h-100 sc-card border-0 rounded-4 overflow-hidden position-relative d-flex flex-column shadow-sm">
                            <div class="sc-card-img-wrap position-relative">
                                <img src="{{image4}}" class="sc-card-img w-100 object-fit-cover" alt="Business" data-sl-edit="image" data-sl-label="Course 4 Image">
                                <span class="badge bg-warning text-dark position-absolute top-0 start-0 m-3 rounded-pill px-3 py-1 fw-bold" data-sl-edit="text">Business</span>
                            </div>
                            <div class="card-body p-4 d-flex flex-column flex-grow-1">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <span class="badge bg-light text-muted border small"><i class="fa fa-signal me-1"></i> Advanced</span>
                                    <span class="text-warning small fw-bold"><i class="fa fa-star"></i> 4.7 (620)</span>
                                </div>
                                <h4 class="card-title fw-bold mb-2 sc-item-title" data-sl-edit="text" data-sl-label="Course 4 Title">Strategic Leadership & EdTech</h4>
                                <p class="card-text text-muted small mb-4 sc-item-desc" data-sl-edit="text" data-sl-label="Course 4 Description">Lead organizational change, strategic budget planning, and digital transformation.</p>
                                
                                <div class="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                                    <div class="d-flex align-items-center">
                                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" class="rounded-circle me-2 object-fit-cover" width="32" height="32" alt="Teacher">
                                        <span class="small fw-bold text-dark" data-sl-edit="text">Michael Vance</span>
                                    </div>
                                    <a href="#" class="btn btn-sm btn-outline-primary rounded-pill px-3 fw-bold" data-sl-edit="link" data-sl-edit-text="View Course">View Course</a>
                                </div>
                            </div>
                        </div>

                        <!-- Hover Detail Popover -->
                        <div class="sc-hover-popover rounded-4 shadow-lg p-4">
                            <h5 class="fw-bold mb-1">Strategic Leadership & EdTech</h5>
                            <span class="badge bg-warning-subtle text-warning rounded-pill mb-3">Executive</span>
                            <div class="sc-meta-row d-flex gap-3 text-muted small mb-3">
                                <span><i class="fa fa-users text-primary me-1"></i> 890 Enrolled</span>
                                <span><i class="fa fa-puzzle-piece text-info me-1"></i> 20 Activities</span>
                                <span><i class="fa fa-clock-o text-warning me-1"></i> 4 Weeks</span>
                            </div>
                            <h6 class="fw-bold small text-uppercase text-muted mb-2"><i class="fa fa-check-circle text-success me-1"></i> What You'll Learn:</h6>
                            <ul class="list-unstyled small mb-3 sc-skills-list">
                                <li>✓ Strategic digital roadmaps & ROI optimization</li>
                                <li>✓ Crisis management and high-performance team culture</li>
                            </ul>
                            <a href="#" class="btn btn-primary w-100 rounded-pill font-weight-bold shadow-sm">Enroll in Course</a>
                        </div>
                    </div>
                </div>

                <!-- Course Card 5 -->
                <div class="col-md-6 col-lg-4 sc-catalog-item" data-type="course" data-category="web" data-level="advanced" data-popularity="94" data-date="2026-08-25">
                    <div class="sc-card-wrapper position-relative h-100">
                        <div class="card h-100 sc-card border-0 rounded-4 overflow-hidden position-relative d-flex flex-column shadow-sm">
                            <div class="sc-card-img-wrap position-relative">
                                <img src="{{image5}}" class="sc-card-img w-100 object-fit-cover" alt="CyberSecurity" data-sl-edit="image" data-sl-label="Course 5 Image">
                                <span class="badge bg-danger position-absolute top-0 start-0 m-3 rounded-pill px-3 py-1 fw-bold" data-sl-edit="text">Security</span>
                            </div>
                            <div class="card-body p-4 d-flex flex-column flex-grow-1">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <span class="badge bg-light text-muted border small"><i class="fa fa-signal me-1"></i> Advanced</span>
                                    <span class="text-warning small fw-bold"><i class="fa fa-star"></i> 4.9 (840)</span>
                                </div>
                                <h4 class="card-title fw-bold mb-2 sc-item-title" data-sl-edit="text" data-sl-label="Course 5 Title">Cloud Security & Penetration Testing</h4>
                                <p class="card-text text-muted small mb-4 sc-item-desc" data-sl-edit="text" data-sl-label="Course 5 Description">Learn ethical hacking, container security, network defense, and compliance frameworks.</p>
                                
                                <div class="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                                    <div class="d-flex align-items-center">
                                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" class="rounded-circle me-2 object-fit-cover" width="32" height="32" alt="Teacher">
                                        <span class="small fw-bold text-dark" data-sl-edit="text">Dr. Sarah Jenkins</span>
                                    </div>
                                    <a href="#" class="btn btn-sm btn-outline-primary rounded-pill px-3 fw-bold" data-sl-edit="link" data-sl-edit-text="View Course">View Course</a>
                                </div>
                            </div>
                        </div>

                        <!-- Hover Detail Popover -->
                        <div class="sc-hover-popover rounded-4 shadow-lg p-4">
                            <h5 class="fw-bold mb-1">Cloud Security & Penetration Testing</h5>
                            <span class="badge bg-danger-subtle text-danger rounded-pill mb-3">CyberSecurity</span>
                            <div class="sc-meta-row d-flex gap-3 text-muted small mb-3">
                                <span><i class="fa fa-users text-primary me-1"></i> 1,300 Enrolled</span>
                                <span><i class="fa fa-puzzle-piece text-info me-1"></i> 40 Activities</span>
                                <span><i class="fa fa-clock-o text-warning me-1"></i> 10 Weeks</span>
                            </div>
                            <h6 class="fw-bold small text-uppercase text-muted mb-2"><i class="fa fa-check-circle text-success me-1"></i> What You'll Learn:</h6>
                            <ul class="list-unstyled small mb-3 sc-skills-list">
                                <li>✓ Vulnerability scanning, exploit analysis & threat modeling</li>
                                <li>✓ AWS / GCP Identity & Access Governance</li>
                            </ul>
                            <a href="#" class="btn btn-primary w-100 rounded-pill font-weight-bold shadow-sm">Enroll in Course</a>
                        </div>
                    </div>
                </div>

                <!-- Course Card 6 -->
                <div class="col-md-6 col-lg-4 sc-catalog-item" data-type="course" data-category="data" data-level="beginner" data-popularity="96" data-date="2026-08-28">
                    <div class="sc-card-wrapper position-relative h-100">
                        <div class="card h-100 sc-card border-0 rounded-4 overflow-hidden position-relative d-flex flex-column shadow-sm">
                            <div class="sc-card-img-wrap position-relative">
                                <img src="{{image6}}" class="sc-card-img w-100 object-fit-cover" alt="Data Analytics" data-sl-edit="image" data-sl-label="Course 6 Image">
                                <span class="badge bg-primary position-absolute top-0 start-0 m-3 rounded-pill px-3 py-1 fw-bold" data-sl-edit="text">Analytics</span>
                            </div>
                            <div class="card-body p-4 d-flex flex-column flex-grow-1">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <span class="badge bg-light text-muted border small"><i class="fa fa-signal me-1"></i> Beginner</span>
                                    <span class="text-warning small fw-bold"><i class="fa fa-star"></i> 4.9 (1.5k)</span>
                                </div>
                                <h4 class="card-title fw-bold mb-2 sc-item-title" data-sl-edit="text" data-sl-label="Course 6 Title">Data Analytics with SQL & PowerBI</h4>
                                <p class="card-text text-muted small mb-4 sc-item-desc" data-sl-edit="text" data-sl-label="Course 6 Description">Query large datasets with SQL, build dynamic interactive dashboards, and drive business insights.</p>
                                
                                <div class="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                                    <div class="d-flex align-items-center">
                                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" class="rounded-circle me-2 object-fit-cover" width="32" height="32" alt="Teacher">
                                        <span class="small fw-bold text-dark" data-sl-edit="text">Alex Rivera</span>
                                    </div>
                                    <a href="#" class="btn btn-sm btn-outline-primary rounded-pill px-3 fw-bold" data-sl-edit="link" data-sl-edit-text="View Course">View Course</a>
                                </div>
                            </div>
                        </div>

                        <!-- Hover Detail Popover -->
                        <div class="sc-hover-popover rounded-4 shadow-lg p-4">
                            <h5 class="fw-bold mb-1">Data Analytics with SQL & PowerBI</h5>
                            <span class="badge bg-primary-subtle text-primary rounded-pill mb-3">In-Demand Skill</span>
                            <div class="sc-meta-row d-flex gap-3 text-muted small mb-3">
                                <span><i class="fa fa-users text-primary me-1"></i> 2,100 Enrolled</span>
                                <span><i class="fa fa-puzzle-piece text-info me-1"></i> 32 Activities</span>
                                <span><i class="fa fa-clock-o text-warning me-1"></i> 8 Weeks</span>
                            </div>
                            <h6 class="fw-bold small text-uppercase text-muted mb-2"><i class="fa fa-check-circle text-success me-1"></i> What You'll Learn:</h6>
                            <ul class="list-unstyled small mb-3 sc-skills-list">
                                <li>✓ Complex SQL joins, window functions & aggregations</li>
                                <li>✓ DAX formulas, data modeling & PowerBI visuals</li>
                            </ul>
                            <a href="#" class="btn btn-primary w-100 rounded-pill font-weight-bold shadow-sm">Enroll in Course</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- ============================================================ -->
        <!-- VIEW 2: PROGRAMS ROW VIEW                                    -->
        <!-- ============================================================ -->
        <div class="sc-view-container sc-view-programs" style="display: none;">
            <div class="d-flex flex-column gap-4">
                
                <!-- Program 1 -->
                <div class="card border-0 rounded-4 overflow-hidden shadow-sm sc-program-row-card sc-catalog-item" data-type="program" data-category="web featured" data-level="intermediate" data-popularity="99" data-date="2026-08-20">
                    <div class="row g-0 align-items-stretch">
                        <div class="col-lg-4 position-relative">
                            <img src="{{image2}}" class="w-100 h-100 object-fit-cover" style="min-height: 240px;" alt="Web Track">
                            <span class="badge bg-success position-absolute top-0 start-0 m-3 rounded-pill px-3 py-1 font-weight-bold">Career Track</span>
                        </div>
                        <div class="col-lg-8 p-4 p-lg-5 d-flex flex-column justify-content-between">
                            <div>
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <span class="badge bg-primary-subtle text-primary rounded-pill px-3 py-1 fw-bold"><i class="fa fa-book me-1"></i> 4 Courses Included</span>
                                    <span class="text-success fw-bold small"><i class="fa fa-trophy me-1"></i> Accredited Diploma</span>
                                </div>
                                <h3 class="fw-bold text-dark mb-2 sc-item-title">Full-Stack Software Engineering Diploma</h3>
                                <p class="text-muted sc-item-desc mb-3">A comprehensive 6-month career path covering Frontend, Backend REST APIs, Cloud Infrastructure, and Agile DevOps.</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center flex-wrap gap-3 pt-3 border-top">
                                <div class="d-flex align-items-center gap-3 text-muted small">
                                    <span><i class="fa fa-clock-o text-primary"></i> 24 Weeks</span>
                                    <span><i class="fa fa-certificate text-warning"></i> Capstone Project</span>
                                </div>
                                <a href="#" class="btn btn-primary rounded-pill px-5 fw-bold">View Program</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Program 2 -->
                <div class="card border-0 rounded-4 overflow-hidden shadow-sm sc-program-row-card sc-catalog-item" data-type="program" data-category="data featured" data-level="advanced" data-popularity="97" data-date="2026-08-18">
                    <div class="row g-0 align-items-stretch">
                        <div class="col-lg-4 position-relative">
                            <img src="{{image1}}" class="w-100 h-100 object-fit-cover" style="min-height: 240px;" alt="AI Track">
                            <span class="badge bg-primary position-absolute top-0 start-0 m-3 rounded-pill px-3 py-1 font-weight-bold">Specialization</span>
                        </div>
                        <div class="col-lg-8 p-4 p-lg-5 d-flex flex-column justify-content-between">
                            <div>
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <span class="badge bg-primary-subtle text-primary rounded-pill px-3 py-1 fw-bold"><i class="fa fa-book me-1"></i> 5 Courses Included</span>
                                    <span class="text-success fw-bold small"><i class="fa fa-trophy me-1"></i> Professional Certificate</span>
                                </div>
                                <h3 class="fw-bold text-dark mb-2 sc-item-title">Enterprise AI & Machine Learning Specialization</h3>
                                <p class="text-muted sc-item-desc mb-3">Deep dive into Deep Learning, LLM Fine-Tuning, Computer Vision, and Cloud MLOps deployment.</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center flex-wrap gap-3 pt-3 border-top">
                                <div class="d-flex align-items-center gap-3 text-muted small">
                                    <span><i class="fa fa-clock-o text-primary"></i> 20 Weeks</span>
                                    <span><i class="fa fa-certificate text-warning"></i> Industry Mentorship</span>
                                </div>
                                <a href="#" class="btn btn-primary rounded-pill px-5 fw-bold">View Program</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- ============================================================ -->
        <!-- VIEW 3: INSTRUCTORS GRID                                     -->
        <!-- ============================================================ -->
        <div class="sc-view-container sc-view-teachers" style="display: none;">
            <div class="row g-4">
                
                <!-- Instructor 1 -->
                <div class="col-md-6 col-lg-4 sc-catalog-item" data-type="teacher" data-category="data" data-popularity="98">
                    <div class="card border-0 rounded-4 p-4 text-center shadow-sm h-100 sc-card">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" class="rounded-circle mx-auto mb-3 object-fit-cover shadow-sm" width="100" height="100" alt="Dr. Sarah Jenkins">
                        <h4 class="fw-bold mb-1 sc-item-title">Dr. Sarah Jenkins</h4>
                        <p class="text-primary small fw-bold mb-2">Professor of Machine Learning</p>
                        <p class="text-muted small mb-3 sc-item-desc">Former Stanford AI researcher with 12+ years of industry consulting experience in Python and Deep Learning.</p>
                        <div class="d-flex justify-content-center gap-4 text-muted small border-top pt-3 mt-auto">
                            <div><strong class="text-dark d-block">8</strong> Courses</div>
                            <div><strong class="text-dark d-block">4.9</strong> ★ Rating</div>
                            <div><strong class="text-dark d-block">12.5k</strong> Learners</div>
                        </div>
                    </div>
                </div>

                <!-- Instructor 2 -->
                <div class="col-md-6 col-lg-4 sc-catalog-item" data-type="teacher" data-category="web" data-popularity="95">
                    <div class="card border-0 rounded-4 p-4 text-center shadow-sm h-100 sc-card">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" class="rounded-circle mx-auto mb-3 object-fit-cover shadow-sm" width="100" height="100" alt="Alex Rivera">
                        <h4 class="fw-bold mb-1 sc-item-title">Alex Rivera</h4>
                        <p class="text-primary small fw-bold mb-2">Senior Full-Stack Architect</p>
                        <p class="text-muted small mb-3 sc-item-desc">Specialized in React, Node.js, and distributed cloud services. Passionate about project-based learning.</p>
                        <div class="d-flex justify-content-center gap-4 text-muted small border-top pt-3 mt-auto">
                            <div><strong class="text-dark d-block">12</strong> Courses</div>
                            <div><strong class="text-dark d-block">4.8</strong> ★ Rating</div>
                            <div><strong class="text-dark d-block">18.2k</strong> Learners</div>
                        </div>
                    </div>
                </div>

                <!-- Instructor 3 -->
                <div class="col-md-6 col-lg-4 sc-catalog-item" data-type="teacher" data-category="design" data-popularity="92">
                    <div class="card border-0 rounded-4 p-4 text-center shadow-sm h-100 sc-card">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" class="rounded-circle mx-auto mb-3 object-fit-cover shadow-sm" width="100" height="100" alt="Elena Chen">
                        <h4 class="fw-bold mb-1 sc-item-title">Elena Chen</h4>
                        <p class="text-primary small fw-bold mb-2">Lead Product Designer</p>
                        <p class="text-muted small mb-3 sc-item-desc">Design System lead with experience at top fintech scale-ups. Teaches user-centric design & Figma mastery.</p>
                        <div class="d-flex justify-content-center gap-4 text-muted small border-top pt-3 mt-auto">
                            <div><strong class="text-dark d-block">6</strong> Courses</div>
                            <div><strong class="text-dark d-block">4.9</strong> ★ Rating</div>
                            <div><strong class="text-dark d-block">9.4k</strong> Learners</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- No Results Fallback -->
        <div class="sc-no-results text-center py-5" style="display: none;">
            <i class="fa fa-search fa-3x text-muted mb-3 opacity-50"></i>
            <h4 class="fw-bold text-dark">No matching items found</h4>
            <p class="text-muted">Try adjusting your keywords, category, or level filters.</p>
        </div>

    </div>
</section>
    `),
    css: clean(`
.sl-smartcatalog-section {
    background-color: var(--smartlearn-bg);
    color: var(--smartlearn-text);
    position: relative;
    font-family: var(--smartlearn-body-font, system-ui, -apple-system, sans-serif);
}
.sl-smartcatalog-section .sc-tabs .sc-tab-btn {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 4px 6px rgba(0,0,0,0.04);
}
.sl-smartcatalog-section .sc-tabs .sc-tab-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.08);
}
.sl-smartcatalog-section .sc-filters-card {
    background-color: var(--smartlearn-card-bg);
    border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.08)) !important;
}
.sl-smartcatalog-section .sc-cat-pill {
    background-color: var(--smartlearn-bg);
    border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.1));
    color: var(--smartlearn-text-muted);
    font-weight: 600;
    padding: 0.4rem 1rem;
    transition: all 0.2s ease;
}
.sl-smartcatalog-section .sc-cat-pill:hover,
.sl-smartcatalog-section .sc-cat-pill.active {
    background-color: var(--smartlearn-primary) !important;
    border-color: var(--smartlearn-primary) !important;
    color: #ffffff !important;
}
.sl-smartcatalog-section .sc-card-img-wrap {
    height: 190px;
    background-color: #e2e8f0;
    overflow: hidden;
}
.sl-smartcatalog-section .sc-card-img {
    height: 100%;
    transition: transform 0.5s ease;
}
.sl-smartcatalog-section .sc-card {
    background-color: var(--smartlearn-card-bg);
    border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.08)) !important;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.sl-smartcatalog-section .sc-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 32px rgba(0,0,0,0.1) !important;
}
.sl-smartcatalog-section .sc-card:hover .sc-card-img {
    transform: scale(1.06);
}

/* Hover Quick-Preview Popover */
.sl-smartcatalog-section .sc-card-wrapper {
    position: relative;
}
.sl-smartcatalog-section .sc-hover-popover {
    display: none;
    position: absolute;
    top: 50%;
    left: calc(100% + 14px);
    transform: translateY(-50%);
    width: 320px;
    background-color: var(--smartlearn-card-bg);
    border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.15));
    color: var(--smartlearn-text);
    z-index: 1050;
    pointer-events: auto;
    animation: scPopIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.sl-smartcatalog-section .sc-hover-popover::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -8px;
    border-width: 8px;
    border-style: solid;
    border-color: transparent var(--smartlearn-card-bg) transparent transparent;
}
@media (min-width: 992px) {
    .sl-smartcatalog-section .sc-card-wrapper:hover .sc-hover-popover {
        display: block;
    }
    /* If card is on right column, flip popover to left */
    .sl-smartcatalog-section .sc-items-grid > div:nth-child(3n) .sc-hover-popover,
    .sl-smartcatalog-section .sc-items-grid > div:last-child .sc-hover-popover {
        left: auto;
        right: calc(100% + 14px);
    }
    .sl-smartcatalog-section .sc-items-grid > div:nth-child(3n) .sc-hover-popover::before,
    .sl-smartcatalog-section .sc-items-grid > div:last-child .sc-hover-popover::before {
        right: auto;
        left: 100%;
        border-color: transparent transparent transparent var(--smartlearn-card-bg);
    }
}
@keyframes scPopIn {
    from { opacity: 0; transform: translateY(-50%) scale(0.95); }
    to { opacity: 1; transform: translateY(-50%) scale(1); }
}
.sl-smartcatalog-section .sc-program-row-card {
    background-color: var(--smartlearn-card-bg);
    border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.08)) !important;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.sl-smartcatalog-section .sc-program-row-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 32px rgba(0,0,0,0.1) !important;
}
    `),
    js: clean(`
(function() {
    function initSmartCatalogSection() {
        const root = document.querySelector('.sl-smartcatalog-section');
        if (!root || root.dataset.scInit) return;
        root.dataset.scInit = 'true';

        // Check options
        const showCourses = root.getAttribute('data-show-courses') !== 'false';
        const showPrograms = root.getAttribute('data-show-programs') !== 'false';
        const showTeachers = root.getAttribute('data-show-teachers') !== 'false';

        const tabBtns = root.querySelectorAll('.sc-tab-btn');
        const viewCourses = root.querySelector('.sc-view-courses');
        const viewPrograms = root.querySelector('.sc-view-programs');
        const viewTeachers = root.querySelector('.sc-view-teachers');

        // Hide disabled tabs if configured
        tabBtns.forEach(btn => {
            const type = btn.getAttribute('data-type');
            if (type === 'course' && !showCourses) btn.style.display = 'none';
            if (type === 'program' && !showPrograms) btn.style.display = 'none';
            if (type === 'teacher' && !showTeachers) btn.style.display = 'none';
        });

        // 1. Tab Switching
        let currentTab = 'course';
        tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                tabBtns.forEach(b => {
                    b.classList.remove('btn-primary', 'active');
                    b.classList.add('btn-outline-primary');
                });
                btn.classList.add('btn-primary', 'active');
                btn.classList.remove('btn-outline-primary');

                currentTab = btn.getAttribute('data-type');

                if (viewCourses) viewCourses.style.display = currentTab === 'course' ? 'block' : 'none';
                if (viewPrograms) viewPrograms.style.display = currentTab === 'program' ? 'block' : 'none';
                if (viewTeachers) viewTeachers.style.display = currentTab === 'teacher' ? 'block' : 'none';

                applyFilters();
            });
        });

        // 2. Search & Filters
        const searchInput = root.querySelector('.sc-search-input');
        const sortSelect = root.querySelector('.sc-sort-select');
        const levelSelect = root.querySelector('.sc-level-select');
        const catPills = root.querySelectorAll('.sc-cat-pill');
        const resultsCountBadge = root.querySelector('.sc-results-count');
        const noResultsMsg = root.querySelector('.sc-no-results');

        let selectedCategory = 'all';

        catPills.forEach(pill => {
            pill.addEventListener('click', (e) => {
                e.preventDefault();
                catPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                selectedCategory = pill.getAttribute('data-category');
                applyFilters();
            });
        });

        if (searchInput) searchInput.addEventListener('input', applyFilters);
        if (sortSelect) sortSelect.addEventListener('change', applyFilters);
        if (levelSelect) levelSelect.addEventListener('change', applyFilters);

        function applyFilters() {
            const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
            const selectedLevel = levelSelect ? levelSelect.value : 'all';
            const sortMode = sortSelect ? sortSelect.value : 'recent';

            const activeContainer = root.querySelector('.sc-view-' + (currentTab === 'course' ? 'courses' : currentTab === 'program' ? 'programs' : 'teachers'));
            if (!activeContainer) return;

            const items = Array.from(activeContainer.querySelectorAll('.sc-catalog-item'));
            let visibleCount = 0;

            items.forEach(item => {
                const title = (item.querySelector('.sc-item-title')?.textContent || '').toLowerCase();
                const desc = (item.querySelector('.sc-item-desc')?.textContent || '').toLowerCase();
                const itemCat = (item.getAttribute('data-category') || '').toLowerCase();
                const itemLevel = (item.getAttribute('data-level') || '').toLowerCase();

                const matchesQuery = !query || title.includes(query) || desc.includes(query);
                const matchesCat = (selectedCategory === 'all') || itemCat.includes(selectedCategory);
                const matchesLevel = (selectedLevel === 'all') || (itemLevel === selectedLevel);

                if (matchesQuery && matchesCat && matchesLevel) {
                    item.style.display = '';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });

            // Sorting
            const parentGrid = activeContainer.querySelector('.sc-items-grid') || activeContainer.querySelector('.row') || activeContainer.querySelector('.d-flex.flex-column');
            if (parentGrid && items.length > 0) {
                const sortedItems = [...items].sort((a, b) => {
                    const titleA = a.querySelector('.sc-item-title')?.textContent || '';
                    const titleB = b.querySelector('.sc-item-title')?.textContent || '';
                    const popA = parseInt(a.getAttribute('data-popularity') || '0', 10);
                    const popB = parseInt(b.getAttribute('data-popularity') || '0', 10);
                    const dateA = new Date(a.getAttribute('data-date') || '2026-01-01');
                    const dateB = new Date(b.getAttribute('data-date') || '2026-01-01');

                    if (sortMode === 'az') return titleA.localeCompare(titleB);
                    if (sortMode === 'za') return titleB.localeCompare(titleA);
                    if (sortMode === 'popular') return popB - popA;
                    return dateB - dateA; // recent
                });

                sortedItems.forEach(el => parentGrid.appendChild(el));
            }

            if (resultsCountBadge) {
                resultsCountBadge.textContent = visibleCount + ' ' + (currentTab === 'course' ? 'Courses' : currentTab === 'program' ? 'Programs' : 'Instructors');
            }

            if (noResultsMsg) {
                noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
            }
        }

        applyFilters();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSmartCatalogSection);
    } else {
        initSmartCatalogSection();
    }
})();
    `)
};

saveSection(smartCatalogSection);
console.log("Smart Catalog Flagship Section generated successfully!");
