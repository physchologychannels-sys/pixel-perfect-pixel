<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture rules

- The site prerenders `/` to static HTML for GitHub Pages: `pages`/`prerender` in `vite.config.ts`, base path from `VITE_BASE_PATH` (set only by `.github/workflows/deploy.yml`), router basepath assigned in `src/router.tsx` outside the object literal so the toolchain's literal-`basepath` source scan does not skip the route manifest. Static output lands in `.output/public/` (GitHub Actions) or `dist/client/` (sandbox); the deploy workflow picks whichever has `index.html`.
