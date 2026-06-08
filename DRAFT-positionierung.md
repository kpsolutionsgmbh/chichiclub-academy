# Draft – Repositionierung: vom Microblading zum Überbegriff „Hyperrealistisches Tätowieren"

> Stand: 07.06.2026 · Status: **Draft zur Abstimmung** · Quelle: Kunden-Feedback
> Kern-Idee: Die Page kommuniziert aktuell fast nur **Microblading**. Sie soll künftig den **Überbegriff** kommunizieren – Microblading ist nur **eine** von mehreren Techniken darunter.

---

## 1. Das Problem heute

Die Page verkauft eine **einzelne Technik** (Microblading). Damit:
- wirkt das Angebot kleiner, als es ist,
- passt Lip Blush / Freckles nicht sauber rein,
- ist die Marke an einen Trend-Begriff gekoppelt statt an eine zeitlose Kategorie.

**Belege im Code** (`src/App.jsx`):
- `:2233` „…4-tägige Intensivausbildung in hyperrealistischem **Microblading**."
- `:2362` Kurs-Titel „**Microblading** Fundamentals"
- `:2580` Feature „Hyperrealistisches **Microblading**"
- SEO-Title/OG in `index.html` rein auf Microblading/Freckle ausgerichtet.

---

## 2. Die neue Sprach-Architektur

```
ÜBERBEGRIFF (Marke / Headline-Ebene)
└── Hyperrealistisches Tätowieren  ·  Hyperrealistische Tattoos
    │   "Tätowieren, das niemand als Tattoo erkennt."
    │
    ├── Microblading   (Augenbrauen)
    ├── Lip Blush      (Lippen)
    └── Freckles       (Sommersprossen)
```

**Regeln:**
1. **Headline / Hero / Marke** → immer Überbegriff: *hyperrealistisches Tätowieren* / *hyperrealistische Tattoos*.
2. **Einzelne Technik nennen** → nur dort, wo es konkret um den jeweiligen Kurs geht (Kurs-Karten, Lehrpläne, FAQ-Preise).
3. **Kategorie-Framing** statt Trend: „keine Trend-Technik, sondern eine zeitlose Behandlungsmöglichkeit zur Rekonstruktion, zum Ausgleich von Asymmetrien und zur natürlichen Verschönerung."
4. **Immer „Artist"** statt „-innen" / „Künstlerin".

---

## 3. Begriffs-Set (einheitlich verwenden)

| Verwenden | Nicht (mehr) verwenden |
|---|---|
| Hyperrealistisches Tätowieren | „nur Microblading" als Dach-Begriff |
| Hyperrealistische Tattoos | „Permanent Make-up" (Abgrenzung) |
| Behandlung / Behandlungstechnik | „Premium-Technik" |
| Artist / Cosmetic Tattooing Artist | Künstlerin / -innen-Formen |
| Technik (im Kurs-Kontext) | — |

---

## 4. Vorher → Nachher (Kern-Copy)

**Hero H1**
- Vorher: implizit Microblading-fokussiert
- **Nachher:** „Lerne das hyperrealistische Tätowieren, das niemand als Tattoo erkennt."

**Hero-Subline (`:2233`)**
- Vorher: „…Intensivausbildung in hyperrealistischem **Microblading**…"
- **Nachher:** „…Intensivausbildung im **hyperrealistischen Tätowieren** – von den Leuten, die diese Technik als Erste nach Deutschland gebracht haben."

**Feature-Block (`:2580`)**
- Vorher: Titel „Hyperrealistisches **Microblading**"
- **Nachher:** Titel „Hyperrealistisches **Tätowieren**" – Text bleibt sinngemäß (so tätowieren, dass es von „echt" nicht zu unterscheiden ist).

**Schwarzes Kästchen**
- **Nachher:** „Eine Behandlungstechnik mit Zukunft." + „Eine Behandlung liegt bei 350–800 €." + Kategorie-Satz (zeitlos, Rekonstruktion, Asymmetrie-Ausgleich, natürliche Verschönerung). Rest darunter streichen.

**Zielgruppe Ärztinnen/Mediziner (`:2471`)**
- Vorher: „Die **Premium-Technik**, die zu deinem Anspruch passt."
- **Nachher:** „Die **Behandlung**, die zu deinem Anspruch passt."

**Erfahrung (`:2569`)**
- Vorher: „…in **11 Jahren** perfektioniert…"
- **Nachher:** „…in **12 Jahren** perfektioniert…"

---

## 5. Kurs-Ebene (hier Technik konkret nennen)

Überschrift: **„Was für Schulungen bieten wir an?"** → 3 Kurse als Reiter/Tabs, **ohne Preise** in der Übersicht (Preise nur im FAQ):

- **Microblading** – Augenbrauen · 4 Tage
- **Lip Blush** – Lippen · 3 Tage
- **Freckles** – Sommersprossen · 1 Tag

Gemeinsame Klammer über den Tabs: „Drei Wege ins hyperrealistische Tätowieren."

---

## 6. Auswirkung auf Meta / SEO (`index.html`)

- `<title>` und OG/Twitter aktuell rein „Microblading & Freckle". → auf Überbegriff heben, z. B.:
  - Title: „Chi Chi Club Academy – Ausbildung im hyperrealistischen Tätowieren · Hamburg"
  - Microblading / Lip Blush / Freckles als Unterpunkte/Keywords belassen.

---

## 7. Offene Punkte

- Finaler Wording-Knopf: „hyperrealistisches Tätowieren" **vs.** „hyperrealistische Tattoos" als primärer Marken-Begriff – einen als Haupt-Term festlegen, anderen als Synonym.
- Preis-Konsistenz: 350–800 € (allgemein) vs. 450–550 € (Microblading konkret) – bewusst gewollt?
- Soll „Permanent Make-up" aktiv als Negativ-Abgrenzung genutzt werden (wie im Testimonial), oder ganz vermeiden?
