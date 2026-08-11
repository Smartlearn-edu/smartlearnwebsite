import glob
import re

css_overrides = """
/* SmartLearn Native Color Classes */
.sl-text-primary { color: var(--smartlearn-primary) !important; }
.sl-text-emphasis { color: var(--smartlearn-text) !important; }
.sl-text-muted { color: var(--smartlearn-text-muted) !important; }
.sl-bg-main { background-color: var(--smartlearn-bg) !important; }
.sl-bg-card { background-color: var(--smartlearn-card-bg) !important; border: 1px solid var(--smartlearn-card-border) !important; }
.sl-bg-primary { background-color: var(--smartlearn-primary) !important; }
.sl-bg-primary-subtle { background-color: color-mix(in srgb, var(--smartlearn-primary) 15%, transparent) !important; }
.sl-btn-primary { background-color: var(--smartlearn-primary) !important; border-color: var(--smartlearn-primary) !important; color: #fff !important; }
.sl-btn-primary:hover { background-color: var(--smartlearn-primary-hover, var(--smartlearn-primary)) !important; filter: brightness(0.9); }
.sl-btn-outline-primary { border-color: var(--smartlearn-primary) !important; color: var(--smartlearn-primary) !important; }
.sl-btn-outline-primary:hover { background-color: var(--smartlearn-primary) !important; color: #fff !important; }
.sl-border-primary { border-color: var(--smartlearn-primary) !important; }
"""

files = glob.glob('generate_hero_section*.cjs')

for f in files:
    with open(f, 'r') as file:
        content = file.read()
        
    # Remove the old injected block
    old_block_start = '/* Theme Primary Color Inheritance Fix */'
    if old_block_start in content:
        # The block was inserted right after css: `, and ends right before the next original CSS.
        # It's exactly 9 lines long. We can just use a regex to strip it.
        content = re.sub(r'/\* Theme Primary Color Inheritance Fix \*/.*?\n\n', '', content, flags=re.DOTALL)
    
    # Ensure the new block is inserted if it's not already there
    if '/* SmartLearn Native Color Classes */' not in content:
        content = re.sub(r'(css:\s*`\s*)', r'\1' + css_overrides, content)
        
    # Replace utility classes
    replacements = {
        'btn-primary': 'sl-btn-primary',
        'btn-outline-primary': 'sl-btn-outline-primary',
        'text-primary': 'sl-text-primary',
        'bg-primary': 'sl-bg-primary',
        'text-body-emphasis': 'sl-text-emphasis',
        'text-body-secondary': 'sl-text-muted',
        'bg-body-tertiary': 'sl-bg-card',
        'bg-body': 'sl-bg-main',
        'border-primary': 'sl-border-primary',
        'bg-primary-subtle': 'sl-bg-primary-subtle'
    }
    
    # We must be careful not to replace sl-btn-primary again if we run it twice.
    # We can use regex word boundaries \b for the replacement keys, but some have dashes.
    for k, v in replacements.items():
        # Match the exact class name surrounded by quotes, spaces, or at the start/end of a string.
        # A simpler way is to use regex with negative lookbehind so we don't replace sl-btn-primary with sl-sl-btn-primary
        content = re.sub(r'(?<!sl-)\b' + k + r'\b', v, content)
        
    with open(f, 'w') as file:
        file.write(content)

print("Refactored all hero sections with SmartLearn native color classes.")
