import { requireAuth } from "../../lib/auth.js";
import { listLeads, getLead, saveLead, deleteLead, STATUSES } from "../../lib/store.js";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (!requireAuth(req, res)) return;

  try {
    if (req.method === "GET") {
      const leads = await listLeads();
      return res.status(200).json({ leads });
    }

    let body = req.body;
    if (typeof body === "string") {
      try { body = JSON.parse(body); } catch { body = null; }
    }
    const id = body && typeof body.id === "string" ? body.id : "";
    if (!/^[0-9]+-[a-z0-9]+$/.test(id)) return res.status(400).json({ error: "ungültige id" });

    if (req.method === "PATCH") {
      const lead = await getLead(id);
      if (!lead) return res.status(404).json({ error: "nicht gefunden" });
      if (typeof body.status === "string" && STATUSES.includes(body.status)) lead.status = body.status;
      if (typeof body.notes === "string") lead.notes = body.notes.slice(0, 5000);
      lead.updated_at = new Date().toISOString();
      await saveLead(lead);
      return res.status(200).json({ lead });
    }

    if (req.method === "DELETE") {
      await deleteLead(id);
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: "method not allowed" });
  } catch (e) {
    console.error("admin leads error", e);
    return res.status(500).json({ error: "serverfehler" });
  }
}
