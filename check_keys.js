
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
const usedKeys = new Set();

files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf8');
    // Match t("key") or t('key')
    const regex = /t\(['"]([^'"]+)['"]\)/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        usedKeys.add(match[1]);
    }
});

const missingInEn = [...usedKeys].filter(k => !enKeys.includes(k));
const unusedInEn = enKeys.filter(k => !usedKeys.has(k));

console.log('Missing in en.json:', JSON.stringify(missingInEn, null, 2));
console.log('Unused in en.json (potential):', JSON.stringify(unusedInEn, null, 2));
