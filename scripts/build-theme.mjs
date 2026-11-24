// Baut das WordPress-Child-Theme nach build/oknrw-child/ und, falls `zip` vorhanden ist,
// build/oknrw-child-<version>.zip. Quelle: wordpress/oknrw-child/ plus dist/, js/, fonts/.
// Setzt voraus, dass dist/ aktuell ist (npm run build).
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const { version } = JSON.parse(readFileSync('package.json', 'utf8'));
const out = 'build/oknrw-child';

if (!existsSync('dist/oknrw.css')) {
  console.error('dist/oknrw.css fehlt. Zuerst npm run build ausführen.');
  process.exit(1);
}

rmSync('build', { recursive: true, force: true });
mkdirSync(out, { recursive: true });

cpSync('wordpress/oknrw-child', out, { recursive: true });
cpSync('dist/oknrw.css', `${out}/assets/css/oknrw.css`);
cpSync('js/oknrw.js', `${out}/assets/js/oknrw.js`);
// dist/oknrw.css verweist auf ../fonts/, also assets/fonts/.
cpSync('fonts', `${out}/assets/fonts`, { recursive: true });
cpSync('LICENSE', `${out}/LICENSE`);

const style = `${out}/style.css`;
writeFileSync(style, readFileSync(style, 'utf8').replace(/^Version: .*$/m, `Version: ${version}`));

console.log(`${out}/ geschrieben (Version ${version})`);

try {
  execFileSync('zip', ['-rq', `oknrw-child-${version}.zip`, 'oknrw-child'], { cwd: 'build' });
  console.log(`build/oknrw-child-${version}.zip geschrieben`);
} catch {
  console.log('zip nicht verfügbar; den Ordner build/oknrw-child/ von Hand packen.');
}
