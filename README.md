# SLEEPY - Underground Racing Lifestyle Brand

**Tagline:** "Undercover. Overpowered."
**Philosophy:** "Real builds only. Built different."

A Next.js e-commerce platform for custom automotive lifestyle apparel and accessories targeting universal sleeper car culture—Japanese, German, American—any build that's faster than it looks.

## Tech Stack

- **Framework:** Next.js 15.0.0 (App Router)
- **Language:** TypeScript 5.6.0
- **Styling:** Tailwind CSS 3.4.0
- **Payments:** Stripe (integration ready, pending account setup)
- **Font:** Eurostile Extended (Adobe Fonts/Typekit)
- **State Management:** React Context API (cart)

## Project Structure

```
sleepy-racing/
├── app/                    # Next.js App Router pages & API routes
│   ├── page.tsx           # Homepage
│   ├── about/             # Brand story & philosophy
│   ├── shop/              # Product catalog & customizer
│   ├── checkout/          # Stripe checkout flow
│   ├── order-confirmation/ # Post-purchase success page
│   ├── social/            # Social hub with links to all platforms
│   ├── affiliates/        # Affiliate application
│   ├── submit-content/    # Community content submission
│   ├── playlist/          # Spotify playlists (aurafarming)
│   ├── support/           # Customer support & FAQ
│   ├── terms/             # Terms of Service
│   ├── privacy/           # Privacy Policy
│   ├── api/               # API endpoints (affiliates, content, Stripe)
│   └── layout.tsx         # Root layout with nav & footer
├── components/            # React components
│   ├── Navigation.tsx     # Main nav with dropdown
│   ├── Cart.tsx           # Slide-out cart sidebar
│   ├── CartIcon.tsx       # Cart icon with badge
│   └── StripeCheckoutForm.tsx # Payment form
├── lib/                   # Utilities & data
│   ├── products/          # Product data & helpers
│   └── cart/              # Cart context & state
├── types/                 # TypeScript type definitions
├── public/                # Static assets
│   └── assets/            # Images, videos, etc.
└── data/                  # CSV storage for forms & orders
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Features

### Current Features

- **Product Catalog** - Browse apparel & accessories with filtering
- **Live Customization** - Real-time preview of color & logo combinations
- **Shopping Cart** - Full cart system with localStorage persistence
- **Stripe Checkout** - Complete payment flow (ready for API keys)
- **Order Management** - CSV-based order storage and confirmation
- **Made-to-Order** - Custom products (2-3 week delivery)
- **Social Hub** - Centralized page with links to all social platforms and community features
- **Affiliate Program** - Application system for brand ambassadors
- **Community Portal** - Content submission for customer photos/videos
- **Spotify Playlists** - Multiple curated aurafarming playlists
- **Support System** - 12 comprehensive FAQs + contact form
- **Legal Pages** - Professional Terms of Service & Privacy Policy

### Product Customization

Each product offers:
- **9 Color Options:** Red, Black, Dark Grey, Light Grey, White, Purple, Neon Green, Neon Blue, Neon Orange
- **5 Logo Variations:** Sleepy Head Logo, Text Logo, variants with clouds
- **4 Sizes:** S, M, L, XL (where applicable)

### Current Products

| Product | Base Price |
|---------|-----------|
| Hoodie | $65 |
| Crewneck | $55 |
| T-Shirt | $35 |
| Bandana | $15 |
| Sticker Pack | $10 |

## Design System

### Color Palette

```javascript
sleepy: {
  red: '#FF0000',
  black: '#000000',
  darkGrey: '#2A2A2A',
  lightGrey: '#D3D3D3',
  white: '#FFFFFF',
  purple: '#800080',
  neonGreen: '#39FF14',
  neonBlue: '#00D9FF',
  neonOrange: '#FF6600'
}
```

### Custom Components

- `.glossy-card` - GOAT-inspired glossy cards with gradient backgrounds
- `.sharp-btn` - Sharp-edged buttons with thin borders
- `.neon-text` - Multi-layered neon text effects
- `.neon-glow` - Color-specific neon glow effects

### Design Philosophy

- Dark mode only (black backgrounds)
- Sharp, angular UI (minimal rounded corners)
- Clean glossy cards (NO shadows or glows)
- Neon accent colors for highlights
- Minimal, modern layouts
- Bold typography with Eurostile Extended
- GOAT-inspired aesthetic

## Brand Identity

### Target Audience
Universal sleeper car culture—builders who prioritize real performance over cosmetic mods. Japanese, German, American—any build that's faster than it looks.

### Core Values
1. **Performance First** - Real mods, real gains, real respect
2. **Hidden Power** - Big power hiding in plain sight
3. **Underground Heritage** - Late-night meets, routes memorized, getting back to the roots

### Brand Philosophy
- **"Real builds only"** - No rice, no fake vents, no AutoZone stick-ons
- **Anti-rice, not anti-show** - Show is fine, but you better have go
- **Rice = cosmetic-only mods with zero performance gain**
- Real builds include: 2JZ swaps, turbo LS setups, built K-series, S54-powered builds, etc.

### Vibe
Underground racing nostalgia (early 2000s F&F, 2015 NFS energy) mixed with modern hypebeast marketing. Midnight runs, wrench time, dyno-proven power. Not anti-social media, but pro-authenticity.

## API Routes

### POST /api/affiliates
Submit affiliate application
- Saves to `data/affiliate-applications.csv`

### POST /api/content
Submit community content
- Saves to `data/content-submissions.csv`

### POST /api/create-payment-intent
Create Stripe payment intent for checkout
- Requires Stripe API keys in environment

### POST /api/save-order
Save order details after successful payment
- Saves to `data/orders.csv`

## Next Steps

### Immediate (Pending User Action)
1. **Set up custom email domain** - Required for Stripe account
2. **Create Stripe account** - Get publishable & secret keys
3. **Add Stripe keys to .env.local** - Enable payment processing
4. **Test checkout flow** - Use Stripe test card (4242...)

### Content Assets Needed
- Product photography (replace emoji placeholders)
- Hero video for homepage
- Brand logo files (from branding folder)
- Additional Spotify playlists (if desired)

### Future Enhancements
- Size guide modal for apparel
- Discount/promo code system
- Social media feed integration
- Email marketing integration
- Analytics & tracking setup

## Environment Variables

Create a `.env.local` file:

```env
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_key_here
STRIPE_SECRET_KEY=your_key_here

# Optional
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Contributing

This is a private brand project. For questions or support, contact the development team.

## License

All rights reserved. SLEEPY brand © 2024
