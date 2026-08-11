import os
import glob
import re

css_overrides = """
/* Theme Primary Color Inheritance Fix */
[class*="sl-hero-"] .text-primary { color: var(--smartlearn-primary) !important; }
[class*="sl-hero-"] .bg-primary { background-color: var(--smartlearn-primary) !important; }
[class*="sl-hero-"] .btn-primary { background-color: var(--smartlearn-primary) !important; border-color: var(--smartlearn-primary) !important; color: #fff !important; }
[class*="sl-hero-"] .btn-primary:hover { filter: brightness(0.9); }
[class*="sl-hero-"] .btn-outline-primary { border-color: var(--smartlearn-primary) !important; color: var(--smartlearn-primary) !important; }
[class*="sl-hero-"] .btn-outline-primary:hover { background-color: var(--smartlearn-primary) !important; color: #fff !important; }
[class*="sl-hero-"] .border-primary { border-color: var(--smartlearn-primary) !important; }

"""

files = glob.glob('generate_hero_section*.cjs')

for f in files:
    with open(f, 'r') as file:
        content = file.read()
        
    # Replace var(--bs-primary) with var(--smartlearn-primary)
    content = content.replace('var(--bs-primary)', 'var(--smartlearn-primary)')
    
    # Inject CSS overrides right after css: `
    if '/* Theme Primary Color Inheritance Fix */' not in content:
        content = re.sub(r'(css:\s*`\s*)', r'\1' + css_overrides, content)
        
    with open(f, 'w') as file:
        file.write(content)

print("Injected primary color overrides successfully.")
