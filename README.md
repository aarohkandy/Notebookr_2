# Notebookr

Notebookr is an **agentic writing app** for generating long-form documents section by section.

This project uses:
- React + TypeScript (frontend)
- Express + TypeScript (backend)
- Drizzle + Postgres (database)
- OpenRouter/OpenAI (AI generation)

## Local setup (environment-first)

### 1) Install dependencies

```bash
npm install
```

### 2) Create a local `.env`

```bash
npm run setup:env
```

This creates `.env` from `.env.example` and auto-generates secure values for:
- `SESSION_SECRET`
- `JWT_SECRET`

### 3) Fill required environment values in `.env`

Required:
- `DATABASE_URL`
- `SESSION_SECRET`
- `JWT_SECRET`
- At least one AI key:
  - `OPENROUTER_KEY1`, or
  - `AI_INTEGRATIONS_OPENAI_API_KEY`

### 4) Validate env values

```bash
npm run env:check
```

### 5) Push database schema

```bash
npm run db:push
```

### 6) Start app

```bash
npm run dev
```

App runs on `http://localhost:5000` by default.

---

## One-command setup option

You can also run:

```bash
./setup.sh
```

It will:
1. Install dependencies
2. Create `.env` if missing
3. Run env validation

---

## Scripts

- `npm run dev` - start local dev server
- `npm run build` - build frontend bundle
- `npm run check` - TypeScript check
- `npm run db:push` - apply Drizzle schema to DB
- `npm run setup:env` - generate local `.env` from template
- `npm run env:check` - validate required env variables

---

## Notes

- `.env` files are ignored by git.
- Stripe and Resend keys are optional unless you are testing billing/email flows.
