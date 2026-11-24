# Projektraster

Projekte als Bento-Raster: Kacheln unterschiedlicher Größe statt gleich großer Kästen.

- Vier Spalten; `ok-tile--xl` belegt 2 × 2 Felder (wichtigstes Projekt), `ok-tile--wide` 2 × 1, sonst 1 × 1. Mobil eine Spalte.
- Fläche `verlauf-kachel`, beim Hover `verlauf-kachel-hover`, Anheben um 4 px mit `shadow-hover`; das Icon dreht sich leicht, der Pfeil gleitet nach rechts oben. Spotlight (`ok-spot`) wie bei Karten.
- Auf den Verläufen steht nur `text-primary` (Dunkelmint verträgt kein Grün und kein Grau als Textfarbe). Daher ist „Zum …“ schwarz und unterstrichen.
- `ok-tile--dark` für abgeschlossene oder archivierte Projekte: Fläche `neutral-900`, Schrift `text-on-dark`.
- Die ganze Kachel ist ein Link. Externe Ziele mit Pfeil nach rechts oben.

Klassen: `ok-bento`, `ok-tile` plus `--xl` | `--wide` | `--dark`, `ok-tile__icon`, `__kicker`, `__title`, `__text`, `__more`.
