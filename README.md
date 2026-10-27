# BGR Technologies — Corporate Website (Static HTML5)

A complete, responsive corporate web application engineered for **BGR Technologies** (`https://www.bgrtechnologies.in`), a technology and digital growth company specializing in **Generative Engine Optimization (GEO) & AI Services**, Web and App Development, Digital Marketing, SEO, and Custom Software Solutions.

---

## 1. Brand & Contact Specifications

- **Brand Name:** BGR Technologies
- **Tagline:** Technology. Marketing. Growth.
- **Website Domain:** `https://www.bgrtechnologies.in`
- **Official Contact Email:** `info@bgrtechnologies.in`
- **Corporate Address:** 7th Floor, DSL Abacus IT Park, Survey Colony, Industrial Development Area, Uppal, Hyderabad, Telangana 500039
- **Phone:** Search-engine protected with `data-nosnippet` and base64 runtime decoding (`+91 77300 19169`)
- **Brand Colors:**
  - Primary Navy: `#071F3D`
  - Royal Blue: `#0866D9`
  - Cyan Accent: `#08B9EF`
  - Dark Body Text: `#172538`
  - Secondary Text: `#64748B`
  - Background (White): `#FFFFFF`
  - Alternate Background: `#F4F8FC`
- **Typography:** Plus Jakarta Sans / Inter modern sans-serif

---

## 2. Page Structure & Architecture

The application is built with 100% pure, static HTML5, CSS3, and modern vanilla ES6 JavaScript (zero backend dependency, zero database required):

| Page | File | Description |
|---|---|---|
| **1. Home** | `index.html` | Corporate team collaboration hero, featured GEO/AI services card, standard service cards, "Why Choose BGR", 4-step delivery approach, portfolio highlights, and CTA banner. |
| **2. About Us** | `about.html` | Authentic company overview, mission & vision, 6 core values grid, and operational collaboration philosophy. |
| **3. Services** | `services.html` | **Generative Engine Optimization (GEO) & AI Services highlighted FIRST**, followed by Web & App Development, Digital Marketing, SEO, Custom Software, and our 7-step delivery process. |
| **4. Portfolio** | `portfolio.html` | Interactive client-side category filters (`All Projects`, `Generative AI & GEO`, `Web Development`, `App Development`, `Digital Marketing`, `SEO`, `Software Solutions`) and modal case study dialogs. |
| **5. Contact Us** | `contact.html` | Clean, direct contact page prominently featuring `info@bgrtechnologies.in`, verified office location in Uppal, and search-engine protected telephone. |
| **6. Terms & Conditions** | `terms.html` | 19 legally structured sections with sticky Table of Contents and Indian jurisdiction context. |
| **7. Privacy Policy** | `privacy.html` | 16 comprehensive sections aligned with India's DPDP Act 2023 and GDPR principles. |
| **404 Page** | `404.html` | Custom branded error page with fast navigation routes. |

---

## 3. Search Engine Phone Number Protection

To strictly prevent web spiders, scrapers, and search engine crawlers from indexing the phone number:
1. The phone number is encoded at build time using Base64 (`data-enc="KzkxIDc3MzAwIDE5MTY5"` and `data-raw="KzkxNzczMDAxOTE2OQ=="`).
2. The container uses Google's standard `data-nosnippet` attribute, prohibiting search engines from reading or generating search snippets with the content.
3. The client script [`assets/js/main.js`](assets/js/main.js) decodes the number at runtime on DOM ready, rendering an accessible clickable link with `rel="nofollow noindex noopener"`.

---

## 4. How to Host & Preview

### Local Preview (XAMPP / Apache / Any Web Server)
Simply navigate to:
```
http://localhost/bgrtechnologies/
```
or open `index.html` directly in any web browser!

### Production Hosting
Because the site is 100% static HTML, it can be deployed directly to:
- Apache / Nginx web servers
- GitHub Pages
- Cloudflare Pages
- Netlify / Vercel
- AWS S3 + CloudFront
