# Setup Instructions

This file is a quick setup reference.
For full details, see `README.md`.

## Fast path

```bash
npm install
npm run setup:env
npm run env:check
npm run db:push
npm run dev
```

## Required `.env` values

- `DATABASE_URL`
- `SESSION_SECRET`
- `JWT_SECRET`
- at least one AI key:
  - `OPENROUTER_KEY1`, or
  - `AI_INTEGRATIONS_OPENAI_API_KEY`

## One-command bootstrap

```bash
./setup.sh
```

This will install dependencies, create `.env` if missing, and run validation.

