# Laufband

Zeigt die Themen des Instituts als langsam laufendes Band unter dem Hero.

- Begriffe in Poppins 22 px, getrennt durch grüne Punkte (`brand-gruen`). Höchstens acht Begriffe, keine Links.
- Läuft in 45 Sekunden einmal durch, hält beim Hover an und hat einen Button zum Anhalten (WCAG 2.2.2: bewegte Inhalte müssen sich stoppen lassen). Der Button schaltet `is-paused` und `aria-pressed` per `oknrw.js`.
- Die zweite Liste ist nur die Wiederholung für den nahtlosen Lauf und für Screenreader ausgeblendet (`aria-hidden`).
- Bei reduzierter Bewegung steht das Band als umbrechende Liste.

Klassen: `ok-marquee`, `ok-marquee__viewport`, `ok-marquee__track`, `ok-marquee__list`, `ok-marquee__toggle`.
