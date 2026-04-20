# Morphed Studio — morphed.studio

Personal design studio site for James Clark. Static HTML + CSS, no build step.

## Stack
- Hand-written HTML, CSS, small amounts of vanilla JS
- Google Fonts: Space Grotesk + JetBrains Mono
- Hosted on Cloudflare Pages (deploy on push to `main`)

## Structure
```
index.html          Homepage
work.html           Case study index
services.html       Services + process
about.html          About / James
journal.html        Writing index
contact.html        Direct-email contact page
404.html            Not-found page

design-system.html  Internal reference (not linked in nav)
layout-system.html  Internal reference
motion-system.html  Internal reference
sitemap.html        Internal reference

assets/             CSS, images, logo files, OG image, favicons
```

## Local preview
Any static server works:
```
python3 -m http.server 8000
# or
npx serve
```
Then open `http://localhost:8000`.

## Deploy
Cloudflare Pages is wired to the `main` branch. Every push deploys automatically.
- Build command: *(none)*
- Output directory: `/`

## Edits
All copy is inline in the HTML files. Design tokens live in `assets/site.css` at the top (`:root` vars).
The footer is duplicated on each page — update all six when changing socials or copy.

## Contact
james@morphed.it
