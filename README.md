# Imanova Systems Website

A Next.js (App Router) rewrite of the Stitch-designed Imanova Systems site, built to deploy on **Vercel**.

## Pages

- `/` — Home
- `/about-us/` — About Us
- `/our-services/` — Our Services
- `/our-approach/` — Our Approach
- `/resources/` — Resources and Documentation
- `/contact-us/` — Contact Us (working contact form, sends email via Resend)

All pages share a `Header`/`Footer` and the "Sahara" warm-minimalism theme (the Resources page was originally a different, inconsistent design and has been restyled to match).

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000. The contact form needs `RESEND_API_KEY` set (see below) to actually send email in dev — without it, submitting shows a clear "email service is not configured" error instead of failing silently.

## Build

```bash
npm run build
```

This is a normal Next.js build (no static export) — the app runs on Vercel's Node runtime, which is what makes the `/api/contact` route possible.

## Deploying to Vercel

No config file is required — Vercel auto-detects Next.js and runs `next build` with sensible defaults.

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. In Vercel, "Add New..." → "Project" → import the repo. Framework preset "Next.js" is picked automatically.
3. Before the first deploy (or right after, then redeploy), add the environment variable described below.
4. Deploy. Vercel's free "Hobby" plan covers this site comfortably (it's almost entirely static pages plus one lightweight API route).

Security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`) are set via `next.config.js`'s `headers()`, so they apply on any host, not just Vercel.

### Contact form → info@imanovasys.com

The Contact Us page posts to `app/api/contact/route.ts`, a Next.js API route that sends email through **Resend**.

Setup:

1. Create a free account at https://resend.com.
2. Get an API key (Dashboard → API Keys) and add it to Vercel: Project Settings → Environment Variables → `RESEND_API_KEY`.
3. **Sender restriction to know about**: the route currently sends `from` Resend's shared testing address (`onboarding@resend.dev`), which only reliably delivers to the email address your Resend account was signed up with. For production delivery to `info@imanovasys.com`:
   - In Resend, go to Domains → Add Domain → add `imanovasys.com`, then add the DNS records Resend gives you (TXT/CNAME, at your domain registrar).
   - Once verified, change `FROM_ADDRESS` in `app/api/contact/route.ts` to something like `"Imanova Systems <contact@imanovasys.com>"`.
4. Redeploy after adding the environment variable — Vercel doesn't pick up new env vars on already-running deployments.

The route also does basic server-side validation (required fields, email format) and a honeypot check (a hidden `bot-field` input humans never fill in) before sending.

## Logo

`public/logo-mark.svg` (also used as `app/icon.svg`, the favicon) is a **placeholder** hand-built SVG mark — a stylized Africa silhouette with a heartbeat pulse through it, in the site's sienna palette. It's a real, working, self-hosted asset (no more hotlinked images for the logo), but it's a placeholder pending a final brand mark. Swap the file content, or point `logoUrl` in `lib/site.ts` at a new file, when you have one.

## SEO

- **Metadata**: every page sets its own title, description, canonical URL, and Open Graph/Twitter card fields via the `pageMetadata()` helper in `lib/seo.ts`. Site-wide defaults (title template, keywords, robots directives) live in `app/layout.tsx`.
- **`app/sitemap.ts`** and **`app/robots.ts`** generate `sitemap.xml` and `robots.txt` at build time from the same route list.
- **`app/manifest.ts`** generates a web app manifest (`manifest.webmanifest`) referencing the logo.
- **Structured data**: `components/JsonLd.tsx` injects `Organization` and `WebSite` JSON-LD into every page (name, logo, email, Nairobi address, described services).
- **Domain assumption**: all of the above (canonical URLs, sitemap, JSON-LD, Open Graph URLs) assume the site will live at `https://imanovasys.com` — that's a guess based on the contact email's domain, set in one place: `siteConfig.url` in `lib/site.ts`. Update it there if the real domain differs, and rebuild.
- **No dynamic OG share image**: a branded Open Graph image (`app/opengraph-image.tsx`, using `next/og`) was built but had to be removed — a bug in the version of `@vercel/og` bundled with this Next.js release crashes at build time on Windows while loading its default font (`TypeError: Invalid URL`, a known upstream issue, unrelated to Vercel itself). Link previews currently fall back to text-only (title + description), which still works correctly. To add a real share image later: either verify the bug doesn't reproduce in Vercel's Linux build environment and re-add the file, or generate a static PNG (e.g. 1200×630) by hand and reference it via `openGraph.images` / `twitter.images` in `app/layout.tsx`.

## Known follow-ups

- **Photography is still hotlinked** from the original Stitch/AI Studio preview URLs (`lh3.googleusercontent.com` / `googleusercontent.com`). These are convenient for now but aren't guaranteed to stay available long-term. Once you have final photography, drop it in `public/` and swap the `src` values.
- Social links (LinkedIn/GitHub) in the footer are placeholders (`linkedin.com`, `github.com`) — update once real company profile URLs exist.
- No analytics/cookie consent is wired up; add if needed.
