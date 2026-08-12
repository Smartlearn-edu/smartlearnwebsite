const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const sectionsDir = path.join(publicDir, 'sections');
const catalogPath = path.join(publicDir, 'catalog.json');

// Ensure directories exist
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(sectionsDir)) fs.mkdirSync(sectionsDir, { recursive: true });

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
    
    // Create catalog entry (without full html/css/js content to keep catalog lightweight)
    const catalogEntry = {
        id: section.id,
        name: section.name,
        category: section.category,
        image: section.image,
        smartlearn_section: true,
        preview_image: "",
        download_url: '/sections/' + section.id + '.json',
        is_premium: true,
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
}

const smartCatalogSection = {
    smartlearn_section: true,
    id: "catalog_dynamic_integration",
    name: "Smart Catalog Dynamic",
    category: "Courses & Categories",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    html: `
<!-- sl-section: dynamic_smartcatalog | v1.0 -->
<div class="sl-dynamic-catalog-wrapper" id="sl-catalog-wrapper" data-sl-catalog="true">
    <div class="container-fluid px-4 py-5">
        <div class="text-center py-5 sl-catalog-loader">
            <i class="fa fa-circle-o-notch fa-spin fa-3x text-primary"></i>
            <p class="mt-3 text-muted">Loading Smart Catalog...</p>
        </div>
        <div class="sl-catalog-content"></div>
    </div>
</div>
    `.trim(),
    css: `
.sl-dynamic-catalog-wrapper {
    width: 100%;
    min-height: 400px;
    background: transparent;
}
.sl-catalog-loader {
    animation: fadeIn 0.5s ease-in-out;
}
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
    `.trim(),
    js: `
(function() {
    const wrappers = document.querySelectorAll('.sl-dynamic-catalog-wrapper:not([data-loaded="true"])');
    wrappers.forEach(wrapper => {
        wrapper.dataset.loaded = 'true';
        
        const baseUrl = (typeof M !== 'undefined' && M.cfg && M.cfg.wwwroot) ? M.cfg.wwwroot : window.location.origin;
        const url = baseUrl + '/theme/smartlearn/smartcatalog_ajax.php';
        
        fetch(url, {credentials: 'include'})
            .then(res => res.json())
            .then(data => {
                if (data.success && data.html) {
                    const loader = wrapper.querySelector('.sl-catalog-loader');
                    if (loader) loader.style.display = 'none';
                    
                    const contentDiv = wrapper.querySelector('.sl-catalog-content');
                    if (contentDiv) {
                        contentDiv.innerHTML = data.html;
                        
                        if (!window._slHistoryIntercepted) {
                            window._slHistoryIntercepted = true;
                            const originalReplaceState = window.history.replaceState;
                            window.history.replaceState = function(state, title, url) {
                                if (window.location.search.includes('redirect=0') && url) {
                                    let urlStr = (url instanceof URL) ? url.toString() : url.toString();
                                    if (!urlStr.includes('redirect=0')) {
                                        if (urlStr.includes('?')) {
                                            urlStr = urlStr.replace('?', '?redirect=0&');
                                        } else {
                                            urlStr = urlStr + '?redirect=0';
                                        }
                                        url = urlStr;
                                    }
                                }
                                return originalReplaceState.apply(this, [state, title, url]);
                            };
                        }
                        
                        require(['local_smartcatalog/main'], function(App) {
                            if (App && typeof App.init === 'function') {
                                App.init();
                            }
                        });
                    }
                } else {
                    console.error('Failed to load Smart Catalog HTML:', data.error);
                    const loader = wrapper.querySelector('.sl-catalog-loader');
                    if (loader) {
                        loader.innerHTML = '<div class="alert alert-danger"><i class="fa fa-exclamation-triangle"></i> Failed to load catalog: ' + (data.error || 'Unknown error') + '</div>';
                    }
                }
            })
            .catch(err => {
                console.error('Error fetching Smart Catalog HTML:', err);
                const loader = wrapper.querySelector('.sl-catalog-loader');
                if (loader) {
                    loader.innerHTML = '<div class="alert alert-danger"><i class="fa fa-exclamation-triangle"></i> Error connecting to server.</div>';
                }
            });
    });
})();
    `.trim()
};

saveSection(smartCatalogSection);
