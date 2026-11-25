# OKNRW Child-Theme für Betheme

Child-Theme für Betheme, das das OKNRW Designsystem lädt und die Betheme-Farben durch die Tokens ersetzt (Entscheidungen 24, 31–36). Es enthält keine eigene Gestaltung. Geprüft gegen Betheme 29.0.6.1 auf oknrw.de.

## Bauen und installieren

Ohne Konsole: Die fertige ZIP-Datei liegt bei jedem Release unter https://github.com/OKNRW/design/releases (Datei `oknrw-child-<version>.zip`).

Mit Konsole:

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
inc/update.php          Aktualisierung aus GitHub-Releases
assets/                 beim Build erzeugt aus dist/, js/, fonts/ – nicht im Repository
```

## Aktualisierungen

Bei jeder Aktualisierungsprüfung von WordPress (von sich aus etwa alle zwölf Stunden) liest das Theme das neueste Release unter https://github.com/OKNRW/design/releases (Entscheidung 38); die Antwort von GitHub wird bis zu sechs Stunden zwischengespeichert. Ist die Version des Releases höher als die installierte, erscheint die Aktualisierung unter Dashboard → Aktualisierungen und unter Design → Themes. Dort lässt sie sich mit einem Klick installieren oder als automatische Aktualisierung einschalten. „Erneut prüfen“ unter Dashboard → Aktualisierungen fragt GitHub sofort neu ab.

Eine neue Version entsteht so:

1. Version in `package.json` erhöhen, etwa von 0.3.0 auf 0.3.1, und auf `main` zusammenführen.
2. GitHub Actions baut das Theme und legt das Release `v0.3.1` mit `oknrw-child-0.3.1.zip` an.
3. WordPress zeigt die Aktualisierung bei der nächsten Prüfung an, sofort nach „Erneut prüfen“.

Voraussetzung: Das Theme ist aktiv und liegt im Ordner `oknrw-child` (so wie in der ZIP-Datei). Theme-Optionen und Inhalte bleiben bei der Aktualisierung erhalten; ersetzt werden nur die Dateien des Child-Themes.

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
