# Änderungen Landingpage – Umsetzung

> Stand: 07.06.2026 · Status: **lokal umgesetzt, NICHT gepusht**
> Geänderte Dateien: `src/App.jsx`, `index.html`, `public/images/jette-portrait.webp` (neu)
> Quelle: Kunden-Feedback (siehe `BRIEFING-landingpage.md` + `DRAFT-positionierung.md`)

---

## Positionierung / Überbegriff
- **H1 neu:** „Lerne das hyperrealistische Tätowieren, das niemand als Tattoo erkennt."
- **H1 Desktop kleiner:** Schriftgröße `clamp(32–52px)` → `clamp(28–38px)`, line-height 1.1 → 1.15.
- Hero-Subline auf Überbegriff gehoben + 3 Kurse genannt (Microblading, Lip Blush, Freckles).
- Feature-Titel „Hyperrealistisches Microblading" → „Hyperrealistisches Tätowieren".
- Durchgängig **„Artist"** statt „-innen" (Hero-Trust „30+ ausgebildete Artists", Vorteile-Heading „Deine Vorteile als Artist", Section-Label „Absolvent:innen", FAQ „unserer Artists").
- **12 statt 11 Jahre** perfektioniert.
- **„Behandlung"** statt „Premium-Technik" (Zielgruppe Ärzt:innen).
- Zielgruppe „Ärztinnen/Medizinerinnen" → „Ärztinnen & Mediziner".

## Entfernt
- **Technik-Section komplett raus** (inkl. `TechnikSlider`-Einsatz: „Was unterscheidet eine Kosmetikerin von einer Artistin? Ein Millimeter.").

## Schwarzes Kästchen (Bento, dunkle Box)
- Überschrift → **„Eine Behandlungstechnik mit Zukunft."**
- Text → **„Eine Behandlung liegt bei 350–800 €."** + Kategorie-Satz: „Hyperrealistisches Tätowieren ist kein Trend – es ist eine zeitlose Behandlungsmöglichkeit zur Rekonstruktion, zum Ausgleichen von Asymmetrien und zur natürlichen Verschönerung." (alter Rest gestrichen).

## Benefits (Bento)
- Punkt „Arbeiten, wenn es passt." → **„Finanzielle Unabhängigkeit."** + „Bau dir ein Business auf, das dir Einkommen sichert und dir ermöglicht, ein selbstbestimmtes Leben zu führen."

## Kurse / Schulungen
- **Neue Tabs (Reiter) `AblaufTabs`** für alle 3 Kurse mit vollständigem Ablauf:
  - **Microblading** (4 Tage) – Tag 3 & 4 jetzt je **1 Modell** (vorher 3).
  - **Lip Blush** (3 Tage) – neuer kompletter Lehrplan.
  - **Freckles** (1 Tag) – neuer kompletter Lehrplan.
  - Section-Heading: „Drei Wege ins hyperrealistische Tätowieren."
  - Daten-Array `howItWorks` → `courses` umgebaut.
- **Übersicht „Was für Schulungen bieten wir an?"** (vorher „Zwei Classes. Ein Standard."): 3 Karten **ohne Preise**, „Business-Plan"-Erwähnung entfernt.

## Über Jette
- **Portrait ersetzt:** echtes Foto von chichiclub.co (`jette.webp`) heruntergeladen → `public/images/jette-portrait.webp`; `IMG_JETTE` zeigt darauf (Abschnitt „Präzision trifft Vision").
- **„Dein Investment"-Section** (ROI-Rechner) **direkt unter „Über Jette"** verschoben (vorher nach Testimonials).

## Schulungsstandort
- „mitten im **Grindelviertel**" → „mitten im **Zentrum**".
- Boutique-Text bereits vorhanden (unverändert).

## Fotogalerie (Slider)
- **Eigene Section** direkt unter Schulungsstandort.
- Neue Komponente **`GalleryMarquee`**: full-bleed Endlos-Slider (Marquee, 45s, **Pause bei Hover**, reduced-motion-safe).
- **Headline + Pre-Headline entfernt** („Eindrücke" / „Studio & Schulungen.").
- ⚠️ Bilder sind **Platzhalter** aus `public/images/` – finale Studio-/Schulungsfotos noch offen.

## Testimonials
- Fake-Stimmen (Lisa M., Sarah K. …) ersetzt durch **echte**: **Ella Vey** (Studio Ella Vey, Berlin) + **Karina** (Markant Club).
- Render umgebaut (kein fixer Index mehr), Pull-Quote + Volltext pro Karte.

## FAQ
- „Kann ich davon leben?" verallgemeinert auf „hyperrealistisches Tätowieren" + Abschluss-Satz „Ein Business, das dir nicht nur Einkommen gibt …".
- Neu: „Welche Schulungen bietet ihr an?" + „Was kosten die Schulungen?" (Freckles 1.200 € netto; Microblading/Lip Blush im Gespräch).
- „Brauche ich Vorerfahrung?" → „Artists" statt „Absolventinnen".

## SEO / Meta (`index.html`)
- `<title>`, `description`, OG- und Twitter-Tags auf Überbegriff „hyperrealistisches Tätowieren" + 3 Kurse umgestellt.

---

## Offen / noch zu liefern
- **Preise** für Microblading & Lip Blush (aktuell nur Freckles 1.200 €).
- Finale **Studio-/Schulungsfotos** für Galerie-Slider.
- Weitere **Testimonials** (laut Feedback folgen noch).
- Entscheidung Haupt-Term: „hyperrealistisches Tätowieren" vs. „hyperrealistische Tattoos".
