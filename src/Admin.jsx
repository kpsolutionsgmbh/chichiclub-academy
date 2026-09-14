import React, { useEffect, useMemo, useRef, useState } from "react";

// ─── Labels (müssen zu den Funnel-Fragen in App.jsx passen) ───
const LABELS = {
  experience: {
    beginner: "Kompletter Neuling",
    kosmetik: "Kosmetikerin / Friseurin",
    pmu: "PMU-Erfahrung",
    other: "Quereinsteigerin",
  },
  goal: {
    selfemployed: "Selbstständigkeit",
    income: "Mehr verdienen",
    technique: "Technik lernen",
    freedom: "Kreative Freiheit",
  },
  timeline: {
    asap: "So schnell wie möglich",
    "1-3months": "In 1–3 Monaten",
    "3-6months": "In 3–6 Monaten",
    exploring: "Informiert sich erst",
  },
};

const STATUS = [
  { value: "neu", label: "Neu" },
  { value: "kontaktiert", label: "Kontaktiert" },
  { value: "termin", label: "Termin" },
  { value: "gewonnen", label: "Gewonnen" },
  { value: "verloren", label: "Verloren" },
];

const label = (group, value) => (value ? LABELS[group]?.[value] || value : "—");
const statusLabel = (v) => STATUS.find((s) => s.value === v)?.label || v || "—";

const fmtDate = (iso) => {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "2-digit" }) +
    " · " + d.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
};

const fmtDateLong = (iso) => {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleDateString("de-DE", { weekday: "long", day: "2-digit", month: "long", year: "numeric" }) +
    ", " + d.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }) + " Uhr";
};

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap');
  :root {
    --black: #000000;
    --ivory: #F8F7F3;
    --chi-chi-beige: #E8E4DA;
    --font-body: 'Roboto Mono', monospace;
    --font-headline: 'Pragmatica Extended', 'Pragmatica Ext', sans-serif;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { background: var(--ivory); color: var(--black); font-family: var(--font-body); -webkit-font-smoothing: antialiased; }
  button, input, textarea { font-family: var(--font-body); color: var(--black); border-radius: 0; -webkit-appearance: none; appearance: none; }
  button { cursor: pointer; background: none; border: none; }
  input, textarea { outline: none; }
  input::placeholder, textarea::placeholder { color: rgba(0,0,0,0.35); }
  a { color: inherit; }

  .adm-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; opacity: 0.55; display: block; margin-bottom: 6px; }
  .adm-input { width: 100%; background: var(--chi-chi-beige); border: 1px solid var(--chi-chi-beige); padding: 12px 14px; font-size: 14px; }
  .adm-input:focus { border-color: var(--black); }
  .adm-btn { font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; padding: 12px 18px; border: 1px solid var(--black); background: var(--black); color: var(--ivory); transition: opacity 0.15s ease; white-space: nowrap; }
  .adm-btn:hover { opacity: 0.8; }
  .adm-btn:disabled { opacity: 0.4; cursor: not-allowed; }
  .adm-btn.ghost { background: transparent; color: var(--black); }
  .adm-btn.ghost:hover { background: var(--chi-chi-beige); opacity: 1; }
  .adm-btn.small { padding: 8px 12px; font-size: 11px; }
  a.adm-btn { text-decoration: none; display: inline-block; }

  .adm-row { cursor: pointer; transition: background 0.12s ease; }
  .adm-row:hover { background: var(--chi-chi-beige); }
  .adm-row.active { background: var(--chi-chi-beige); }
  .adm-table { width: 100%; border-collapse: collapse; font-size: 13px; }
  .adm-table th { text-align: left; font-weight: 400; font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; opacity: 0.55; padding: 10px 12px; border-bottom: 1px solid var(--black); white-space: nowrap; user-select: none; cursor: pointer; }
  .adm-table th.nosort { cursor: default; }
  .adm-table td { padding: 14px 12px; border-bottom: 1px solid rgba(0,0,0,0.1); vertical-align: middle; white-space: nowrap; }
  .adm-table td.wrap { white-space: normal; }

  .adm-dd { position: relative; }
  .adm-dd-btn { width: 100%; text-align: left; background: var(--chi-chi-beige); border: 1px solid var(--chi-chi-beige); padding: 12px 36px 12px 14px; font-size: 13px; display: flex; align-items: center; justify-content: space-between; }
  .adm-dd-btn:focus, .adm-dd.open .adm-dd-btn { border-color: var(--black); }
  .adm-dd-btn svg { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); transition: transform 0.15s ease; }
  .adm-dd.open .adm-dd-btn svg { transform: translateY(-50%) rotate(180deg); }
  .adm-dd-list { position: absolute; top: calc(100% + 4px); left: 0; right: 0; background: var(--ivory); border: 1px solid var(--black); z-index: 30; max-height: 260px; overflow-y: auto; animation: ddIn 0.12s ease; }
  .adm-dd-item { width: 100%; text-align: left; padding: 11px 14px; font-size: 13px; display: flex; align-items: center; justify-content: space-between; }
  .adm-dd-item:hover { background: var(--chi-chi-beige); }
  .adm-dd-item.sel { font-weight: 500; }
  @keyframes ddIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }

  .adm-pill { display: inline-block; font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; padding: 4px 8px; border: 1px solid var(--black); }
  .adm-pill.neu { background: var(--black); color: var(--ivory); }
  .adm-pill.gewonnen { background: var(--chi-chi-beige); }
  .adm-pill.verloren { opacity: 0.4; }

  .adm-drawer { position: fixed; top: 0; right: 0; bottom: 0; width: min(520px, 100vw); background: var(--ivory); border-left: 1px solid var(--black); z-index: 50; overflow-y: auto; animation: drawerIn 0.22s ease; display: flex; flex-direction: column; }
  @keyframes drawerIn { from { transform: translateX(24px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
  .adm-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.25); z-index: 40; animation: fadeIn 0.2s ease; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  .adm-stat { background: var(--chi-chi-beige); padding: 18px 20px; }
  .adm-stat b { font-family: var(--font-headline); font-weight: 700; font-size: 28px; display: block; line-height: 1.1; margin-bottom: 4px; }
  .adm-stat span { font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; opacity: 0.6; }

  .adm-filters { display: grid; grid-template-columns: 2fr repeat(4, 1fr); gap: 10px; align-items: end; }
  .adm-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
  .adm-hide-mobile { display: table-cell; }
  @media (max-width: 900px) {
    .adm-filters { grid-template-columns: 1fr 1fr; }
    .adm-stats { grid-template-columns: repeat(2, 1fr); }
    .adm-hide-mobile { display: none; }
  }
  @media (max-width: 560px) {
    .adm-filters { grid-template-columns: 1fr; }
  }
`;

// ─── Custom Dropdown (kein natives Select) ───
function Dropdown({ value, options, onChange, placeholder = "Alle" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
  }, [open]);
  const current = options.find((o) => o.value === value);
  return (
    <div className={`adm-dd${open ? " open" : ""}`} ref={ref}>
      <button type="button" className="adm-dd-btn" onClick={() => setOpen((o) => !o)}>
        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{current ? current.label : placeholder}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
      </button>
      {open && (
        <div className="adm-dd-list">
          {placeholder && (
            <button type="button" className={`adm-dd-item${!value ? " sel" : ""}`} onClick={() => { onChange(""); setOpen(false); }}>{placeholder}</button>
          )}
          {options.map((o) => (
            <button key={o.value} type="button" className={`adm-dd-item${o.value === value ? " sel" : ""}`} onClick={() => { onChange(o.value); setOpen(false); }}>
              <span>{o.label}</span>
              {o.value === value && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Login ───
function Login({ onSuccess }) {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!pw || busy) return;
    setBusy(true); setErr("");
    try {
      const res = await fetch("/api/admin/session", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: pw }) });
      if (!res.ok) throw new Error();
      onSuccess();
    } catch {
      setErr("Falsches Passwort.");
    } finally { setBusy(false); }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <form onSubmit={submit} style={{ width: "100%", maxWidth: 380 }}>
        <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.55, marginBottom: 14 }}>Chi Chi Club Academy</p>
        <h1 style={{ fontFamily: "var(--font-headline)", fontWeight: 700, fontSize: 28, lineHeight: 1.15, marginBottom: 32 }}>Lead-Backend</h1>
        <label className="adm-label" htmlFor="pw">Passwort</label>
        <input id="pw" className="adm-input" type="password" autoFocus autoComplete="current-password" value={pw} onChange={(e) => setPw(e.target.value)} style={{ marginBottom: 12, fontSize: 16 }} />
        {err && <p style={{ fontSize: 12, marginBottom: 12 }}>{err}</p>}
        <button className="adm-btn" type="submit" disabled={busy || !pw} style={{ width: "100%" }}>{busy ? "Prüfe…" : "Einloggen"}</button>
      </form>
    </div>
  );
}

// ─── Detail Drawer ───
function Drawer({ lead, onClose, onSave, onDelete }) {
  const [status, setStatus] = useState(lead.status || "neu");
  const [notes, setNotes] = useState(lead.notes || "");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [confirmDel, setConfirmDel] = useState(false);

  useEffect(() => { setStatus(lead.status || "neu"); setNotes(lead.notes || ""); setSaved(false); setConfirmDel(false); }, [lead.id]);
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const dirty = status !== (lead.status || "neu") || notes !== (lead.notes || "");

  const save = async () => {
    setSaving(true);
    const ok = await onSave(lead.id, { status, notes });
    setSaving(false);
    if (ok) { setSaved(true); setTimeout(() => setSaved(false), 1800); }
  };

  const phoneDigits = (lead.phone || "").replace(/[^\d+]/g, "");
  const waNumber = phoneDigits.startsWith("+") ? phoneDigits.slice(1) : phoneDigits.startsWith("0") ? "49" + phoneDigits.slice(1) : phoneDigits;

  const Row = ({ k, v, mono }) => (
    <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 12, padding: "10px 0", borderBottom: "1px solid rgba(0,0,0,0.1)", fontSize: 13 }}>
      <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", opacity: 0.55, paddingTop: 3 }}>{k}</span>
      <span style={{ wordBreak: "break-word", fontSize: mono ? 11 : 13, opacity: v === "—" ? 0.4 : 1 }}>{v}</span>
    </div>
  );

  return (
    <>
      <div className="adm-backdrop" onClick={onClose} />
      <aside className="adm-drawer">
        <div style={{ padding: "24px 28px", borderBottom: "1px solid var(--black)", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
          <div>
            <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.55, marginBottom: 8 }}>{fmtDateLong(lead.submitted_at)}</p>
            <h2 style={{ fontFamily: "var(--font-headline)", fontWeight: 700, fontSize: 24, lineHeight: 1.15 }}>{lead.name}</h2>
          </div>
          <button onClick={onClose} aria-label="Schließen" style={{ padding: 6, marginTop: -2 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>

        <div style={{ padding: "20px 28px", flex: 1 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
            <a className="adm-btn small" href={`mailto:${lead.email}`}>E-Mail</a>
            {lead.phone && <a className="adm-btn small ghost" href={`tel:${phoneDigits}`}>Anrufen</a>}
            {lead.phone && <a className="adm-btn small ghost" href={`https://wa.me/${waNumber}`} target="_blank" rel="noreferrer">WhatsApp</a>}
          </div>

          <p className="adm-label" style={{ marginBottom: 2 }}>Kontakt</p>
          <Row k="E-Mail" v={lead.email} />
          <Row k="Telefon" v={lead.phone || "—"} />

          <p className="adm-label" style={{ marginTop: 26, marginBottom: 2 }}>Antworten im Funnel</p>
          <Row k="Wo steht sie" v={label("experience", lead.answers?.experience)} />
          <Row k="Ziel" v={label("goal", lead.answers?.goal)} />
          <Row k="Zeitrahmen" v={label("timeline", lead.answers?.timeline)} />

          <p className="adm-label" style={{ marginTop: 26, marginBottom: 2 }}>Herkunft</p>
          <Row k="Quelle" v={lead.utm_source || "—"} />
          <Row k="Medium" v={lead.utm_medium || "—"} />
          <Row k="Kampagne" v={lead.utm_campaign || "—"} />
          <Row k="Content" v={lead.utm_content || "—"} />
          <Row k="Term" v={lead.utm_term || "—"} />
          <Row k="Referrer" v={lead.referrer || "—"} mono />
          <Row k="Seite" v={lead.page_url || "—"} mono />
          <Row k="Gerät" v={lead.user_agent || "—"} mono />

          <p className="adm-label" style={{ marginTop: 26 }}>Status</p>
          <Dropdown value={status} options={STATUS} onChange={setStatus} placeholder="" />

          <p className="adm-label" style={{ marginTop: 18 }}>Notizen</p>
          <textarea className="adm-input" rows={5} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Gesprächsnotizen, Rückruf-Termin, Einwände…" style={{ resize: "vertical", lineHeight: 1.5 }} />

          <div style={{ display: "flex", gap: 8, marginTop: 14, alignItems: "center" }}>
            <button className="adm-btn" onClick={save} disabled={!dirty || saving}>{saving ? "Speichert…" : saved ? "Gespeichert" : "Speichern"}</button>
            {lead.updated_at && <span style={{ fontSize: 10, opacity: 0.5 }}>Zuletzt geändert {fmtDate(lead.updated_at)}</span>}
          </div>
        </div>

        <div style={{ padding: "16px 28px", borderTop: "1px solid rgba(0,0,0,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 10, opacity: 0.4 }}>ID {lead.id}</span>
          {!confirmDel ? (
            <button className="adm-btn small ghost" onClick={() => setConfirmDel(true)}>Lead löschen</button>
          ) : (
            <span style={{ display: "flex", gap: 6, alignItems: "center", fontSize: 11 }}>
              Wirklich löschen?
              <button className="adm-btn small" onClick={() => onDelete(lead.id)}>Ja</button>
              <button className="adm-btn small ghost" onClick={() => setConfirmDel(false)}>Nein</button>
            </span>
          )}
        </div>
      </aside>
    </>
  );
}

// ─── Dashboard ───
function Dashboard({ onLogout }) {
  const [leads, setLeads] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [q, setQ] = useState("");
  const [fStatus, setFStatus] = useState("");
  const [fExp, setFExp] = useState("");
  const [fGoal, setFGoal] = useState("");
  const [fTime, setFTime] = useState("");
  const [fSource, setFSource] = useState("");
  const [fRange, setFRange] = useState("");
  const [sort, setSort] = useState({ key: "submitted_at", dir: "desc" });

  const load = async () => {
    setLoading(true); setError("");
    try {
      const res = await fetch("/api/admin/leads", { cache: "no-store" });
      if (res.status === 401) { onLogout(); return; }
      if (!res.ok) throw new Error();
      const data = await res.json();
      setLeads(data.leads || []);
    } catch {
      setError("Leads konnten nicht geladen werden.");
    } finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const sources = useMemo(() => {
    const set = new Set((leads || []).map((l) => l.utm_source).filter(Boolean));
    return [...set].sort().map((s) => ({ value: s, label: s }));
  }, [leads]);

  const filtered = useMemo(() => {
    if (!leads) return [];
    const needle = q.trim().toLowerCase();
    const now = Date.now();
    const rangeMs = { today: 0, "7d": 7 * 864e5, "30d": 30 * 864e5 }[fRange];
    const startOfToday = new Date(); startOfToday.setHours(0, 0, 0, 0);
    let out = leads.filter((l) => {
      if (fStatus && (l.status || "neu") !== fStatus) return false;
      if (fExp && l.answers?.experience !== fExp) return false;
      if (fGoal && l.answers?.goal !== fGoal) return false;
      if (fTime && l.answers?.timeline !== fTime) return false;
      if (fSource && l.utm_source !== fSource) return false;
      if (fRange) {
        const t = new Date(l.submitted_at).getTime();
        if (fRange === "today" ? t < startOfToday.getTime() : now - t > rangeMs) return false;
      }
      if (needle) {
        const hay = [l.name, l.email, l.phone, l.notes, l.utm_source, l.utm_campaign].join(" ").toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    });
    const dir = sort.dir === "asc" ? 1 : -1;
    const get = (l) => {
      switch (sort.key) {
        case "name": return (l.name || "").toLowerCase();
        case "status": return STATUS.findIndex((s) => s.value === (l.status || "neu"));
        case "experience": return label("experience", l.answers?.experience);
        case "goal": return label("goal", l.answers?.goal);
        case "timeline": return ["asap", "1-3months", "3-6months", "exploring"].indexOf(l.answers?.timeline);
        case "source": return l.utm_source || "";
        default: return l.submitted_at || "";
      }
    };
    out.sort((a, b) => (get(a) < get(b) ? -dir : get(a) > get(b) ? dir : 0));
    return out;
  }, [leads, q, fStatus, fExp, fGoal, fTime, fSource, fRange, sort]);

  const stats = useMemo(() => {
    const all = leads || [];
    const startOfToday = new Date(); startOfToday.setHours(0, 0, 0, 0);
    const weekAgo = Date.now() - 7 * 864e5;
    return {
      total: all.length,
      today: all.filter((l) => new Date(l.submitted_at) >= startOfToday).length,
      week: all.filter((l) => new Date(l.submitted_at).getTime() >= weekAgo).length,
      neu: all.filter((l) => (l.status || "neu") === "neu").length,
    };
  }, [leads]);

  const selected = leads?.find((l) => l.id === selectedId) || null;

  const saveLead = async (id, patch) => {
    try {
      const res = await fetch("/api/admin/leads", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, ...patch }) });
      if (res.status === 401) { onLogout(); return false; }
      if (!res.ok) throw new Error();
      const { lead } = await res.json();
      setLeads((prev) => prev.map((l) => (l.id === id ? lead : l)));
      return true;
    } catch { setError("Speichern fehlgeschlagen."); return false; }
  };

  const deleteLead = async (id) => {
    try {
      const res = await fetch("/api/admin/leads", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
      if (!res.ok) throw new Error();
      setLeads((prev) => prev.filter((l) => l.id !== id));
      setSelectedId(null);
    } catch { setError("Löschen fehlgeschlagen."); }
  };

  const exportCsv = () => {
    const cols = ["Datum", "Name", "E-Mail", "Telefon", "Status", "Erfahrung", "Ziel", "Zeitrahmen", "Quelle", "Medium", "Kampagne", "Content", "Term", "Notizen", "Seite"];
    const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const rows = filtered.map((l) => [
      fmtDate(l.submitted_at), l.name, l.email, l.phone, statusLabel(l.status), label("experience", l.answers?.experience), label("goal", l.answers?.goal), label("timeline", l.answers?.timeline),
      l.utm_source, l.utm_medium, l.utm_campaign, l.utm_content, l.utm_term, l.notes, l.page_url,
    ].map(esc).join(";"));
    const blob = new Blob(["﻿" + [cols.join(";"), ...rows].join("\n")], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const logout = async () => { await fetch("/api/admin/session", { method: "DELETE" }); onLogout(); };

  const toggleSort = (key) => setSort((s) => (s.key === key ? { key, dir: s.dir === "asc" ? "desc" : "asc" } : { key, dir: key === "submitted_at" ? "desc" : "asc" }));
  const Th = ({ k, children, className }) => (
    <th className={className} onClick={() => toggleSort(k)}>
      {children}{sort.key === k ? (sort.dir === "asc" ? " ↑" : " ↓") : ""}
    </th>
  );

  const anyFilter = q || fStatus || fExp || fGoal || fTime || fSource || fRange;
  const resetFilters = () => { setQ(""); setFStatus(""); setFExp(""); setFGoal(""); setFTime(""); setFSource(""); setFRange(""); };

  const toOpts = (group) => Object.entries(LABELS[group]).map(([value, l]) => ({ value, label: l }));

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "28px 20px 80px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16, marginBottom: 28, flexWrap: "wrap" }}>
        <div>
          <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.55, marginBottom: 8 }}>Chi Chi Club Academy</p>
          <h1 style={{ fontFamily: "var(--font-headline)", fontWeight: 700, fontSize: "clamp(24px, 3vw, 34px)", lineHeight: 1.1 }}>Leads</h1>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button className="adm-btn ghost" onClick={load} disabled={loading}>{loading ? "Lädt…" : "Aktualisieren"}</button>
          <button className="adm-btn ghost" onClick={exportCsv} disabled={!filtered.length}>CSV Export</button>
          <button className="adm-btn ghost" onClick={logout}>Logout</button>
        </div>
      </header>

      <div className="adm-stats" style={{ marginBottom: 24 }}>
        <div className="adm-stat"><b>{stats.total}</b><span>Gesamt</span></div>
        <div className="adm-stat"><b>{stats.today}</b><span>Heute</span></div>
        <div className="adm-stat"><b>{stats.week}</b><span>Letzte 7 Tage</span></div>
        <div className="adm-stat"><b>{stats.neu}</b><span>Unbearbeitet</span></div>
      </div>

      <div className="adm-filters" style={{ marginBottom: 12 }}>
        <div>
          <label className="adm-label">Suche</label>
          <input className="adm-input" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Name, E-Mail, Telefon, Notiz…" />
        </div>
        <div><label className="adm-label">Status</label><Dropdown value={fStatus} options={STATUS} onChange={setFStatus} /></div>
        <div><label className="adm-label">Zeitraum</label><Dropdown value={fRange} options={[{ value: "today", label: "Heute" }, { value: "7d", label: "Letzte 7 Tage" }, { value: "30d", label: "Letzte 30 Tage" }]} onChange={setFRange} /></div>
        <div><label className="adm-label">Erfahrung</label><Dropdown value={fExp} options={toOpts("experience")} onChange={setFExp} /></div>
        <div><label className="adm-label">Ziel</label><Dropdown value={fGoal} options={toOpts("goal")} onChange={setFGoal} /></div>
        <div><label className="adm-label">Zeitrahmen</label><Dropdown value={fTime} options={toOpts("timeline")} onChange={setFTime} /></div>
        <div><label className="adm-label">Quelle (UTM)</label><Dropdown value={fSource} options={sources} onChange={setFSource} /></div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, fontSize: 11, opacity: 0.6 }}>
        <span>{filtered.length} von {leads?.length ?? 0} Leads</span>
        {anyFilter && <button onClick={resetFilters} style={{ fontSize: 11, textDecoration: "underline" }}>Filter zurücksetzen</button>}
      </div>

      {error && <p style={{ fontSize: 12, background: "var(--chi-chi-beige)", padding: "10px 14px", marginBottom: 12 }}>{error}</p>}

      <div style={{ overflowX: "auto", borderTop: "1px solid var(--black)" }}>
        <table className="adm-table">
          <thead>
            <tr>
              <Th k="submitted_at">Datum</Th>
              <Th k="name">Name</Th>
              <th className="nosort adm-hide-mobile">Kontakt</th>
              <Th k="experience" className="adm-hide-mobile">Erfahrung</Th>
              <Th k="goal" className="adm-hide-mobile">Ziel</Th>
              <Th k="timeline" className="adm-hide-mobile">Zeitrahmen</Th>
              <Th k="source" className="adm-hide-mobile">Quelle</Th>
              <Th k="status">Status</Th>
            </tr>
          </thead>
          <tbody>
            {leads === null && loading && (
              <tr><td colSpan={8} style={{ padding: 40, textAlign: "center", opacity: 0.5 }}>Lädt Leads…</td></tr>
            )}
            {leads !== null && filtered.length === 0 && (
              <tr><td colSpan={8} style={{ padding: 40, textAlign: "center", opacity: 0.5 }}>{leads.length === 0 ? "Noch keine Leads. Sobald jemand das Formular abschickt, taucht er hier auf." : "Keine Leads für diese Filter."}</td></tr>
            )}
            {filtered.map((l) => (
              <tr key={l.id} className={`adm-row${selectedId === l.id ? " active" : ""}`} onClick={() => setSelectedId(l.id)}>
                <td style={{ opacity: 0.7, fontSize: 12 }}>{fmtDate(l.submitted_at)}</td>
                <td style={{ fontWeight: 500 }}>{l.name}</td>
                <td className="adm-hide-mobile" style={{ fontSize: 12 }}>{l.email}{l.phone ? <><br /><span style={{ opacity: 0.6 }}>{l.phone}</span></> : null}</td>
                <td className="adm-hide-mobile">{label("experience", l.answers?.experience)}</td>
                <td className="adm-hide-mobile">{label("goal", l.answers?.goal)}</td>
                <td className="adm-hide-mobile">{label("timeline", l.answers?.timeline)}</td>
                <td className="adm-hide-mobile" style={{ opacity: l.utm_source ? 1 : 0.4 }}>{l.utm_source || "direkt"}</td>
                <td><span className={`adm-pill ${l.status || "neu"}`}>{statusLabel(l.status || "neu")}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected && <Drawer lead={selected} onClose={() => setSelectedId(null)} onSave={saveLead} onDelete={deleteLead} />}
    </div>
  );
}

// ─── Root ───
export default function Admin() {
  const [authed, setAuthed] = useState(null);

  useEffect(() => {
    document.title = "Leads · Chi Chi Club Academy";
    const meta = document.createElement("meta");
    meta.name = "robots"; meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    fetch("/api/admin/session", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => setAuthed(!!d.authed))
      .catch(() => setAuthed(false));
  }, []);

  return (
    <>
      <style>{CSS}</style>
      {authed === null ? (
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, opacity: 0.5, letterSpacing: "0.15em", textTransform: "uppercase" }}>Lädt…</div>
      ) : authed ? (
        <Dashboard onLogout={() => setAuthed(false)} />
      ) : (
        <Login onSuccess={() => setAuthed(true)} />
      )}
    </>
  );
}
