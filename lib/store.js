import { put, get, list, del } from "@vercel/blob";

const PREFIX = "leads/";
const ACCESS = "private";

export const STATUSES = ["neu", "kontaktiert", "termin", "gewonnen", "verloren"];

export function newId() {
  const rand = Math.random().toString(36).slice(2, 8);
  return `${Date.now()}-${rand}`;
}

export async function saveLead(lead) {
  await put(`${PREFIX}${lead.id}.json`, JSON.stringify(lead), {
    access: ACCESS,
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
  return lead;
}

async function readJson(pathname) {
  const res = await get(pathname, { access: ACCESS, useCache: false });
  if (!res || res.statusCode !== 200 || !res.stream) return null;
  const text = await new Response(res.stream).text();
  return JSON.parse(text);
}

export async function getLead(id) {
  return readJson(`${PREFIX}${id}.json`);
}

export async function deleteLead(id) {
  await del(`${PREFIX}${id}.json`);
}

export async function listLeads() {
  const pathnames = [];
  let cursor;
  do {
    const page = await list({ prefix: PREFIX, limit: 1000, cursor });
    for (const b of page.blobs) pathnames.push(b.pathname);
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);

  const leads = [];
  const BATCH = 40;
  for (let i = 0; i < pathnames.length; i += BATCH) {
    const chunk = pathnames.slice(i, i + BATCH);
    const results = await Promise.all(
      chunk.map(async (p) => {
        try {
          return await readJson(p);
        } catch {
          return null;
        }
      })
    );
    for (const r of results) if (r) leads.push(r);
  }
  leads.sort((a, b) => (a.submitted_at < b.submitted_at ? 1 : -1));
  return leads;
}
