# Button

Buttons lösen Handlungen aus; Links führen zu Seiten.

- **Primär** (`action-primary`, Schrift `text-on-action`): höchstens eine Primäraktion je Bereich. Hover wird heller (`action-primary-hover`), nicht dunkler, damit die dunkle Schrift lesbar bleibt (5,8:1 und 7,3:1).
- **Sekundär**: weiße Fläche, 2 px Rahmen `text-primary`; Hover `bg-mint`.
- Hover: Primär und Sekundär heben sich um 2 px an und bekommen `shadow-hover`; ein Pfeil am Ende gleitet 3 px nach rechts. Beim Klicken senkt sich der Button wieder ab. Bei `prefers-reduced-motion` entfällt die Bewegung.
- Ecken `radius-base` (6 px); Icon-Buttons rund (`radius-full`).
- **Textlink-Button**: für nachrangige Aktionen, `text-link`, unterstrichen; beim Hover wird die Linie 3 px stark und grün.
- **Icon-Button**: nur mit `aria-label`; Icon 24 px.
- Fokus: 2 px `border-focus` mit 2 px Abstand. Klickfläche mindestens 48 px (`ziel-min`).
- Beschriftung: Verb zuerst, ein bis drei Wörter („Jetzt anmelden“, „Mehr erfahren“). Keine Ausrufezeichen.
- Deaktiviert nur, wenn unvermeidbar; besser aktiv lassen und beim Auslösen erklären, was fehlt.

Klassen: `ok-btn` plus `ok-btn--primary` | `--secondary` | `--text` | `--icon`.
