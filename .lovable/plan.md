# Publish to your GitHub, with the site live at a github.io address

Two parts. I prepare everything the repository needs; you do the one step only you can
do — authorising Lovable to reach your GitHub account. That step takes about a minute
and happens in the editor, not in chat.

## What you end up with

```text
github.com/<your-username>/portfolio-website     <- your code, auto-committed from here
<your-username>.github.io/portfolio-website      <- the live site, free hosting
```

Every change made in Lovable is committed to the repository automatically. Every change
you push from GitHub back syncs into the editor.

## Part A — what I build

1. **Make the site exportable as plain files.**
   The portfolio is one page with no login and no per-visitor data, so it can be rendered
   once at build time into a static `index.html` plus its assets. I enable build-time
   prerendering for `/` in `vite.config.ts`, with automatic route discovery switched off
   so only that one page is written.

2. **Teach it to live in a subfolder.**
   A repository's Pages site is served at `/<repo-name>/`, so asset links need that prefix.
   I add the prefix to the Vite base and the router basepath, both driven by an environment
   variable that only the GitHub build sets. Left unset — as in this editor and the Lovable
   preview — the site behaves exactly as it does now.

3. **Add the automatic deploy.**
   `.github/workflows/deploy.yml`: on every push, install with Bun (using the existing
   lockfile), build, and publish the static folder to GitHub Pages. A `.nojekyll` marker
   ships in `public/` so nothing gets filtered out on the way.

4. **Make the repository presentable.**
   Replace the generic "Welcome to your Lovable project" README with one that describes
   this portfolio: what it is, the live link, how to run it locally, where the text and
   contact details live, and the tech used. Rename the package from `tanstack_start_ts`
   to `portfolio-website`.

5. **Verify before handing over.**
   Run the build, confirm one `index.html` is produced and that asset paths carry the
   subfolder prefix, and confirm the editor preview is unchanged.

## Part B — what you do (about a minute, once)

1. In the editor, open the **+** menu at the bottom-left of the chat box → **GitHub** →
   **Connect project**.
2. Sign in to GitHub and approve the Lovable GitHub App.
3. Pick your account, then click **Create Repository** and name it `portfolio-website`.

The code pushes immediately, the deploy runs, and the site appears at
`<your-username>.github.io/portfolio-website`.

If the first deploy complains that Pages is not set up: open the repository's
**Settings → Pages → Source** and choose **GitHub Actions**, then re-run the workflow.

## Technical notes

- Prerendering is safe here: `src/routes/` contains only `index.tsx` and `__root.tsx`, no
  auth, cookies, or request data, so the captured HTML is identical for every visitor.
- `@lovable.dev/vite-tanstack-config` is at 2.25.3, which supports the prerender option.
- The static output is expected at `.output/public`; the first build confirms it and the
  workflow points at whatever directory the build actually writes.
- Base path comes from an environment variable read by `vite.config.ts` and
  `src/router.tsx`. If the repository is later renamed, only that value and the workflow
  need touching — or if you instead name a repository `<your-username>.github.io`, the
  site serves from the root and no prefix is needed at all.
- The workflow uses Bun because `bun.lock` is committed; `npm install` also works locally,
  matching the README.

## Staying as-is, per your choice

The placeholder identity — "Alex Morgan", `hello@your-domain.com`, and the Instagram /
Behance / LinkedIn links that go nowhere — is published unchanged. All of it sits in one
short list in `src/content/site.ts`, so swapping in your real name, email and links later
is a single edit that commits and redeploys on its own.
