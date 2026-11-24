// Fasst Tokens, Schriften und Komponenten zu dist/oknrw.css zusammen.
import { readFileSync, writeFileSync } from 'node:fs';
const parts = ['dist/oknrw-tokens.css', 'css/oknrw-fonts.css', 'css/oknrw-components.css'];
const out = parts.map((p) => `/* ---- ${p} ---- */\n` + readFileSync(p, 'utf8')).join('\n');
writeFileSync('dist/oknrw.css', out);
console.log('dist/oknrw.css geschrieben (' + out.length + ' Zeichen)');
