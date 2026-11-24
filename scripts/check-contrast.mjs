// Prüft alle zulässigen Farbpaare nach WCAG 2.2 AA und schreibt docs/kontrastprotokoll.tsv.
// Ein Paar mit "pflicht: true" muss bestehen, sonst endet das Skript mit Fehlercode 1.
import { readFileSync, writeFileSync } from 'node:fs';
const flat = JSON.parse(readFileSync('dist/oknrw-tokens.json', 'utf8'));
const get = (n) => flat['ok-' + n] ?? flat[n] ?? flat[n.replace(/-/g, '')];
const lum = (hex) => {
  const h = hex.replace('#', '');
  const c = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).map((x) => (x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
// [Vordergrund, Hintergrund, Anforderung, Pflicht, Hinweis]
const pairs = [
  ['text-primary', 'bg-base', 4.5, true], ['text-primary', 'bg-mint', 4.5, true], ['text-primary', 'bg-subtle', 4.5, true],
  ['text-secondary', 'bg-base', 4.5, true], ['text-secondary', 'bg-mint', 4.5, true], ['text-secondary', 'bg-subtle', 4.5, false, 'unzulässig: auf bg-subtle nur text-primary'],
  ['text-link', 'bg-base', 4.5, true], ['text-link', 'bg-mint', 4.5, true], ['text-link', 'bg-subtle', 4.5, false, 'unzulässig'],
  ['text-highlight', 'bg-base', 4.5, true], ['text-highlight', 'bg-mint', 4.5, true],
  ['text-success', 'bg-base', 4.5, true], ['text-success', 'bg-mint', 4.5, true],
  ['text-on-action', 'action-primary', 4.5, true], ['text-on-action', 'action-primary-hover', 4.5, true],
  ['text-on-dark', 'neutral-900', 4.5, true], ['text-on-dark', 'rot-700', 4.5, true],
  ['border-control', 'bg-base', 3, true], ['border-control', 'bg-mint', 3, true], ['border-focus', 'bg-mint', 3, true],
  ['text-primary', 'mint-300', 4.5, true, 'dunkelster Punkt von verlauf-kachel-hover'],
  ['mint-100', 'neutral-900', 4.5, true, 'Icon-Fläche auf dunkler Kachel'],
  ['action-primary', 'bg-mint', 3, false, 'Buttonfläche auf Mint; zulässig, weil die Beschriftung den Button erkennbar macht'],
];
const fmt = (n) => n.toFixed(2).replace('.', ',') + ':1';
let fail = 0;
const rows = ['Vordergrund\tWert\tHintergrund\tWert\tKontrast\tAnforderung\tErgebnis\tPflicht\tHinweis'];
for (const [fg, bg, req, must, note = ''] of pairs) {
  const a = get(fg), b = get(bg);
  if (!a || !b) { console.error('Token fehlt: ' + (a ? bg : fg)); process.exit(1); }
  const r = ratio(a, b), ok = r >= req;
  if (must && !ok) fail++;
  rows.push([fg, a, bg, b, fmt(r), fmt(req), ok ? 'erfüllt' : 'nicht erfüllt', must ? 'ja' : 'nein', note].join('\t'));
}
writeFileSync('docs/kontrastprotokoll.tsv', rows.join('\n') + '\n');
console.log(rows.length - 1 + ' Paare geprüft, ' + fail + ' Pflichtpaare nicht erfüllt. Protokoll: docs/kontrastprotokoll.tsv');
process.exit(fail ? 1 : 0);
