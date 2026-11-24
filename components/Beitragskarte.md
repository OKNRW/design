# Beitragskarte

Vorschau auf einen Blogbeitrag in Listen und auf der Startseite.

- Die ganze Karte ist klickbar (Link im Titel, Fläche über `::after`); nur ein Link je Karte.
- Reihenfolge: Bild, Kategorie und Datum, Titel (`h4`), Anreißer (2–3 Zeilen), „Weiterlesen“.
- Bild 16:9, kontrastreiche Illustration; Fotos nur dokumentarisch. Ohne Bild entfällt die Fläche.
- Hover: Karte hebt sich um 4 px mit `shadow-hover`, das Bild zoomt auf 104 %, unter dem Titel wächst ein grüner Balken von links, der Pfeil gleitet. Fokus: 2 px `border-focus` um die Karte. Ohne Bewegung bei `prefers-reduced-motion`.
- Ecken `radius-lg` (12 px).
- Spotlight (`ok-spot`): ein weicher grüner Lichtfleck folgt dem Zeiger; Position setzt `oknrw.js`.
- Scroll-Einblendung (`ok-reveal`): Karten blenden beim Scrollen gestaffelt ein (CSS, ohne JavaScript; Browser ohne Unterstützung zeigen sie sofort).
- Karte immer `bg-base`, auch auf Mint-Sektionen.

Klassen: `ok-card`, `ok-card__media`, `__body`, `__meta`, `__title`, `__text`, `__foot`.
