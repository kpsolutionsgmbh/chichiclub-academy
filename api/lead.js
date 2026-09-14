import { saveLead, newId } from "../lib/store.js";

const str = (v, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).json({ error: "method not allowed" });

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = null; }
  }
  if (!body || typeof body !== "object") return res.status(400).json({ error: "bad request" });

  // Honeypot: echte Nutzer füllen dieses Feld nie aus
  if (str(body.website)) return res.status(200).json({ ok: true });

  const name = str(body.name, 120);
  const email = str(body.email, 200).toLowerCase();
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "name und gültige e-mail nötig" });
  }

  const answers = body.answers && typeof body.answers === "object" ? body.answers : {};
  const lead = {
    id: newId(),
    name,
    email,
    phone: str(body.phone, 60),
    answers: {
      experience: str(answers.experience, 40),
      goal: str(answers.goal, 40),
      timeline: str(answers.timeline, 40),
    },
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
    await saveLead(lead);
    return res.status(200).json({ ok: true, id: lead.id });
  } catch (e) {
    console.error("lead save failed", e);
    return res.status(500).json({ error: "speichern fehlgeschlagen" });
  }
}
