# Getting started

> Note: Use bun to install dependencies faster

## Basic setup

- Toast requires setup in the root layout.js (already done)
- All of the shadcn UI components are preloaded
- Styles and configuration files are initiated using shadcn CLI tool
- Lucide-react icons added
- All of the @radix-ui dependencies are added to package.json

## Augmentations

### MDX

[Installation guide](https://nextjs.org/docs/pages/building-your-application/configuring/mdx)

> Note: `mdx-components.tsx` is necessary, otherwise the `createContext` issue.

# Deployment

[Deployment guide (cloudflare)](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#deploy-via-the-cloudflare-dashboard)

```
bun install --save-dev @cloudflare/next-on-pages
```

## Variable setting

Add these two variable to install dependencies (on cloudflare) with bun.

```
SKIP_DEPENDENCY_INSTALL=true
UNSTABLE_PRE_BUILD=asdf plugin add bun && asdf install bun latest && asdf global bun latest && bun i
```
