# Verification report

Verified on 29 September 2026 against the static production export.

- Production build: passed (Arabic `/`, English `/en/`, generated 404).
- TypeScript: passed with `tsc --noEmit`.
- ESLint: passed across the project.
- npm audit: 0 known vulnerabilities across production and development dependencies at the time of the check. This does not prove the absence of undiscovered vulnerabilities.
- Browser engines: Chromium (Edge channel) and Playwright WebKit on Windows.
- Widths: 320, 375, 390, 430, 768, 1024, 1440, 1920 CSS pixels, both languages, both engines. No page overflow or broken loaded images in the checked states (32 combinations).
- Interactions: service tabs, body selector, gallery next/Escape, mobile menu, form validation, Arabic phone digits, generated WhatsApp URL, language navigation, video dialog and 15-second video metadata all passed.
- No browser console errors, uncaught page errors or failed HTTP responses during those tests.
- Desktop 3D canvas rendered; reduced-motion mode removed it.
- Local production preview applied the exported security headers except HTTPS upgrading, which is intentionally disabled on the HTTP loopback preview for WebKit compatibility.
- Canonical URLs, language alternates, metadata descriptions and MedicalBusiness schema checked.
- Static artifact: 6.36 MB total, no public source maps, no local Windows paths or placeholder text in generated HTML. Apple icon, Open Graph image, robots and sitemap present.

These are automated viewport tests, not tests on every physical Android/iPhone model or a security penetration test. External WhatsApp messages were not sent. Private publication is not search indexing; Search Console verification and submission require the owner's account after public access is enabled. Real-world performance and production security headers should be monitored after launch.
