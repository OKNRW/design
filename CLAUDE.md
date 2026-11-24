# CLAUDE.md – Arbeitsregeln für dieses Repository

Dieses Repository ist das Designsystem von Offene Kommunen.NRW Institut e.V. (OKNRW). Es wird von einer Person gestaltet (Damian Paderta) und mit Claude Code weiterentwickelt. Lies diese Datei vollständig, bevor du etwas änderst.

## Sprache und Ton

- Alle Texte, Kommentare, Commit-Nachrichten und Dokumentation auf Deutsch.
- Sachlich, präzise, freundlich. Keine Superlative, keine Werbesprache, keine erfundenen Fakten oder Zahlen.
- Fehlende Inhalte als Platzhalter in eckigen Klammern: `[Datum]`, `[Partnerlogo]`. Kein Lorem ipsum.
- Buttons: Verb zuerst, ein bis drei Wörter, Satzschreibung, kein Ausrufezeichen.

## Vorgehen

- Vor größeren Änderungen (neue Komponente, neue Farbe, Umbau von Dateien) erst einen kurzen Vorschlag mit Optionen machen und auf Zustimmung warten.
- Entscheidungen werden in `docs/entscheidungen.tsv` protokolliert (Nr, Bereich, Frage, Entscheidung, Datum). Bestehende Entscheidungen nicht stillschweigend überschreiben; eine Änderung bekommt eine neue Zeile oder einen Vermerk.
- Nach jeder Änderung an Tokens oder Komponenten: `npm run build` und `npm run check`. Beide müssen ohne Fehler laufen. Das Kontrastprotokoll wird mit eingecheckt.

## Quelle der Wahrheit

- `tokens/*.json` (W3C-DTCG-Format) ist die einzige Quelle für Farben, Schriftgrößen, Abstände, Radien, Schatten, Verläufe und Bewegung.
- `dist/` wird erzeugt. Nie von Hand bearbeiten.
- CSS-Variablen tragen das Präfix `--ok-` und entstehen aus dem Token-Pfad: `text.primary` → `--ok-text-primary`, `space.6` → `--ok-space-6`.
- In `css/oknrw-components.css` keine festen Farbwerte (Hex) verwenden, nur `var(--ok-…)`. Ausnahme: halbtransparente Varianten in rgba(), die aus einem Token abgeleitet sind und im Kommentar benannt werden.

## Farbregeln (nicht verhandelbar ohne neue Entscheidung)

- Hintergründe: Weiß (`--ok-bg-base`) und Mint (`--ok-bg-mint`) dominieren; Sektionen wechseln zwischen beiden. Dunkelmint (`--ok-bg-subtle`) nur für Hover und Trennflächen, darauf nur `--ok-text-primary`.
- Call to Action: starkes Grün `--ok-action-primary` mit dunkler Schrift `--ok-text-on-action`. Nie weiße Schrift auf Grün (3,0:1). Hover wird heller (`--ok-action-primary-hover`), nicht dunkler.
- Rot (`--ok-text-highlight`, `--ok-text-error`) selten: höchstens eine Hervorhebung je Ansicht; Fehler immer mit Symbol und Text. `--ok-rot-500` nur im Logo.
- Grün und Rot nie als einziges Unterscheidungsmerkmal (Rot-Grün-Sehschwäche).
- Markengrau `--ok-grau-400` und starkes Grün sind keine Textfarben.
- Verläufe (`--ok-verlauf-*`) nur für Hero und Projektkacheln; Text darauf nur `--ok-text-primary`.
- Neue Farben nur nach Entscheidung und mit Eintrag in `scripts/check-contrast.mjs`.

## Typografie und Form

- Poppins 600 für Überschriften, Open Sans 400/700 für Text, selbst gehostet (`fonts/`). Keine weiteren Schriften, kein Google-Fonts-Abruf.
- Grundgröße 18 px; Stufen 14 / 18 / 22 / 28 / 35 / 44 px, `display` 56 px nur im Hero. Kleinste Größe 14 px.
- Ecken: `--ok-radius-base` (6 px) für Buttons und Felder, `--ok-radius-lg` (12 px) für Karten und Flächen, `--ok-radius-full` für Badges und Icon-Buttons.
- Schatten nur bei Hover und geöffneten Menüs (`--ok-shadow-hover`, `--ok-shadow-menu`). Ruhezustand flach.
- Icons: Lucide (ISC), Strich 2, inline als SVG mit `stroke="currentColor"`; neben Text `aria-hidden="true"`, allein mit `aria-label` am Button.

## Bewegung

- Dauer `--ok-dur-base` (180 ms) und `--ok-dur-slow` (320 ms), Kurve `--ok-ease`.
- Erlaubt: Anheben (Buttons 2 px, Karten 4 px), wachsende Linien, gleitende Pfeile, Bildzoom bis 104 %, Spotlight, Magnet (höchstens 4 px), Scroll-Einblendung per CSS (`animation-timeline: view()`), Laufband mit Stopp-Button.
- Jede neue Bewegung muss unter `@media (prefers-reduced-motion: reduce)` abgeschaltet werden.
- Inhalte müssen ohne JavaScript lesbar und bedienbar bleiben. `js/oknrw.js` ergänzt nur Verhalten; keine Abhängigkeiten, kein Build-Schritt.

## Barrierefreiheit (WCAG 2.2 AA)

- Text 4,5:1, große Schrift ab 24 px sowie Rahmen von Bedienelementen, Fokusrahmen und Icons 3:1.
- Fokus immer sichtbar: 2 px `--ok-border-focus` mit 2 px Abstand; bei Feldern zusätzlich `--ok-shadow-focus`.
- Klickflächen mindestens 48 px (`--ok-ziel-min`).
- Echte Elemente: `<button>`, `<a href>`, `<label>` + `<input>`; kein `onclick` auf `div`.
- Bewegte Inhalte über 5 Sekunden brauchen einen Stopp-Button (siehe Laufband).

## Komponenten

- Jede Komponente hat `components/<Name>.html` (Vorschau aller Zustände: Normal, Hover über `.is-hover`, Fokus über `.is-focus`, Fehler, Deaktiviert) und `components/<Name>.md` (Zweck im ersten Satz, Regeln, verwendete Tokens, Klassen).
- CSS der Komponente als eigener, kommentierter Abschnitt in `css/oknrw-components.css`; Klassen mit Präfix `ok-` und BEM-Schreibweise (`ok-card__title`, `ok-btn--primary`).
- Neue Komponente in `components/README.md` eintragen und, wenn sinnvoll, in `examples/startseite.html` zeigen.
- Logos nie verändern, umfärben oder nachzeichnen. Fehlende Logo-Fassungen stehen in `docs/offene-punkte.md`.

## Nächste Aufgaben

Siehe `docs/offene-punkte.md`. Naheliegend: WordPress-Child-Theme für Betheme, das `dist/oknrw.css` und `js/oknrw.js` einbindet und die Theme-Farben (u. a. das Blau #0089F7) überschreibt.

## Bezug zum Designsystem-Artefakt

Eine browsbare Fassung liegt als Claude-Artefakt vor: https://claude.ai/artifact/2fM1f5jJUuKtrZ3CagDqb9 (Stand v0.3). Dort heißen die Token ohne Präfix (`text-primary`); dieses Repository ist ab der Übergabe die maßgebliche Fassung.
