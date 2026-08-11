import os

file_path = '/home/mohammad/Dev/Websites/smartlearnwebsite/artifacts/smart-learn/scripts/generate_sections.cjs'

with open(file_path, 'r') as f:
    content = f.read()

# 1. Fix the Title Gradient
content = content.replace(
    'background: linear-gradient(135deg, #818CF8 0%, #C084FC 50%, #38BDF8 100%);',
    'background: linear-gradient(135deg, var(--sl-primary) 0%, var(--sl-text-main) 100%);'
)

# 2. Fix the Ambient Lights
content = content.replace(
    'background: radial-gradient(circle, #6366F1, transparent 70%);',
    'background: radial-gradient(circle, var(--sl-primary), transparent 70%);'
)
content = content.replace(
    'background: radial-gradient(circle, #06B6D4, transparent 70%);',
    'background: radial-gradient(circle, var(--sl-text-muted), transparent 70%);'
)

# 3. Fix the Hardcoded Cyan and Success Variables at the top of CSS
content = content.replace('--sl-cyan: #06B6D4;', '--sl-cyan: var(--sl-text-muted);')
content = content.replace('--sl-success: #10B981;', '--sl-success: var(--sl-primary);')

# 4. Fix the Chat Bubble Text Contrast and Button Text Contrast
# I previously set these to var(--sl-bg), which broke light mode.
# I will change them to #FFFFFF since primary buttons usually require white text, 
# and it falls under the "really necessary to use hardcoded color" exception.
content = content.replace('color: var(--sl-bg);', 'color: #FFFFFF;')

# 5. Fix tags and active states
content = content.replace(
    'background: rgba(6, 182, 212, 0.12);\n    border: 1px solid rgba(6, 182, 212, 0.3);\n    color: #38BDF8;',
    'background: var(--sl-surface-hover);\n    border: 1px solid var(--sl-border);\n    color: var(--sl-text-main);'
)

# Write back and rebuild
with open(file_path, 'w') as f:
    f.write(content)

print("generate_sections.cjs updated successfully")
os.system('node /home/mohammad/Dev/Websites/smartlearnwebsite/artifacts/smart-learn/scripts/generate_sections.cjs')
print("generate_sections.cjs ran successfully")
