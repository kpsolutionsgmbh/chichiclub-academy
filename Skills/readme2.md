# Chi Chi Club Academy — Brand System

## Übersicht

Dieses Repo enthält das komplette Brand- und Marketing-System für die Chi Chi Club Academy. Jede Datei hat eine klare Funktion. Zusammen bilden sie die Grundlage für sämtliche Kommunikation — Ads, Content, Landing Pages, E-Mails, Briefings.

---

## Dateien & was sie tun

### `brand-voice.md`
**Die Stimme der Marke.**
Definiert, wie der Chi Chi Club klingt — und wie nicht. Tonalität, Sprachregeln, Beispiel-Formulierungen, Dos & Don'ts. Jeder, der Texte für den Chi Chi Club schreibt (ob Mensch oder AI), muss diese Datei gelesen haben.

Enthält:
- Markenidentität und Positionierung
- Tonalitäts-Framework („Leise Stärke")
- Sprachregeln (Du-Ansprache, Emoji-Nutzung, Satzlänge)
- „Wir sagen" / „Wir sagen NICHT" mit Beispielen
- Differenzierung zum Wettbewerb
- Beispiel-Ads in der richtigen Tonalität
- Kanal-spezifische Anpassungen (Instagram, Stories, Website, Newsletter)
- Dos & Don'ts Schnellreferenz

### `target-audience.md`
**Wer kauft — und warum.**
Detaillierte Zielgruppenanalyse mit drei Segmenten, Persona-Steckbriefen und der kompletten Customer Journey. Die Grundlage für jedes Targeting, jede Ad und jeden Text.

Enthält:
- Marktkontext (Microblading-Ausbildungsmarkt DACH)
- 3 Zielgruppen-Segmente mit vollständigen Profilen (Demografie, Beruf, Psychografie, Einwände, Kaufmotivation)
  - Segment A: Die etablierte Kosmetikerin (50–60%)
  - Segment B: Die Beauty-Unternehmerin (20–25%)
  - Segment C: Die ambitionierte Quereinsteigerin (15–20%)
- 3 Persona-Steckbriefe (Lisa, Sarah, Anna)
- Customer Journey: Awareness → Consideration → Decision → Post-Purchase
- Wachstumspotenziale und unerschlossene Segmente
- Targeting-Empfehlungen für Meta Ads und Google Ads (Interessen, Keywords, Audiences)

### `product.md`
**Was wir verkaufen — im Detail.**
Komplette Produktbeschreibung beider Schulungen. Ablauf, Inhalte, Starterkit, Ergebnisse, Investition. Die eine Datei, die du brauchst, wenn du wissen willst, was die Academy genau anbietet.

Enthält:
- Vergleichstabelle beider Schulungen
- Microblading Fundamentals: Tag-für-Tag-Ablauf, Starterkit-Inhalt, Modelphase, Ergebnisse, Investition
- Freckle Masterclass: Ablauf, Ergebnisse, Investition
- Coming Soon: Lip Blush, Lash & Browlifting
- 6 Gründe für die Chi Chi Club Academy
- ROI-Rechnung mit Break-Even-Analyse

### `ai-briefing.md`
**Wie die AI reden soll — und wie nicht.**
Das wichtigste Dokument für die Content-Produktion. 10 Regeln, die sicherstellen, dass AI-generierter Content nicht nach AI klingt. Mit verbotenen Phrasen, Vorher/Nachher-Beispielen und einer Checkliste.

Enthält:
- Liste verbotener AI-Floskeln
- 10 Regeln für natürliche Sprache
- Vorher/Nachher-Vergleiche (AI vs. Chi Chi Club)
- Checkliste vor jedem Output
- 3 Referenz-Beispiele (Caption, Ad, E-Mail)

---

## Wie du die Dateien benutzt

### Für AI-gestütztes Copywriting (Claude, ChatGPT, etc.)

Lade alle vier Dateien als Kontext hoch. Die AI braucht:
1. **`ai-briefing.md`** — damit sie weiß, wie sie NICHT klingen soll
2. **`brand-voice.md`** — damit sie weiß, wie sie klingen SOLL
3. **`target-audience.md`** — damit sie weiß, FÜR WEN sie schreibt
4. **`product.md`** — damit sie weiß, WORÜBER sie schreibt

Reihenfolge ist wichtig. Das AI-Briefing zuerst, weil es die Grundregeln setzt. Dann Brand Voice für den Ton. Dann Zielgruppe und Produkt für den Inhalt.

**Beispiel-Prompt:**
```
Du bist Copywriter für die Chi Chi Club Academy. 
Lies zuerst das AI-Briefing, dann die Brand Voice, 
dann die Zielgruppe, dann das Produkt.

Schreibe 3 Instagram Captions für den nächsten 
Microblading Fundamentals Kurs. 
Zielgruppe: Segment A (etablierte Kosmetikerin).
Tonalität: Leise Stärke. Keine AI-Floskeln.
```

### Für menschliche Copywriter / Content Creator

Gleiche Dateien, gleiche Reihenfolge. Das AI-Briefing ist auch für Menschen nützlich — die Regeln gegen generische Sprache gelten universell.

### Für Ad-Kampagnen

1. Zielgruppe aus `target-audience.md` auswählen (Segment A, B oder C)
2. Passende Persona als Referenz nehmen (Lisa, Sarah oder Anna)
3. Produktinfos aus `product.md` ziehen
4. Text in der Tonalität aus `brand-voice.md` schreiben
5. Gegen `ai-briefing.md` Checkliste prüfen

### Für Landing Pages / Website

- Produktinfos → `product.md`
- Tonalität → `brand-voice.md`
- Zielgruppen-Ansprache → `target-audience.md` (Einwände & Entkräftung als FAQ-Grundlage)

---

## Ordnerstruktur
```
chi-chi-club-academy/
├── README.md              ← Du bist hier
├── brand-voice.md         ← Tonalität & Markenidentität
├── target-audience.md     ← Zielgruppen & Personas
├── product.md             ← Produktbeschreibungen
└── ai-briefing.md         ← AI-Sprachregeln & Checkliste
```

---

## Wichtige Eckdaten (Schnellreferenz)

| Info | Detail |
|------|--------|
| **Brand** | Chi Chi Club Academy |
| **Gründerin** | Jette Scherzer |
| **Standort** | Hamburg (Amelungstraße 5, 20354) |
| **Produkte** | Microblading Fundamentals (4.500€, 4 Tage), Freckle Masterclass (1.200€, 1 Tag) |
| **Zielgruppe** | Frauen, 25–45, Beauty-Branche / Quereinsteigerinnen, DACH |
| **Tonalität** | Leise Stärke — selbstbewusst, warm, präzise, nie laut |
| **Instagram** | @chi.chi.club · @jette.scherzer · @chichiclub.academy |
| **Website** | chichiclub.co |

---

*Stand: März 2026 · Erstellt auf Basis des Onboarding-Dokuments, der Webseite und der Instagram-Profile.*