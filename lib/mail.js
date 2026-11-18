// E-Mail-Benachrichtigung bei neuen Anfragen (Resend REST API, keine Dependency).
// Konfiguration über Umgebungsvariablen:
//   RESEND_API_KEY  (Pflicht, sonst wird nichts gesendet)
//   MAIL_TO         (Standard: hi@chichiclub.co)
//   MAIL_FROM       (Standard: Chi Chi Club Academy <anfragen@glowandgrowth.net>)

const MAIL_TO = process.env.MAIL_TO || "hi@chichiclub.co";
const MAIL_FROM = process.env.MAIL_FROM || "Chi Chi Club Academy <anfragen@glowandgrowth.net>";

// Müssen zu den Funnel-Fragen in src/App.jsx und src/ModelFunnel.jsx passen
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
    "1-3months": "In 1 bis 3 Monaten",
    "3-6months": "In 3 bis 6 Monaten",
    exploring: "Informiert sich erst",
  },
  treatment: {
    microblading: "Microblading",
    freckles: "Freckles",
    lipblush: "Lip Blush",
  },
  modelType: {
    demo: "Demo-Modell bei Jette",
    trainee: "Modell bei Trainee",
  },
};

const esc = (v) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const label = (group, value) => LABELS[group]?.[value] || value || "";
const labels = (group, values) => (Array.isArray(values) ? values.map((v) => label(group, v)).join(", ") : "");

const formatDate = (iso) => {
  try {
    return new Intl.DateTimeFormat("de-DE", {
      timeZone: "Europe/Berlin",
      dateStyle: "long",
      timeStyle: "short",
    }).format(new Date(iso)) + " Uhr";
  } catch {
    return iso || "";
  }
};

const FONT_HEAD = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const FONT_BODY = "'Roboto Mono', 'SF Mono', Menlo, Consolas, 'Courier New', monospace";
const BEIGE = "#E8E4DA";
const IVORY = "#F8F7F3";

function section(title, rows) {
  const visible = rows.filter(([, v]) => v);
  if (!visible.length) return "";
  const body = visible
    .map(
      ([k, v, href]) => `
        <tr>
          <td style="padding:10px 0;border-top:1px solid ${BEIGE};font-family:${FONT_BODY};font-size:12px;line-height:1.5;color:#6b6b6b;width:38%;vertical-align:top;">${esc(k)}</td>
          <td style="padding:10px 0;border-top:1px solid ${BEIGE};font-family:${FONT_BODY};font-size:14px;line-height:1.5;color:#000000;vertical-align:top;word-break:break-word;">${
            href ? `<a href="${esc(href)}" style="color:#000000;text-decoration:underline;">${esc(v)}</a>` : esc(v)
          }</td>
        </tr>`
    )
    .join("");
  return `
    <tr>
      <td style="padding:28px 32px 0;">
        <p style="margin:0 0 10px;font-family:${FONT_BODY};font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#000000;">${esc(title)}</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">${body}</table>
      </td>
    </tr>`;
}

function layout({ kicker, headline, sections, submittedAt }) {
  return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(headline)}</title>
</head>
<body style="margin:0;padding:0;background:${BEIGE};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BEIGE};">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:${IVORY};border:1px solid #000000;">
        <tr>
          <td style="background:#000000;padding:22px 32px;">
            <span style="font-family:${FONT_HEAD};font-weight:900;font-size:20px;letter-spacing:0.02em;color:${IVORY};text-transform:uppercase;">Chi Chi Club</span>
            <span style="font-family:${FONT_BODY};font-size:11px;letter-spacing:0.14em;color:${IVORY};text-transform:uppercase;padding-left:10px;">Academy</span>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 32px 0;">
            <p style="margin:0 0 12px;font-family:${FONT_BODY};font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#000000;">${esc(kicker)}</p>
            <h1 style="margin:0;font-family:${FONT_HEAD};font-weight:700;font-size:26px;line-height:1.2;color:#000000;text-transform:uppercase;">${esc(headline)}</h1>
            <p style="margin:12px 0 0;font-family:${FONT_BODY};font-size:12px;line-height:1.5;color:#6b6b6b;">Eingegangen am ${esc(formatDate(submittedAt))}</p>
          </td>
        </tr>
        ${sections.join("")}
        <tr>
          <td style="padding:32px;">
            <p style="margin:0;padding-top:20px;border-top:1px solid #000000;font-family:${FONT_BODY};font-size:11px;line-height:1.6;color:#6b6b6b;">Du kannst direkt auf diese E-Mail antworten, die Antwort geht an die anfragende Person. Alle Anfragen findest du auch im Admin-Bereich der Academy-Seite.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

function textVersion(headline, groups) {
  const lines = [headline, ""];
  for (const [title, rows] of groups) {
    const visible = rows.filter(([, v]) => v);
    if (!visible.length) continue;
    lines.push(title.toUpperCase());
    for (const [k, v] of visible) lines.push(`${k}: ${v}`);
    lines.push("");
  }
  return lines.join("\n");
}

const sourceRows = (e) => [
  ["Quelle", e.utm_source],
  ["Medium", e.utm_medium],
  ["Kampagne", e.utm_campaign],
  ["Anzeige", e.utm_content],
  ["Keyword", e.utm_term],
  ["Seite", e.page_url],
  ["Herkunft", e.referrer],
];

const contactRows = (e) => [
  ["Name", e.name],
  ["E-Mail", e.email, `mailto:${e.email}`],
  ["Telefon", e.phone, e.phone ? `tel:${e.phone.replace(/[^\d+]/g, "")}` : ""],
];

async function send({ subject, html, text, replyTo }) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn("mail skipped: RESEND_API_KEY fehlt");
    return { ok: false, skipped: true };
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: MAIL_FROM, to: [MAIL_TO], subject, html, text, reply_to: replyTo }),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`resend ${res.status}: ${detail.slice(0, 300)}`);
  }
  return { ok: true, ...(await res.json().catch(() => ({}))) };
}

export function buildLeadMail(lead) {
  const groups = [
    ["Kontaktdaten", contactRows(lead)],
    [
      "Angaben",
      [
        ["Erfahrung", label("experience", lead.answers?.experience)],
        ["Ziel", label("goal", lead.answers?.goal)],
        ["Zeitplan", label("timeline", lead.answers?.timeline)],
      ],
    ],
    ["Herkunft der Anfrage", sourceRows(lead)],
  ];
  const headline = `Neue Anfrage von ${lead.name}`;
  return {
    subject: "Neue Academy Anfrage",
    replyTo: lead.email,
    html: layout({
      kicker: "Academy Anfrage",
      headline,
      submittedAt: lead.submitted_at,
      sections: groups.map(([t, r]) => section(t, r)),
    }),
    text: textVersion(headline, groups),
  };
}

export function buildModelMail(entry) {
  const groups = [
    ["Kontaktdaten", contactRows(entry)],
    [
      "Angaben",
      [
        ["Interesse an", labels("treatment", entry.interested)],
        ["Möglich", labels("treatment", entry.eligible)],
        ["Bereits behandelt", labels("treatment", entry.rejected)],
        ["Modell-Art", labels("modelType", entry.model_types)],
        ["Über 18", "Ja"],
        ["Einwilligung", "Erteilt"],
      ],
    ],
    ["Herkunft der Anfrage", sourceRows(entry)],
  ];
  const headline = `Modell-Bewerbung von ${entry.name}`;
  return {
    subject: "Modell Anfrage",
    replyTo: entry.email,
    html: layout({
      kicker: "Modell Anfrage",
      headline,
      submittedAt: entry.submitted_at,
      sections: groups.map(([t, r]) => section(t, r)),
    }),
    text: textVersion(headline, groups),
  };
}

// Mailfehler dürfen die Anfrage nie scheitern lassen: Der Lead ist bereits gespeichert.
async function notify(kind, mail) {
  try {
    return await send(mail);
  } catch (e) {
    console.error(`${kind} mail failed`, e);
    return { ok: false, error: String(e?.message || e) };
  }
}

export const notifyLead = (lead) => notify("lead", buildLeadMail(lead));
export const notifyModel = (entry) => notify("model", buildModelMail(entry));
