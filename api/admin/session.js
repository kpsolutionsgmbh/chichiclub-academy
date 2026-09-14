import { checkPassword, makeToken, isAuthed, setSessionCookie, clearSessionCookie } from "../../lib/auth.js";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "GET") {
    return res.status(200).json({ authed: isAuthed(req) });
  }

  if (req.method === "POST") {
    let body = req.body;
    if (typeof body === "string") {
      try { body = JSON.parse(body); } catch { body = null; }
    }
    const password = body && body.password;
    // kleine Bremse gegen Brute-Force
    await new Promise((r) => setTimeout(r, 400));
    if (!checkPassword(password)) return res.status(401).json({ error: "falsches passwort" });
    setSessionCookie(req, res, makeToken());
    return res.status(200).json({ ok: true });
  }

  if (req.method === "DELETE") {
    clearSessionCookie(req, res);
    return res.status(200).json({ ok: true });
  }

  return res.status(405).json({ error: "method not allowed" });
}
