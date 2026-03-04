# Corporate Identity — Chi Chi Club Academy

---

## Design-Philosophie

Das Design des Chi Chi Club folgt dem gleichen Prinzip wie die Arbeit: Präzise, natürlich, nie zu viel. Jedes visuelle Element soll sich anfühlen wie die Marke selbst — ruhig, hochwertig, mit klarer Kante. Kein Schnörkel, kein Überfluss. Alles hat einen Grund.

---

## Farben

Drei Farben. Mehr braucht es nicht.

| Farbe | Name | Hex | Verwendung |
|-------|------|-----|------------|
| ![#DFD9CD](https://via.placeholder.com/16/DFD9CD/DFD9CD.png) | **Chi Chi Beige** | `#DFD9CD` | Primärfarbe. Hintergründe, Flächen, Sektionen. Die Farbe, die den Chi Chi Club sofort erkennbar macht. Warm, sandig, nie grell. |
| ![#F8F7F3](https://via.placeholder.com/16/F8F7F3/F8F7F3.png) | **Ivory** | `#F8F7F3` | Sekundäre Hintergrundfarbe. Für hellere Sektionen, Karten, Content-Bereiche. Weicher als reines Weiß, passt zum warmen Gesamtbild. |
| ![#000000](https://via.placeholder.com/16/000000/000000.png) | **Black** | `#000000` | Text, Buttons, Icons, Linien. Schwarz als Kontrast — klar, direkt, ohne Kompromiss. |

### Farbregeln

- **Kein reines Weiß (#FFFFFF) als Hintergrund.** Ivory (#F8F7F3) ist das hellste, was verwendet wird. Reines Weiß wirkt kalt und klinisch — das ist nicht Chi Chi Club.
- **Kein Grau als Textfarbe.** Text ist Schwarz. Punkt. Keine abgeschwächten Grautöne für Body-Text.
- **Keine Akzentfarben.** Kein Gold, kein Rosé, kein Pastellrosa. Die Marke lebt von der Reduktion auf drei Farben. Wenn etwas hervorstechen soll, passiert das durch Kontrast (Schwarz auf Beige), nicht durch eine zusätzliche Farbe.
- **Bilder liefern die Farbe.** Die Fotos der Arbeit, des Studios und der Ergebnisse bringen Wärme und Leben ins Design. Die Farbpalette bleibt neutral, damit die Bilder wirken können.

### Farbkombinationen

| Kombination | Anwendung |
|-------------|-----------|
| Schwarz auf Ivory | Standard-Text auf hellem Hintergrund |
| Schwarz auf Chi Chi Beige | Text auf Beige-Sektionen, Headlines |
| Ivory auf Schwarz | Invertierter Button-Text, Dark Sections |
| Chi Chi Beige auf Schwarz | Sparsam — z.B. für Hover-States oder subtile Akzente |

---

## Typografie

Zwei Schriften. Eine für Headlines, eine für alles andere.

### Pragmatica Ext Book Bold
**Verwendung:** Headlines, Überschriften, Hero-Text, Button-Labels, Kursbezeichnungen.

Die Headline-Schrift ist breit (Extended), geometrisch und selbstbewusst — aber durch die Book-Bold-Gewichtung nicht erdrückend. Sie nimmt sich Raum, ohne zu schreien. Genau wie die Marke.

- Headlines: Pragmatica Ext Book Bold
- Versalien (Großbuchstaben) für kurze Headlines erlaubt, aber nicht als Standard
- Kein Tracking über +50 — die Schrift braucht keinen zusätzlichen Buchstabenabstand

### Roboto Mono Regular
**Verwendung:** Fließtext, Beschreibungen, Captions, Preise, Daten, Navigation, Footer.

Monospaced als Body-Schrift ist ungewöhnlich — und genau deshalb passend. Es gibt dem Chi Chi Club einen technischen, präzisen Charakter, der zum Handwerk passt. Jeder Buchstabe hat den gleichen Platz. Nichts ist zufällig.

- Body-Text: Roboto Mono Regular
- Kein Kursiv — wenn Betonung nötig ist, Bold verwenden oder durch Layout lösen
- Schriftgröße Body: mindestens 14px (Web), 16px empfohlen für Lesbarkeit bei Mono-Fonts

### Typografie-Regeln

- **Keine dritte Schrift.** Nie. Auch nicht für Zitate, Preise oder Specials.
- **Keine handschriftlichen oder Script-Fonts.** Kein „persönlicher Touch" durch Brush-Schriften. Der persönliche Touch kommt durch den Inhalt, nicht durch die Schrift.
- **Keine Schatten, keine Outlines, keine Texteffekte.** Der Text steht für sich.
- **Zeilenhöhe Body:** 1.5–1.7 für Roboto Mono (Mono-Schriften brauchen mehr Luft)
- **Zeilenhöhe Headlines:** 1.1–1.2 für Pragmatica Ext (eng, aber lesbar)

---

## Formen & Kanten

### Alles eckig. Keine Rundungen.

Das ist keine Stilfrage, das ist Markenidentität. Der Chi Chi Club ist präzise, klar, direkt. Abgerundete Ecken wirken weich, freundlich, harmlos — das ist nicht der Vibe. Eckig heißt: bewusst, entschieden, mit klarer Kante.

**Eckig:**
- Buttons: `border-radius: 0`
- Bilder: `border-radius: 0`
- Karten / Cards: `border-radius: 0`
- Input-Felder: `border-radius: 0`
- Container / Sektionen: `border-radius: 0`
- Thumbnails: `border-radius: 0`

**Konkret — kein Element im gesamten Design hat abgerundete Ecken.** Nicht 2px, nicht 4px, nicht 8px. Null.

### Buttons

| Eigenschaft | Wert |
|-------------|------|
| Hintergrund | `#000000` (Schwarz) |
| Textfarbe | `#F8F7F3` (Ivory) |
| Border-Radius | `0` |
| Font | Pragmatica Ext Book Bold |
| Textgröße | 14–16px |
| Padding | `12px 24px` (oder äquivalent) |
| Hover | Invertiert: Ivory Hintergrund, Schwarzer Text, 1px Schwarz Border |
| Text-Transform | Uppercase erlaubt, aber nicht zwingend |

### Primärer CTA

Der primäre Call-to-Action für die Academy lautet:

> **Kostenlos beraten lassen**

Nicht „Jetzt buchen". Nicht „Platz sichern". Nicht „Mehr erfahren". Der CTA ist niedrigschwellig, einladend und druckfrei — passend zur Marke. Eine Beratung ist kein Commitment. Es ist ein Gespräch.

**CTA-Regeln:**
- „Kostenlos beraten lassen" ist der Standard-CTA auf allen Academy-Seiten, Ads und Landing Pages
- Sekundäre CTAs (z.B. auf Kursdetail-Seiten, wo die Entscheidung schon weiter ist): „Kurs buchen" oder „Platz anfragen"
- Keine Dringlichkeits-CTAs: Kein „Nur noch X Plätze", kein „Jetzt sichern", kein Countdown

---

## Bildsprache

### Stil

- **Echt.** Echte Fotos aus dem Studio, von echten Behandlungen, echten Teilnehmerinnen. Kein Stock.
- **Warm.** Natürliches Licht oder warmes Kunstlicht. Keine kalten, blauen Töne. Keine Neonbeleuchtung.
- **Clean.** Aufgeräumte Kompositionen. Wenig Ablenkung im Hintergrund. Der Fokus liegt auf der Arbeit oder den Menschen.
- **Close-ups.** Die Technik ist das Verkaufsargument. Zeig die Härchen. Zeig die Natürlichkeit. Zeig das Detail.

### Bildformat

- **Eckig.** Keine abgerundeten Ecken auf Bildern. Nie.
- **Kein Overlay-Text auf Bildern** — oder wenn, dann minimal und in Pragmatica Ext, Schwarz oder Ivory, mit genug Kontrast.
- **Keine Filter.** Keine Instagram-Filter, keine starke Farbkorrektur. Die Arbeit sieht in Realität gut aus — das reicht.
- **Keine Collagen.** Ein Bild pro Fläche. Wenn mehrere Bilder gezeigt werden: Karussell oder Grid, nicht zusammengeschnitten.

---

## Layout-Prinzipien

### Weißraum ist Design

Der Chi Chi Club braucht Luft. Viel Luft. Elemente stehen nicht eng beieinander. Sektionen haben großzügige Abstände. Der Weißraum (oder Beige-Raum) ist kein leerer Platz — er ist Teil der Ästhetik.

- Sektions-Abstand: mindestens 80px, besser 120px
- Elemente innerhalb einer Sektion: mindestens 24px Abstand
- Text darf nie an den Rand eines Containers stoßen — immer Padding

### Grid

- Klares Grid-System (12 Spalten auf Desktop)
- Inhalte zentriert oder linksbündig — nie zentriert UND linksbündig auf derselben Seite
- Mobile: 1 Spalte, großzügige Abstände beibehalten

### Hierarchie

- Eine Headline pro Sektion. Nicht zwei.
- Headline → Subline → Body → CTA. In dieser Reihenfolge. Keine Abweichung.
- CTAs stehen am Ende einer Sektion, nicht mittendrin.

---

## Zusammenfassung — Design-DNA

| Eigenschaft | Chi Chi Club | Nicht Chi Chi Club |
|-------------|-------------|-------------------|
| Ecken | Eckig, immer | Abgerundet |
| Farben | Beige, Ivory, Schwarz | Bunt, Pastell, Gold |
| Schriften | Pragmatica Ext + Roboto Mono | Script-Fonts, Handschrift, Serif |
| Bildsprache | Echt, warm, clean | Stock, Filter, Collagen |
| Layout | Viel Weißraum, klar strukturiert | Vollgepackt, überladen |
| CTA | „Kostenlos beraten lassen" | „JETZT SICHERN!!!" |
| Emojis | 🤍 ✨ (maximal 1–2) | 🔥💪🚀💯 |
| Ton | Leise Stärke | Laut, aggressiv, salesy |

---

## CSS-Referenz (Quick Copy)
```css
:root {
  --chi-chi-beige: #DFD9CD;
  --ivory: #F8F7F3;
  --black: #000000;

  --font-headline: 'Pragmatica Ext', sans-serif;
  --font-headline-weight: 700; /* Book Bold */
  --font-body: 'Roboto Mono', monospace;
  --font-body-weight: 400; /* Regular */

  --border-radius: 0;
  --section-spacing: 120px;
  --element-spacing: 24px;
  --body-line-height: 1.6;
  --headline-line-height: 1.15;
}

/* Buttons */
.btn-primary {
  background-color: var(--black);
  color: var(--ivory);
  border: 1px solid var(--black);
  border-radius: var(--border-radius);
  font-family: var(--font-headline);
  font-weight: var(--font-headline-weight);
  font-size: 14px;
  padding: 12px 24px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background-color: var(--ivory);
  color: var(--black);
  border: 1px solid var(--black);
}

/* Images */
img {
  border-radius: var(--border-radius);
}

/* Inputs */
input, textarea, select {
  border-radius: var(--border-radius);
  border: 1px solid var(--black);
  font-family: var(--font-body);
}

/* Cards */
.card {
  border-radius: var(--border-radius);
  border: 1px solid var(--black);
}