# Shia Calendar Online

A public Next.js application for checking Hijri dates and important Shia Islamic events online.

[Live site](https://shia-calendar-online.vercel.app/) | [Repository](https://github.com/syed-neosoft-demos/shia-calendar-online)

## Features

- Monthly calendar with Gregorian dates and Hijri date labels.
- Shia Islamic events, martyrdoms, celebrations, and commemorations.
- Event details for important Ahlul Bayt occasions.
- Responsive interface built for desktop and mobile screens.
- SEO-ready metadata, canonical URL, sitemap, robots file, manifest, and social preview metadata.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- [Vercel Analytics](https://vercel.com/analytics)

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Project Structure

```text
app/
  components/      UI components for the calendar and events
  utils/           Calendar helpers, event data, and shared types
  layout.tsx       Global metadata, structured data, analytics, and fonts
  page.tsx         Main calendar experience
  robots.ts        Search crawler rules
  sitemap.ts       XML sitemap route
public/
  calendar.gif     App icon
```

## Author

Syed Hasnain Mehadi

- Live project: [shia-calendar-online.vercel.app](https://shia-calendar-online.vercel.app/)
- LinkedIn: [linkedin.com/in/syed-hasnain-mehadi](https://www.linkedin.com/in/syed-hasnain-mehadi)
