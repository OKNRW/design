# Kopfbereich

Logo links, Hauptmenü rechts, Suche als Icon-Button.

- Logo: Rechteck-Redesign (zugeschnittene Fassung), 40 px hoch, verlinkt zur Startseite; Alternativtext „Offene Kommunen.NRW – zur Startseite“.
- Menüpunkte 16 px fett. Aktive Seite: 3 px Balken `brand-gruen` plus `aria-current="page"`. Hover: runde Mint-Fläche, der Balken gleitet von links ein.
- Der Kopfbereich bleibt beim Scrollen oben (`position: sticky`) und ist leicht durchscheinend (Weiß 86 %, Weichzeichner).
- Untermenüs öffnen per Button mit `aria-expanded`, nicht per Hover allein.
- Abschluss 1 px `border-subtle`.
- Unter 960 px Breite: mobiles Menü.

Klassen: `ok-header`, `ok-header__logo`, `ok-nav`.
