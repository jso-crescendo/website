# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the website for **JSO Crescendo** (Jugendsinfonieorchester Crescendo), a Swiss youth symphony orchestra. It is a Next.js App Router application with Firebase backend integration.

## Commands

```bash
bun run dev        # Start dev server with Turbopack (port 3000)
bun run build      # Production build
bun run lint       # Biome lint + format check
bun run lint:fix   # Auto-fix Biome violations
bun run format     # Format all code with Biome
```

There are no tests configured in this project.

## Architecture

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · Firebase Admin · Bun · Biome

### App Router structure (`src/app/`)
Pages follow the Next.js App Router convention. Server Components are the default; client components are marked with `"use client"`. Firebase Admin SDK is used only in server-side code (enforced via `server-only`).

### Concert data (`src/data/concerts/`)
Concert data is stored as static TypeScript files organized by year (`2023/`, `2024/`, `2025/`, `2026/`). The `index.ts` aggregates all concerts and provides filtering utilities. New concerts are added here as data, not fetched from a CMS.

### Firebase backend (`src/firebase/`)
Handles contact form submissions, newsletter signups, and sponsorship signups via Firestore. These modules must only run server-side.

### Images (`src/images/`)
All images are `.webp` format. Use `scripts/image.js` (Sharp-based) to convert and optimize new images before adding them to the repo.

## Key Constraints

- **Tailwind only:** No arbitrary Tailwind values (`[...]`) and no custom class names outside the configured theme — enforced by convention (Biome has no Tailwind plugin).
- **Path alias:** Use `@/*` for imports from `src/`.
- **Security headers** are configured in `next.config.ts` including a strict CSP — changes to external resources may require updating the CSP.
- **WebP only:** `next.config.ts` restricts image formats to WebP.
- **German (de-CH):** All user-facing content is in Swiss German.
