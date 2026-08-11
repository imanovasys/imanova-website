# Imanova Systems Website

A Next.js (App Router) rewrite of the Stitch-designed Imanova Systems site, built to deploy on **Vercel**.

## Pages

- `/` — Home
- `/about-us/` — About Us
- `/our-services/` — Our Services
- `/our-approach/` — Our Approach
- `/resources/` — Resources and Documentation
- `/contact-us/` — Contact Us (working contact form, sends email via Zoho SMTP)

All pages share a `Header`/`Footer` and the "Sahara" warm-minimalism theme (the Resources page was originally a different, inconsistent design and has been restyled to match).

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000. The contact form needs `ZOHO_SMTP_USER` / `ZOHO_SMTP_PASSWORD` set (see below) to actually send email in dev — without them, submitting shows a clear "email service is not configured" error instead of failing silently. Copy `.env.example` to `.env.local` and fill in real values for local testing.

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

The Contact Us page posts to `app/api/contact/route.ts`, a Next.js API route that sends email by connecting directly to **Zoho Mail's SMTP server** (via `nodemailer`) as `info@imanovasys.com` — no third-party email API or account needed beyond Zoho itself.

Setup:

1. App passwords live in the **Zoho Accounts** panel, not Zoho Mail's own settings: sign in at https://accounts.zoho.com as `info@imanovasys.com`, go to **Security** → **Application-Specific Passwords**, and generate one (name it something like "Website Contact Form"). Don't use the account's normal login password — the app password is revocable independently and is what SMTP access requires. Copy it immediately; Zoho only shows it once.
2. In Vercel: Project Settings → Environment Variables, add:
   - `ZOHO_SMTP_USER` = `info@imanovasys.com`
   - `ZOHO_SMTP_PASSWORD` = the app password from step 1
   - `ZOHO_SMTP_HOST` — only needed if your Zoho account isn't on the default `.com` data center (use `smtp.zoho.eu`, `smtp.zoho.in`, etc. to match where your Zoho account was created).
3. Redeploy after adding the environment variables — Vercel doesn't pick up new env vars on already-running deployments.

The route also does basic server-side validation (required fields, email format) and a honeypot check (a hidden `bot-field` input humans never fill in) before sending. The message is sent from and to the same `info@imanovasys.com` mailbox, with `replyTo` set to whatever email the visitor entered, so replying from your inbox goes straight back to them.

## Fonts

EB Garamond and Manrope are self-hosted as local variable font files (`app/fonts/`, loaded via `next/font/local`) rather than fetched from Google Fonts at build time. That's a deliberate choice, not a style preference: `next/font/google`'s build-time fetch crashed on Vercel with `TypeError: Cannot read properties of null (reading '1')`, a fragility in fetching Google's font CSS during the build. Self-hosting removes the network dependency entirely.

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
