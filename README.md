# Ivan Cédric Portfolio

Modern, production-quality developer portfolio for KOUAME Ivan Cédric — Full Stack Developer.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (subtle animations)
- **Lucide React** (icons)

## Sections

1. **Hero** — Name, title, tagline, CTAs, social links
2. **About** — Concise bio, highlights
3. **Skills** — Categorized tech stack (no progress bars)
4. **Projects** — Everyfit.ci, Bara, GateKeeper, Algorithm Visualizer
5. **Experience** — NexTS(BF) internship
6. **Contact** — Email, GitHub, LinkedIn, resume download

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to see the portfolio.

## Customization

All portfolio content is centralized in `lib/data.ts`:
- Update `SOCIAL_LINKS` with real GitHub/LinkedIn/email
- Update `PROJECTS` with real GitHub repo URLs and live demo links
- Update `EXPERIENCES` with additional work history
- Replace `public/resume.pdf` with your actual resume

## Deployment

Deploy to Vercel in one command:

```bash
npx vercel --prod
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.
