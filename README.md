# IndexStudio - Website Modern untuk UMKM Indonesia

Website profesional untuk agency pembuatan website yang targeting bisnis lokal Indonesia.

![Next.js](https://img.shields.io/badge/Next.js-16.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-cyan)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-pink)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Components**: shadcn/ui + Radix UI
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Testing**: Vitest + React Testing Library

## Features

- Modern, playful, and professional design
- Fully responsive for all devices
- Dark/Light mode support
- Smooth animations with Framer Motion
- SEO optimized with metadata
- Accessible components
- WhatsApp floating button
- Scroll progress indicator
- Sticky navigation

## Pages

1. **Home** - Hero, services, why choose us, templates, pricing, testimonials, FAQ, CTA
2. **Services** - All 7 service offerings with details
3. **Templates** - Demo showcase for cafe, barbershop, laundry, gym, fashion
4. **Pricing** - 3 pricing tiers: Starter, Business, Premium
5. **About** - Company story, mission, values
6. **Contact** - Contact form, WhatsApp CTA, social links, FAQ mini

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/indexstudio/indexstudio.git
cd indexstudio

# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── pricing/            # Pricing page
│   ├── services/            # Services page
│   ├── templates/           # Templates page
│   ├── globals.css          # Global styles
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── robots.ts            # Robots.txt
│   └── sitemap.ts           # Sitemap
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── layout/             # Layout components (Navbar, Footer, etc.)
│   ├── animations.tsx      # Animation components
│   └── theme-provider.tsx  # Theme provider
├── sections/               # Page sections
├── constants/              # App constants and data
├── lib/                    # Utility functions
├── tests/                  # Test files
└── public/                 # Static assets
```

## Environment Variables

Create `.env.local` in root directory:

```env
# WhatsApp number (without +)
NEXT_PUBLIC_WA_NUMBER=6281234567890

# Site URL
NEXT_PUBLIC_SITE_URL=https://indexstudio.id
```

## Testing

```bash
# Run tests
npm run test:run

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui
```

## Deployment to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

```bash
# Or use Vercel CLI
npx vercel --prod
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests in watch mode |
| `npm run test:run` | Run tests once |
| `npm run test:coverage` | Run tests with coverage |

## Design System

### Colors

- Primary: Indigo (#6366f1)
- Secondary: Purple (#a855f7)
- Accent: Orange (#f97316)
- Background: White/Dark Gray

### Typography

- Display: Poppins (600, 700, 800)
- Body: Outfit (400, 500, 600)

### Components

- Cards with glassmorphism effect
- Rounded corners (xl, 2xl, 3xl)
- Smooth hover transitions
- Floating shapes background

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - See LICENSE file for details.

---

Made with love in Indonesia 🇮🇩

## Credits

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)# IndexStudio
