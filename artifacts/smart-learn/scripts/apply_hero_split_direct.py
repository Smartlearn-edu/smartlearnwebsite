import json
import os

file_path = '/home/mohammad/Dev/Websites/smartlearnwebsite/artifacts/smart-learn/public/sections/hero-split-01.json'

with open(file_path, 'r') as f:
    data = json.load(f)

html = data['html']
css = data['css']

# 1. Fix HTML Border
html = html.replace('border: 1px solid rgba(255,255,255,0.1);', 'border: 1px solid var(--sl-border);')

# 2. Fix CSS Hardcoded Colors

# The title gradient
css = css.replace(
    'background: linear-gradient(135deg, #818CF8 0%, #C084FC 50%, #38BDF8 100%);',
    'background: linear-gradient(135deg, var(--sl-primary) 0%, var(--sl-text-main) 100%);'
)

# Ambient Lights
css = css.replace(
    'background: radial-gradient(circle, #6366F1, transparent 70%);',
    'background: radial-gradient(circle, var(--sl-primary), transparent 70%);'
)
css = css.replace(
    'background: radial-gradient(circle, #06B6D4, transparent 70%);',
    'background: radial-gradient(circle, var(--sl-text-muted), transparent 70%);'
)

# Cyan & Success Variables
css = css.replace('--sl-cyan: #06B6D4;', '--sl-cyan: var(--sl-text-muted);')
css = css.replace('--sl-success: #10B981;', '--sl-success: var(--sl-primary);')

# Backgrounds & Text
css = css.replace('background: rgba(255, 255, 255, 0.04);', 'background: var(--sl-surface);')
css = css.replace('background: rgba(255, 255, 255, 0.03);', 'background: var(--sl-surface);')
css = css.replace('background: rgba(255, 255, 255, 0.07);', 'background: var(--sl-surface-hover);')
css = css.replace('background: rgba(255, 255, 255, 0.05);', 'background: var(--sl-surface);')
css = css.replace('border: 1px solid rgba(255, 255, 255, 0.07);', 'border: 1px solid var(--sl-border);')
css = css.replace('border-top: 1px solid rgba(255, 255, 255, 0.06);', 'border-top: 1px solid var(--sl-border);')
css = css.replace('border-bottom: 1px solid rgba(255, 255, 255, 0.06);', 'border-bottom: 1px solid var(--sl-border);')

css = css.replace('color: #E2E8F0;', 'color: var(--sl-text-main);')
css = css.replace('color: #F1F5F9;', 'color: var(--sl-text-main);')
css = css.replace('color: #FFFFFF;', 'color: var(--sl-text-main);')

# Wait, previously I replaced all #FFFFFF with var(--sl-text-main). 
# This breaks the Primary Button text and User Chat Bubble text in light mode (since text-main would be black, wait, black text on primary button is fine if primary is yellow. But in the screenshot, start learning now is GREEN and text is WHITE).
# So let's restore absolute white ONLY for the primary button and the user chat bubble.
css = css.replace(
    '.sl-btn-primary {\n    background: var(--sl-primary);\n    color: var(--sl-text-main);',
    '.sl-btn-primary {\n    background: var(--sl-primary);\n    color: #FFFFFF;'
)
css = css.replace(
    '.sl-btn-primary:hover {\n    background: var(--sl-primary-hover);\n    transform: translateY(-2px);\n    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);\n    color: var(--sl-text-main);',
    '.sl-btn-primary:hover {\n    background: var(--sl-primary-hover);\n    transform: translateY(-2px);\n    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);\n    color: #FFFFFF;'
)
css = css.replace(
    '.sl-msg-user .sl-msg-bubble {\n    background: var(--sl-primary);\n    color: var(--sl-text-main);',
    '.sl-msg-user .sl-msg-bubble {\n    background: var(--sl-primary);\n    color: #FFFFFF;'
)

# Active states and tags
css = css.replace(
    'background: rgba(6, 182, 212, 0.12);\n    border: 1px solid rgba(6, 182, 212, 0.3);\n    color: #38BDF8;',
    'background: var(--sl-surface-hover);\n    border: 1px solid var(--sl-border);\n    color: var(--sl-text-main);'
)

data['html'] = html
data['css'] = css

with open(file_path, 'w') as f:
    json.dump(data, f, indent=4)

print("hero-split-01.json directly updated successfully!")
