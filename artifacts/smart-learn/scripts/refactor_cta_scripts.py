import os
import re
import json

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # We will find each cta object and refactor it
    # cta objects look like: const cta1 = { id: "...", name: "...", category: "...", subcategory: "...", description: "...", schema: { ... }, template: `...` };
    
    # We will convert it to:
    # const cta1 = {
    #     id: "...",
    #     meta: { name: "...", category: "...", variant: "...", description: "...", tags: ["cta", "call to action"], image_count: 1 },
    #     html: `...`,
    #     css: `...`,
    #     js: `(function() {})();`
    # };
    
    # Regex to find cta definitions
    pattern = re.compile(r'const\s+(cta\d+)\s*=\s*\{([\s\S]*?template:\s*`([\s\S]*?)`\s*)\};', re.MULTILINE)
    
    def replacer(match):
        cta_var = match.group(1)
        body = match.group(2)
        template = match.group(3)
        
        # Extract id, name, category, subcategory, description
        id_match = re.search(r'id:\s*"([^"]+)"', body)
        name_match = re.search(r'name:\s*"([^"]+)"', body)
        cat_match = re.search(r'category:\s*"([^"]+)"', body)
        subcat_match = re.search(r'subcategory:\s*"([^"]+)"', body)
        desc_match = re.search(r'description:\s*"([^"]+)"', body)
        
        id_val = id_match.group(1) if id_match else ''
        name_val = name_match.group(1) if name_match else ''
        cat_val = cat_match.group(1) if cat_match else ''
        subcat_val = subcat_match.group(1) if subcat_match else ''
        desc_val = desc_match.group(1) if desc_match else ''
        
        # Refactor template HTML
        # Extract schema defaults to replace Handlebars
        schema_match = re.search(r'schema:\s*\{[\s\S]*?settings:\s*\[([\s\S]*?)\]\s*\}', body)
        defaults = {}
        if schema_match:
            settings_str = schema_match.group(1)
            settings = re.findall(r'\{\s*id:\s*"([^"]+)"[\s\S]*?default:\s*(?:"([^"]+)"|([^,}]+))[\s\S]*?\}', settings_str)
            for s in settings:
                key = s[0]
                val = s[1] if s[1] else s[2]
                if val == 'true': val = True
                elif val == 'false': val = False
                defaults[key] = val
                
        # Now replace {{heading}} with defaults[heading] and add data-sl-edit="text" if applicable.
        # This is a bit manual, so let's do generic replacement:
        html = template
        # Remove {{#xxx}} and {{/xxx}} conditionals, keeping content
        html = re.sub(r'\{\{#\w+\}\}([\s\S]*?)\{\{/\w+\}\}', r'\1', html)
        html = re.sub(r'\{\{\^\w+\}\}([\s\S]*?)\{\{/\w+\}\}', r'', html)
        
        # Replace variables
        for key, val in defaults.items():
            if isinstance(val, str):
                html = re.sub(r'\{\{' + key + r'\}\}', val, html)
                
        # Some things didn't have defaults, let's hardcode fallbacks
        html = html.replace('{{background_video}}', '')
        html = html.replace('{{background_image}}', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80')
        html = html.replace('{{course_id}}', '1')
        html = html.replace('{{course_thumb}}', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80')
        html = html.replace('{{app_store_url}}', '#')
        html = html.replace('{{play_store_url}}', '#')
        html = html.replace('{{qr_code}}', 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=example')
        html = html.replace('{{phone_mockup}}', 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80')
        
        # Extract CSS
        css_match = re.search(r'<style>([\s\S]*?)</style>', html)
        css = css_match.group(1) if css_match else ''
        html = re.sub(r'<style>[\s\S]*?</style>', '', html)
        
        # Add basic CSS vars to css if missing (SmartLearn Native Color Classes are standard)
        base_css = """
/* SmartLearn Native Color Classes */
.sl-text-primary { color: var(--smartlearn-primary) !important; }
.sl-text-emphasis { color: var(--smartlearn-text) !important; }
.sl-text-muted { color: var(--smartlearn-text-muted) !important; }
.sl-bg-main { background-color: var(--smartlearn-bg) !important; }
.sl-bg-card { background-color: var(--smartlearn-card-bg) !important; border: 1px solid var(--smartlearn-card-border) !important; }
.sl-bg-primary { background-color: var(--smartlearn-primary) !important; }
"""
        css = base_css + css

        res = f'''const {cta_var} = {{
    id: "{id_val}",
    meta: {{
        name: "{name_val}",
        category: "{cat_val}",
        variant: "{subcat_val}",
        description: "{desc_val}",
        tags: ["cta", "marketing", "call to action"],
        image_count: 1
    }},
    html: `<!-- sl-section: {id_val} | v1.0 -->{html}`,
    css: `{css}`,
    js: `(function() {{}})();`
}};'''
        return res

    new_content = pattern.sub(replacer, content)
    
    # We also need to fix the saving logic at the bottom of the files.
    save_logic = '''
// Save sections properly
[__CTA_LIST__].forEach(sec => {
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
        download_url: '/sections/' + sec.id + '.json',
        is_premium: true,
        is_new: true,
        popularity: Math.floor(Math.random() * 50) + 50
    };
    
    const existingIndex = catalog.sections.findIndex(c => c.id === sec.id);
    if (existingIndex >= 0) {
        catalog.sections[existingIndex] = sectionMeta;
    } else {
        catalog.sections.push(sectionMeta);
    }
    console.log('Saved ' + sec.id);
});
'''
    
    if 'cta1, cta2, cta3, cta4' in new_content:
        cta_list = 'cta1, cta2, cta3, cta4'
    else:
        cta_list = 'cta5, cta6, cta7, cta8'
        
    save_logic = save_logic.replace('__CTA_LIST__', cta_list)
    
    # Replace everything from `[cta1` to the end with save_logic + write catalog
    new_content = re.sub(r'\[cta\d.*\.forEach\(cta => saveSection.*', save_logic + r'''
fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2));
console.log('Updated catalog.json');
''', new_content, flags=re.DOTALL)
    
    # Replace the `let catalog` loading to be correct
    new_content = new_content.replace(save_logic, r'''
let catalog = { version: "1.0", updated: new Date().toISOString().split('T')[0], sections: [] };
if (fs.existsSync(catalogPath)) {
    catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
}
if (!catalog.sections) catalog.sections = [];
''' + save_logic)

    with open(filepath, 'w') as f:
        f.write(new_content)

process_file('/home/mohammad/Dev/Websites/smartlearnwebsite/artifacts/smart-learn/scripts/generate_cta_1.cjs')
process_file('/home/mohammad/Dev/Websites/smartlearnwebsite/artifacts/smart-learn/scripts/generate_cta_2.cjs')
