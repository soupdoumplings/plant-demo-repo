# 🌱 Petals & Pots — Plant Shop

A full-stack plant e-commerce application built with Next.js 14 App Router, TypeScript, Tailwind CSS, and Supabase.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth
- **Storage:** Supabase Storage
- **Payments:** Stripe
- **AI:** OpenAI GPT-4o (plant diagnosis)
- **Email:** NodeMailer
- **Deployment:** Vercel

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/soupdoumplings/plant-demo-repo.git
cd plant-demo-repo

# 2. Install dependencies
npm install

# 3. Copy env file
cp .env.example .env.local

# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
plant-shop/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── (auth)/       # Login, Register, Password reset
│   │   ├── (shop)/       # Homepage, Products, Cart, Checkout
│   │   ├── (user)/       # Profile, Orders, Wishlist, Reminders
│   │   ├── (admin)/      # Admin dashboard
│   │   ├── (ai)/         # AI diagnosis
│   │   └── api/          # API route handlers
│   ├── components/       # React components
│   ├── context/          # Auth & Cart context providers
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility libraries
│   └── types/            # TypeScript type definitions
├── supabase/
│   ├── migrations/       # SQL migrations
│   └── seed.sql          # Database seed data
├── designs/              # Figma design exports
└── public/               # Static assets
```

## Branch Strategy

See [BRANCH_STRATEGY.md](./BRANCH_STRATEGY.md) for full details.

```
feature/<dev-name>/<SCRUM-XXX>-<slug>  →  main
```

## Team

- **Ashwin** — Lead Backend (APIs, DB, Auth, Payments)
- **Prajina** — Backend (Middleware, Page Structure)
- **Aman** — Full-Stack (Seed Data, Components, APIs)
- **Alisha** — Frontend (All Pages & UI Components)
