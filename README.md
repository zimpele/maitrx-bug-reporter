# @maitrx/bug-reporter

Bug Reporter Widget für Vite/React Apps — meldet Bugs direkt in das Maitrx Support-Tool.

## Installation

```bash
bun add file:../maitrx-bug-reporter
# oder
npm install ../maitrx-bug-reporter
```

> Das Package wird lokal eingebunden. Stelle sicher, dass der Pfad zum `maitrx-bug-reporter`-Verzeichnis stimmt.

---

## Schritt 1 — Widget einbinden

Wrapping der App mit `BugReporterProvider` in `main.tsx`:

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BugReporterProvider } from '@maitrx/bug-reporter'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BugReporterProvider
      config={{
        endpoint: 'DEIN_ENDPOINT',
        token: 'DEIN_TOKEN',
        enabled: true,
        // Optional: eingeloggten User mitschicken
        getUser: () => ({
          name: currentUser.name,
          email: currentUser.email,
        }),
      }}
    >
      <App />
    </BugReporterProvider>
  </React.StrictMode>
)
```

Ein 🐛-Button erscheint automatisch unten rechts. Nutzer können damit Bugs melden.

---

## Schritt 2 — Settings-Seite einbinden

Füge die `BugReporterSettings`-Komponente auf einer Admin-Seite ein (z.B. `/admin/settings`):

```tsx
import { BugReporterSettings } from '@maitrx/bug-reporter'

export default function AdminSettingsPage() {
  return (
    <div>
      <h1>Einstellungen</h1>
      <BugReporterSettings />
    </div>
  )
}
```

Über die Settings-Seite kann ein Admin:
- **Mit Maitrx anmelden** — Popup öffnet sich, Login, Projekt auswählen
- Token wird automatisch gespeichert (localStorage)
- Bug Reporter aktivieren / deaktivieren
- Verbindung trennen

---

## Schritt 3 — Projekt in Maitrx verbinden

1. Admin öffnet die Settings-Seite in eurer App
2. Klick auf **"Mit Maitrx anmelden"**
3. Im Popup: Mit Maitrx-Konto einloggen
4. Projekt auswählen
5. Popup schließt sich — fertig ✅

Token und Endpoint werden automatisch konfiguriert.

---

## Manuelle Konfiguration (alternativ zu Schritt 3)

Falls du den Token lieber manuell einträgst:

1. Im Maitrx-Tool: **Einstellungen → Projekte → "..." → Bug Reporter**
2. Token generieren und kopieren
3. Endpoint-URL kopieren
4. Token und Endpoint direkt als Props an `BugReporterProvider` übergeben

---

## Config-Optionen

| Option | Typ | Erforderlich | Beschreibung |
|--------|-----|--------------|--------------|
| `endpoint` | `string` | Ja | Edge Function URL aus den Maitrx-Projekteinstellungen |
| `token` | `string` | Ja | API-Token aus den Maitrx-Projekteinstellungen |
| `enabled` | `boolean` | Nein | Widget anzeigen (default: `true`) |
| `getUser` | `() => { name?, email? }` | Nein | Eingeloggten User automatisch mitschicken |

---

## Was wird beim Bug-Report mitgeschickt?

- **Titel** (vom Nutzer eingegeben)
- **Beschreibung** (optional, vom Nutzer)
- **Screenshot** (automatisch via html2canvas)
- **Browser-Info** (User-Agent, URL, Auflösung, Sprache)
- **User-Info** (Name + E-Mail, falls `getUser` konfiguriert)
