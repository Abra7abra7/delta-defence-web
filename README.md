# Delta Defence - Next.js 16 Modern Web Application

A cutting-edge, high-performance web application for Delta Defence, a defense technology manufacturer, built with Next.js 16 and featuring a dark military-tech aesthetic.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router, Server Actions, TurboPack)
- **Language**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS v3.4+ with custom dark military theme
- **UI Components**: shadcn/ui (customized for tactical design)
- **Animations**: Framer Motion (scroll reveals, transitions, micro-interactions)
- **Internationalization**: next-intl (SK, EN, RU, DE)
- **Icons**: Lucide React
- **Fonts**: Inter + JetBrains Mono
- **Form Handling**: React Hook Form + Zod validation

## 🎨 Design Features

- **Tactical Precision Theme**: Dark gunmetal background (#0a0a0a) with tactical green (#00ff41) accents
- **Glassmorphism**: Frosted glass effects for navigation and cards
- **Grid Patterns**: Subtle background overlays for depth
- **Smooth Animations**: Framer Motion scroll-triggered reveals and transitions
- **Responsive Design**: Mobile-first approach with breakpoints for all devices

## 📁 Project Structure

```
/Users/abra/prompt-delta/
├── app/
│   ├── [locale]/           # Internationalized routes
│   │   ├── page.tsx        # Homepage
│   │   ├── o-nas/          # About Us
│   │   ├── vyroba/         # Production (KS-4)
│   │   ├── galeria/        # Gallery
│   │   └── kontakt/        # Contact
│   ├── globals.css         # Global styles with Tailwind
│   ├── layout.tsx          # Root layout
│   ├── sitemap.ts          # SEO sitemap
│   ├── robots.ts           # Robots.txt
│   └── manifest.ts         # PWA manifest
├── components/
│   ├── layout/             # Header, Footer, LanguageSwitcher
│   ├── home/               # Hero, StatsCounter, ServiceCarousel
│   ├── about/              # Timeline, Certifications
│   ├── production/         # KS4ModuleExplorer
│   ├── gallery/            # MasonryGrid, Lightbox
│   ├── contact/            # ContactForm, ContactInfo
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── data.ts             # Data parsing utilities
│   ├── assets.ts           # Cloudflare R2 asset helpers
│   └── utils.ts            # General utilities
├── messages/               # i18n translations (sk, en, ru, de)
├── types/                  # TypeScript type definitions
├── data.json               # Content data
└── middleware.ts           # i18n routing middleware
```

## 🌍 Internationalization

The site supports 4 languages:
- 🇸🇰 Slovak (sk) - Default
- 🇬🇧 English (en)
- 🇷🇺 Russian (ru)
- 🇩🇪 German (de) - Uses English content with German UI translations

**Note:** German (DE) locale uses English page content from `data.json` as a fallback, while all UI elements (navigation, buttons, forms) are fully translated to German in `messages/de.json`.

Routes are automatically prefixed with locale: `/sk`, `/en`, `/ru`, `/de`

## 🖼️ Key Features

### Homepage
- Full-screen hero with typewriter effect
- Animated stats counter (established 1993, NATO 2004)
- Service highlights carousel

### About Us (`/o-nas`)
- Interactive vertical timeline (1993-2019)
- Scroll-triggered animations
- Certification badges

### Production (`/vyroba`)
- **KS-4 Module Explorer**: Interactive component with glitch reveal effect
- 7 specialized modules: Filling, Milling, Dosing, Heating, Control, Quality, Dust
- Hover effects and technical specifications

### Gallery (`/galeria`)
- Responsive masonry grid layout
- Full-screen lightbox with keyboard navigation
- Lazy-loaded images from Cloudflare R2

### Contact (`/kontakt`)
- Multi-step form with validation (React Hook Form + Zod)
- Terminal-style UI design
- Contact information cards

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server with TurboPack
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The app will be available at `http://localhost:3000`

## 🎯 Environment Setup

Create a `.env.local` file (if needed for API keys):

```env
NEXT_PUBLIC_R2_BUCKET_URL=https://pub-15874316f260469095939a16da3bf7c7.r2.dev
```

## 📦 Assets

Images and media are hosted on Cloudflare R2:
- Base URL: `https://pub-15874316f260469095939a16da3bf7c7.r2.dev`
- Path: `/delta_defence_assets/`

## 🔧 Customization

### Colors
Edit `tailwind.config.ts` to customize the tactical color scheme:
- Primary: Tactical Green (`#00ff41`)
- Accent: Tactical Blue (`#00d9ff`)
- Background: Gunmetal (`#0a0a0a`)

### Fonts
- **UI Text**: Inter (variable font)
- **Technical/Mono**: JetBrains Mono

### Translations
Add or modify translations in `messages/*.json` files.

## 📈 Performance

- Server-side rendering with Next.js 16
- Optimized images with Next/Image
- Code splitting and lazy loading
- TurboPack for faster builds
- Minimal bundle size with tree-shaking

## 🔒 SEO

- Comprehensive meta tags
- Open Graph support
- Automatic sitemap generation
- robots.txt configuration
- Semantic HTML structure

## 📝 License

© 2025 DELTA DEFENCE, a.s. All rights reserved.

## 🤝 Contributing

This is a proprietary project for Delta Defence. For inquiries, contact info@deltadefence.sk

---

**Built with ⚡ by utilizing Next.js 16, TypeScript, and modern web technologies.**


