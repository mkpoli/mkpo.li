# Deploying & attaching mkpo.li

## Current state

- Worker name: `mkpo-li` (account: Mkpoli@mkpo.li's Account)
- Live preview: https://mkpo-li.mkpoli.workers.dev
- Deploy command: `bun run build && bunx wrangler deploy`

## Attach the mkpo.li root domain (replaces the current site)

Option A — dashboard (recommended, ~2 minutes):

1. Cloudflare dashboard → **Workers & Pages** → **mkpo-li** → **Settings** → **Domains & Routes** → **Add** → **Custom domain**.
2. Enter `mkpo.li` and confirm. Cloudflare creates the DNS record and TLS certificate automatically. If the root already has an A/AAAA/CNAME record pointing at the old site, Cloudflare will ask to replace it — confirm.
3. Wait a minute for the certificate, then check https://mkpo.li.
4. Optional: add `www.mkpo.li` the same way, or create a redirect rule www → root.

Option B — wrangler config: add to `wrangler.jsonc`

```jsonc
"routes": [{ "pattern": "mkpo.li", "custom_domain": true }]
```

then run `bunx wrangler deploy`. (Requires the zone to be on the same account; the current OAuth token already has `workers_routes` scope.)

## Rollback

Remove the custom domain from the Worker (Settings → Domains & Routes → delete), then restore the previous DNS record for the root. The workers.dev URL keeps serving either way.
