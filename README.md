# Verve

A small Next.js storefront for practicing a clean feature-based frontend. Product data, categories, comments, and reviews come from [DummyJSON](https://dummyjson.com). The cart is stored in the browser only.

## Pages

| Route | What it does |
| --- | --- |
| `/` | Home: hero, featured products, category highlights, DummyJSON comments |
| `/products` | Catalog with search and pagination |
| `/products/[id]` | Product details, DummyJSON reviews, add to cart |
| `/categories` | Category index |
| `/categories/[slug]` | Products in a category |
| `/cart` | Local cart (add, update quantity, remove) |
| `/about` | Project notes |

## Stack

- Next.js App Router, React, TypeScript
- Tailwind CSS and shadcn/ui
- TanStack Query + Axios for DummyJSON
- Zustand (persisted cart)
- next-themes for dark mode

## DummyJSON endpoints used

- `GET /products` and `GET /products/search`
- `GET /products/:id` (includes `reviews`)
- `GET /products/categories`
- `GET /products/category/:slug`
- `GET /comments`

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run start
```

## Project layout

```
src
├── app/(store)     # routes and layouts
├── components      # shared UI, layout, page sections
├── features        # products, categories, comments, cart
├── lib             # axios, query client, helpers
├── providers       # React Query, theme
├── config          # navigation
└── constants       # API paths
```

Keep API calls, query keys, and types inside the matching `features/*` folder. Shared layout and UI stay in `components`.

## Scope

This is intentionally a mini shop: browse, search, read reviews/comments, and use a local cart. There is no auth, checkout, or admin dashboard.
