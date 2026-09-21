import { saveLead, newId } from "../lib/store.js";

const TREATMENTS = ["microblading", "freckles", "lipblush"];
const MODEL_TYPES = ["demo", "trainee"];
const str = (v, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const pick = (arr, allowed) => (Array.isArray(arr) ? [...new Set(arr.filter((x) => allowed.includes(x)))] : []);

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).json({ error: "method not allowed" });

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = null; }
  }
  if (!body || typeof body !== "object") return res.status(400).json({ error: "bad request" });
  if (str(body.website)) return res.status(200).json({ ok: true }); // Honeypot

  const name = str(body.name, 120);
  const email = str(body.email, 200).toLowerCase();
  const phone = str(body.phone, 60);
  if (!name || !phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "name, telefon und gültige e-mail nötig" });
  }
  if (body.over18 !== true) return res.status(400).json({ error: "mindestalter 18" });
  if (body.consent !== true) return res.status(400).json({ error: "einwilligung fehlt" });

  const interested = pick(body.interested, TREATMENTS);
  const hadBefore = pick(body.had_before, TREATMENTS).filter((t) => interested.includes(t));
  // Ausschlusslogik serverseitig: nur Behandlungen ohne Vorbehandlung sind zulässig
  const eligible = interested.filter((t) => !hadBefore.includes(t));
  const modelTypes = pick(body.model_types, MODEL_TYPES);
  if (!eligible.length) return res.status(400).json({ error: "keine zulässige behandlung" });
  if (!modelTypes.length) return res.status(400).json({ error: "modell-art fehlt" });

  const entry = {
    id: newId(),
    name, email, phone,
    interested,
    eligible,
    rejected: hadBefore,
    model_types: modelTypes,
    utm_source: str(body.utm_source, 120),
    utm_medium: str(body.utm_medium, 120),
    utm_campaign: str(body.utm_campaign, 200),
    utm_content: str(body.utm_content, 200),
    utm_term: str(body.utm_term, 200),
    page_url: str(body.page_url, 1000),
    referrer: str(body.referrer, 1000),
    user_agent: str(req.headers["user-agent"], 400),
    submitted_at: new Date().toISOString(),
    status: "neu",
    notes: "",
    updated_at: null,
  };

  try {
    await saveLead(entry, "models");
    return res.status(200).json({ ok: true, id: entry.id });
  } catch (e) {
    console.error("model save failed", e);
    return res.status(500).json({ error: "speichern fehlgeschlagen" });
  }
}
