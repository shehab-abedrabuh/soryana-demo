# Soriana Physiotherapy & Rehabilitation

Arabic-first clinic website with a separately prerendered English page. Next.js, React, TypeScript, Tailwind, Radix/Shadcn components, Framer Motion and a lazy desktop Three.js scene.

## Run and build

Node 22.13 or later is required.

```sh
npm ci
npm run dev
npm run lint
npx tsc --noEmit
npm run build
npm start
```

Development and production preview use localhost:5173. Set PORT to change the preview port. The build exports to `out/`, then generates security headers from the exact inline-script hashes. Always run the complete build before deployment. The Sites manifest points at `out/`.

## Editing

- `data/business.ts`: business details, bilingual copy, services, body areas and gallery.
- `components/soriana-site.tsx`: sections and interactions.
- `app/globals.css`: responsive layout, typography and colors.
- `lib/seo.ts`: localized metadata and MedicalBusiness structured data.
- `public/images/soriana/`: real clinic images at 480/960/1440px widths.
- `IMAGE_SOURCES.md` and `image-sources.json`: asset provenance.

Arabic is `/`; English is `/en/`. Language switching loads a separately prerendered document with the correct language, direction and metadata. If changing the domain, update `business.origin`, `public/sitemap.xml` and `public/robots.txt` together.

## Booking and privacy

The form validates name, telephone and service, including Arabic digits. It prepares a WhatsApp link for the visitor to open and send. This is a booking request, not a confirmed appointment. No messages are sent automatically. The website does not store form data or use a database, analytics cookies or account credentials. WhatsApp and Google Maps handle data under their own policies. The Google map loads only after a visitor chooses it. Instagram and Facebook link to the supplied official profiles.

## Responsive layout and performance

Layouts adapt to phones, tablets, laptops and desktops. WebP images use responsive sources and lazy loading; fonts are local. The abstract 3D scene loads only on desktop with a fine pointer, sufficient CPU threads and no reduced-motion preference. It pauses rendering offscreen and in background tabs. Mobile and reduced-motion users see an SVG fallback. The real supervised rehabilitation video is silent and starts only on user request.

## Security

The deployed artifact consists of static HTML/CSS/JS/media with no server actions, database, uploads or custom authentication. Response headers include a hash-based script CSP, frame-ancestors none, nosniff, restrictive Permissions-Policy, Referrer-Policy and HSTS. Inline styles are permitted for animation and dialogs; scripts do not permit unsafe-inline or unsafe-eval. Source manifests, original local paths and secrets are not public assets. External new-tab links use noopener/noreferrer.

Dependency audit, lint, TypeScript, build and browser checks are development evidence, not a penetration test or a guarantee of absolute security. Keep dependencies patched, repeat audits and rebuild hashes after edits. Hosting must honor `out/_headers`; the local production preview applies these headers for verification. Keep development servers local.

## SEO and launch

Each language has a title, description, canonical, hreflang, Open Graph preview and structured clinic data. Sitemap and robots files are included. No opening hours, testimonials, qualifications, ratings or success statistics have been invented.

Indexing requires public access; private Sites cannot serve as publicly crawlable clinic websites. After a public launch, verify the production domain in Google Search Console, submit `/sitemap.xml`, inspect both language URLs and connect the verified Google Business Profile. No Search Console or Business Profile changes have been made. Rankings and indexing timing cannot be guaranteed. Real-world Core Web Vitals need field data after launch.

References: [Google SEO guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [OWASP CSP](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html), [Cloudflare response headers](https://developers.cloudflare.com/workers/static-assets/headers/).

## Content notes

All clinic photos are supplied Soriana media; original watermarks remain. The navigation S monogram is a design motif, not a reproduction of the official logo. Replace it when a clean logo file is available. The 3D scene is an abstract movement study, not an anatomical model. Service availability and treatment suitability are confirmed with the clinic.
