# Team 2106 - The Junkyard Dogs - Website

A static website built with HTML, CSS, JavaScript, and Bootstrap. No build step or package installation is required. Bootstrap loads from a CDN, so connect to the internet when previewing the full design.

## Making a contribution

1. Start on the development branch: `git switch development`, then `git pull --ff-only`.
2. Make one focused change and preview it locally.
3. Check wide and narrow screens. Try the navigation, links, and carousel controls, and check the browser console for errors.
4. Review `git diff` and `git status` before staging your changed files with `git add path/to/file`.
5. Commit with a descriptive message, such as `git commit -m "Improve robot card spacing"`.
6. Push with `git push`. Open a pull request from `development` to `main`, explaining the change and how you checked it.
7. Review and test the pull request, then merge it into `main` to publish the update to Azure.

## Testing and deployment

`development` is the working branch. Preview changes locally with `python3 -m http.server 8000` and open `http://localhost:8000`.

`main` is the production branch. Both Azure workflows deploy on pushes or merges to `main`. Pull requests targeting `main` create Azure preview environments, which are closed when the pull request closes. Pushing to `development` alone does not deploy production.

The new GitHub repository needs the following Actions secrets before Azure deployments and previews can succeed. Set each to the deployment token for its corresponding Azure Static Web App:

- `AZURE_STATIC_WEB_APPS_API_TOKEN_AMBITIOUS_PEBBLE_05D5D630F`
- `AZURE_STATIC_WEB_APPS_API_TOKEN_VICTORIOUS_DESERT_088F56A0F`

The old `master` branch is retained for reference; use `development` and `main` for new work.
