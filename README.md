# Imanova Systems Website

A Next.js (App Router, static export) rewrite of the Stitch-designed Imanova Systems site, ready to deploy to Netlify's free tier.

## Pages

- `/` — Home
- `/about-us/` — About Us
- `/our-services/` — Our Services
- `/our-approach/` — Our Approach
- `/resources/` — Resources and Documentation
- `/contact-us/` — Contact Us (working contact form via Netlify Forms)

All pages share a `Header`/`Footer` and the "Sahara" warm-minimalism theme (the Resources page was originally a different, inconsistent design and has been restyled to match).

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Build

```bash
npm run build
```

This produces a fully static site in `out/` (`next.config.js` sets `output: 'export'`), so there is no server runtime, no serverless functions, and no cold starts — just static files. This keeps hosting comfortably within Netlify's free tier.

## Deploying to Netlify

`netlify.toml` is already configured:

```toml
[build]
  command = "npm run build"
  publish = "out"
```

Two ways to deploy:

1. **Git-based (recommended):** push this project to a GitHub/GitLab/Bitbucket repo, then in Netlify choose "Add new site" → "Import an existing project" and pick the repo. Netlify will pick up `netlify.toml` automatically.
2. **Drag and drop:** run `npm run build` locally, then drag the generated `out/` folder onto https://app.netlify.com/drop.

### Contact form → info@imanovasys.com

The Contact Us page uses **Netlify Forms** — no email provider, API key, or backend code required, and it works on the free tier (100 submissions/month).

After the first deploy, you must do **one manual step in the Netlify dashboard** (this can't be set via code):

1. Go to your site in Netlify → **Forms** → **Settings and usage** → **Form notifications**.
2. Add a notification → **Email notification**.
3. Set the "Email to notify" field to `info@imanovasys.com`.

After that, every submission from `/contact-us/` is emailed there automatically. Submissions also show up under Site → Forms in the dashboard.

`public/forms.html` is a hidden, unlinked page that exists purely so Netlify's build-time bot reliably detects the form fields (a documented workaround for frameworks like Next.js where the visible form is rendered by client-side JS).

## Logo

`public/logo-mark.svg` (also used as `app/icon.svg`, the favicon) is a **placeholder** hand-built SVG mark — a stylized Africa silhouette with a heartbeat pulse through it, in the site's sienna palette. It's a real, working, self-hosted asset (no more hotlinked images for the logo), but it's a placeholder pending a final brand mark. Swap the file content, or point `logoUrl` in `lib/site.ts` at a new file, when you have one.

## SEO

- **Metadata**: every page sets its own title, description, canonical URL, and Open Graph/Twitter card fields via the `pageMetadata()` helper in `lib/seo.ts`. Site-wide defaults (title template, keywords, robots directives) live in `app/layout.tsx`.
- **`app/sitemap.ts`** and **`app/robots.ts`** generate `sitemap.xml` and `robots.txt` at build time from the same route list.
- **`app/manifest.ts`** generates a web app manifest (`manifest.webmanifest`) referencing the logo.
- **Structured data**: `components/JsonLd.tsx` injects `Organization` and `WebSite` JSON-LD into every page (name, logo, email, Nairobi address, described services).
- **Domain assumption**: all of the above (canonical URLs, sitemap, JSON-LD, Open Graph URLs) assume the site will live at `https://imanovasys.com` — that's a guess based on the contact email's domain, set in one place: `siteConfig.url` in `lib/site.ts`. Update it there if the real domain differs, and rebuild.
- **No dynamic OG share image**: a branded Open Graph image (`app/opengraph-image.tsx`, using `next/og`) was built but had to be removed — a bug in the version of `@vercel/og` bundled with this Next.js release crashes at build time on Windows while loading its default font (`TypeError: Invalid URL`, a known upstream issue). Rather than ship something unverified, link previews currently fall back to text-only (title + description), which still works correctly. To add a real share image later: either confirm the bug doesn't reproduce on Netlify's Linux build and re-add the file, or generate a static PNG (e.g. 1200×630) by hand and reference it via `openGraph.images` / `twitter.images` in `app/layout.tsx`.

## Known follow-ups

- **Photography is still hotlinked** from the original Stitch/AI Studio preview URLs (`lh3.googleusercontent.com` / `googleusercontent.com`). These are convenient for now but aren't guaranteed to stay available long-term. Once you have final photography, drop it in `public/` and swap the `src` values.
- Social links (LinkedIn/GitHub) in the footer are placeholders (`linkedin.com`, `github.com`) — update once real company profile URLs exist.
- No analytics/cookie consent is wired up; add if needed.
