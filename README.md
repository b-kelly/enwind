# enwind

> _enwind_: v. to wind in or about

A simple Tailwind CSS v4 design system for my personal projects.

## Packages

| Package                                   | Description                                    |
| ----------------------------------------- | ---------------------------------------------- |
| [`@enwindui/enwind`](packages/enwind)     | The design system itself: theme tokens, utilities and component classes (pure CSS) |
| [`@enwindui/svelte`](packages/svelte)     | Svelte 5 components built on enwind, plus the docs site |

See each package's README for installation and usage.

## Development

This is an npm workspaces monorepo. From the repo root:

```bash
npm install
npm run dev      # docs site with hot reload
npm run build    # docs site → packages/svelte/build, library → packages/svelte/dist
npm run check    # svelte-check
npm test         # vitest
```

The docs site deploys to GitHub Pages automatically on every push to `main`.

## Versioning

Packages are versioned independently. Bump a package with `npm version`, targeting its workspace:

```bash
npm version patch -w @enwindui/enwind
npm version minor -w @enwindui/svelte
```

`@enwindui/svelte` depends on `@enwindui/enwind`. After bumping enwind, check that the range in `packages/svelte/package.json` still covers the new version. In 0.x, `^0.8.1` does **not** match `0.9.0`. If it doesn't, update it:

```bash
npm pkg set dependencies.@enwindui/enwind=^0.9.0 -w @enwindui/svelte
npm install
```

`npm version` does not create a git commit or tag when run against a workspace, so commit and tag the release yourself, using the existing tag format:

```bash
git commit -am "Publish"
git tag @enwindui/enwind@0.9.0
git push --follow-tags
```

## Publishing

Log in to npm (`npm login`) with access to the `@enwindui` org, then publish. If both packages changed, publish enwind first so the new svelte version can resolve its dependency:

```bash
npm run publish:enwind
npm run publish:svelte
```

`publish:svelte` rebuilds the library (`svelte-package` + `publint`) before publishing, so no separate build is needed.
