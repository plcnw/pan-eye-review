const OWNER = "plcnw";
const REPOSITORY = "pan-eye-review";
const WORKFLOW = "daily-review.yml";
const DEFAULT_ORIGINS = [
  "https://plcnw.github.io",
  "http://127.0.0.1:4173",
  "http://localhost:4173",
];

function allowedOrigins(env) {
  const configured = String(env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
  return configured.length ? configured : DEFAULT_ORIGINS;
}

function corsHeaders(request, env) {
  const origin = request.headers.get("Origin") || "";
  const allowed = allowedOrigins(env);
  if (!allowed.includes(origin)) return null;
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function jsonResponse(body, status, headers) {
  return Response.json(body, {
    status,
    headers: {
      ...headers,
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

function validScope(value) {
  return ["all", "article", "market"].includes(value);
}

function validDate(value) {
  if (!value) return true;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().startsWith(value);
}

export default {
  async fetch(request, env) {
    const cors = corsHeaders(request, env);
    if (!cors) {
      return jsonResponse({ error: "origin_not_allowed" }, 403, {});
    }

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }
    if (request.method !== "POST") {
      return jsonResponse({ error: "method_not_allowed" }, 405, cors);
    }

    const url = new URL(request.url);
    if (url.pathname !== "/refresh") {
      return jsonResponse({ error: "not_found" }, 404, cors);
    }
    if (!env.GITHUB_TOKEN) {
      return jsonResponse({ error: "github_token_not_configured" }, 503, cors);
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return jsonResponse({ error: "invalid_json" }, 400, cors);
    }

    const scope = String(payload?.scope || "");
    const date = String(payload?.date || "");
    if (!validScope(scope)) {
      return jsonResponse({ error: "invalid_scope" }, 400, cors);
    }
    if (!validDate(date)) {
      return jsonResponse({ error: "invalid_date" }, 400, cors);
    }

    const endpoint =
      `https://api.github.com/repos/${OWNER}/${REPOSITORY}` +
      `/actions/workflows/${WORKFLOW}/dispatches`;
    const githubResponse = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
        "User-Agent": "pan-eye-refresh-api",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      body: JSON.stringify({
        ref: env.WORKFLOW_REF || "main",
        inputs: {
          refresh_scope: scope,
          review_date: date,
        },
      }),
    });

    if (!githubResponse.ok) {
      console.error("GitHub workflow dispatch failed", {
        status: githubResponse.status,
        scope,
        date,
      });
      return jsonResponse(
        { error: "github_dispatch_failed", githubStatus: githubResponse.status },
        502,
        cors
      );
    }

    return jsonResponse(
      {
        accepted: true,
        scope,
        date: date || null,
        workflowUrl: `https://github.com/${OWNER}/${REPOSITORY}/actions/workflows/${WORKFLOW}`,
      },
      202,
      cors
    );
  },
};
