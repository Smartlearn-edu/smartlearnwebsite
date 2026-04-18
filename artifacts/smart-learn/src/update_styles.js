const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir('./', function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let changed = false;

        let newContent = content.replace(/className="([^"]*)"/g, (match, classNames) => {
            if (classNames.includes('text-slate-400') || classNames.includes('text-slate-200')) {
                let classes = classNames.split(' ').filter(Boolean); // split by space
                
                // We only want to increase font size if we're also making it brighter (or if it's already brightened)
                // However, we should be careful not to keep bumping if we run the script multiple times.
                // But running it once is fine.
                classes = classes.map(c => {
                    if (c === 'text-slate-400') return 'text-slate-200';
                    if (c === 'text-xs') return 'text-sm';
                    if (c === 'text-sm') return 'text-base';
                    // Let's not bump text-base to text-lg globally, as it might break some layouts. 
                    // Most descriptions were text-sm or text-xs.
                    return c;
                });
                return `className="${classes.join(' ')}"`;
            }
            return match;
        });

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated:', filePath);
        }
    }
});
