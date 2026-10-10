# Roadmap

## Publishing to GitHub (repo `portfolio-website`, site live on GitHub Pages)

Requirements: completely free, online permanently (no time limit), hosted at a github.io address.

- [x] Make the site exportable as static files — prerender `/` + subfolder base path
- [x] Add the automatic deploy workflow (`.github/workflows/deploy.yml`) and `.nojekyll`
- [x] Replace the generic README with a portfolio-specific one; rename the package
- [x] Verify: build produces one `index.html`, asset paths carry the prefix, preview unchanged
- [x] Connect the GitHub API connector for the project (linked, GITHUB_API_KEY available)
- [ ] User step: connect Git sync in the editor (+ menu → GitHub → Connect project) and create the `portfolio-website` repository — blocked on the user's GitHub login
