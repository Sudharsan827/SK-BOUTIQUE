# SK Boutique — Premium Fashion + Mehendi Website

Production-oriented React + Vite + TypeScript website for SK Boutique.

## Data
The supplied 2026 files are synthetic. They are copied unchanged into `public/data/` and loaded at runtime:
- `saree_sales_2026_synthetic.csv`
- `pre_pleated_sarees_2026.csv`
- `mehendi_services_2026.csv`
- `2026_analysis_summary.csv`

Public pages use the data only for category/collection inspiration. Transaction analytics are isolated in `/admin`.

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to Vercel
Import the project into Vercel. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.

## Replace images
Search for the image URLs in `src/components/CollectionCard.tsx`, `src/pages/Home.tsx`, `src/pages/PrePleated.tsx`, and `src/pages/Mehendi.tsx`. Replace them with optimized SK Boutique-owned images. Keep the same URL structure or move assets into `src/assets/`.

## Business configuration
Edit `src/data/business.ts` to update owner-approved contact details.
