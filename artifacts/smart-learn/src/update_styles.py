import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    
    # We will find all className="..." blocks
    def replacer(match):
        classNames = match.group(1)
        if 'text-slate-400' in classNames or 'text-slate-200' in classNames:
            classes = classNames.split()
            new_classes = []
            for c in classes:
                if c == 'text-slate-400':
                    new_classes.append('text-slate-200')
                elif c == 'text-xs':
                    new_classes.append('text-sm')
                elif c == 'text-sm':
                    new_classes.append('text-base')
                else:
                    new_classes.append(c)
            return 'className="' + ' '.join(new_classes) + '"'
        return match.group(0)

    new_content = re.sub(r'className="([^"]*)"', replacer, content)

    if new_content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated: {filepath}")

for root, _, files in os.walk('.'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            process_file(os.path.join(root, file))
