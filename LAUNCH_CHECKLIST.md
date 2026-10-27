# BGR Technologies — Production Launch Checklist

Before deploying BGR Technologies to the live production domain (`https://www.bgrtechnologies.in`), complete the following verification steps:

---

## 1. Branding & Asset Verification
- [ ] Confirm the high-resolution logo (`assets/images/logo.png`) displays crisply across all screens.
- [ ] Confirm dark mode logo (`assets/images/logo-white.png`) maintains proper contrast on the `#071F3D` footer.
- [ ] Confirm favicon is rendering across desktop browsers, mobile home-screens, and bookmarks.
- [ ] Confirm hero corporate team photo (`assets/images/hero-team.jpg`) loads smoothly.

---

## 2. Business Information & Inquiries
- [ ] **Official Email:** Verify `info@bgrtechnologies.in` is active and receiving mail.
- [ ] **Official Address:** Verify `7th Floor, DSL Abacus IT Park, Survey Colony, Industrial Development Area, Uppal, Hyderabad, Telangana 500039` is displayed correctly across all pages and footer.
- [ ] **Direct Telephone:** Confirm the phone number (`7730019169`) is protected from search engine scraping via `data-nosnippet` and base64 runtime decoding (`safe-phone` class).
- [ ] **Terms & Conditions:** Replace `[Legal Entity: BGR Technologies Private Limited]` with final legal entity details if required.
- [ ] **Privacy Policy:** Confirm privacy provisions match your corporate policies.

---

## 3. Navigation & Cross-Device Responsiveness
- [ ] Verify all header navigation links (`Home`, `About Us`, `Services`, `Portfolio`, `Contact Us`) resolve cleanly to their corresponding `.html` files.
- [ ] Test mobile hamburger menu drawer on iOS and Android viewports (< 768px).
- [ ] In Services, verify **Generative Engine Optimization (GEO) & AI Services** is featured first with its badge.
- [ ] In Portfolio, test category filtering (`All Projects`, `Generative AI & GEO`, `Web Development`, `App Development`, `Digital Marketing`, `SEO`, `Software Solutions`).
- [ ] Test Case Study modal dialog open, focus trapping, and closing with Escape key and outside click.

---

## 4. Security, Headers & SEO
- [ ] Enforce SSL/HTTPS redirect on web server (Apache or Nginx).
- [ ] Confirm `sitemap.xml` lists all `.html` pages under `https://www.bgrtechnologies.in/`.
- [ ] Confirm `robots.txt` points to `https://www.bgrtechnologies.in/sitemap.xml`.
- [ ] Verify HTTP security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`) are active in production.
- [ ] Verify that no search engine crawler can parse the raw phone number string in static HTML source.
