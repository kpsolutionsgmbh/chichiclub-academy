# Briefing 2 – Kunden-Markierungen auf der Landingpage

> Stand: 14.09.2026 · Quelle: 7 Screenshots mit roten Markierungen (Kunde)
> Abgeglichen mit `src/App.jsx` auf `main` (Commit c7325dd + Fix)
> Die Screenshots zeigen einen älteren Stand. Ein Teil war schon durch die Commits vom 08.06. / 13.06. erledigt.

Legende: ✅ bereits live · 🔧 offen, sofort umsetzbar · ❓ offen, braucht Info vom Kunden

---

## 1. Hero

| # | Markierung | Gewünschte Änderung | Status |
|---|---|---|---|
| 1.1 | Gedankenstrich „Freckles – direkt in Hamburg“ eingekreist | Gedankenstrich raus | ✅ Live: „Freckles. Direkt in Hamburg, …“ |
| 1.2 | „von den Leuten,“ unterstrichen | Unklar. Vermutlich Wording zu salopp. Vorschlag: „von dem Team, das …“ oder „von Jette, die diese Technik …“ | ✅ Umgesetzt (14.09.): „von Jette, die diese Technik als Erste nach Deutschland gebracht hat“ |
| 1.3 | „30+“ unterstrichen (bei „30+ ausgebildete Artists“) | Unklar. Entweder Zahl falsch oder soll konkreter sein | ✅ Umgesetzt (14.09.): keine Zahl mehr, jetzt „Artists in ganz Deutschland ausgebildet“ |

## 2. Kurskarten „Was für Schulungen bieten wir an?“

| # | Markierung | Gewünschte Änderung | Status |
|---|---|---|---|
| 2.1 | Microblading-Text vom 2. Satz bis Ende geklammert, Pfeile zu Lip Blush + Freckles, Notiz „gleich“ | Alle drei Karten sollen denselben Aufbau haben: Satz 1 = Dauer + Was, Satz 2 = Inhalte, Satz 3 = „Starterkit und 6 Monate Mentorship inklusive.“ | ✅ Struktur ist heute in allen drei Karten gleich. Einziger Unterschied: Microblading nennt „Starterkit für 20 Behandlungen“, die anderen nur „Starterkit“. |
| 2.2 | „Support“ unterstrichen, Notiz „Mentorship“ | Support → Mentorship | ✅ Live in allen drei Karten |
| 2.3 | Freckles: „Sommersprossen.“ geklammert | Alt: „1 Tag hyperrealistische Sommersprossen.“ Soll wie die anderen heißen | ✅ Live: „1 Tag hyperrealistisches Tätowieren von Sommersprossen.“ |

Offene Rückfrage zu 2.1: Soll „für 20 Behandlungen“ bei Microblading raus, damit alle drei wirklich identisch sind? Oder bei Lip Blush und Freckles ebenfalls eine Anzahl rein?

## 3. Vorteile, schwarzes Kästchen

| # | Markierung | Gewünschte Änderung | Status |
|---|---|---|---|
| 3.1 | Gedankenstrich „kein Trend – es ist“ eingekreist | Gedankenstrich raus | ✅ Live: „ist kein Trend, sondern eine zeitlose …“ |

## 4. Fotogalerie

| # | Markierung | Gewünschte Änderung | Status |
|---|---|---|---|
| 4.1 | Zweites Bild (Schulung am Behandlungstisch, drei Personen) durchgestrichen | Doppeltes Bild raus | ✅ `academy-portfolio.jpg` wurde am 16.06. entfernt (Commit 6e8a1e1). Slider hat 7 Bilder, keine Dublette mehr. |

Hinweis: Slider läuft weiterhin mit Platzhalterbildern. Finale Studio- und Schulungsfotos stehen noch aus (Briefing 1, Punkt 7).

## 5. FAQ „Reicht die Schulungszeit wirklich aus?“

| # | Markierung | Gewünschte Änderung | Status |
|---|---|---|---|
| 5.1 | Gedankenstrich „1 bis 4 Tage – das ist“ eingekreist | Gedankenstrich raus | ✅ Live: „1 bis 4 Tage. Das ist dein Fundament.“ |
| 5.2 | „Support“ unterstrichen, Notiz „Mentorship“ | Support → Mentorship | ✅ Live: „begleitet von unserem Mentorship“ |

## 6. FAQ „Kann ich davon leben?“

| # | Markierung | Gewünschte Änderung | Status |
|---|---|---|---|
| 6.1 | „550€“ durchgestrichen, Notiz „750 €“ | Microblading-Preisspanne: 450–750 € statt 450–550 € | ✅ Umgesetzt (14.09.): 450–750€ |
| 6.2 | Gedankenstrich „hängt von dir ab – Marketing“ eingekreist | Gedankenstrich raus | ✅ Live: „… hängt von dir ab. Marketing- und Business-Know-how …“ |
| 6.3 | Gedankenstrich „wünschst – mit der Freiheit“ eingekreist | Gedankenstrich raus | ✅ Live: „… wirklich wünschst. Mit der Freiheit, …“ |

## 7. FAQ „Was passiert nach der Schulung?“

| # | Markierung | Gewünschte Änderung | Status |
|---|---|---|---|
| 7.1 | „6 Monate WhatsApp-Support mit 2 festen Ansprechpartnern“ durchgestrichen, neuer Text darüber | Neu: „Du bekommst Zugang zu einem 6-monatigen Mentorship mit Jette und bist Teil der Chi Chi Club Community via WhatsApp.“ | ✅ Live, wortgleich |
| 7.2 | „Qualitätssiegel“ unterstrichen, Notiz „den Namen ‚Chi Chi Club Artist‘“ | Qualitätssiegel → den Namen „Chi Chi Club Artist“ | ✅ Live |

## 8. FAQ „Was kosten die Schulungen?“

| # | Markierung | Gewünschte Änderung | Status |
|---|---|---|---|
| 8.1 | „Die Preise für Microblading und Lip Blush besprechen wir im kostenlosen Beratungsgespräch – passend zu deinem Ziel.“ durchgestrichen, Notiz „Die Preise sollen offengelegt sein.“ | Alle drei Kurspreise konkret nennen, kein Verweis aufs Gespräch | 🟡 Teilweise (14.09.): Lip Blush 4.500 € netto und Freckles 1.200 € netto stehen drin. Microblading-Preis fehlt noch, bis dahin Verweis aufs Gespräch. |

---

## Zusammenfassung

**Umgesetzt am 14.09.**
- 1.2 Hero: „von Jette, die …“
- 1.3 Hero: „Artists in ganz Deutschland ausgebildet“ statt „30+“
- 6.1 FAQ: 450–750 €
- 8.1 FAQ: Lip Blush 4.500 € netto ergänzt

**Braucht noch Info vom Kunden**
- 8.1 Microblading-Preis (netto)
- 2.1 „Starterkit für 20 Behandlungen“ nur bei Microblading: angleichen, in welche Richtung?

**Schon erledigt (aus früheren Commits)**
- Alle Gedankenstriche (1.1, 3.1, 5.1, 6.2, 6.3)
- Support → Mentorship überall (2.2, 5.2)
- Kurskarten-Struktur angeglichen (2.1, 2.3)
- Galerie-Dublette raus (4.1)
- FAQ „Nach der Schulung“ neuer Text + „Chi Chi Club Artist“ (7.1, 7.2)
