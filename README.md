# Krishna Sathvik — Portfolio (Neo-Minimal)

Modern, minimalist portfolio showcasing data engineering expertise and technical projects.
Built with clean HTML, Tailwind CSS, and vanilla JavaScript for optimal performance.

**Live:** https://www.krishnasathvik.com/

---

## ✨ Features

- Neo-minimal dark UI with glass cards and subtle glow
- Hero with resume summary + big cert badges
- Sections: **Skills → Experience → Projects → Education → Publications → Certifications → Contact**
- Projects use lightweight **tech badges** (shields.io) as cover images
- Accessible form with **EmailJS** (spam-honeypot + page URL)
- SEO & PWA basics:
  - `robots.txt`, `sitemap.xml`, `site.webmanifest`
  - App icons: `icon.svg`, `icon-192.png`, `icon-512.png`, `icon-maskable.png`, `favicon.ico`
  - 404 page
- No build step — just static files (perfect for Vercel/Netlify/GitHub Pages)

---

## 🗂️ Project Structure

```
ks-portfolio/
├─ css/
│  └─ main.css
├─ img/
│  ├─ certs/                 # (if you add cert images here)
│  └─ projects/              # optional project assets; tech badges are remote
├─ js/                        # (optional; may be empty)
├─ resume/
│  └─ Krishna_Sathvik_Resume.pdf
├─ 404.html
├─ favicon.ico
├─ icon.svg
├─ icon-192.png
├─ icon-512.png
├─ icon-maskable.png
├─ index.html
├─ LICENSE.txt
├─ package.json               # not required for deploy; present for local tooling
├─ robots.txt
├─ site.webmanifest
├─ sitemap.xml
├─ vercel.json                # headers + clean URLs
├─ webpack.common.js          # unused (kept for reference)
├─ webpack.config.dev.js      # unused
└─ webpack.config.prod.js     # unused
```

> **Note:** Webpack files are not used. There is no build step.

---

## 🚀 Getting Started (Local)

No build is needed. You can just open `index.html` or run a tiny static server:

```bash
# option 1: Python
python3 -m http.server 8080

# option 2: Node (http-server)
npx http-server -p 8080

# option 3: VS Code
# Install the "Live Server" extension and click "Go Live"
```

Visit [http://localhost:8080](http://localhost:8080)

---

## 📨 Contact Form (EmailJS)

This site uses **EmailJS** via browser SDK.

1. Create a service + template in EmailJS.
2. In `index.html`, replace the placeholders:

```js
emailjs.init({ publicKey: 'YOUR_PUBLIC_KEY' });
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
  name, email, subject, company, reason, message, page_url
});
```

3. Recommended template fields:
  - `name`, `email`, `subject`, `company`, `reason`, `message`, `page_url`
4. The form includes:
  - **Honeypot** field `website` (hidden)
  - `page_url` auto-filled to help you see where the message came from

---

## 🔎 SEO & PWA

- **robots.txt**
  ```txt
  User-agent: *
  Disallow:

  Sitemap: https://www.krishnasathvik.com/sitemap.xml
  ```
- **sitemap.xml** – update `lastmod` as needed.
- **site.webmanifest**
  ```json
  {
    "name": "Krishna Sathvik — Senior Data Engineer",
    "short_name": "KS Portfolio",
    "start_url": "/?utm_source=homescreen",
    "display": "standalone",
    "background_color": "#0B0F17",
    "theme_color": "#0B0F17",
    "icons": [
      { "src": "/icon.svg", "type": "image/svg+xml", "sizes": "any", "purpose": "any" },
      { "src": "/icon-192.png", "type": "image/png", "sizes": "192x192" },
      { "src": "/icon-512.png", "type": "image/png", "sizes": "512x512" },
      { "src": "/icon-maskable.png", "type": "image/png", "sizes": "512x512", "purpose": "maskable" }
    ]
  }
  ```

### Open Graph / Twitter (optional)

Add to `<head>` in `index.html`:

```html
<meta property="og:title" content="Krishna Sathvik — Senior Data Engineer" />
<meta property="og:description" content="Real-time, cost-efficient data platforms on Azure, Databricks, Kafka & Snowflake." />
<meta property="og:url" content="https://www.krishnasathvik.com/" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```

---

## 🌐 Deploying on Vercel

- **Framework Preset:** Other
- **Build Command:** *(leave empty)*
- **Output Directory:** *(leave empty — serve from repo root)*
- **Clean URLs:** enabled via `vercel.json`
- **Custom Domain:** point `www.krishnasathvik.com` to Vercel

`vercel.json` used:

```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/:file(icon.svg|icon-192.png|icon-512.png|icon-maskable.png|favicon.ico)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    }
  ]
}
```

---

## 🛠 Customization

- **Branding:** update the KS logo (favicon, icons).
- **Colors/Theme:** tweak in `css/main.css` and Tailwind config block in `<head>`.
- **Projects:** replace tech badges or add real screenshots in `img/projects/`.
- **Resume:** update the PDF in `/resume/` and the link in the hero CTA.
- **Sections:** remove/edit Publications/Certs as you like.

---

## 📜 License

This project is released under the **MIT License**. See `LICENSE.txt`.

---

## 🙌 Credits

- UI: Tailwind CSS
- Badges: shields.io
- Hosting: Vercel
- Email: EmailJS
- Icons: Generated from the KS mark (SVG/ICO/PNG variants)
