
const fs = require('fs');
const path = require('path');

const messagesDir = 'c:\\Users\\mstancik\\Desktop\\delta-defence-web\\messages';
const appDir = 'c:\\Users\\mstancik\\Desktop\\delta-defence-web\\app';
const componentsDir = 'c:\\Users\\mstancik\\Desktop\\delta-defence-web\\components';

const readJson = (filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
};

const getKeys = (obj, prefix = '') => {
    let keys = [];
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            keys = keys.concat(getKeys(obj[key], `${prefix}${key}.`));
        } else {
            keys.push(`${prefix}${key}`);
        }
    }
    return keys;
};

const enKeys = getKeys(readJson(path.join(messagesDir, 'en.json')));

const walkSync = (dir, filelist = []) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) {
            filelist = walkSync(filepath, filelist);
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                filelist.push(filepath);
            }
        }
    });
    return filelist;
};

const files = [...walkSync(appDir), ...walkSync(componentsDir)];
const missingUsages = [];

files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');

    // Match t("key") or t('key')
    const regex = /t\(['"]([^'"]+)['"]\)/g;

    lines.forEach((line, index) => {
        let match;
        while ((match = regex.exec(line)) !== null) {
            const key = match[1];
            // Check if key exists in enKeys
            // Also check if it might be a partial key used with a namespace (hard to detect statically without more complex analysis)
            // For now, just check exact match against full keys, or if it's a "leaf" key

            if (!enKeys.includes(key)) {
                // Check if it is a suffix of some key (namespace usage)
                const isSuffix = enKeys.some(k => k.endsWith('.' + key));
                if (!isSuffix) {
                    missingUsages.push({ file: path.relative('c:\\Users\\mstancik\\Desktop\\delta-defence-web', file), line: index + 1, key });
                }
            }
        }
    });
});

const output = JSON.stringify(missingUsages, null, 2);
fs.writeFileSync('key_check_output.json', output, 'utf8');
console.log('Output written to key_check_output.json');
