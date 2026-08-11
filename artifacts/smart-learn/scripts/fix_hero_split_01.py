import json
import re

file_path = '/home/mohammad/Dev/Websites/smartlearnwebsite/artifacts/smart-learn/public/sections/hero-split-01.json'

with open(file_path, 'r') as f:
    data = json.load(f)

html = data['html']
css = data['css']

# Fix HTML
html = html.replace('border: 1px solid rgba(255,255,255,0.1);', 'border: 1px solid var(--sl-border);')

# Fix CSS hardcoded colors
# Badge
css = css.replace('background: rgba(255, 255, 255, 0.04);', 'background: var(--sl-surface);')
css = css.replace('color: #E2E8F0;', 'color: var(--sl-text-main);')
css = css.replace('color: #F1F5F9;', 'color: var(--sl-text-main);')

# Typography
css = css.replace('color: #FFFFFF;', 'color: var(--sl-text-main);')

# Pills
css = css.replace('background: rgba(255, 255, 255, 0.03);', 'background: var(--sl-surface);')
css = css.replace('background: rgba(255, 255, 255, 0.07);', 'background: var(--sl-surface-hover);')

# Buttons - wait, btn-primary hover has color: #FFFFFF which was replaced by --sl-text-main above.
# We might want the text on primary buttons to be the background color for contrast!
# Let's fix the css specifically.
css = css.replace('.sl-btn-primary {\n    background: var(--sl-primary);\n    color: var(--sl-text-main);', '.sl-btn-primary {\n    background: var(--sl-primary);\n    color: var(--sl-bg);')
css = css.replace('.sl-btn-primary:hover {\n    background: var(--sl-primary-hover);\n    transform: translateY(-2px);\n    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);\n    color: var(--sl-text-main);', '.sl-btn-primary:hover {\n    background: var(--sl-primary-hover);\n    transform: translateY(-2px);\n    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);\n    color: var(--sl-bg);')

css = css.replace('.sl-msg-user .sl-msg-bubble {\n    background: var(--sl-primary);\n    color: var(--sl-text-main);', '.sl-msg-user .sl-msg-bubble {\n    background: var(--sl-primary);\n    color: var(--sl-bg);')

css = css.replace('.sl-chip-btn:hover {\n    background: rgba(99, 102, 241, 0.2);\n    border-color: rgba(99, 102, 241, 0.5);\n    color: var(--sl-text-main);', '.sl-chip-btn:hover {\n    background: rgba(99, 102, 241, 0.2);\n    border-color: var(--sl-primary);\n    color: var(--sl-text-main);')

# Stat Bar
css = css.replace('border-top: 1px solid rgba(255, 255, 255, 0.06);', 'border-top: 1px solid var(--sl-border);')

# Card Header
css = css.replace('border-bottom: 1px solid rgba(255, 255, 255, 0.06);', 'border-bottom: 1px solid var(--sl-border);')

# Chat bubbles
css = css.replace('background: rgba(255, 255, 255, 0.05);', 'background: var(--sl-surface);')
css = css.replace('border: 1px solid rgba(255, 255, 255, 0.07);', 'border: 1px solid var(--sl-border);')

data['html'] = html
data['css'] = css

with open(file_path, 'w') as f:
    json.dump(data, f, indent=2)

print("Done")
