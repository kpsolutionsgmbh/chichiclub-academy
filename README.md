# ChiChiClub Academy – Landing Page

## Setup

```bash
# 1. In den Ordner wechseln
cd chichiclub-vscode

# 2. Dependencies installieren
npm install

# 3. Lokal starten
npm run dev
```

Öffne http://localhost:5173 im Browser.

## Deployment (Netlify / Vercel)

```bash
# Build erstellen
npm run build
```

Der fertige Build liegt dann in `/dist`. Diesen Ordner bei Netlify oder Vercel hochladen.

**Oder:** GitHub Repo erstellen → bei Vercel/Netlify verknüpfen → auto-deploy bei jedem Push.

## Bilder austauschen

Die Bilder sind in `src/App.jsx` oben als Variablen definiert (z.B. `IMG_HERO1`, `IMG_ABOUT`).

**Option A – Base64:** Die Platzhalter durch echte base64-Strings ersetzen.

**Option B – Dateien (empfohlen):**
1. Bilder in `/public/images/` legen
2. Variablen ändern zu: `const IMG_HERO1 = "/images/hero1.jpg"`

## Struktur

```
chichiclub-vscode/
├── index.html          ← HTML Entry Point
├── package.json        ← Dependencies
├── vite.config.js      ← Vite Config
├── public/
│   └── favicon.svg     ← Favicon
└── src/
    ├── main.jsx        ← React Entry Point
    └── App.jsx         ← Die gesamte Landing Page
```
