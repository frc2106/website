# Team 2106 - The Junkyard Dogs - Website

## Making a contribution

1. Start on the development branch: `git switch development`, then `git pull --ff-only`.
2. Make one focused change and preview it locally.
3. Check wide and narrow screens. Try the navigation, links, and carousel controls, and check the browser console for errors.
4. Review `git diff` and `git status` before staging your changed files with `git add path/to/file`.
5. Commit with a descriptive message, such as `git commit -m "Improve robot card spacing"`.
6. Push with `git push`. Open a pull request from `development` to `main`, explaining the change and how you checked it.

## Testing and deployment

`development` is the working branch.

`main` is the production branch. Both Azure workflows deploy on pushes or merges to `main`. Pull requests targeting `main` create Azure preview environments, which are closed when the pull request closes. Pushing to `development` alone does not deploy production.
