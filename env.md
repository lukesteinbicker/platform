# Environment Variables

**All environment variables are configured in a single `.env.local` file at the root of the monorepo.**

This file is automatically loaded by all Next.js apps (app, web, api) when running from the monorepo root.

## Setup

1. Copy `.env.local.example` to `.env.local` at the root:
   ```bash
   cp .env.local.example .env.local
   ```

2. Fill in your environment variables in `.env.local`

3. The `.env.local` file is already in `.gitignore` and will not be committed to git.

## Environment Variables

# DO NOT PUSH YOUR ACTUAL .ENV FILE #

# ============================================
# CORE
# ============================================
ANALYZE=
NEXT_RUNTIME=
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_WEB_URL=http://localhost:3001
NEXT_PUBLIC_API_URL=http://localhost:3002

# Database

# Development database (used by app)
DATABASE_URL_DEV=

# Production database (used by app)
DATABASE_URL_PROD=

# Development database admin (used for migrations: pnpm run migrate:dev)
DATABASE_URL_DEV_ADMIN=

# Production database admin (used for migrations: pnpm run migrate:prod)
DATABASE_URL_PROD_ADMIN=

# Authentication (Better Auth)
# Generate with npx @better-auth/cli secret
BETTER_AUTH_SECRET=

# Email (Resend)
RESEND_TOKEN=
RESEND_FROM=


# Analytics (Posthog)
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=
NEXT_PUBLIC_GA_MEASUREMENT_ID=

# ============================================
# ADDITIONAL SERVICES
# ============================================

# Payments (Polar)
POLAR_ACCESS_TOKEN=
POLAR_WEBHOOK_SECRET=
POLAR_SERVER=

# Webhooks (Svix)
SVIX_TOKEN=

# Notifications (Knock)
KNOCK_SECRET_API_KEY=
NEXT_PUBLIC_KNOCK_API_KEY=
NEXT_PUBLIC_KNOCK_FEED_CHANNEL_ID=

# Internationalization (Languine)
LANGUINE_PROJECT_ID=

# AI (OpenAI)
OPENAI_API_KEY=
