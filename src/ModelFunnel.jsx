import React, { useEffect, useState } from "react";

const TREATMENTS = [
  { value: "microblading", label: "Microblading", desc: "Hyperrealistische Augenbrauen" },
  { value: "freckles", label: "Freckles", desc: "Natürliche Sommersprossen" },
  { value: "lipblush", label: "Lip Blush", desc: "Sanfte Lippenfarbe" },
];
const tLabel = (v) => TREATMENTS.find((t) => t.value === v)?.label || v;
const joinList = (arr) => {
  const l = arr.map(tLabel);
  if (l.length <= 1) return l[0] || "";
  return l.slice(0, -1).join(", ") + " und " + l[l.length - 1];
};

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap');
  .mf-root {
    --black: #000000; --ivory: #F8F7F3; --chi-chi-beige: #E8E4DA;
    --font-body: 'Roboto Mono', monospace;
    --font-headline: 'Pragmatica Extended', 'Pragmatica Ext', sans-serif;
    position: fixed; inset: 0; z-index: 2000; background: var(--ivory); color: var(--black);
    font-family: var(--font-body); overflow-y: auto; -webkit-font-smoothing: antialiased;
    animation: mfIn 0.25s ease;
  }
  .mf-root *, .mf-root *::before, .mf-root *::after { box-sizing: border-box; }
  .mf-root button, .mf-root input { font-family: var(--font-body); color: var(--black); border-radius: 0; -webkit-appearance: none; appearance: none; }
  .mf-root button { cursor: pointer; }
  @keyframes mfIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes mfStep { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

  .mf-top { position: sticky; top: 0; background: var(--ivory); z-index: 2; }
  .mf-bar { display: flex; align-items: center; justify-content: space-between; padding: 18px 24px; }
  .mf-brand { font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; opacity: 0.6; }
  .mf-icon { background: none; border: none; padding: 6px; display: flex; align-items: center; gap: 6px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; }
  .mf-progress { height: 2px; background: var(--chi-chi-beige); }
  .mf-progress > div { height: 100%; background: var(--black); transition: width 0.35s ease; }

  .mf-body { max-width: 620px; margin: 0 auto; padding: 48px 24px 80px; }
  .mf-step { animation: mfStep 0.35s ease; }
  .mf-kicker { font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; opacity: 0.55; margin: 0 0 14px; }
  .mf-h { font-family: var(--font-headline); font-weight: 700; font-size: clamp(24px, 4vw, 34px); line-height: 1.15; margin: 0 0 10px; }
  .mf-sub { font-size: 13px; line-height: 1.65; opacity: 0.65; margin: 0 0 32px; }
  .mf-p { font-size: 14px; line-height: 1.7; margin: 0 0 16px; }

  .mf-opts { display: flex; flex-direction: column; gap: 10px; }
  .mf-opt { width: 100%; text-align: left; background: transparent; border: 1px solid rgba(0,0,0,0.2); padding: 18px 20px; display: flex; align-items: center; justify-content: space-between; gap: 16px; transition: all 0.15s ease; }
  .mf-opt:hover { border-color: var(--black); }
  .mf-opt.sel { border-color: var(--black); background: var(--chi-chi-beige); }
  .mf-opt b { display: block; font-family: var(--font-headline); font-weight: 700; font-size: 16px; margin-bottom: 3px; }
  .mf-opt span.d { font-size: 12px; line-height: 1.6; opacity: 0.65; display: block; }
  .mf-opt .price { font-size: 12px; margin-top: 10px; display: block; }
  .mf-check { width: 20px; height: 20px; border: 1px solid var(--black); flex-shrink: 0; display: flex; align-items: center; justify-content: center; transition: background 0.15s ease; }
  .mf-opt.sel .mf-check, .mf-consent.sel .mf-check { background: var(--black); }

  .mf-yn { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .mf-yn button { background: transparent; border: 1px solid rgba(0,0,0,0.2); padding: 16px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; transition: all 0.15s ease; }
  .mf-yn button:hover { border-color: var(--black); }
  .mf-yn button.sel { background: var(--black); color: var(--ivory); border-color: var(--black); }
  .mf-row { padding: 18px 0; border-bottom: 1px solid rgba(0,0,0,0.12); }
  .mf-row:first-child { border-top: 1px solid rgba(0,0,0,0.12); }
  .mf-row h4 { font-family: var(--font-headline); font-weight: 700; font-size: 16px; margin: 0 0 12px; }

  .mf-btn { width: 100%; background: var(--black); color: var(--ivory) !important; border: 1px solid var(--black); padding: 17px 24px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; margin-top: 28px; transition: opacity 0.15s ease; text-align: center; display: block; text-decoration: none; }
  .mf-btn:hover { opacity: 0.85; }
  .mf-btn:disabled { opacity: 0.35; cursor: not-allowed; }
  .mf-btn.ghost { background: transparent; color: var(--black) !important; margin-top: 10px; }

  .mf-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; opacity: 0.6; display: block; margin-bottom: 6px; }
  .mf-input { width: 100%; background: var(--chi-chi-beige); border: 1px solid var(--chi-chi-beige); padding: 14px 16px; font-size: 16px; outline: none; }
  .mf-input:focus { border-color: var(--black); }
  .mf-fields { display: flex; flex-direction: column; gap: 14px; }
  .mf-consent { display: flex; gap: 12px; align-items: flex-start; background: none; border: none; padding: 0; text-align: left; margin-top: 20px; font-size: 12px; line-height: 1.6; }
  .mf-consent a { color: inherit; }
  .mf-note { background: var(--chi-chi-beige); padding: 16px 18px; font-size: 13px; line-height: 1.65; margin-bottom: 14px; }
  .mf-err { background: var(--chi-chi-beige); padding: 10px 12px; font-size: 12px; margin-top: 14px; text-align: center; }
  .mf-hp { position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; }
`;

const Check = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F8F7F3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);

export default function ModelFunnel({ onClose }) {
  const [step, setStep] = useState("age");
  const [history, setHistory] = useState([]);
  const [interested, setInterested] = useState([]);
  const [before, setBefore] = useState({});
  const [types, setTypes] = useState([]);
  const [form, setForm] = useState({ name: "", phone: "", email: "", website: "" });
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [utm, setUtm] = useState({});

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    try {
      const p = new URLSearchParams(window.location.search);
      const u = {};
      ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((k) => { u[k] = p.get(k) || ""; });
      setUtm(u);
    } catch (e) {}
    return () => { document.body.style.overflow = prev; };
  }, []);

  const go = (next) => { setHistory((h) => [...h, step]); setStep(next); setError(""); };
  const back = () => {
    setHistory((h) => {
      if (!h.length) return h;
      setStep(h[h.length - 1]);
      return h.slice(0, -1);
    });
    setError("");
  };

  const toggle = (list, setList, v) => setList(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  const hadBefore = interested.filter((t) => before[t] === true);
  const eligible = interested.filter((t) => before[t] === false);
  const allAnswered = interested.length > 0 && interested.every((t) => typeof before[t] === "boolean");

  const afterBefore = () => {
    if (eligible.length === 0) return go("rejected");
    if (hadBefore.length > 0) return go("mixed");
    go("type");
  };

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const canSubmit = form.name.trim() && form.phone.trim() && emailOk && consent && !sending;

  const submit = async () => {
    if (!canSubmit) return;
    setSending(true); setError("");
    try {
      const res = await fetch("/api/model", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form, ...utm,
          over18: true,
          consent: true,
          interested,
          had_before: hadBefore,
          model_types: types,
          page_url: window.location.href,
          referrer: document.referrer || "",
        }),
      });
      if (!res.ok) throw new Error();
      setHistory([]);
      setStep("thanks");
    } catch (e) {
      setError("Das hat leider nicht geklappt. Bitte versuch es noch einmal.");
    } finally { setSending(false); }
  };

  const progressMap = { age: 10, interest: 30, before: 50, mixed: 60, type: 75, contact: 90, thanks: 100, underage: 100, rejected: 100 };
  const terminal = ["thanks", "underage", "rejected"].includes(step);
  const list = joinList(eligible);

  return (
    <div className="mf-root" role="dialog" aria-modal="true" aria-label="Als Modell bewerben">
      <style>{CSS}</style>
      <div className="mf-top">
        <div className="mf-bar">
          {history.length > 0 && !terminal ? (
            <button className="mf-icon" onClick={back}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
              Zurück
            </button>
          ) : <span className="mf-brand">Chi Chi Club Academy</span>}
          <button className="mf-icon" onClick={onClose} aria-label="Schließen">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>
        <div className="mf-progress"><div style={{ width: `${progressMap[step] || 0}%` }} /></div>
      </div>

      <div className="mf-body">
        {step === "age" && (
          <div className="mf-step" key="age">
            <p className="mf-kicker">Modell werden</p>
            <h2 className="mf-h">Bewirb dich als Chi Chi Academy Modell.</h2>
            <p className="mf-sub">Für Microblading, Freckles und/oder Lip Blush. Vorab eine kurze Frage: Bist du über 18 Jahre alt?</p>
            <div className="mf-yn">
              <button onClick={() => go("interest")}>Ja</button>
              <button onClick={() => go("underage")}>Nein</button>
            </div>
          </div>
        )}

        {step === "underage" && (
          <div className="mf-step" key="underage">
            <h2 className="mf-h">Das klappt leider nicht.</h2>
            <p className="mf-p">Als Modell für unsere Academy kommst du leider nicht infrage. Für kosmetisches Tätowieren musst du mindestens 18 Jahre alt sein oder die Erlaubnis deiner Erziehungsberechtigten haben.</p>
            <p className="mf-p">Wenn du die Erlaubnis deiner Erziehungsberechtigten hast, kannst du dir gern einen regulären Termin buchen.</p>
            <a className="mf-btn" href="https://www.chichiclub.co" target="_blank" rel="noreferrer">Zu chichiclub.co</a>
            <button className="mf-btn ghost" onClick={onClose}>Schließen</button>
          </div>
        )}

        {step === "interest" && (
          <div className="mf-step" key="interest">
            <p className="mf-kicker">Schritt 1 von 4</p>
            <h2 className="mf-h">Woran bist du interessiert?</h2>
            <p className="mf-sub">Du kannst mehrere Behandlungen auswählen.</p>
            <div className="mf-opts">
              {TREATMENTS.map((t) => {
                const sel = interested.includes(t.value);
                return (
                  <button key={t.value} className={`mf-opt${sel ? " sel" : ""}`} onClick={() => toggle(interested, setInterested, t.value)} aria-pressed={sel}>
                    <span><b>{t.label}</b><span className="d">{t.desc}</span></span>
                    <span className="mf-check">{sel && <Check />}</span>
                  </button>
                );
              })}
            </div>
            <button className="mf-btn" disabled={!interested.length} onClick={() => go("before")}>Weiter</button>
          </div>
        )}

        {step === "before" && (
          <div className="mf-step" key="before">
            <p className="mf-kicker">Schritt 2 von 4</p>
            <h2 className="mf-h">Ich hatte bereits:</h2>
            <p className="mf-sub">Als Modell kommst du nur für Behandlungen infrage, die du noch nicht hattest.</p>
            <div>
              {interested.map((t) => (
                <div className="mf-row" key={t}>
                  <h4>{tLabel(t)}</h4>
                  <div className="mf-yn">
                    <button className={before[t] === true ? "sel" : ""} onClick={() => setBefore((b) => ({ ...b, [t]: true }))}>Ja</button>
                    <button className={before[t] === false ? "sel" : ""} onClick={() => setBefore((b) => ({ ...b, [t]: false }))}>Nein</button>
                  </div>
                </div>
              ))}
            </div>
            <button className="mf-btn" disabled={!allAnswered} onClick={afterBefore}>Weiter</button>
          </div>
        )}

        {step === "rejected" && (
          <div className="mf-step" key="rejected">
            <h2 className="mf-h">Danke für dein Interesse.</h2>
            <p className="mf-p">Vielen Dank für dein Interesse daran, Modell für unsere Academy zu sein. Da du bereits {joinList(hadBefore)} hattest, kommst du als Modell für unsere Chi Chi Club Academy für {hadBefore.length > 1 ? "diese Behandlungen" : "diese Behandlung"} leider nicht infrage.</p>
            <p className="mf-p">Du kannst dir aber gerne einen Termin bei einem unserer Chi Chi Club Artists buchen.</p>
            <a className="mf-btn" href="https://www.chichiclub.co" target="_blank" rel="noreferrer">Termin buchen auf chichiclub.co</a>
            <button className="mf-btn ghost" onClick={back}>Auswahl ändern</button>
          </div>
        )}

        {step === "mixed" && (
          <div className="mf-step" key="mixed">
            <p className="mf-kicker">Kurzer Hinweis</p>
            <h2 className="mf-h">Wir nehmen dich gerne als {list}-Modell auf.</h2>
            <p className="mf-p">Als {joinList(hadBefore)}-Modell kommst du aufgrund deiner vorherigen Behandlung leider nicht infrage.</p>
            <button className="mf-btn" onClick={() => go("type")}>Weiter als {list}-Modell</button>
          </div>
        )}

        {step === "type" && (
          <div className="mf-step" key="type">
            <p className="mf-kicker">Schritt 3 von 4</p>
            <h2 className="mf-h">Modell oder Demo-Modell?</h2>
            <p className="mf-sub">Du kannst beide Optionen auswählen.</p>
            <div className="mf-opts">
              <button className={`mf-opt${types.includes("demo") ? " sel" : ""}`} onClick={() => toggle(types, setTypes, "demo")} aria-pressed={types.includes("demo")} style={{ alignItems: "flex-start" }}>
                <span>
                  <b>Demo-Modell bei Jette</b>
                  <span className="d">Als Demo-Modell führt Jette die Behandlung ({list}) durch, genauso wie bei einem klassischen Termin. Der einzige Unterschied ist, dass unsere Trainees ihr während der Behandlung über die Schulter schauen.</span>
                  <span className="price">Dieser Termin ist um 50 % vergünstigt und kostet 375 €.</span>
                </span>
                <span className="mf-check">{types.includes("demo") && <Check />}</span>
              </button>
              <button className={`mf-opt${types.includes("trainee") ? " sel" : ""}`} onClick={() => toggle(types, setTypes, "trainee")} aria-pressed={types.includes("trainee")} style={{ alignItems: "flex-start" }}>
                <span>
                  <b>Modell bei einem Trainee</b>
                  <span className="d">Als Modell bekommst du die Behandlung ({list}) von einem unserer Trainees, selbstverständlich unter Anleitung und Kontrolle von Jette.</span>
                  <span className="price">Für dich fällt lediglich eine Materialgebühr von 100 € an.</span>
                </span>
                <span className="mf-check">{types.includes("trainee") && <Check />}</span>
              </button>
            </div>
            <button className="mf-btn" disabled={!types.length} onClick={() => go("contact")}>Einverstanden. Weiter zur Registrierung</button>
          </div>
        )}

        {step === "contact" && (
          <div className="mf-step" key="contact">
            <p className="mf-kicker">Schritt 4 von 4</p>
            <h2 className="mf-h">Deine Kontaktdaten.</h2>
            <p className="mf-sub">Wir melden uns bei dir, sobald ein passender Schulungstermin ansteht.</p>
            <div className="mf-fields">
              <div>
                <label className="mf-label" htmlFor="mf-name">Vorname und Nachname *</label>
                <input id="mf-name" className="mf-input" autoComplete="name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
              </div>
              <div>
                <label className="mf-label" htmlFor="mf-phone">Telefonnummer *</label>
                <input id="mf-phone" className="mf-input" type="tel" autoComplete="tel" placeholder="+49 170 1234567" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} />
              </div>
              <div>
                <label className="mf-label" htmlFor="mf-email">E-Mail-Adresse *</label>
                <input id="mf-email" className="mf-input" type="email" autoComplete="email" placeholder="deine@email.de" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
              </div>
              <input className="mf-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))} />
            </div>
            <button type="button" className={`mf-consent${consent ? " sel" : ""}`} onClick={() => setConsent((c) => !c)} aria-pressed={consent}>
              <span className="mf-check" style={{ marginTop: 1 }}>{consent && <Check />}</span>
              <span>Ich bin damit einverstanden, dass der Chi Chi Club meine Angaben speichert und mich zur Terminabstimmung kontaktiert. Details in der <a href="/datenschutz" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>Datenschutzerklärung</a>.</span>
            </button>
            <button className="mf-btn" disabled={!canSubmit} onClick={submit}>{sending ? "Wird gesendet…" : "Bewerbung absenden"}</button>
            {error && <p className="mf-err">{error}</p>}
          </div>
        )}

        {step === "thanks" && (
          <div className="mf-step" key="thanks">
            <p className="mf-kicker">Bewerbung eingegangen</p>
            <h2 className="mf-h">Danke, {form.name.trim().split(" ")[0]}!</h2>
            <p className="mf-p">Deine Bewerbung als {list}-Modell ist bei uns angekommen. Wir melden uns persönlich bei dir, sobald ein passender Schulungstermin ansteht.</p>
            <div className="mf-note">Tipp: Speichere dir unsere Nummer 0176 66883150 ab, damit du unsere Nachricht nicht verpasst.</div>
            <button className="mf-btn" onClick={onClose}>Zurück zur Seite</button>
          </div>
        )}
      </div>
    </div>
  );
}
