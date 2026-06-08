# Briefing – Änderungen Landingpage Chi Chi Club Academy

> Stand: 07.06.2026 · Quelle: Kunden-Feedback · Status: **nur dokumentiert, noch nicht umgesetzt**
> Datei: `src/App.jsx` (Single-Page React, ~3093 Zeilen)

---

## 0. Globale Änderungen (gelten überall auf der Page)

- **Von 1 auf 3 Kurse erweitern:** Freckles, Microblading, **Lip Blush** (Lip Blush ist jetzt ready → mit auf die LP).
- **Positionierung allgemeiner machen:** Nicht nur „Microblading", sondern als **„hyperrealistisches Tätowieren"** sprechen.
- **Sprache vereinheitlichen:** immer **„Artist"** sagen statt gegenderter „-innen" / „Künstlerin".
- **12 Jahre** statt 11 Jahre perfektioniert (aktuell: `App.jsx:2569`).
- **„Behandlung"** statt **„Premium-Technik"** (aktuell: `App.jsx:2471`).
- **Technik-Section komplett raus** (Komponente `TechnikSlider`, `App.jsx:183`; Einsatz in Section um `App.jsx:2519–2547`).

---

## 1. Hero

- **Neue H1:** „Lerne das hyperrealistische Tätowieren, das niemand als Tattoo erkennt."
- Kurslänge erwähnen: **3 Tage**.

---

## 2. Schwarzes Kästchen „Eine Behandlungstechnik mit Zukunft"

- Überschrift: **„Eine Behandlungstechnik mit Zukunft"**.
- Text: **„Eine Behandlung liegt bei 350–800 €."**
- **Den Rest darunter streichen.**
- Ergänzender Satz: „Hyperrealistisches Tätowieren ist kein Trend – es ist eine zeitlose Behandlungsmöglichkeit zur Rekonstruktion, zum Ausgleichen von Asymmetrien und zur natürlichen Verschönerung."

---

## 3. Benefits / Vorteile

- Punkt **„Arbeiten, wenn es passt. 2–3 Behandlungen pro Woche reichen, um gut zu verdienen…"** ersetzen durch:
  - **Titel:** „Finanzielle Unabhängigkeit"
  - **Text:** „Bau dir ein Business auf, das dir Einkommen sichert und dir ermöglicht, ein selbstbestimmtes Leben zu führen."
- Zielgruppe ansprechen: **„Ärztinnen und Mediziner"**.

---

## 4. Kurse / Schulungen-Übersicht

- **Reiter (Tabs)** anlegen, in denen für **alle 3 Kurse** der jeweilige **Ablauf** gezeigt wird.
- Neue Section **„Was für Schulungen bieten wir an?"** → alle Schulungen auflisten, **aber ohne Preise** in der Übersicht.
- **Preise** dürfen im **FAQ** sichtbar sein.

### Lehrpläne / Ablauf

**Freckles – 1 Tag**
- Hauttypen
- Gesundheit & Hygiene
- Pigmente + Farblehre
- Nadeltheorie
- Üben an Silikonhaut
- 2 Modelle
- Foto- & Video-Crashkurs
- Abschlussgespräch und Q&A

**Microblading** (bestehender Ablauf bleibt, nur anpassen):
- Tag 3: **1 Modell**
- Tag 4: **1 Modell**

**Lip Blush – 3 Tage**
- **Tag 1:** Hautkunde · Gesundheit & Hygiene · Maschinenlehre · Nadeln & Materialien kennenlernen · Rechtliches & Einverständniserklärung · Live Demo · Schattierungstechniken · Üben an Silikonhaut
- **Tag 2:** Farblehre · Pigmente verstehen und mixen · Lip Mapping & Formgestaltung · Mapping & Schattierung an Silikonhaut üben · Kundenservice & holistic approach · Kundengewinnung · Social Media & Marketing
- **Tag 3:** Setup und Vorbereitung · Lip Blush step by step · 1 Modell · Fotos, Videos & Reels bearbeiten · Abschlussgespräch + Q&A

---

## 5. Section „Classes" / „Nächstes Level"

- **Business-Plan-Punkt entfernen.**
- Nur behalten: **„Hier kommt das nächste Level."**
- Ergänzen: **„Du hast die Basis raus."**

---

## 6. Über uns / Über Jette

- **Portrait von Jette** einbauen.
- **„Dein Investment"-Section direkt unter „Über uns / Über Jette"** platzieren.

---

## 7. Schulungsstandort / Studio

- **Fotogalerie** unter dem Schulungsstandort: Bilder vom **Studio** und von den **Schulungen**.
- Standort-Text korrigieren: **nicht „Grindelviertel", sondern „mitten im Zentrum"** (aktuell: `App.jsx:2871`).
- **Boutique-Charakter** hervorheben:
  > „Helle, moderne Räume mit professionellem Equipment. Alles, was du zum Lernen brauchst, ist vor Ort."

---

## 8. „Kann ich davon leben?"

- Verallgemeinern als **hyperrealistisches Microblading**.
- Text:
  > „Eine Microblading-Behandlung kostet zwischen 450–550 € und dauert 2–3 Stunden. Nach ca. 10 Kundinnen hast du dein Investment zurück. Wie schnell du dahin kommst, hängt von dir ab. Du bekommst von uns auch Marketing- und Business-Know-how."
- Abschluss-Satz:
  > „Ein Business, das dir nicht nur Einkommen gibt, sondern ein Leben, das du dir wirklich wünschst – mit der Freiheit, es so zu gestalten, wie es zu dir passt."

---

## 9. Testimonials / Absolventen

> „Meine Erfahrung mit der Chi Chi Academy"
> Weitere Testimonials werden noch zugeschickt.

**Testimonial 1 – Ella Vey (Studio Ella Vey, Berlin)**
> Ich kann die Chi Chi Academy wirklich nur von Herzen empfehlen! 🤍
>
> Man bekommt hier nicht nur wahnsinnig viel Theorie, sondern auch jede Menge Praxis an die Hand – und zwar so, dass wirklich jede einzelne Frage beantwortet wird. Der Umgang ist super herzlich, die Atmosphäre im Chi Chi Club total schön, man fühlt sich sofort wohl und trotzdem auch individuell gesehen.
>
> Für mich war die Ausbildung ein absoluter Gamechanger: Ich habe gelernt, Microblading so präzise und hochwertig umzusetzen, dass es sich klar von schlechtem Permanent Make-up abhebt. Und das Beste daran? Bis heute macht mir die Arbeit unglaublich viel Spaß – und meine Kund:innen sind durchweg glücklich mit ihren Ergebnissen.
>
> Danke an das ganze Team – ihr zeigt wirklich, wie man Microblading auf höchstem Niveau lernt und lebt.

**Testimonial 2 – Karina (Markant Club)**
> Im Februar 2025 habe ich im ChiChi Club meine Ausbildung gemacht und ich bin so unglaublich dankbar dafür! Es waren vier aufregende, spannende und lehrreiche Tage mit zwei weiteren wundervollen Schülerinnen. Jette ist eine fantastische Lehrerin und bringt einem ihre Kunst auf ganz respektvolle Art bei. Die Atmosphäre in ihrem super stilvollen Club ist mitreißend und inspirierend. Seitdem hat sich bei mir eine Menge getan. Ich durfte schon sehr viel arbeiten und bin jetzt offiziell Cosmetic Tattooing Artist, habe mir in Berlin einen eigenen Raum in einem Cosmetic Studio gemietet und biete dort meine Behandlungen an.
>
> Alles hat sich für mich ins Positive gewandelt. Ihr Stil, ihre Art und die Ausbildung bei ihr haben mich genau auf diesen Weg gebracht. Die Reise hat gerade erst begonnen, aber es fühlt sich großartig an! Meine Kundinnen haben Lust auf das, was ich mache, und ich könnte gerade nicht glücklicher sein. Etwas Neues zu beginnen ist oft nicht leicht, aber mit dieser Ausbildung im ChiChi hat man alle Grundlagen geschaffen, um loszulegen! Der Rest liegt in jedem selbst, etwas daraus zu machen.
>
> Danke, dass ich durch dich diesen Start hatte – es bedeutet mir wirklich viel, liebe Jette.

---

## 10. Branding

- **„Chi Chi Club Academy"-Logo** verwenden.

---

## Offene Punkte / Rückfragen

- Microblading-Preis: Hero-/Übersicht nennt **350–800 €** (allgemein „eine Behandlung"), Abschnitt „Kann ich davon leben?" nennt **450–550 €** (konkret Microblading). → bewusst so gewollt? Bitte bestätigen.
- Welche konkreten Bilder aus `Images/` sollen in die **Fotogalerie** (Studio + Schulungen)?
- **Preise** für alle 3 Kurse → fehlen noch (nicht in Übersicht, aber im FAQ).
- Restliche **Testimonials** folgen laut Feedback noch.
