# OKNRW Designsystem

Designsystem von Offene Kommunen.NRW Institut e.V. für Website, Webanwendungen und Kommunikationsmaterial. Version 0.3.0 (Entwurf), Stand 2026-11-24. Gestaltung: Damian Paderta.

Enthalten sind Design-Tokens im W3C-Format (DTCG), daraus erzeugte CSS-Variablen, CSS-Komponenten mit Vorschauseiten, ein kleines Skript für Interaktionen, Schriften, Logos, Icons, Richtlinien und Protokolle.

## Schnellstart

```bash
npm install        # installiert Style Dictionary und baut dist/
npm run build      # Tokens -> dist/oknrw-tokens.css, dann dist/oknrw.css
npm run check      # Kontrastprüfung -> docs/kontrastprotokoll.tsv
npm run theme      # WordPress-Child-Theme -> build/oknrw-child-<version>.zip
```

Danach `examples/startseite.html` oder eine Datei unter `components/` im Browser öffnen. Die erzeugten Dateien in `dist/` liegen im Repository, damit die Vorschauen auch ohne Build funktionieren.

## Einbinden

```html
<link rel="stylesheet" href="dist/oknrw.css">
<!-- … Markup mit ok-Klassen, siehe components/ … -->
<script src="js/oknrw.js" defer></script>
```

`dist/oknrw.css` enthält Tokens, Schriften und Komponenten. Einzeln: `dist/oknrw-tokens.css`, `css/oknrw-fonts.css`, `css/oknrw-components.css` (in dieser Reihenfolge).

## Aufbau

```
tokens/                 Quelle der Wahrheit (DTCG): farben, typografie, form
dist/                   erzeugt: oknrw-tokens.css, oknrw-tokens.json, oknrw.css
css/                    oknrw-components.css (Komponenten), oknrw-fonts.css
js/oknrw.js             Spotlight, Magnet-Button, Laufband, mobiles Menü
components/             je Komponente .html (Vorschau) und .md (Richtlinien)
examples/               startseite.html (vollständige Beispielseite)
docs/                   leitfaden.md, entscheidungen.tsv, kontrastprotokoll.tsv, offene-punkte.md
assets/                 logos/, icons/ (Lucide)
fonts/                  Poppins, Open Sans (woff2, Latin)
scripts/                build-css.mjs, check-contrast.mjs, build-theme.mjs
wordpress/oknrw-child/  Child-Theme für Betheme (siehe dortige README.md)
CLAUDE.md               Arbeitsregeln für Claude Code
```

## Lizenzen

- Code (CSS, JS, Skripte, Tokens): MIT, siehe `LICENSE`.
- Richtlinien und Dokumentation: CC BY 4.0, siehe `LICENSE-docs.md`.
- Logo und Name „Offene Kommunen.NRW“ sind von den offenen Lizenzen ausgenommen.
- Schriften: SIL Open Font License 1.1 (`fonts/OFL-*.txt`). Icons: Lucide, ISC-Lizenz (`assets/icons/LICENSE-lucide.txt`).
