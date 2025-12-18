# Platform

**Production-grade monorepo application built with Next.js and Turborepo.**

## Overview

Platform is a full-stack application built with modern web technologies, designed for scalability and developer experience. It uses a monorepo structure managed by [Turborepo](https://turborepo.com) and [Next.js](https://nextjs.org/) for the frontend and API layers.

### Philosophy

Platform is built around core principles:

- **Fast** — Quick to build, run, deploy, and iterate on
- **Type-Safe** — End-to-end type safety with TypeScript
- **Modern** — Latest stable features with healthy community support
- **Scalable** — Monorepo structure that scales with your team

## Features

Platform comes with a comprehensive set of features:

### Apps

- **Web** — Marketing website (port 3001)
- **App** — Main application with authentication and database integration (port 3000)
- **API** — RESTful API server with health checks and cron jobs (port 3002)
- **Email** — Email templates with React Email

### Packages

- **Authentication** — Powered by [Better Auth](https://www.better-auth.com)
- **Database** — Type-safe database access with [Kysely](https://kysely.dev) and [Neon](https://neon.tech) or [Planetscale](https://planetscale.com)
- **Design System** — Comprehensive component library built on [shadcn/ui](https://ui.shadcn.com) with dark mode support
- **Email** — Transactional emails via [Resend](https://resend.com)
- **Analytics** — Product analytics with [PostHog](https://posthog.com) and web analytics with [Google Analytics](https://developers.google.com/analytics)
- **Observability** — Error tracking and logging via PostHog
- **SEO** — Metadata management, sitemaps, and JSON-LD
- **AI** — AI integration utilities with OpenAI

## Getting Started

### Prerequisites

- Node.js 18+
- [pnpm](https://pnpm.io) (recommended) or npm/yarn/bun
- Database: [Neon](https://neon.tech) or [Planetscale](https://planetscale.com) PostgreSQL database
- Service accounts for:
  - [Better Auth](https://www.better-auth.com) (authentication)
  - [Resend](https://resend.com) (email)
  - [PostHog](https://posthog.com) (analytics)

### Installation

Clone the repository and install dependencies:

```sh
git clone <your-repo-url>
cd platform
pnpm install
```

### Setup

1. **Copy environment variables template:**
   ```sh
   cp .env.local.example .env.local
   ```

2. **Configure your environment variables** in `.env.local` at the root:
   - Database URLs (development and production)
   - Better Auth secret (generate with `npx @better-auth/cli secret`)
   - API keys for all service integrations
   - See [ENV.md](./ENV.md) for complete list

3. **Run database migrations:**
   ```sh
   pnpm migrate:dev
   ```

4. **Start the development server:**
   ```sh
   pnpm dev
   ```

This will start all apps:
- Web: http://localhost:3001
- App: http://localhost:3000
- API: http://localhost:3002

## Structure

Platform uses a monorepo structure managed by Turborepo:

```
platform/
├── apps/                    # Deployable applications
│   ├── web/                 # Marketing website (port 3001)
│   ├── app/                 # Main application (port 3000)
│   ├── api/                 # API server (port 3002)
│   └── email/               # Email templates
└── packages/                # Shared packages
    ├── ai/                  # AI integration utilities
    ├── analytics/            # Analytics providers (PostHog, Google Analytics)
    ├── auth/                 # Authentication (Better Auth)
    ├── database/             # Database access (Kysely + Planetscale PG/Neon)
    ├── design/        # UI component library (shadcn/ui)
    ├── email/                # Email templates (React Email)
    ├── next-config/          # Shared Next.js configuration
    ├── observability/        # Error tracking and logging
    ├── seo/                  # SEO utilities (metadata, sitemaps)
    └── typescript-config/    # Shared TypeScript configurations
```

Each app is self-contained and independently deployable. Packages are shared across apps for consistency and maintainability.

## Environment Variables

All environment variables are configured in a single `.env.local` file at the root of the monorepo. See [ENV.md](./ENV.md) for the complete list of required variables.

## Scripts

- `pnpm dev` - Start all apps in development mode
- `pnpm build` - Build all apps and packages
- `pnpm test` - Run tests across all packages
- `pnpm migrate:dev` - Run database migrations (development)
- `pnpm migrate:prod` - Run database migrations (production)
- `pnpm check` - Run type checking and linting
- `pnpm fix` - Auto-fix linting issues

## License

MIT
