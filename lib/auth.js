import crypto from "node:crypto";

const COOKIE = "ccadmin";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 Tage

function secret() {
  const s = process.env.ADMIN_SECRET;
  if (!s) throw new Error("ADMIN_SECRET fehlt");
  return s;
}

function sign(payload) {
  return crypto.createHmac("sha256", secret()).update(payload).digest("hex");
}

export function makeToken() {
  const exp = String(Math.floor(Date.now() / 1000) + MAX_AGE);
  return `${exp}.${sign(exp)}`;
}

export function verifyToken(token) {
  if (!token || typeof token !== "string") return false;
  const [exp, sig] = token.split(".");
  if (!exp || !sig) return false;
  if (Number(exp) < Math.floor(Date.now() / 1000)) return false;
  const expected = sign(exp);
  if (expected.length !== sig.length) return false;
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(sig));
}

export function checkPassword(input) {
  const pw = process.env.ADMIN_PASSWORD || "";
  if (!pw || typeof input !== "string") return false;
  const a = Buffer.from(input);
  const b = Buffer.from(pw);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export function parseCookies(req) {
  const header = req.headers.cookie || "";
  return Object.fromEntries(
    header.split(";").map((c) => c.trim()).filter(Boolean).map((c) => {
      const i = c.indexOf("=");
      return [c.slice(0, i), decodeURIComponent(c.slice(i + 1))];
    })
  );
}

export function isAuthed(req) {
  return verifyToken(parseCookies(req)[COOKIE]);
}

function secureFlag(req) {
  const host = (req && req.headers && req.headers.host) || "";
  return host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "" : " Secure;";
}

export function setSessionCookie(req, res, token) {
  res.setHeader(
    "Set-Cookie",
    `${COOKIE}=${token}; Path=/; HttpOnly;${secureFlag(req)} SameSite=Lax; Max-Age=${MAX_AGE}`
  );
}

export function clearSessionCookie(req, res) {
  res.setHeader("Set-Cookie", `${COOKIE}=; Path=/; HttpOnly;${secureFlag(req)} SameSite=Lax; Max-Age=0`);
}

export function requireAuth(req, res) {
  if (isAuthed(req)) return true;
  res.status(401).json({ error: "unauthorized" });
  return false;
}
