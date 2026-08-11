import os
import re

files = [
    'generate_hero_sections_1.cjs',
    'generate_hero_sections_2.cjs',
    'generate_hero_sections_3.cjs',
    'generate_hero_sections_4.cjs',
    'generate_hero_sections_5.cjs',
    'generate_hero_section_14.cjs'
]

for f in files:
    if not os.path.exists(f):
        continue
    
    with open(f, 'r') as file:
        content = file.read()
    
    # Hero 3: sl-hero-tech
    # Since background is var(--bs-body-bg), text must be body
    if 'sl-hero-tech' in content:
        # replace text-white with text-body-emphasis inside sl-hero-tech
        content = re.sub(r'(<[^>]*sl-hero-tech[^>]*>.*?</section>)', 
                         lambda m: m.group(1).replace('text-white', 'text-body-emphasis').replace('text-light', 'text-body-secondary'), 
                         content, flags=re.DOTALL)
        
    # Hero 5: sl-hero-dynamic
    if 'sl-hero-dynamic' in content:
        # Change bg-dark to bg-body, and text-white to text-body-emphasis
        content = re.sub(r'(<[^>]*sl-hero-dynamic[^>]*>.*?</section>)',
                         lambda m: m.group(1).replace('bg-dark', 'bg-body').replace('text-white', 'text-body-emphasis'),
                         content, flags=re.DOTALL)
                         
    # Hero 11: sl-hero-bento
    if 'sl-hero-bento' in content:
        content = content.replace('bg-dark text-white', 'bg-body-tertiary text-body-emphasis border border-secondary-subtle')
        
    # Badges that are hardcoded white with dark text -> primary
    content = content.replace('bg-white text-dark', 'bg-primary text-white')
    content = content.replace('bg-warning text-dark', 'bg-primary text-white')
    
    # Generic replacements for remaining stray classes not inside image overlays
    # We must be careful not to break overlays.
    # So we only target specific known bad classes
    
    with open(f, 'w') as file:
        file.write(content)

print('Fixed specific hardcoded colors')
