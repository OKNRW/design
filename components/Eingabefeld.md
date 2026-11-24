# Eingabefeld

Einzeiliges Textfeld mit sichtbarem Label über dem Feld.

- Label immer sichtbar (`label`-Stil, 16 px fett); Platzhalter nur als Beispiel, nie als Ersatz für das Label.
- Rahmen 1 px `border-control` (5,1:1 auf Mint); Fokus zusätzlich 2 px `border-focus`.
- Fehler: Rahmen 2 px `text-error`, darunter Meldung mit Warnsymbol und Text; `aria-invalid` und `aria-describedby` setzen. Erst sagen, was falsch ist, dann was zu tun ist.
- Erfolg: Meldung mit Häkchen in `text-success`.
- Optionale Felder kennzeichnen, nicht Pflichtfelder.
- Höhe mindestens 48 px.

Klassen: `ok-field`, `ok-label`, `ok-input`, `ok-hint`, `ok-msg ok-msg--error` | `--success`.
