# @maitrx/bug-reporter

Bug Reporter Widget für Vite/React Apps — meldet Bugs direkt in das Maitrx Support-Tool.

## Installation

```bash
bun add github:zimpele/maitrx-bug-reporter
```

---

## Integration (2 Schritte)

### Schritt 1 — Provider einbinden

```tsx
// main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BugReporterProvider } from '@maitrx/bug-reporter'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BugReporterProvider>
      <App />
    </BugReporterProvider>
  </React.StrictMode>
)
```

Das ist alles — kein Token, kein Router-Setup, keine weitere Konfiguration nötig.

### Schritt 2 — Mit Maitrx verbinden

Öffne in deiner App die URL `/bug-reporter`. Die Settings-Seite erscheint automatisch.

1. Klick auf **"Mit Maitrx anmelden"**
2. Im Popup: Mit Maitrx-Konto einloggen und Projekt auswählen
3. Popup schließt sich — fertig ✅

Der 🐛-Button erscheint ab sofort auf allen Seiten (außer `/bug-reporter`).

---

## Was passiert auf `/bug-reporter`?

Die Route `/bug-reporter` wird automatisch vom Plugin abgefangen — kein Router-Eintrag nötig. Dort kann ein Admin:

- Die Verbindung zu Maitrx herstellen
- Den Bug Reporter aktivieren / deaktivieren
- Die Verbindung trennen oder neu verbinden

---

## Optionen

```tsx
<BugReporterProvider
  getUser={() => ({
    name: currentUser.name,   // Optional: User-Info automatisch mitschicken
    email: currentUser.email,
  })}
>
  <App />
</BugReporterProvider>
```

| Option | Typ | Beschreibung |
|--------|-----|--------------|
| `getUser` | `() => { name?, email? }` | Eingeloggten User automatisch mitschicken |

---

## Was wird beim Bug-Report mitgeschickt?

- **Titel** (vom Nutzer eingegeben, Pflichtfeld)
- **Beschreibung** (optional)
- **Screenshot** (automatisch via html2canvas)
- **Browser-Info** (User-Agent, URL, Auflösung, Sprache)
- **User-Info** (Name + E-Mail, falls `getUser` konfiguriert)

---

## Update

Nach Änderungen am Plugin-Code immer neu bauen und pushen:

```bash
cd maitrx-bug-reporter
bun run build
git add -A && git commit -m "update" && git push
```

In der externen App die neue Version ziehen:

```bash
bun add github:zimpele/maitrx-bug-reporter
```

> **Hinweis:** Das Package muss nach jedem Update neu installiert werden, da der `dist/`-Ordner direkt im Repo liegt.
