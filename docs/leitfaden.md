# Offene Kommunen.NRW

Designsystem von Offene Kommunen.NRW Institut e.V. (OKNRW) für Website, Webanwendungen und Kommunikationsmaterial. Gestaltung: Damian Paderta. Stand: 24.11.2026, Version 0.3 (Entwurf).

Grundlage sind die Website oknrw.de, das Logo-Redesign und das Entscheidungsprotokoll vom 24.11.2026 (29 Entscheidungen; Entscheidung 18 zu den Ecken und die Regeln zu Schatten und Verläufen wurden am selben Tag für Version 0.2 und 0.3 angepasst). Alle Farb- und Kontrastwerte sind nach WCAG 2.2 AA geprüft.

## Haltung und Sprache

OKNRW arbeitet an der Schnittstelle von Zivilgesellschaft, Verwaltung und offenen Daten. Die Gestaltung ist sachlich, zugänglich und ruhig; sie soll Inhalte tragen, nicht überdecken.

- Sachlich, klar und freundlich. Keine Superlative, keine Werbesprache.
- Fachbegriffe sind erlaubt, wenn das Publikum sie kennt; sonst kurz erklären.
- Buttons: Verb zuerst, ein bis drei Wörter („Jetzt anmelden“, „Mehr erfahren“). Keine Ausrufezeichen.
- Fehlermeldungen: erst was passiert ist, dann was zu tun ist („Zwei Felder sind unvollständig. Bitte prüfe die markierten Angaben.“).
- Sprachregelung für Kampagnen beachten, z. B. „Unabhängigkeit“ statt „Souveränität“ (Barcamp 2026).

## Farben

Die Palette leitet sich aus dem Logo ab: Grün, Grau und Rot der Buchstaben „NRW“ bilden die Landesfarben Grün-Weiß-Rot ab, das Grau steht für das Weiß.

| Rolle | Token | Regel |
| --- | --- | --- |
| Hintergrund | `--ok-bg-base`, `--ok-bg-mint` | Weiß und Mint sind die dominanten Flächen; Sektionen wechseln zwischen beiden. |
| Trennfläche | `--ok-bg-subtle` | Dunkelmint für Hover und Trennflächen; darauf nur `--ok-text-primary`. |
| Handlung | `--ok-action-primary` | Starkes Grün für Call to Actions, Schrift `--ok-text-on-action` (dunkel). Hover heller. |
| Text | `--ok-text-primary`, `--ok-text-secondary` | Fast-Schwarz und Dunkelgrau. Markengrau nie für Text. |
| Links | `--ok-text-link` | Dunkelgrün, immer mit feiner Linie; beim Hover wächst ein grüner Balken von links. |
| Hervorhebung | `--ok-text-highlight` | Rot, selten: höchstens eine Hervorhebung je Ansicht. |
| Fehler und Erfolg | `--ok-text-error`, `--ok-text-success` | Immer mit Symbol und Text, nie Farbe allein. |
| Marke | `--ok-brand-gruen`, `--ok-brand-grau`, `--ok-brand-rot` | Nur Logo und Grafik. |

Grün und Rot dürfen nie als einziges Unterscheidungsmerkmal dienen; für Menschen mit Rot-Grün-Sehschwäche sind sie schwer zu unterscheiden.

Nicht zulässige Paare (Kontrastprotokoll): `--ok-text-secondary`, `--ok-text-link` und `--ok-text-highlight` auf `--ok-bg-subtle`; starkes Grün als Textfarbe; weiße Schrift auf Grün. Grüne Buttonflächen erreichen auf Mint 2,5:1; das ist zulässig, weil die Beschriftung den Button erkennbar macht.

## Typografie

- **Poppins** (600) für Überschriften, **Open Sans** (400, 700) für Text. Beide unter SIL Open Font License, selbst gehostet.
- Grundgröße 18 px, Zeilenhöhe 1,6; Stufen im Verhältnis 1,25: 14 / 18 / 22 / 28 / 35 / 44 px, dazu 56 px (`display`) nur im Hero. Kleinste Größe 14 px.
- Überschriften mit leicht verengter Laufweite (−0,01 bis −0,025 em) und ausgeglichenem Zeilenumbruch (`text-wrap: balance`).
- Zeilenlänge für Fließtext höchstens `--ok-breite-text` (720 px).
- Satzschreibung in Überschriften und Buttons; keine Großbuchstaben-Zeilen außer im Monatskürzel der Veranstaltungskarte.

## Raster, Abstände und Formen

- Abstände auf 4-px-Basis (`--ok-space-1` bis `--ok-space-16`). Die Abstandsstufen sind ein Vorschlag und noch nicht beschlossen.
- Inhaltsbreite höchstens `--ok-breite-inhalt` (1200 px). Sektionen: 96 px Abstand oben und unten (mobil 48 px).
- Ecken gestaffelt: `--ok-radius-base` (6 px) für Buttons und Felder, `--ok-radius-lg` (12 px) für Karten, Meldungen und Flächen, `--ok-radius-full` für Badges und Icon-Buttons. Sektionen über die volle Breite eckig.
- Im Ruhezustand flach: keine Schatten; Verläufe nur für Hero und Kacheln (siehe unten). Gliederung über Fläche (Weiß/Mint) und 1-px-Linien in `--ok-border-subtle`. Schatten (`--ok-shadow-hover`, `--ok-shadow-menu`) nur bei Hover und geöffneten Menüs.

## Verläufe und Muster

Seit Version 0.3 sind weiche Verläufe erlaubt, aber nur für Flächen: `--ok-verlauf-hero` im Hero, `--ok-verlauf-kachel` und `--ok-verlauf-kachel-hover` in Projektkacheln. Text auf Verläufen ist immer `--ok-text-primary`. Der Hero trägt zusätzlich ein Muster aus Punktraster und Leiterbahnen, das an das Barcamp-Motiv „Wurzeln und Leiterbahnen“ anschließt und rechts weich ausläuft. Ein Textmarker (`ok-mark`) hebt einzelne Begriffe in großen Überschriften hervor; höchstens einer je Seite.

## Bewegung

Interaktion wird durch kurze, gleichmäßige Bewegung sichtbar. Werte als CSS-Variablen in `dist/oknrw.css`: `--ok-dur-base` 180 ms für Farbe und kleine Wege, `--ok-dur-slow` 320 ms für Anheben und wachsende Linien, Kurve `--ok-ease` (schnell an, weich aus).

- Buttons heben sich beim Hover um 2 px, Karten um 4 px; dazu `--ok-shadow-hover`.
- Pfeile gleiten 3 px in Leserichtung; Linien unter Links und Kartentiteln wachsen von links.
- Bilder in Karten zoomen langsam auf 104 %.
- Fokus erhält zusätzlich einen weichen grünen Schein (`--ok-halo`), der 2-px-Fokusrahmen bleibt.
- Meldungen erscheinen mit kurzem Einblenden von oben.
- Scroll-Einblendung (`ok-reveal`): Karten und Kacheln blenden beim Scrollen gestaffelt ein. Reines CSS (scroll-driven animations); Browser ohne Unterstützung zeigen alles sofort.
- Spotlight (`ok-spot`): ein weicher grüner Lichtfleck folgt dem Zeiger auf Karten und Kacheln.
- Magnet (`ok-magnet`): die Primäraktion im Hero folgt dem Zeiger um höchstens 4 px.
- Laufband: läuft langsam, hält beim Hover an und lässt sich per Button stoppen.
- Spotlight, Magnet und der Button des Laufbands brauchen `js/oknrw.js` (`window.OKNRW.init()`); ohne Skript bleibt alles bedienbar und lesbar.
- Bei `prefers-reduced-motion: reduce` entfallen Bewegungen; Farbwechsel bleiben.
- Fokus immer sichtbar: 2 px `--ok-border-focus` mit 2 px Abstand. Klickflächen mindestens 48 px.

## Ikonografie

Lucide (ISC-Lizenz): Strich 2 px, runde Enden, 24-px-Raster. Icons übernehmen die Textfarbe. Ohne Text brauchen sie ein `aria-label`. Siehe Asset-Gruppe Icons.

## Bildsprache

Kontrastreiche, flächige Illustration ist der Standard, orientiert an den bestehenden Beitragsbildern. Fotos werden dokumentarisch eingesetzt (Veranstaltungen, Menschen), nicht als Stimmungsbilder. Bilder in Karten im Format 16:9. Die Grafiken in den Komponenten sind Platzhalter.

## Logo und Unterprojekte

- Leitlogo ist das Rechteck-Redesign. Die Quadratmarke wird angeglichen; bis dahin gilt die bisherige Fassung nur, wo ein Quadrat zwingend ist.
- Das Logo darf auf Weiß und Mint stehen.
- Unterprojekte (Barcamp, O-Mat.nrw, Datenatlas) erscheinen unter der Dachmarke und werden im Text gekennzeichnet. Jahresmotive (Barcamp 2026: „Wurzeln und Leiterbahnen“) sind eine eigene Ebene: Sie besetzen Bildflächen, nicht Hintergründe, Buttons oder Textfarben.

## Komponenten

Die Komponenten sind HTML mit Klassen aus `css/oknrw-components.css` (Präfix `ok-`). Die CSS-Variablen tragen ebenfalls das Präfix `--ok-` (z. B. `--ok-text-primary`); sie kommen aus `dist/oknrw-tokens.css`. Ein kleines Skript (`js/oknrw.js`) ergänzt Spotlight, Magnet und Laufband. Gruppen:

- **Grundelemente:** Button, Eingabefeld, Auswahl, Meldung, Badge
- **Inhaltsbausteine:** Beitragskarte, Veranstaltungskarte, Projektraster, Teaser, Zitat, Infokasten
- **Navigation:** Kopfbereich, Mobiles Menü, Brotkrumen, Fußbereich
- **Sektionen:** Hero, Laufband, Newsletter, Matrixblock, Partnerleiste

Jede Vorschau zeigt die Zustände Normal, Hover, Fokus, Fehler und Deaktiviert, soweit sie vorkommen. Für den Einsatz in WordPress wird `dist/oknrw.css` (oder die drei Einzeldateien) im Child-Theme geladen, `js/oknrw.js` im Footer.

## Offene Punkte

- Vektorfassung (SVG) des Logo-Redesigns fehlt; die vorhandene PDF-Datei enthält eine abweichende Wortmarke.
- Quadratmarke im Redesign und Mint-Variante des Logos erstellen.
- Abstandsstufen bestätigen.
- Lizenzhinweis im Fußbereich und Datenschutztext im Newsletter durch den Vorstand bestätigen lassen.
