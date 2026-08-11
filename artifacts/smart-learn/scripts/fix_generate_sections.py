import os
import re

file_path = '/home/mohammad/Dev/Websites/smartlearnwebsite/artifacts/smart-learn/scripts/generate_sections.cjs'
json_path = '/home/mohammad/Dev/Websites/smartlearnwebsite/artifacts/smart-learn/public/sections/hero-split-01.json'

def fix_css(css):
    # Badge
    css = css.replace('background: rgba(255, 255, 255, 0.04);', 'background: var(--sl-surface);')
    css = css.replace('color: #E2E8F0;', 'color: var(--sl-text-main);')
    css = css.replace('color: #F1F5F9;', 'color: var(--sl-text-main);')

    # Typography
    css = css.replace('color: #FFFFFF;', 'color: var(--sl-text-main);')

    # Pills
    css = css.replace('background: rgba(255, 255, 255, 0.03);', 'background: var(--sl-surface);')
    css = css.replace('background: rgba(255, 255, 255, 0.07);', 'background: var(--sl-surface-hover);')

    # Buttons
    css = css.replace('.sl-btn-primary {\n    background: var(--sl-primary);\n    color: var(--sl-text-main);', '.sl-btn-primary {\n    background: var(--sl-primary);\n    color: var(--sl-bg);')
    css = css.replace('.sl-btn-primary:hover {\n    background: var(--sl-primary-hover);\n    transform: translateY(-2px);\n    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);\n    color: var(--sl-text-main);', '.sl-btn-primary:hover {\n    background: var(--sl-primary-hover);\n    transform: translateY(-2px);\n    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);\n    color: var(--sl-bg);')

    css = css.replace('.sl-msg-user .sl-msg-bubble {\n    background: var(--sl-primary);\n    color: var(--sl-text-main);', '.sl-msg-user .sl-msg-bubble {\n    background: var(--sl-primary);\n    color: var(--sl-bg);')

    css = css.replace('.sl-chip-btn:hover {\n    background: rgba(99, 102, 241, 0.2);\n    border-color: rgba(99, 102, 241, 0.5);\n    color: var(--sl-text-main);', '.sl-chip-btn:hover {\n    background: rgba(99, 102, 241, 0.2);\n    border-color: var(--sl-primary);\n    color: var(--sl-text-main);')

    # Stat Bar
    css = css.replace('border-top: 1px solid rgba(255, 255, 255, 0.06);', 'border-top: 1px solid var(--sl-border);')
    css = css.replace('border-bottom: 1px solid rgba(255, 255, 255, 0.06);', 'border-bottom: 1px solid var(--sl-border);')

    # Chat bubbles
    css = css.replace('background: rgba(255, 255, 255, 0.05);', 'background: var(--sl-surface);')
    css = css.replace('border: 1px solid rgba(255, 255, 255, 0.07);', 'border: 1px solid var(--sl-border);')
    return css

# 1. Update generate_sections.cjs
with open(file_path, 'r') as f:
    content = f.read()

content = content.replace('border: 1px solid rgba(255,255,255,0.1);', 'border: 1px solid var(--sl-border);')
content = fix_css(content)

with open(file_path, 'w') as f:
    f.write(content)

print("generate_sections.cjs updated successfully")

# 2. Run generate_sections.cjs to rebuild catalog.json and JSON files
os.system('node /home/mohammad/Dev/Websites/smartlearnwebsite/artifacts/smart-learn/scripts/generate_sections.cjs')

print("generate_sections.cjs ran successfully")
