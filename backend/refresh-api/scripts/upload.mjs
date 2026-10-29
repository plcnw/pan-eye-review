import { readFile } from "node:fs/promises";
import { basename, resolve } from "node:path";

const API = "https://api.cloudflare.com/client/v4";
const SCRIPT_NAME = "pan-eye-refresh-api";

function oauthTokenFromToml(text) {
  const match = text.match(/^oauth_token\s*=\s*"([^"]+)"/m);
  if (!match) throw new Error("Wrangler OAuth token not found");
  return match[1];
}

async function cloudflare(path, token, options = {}) {
  const response = await fetch(`${API}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.success === false) {
    const message = payload.errors?.map((error) => error.message).join("; ");
    throw new Error(
      `Cloudflare API ${response.status}: ${message || "request failed"}`
    );
  }
  return payload.result;
}

const configPath = process.env.WRANGLER_CONFIG_FILE;
if (!configPath) {
  throw new Error("WRANGLER_CONFIG_FILE is required");
}

const root = resolve(import.meta.dirname, "..");
const token = oauthTokenFromToml(await readFile(configPath, "utf8"));
const accounts = await cloudflare("/accounts", token);
if (!Array.isArray(accounts) || accounts.length !== 1) {
  throw new Error(
    `Expected exactly one Cloudflare account, received ${accounts?.length || 0}`
  );
}
const accountId = accounts[0].id;

const form = new FormData();
form.append(
  "metadata",
  new Blob(
    [
      JSON.stringify({
        main_module: "index.js",
        compatibility_date: "2026-10-29",
      }),
    ],
    { type: "application/json" }
  )
);
form.append(
  "index.js",
  new Blob([await readFile(resolve(root, "src/index.js"), "utf8")], {
    type: "application/javascript+module",
  }),
  "index.js"
);

await cloudflare(
  `/accounts/${accountId}/workers/scripts/${SCRIPT_NAME}`,
  token,
  { method: "PUT", body: form }
);
await cloudflare(
  `/accounts/${accountId}/workers/scripts/${SCRIPT_NAME}/subdomain`,
  token,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ enabled: true, previews_enabled: false }),
  }
);

let workersDev = "";
try {
  const subdomain = await cloudflare(
    `/accounts/${accountId}/workers/subdomain`,
    token
  );
  if (subdomain?.subdomain) {
    workersDev = `https://${SCRIPT_NAME}.${subdomain.subdomain}.workers.dev`;
  }
} catch {
  // The script is still deployed even when workers.dev has not been enabled yet.
}

console.log(
  JSON.stringify(
    {
      deployed: true,
      accountId,
      script: SCRIPT_NAME,
      workersDev,
      source: basename(resolve(root, "src/index.js")),
    },
    null,
    2
  )
);
