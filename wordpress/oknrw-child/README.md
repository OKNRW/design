# OKNRW Child-Theme für Betheme

Child-Theme für Betheme, das das OKNRW Designsystem lädt und die Betheme-Farben durch die Tokens ersetzt (Entscheidungen 24, 31, 32). Es enthält keine eigene Gestaltung.

## Bauen und installieren

```bash
npm run build      # Tokens und CSS
npm run theme      # build/oknrw-child/ und build/oknrw-child-<version>.zip
```

In WordPress unter Design → Themes → Theme hinzufügen → Theme hochladen die ZIP-Datei wählen und „OKNRW (Betheme Child)“ aktivieren. Betheme muss installiert sein (Ordnername `betheme`). Voraussetzung: WordPress 6.3 oder neuer.

## Aufbau

```
style.css               Theme-Kopf; Version wird beim Build gesetzt
functions.php           lädt assets/css/oknrw.css, css/oknrw-betheme.css, assets/js/oknrw.js (Footer, defer);
                        entfernt Stylesheets und Verbindungshinweise zu Google Fonts
css/oknrw-betheme.css   Brücke: Betheme-Ausgabe auf var(--ok-…) umstellen
assets/                 beim Build erzeugt aus dist/, js/, fonts/ – nicht im Repository
```

## Theme-Optionen in Betheme

Die Farben werden zusätzlich in den Theme-Optionen von Betheme eingetragen, damit auch dort erzeugtes CSS stimmt. Die genauen Namen der Optionen sind noch an der installierten Betheme-Version zu prüfen.

| Zweck | Option in Betheme | Token | Wert |
|---|---|---|---|
| Akzent, Buttons | [Name prüfen] | `action-primary` | #3aaa35 |
| Button-Hover | [Name prüfen] | `action-primary-hover` | #5bbc56 |
| Schrift auf Buttons | [Name prüfen] | `text-on-action` | #1a1a1a |
| Fließtext, Überschriften | [Name prüfen] | `text-primary` | #1a1a1a |
| Links | [Name prüfen] | `text-link` | #287a25 |
| Seitenhintergrund | [Name prüfen] | `bg-base` | #ffffff |
| Sektionshintergrund | [Name prüfen] | `bg-mint` | #dff1d9 |
| Google Fonts | [Name prüfen] | – | abschalten |

Werte stammen aus `dist/oknrw-tokens.json`. Ändert sich ein Token, ist diese Tabelle nachzuziehen.

## Offen

- Betheme-Selektoren für Teil 2 von `css/oknrw-betheme.css` an der Ausgabe von oknrw.de bestimmen.
- Namen der Theme-Optionen in der Tabelle eintragen.
- Komponenten (`ok-`-Klassen) im Seiten-Builder nutzbar machen, etwa als Blockmuster oder Vorlagen.
