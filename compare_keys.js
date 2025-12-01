
const fs = require('fs');
const path = require('path');

const messagesDir = 'c:\\Users\\mstancik\\Desktop\\delta-defence-web\\messages';
const languages = ['en', 'sk', 'de', 'he'];

const readJson = (lang) => {
  const content = fs.readFileSync(path.join(messagesDir, `${lang}.json`), 'utf8');
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

const enKeys = getKeys(readJson('en'));
const missingKeys = {};

languages.filter(l => l !== 'en').forEach(lang => {
  const langKeys = getKeys(readJson(lang));
  const missing = enKeys.filter(k => !langKeys.includes(k));
  if (missing.length > 0) {
    missingKeys[lang] = missing;
  }
});

console.log(JSON.stringify(missingKeys, null, 2));
