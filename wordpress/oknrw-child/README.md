# OKNRW Child-Theme für Betheme

Child-Theme für Betheme, das das OKNRW Designsystem lädt und die Betheme-Farben durch die Tokens ersetzt (Entscheidungen 24, 31–36). Es enthält keine eigene Gestaltung. Geprüft gegen Betheme 29.0.6.1 auf oknrw.de.

## Bauen und installieren

```bash
npm run build      # Tokens und CSS
npm run theme      # build/oknrw-child/ und build/oknrw-child-<version>.zip
```

In WordPress unter Design → Themes → Theme hinzufügen → Theme hochladen die ZIP-Datei wählen und „OKNRW (Betheme Child)“ aktivieren. Betheme muss installiert sein (Ordnername `betheme`). Voraussetzung: WordPress 6.3 oder neuer.

## Aufbau

```
style.css               Theme-Kopf; Version wird beim Build gesetzt
functions.php           lädt nach Betheme: assets/css/oknrw.css, css/oknrw-betheme.css,
                        assets/js/oknrw.js (Footer, defer); entfernt Betheme-Schriften und Google Fonts
css/oknrw-betheme.css   Brücke: Betheme-Ausgabe auf var(--ok-…) umstellen
assets/                 beim Build erzeugt aus dist/, js/, fonts/ – nicht im Repository
```

## Umstellung auf oknrw.de

Reihenfolge, damit die Seite zwischendurch nicht ohne Farben dasteht:

1. Sicherung der Theme-Optionen anlegen (Export in den Betheme-Optionen) und den Inhalt des Feldes „custom CSS“ kopieren.
2. Child-Theme hochladen und aktivieren. Danach prüfen, ob die Theme-Optionen erhalten sind; sonst die Sicherung importieren.
3. Feld „custom CSS“ durch `wordpress/migration/betheme-custom-css-ohne-farben.css` ersetzen (Entscheidung 33).
4. Farben in den Theme-Optionen nach der Tabelle unten setzen (Entscheidung 36).
5. Schriften von Betheme in den Theme-Optionen abschalten, falls möglich (Entscheidung 35). `functions.php` entfernt die Datei `mfn-local-fonts.css` ohnehin.
6. Cache leeren (LiteSpeed Cache) und Startseite, eine Unterseite, das mobile Menü und ein Formular ansehen.

## Theme-Optionen in Betheme

Die Brücke setzt die Farben auch ohne diese Einträge durch. Die Optionen sind trotzdem nachzuziehen, damit von Betheme erzeugtes CSS (`uploads/betheme/css/static.css`) und die Vorschau im Seiten-Builder stimmen. Die genauen Namen der Optionen sind an der installierten Version zu prüfen; die bisherigen Werte stammen aus `static.css` von oknrw.de.

| Zweck | Option in Betheme | bisher | Token | neu |
|---|---|---|---|---|
| Theme-Farbe (Links, Akzente) | [Name prüfen] | #00ad2c | `action-primary` | #3aaa35 |
| Theme-Button Hintergrund | [Name prüfen] | #00ad2c | `action-primary` | #3aaa35 |
| Theme-Button Hover | [Name prüfen] | #00a01f | `action-primary-hover` | #5bbc56 |
| Theme-Button Schrift | [Name prüfen] | #ffffff | `text-on-action` | #1a1a1a |
| Standard-Button Hintergrund | [Name prüfen] | #1ea64c | `action-primary` | #3aaa35 |
| Standard-Button Schrift | [Name prüfen] | #ffffff | `text-on-action` | #1a1a1a |
| Links | [Name prüfen] | #00ad2c | `text-link` | #287a25 |
| Links Hover | [Name prüfen] | #303030 | `text-primary` | #1a1a1a |
| Fließtext, Überschriften | [Name prüfen] | #020202 | `text-primary` | #1a1a1a |
| Hauptmenü | [Name prüfen] | #303030 | `text-primary` | #1a1a1a |
| Seitenhintergrund | [Name prüfen] | rgba(235,246,227,0.94) | `bg-base` | #ffffff |
| Unterkopf (Subheader) | [Name prüfen] | rgba(235,245,226,1) | `bg-base` | #ffffff |
| Fußbereich Hintergrund | [Name prüfen] | #ffffff | `bg-mint` | #dff1d9 |
| Fußbereich Links | [Name prüfen] | #d1d1d1 | `text-primary` | #1a1a1a |
| Formularfelder Hintergrund | [Name prüfen] | rgba(216,234,214,1) | `bg-base` | #ffffff |
| Formularfelder Rahmen | [Name prüfen] | #00ad2c | `border-control` | #4f6672 |

Werte stammen aus `dist/oknrw-tokens.json`. Ändert sich ein Token, ist diese Tabelle nachzuziehen.

## Offen

- Namen der Theme-Optionen in der Tabelle eintragen.
- Der Aktions-Button von Betheme (`--mfn-button-action-*`, bisher Rot #dd3333 mit weißer Schrift) ist nicht umgestellt; auf der geprüften Seite nicht verwendet.
- Layout-Regeln aus `wordpress/migration/` schrittweise ins Child-Theme übernehmen.
- Komponenten (`ok-`-Klassen) im Seiten-Builder nutzbar machen, etwa als Blockmuster oder Vorlagen.
