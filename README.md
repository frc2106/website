# Team 2106 - The Junkyard Dogs - Website

## Making a contribution

1. Start on the development branch: `git switch development`, then `git pull --ff-only`.
2. Make one focused change and preview it locally.
3. Check wide and narrow screens. Try the navigation, links, and carousel controls, and check the browser console for errors.
4. Review `git diff` and `git status` before staging your changed files with `git add path/to/file`.
5. Commit with a descriptive message, such as `git commit -m "Improve robot card spacing"`.
6. Push with `git push`. Open a pull request from `development` to `main`, explaining the change and how you checked it.

## Testing and deployment

`development` is the working branch. Run `python3 tools/check_site.py` to check local asset paths. Preview with `python3 -m http.server 8000` and open `http://localhost:8000`.

`main` is the production branch. After testing, merge a pull request from `development` into `main` to publish automatically to GitHub Pages at https://frc2106.github.io/website/.

GitHub Actions checks local HTML and CSS references on pushes to either branch and on pull requests into `main`. Only `main` publishes the website. Pull requests do not create hosted preview sites; preview locally before merging.

GitHub Pages uses the repository's Actions authentication; Azure deployment tokens are no longer needed. In repository Settings → Pages, the publishing source is GitHub Actions.
