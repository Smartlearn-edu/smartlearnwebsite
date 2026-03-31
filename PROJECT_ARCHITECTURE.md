# Smartlearn Website - Architecture & Context

## Project Overview
This is a modern full-stack application built using a **Monorepo** structure managed by `pnpm` workspaces. It connects an API-driven frontend (React) with an Express backend, seamlessly sharing types and packages via internal libraries.

## Monorepo Structure
- **`artifacts/smart-learn/`** - The frontend web application.
- **`artifacts/api-server/`** - The Node.js Express backend API.
- **`lib/`** - Shared workspace packages.
  - `@workspace/api-zod` - Zod validation schemas shared between frontend and backend.
  - `@workspace/db` - Drizzle database connection and schema definitions.
- **`scripts/`** - Scripts for building, migrating, and deployment (e.g., `deploy.sh`).
- **`moodle-plugin/`** - Code linking to Moodle plugin structures related to Smartlearn.

## Detailed Tech Stack

### Frontend (`artifacts/smart-learn`)
- **Framework:** React 19 built on Vite.
- **Styling UI:** Tailwind CSS v4, utilizing Radix UI primitives for robust accessibility.
- **Animations:** Framer Motion (`framer-motion`) and Tailwind Animate (`tw-animate-css`).
- **Routing:** Lightweight routing using `wouter`.
- **Data & APIs:** Fetching and caching via `@tanstack/react-query`.
- **Forms:** `react-hook-form` with `zod` validation.
- **Icons:** `lucide-react` and `react-icons`.

### Backend (`artifacts/api-server`)
- **Web Server:** Express 5.
- **Database Management:** Drizzle ORM for strict type-safe SQL queries.
- **Logging:** Fast asynchronous logging with `pino` and `pino-http`.

## Git History & Setup Context
- The local repository resides in `/home/mohammad/Dev/Websites/smartlearnwebsite/`.
- It tracks `https://github.com/Smartlearn-edu/smartlearnwebsite.git` as its origin.
- As of March 2026, the local branch successfully merged divergent work from an external downloaded Replit instance (`Task-Discussion`). This folder is the primary, perfectly merged source of truth.
- There are currently local commits awaiting push to GitHub via GitHub Desktop.

## Development Notes
When building modifications:
1. Always maintain strict typing between the API and the Front-end using the shared `lib/` resources.
2. Rely heavily on Tailwind CSS v4, avoiding inline styles.
3. Utilize modern React features supported by React 19.
4. Database mutations should be modeled in `@workspace/db` via Drizzle and exposed strictly through the Express server routes.
