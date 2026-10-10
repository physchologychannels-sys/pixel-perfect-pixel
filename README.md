# ATELIER — Portfolio Website

The portfolio site of **Alex Morgan**, independent graphic designer — brand identity,
art direction and digital design. One scrolling page, no images to load: the hero
sculpture and every project artwork are drawn with code.

**Live site:** `https://<your-username>.github.io/portfolio-website/`

## Run it locally

You need Node.js (or Bun) installed.

```sh
npm install
npm run dev
```

Then open the local address it prints.

## Edit the content

Everything a visitor reads — the name, email, social links, projects, services and
process steps — lives in one file: [`src/content/site.ts`](src/content/site.ts).
Change it, commit, and the live site updates on its own.

## How it is hosted

The site is built once into plain static files and published to **GitHub Pages** by
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`.
Hosting is free and has no time limit.

## Built with

- TanStack Start (React 19, TypeScript)
- Tailwind CSS v4
- GitHub Pages + GitHub Actions
