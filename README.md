# Parisa Mostafavi | Personal Portfolio

A lightweight, responsive portfolio for customer analytics and decision science. Built with plain HTML, CSS, and JavaScript and designed for static hosting on GitHub Pages.

## Publish with GitHub Pages

1. Create the public repository `parisamstfv.github.io` in the `parisaMSTFV` account.
2. Copy the contents of this folder into the root of the repository, keeping the `assets/` directory.
3. Open **Settings > Pages** and select **Deploy from a branch**, `main`, `/(root)`. Save.
4. Visit `https://parisamstfv.github.io/` after the Pages deployment completes.

There is no build step, package manager, or external JavaScript dependency. All internal links and static asset paths are relative, so the site also works from a repository subpath.

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Content notes

- The featured repositories and profile links belong to the public `parisaMSTFV` GitHub portfolio.
- Claims about external validation or synthetic evidence are labeled according to the project documentation.
- The site contains no employer data, private analytics, internal schema names, passwords, or credentials.
- Project descriptions should be updated when linked repository results or evidence boundaries change.

## Project files

- `index.html` — semantic page content and metadata
- `assets/styles.css` — layout and responsive design
- `assets/site.js` — accessible project filtering and footer year
- `assets/favicon.svg` — vector favicon
- `assets/social-card.png` — social sharing image
- `.nojekyll` — publish raw static assets without Jekyll processing