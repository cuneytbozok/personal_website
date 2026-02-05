# cuneytbozok.com

Personal portfolio website built with Astro and Tailwind CSS, inspired by [Brittany Chiang's v4](https://brittanychiang.com).

## Tech Stack

- **Framework**: Astro 4
- **Styling**: Tailwind CSS
- **Deployment**: Cloudflare Pages

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploy to Cloudflare Pages

1. Push to GitHub
2. In Cloudflare Dashboard: Workers & Pages → Create application → Pages
3. Connect your repository
4. Use framework preset **Astro**:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: 18 or 20 (set `NODE_VERSION` env var if needed)

Or deploy via Wrangler:

```bash
npm run build
npx wrangler pages deploy dist
```

## Project Structure

- `src/components/` - Layout and section components
- `src/pages/` - Astro pages
- `src/content/projects/` - Project markdown (Content Collections)
- `src/config.ts` - Site configuration

## Attribution

Design inspired by [Brittany Chiang](https://brittanychiang.com).
