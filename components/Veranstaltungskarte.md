# Veranstaltungskarte

Termin mit Datum, Ort und Handlung.

- Datumsblock auf `bg-mint` dient der Orientierung; das vollständige Datum steht zusätzlich als Text (`time`), weil der Block für Screenreader ausgeblendet ist.
- Fakten (Datum, Ort) mit Symbolen in `text-secondary`.
- Eine Primäraktion („Jetzt anmelden“), weitere Links als Textlink.
- Spotlight (`ok-spot`) wie bei der Beitragskarte.
- Vergangene Termine: Primäraktion entfällt, Badge „Rückblick“ statt Anmeldung.

Klassen: `ok-event`, `ok-event__date`, `__day`, `__month`, `__body`, `__facts`.
