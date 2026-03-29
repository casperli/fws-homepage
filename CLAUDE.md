# FW Schwerzenbach Homepage

## Purpose

Public website for Feuerwehr Schwerzenbach (www.fw-schwerzenbach.ch). Static site generated with Hugo from Markdown files. Replaces the previous WIX website.

## Technology

- **Generator**: Hugo (Go binary, no npm/node dependencies)
- **Styling**: Custom CSS processed via Hugo Pipes (`assets/css/style.css`)
- **JavaScript**: Vanilla JS only for mobile menu toggle (`assets/js/main.js`)
- **Hosting**: GitHub Pages
- **Deploy**: GitHub Actions (`.github/workflows/deploy.yml`) — push to `main` triggers build + deploy

## Project Structure

```
hugo.yaml                    # Site config, navigation, metadata
content/                     # Markdown content (editors work here)
  _index.md                  # Homepage with welcome text
  aktuell/                   # News
  fahrzeuge/                 # Vehicle pages (frontmatter: image, vehicle_type, specs)
  einsaetze/                 # Incident reports by year
  jahresprogramm/            # Annual program (supports external calendar via calendar_url)
  archiv/                    # Archive
  insekten.md                # Info page (insect emergency service)
  kontakt.md                 # Contact page
  eindruecke.md              # Impressions / photo gallery
  impressum.md               # Legal notice
  datenschutz.md             # Privacy policy
layouts/                     # Hugo templates (rarely modified)
  _default/baseof.html       # Base layout (HTML skeleton, head, body)
  _default/single.html       # Default single page
  _default/list.html         # Default list view
  index.html                 # Homepage (hero images + content)
  fahrzeuge/list.html        # Vehicle overview (card grid)
  fahrzeuge/single.html      # Vehicle detail page (image, specs table, text)
  einsaetze/list.html        # Incidents overview
  jahresprogramm/single.html # Annual program (optional external calendar)
  partials/header.html       # Header with logo and navigation
  partials/footer.html       # Footer with copyright and legal links
assets/                      # Assets processed by Hugo Pipes (cache-busted)
  css/style.css              # All styling (fingerprinted)
  js/main.js                 # Mobile menu toggle (fingerprinted)
  images/logo.png            # Fire department logo
  images/favicon.png         # Favicon
  images/hero/               # Hero images for homepage (randomly rotated)
  images/fahrzeuge/          # Vehicle photos (auto-optimized)
  images/termine/            # Event photos (auto-optimized)
  images/einsatz.jpeg        # Operations page image
layouts/partials/image.html  # Reusable image optimization partial
static/                      # Static files (served as-is, no cache busting)
  fonts/                     # Web fonts (woff2)
  images/eindruecke/         # SVG/non-raster assets only
```

## Asset Strategy

- **`assets/`**: For files loaded via `resources.Get` in templates — produces content-hashed URLs for automatic cache busting. Used for CSS, JS, logo, favicon, hero images, and all content images (vehicles, events).
- **`static/`**: For files served as-is without cache busting. Used for fonts and SVGs only. Font files are referenced from CSS via relative paths (`url('../fonts/...')`).

## Image Optimization

All raster images (JPEG, PNG) live in `assets/images/` and are processed by Hugo's image pipeline via `layouts/partials/image.html`. This partial:

- **Resizes** each image to multiple widths (configurable per template call)
- **Converts** to WebP format (quality 80)
- **Outputs** `<img>` tags with `srcset`, `sizes`, `width`/`height`, `loading="lazy"`, and `decoding="async"`
- Processed images are cached in `resources/_gen/images/`

**Important**: Hugo cannot process AVIF as input. Always use JPEG or PNG source files. Hugo will convert them to WebP for output.

To add a new image: place it in the appropriate `assets/images/` subfolder (e.g. `assets/images/fahrzeuge/`) and reference it in content frontmatter as `images/fahrzeuge/filename.jpeg` (without leading `assets/`).

## Design

- **Header**: White background, logo left, horizontal navigation beside it, active link in red
- **Homepage**: 3 hero images side by side, welcome text below (heading uppercase)
- **Footer**: Dark grey, copyright left, legal links right
- **Color scheme**: Black/white with red (#c00) as accent color
- **Mobile**: Hamburger menu, hero images stacked vertically

## Navigation

Navigation is defined in `hugo.yaml` under `menus.main`. Order controlled by `weight` (ascending).

## External Calendar (Jahresprogramm)

The annual program template supports loading external calendar data. Set `calendar_url` in frontmatter and place a `<div id="external-calendar"></div>` in the content. Data is loaded client-side via `fetch` and rendered as a list.

## Local Development

```bash
hugo server
```

Starts a local server at `http://localhost:1313` with live reload.
