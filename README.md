# Self-Sustainable Smart Mobile Gardens

A static website for the **Self-Sustainable Smart Mobile Gardens** pilot at the
Czech Technical University in Prague (CTU), Karlovo náměstí courtyard.

Solar-powered, self-watering planter units on wheels — flexible, sustainable
greenery that requires no construction work. This site doubles as the landing
page that the QR codes on each cart point to.

## Local preview

It's plain HTML/CSS/JS — open `index.html` directly, or serve it:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

```
index.html              # single-page site
assets/css/styles.css   # CTU-institutional theme (dark blue + green accents)
assets/js/main.js       # mobile nav + active-section highlighting
assets/img/             # field-sketch (hero), courtyard render, social preview
.nojekyll               # tell GitHub Pages to skip Jekyll processing
```

## Deployment (GitHub Pages)

This repo is published with GitHub Pages from the `main` branch:

1. Push the repo to GitHub.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch.**
3. Branch: `main`, folder: `/ (root)`. Save.
4. The site goes live at `https://<user>.github.io/<repo>/` within a minute or two.

## Editing content

- **Copy** — all text lives directly in `index.html`; edit the relevant `<section>`.
- **Cart names** — the women-in-computing names are mentioned in the "The pilot"
  section (`#pilot`). Add the names there as they are confirmed.
- **Budget** — the total is the `.budget-figure` in the `#budget` section.
- **Images** — replace files in `assets/img/` (keep the same names, or update the
  `src` attributes). `og-image.jpg` is the social-media share preview; if the repo
  or username changes, update the absolute URLs in the `og:`/`twitter:` meta tags.

---

© 2026 Czech Technical University in Prague · Self-Sustainable Smart Mobile Gardens.
